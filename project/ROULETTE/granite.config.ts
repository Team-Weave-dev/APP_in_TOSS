import { defineConfig } from '@apps-in-toss/web-framework/config';

export default defineConfig({
  appName: 'roulette',
  brand: {
    displayName: '룰렛',
    primaryColor: '#3182F6',
    icon: '',
    bridgeColorMode: 'basic',
  },
  web: {
    host: 'localhost',
    port: 3000,
    commands: {
      dev: 'next dev',
      build: 'next build',
    },
  },
  permissions: [],
  outdir: '.next',
  webViewProps: {
    type: 'partner',
  },
});
