import { useState, useCallback } from 'react';
import { RouletteTheme, SpinResult, ThemeType } from '@/types/roulette';
import { ROULETTE_THEMES } from '@/data/themes';

/**
 * Roulette spin logic hook
 *
 * Handles fair random selection using crypto.getRandomValues()
 * and rotation animation state management.
 *
 * @returns {Object} Roulette state and controls
 * @property {boolean} isSpinning - Whether roulette is currently spinning
 * @property {number} rotation - Current rotation angle in degrees
 * @property {SpinResult | null} result - Latest spin result
 * @property {Function} spin - Trigger a spin with given spin type
 *
 * @example
 * const { isSpinning, rotation, result, spin } = useRoulette();
 *
 * // Trigger spin
 * spin('free'); // or 'rewarded'
 */
export function useRoulette() {
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [result, setResult] = useState<SpinResult | null>(null);

  /**
   * Generate cryptographically secure random theme selection
   */
  const getRandomTheme = useCallback((): RouletteTheme => {
    const array = new Uint32Array(1);
    crypto.getRandomValues(array);
    const randomIndex = array[0] % ROULETTE_THEMES.length;
    return ROULETTE_THEMES[randomIndex];
  }, []);

  /**
   * Generate cryptographically secure random menu item from theme
   */
  const getRandomMenuItem = useCallback((theme: RouletteTheme) => {
    const array = new Uint32Array(1);
    crypto.getRandomValues(array);
    const randomIndex = array[0] % theme.menuItems.length;
    return theme.menuItems[randomIndex];
  }, []);

  /**
   * Calculate rotation angle for selected theme
   */
  const getRotationForTheme = useCallback((themeId: ThemeType): number => {
    const themeIndex = ROULETTE_THEMES.findIndex((t) => t.id === themeId);
    const degreesPerTheme = 360 / ROULETTE_THEMES.length; // 90° for 4 themes
    const baseRotation = themeIndex * degreesPerTheme;

    // Add extra rotations for dramatic effect (3-5 full spins)
    const array = new Uint32Array(1);
    crypto.getRandomValues(array);
    const extraSpins = 3 + (array[0] % 3); // 3-5 spins
    const totalRotation = 360 * extraSpins + baseRotation;

    return totalRotation;
  }, []);

  /**
   * Trigger roulette spin
   *
   * @param spinType - 'free' or 'rewarded' spin type
   */
  const spin = useCallback(
    (spinType: 'free' | 'rewarded') => {
      if (isSpinning) return;

      setIsSpinning(true);
      setResult(null);

      // Select random theme and menu item
      const selectedTheme = getRandomTheme();
      const selectedMenuItem = getRandomMenuItem(selectedTheme);

      // Calculate rotation
      const targetRotation = getRotationForTheme(selectedTheme.id);
      setRotation((prev) => prev + targetRotation);

      // Set result after animation (3 seconds)
      setTimeout(() => {
        const spinResult: SpinResult = {
          themeId: selectedTheme.id,
          menuItem: selectedMenuItem,
          spinTimestamp: Date.now(),
          wasFreeSpin: spinType === 'free',
        };
        setResult(spinResult);
        setIsSpinning(false);
      }, 3000);
    },
    [isSpinning, getRandomTheme, getRandomMenuItem, getRotationForTheme]
  );

  return {
    isSpinning,
    rotation,
    result,
    spin,
  };
}
