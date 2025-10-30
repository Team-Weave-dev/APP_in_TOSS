'use client';

import { useRoulette } from '@/hooks/useRoulette';
import { RouletteWheel } from '@/components/RouletteWheel';
import { RouletteButton } from '@/components/RouletteButton';
import { RouletteResult } from '@/components/RouletteResult';

/**
 * Main roulette page
 *
 * Integrates all roulette components:
 * - RouletteWheel: Visual spinning wheel
 * - RouletteButton: Spin trigger with free/ad logic
 * - RouletteResult: Result display with map navigation
 */
export default function HomePage() {
  const { isSpinning, rotation, result, spin } = useRoulette();

  const handleNavigateToMap = () => {
    // TODO: Implement map navigation
    // router.push('/map');
    console.log('Navigate to map with result:', result);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">오늘 뭐 먹지?</h1>
          <p className="text-gray-600">룰렛을 돌려서 오늘의 메뉴를 결정하세요!</p>
        </header>

        {/* Roulette wheel */}
        <div className="mb-12">
          <RouletteWheel rotation={rotation} isSpinning={isSpinning} />
        </div>

        {/* Spin button */}
        <div className="flex justify-center">
          <RouletteButton onSpin={spin} disabled={isSpinning} />
        </div>

        {/* Result modal */}
        <RouletteResult result={result} onNavigateToMap={handleNavigateToMap} />
      </div>
    </div>
  );
}
