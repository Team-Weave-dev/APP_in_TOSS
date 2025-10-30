import { Button } from '@toss/tds-mobile';
import { useRouletteSpinLimit } from '@/hooks/useRouletteSpinLimit';
import { useRouletteAd } from '@/hooks/useRouletteAd';

interface RouletteButtonProps {
  onSpin: (spinType: 'free' | 'rewarded') => void;
  disabled?: boolean;
}

/**
 * Roulette spin button with free/ad spin logic (TDS Mobile)
 *
 * Manages daily free spins and ad-based spins using TDS Mobile Button component.
 * - Has free spins: Consume free spin → spin roulette
 * - No free spins: Show rewarded ad → spin roulette
 *
 * @param onSpin - Callback when spin is triggered
 * @param disabled - Whether button is disabled (e.g., already spinning)
 *
 * @example
 * <RouletteButton onSpin={handleSpin} disabled={isSpinning} />
 */
export function RouletteButton({ onSpin, disabled = false }: RouletteButtonProps) {
  const { freeSpins, hasFreeSpins, consumeFreeSpin, trackAdSpin } = useRouletteSpinLimit();
  const { loading: adLoading, showAdForSpin } = useRouletteAd();

  const handleClick = () => {
    if (disabled || adLoading) return;

    if (hasFreeSpins) {
      // Use free spin
      consumeFreeSpin();
      onSpin('free');
    } else {
      // Show rewarded ad for spin
      showAdForSpin(() => {
        trackAdSpin();
        onSpin('rewarded');
      });
    }
  };

  const isDisabled = disabled || adLoading;

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Spin count indicator */}
      <div className="text-center">
        <div className="text-sm text-gray-600 mb-1">
          {hasFreeSpins ? '오늘 남은 무료 스핀' : '광고 시청으로 스핀하기'}
        </div>
        <div className="text-2xl font-bold text-blue-600">
          {hasFreeSpins ? `${freeSpins}회` : '∞'}
        </div>
      </div>

      {/* Spin button - TDS Mobile */}
      <Button
        onClick={handleClick}
        disabled={isDisabled}
        loading={adLoading}
        color={hasFreeSpins ? 'primary' : 'dark'}
        variant={hasFreeSpins ? 'fill' : 'weak'}
        size="xlarge"
        display="inline"
        style={
          !hasFreeSpins && !isDisabled
            ? ({
                '--button-background-color': '#eab308', // yellow-500
                '--button-color': '#1f2937', // gray-900
              } as React.CSSProperties)
            : undefined
        }
      >
        {adLoading
          ? '광고를 불러오고 있어요'
          : hasFreeSpins
          ? '무료 스핀'
          : '광고 보고 스핀'}
      </Button>

      {/* Ad spin explanation */}
      {!hasFreeSpins && (
        <p className="text-xs text-gray-500 text-center max-w-xs">
          광고를 시청하면 추가 스핀 기회를 얻을 수 있어요
        </p>
      )}
    </div>
  );
}
