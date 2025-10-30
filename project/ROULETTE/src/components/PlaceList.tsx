import { KakaoPlace, SearchRadius } from '@/types/kakao';
import { PlaceCard } from './PlaceCard';
import { Button, Loader } from '@toss/tds-mobile';

interface PlaceListProps {
  places: KakaoPlace[];
  loading: boolean;
  error: Error | null;
  currentRadius: SearchRadius;
  canExpand: boolean;
  onExpand?: () => void;
  onExpandWithAd?: () => void;
  onPlaceClick?: (place: KakaoPlace) => void;
}

/**
 * Place list component with expansion controls
 *
 * Displays search results and provides radius expansion options.
 * - Auto-expand: 500m → 1km → 1.5km
 * - Rewarded ad: 1.5km → 3km
 *
 * @param places - Search results to display
 * @param loading - Whether search is in progress
 * @param error - Search error if any
 * @param currentRadius - Current search radius
 * @param canExpand - Whether auto-expansion is available
 * @param onExpand - Callback for auto radius expansion
 * @param onExpandWithAd - Callback for ad-based expansion
 * @param onPlaceClick - Callback when place is clicked
 *
 * @example
 * <PlaceList
 *   places={results}
 *   loading={loading}
 *   currentRadius={currentRadius}
 *   canExpand={canExpand}
 *   onExpand={expandRadius}
 *   onExpandWithAd={expandWithAd}
 * />
 */
export function PlaceList({
  places,
  loading,
  error,
  currentRadius,
  canExpand,
  onExpand,
  onExpandWithAd,
  onPlaceClick,
}: PlaceListProps) {
  const radiusLabel = `${currentRadius}m`;

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="p-4 border-b border-gray-200 bg-white">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-lg text-gray-900">검색 결과</h2>
          <span className="text-sm text-gray-600">반경 {radiusLabel}</span>
        </div>
        {places.length > 0 && (
          <p className="text-sm text-gray-500 mt-1">{places.length}개의 장소를 찾았어요</p>
        )}
      </div>

      {/* Loading state */}
      {loading && (
        <div className="flex-1 flex items-center justify-center p-8">
          <Loader size="large" label="검색하고 있어요" />
        </div>
      )}

      {/* Error state */}
      {error && !loading && (
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="text-center">
            <p className="text-red-600 mb-2">❌ {error.message}</p>
            <Button
              onClick={() => window.location.reload()}
              color="primary"
              variant="weak"
              size="medium"
              display="inline"
            >
              새로고침
            </Button>
          </div>
        </div>
      )}

      {/* Empty state */}
      {!loading && !error && places.length === 0 && (
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="text-center">
            <p className="text-gray-600 mb-4">주변에 음식점을 찾지 못했어요</p>
            {canExpand && onExpand && (
              <Button
                onClick={onExpand}
                color="primary"
                variant="fill"
                size="large"
                display="inline"
              >
                더 넓은 범위 검색
              </Button>
            )}
            {!canExpand && onExpandWithAd && (
              <Button
                onClick={onExpandWithAd}
                color="dark"
                variant="fill"
                size="large"
                display="inline"
                style={
                  {
                    '--button-background-color': '#eab308', // yellow-500
                    '--button-color': '#1f2937', // gray-900
                  } as React.CSSProperties
                }
              >
                광고 보고 3km 범위 검색
              </Button>
            )}
          </div>
        </div>
      )}

      {/* Results list */}
      {!loading && !error && places.length > 0 && (
        <>
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {places.map((place) => (
              <PlaceCard key={place.id} place={place} onClick={() => onPlaceClick?.(place)} />
            ))}
          </div>

          {/* Expansion buttons */}
          <div className="p-4 border-t border-gray-200 bg-white space-y-2">
            {canExpand && onExpand && (
              <Button
                onClick={onExpand}
                color="light"
                variant="weak"
                size="large"
                display="block"
              >
                더 넓은 범위 검색 ({currentRadius}m → {getNextRadius(currentRadius)}m)
              </Button>
            )}
            {!canExpand && onExpandWithAd && currentRadius < SearchRadius.XLARGE && (
              <Button
                onClick={onExpandWithAd}
                color="dark"
                variant="fill"
                size="large"
                display="block"
                style={
                  {
                    '--button-background-color': '#eab308', // yellow-500
                    '--button-color': '#1f2937', // gray-900
                  } as React.CSSProperties
                }
              >
                광고 보고 3km 범위 검색
              </Button>
            )}
          </div>
        </>
      )}
    </div>
  );
}

/**
 * Get next radius for expansion button label
 */
function getNextRadius(current: SearchRadius): number {
  switch (current) {
    case SearchRadius.SMALL:
      return SearchRadius.MEDIUM;
    case SearchRadius.MEDIUM:
      return SearchRadius.LARGE;
    default:
      return SearchRadius.XLARGE;
  }
}
