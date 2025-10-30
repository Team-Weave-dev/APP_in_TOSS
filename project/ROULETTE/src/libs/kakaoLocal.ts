import {
  PlaceSearchParams,
  KakaoPlaceSearchResponse,
  CachedSearchResult,
} from '@/types/kakao';

/**
 * Kakao Local API client with caching
 *
 * Implements TASK.md optimization strategy:
 * - sessionStorage caching (5min TTL) for 20-30% cost reduction
 * - Prevents duplicate API calls
 */

const KAKAO_LOCAL_API_BASE = 'https://dapi.kakao.com/v2/local/search/keyword.json';
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

/**
 * Generate cache key from search parameters
 */
function getCacheKey(params: PlaceSearchParams): string {
  const { query, x, y, radius } = params;
  return `kakao_search_${query}_${x || 'none'}_${y || 'none'}_${radius || 'none'}`;
}

/**
 * Get cached search result if valid
 */
function getCachedResult(cacheKey: string): KakaoPlaceSearchResponse | null {
  try {
    const cached = sessionStorage.getItem(cacheKey);
    if (!cached) return null;

    const cachedResult: CachedSearchResult = JSON.parse(cached);
    const now = Date.now();

    // Check if cache is still valid
    if (now - cachedResult.timestamp < cachedResult.ttl) {
      console.log('🎯 Using cached search result');
      return cachedResult.data;
    }

    // Cache expired, remove it
    sessionStorage.removeItem(cacheKey);
    return null;
  } catch (error) {
    console.error('Failed to read cache:', error);
    return null;
  }
}

/**
 * Save search result to cache
 */
function setCachedResult(cacheKey: string, data: KakaoPlaceSearchResponse): void {
  try {
    const cachedResult: CachedSearchResult = {
      data,
      timestamp: Date.now(),
      ttl: CACHE_TTL,
    };
    sessionStorage.setItem(cacheKey, JSON.stringify(cachedResult));
    console.log('💾 Cached search result');
  } catch (error) {
    console.error('Failed to save cache:', error);
  }
}

/**
 * Search places using Kakao Local API
 *
 * @param params - Search parameters
 * @returns Place search response
 *
 * @throws Error if API call fails or API key is not configured
 *
 * @example
 * const results = await searchPlaces({
 *   query: '김치찌개',
 *   x: '127.027610',
 *   y: '37.497942',
 *   radius: 500
 * });
 */
export async function searchPlaces(
  params: PlaceSearchParams
): Promise<KakaoPlaceSearchResponse> {
  const apiKey = process.env.NEXT_PUBLIC_KAKAO_REST_KEY;

  if (!apiKey) {
    throw new Error('NEXT_PUBLIC_KAKAO_REST_KEY is not configured');
  }

  // Check cache first
  const cacheKey = getCacheKey(params);
  const cached = getCachedResult(cacheKey);
  if (cached) {
    return cached;
  }

  // Build query string
  const queryParams = new URLSearchParams();
  queryParams.append('query', params.query);

  if (params.x) queryParams.append('x', params.x);
  if (params.y) queryParams.append('y', params.y);
  if (params.radius) queryParams.append('radius', params.radius.toString());
  if (params.page) queryParams.append('page', params.page.toString());
  if (params.size) queryParams.append('size', params.size.toString());

  const url = `${KAKAO_LOCAL_API_BASE}?${queryParams.toString()}`;

  console.log('🔍 Searching places:', params.query, `(${params.radius}m radius)`);

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `KakaoAK ${apiKey}`,
      },
    });

    if (!response.ok) {
      throw new Error(`Kakao API error: ${response.status} ${response.statusText}`);
    }

    const data: KakaoPlaceSearchResponse = await response.json();

    // Cache the result
    setCachedResult(cacheKey, data);

    console.log(`✅ Found ${data.documents.length} places`);

    return data;
  } catch (error) {
    console.error('Failed to search places:', error);
    throw error;
  }
}

/**
 * Clear search cache
 *
 * Useful for testing or when user wants fresh results
 */
export function clearSearchCache(): void {
  try {
    const keys = Object.keys(sessionStorage);
    const cacheKeys = keys.filter((key) => key.startsWith('kakao_search_'));

    cacheKeys.forEach((key) => sessionStorage.removeItem(key));

    console.log(`🗑️ Cleared ${cacheKeys.length} cached search results`);
  } catch (error) {
    console.error('Failed to clear cache:', error);
  }
}
