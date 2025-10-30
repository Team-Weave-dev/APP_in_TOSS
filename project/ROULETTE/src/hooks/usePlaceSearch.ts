import { useState, useCallback } from 'react';
import { searchPlaces } from '@/libs/kakaoLocal';
import { KakaoPlace, SearchRadius, GeolocationPosition } from '@/types/kakao';

const MAX_SEARCH_COUNT = 5; // Session limit (TASK.md optimization)
const SESSION_KEY = 'place_search_count';

/**
 * Place search hook with progressive radius expansion
 *
 * Implements TASK.md optimization strategy:
 * - Progressive radius: 500m → 1km → 1.5km
 * - Session limit: 5 searches max
 * - Rewarded ad for 3km expansion
 *
 * @returns {Object} Search state and controls
 * @property {KakaoPlace[]} results - Search results
 * @property {boolean} loading - Whether search is in progress
 * @property {Error | null} error - Search error if any
 * @property {SearchRadius} currentRadius - Current search radius
 * @property {number} searchCount - Number of searches in session
 * @property {boolean} canSearch - Whether more searches are allowed
 * @property {boolean} canExpand - Whether radius can be expanded
 * @property {Function} search - Perform search
 * @property {Function} expandRadius - Expand search radius
 * @property {Function} expandWithAd - Expand to 3km after ad
 *
 * @example
 * const { results, search, expandRadius, canExpand } = usePlaceSearch();
 *
 * // Initial search
 * search('김치찌개', position);
 *
 * // Expand if no results
 * if (results.length === 0 && canExpand) {
 *   expandRadius('김치찌개', position);
 * }
 */
export function usePlaceSearch() {
  const [results, setResults] = useState<KakaoPlace[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [currentRadius, setCurrentRadius] = useState<SearchRadius>(SearchRadius.SMALL);
  const [searchCount, setSearchCount] = useState(() => {
    try {
      const stored = sessionStorage.getItem(SESSION_KEY);
      return stored ? parseInt(stored, 10) : 0;
    } catch {
      return 0;
    }
  });

  /**
   * Check if more searches are allowed
   */
  const canSearch = searchCount < MAX_SEARCH_COUNT;

  /**
   * Check if radius can be expanded
   */
  const canExpand = currentRadius < SearchRadius.LARGE;

  /**
   * Increment search count
   */
  const incrementSearchCount = useCallback(() => {
    const newCount = searchCount + 1;
    setSearchCount(newCount);
    try {
      sessionStorage.setItem(SESSION_KEY, newCount.toString());
    } catch (error) {
      console.error('Failed to save search count:', error);
    }
  }, [searchCount]);

  /**
   * Perform place search
   */
  const search = useCallback(
    async (query: string, position: GeolocationPosition) => {
      if (!canSearch) {
        setError(new Error('검색 횟수를 초과했어요. 페이지를 새로고침해주세요.'));
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const response = await searchPlaces({
          query,
          x: position.lng.toString(),
          y: position.lat.toString(),
          radius: currentRadius,
        });

        setResults(response.documents);
        incrementSearchCount();

        console.log(
          `🔍 Search complete: ${response.documents.length} results (${currentRadius}m radius)`
        );
      } catch (err) {
        const error = err instanceof Error ? err : new Error('검색에 실패했어요');
        setError(error);
        console.error('Search failed:', error);
      } finally {
        setLoading(false);
      }
    },
    [currentRadius, canSearch, incrementSearchCount]
  );

  /**
   * Expand search radius and re-search
   *
   * 500m → 1km → 1.5km
   */
  const expandRadius = useCallback(
    async (query: string, position: GeolocationPosition) => {
      if (!canExpand) {
        console.warn('Cannot expand radius further');
        return;
      }

      let newRadius: SearchRadius;

      switch (currentRadius) {
        case SearchRadius.SMALL:
          newRadius = SearchRadius.MEDIUM;
          break;
        case SearchRadius.MEDIUM:
          newRadius = SearchRadius.LARGE;
          break;
        default:
          return;
      }

      setCurrentRadius(newRadius);
      console.log(`📏 Expanding search radius to ${newRadius}m`);

      setLoading(true);
      setError(null);

      try {
        const response = await searchPlaces({
          query,
          x: position.lng.toString(),
          y: position.lat.toString(),
          radius: newRadius,
        });

        setResults(response.documents);
        incrementSearchCount();

        console.log(`🔍 Expanded search: ${response.documents.length} results`);
      } catch (err) {
        const error = err instanceof Error ? err : new Error('확대 검색에 실패했어요');
        setError(error);
        console.error('Expanded search failed:', error);
      } finally {
        setLoading(false);
      }
    },
    [currentRadius, canExpand, incrementSearchCount]
  );

  /**
   * Expand to 3km after rewarded ad
   *
   * Called after user watches rewarded ad
   */
  const expandWithAd = useCallback(
    async (query: string, position: GeolocationPosition) => {
      setCurrentRadius(SearchRadius.XLARGE);
      console.log(`📏 Expanding search radius to ${SearchRadius.XLARGE}m (rewarded)`);

      setLoading(true);
      setError(null);

      try {
        const response = await searchPlaces({
          query,
          x: position.lng.toString(),
          y: position.lat.toString(),
          radius: SearchRadius.XLARGE,
        });

        setResults(response.documents);
        incrementSearchCount();

        console.log(`🔍 Rewarded search: ${response.documents.length} results`);
      } catch (err) {
        const error = err instanceof Error ? err : new Error('확대 검색에 실패했어요');
        setError(error);
        console.error('Rewarded search failed:', error);
      } finally {
        setLoading(false);
      }
    },
    [incrementSearchCount]
  );

  /**
   * Reset search state
   */
  const reset = useCallback(() => {
    setResults([]);
    setError(null);
    setCurrentRadius(SearchRadius.SMALL);
  }, []);

  return {
    results,
    loading,
    error,
    currentRadius,
    searchCount,
    canSearch,
    canExpand,
    search,
    expandRadius,
    expandWithAd,
    reset,
  };
}
