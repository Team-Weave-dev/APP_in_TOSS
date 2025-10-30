import { ROULETTE_THEMES } from '@/data/themes';

interface RouletteWheelProps {
  rotation: number;
  isSpinning: boolean;
}

/**
 * Roulette wheel visual component
 *
 * Displays 4 themed segments in a circular layout with rotation animation.
 * Each segment represents a food theme with distinct color.
 *
 * @param rotation - Current rotation angle in degrees
 * @param isSpinning - Whether wheel is currently spinning
 *
 * @example
 * <RouletteWheel rotation={rotation} isSpinning={isSpinning} />
 */
export function RouletteWheel({ rotation, isSpinning }: RouletteWheelProps) {
  return (
    <div className="relative w-80 h-80 mx-auto">
      {/* Pointer indicator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 z-10">
        <div className="w-0 h-0 border-l-[12px] border-r-[12px] border-t-[20px] border-l-transparent border-r-transparent border-t-gray-800" />
      </div>

      {/* Roulette wheel */}
      <div
        className="relative w-full h-full rounded-full overflow-hidden shadow-2xl transition-transform"
        style={{
          transform: `rotate(${rotation}deg)`,
          transitionDuration: isSpinning ? '3s' : '0s',
          transitionTimingFunction: isSpinning ? 'cubic-bezier(0.17, 0.67, 0.12, 0.99)' : 'linear',
        }}
      >
        {ROULETTE_THEMES.map((theme, index) => {
          const degreesPerTheme = 360 / ROULETTE_THEMES.length; // 90° for 4 themes
          const startAngle = index * degreesPerTheme;

          return (
            <div
              key={theme.id}
              className="absolute inset-0 flex items-center justify-center"
              style={{
                transform: `rotate(${startAngle}deg)`,
                clipPath: `polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 50% 100%)`,
                backgroundColor: theme.color,
              }}
            >
              <div
                className="absolute text-white font-bold text-xl"
                style={{
                  top: '30%',
                  left: '65%',
                  transform: 'rotate(45deg)',
                }}
              >
                {theme.name}
              </div>
            </div>
          );
        })}

        {/* Center circle */}
        <div className="absolute inset-0 m-auto w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center">
          <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xs">SPIN</span>
          </div>
        </div>
      </div>

      {/* Outer ring decoration */}
      <div className="absolute inset-0 rounded-full border-8 border-gray-800 pointer-events-none" />
    </div>
  );
}
