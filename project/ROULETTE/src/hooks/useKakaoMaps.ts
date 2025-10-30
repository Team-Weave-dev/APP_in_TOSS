import { useEffect, useState } from 'react';

/**
 * Kakao Maps SDK loader hook
 *
 * Dynamically loads Kakao Maps JavaScript SDK and manages initialization state.
 * Implements lazy loading strategy for 15-20% cost reduction (TASK.md).
 *
 * @returns {Object} SDK state
 * @property {boolean} isLoaded - Whether SDK is loaded and ready
 * @property {boolean} isLoading - Whether SDK is currently loading
 * @property {Error | null} error - Loading error if any
 *
 * @example
 * const { isLoaded, isLoading, error } = useKakaoMaps();
 *
 * if (isLoading) return <div>지도 로딩 중...</div>;
 * if (error) return <div>지도 로드 실패</div>;
 * if (!isLoaded) return null;
 *
 * // Use window.kakao.maps
 */
export function useKakaoMaps() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    // Check if SDK is already loaded
    if (window.kakao?.maps) {
      setIsLoaded(true);
      return;
    }

    // Check if script is already being loaded
    const existingScript = document.querySelector(
      'script[src*="dapi.kakao.com/v2/maps/sdk.js"]'
    );

    if (existingScript) {
      // Script exists but not loaded yet, wait for it
      setIsLoading(true);

      const handleLoad = () => {
        if (window.kakao?.maps) {
          window.kakao.maps.load(() => {
            setIsLoaded(true);
            setIsLoading(false);
          });
        }
      };

      existingScript.addEventListener('load', handleLoad);

      return () => {
        existingScript.removeEventListener('load', handleLoad);
      };
    }

    // Load SDK
    const apiKey = process.env.NEXT_PUBLIC_KAKAO_JS_KEY;

    if (!apiKey) {
      const err = new Error('NEXT_PUBLIC_KAKAO_JS_KEY is not configured');
      setError(err);
      console.error(err.message);
      return;
    }

    setIsLoading(true);

    const script = document.createElement('script');
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&autoload=false`;
    script.async = true;

    script.onload = () => {
      if (window.kakao?.maps) {
        window.kakao.maps.load(() => {
          console.log('✅ Kakao Maps SDK loaded');
          setIsLoaded(true);
          setIsLoading(false);
        });
      } else {
        const err = new Error('Kakao Maps SDK loaded but not available');
        setError(err);
        setIsLoading(false);
        console.error(err.message);
      }
    };

    script.onerror = () => {
      const err = new Error('Failed to load Kakao Maps SDK');
      setError(err);
      setIsLoading(false);
      console.error(err.message);
    };

    document.head.appendChild(script);

    return () => {
      // Cleanup: remove script on unmount
      // Note: In production, we might want to keep the script loaded
      // for better performance across page navigations
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return {
    isLoaded,
    isLoading,
    error,
  };
}
