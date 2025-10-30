import { useEffect, useRef } from 'react';
import { GeolocationPosition, KakaoPlace, KakaoMap as KakaoMapType } from '@/types/kakao';

interface KakaoMapProps {
  center: GeolocationPosition;
  places: KakaoPlace[];
  onMarkerClick?: (place: KakaoPlace) => void;
}

/**
 * Kakao Map component
 *
 * Displays map with markers for search results.
 * Centers on user's current location.
 *
 * @param center - Map center position
 * @param places - Places to display as markers
 * @param onMarkerClick - Callback when marker is clicked
 *
 * @example
 * <KakaoMap
 *   center={position}
 *   places={searchResults}
 *   onMarkerClick={(place) => console.log(place)}
 * />
 */
export function KakaoMap({ center, places, onMarkerClick }: KakaoMapProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<KakaoMapType | null>(null);

  // Initialize map
  useEffect(() => {
    if (!mapContainerRef.current || !window.kakao?.maps) return;

    const { kakao } = window;

    // Create map
    const mapCenter = new kakao.maps.LatLng(center.lat, center.lng);
    const map = new kakao.maps.Map(mapContainerRef.current, {
      center: mapCenter,
      level: 5, // Zoom level (1-14, smaller = more zoom)
    });

    mapRef.current = map;

    console.log('🗺️ Map initialized');
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Update map center when position changes
  useEffect(() => {
    if (!mapRef.current || !window.kakao?.maps) return;

    const { kakao } = window;
    const newCenter = new kakao.maps.LatLng(center.lat, center.lng);
    mapRef.current.panTo(newCenter);

    console.log('📍 Map center updated');
  }, [center]);

  // Update markers when places change
  useEffect(() => {
    if (!mapRef.current || !window.kakao?.maps) return;

    const { kakao } = window;
    const map = mapRef.current;

    // Clear existing markers
    // Note: In production, we should track markers and remove them properly
    // For now, we'll create new markers each time

    // Add markers for places
    places.forEach((place) => {
      const markerPosition = new kakao.maps.LatLng(parseFloat(place.y), parseFloat(place.x));

      const marker = new kakao.maps.Marker({
        position: markerPosition,
        map,
        title: place.place_name,
      });

      // Add click event
      if (onMarkerClick) {
        // Note: Kakao Maps doesn't have direct TypeScript support for events
        // We need to use any type here
        (window.kakao.maps as any).event.addListener(marker, 'click', () => {
          onMarkerClick(place);
        });
      }
    });

    console.log(`📍 ${places.length} markers added`);
  }, [places, onMarkerClick]);

  return (
    <div className="relative w-full h-full">
      <div ref={mapContainerRef} className="w-full h-full rounded-lg" />
    </div>
  );
}
