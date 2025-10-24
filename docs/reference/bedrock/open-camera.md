# openCamera API Documentation

## Overview
The `openCamera` function launches the device camera to capture photos and returns the captured image data.

## Function Signature
```typescript
function openCamera(options: {
  base64: boolean;
  maxWidth: number;
}): Promise<ImageResponse>;
```

## Parameters

**options** (required) - Configuration object for camera execution

- **base64** (boolean, default: `false`)
  - Determines output format
  - When `true`: Returns Base64-encoded string
  - When `false`: Returns data URI format

- **maxWidth** (number, default: `1024`)
  - Maximum width dimension for the captured image in pixels

## Properties

**openPermissionDialog()**
- Displays permission request dialog
- User can select "Allow", "Allow Once", or "Don't Allow"
- Returns `allowed` or `denied`

**getPermission()**
- Returns current camera permission status
- Possible values: `allowed`, `denied`, `notDetermined`

## Return Value

**Promise<ImageResponse>** containing:
- `id`: Unique image identifier
- `dataUri`: Image data in URI format

## Error Handling

**OpenCameraPermissionError**
- Thrown when camera access permission is denied
- Check with: `error instanceof OpenCameraPermissionError`

## Usage Example

```typescript
const response = await openCamera({ base64: true });
const imageUri = 'data:image/jpeg;base64,' + response.dataUri;
```

## Supported Environments
- React Native
- WebView
- Toss App & Sandbox App
