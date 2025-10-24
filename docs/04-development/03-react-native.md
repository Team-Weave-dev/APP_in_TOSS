# React Native

## Overview
This guide covers developing mini-apps using React Native for the Apps in Toss platform. Developers must scaffold projects based on Granite framework for proper functionality within the ecosystem.

## Prerequisites
- iOS environment configuration ([documentation link](/development/client/ios.html))
- Android environment configuration ([documentation link](/development/client/android.html))

## Project Scaffolding

### Setup Commands
Execute one of these commands based on your package manager:

```bash
npm create granite-app
pnpm create granite-app
yarn create granite-app
```

### Configuration Steps

1. **App Naming**: Use kebab-case format (e.g., `my-granite-app`)

2. **Tool Selection**: Choose between:
   - `prettier` + `eslint` for flexible code quality management
   - `biome` for integrated, Rust-based formatting and linting

3. **Dependency Installation**:
```bash
cd my-granite-app
npm install  # or pnpm/yarn
```

## Environment Setup

### Framework Installation
```bash
npm install @apps-in-toss/framework
pnpm install @apps-in-toss/framework
yarn add @apps-in-toss/framework
```

### Configuration File
Run initialization command:
```bash
npx ait init
```

This generates `granite.config.ts` with app settings:

```typescript
import { appsInToss } from '@apps-in-toss/framework/plugins';
import { defineConfig } from '@granite-js/react-native/config';

export default defineConfig({
  appName: "<app-name>",
  plugins: [
    appsInToss({
      brand: {
        displayName: "App Name",
        primaryColor: "#3182F6",
        icon: null,
        bridgeColorMode: "basic",
      },
      permissions: [],
    }),
  ],
});
```

### TDS React Native Installation
Additional TDS package required. See [React Native TDS documentation](https://tossmini-docs.toss.im/tds-react-native/)

## File-Based Routing

The framework uses automatic file system routing similar to Next.js:

```
my-granite-app/pages/
├─ index.tsx          → intoss://my-granite-app
├─ detail.tsx         → intoss://my-granite-app/detail
└─ item/
   ├─ index.tsx       → intoss://my-granite-app/item
   └─ detail.tsx      → intoss://my-granite-app/item/detail
```

All routes use the `intoss://` scheme prefix. Developers add files without separate routing configuration.

## Local Development Server

### Starting Development Server
```bash
npm run dev
pnpm dev
yarn dev
```

### iOS Simulator Testing
1. Launch Apps in Toss sandbox app
2. Enter scheme (e.g., `intoss://kingtoss`)
3. Press "Open Schema" button
4. Metro automatically connects when active

### iOS Real Device Setup
1. Grant "Local Network" permissions when prompted
2. Input computer's IP address in sandbox app
3. Find IP on macOS: `ipconfig getifaddr en0`
4. Press "Open Schema" button
5. Watch for bundling progress indicator

### Android Connection
Use ADB port forwarding:
```bash
adb reverse tcp:8081 tcp:8081
adb reverse tcp:5173 tcp:5173
```

For specific devices:
```bash
adb -s {deviceId} reverse tcp:8081 tcp:8081
```

## Debugging

### Chrome Debugging
JavaScript debugging requires Chrome browser. Access debugger via `j` key when Metro server is running with connected device.

### Key Features
- **Console**: Log viewing and REPL environment
- **Source**: Code inspection and breakpoints
- **Network**: Request/response analysis
- **Memory**: Heap profiling and snapshots
- **Profiler**: Performance measurement

### Common Techniques
- Add `debugger` keyword for automatic pause points
- Use breakpoints via file search (Cmd+P)
- Enable "Pause on exceptions" for error tracking
- Inspect network activity with request/response headers
- Profile memory usage with heap snapshots

### React DevTools
Access component hierarchy and real-time property editing. For Android: `adb reverse tcp:8097 tcp:8097`

## Building for Release

### Bundle Generation
```bash
npm run build
pnpm build
yarn build
```

Generates `<service-name>.ait` file for deployment.

### When to Build
- Final testing in Toss app (sandbox doesn't support all features)
- Submitting for review
- Testing login/push/payment/deeplink functionality

## Publishing

Refer to [app publishing documentation](/development/test/toss.html) for submission procedures.

## Troubleshooting

**Connection Issues**: Clear `node_modules` and reinstall dependencies if "too many open files" occurs

**Plugin Errors**: Verify `granite.config.ts` `icon` setting; use empty string if icon not yet selected

**Network Inspector Issues**: Restart app and development server completely

**REPL Freezing**: Click eye icon in console and evaluate test code like `__DEV__` or `1`

---
**출처**: [Apps in Toss 개발자센터](https://developers-apps-in-toss.toss.im/tutorials/react-native.html)
