# getClipboardText API Documentation

## Overview
The `getClipboardText` function retrieves text stored on the device clipboard, enabling apps to read copied content for further processing.

## Function Signature

```typescript
function getClipboardText(): Promise<string>;
```

## Return Value
- **Promise<string>**: Returns clipboard text content. If no text exists, returns an empty string.

## Properties

### openPermissionDialog
Displays a permission request dialog allowing users to choose "Allow," "Allow Once," or "Don't Allow." Returns `allowed` for affirmative choices or `denied` for rejection.

### getPermission
Checks current clipboard read permission status:
- `allowed`: User has granted permission
- `denied`: User has denied permission
- `notDetermined`: No prior permission request made

## Error Handling

### GetClipboardTextPermissionError
Thrown when clipboard read access is denied. Verify using:
```typescript
error instanceof GetClipboardTextPermissionError
```

## Usage Example

```typescript
import { getClipboardText, GetClipboardTextPermissionError } from '@apps-in-toss/framework';

async function pasteText() {
  try {
    const text = await getClipboardText();
    console.log(text || 'No clipboard text available');
  } catch (error) {
    if (error instanceof GetClipboardTextPermissionError) {
      // Handle permission denial
    }
  }
}
```

## Supported Environments
- **React Native**
- **WebView**
- **Runtime**: Toss App only
