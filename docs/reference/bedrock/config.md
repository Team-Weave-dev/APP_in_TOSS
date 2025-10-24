# Common Config (공통 설정) API Documentation

## Overview

The Common Config API enables centralized management of global application settings including branding, hosting, permissions, and build configurations. When properly configured, the bridge view and navigation bar automatically display.

## Configuration Structure

### WebView Configuration

```typescript
interface defineConfig {
  appName: string;                    // Registered app ID in console
  brand: {
    displayName: string;              // User-facing app name
    primaryColor: string;             // Brand color (hex format)
    icon: string;                     // App icon (web image URL)
    bridgeColorMode: 'basic' | 'inverted'; // Light or dark mode
  };
  web: {
    host: string;                     // Dev server host
    port: number;                     // Dev server port
    commands: {
      dev: string;                    // Development command
      build: string;                  // Build command
    };
  };
  permissions: Permission[];          // Runtime permissions
  outdir: string;                     // Build output directory
  webViewProps: WebViewProps;         // Additional properties
}
```

### React Native Configuration

```typescript
interface defineConfig {
  scheme: string;                     // App routing scheme
  appName: string;                    // Registered app ID
  plugins: [
    appsInToss({
      brand: {
        displayName: string;
        primaryColor: string;
        icon: string;
        bridgeColorMode: 'basic' | 'inverted';
      };
      permissions: Permission[];
    })
  ];
}
```

## Key Properties

| Property | Type | Description |
|----------|------|-------------|
| `displayName` | string | "App name displayed to end users" |
| `primaryColor` | string | "Brand color in hexadecimal format" |
| `icon` | string | "Web-accessible image URL for app icon" |
| `bridgeColorMode` | enum | Controls UI theme appearance |

## Game Configuration

Games require specific settings:
- Set `webViewProps.type = 'game'`
- Set `brand.bridgeColorMode = 'inverted'` for dark mode interface

## UI Components

The configuration automatically renders:
- **Bridge View**: System interface overlay
- **Navigation Bar**: App header with menu options (share, reporting, etc.)

## Related Guides

- [Permissions Configuration](/bedrock/reference/framework/권한/permission.html)
- [WebView Properties](/bedrock/reference/framework/속성%20제어/webview-props.html)
- [Navigation Bar](/bedrock/reference/framework/UI/NavigationBar.html)
