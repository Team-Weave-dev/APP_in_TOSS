# getCurrentLocation API Documentation

## Overview
The `getCurrentLocation` function retrieves the device's current location information. It executes once and immediately returns the current position, making it suitable for location-based services that need a single snapshot of the user's location.

## Signature
```typescript
function getCurrentLocation(options: {
  accuracy: Accuracy;
}): Promise<Location>;
```

## Parameters

**options** (required) - Configuration object for location retrieval
- **accuracy**: `Accuracy` - Specifies the precision level for location data

## Return Value

**Promise<Location>** - Resolves with an object containing device location information. Refer to the `Location` type documentation for detailed structure.

## Properties

- **openPermissionDialog**: Displays a system dialog requesting location access. Users can select "Allow," "Allow Once," or "Don't Allow." Returns `allowed` for permission grant, `denied` for rejection.

- **getPermission**: Returns current permission status:
  - `allowed` - User has granted location access
  - `denied` - User has refused access
  - `notDetermined` - No permission request has been made

## Error Handling

**GetCurrentLocationPermissionError** - Thrown when location permissions are denied or restricted. Check with `error instanceof GetCurrentLocationPermissionError`.

## Example Usage

```typescript
const handlePress = async () => {
  try {
    const response = await getCurrentLocation({
      accuracy: Accuracy.Balanced
    });
    // Position now contains latitude/longitude
  } catch (error) {
    console.error('Failed to retrieve location:', error);
  }
};
```

## Supported Environments
- React Native
- WebView
- Toss App & Sandbox App
