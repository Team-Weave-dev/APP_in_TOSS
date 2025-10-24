# openURL API Documentation

## Overview
The `openURL` function opens a specified URL in the device's default browser or associated application. It leverages React Native's [`Linking.openURL`](https://reactnative.dev/docs/0.72/linking#openurl) method.

**Supported Environments:**
- React Native
- WebView

**Runtime:** Toss App, Sandbox App

## Function Signature

```typescript
function openURL(url: string): Promise<any>;
```

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `url` | string | Yes | The URL address to open |

## Return Value

- **Type:** `Promise<any>`
- **Behavior:** Resolves when the URL opens successfully

## Usage Example

```tsx
import { openURL } from '@granite-js/react-native';
import { Button } from 'react-native';

function Page() {
  const handlePress = () => {
    openURL('https://google.com');
  };

  return <Button title="Open Google Website" onPress={handlePress} />;
}
```

## Implementation Notes

- The function returns a Promise that resolves upon successful URL opening
- External URLs open in the user's default browser or relevant application
- Behavior varies by platform (iOS/Android) based on system defaults
