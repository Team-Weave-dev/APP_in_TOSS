import { RouletteTheme } from '@/types/roulette';

/**
 * Predefined roulette themes with menu items
 *
 * 4 themes × 6 menus each = 24 total menu options
 */
export const ROULETTE_THEMES: RouletteTheme[] = [
  {
    id: 'korean',
    name: '한식',
    color: '#FF6B6B',
    menuItems: [
      { id: 'korean-1', name: '김치찌개', category: '한식' },
      { id: 'korean-2', name: '된장찌개', category: '한식' },
      { id: 'korean-3', name: '비빔밥', category: '한식' },
      { id: 'korean-4', name: '불고기', category: '한식' },
      { id: 'korean-5', name: '삼겹살', category: '한식' },
      { id: 'korean-6', name: '냉면', category: '한식' },
    ],
  },
  {
    id: 'chinese',
    name: '중식',
    color: '#4ECDC4',
    menuItems: [
      { id: 'chinese-1', name: '짜장면', category: '중식' },
      { id: 'chinese-2', name: '짬뽕', category: '중식' },
      { id: 'chinese-3', name: '탕수육', category: '중식' },
      { id: 'chinese-4', name: '마파두부', category: '중식' },
      { id: 'chinese-5', name: '양장피', category: '중식' },
      { id: 'chinese-6', name: '깐풍기', category: '중식' },
    ],
  },
  {
    id: 'japanese',
    name: '일식',
    color: '#FFE66D',
    menuItems: [
      { id: 'japanese-1', name: '초밥', category: '일식' },
      { id: 'japanese-2', name: '라멘', category: '일식' },
      { id: 'japanese-3', name: '돈카츠', category: '일식' },
      { id: 'japanese-4', name: '우동', category: '일식' },
      { id: 'japanese-5', name: '덮밥', category: '일식' },
      { id: 'japanese-6', name: '소바', category: '일식' },
    ],
  },
  {
    id: 'western',
    name: '양식',
    color: '#A8E6CF',
    menuItems: [
      { id: 'western-1', name: '파스타', category: '양식' },
      { id: 'western-2', name: '피자', category: '양식' },
      { id: 'western-3', name: '스테이크', category: '양식' },
      { id: 'western-4', name: '햄버거', category: '양식' },
      { id: 'western-5', name: '리조또', category: '양식' },
      { id: 'western-6', name: '샐러드', category: '양식' },
    ],
  },
];

/**
 * Get theme by ID
 */
export function getThemeById(id: string): RouletteTheme | undefined {
  return ROULETTE_THEMES.find((theme) => theme.id === id);
}

/**
 * Get all menu items across all themes
 */
export function getAllMenuItems() {
  return ROULETTE_THEMES.flatMap((theme) => theme.menuItems);
}

/**
 * Get random menu item from a specific theme
 */
export function getRandomMenuItem(themeId: string) {
  const theme = getThemeById(themeId);
  if (!theme) return null;

  const randomIndex = Math.floor(Math.random() * theme.menuItems.length);
  return theme.menuItems[randomIndex];
}
