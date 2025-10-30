import { useState, useEffect, useCallback } from 'react';
import { GeolocationPosition } from '@/types/kakao';

/**
 * Geolocation hook with permission handling
 *
 * Requests user's current location and manages permission state.
 * Falls back to Seoul City Hall if permission is denied.
 *
 * @returns {Object} Geolocation state and controls
 * @property {GeolocationPosition | null} position - Current position
 * @property {boolean} loading - Whether position is being fetched
 * @property {Error | null} error - Geolocation error if any
 * @property {boolean} permissionDenied - Whether user denied permission
 * @property {Function} requestPosition - Manually request position
 *
 * @example
 * const { position, loading, error, permissionDenied, requestPosition } = useGeolocation();
 *
 * if (loading) return <div>위치를 확인하고 있어요</div>;
 * if (permissionDenied) return <div>위치 권한이 필요해요</div>;
 * if (position) console.log(position.lat, position.lng);
 */
export function useGeolocation() {
  const [position, setPosition] = useState<GeolocationPosition | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [permissionDenied, setPermissionDenied] = useState(false);

  // Seoul City Hall coordinates (fallback)
  const SEOUL_CITY_HALL: GeolocationPosition = {
    lat: 37.5665,
    lng: 126.978,
  };

  /**
   * Request current position
   */
  const requestPosition = useCallback(() => {
    if (!navigator.geolocation) {
      const err = new Error('Geolocation is not supported by this browser');
      setError(err);
      setPosition(SEOUL_CITY_HALL);
      console.warn(err.message, '- Using Seoul City Hall as fallback');
      return;
    }

    setLoading(true);
    setError(null);
    setPermissionDenied(false);

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const newPosition: GeolocationPosition = {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        };
        setPosition(newPosition);
        setLoading(false);
        console.log('📍 Got current position:', newPosition);
      },
      (err) => {
        setLoading(false);

        if (err.code === err.PERMISSION_DENIED) {
          setPermissionDenied(true);
          setPosition(SEOUL_CITY_HALL);
          console.warn('위치 권한이 거부되었어요. 서울 시청을 기준으로 표시해요.');
        } else {
          // Convert GeolocationPositionError to Error
          const error = new Error(err.message);
          setError(error);
          setPosition(SEOUL_CITY_HALL);
          console.error('Failed to get position:', err.message, '- Using Seoul City Hall');
        }
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
  }, []);

  // Auto-request position on mount
  useEffect(() => {
    requestPosition();
  }, [requestPosition]);

  return {
    position,
    loading,
    error,
    permissionDenied,
    requestPosition,
  };
}
