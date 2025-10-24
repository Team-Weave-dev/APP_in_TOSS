# Permission API Documentation

## Overview

The Apps in Toss framework requires explicit permission configuration to access device features like clipboard, contacts, photos, camera, and location data. Permissions must be declared in `granite.config.ts` during app review.

## Permission Types

### Clipboard
- **Name:** `clipboard`
- **Access Types:**
  - `read`: Enables [`getClipboardText()`](/bedrock/reference/framework/클립보드/getClipboardText.html)
  - `write`: Enables [`setClipboardText()`](/bedrock/reference/framework/클립보드/setClipboardText.html)

### Contacts
- **Name:** `contacts`
- **Access Types:**
  - `read`: Enables [`fetchContacts()`](/bedrock/reference/framework/연락처/fetchContacts.html)

### Photos
- **Name:** `photos`
- **Access Types:**
  - `read`: Enables [`fetchAlbumPhotos()`](/bedrock/reference/framework/사진/fetchAlbumPhotos.html)

### Camera
- **Name:** `camera`
- **Access Types:**
  - `access`: Enables [`openCamera()`](/bedrock/reference/framework/카메라/openCamera.html)

### Geolocation
- **Name:** `geolocation`
- **Access Types:**
  - `access`: Enables [`startUpdateLocation()`](/bedrock/reference/framework/위치 정보/startUpdateLocation.html), [`getCurrentLocation()`](/bedrock/reference/framework/위치 정보/getCurrentLocation.html), [`useGeolocation()`](/bedrock/reference/framework/위치 정보/useGeolocation.html)

## Configuration

### React Native Setup

```typescript
import { appsInToss } from "@apps-in-toss/framework/plugins";
import { defineConfig } from '@granite-js/react-native/config';

export default defineConfig({
  appName: "<my-service-name>",
  plugins: [
    appsInToss({
      permissions: [
        { name: "clipboard", access: "read" },
        { name: "clipboard", access: "write" },
        { name: "camera", access: "access" },
        { name: "photos", access: "read" },
      ],
    }),
  ],
});
```

### WebView Setup

```typescript
import { defineConfig } from "@apps-in-toss/web-framework/config";

export default defineConfig({
  appName: "<my-service-name>",
  web: { /* existing config */ },
  permissions: [
    { name: "clipboard", access: "read" },
    { name: "clipboard", access: "write" },
    { name: "camera", access: "access" },
    { name: "photos", access: "read" },
  ],
});
```

## Supported Environments
- React Native
- WebView
- Toss App Sandbox
