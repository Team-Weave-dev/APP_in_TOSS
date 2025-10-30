'use client';

import { ThemeProvider } from '@toss/tds-mobile';

/**
 * Client-side providers wrapper
 *
 * This component wraps all client-side providers (TDS Mobile Theme, etc.)
 * and must be marked as 'use client' for Next.js App Router.
 *
 * @param children - Child components to wrap with providers
 */
export function Providers({ children }: { children: React.ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
