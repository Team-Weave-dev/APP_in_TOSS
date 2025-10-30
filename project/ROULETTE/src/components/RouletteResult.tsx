import { SpinResult } from '@/types/roulette';
import { useInterstitialAd } from '@/hooks/useInterstitialAd';
import { getThemeById } from '@/data/themes';
import { Button } from '@toss/tds-mobile';

interface RouletteResultProps {
  result: SpinResult | null;
  onNavigateToMap: () => void;
}

/**
 * Roulette result display component
 *
 * Shows spin result with menu item and provides map navigation.
 * For free spins, shows interstitial ad before navigation.
 * For ad spins, navigates directly (user already watched rewarded ad).
 *
 * @param result - Spin result to display
 * @param onNavigateToMap - Callback when user clicks map button
 *
 * @example
 * <RouletteResult result={result} onNavigateToMap={() => router.push('/map')} />
 */
export function RouletteResult({ result, onNavigateToMap }: RouletteResultProps) {
  const { loading: adLoading, showInterstitialAd } = useInterstitialAd();

  if (!result) return null;

  const theme = getThemeById(result.themeId);
  if (!theme) return null;

  const handleMapClick = () => {
    const navigateToMap = () => {
      // Navigate to map page with menu query parameter
      window.location.href = `/map?menu=${encodeURIComponent(result.menuItem.name)}`;
    };

    if (result.wasFreeSpin) {
      // Free spin: Show interstitial ad before navigation
      showInterstitialAd(() => {
        navigateToMap();
      });
    } else {
      // Ad spin: Direct navigation (already watched rewarded ad)
      navigateToMap();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
        {/* Result header */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">오늘의 메뉴는?</h2>
          <div
            className="inline-block px-4 py-2 rounded-full text-white font-bold text-sm"
            style={{ backgroundColor: theme.color }}
          >
            {theme.name}
          </div>
        </div>

        {/* Selected menu item */}
        <div className="text-center mb-8">
          <div className="text-5xl font-bold text-gray-900 mb-2">{result.menuItem.name}</div>
          <div className="text-gray-600">{result.menuItem.category}</div>
        </div>

        {/* Action buttons */}
        <div className="space-y-3">
          <Button
            onClick={handleMapClick}
            disabled={adLoading}
            loading={adLoading}
            color="primary"
            variant="fill"
            size="xlarge"
            display="block"
          >
            지도에서 찾기
          </Button>

          <Button
            onClick={() => window.location.reload()}
            color="light"
            variant="weak"
            size="large"
            display="block"
          >
            다시 돌리기
          </Button>
        </div>

        {/* Ad info */}
        {result.wasFreeSpin && (
          <p className="text-xs text-gray-500 text-center mt-4">
            지도로 이동하기 전에 짧은 광고가 표시됩니다
          </p>
        )}
      </div>
    </div>
  );
}
