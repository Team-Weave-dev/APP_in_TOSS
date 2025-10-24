# setClipboardText API Documentation

## Overview
The `setClipboardText` function enables copying text to the device clipboard, allowing users to paste content elsewhere.

## Function Signature
```typescript
function setClipboardText(text: string): Promise<void>;
```

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `text` | string | Yes | "The text to copy to clipboard, formatted as a string" |

## Properties

### openPermissionDialog
Displays a dialog requesting clipboard write permissions with three user options: "Allow," "Allow Once," or "Deny." Returns `allowed` for the first two selections, `denied` for the third.

### getPermission
Retrieves current clipboard write permission status:
- `allowed` - Permission granted
- `denied` - Permission denied
- `notDetermined` - Permission never requested

## Error Handling

### SetClipboardTextPermissionError
Thrown when clipboard write permissions are denied. Check with: `error instanceof SetClipboardTextPermissionError`

## Implementation Example

```typescript
import { setClipboardText, SetClipboardTextPermissionError } from '@apps-in-toss/framework';
import { Alert, Button } from 'react-native';

function CopyButton() {
  const handleCopy = async () => {
    try {
      await setClipboardText('text to copy');
      console.log('Text copied successfully');
    } catch (error) {
      if (error instanceof SetClipboardTextPermissionError) {
        // Handle denied write permission
      }
    }
  };

  return (
    <>
      <Button title="Copy" onPress={handleCopy} />
      <Button
        title="Check Permission"
        onPress={async () => {
          const status = await setClipboardText.getPermission();
          Alert.alert(status);
        }}
      />
      <Button
        title="Request Permission"
        onPress={async () => {
          const status = await setClipboardText.openPermissionDialog();
          Alert.alert(status);
        }}
      />
    </>
  );
}
```

## Supported Environments
- **Framework:** React Native
- **Runtime**: Toss App Sandbox
