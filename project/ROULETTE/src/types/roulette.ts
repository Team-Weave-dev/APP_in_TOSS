/**
 * Roulette theme and menu types
 */

/**
 * Food theme categories
 */
export type ThemeType = 'korean' | 'chinese' | 'japanese' | 'western';

/**
 * Menu item in a theme
 */
export interface MenuItem {
  id: string;
  name: string;
  category: string;
  icon?: string;
}

/**
 * Theme with menu items
 */
export interface RouletteTheme {
  id: ThemeType;
  name: string;
  color: string;
  menuItems: MenuItem[];
}

/**
 * Roulette spin result
 */
export interface SpinResult {
  themeId: ThemeType;
  menuItem: MenuItem;
  spinTimestamp: number;
  wasFreeSpin: boolean;
}

/**
 * Roulette state
 */
export interface RouletteState {
  isSpinning: boolean;
  currentRotation: number;
  result: SpinResult | null;
}

/**
 * Spin type
 */
export type SpinType = 'free' | 'rewarded';
