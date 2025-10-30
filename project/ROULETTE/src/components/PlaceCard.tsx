import { KakaoPlace } from '@/types/kakao';

interface PlaceCardProps {
  place: KakaoPlace;
  onClick?: () => void;
}

/**
 * Place card component
 *
 * Displays individual place information in a card format.
 *
 * @param place - Place data to display
 * @param onClick - Callback when card is clicked
 *
 * @example
 * <PlaceCard
 *   place={place}
 *   onClick={() => console.log('Clicked:', place.place_name)}
 * />
 */
export function PlaceCard({ place, onClick }: PlaceCardProps) {
  const distance = place.distance ? `${Math.round(parseInt(place.distance))}m` : null;

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      // Default: open place URL
      window.open(place.place_url, '_blank');
    }
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow cursor-pointer border border-gray-100"
    >
      {/* Place name and distance */}
      <div className="flex items-start justify-between mb-2">
        <h3 className="font-bold text-lg text-gray-900 flex-1">{place.place_name}</h3>
        {distance && (
          <span className="text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full ml-2">
            {distance}
          </span>
        )}
      </div>

      {/* Category */}
      {place.category_name && (
        <p className="text-sm text-gray-500 mb-2">{place.category_name}</p>
      )}

      {/* Address */}
      <div className="space-y-1 mb-3">
        {place.road_address_name && (
          <p className="text-sm text-gray-700">📍 {place.road_address_name}</p>
        )}
        {!place.road_address_name && place.address_name && (
          <p className="text-sm text-gray-700">📍 {place.address_name}</p>
        )}
      </div>

      {/* Phone */}
      {place.phone && (
        <div className="flex items-center">
          <a
            href={`tel:${place.phone}`}
            className="text-sm text-blue-600 hover:text-blue-700 hover:underline"
            onClick={(e) => e.stopPropagation()}
          >
            📞 {place.phone}
          </a>
        </div>
      )}

      {/* View on Kakao Map link */}
      <div className="mt-3 pt-3 border-t border-gray-100">
        <a
          href={place.place_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-gray-500 hover:text-gray-700 hover:underline"
          onClick={(e) => e.stopPropagation()}
        >
          Kakao 지도에서 보기 →
        </a>
      </div>
    </div>
  );
}
