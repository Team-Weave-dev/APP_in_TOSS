import { useState, useEffect } from 'react';

const DAILY_FREE_SPINS = 3;
const STORAGE_KEY = 'roulette_spin_limit';

interface SpinLimit {
  date: string;
  freeSpinsRemaining: number;
  adSpinsUsed: number;
}

/**
 * Daily free spin limit management hook
 *
 * Manages daily free spins (3 per day) with localStorage persistence.
 * Automatically resets at midnight.
 *
 * @returns {Object} Spin limit state and controls
 * @property {number} freeSpins - Remaining free spins for today
 * @property {boolean} hasFreeSpins - Whether free spins are available
 * @property {Function} consumeFreeSpin - Consume one free spin
 * @property {Function} trackAdSpin - Track ad-based spin (for analytics)
 *
 * @example
 * const { freeSpins, hasFreeSpins, consumeFreeSpin } = useRouletteSpinLimit();
 *
 * if (hasFreeSpins) {
 *   // Free spin available
 *   consumeFreeSpin();
 *   spinRoulette();
 * } else {
 *   // Show ad for spin
 *   showRewardedAd(() => spinRoulette());
 * }
 */
export function useRouletteSpinLimit() {
  const [freeSpins, setFreeSpins] = useState(DAILY_FREE_SPINS);
  const [loading, setLoading] = useState(true);

  // Initialize from localStorage
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];

    try {
      const stored = localStorage.getItem(STORAGE_KEY);

      if (stored) {
        const data: SpinLimit = JSON.parse(stored);

        if (data.date === today) {
          // Same day, restore state
          setFreeSpins(data.freeSpinsRemaining);
        } else {
          // New day, reset
          const newData: SpinLimit = {
            date: today,
            freeSpinsRemaining: DAILY_FREE_SPINS,
            adSpinsUsed: 0,
          };
          localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
          setFreeSpins(DAILY_FREE_SPINS);
        }
      } else {
        // First time, initialize
        const newData: SpinLimit = {
          date: today,
          freeSpinsRemaining: DAILY_FREE_SPINS,
          adSpinsUsed: 0,
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
      }
    } catch (error) {
      console.error('Failed to load spin limit:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  /**
   * Consume one free spin
   */
  const consumeFreeSpin = () => {
    if (freeSpins <= 0) {
      console.warn('No free spins remaining');
      return;
    }

    const today = new Date().toISOString().split('T')[0];
    const newRemaining = Math.max(0, freeSpins - 1);
    setFreeSpins(newRemaining);

    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      const data: SpinLimit = stored ? JSON.parse(stored) : {
        date: today,
        freeSpinsRemaining: DAILY_FREE_SPINS,
        adSpinsUsed: 0,
      };

      data.freeSpinsRemaining = newRemaining;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (error) {
      console.error('Failed to save spin limit:', error);
    }
  };

  /**
   * Track ad-based spin (for analytics)
   */
  const trackAdSpin = () => {
    const today = new Date().toISOString().split('T')[0];

    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      const data: SpinLimit = stored ? JSON.parse(stored) : {
        date: today,
        freeSpinsRemaining: DAILY_FREE_SPINS,
        adSpinsUsed: 0,
      };

      data.adSpinsUsed += 1;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (error) {
      console.error('Failed to track ad spin:', error);
    }
  };

  /**
   * Reset spins (for testing/admin)
   */
  const resetSpins = () => {
    const today = new Date().toISOString().split('T')[0];
    const newData: SpinLimit = {
      date: today,
      freeSpinsRemaining: DAILY_FREE_SPINS,
      adSpinsUsed: 0,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
    setFreeSpins(DAILY_FREE_SPINS);
  };

  return {
    freeSpins,
    hasFreeSpins: freeSpins > 0,
    loading,
    consumeFreeSpin,
    trackAdSpin,
    resetSpins,
  };
}
