import { useCallback, useState } from 'react';
import { GoogleAdMob } from '@apps-in-toss/web-framework';

/**
 * Roulette ad integration hook
 *
 * Manages rewarded ad display for additional roulette spins.
 * Shows ad → user earns reward → grants spin permission.
 *
 * @returns {Object} Ad state and controls
 * @property {boolean} loading - Whether ad is loading
 * @property {Function} showAdForSpin - Show rewarded ad for spin
 *
 * @example
 * const { loading, showAdForSpin } = useRouletteAd();
 *
 * // When free spins exhausted
 * showAdForSpin(() => {
 *   // Ad completed, user earned spin
 *   spinRoulette();
 * });
 */
export function useRouletteAd() {
  const [loading, setLoading] = useState(false);

  /**
   * Show rewarded ad for spin
   *
   * @param onSpinGranted - Callback when user earns spin reward
   */
  const showAdForSpin = useCallback((onSpinGranted: () => void) => {
    const adGroupId = process.env.NEXT_PUBLIC_REWARDED_AD_GROUP_ID;

    // Check if AdMob is properly configured (not dev placeholder or missing)
    const isAdMobConfigured = adGroupId && !adGroupId.startsWith('dev_');

    // Fallback mode: Grant spin without ad if not configured or not supported
    if (!isAdMobConfigured || GoogleAdMob.loadAppsInTossAdMob.isSupported?.() === false) {
      // Silent fallback - grant spin without ad in dev mode
      onSpinGranted();
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
                case 'userEarnedReward':
                  // User watched ad, grant spin
                  onSpinGranted();
                  break;

                case 'dismissed':
                  // Ad closed
                  setLoading(false);
                  break;

                case 'failedToShow':
                  console.error('Failed to show ad');
                  setLoading(false);
                  break;
              }
            },
            onError: (err) => {
              console.error('Ad show error:', err);
              setLoading(false);
            },
          });
        }
      },
      onError: (err) => {
        console.error('Ad load error:', err);
        setLoading(false);
      },
    });
  }, []);

  return {
    loading,
    showAdForSpin,
  };
}
