import { useCallback, useState } from 'react';
import { GoogleAdMob } from '@apps-in-toss/web-framework';

/**
 * Interstitial ad hook for screen transitions
 *
 * Shows interstitial ad when transitioning from roulette result to map.
 * Only shows for free spins (ad spins already showed rewarded ad).
 *
 * @returns {Object} Ad state and controls
 * @property {boolean} loading - Whether ad is loading
 * @property {Function} showInterstitialAd - Show interstitial ad
 *
 * @example
 * const { showInterstitialAd } = useInterstitialAd();
 *
 * // After roulette result (free spin only)
 * showInterstitialAd(() => {
 *   router.push('/map');
 * });
 */
export function useInterstitialAd() {
  const [loading, setLoading] = useState(false);

  /**
   * Show interstitial ad before navigation
   *
   * @param onDismiss - Callback when ad is dismissed
   */
  const showInterstitialAd = useCallback((onDismiss?: () => void) => {
    const adGroupId = process.env.NEXT_PUBLIC_INTERSTITIAL_AD_GROUP_ID;

    // Check if AdMob is properly configured (not dev placeholder or missing)
    const isAdMobConfigured = adGroupId && !adGroupId.startsWith('dev_');

    // Fallback mode: Skip ad if not configured or not supported
    if (!isAdMobConfigured || GoogleAdMob.loadAppsInTossAdMob.isSupported?.() === false) {
      // Silent fallback - proceed without ad in dev mode
      onDismiss?.();
      return;
    }

    setLoading(true);

    // Load ad
    GoogleAdMob.loadAppsInTossAdMob({
      options: {
        adGroupId,
      },
      onEvent: (event) => {
        if (event.type === 'loaded') {
          // Ad loaded, show it
          GoogleAdMob.showAppsInTossAdMob({
            options: {
              adGroupId,
            },
            onEvent: (showEvent) => {
              switch (showEvent.type) {
                case 'dismissed':
                  // Ad closed, proceed to navigation
                  setLoading(false);
                  onDismiss?.();
                  break;

                case 'failedToShow':
                  console.error('Failed to show ad');
                  setLoading(false);
                  onDismiss?.();
                  break;

                case 'impression':
                  // Ad impression recorded
                  break;
              }
            },
            onError: (err) => {
              console.error('Ad show error:', err);
              setLoading(false);
              onDismiss?.();
            },
          });
        }
      },
      onError: (err) => {
        console.error('Ad load error:', err);
        setLoading(false);
        onDismiss?.();
      },
    });
  }, []);

  return {
    loading,
    showInterstitialAd,
  };
}
