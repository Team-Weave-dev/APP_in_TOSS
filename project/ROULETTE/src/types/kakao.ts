/**
 * Kakao Maps & Local API types
 */

// ============================================
// Kakao Maps JavaScript SDK Types
// ============================================

/**
 * Global Kakao Maps namespace
 */
declare global {
  interface Window {
    kakao: {
      maps: {
        load: (callback: () => void) => void;
        LatLng: new (lat: number, lng: number) => KakaoLatLng;
        Map: new (container: HTMLElement, options: KakaoMapOptions) => KakaoMap;
        Marker: new (options: KakaoMarkerOptions) => KakaoMarker;
        MarkerImage: new (
          src: string,
          size: KakaoSize,
          options?: KakaoMarkerImageOptions
        ) => KakaoMarkerImage;
        Size: new (width: number, height: number) => KakaoSize;
      };
    };
  }
}

export interface KakaoLatLng {
  getLat(): number;
  getLng(): number;
}

export interface KakaoMapOptions {
  center: KakaoLatLng;
  level: number; // 1-14 (작을수록 확대)
}

export interface KakaoMap {
  setCenter(latlng: KakaoLatLng): void;
  getCenter(): KakaoLatLng;
  setLevel(level: number): void;
  getLevel(): number;
  panTo(latlng: KakaoLatLng): void;
}

export interface KakaoMarkerOptions {
  position: KakaoLatLng;
  map?: KakaoMap;
  image?: KakaoMarkerImage;
  title?: string;
}

export interface KakaoMarker {
  setMap(map: KakaoMap | null): void;
  getPosition(): KakaoLatLng;
  setPosition(position: KakaoLatLng): void;
}

export interface KakaoSize {
  width: number;
  height: number;
}

export interface KakaoMarkerImage {
  // Marker image object
}

export interface KakaoMarkerImageOptions {
  offset?: { x: number; y: number };
}

// ============================================
// Kakao Local REST API Types
// ============================================

/**
 * Place search parameters
 */
export interface PlaceSearchParams {
  query: string; // 검색 키워드 (메뉴명)
  x?: string; // 중심 경도
  y?: string; // 중심 위도
  radius?: number; // 검색 반경 (m), 0-20000
  page?: number; // 페이지 번호, 1-45
  size?: number; // 한 페이지 결과 수, 1-15
}

/**
 * Place document from Kakao Local API
 */
export interface KakaoPlace {
  id: string; // 장소 ID
  place_name: string; // 장소명
  category_name: string; // 카테고리명
  category_group_code: string; // 카테고리 그룹 코드
  category_group_name: string; // 카테고리 그룹명
  phone: string; // 전화번호
  address_name: string; // 지번 주소
  road_address_name: string; // 도로명 주소
  x: string; // 경도 (longitude)
  y: string; // 위도 (latitude)
  place_url: string; // 장소 상세 URL
  distance: string; // 중심 좌표까지의 거리 (m)
}

/**
 * Place search response metadata
 */
export interface KakaoPlaceMeta {
  total_count: number; // 검색된 총 문서 수
  pageable_count: number; // 페이징 가능한 문서 수
  is_end: boolean; // 마지막 페이지 여부
  same_name: {
    region: string[];
    keyword: string;
    selected_region: string;
  };
}

/**
 * Place search response
 */
export interface KakaoPlaceSearchResponse {
  meta: KakaoPlaceMeta;
  documents: KakaoPlace[];
}

// ============================================
// Application Types
// ============================================

/**
 * Geolocation position
 */
export interface GeolocationPosition {
  lat: number;
  lng: number;
}

/**
 * Search radius options (in meters)
 */
export enum SearchRadius {
  SMALL = 500, // 500m
  MEDIUM = 1000, // 1km
  LARGE = 1500, // 1.5km
  XLARGE = 3000, // 3km (rewarded ad required)
}

/**
 * Cached search result
 */
export interface CachedSearchResult {
  data: KakaoPlaceSearchResponse;
  timestamp: number;
  ttl: number; // Time to live in milliseconds
}

/**
 * Search state
 */
export interface SearchState {
  loading: boolean;
  error: Error | null;
  results: KakaoPlace[];
  hasMore: boolean;
  currentRadius: SearchRadius;
  searchCount: number;
}
