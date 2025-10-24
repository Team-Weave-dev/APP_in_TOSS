# fetchAlbumPhotos API Documentation

## Overview
The `fetchAlbumPhotos` function retrieves a list of photos from the user's album. It allows configuration of maximum count and resolution, useful for gallery previews and image selection features.

## Function Signature

```typescript
function fetchAlbumPhotos(options: {
  maxCount: number;
  maxWidth: number;
  base64: boolean;
}): Promise<ImageResponse[]>;
```

## Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `maxCount` | number | 10 | "Maximum number of photos to retrieve" |
| `maxWidth` | number | 1024 | "Maximum photo width limit in pixels" |
| `base64` | boolean | false | "Return images in base64 format" |

## Return Value

**Type:** `Promise<ImageResponse[]>`

Returns an array containing "photo unique ID and data URI" for each retrieved image.

## Additional Properties

### openPermissionDialog
Displays a system dialog requesting photo album read permissions with options: "Allow", "Allow Once", or "Don't Allow". Returns `allowed` or `denied`.

### getPermission
Returns current permission status:
- `allowed` - Permission granted
- `denied` - Permission denied
- `notDetermined` - No permission request made yet

## Error Handling

**FetchAlbumPhotosPermissionError**

Thrown when photo album read permissions are denied. Check with: `error instanceof FetchAlbumPhotosPermissionError`

## Usage Example

```typescript
try {
  const photos = await fetchAlbumPhotos({
    base64: true,
    maxWidth: 360,
  });

  // Add data URL prefix for base64 images
  photos.forEach(image => {
    const uri = 'data:image/jpeg;base64,' + image.dataUri;
  });
} catch (error) {
  if (error instanceof FetchAlbumPhotosPermissionError) {
    // Handle permission denial
  }
}
```

## Supported Environments
- React Native
- WebView
- Toss App
