# Image Component Documentation

## Overview

The `Image` component renders bitmap images (PNG, JPG) and vector images (SVG) to the screen. The rendering format automatically adapts based on the image type.

**Supported Environments:** React Native
**Runtime:** Toss App, Sandbox App

## Function Signature

```typescript
function Image(props: ImageProps): import("react/jsx-runtime").JSX.Element;
```

## Props

### `style` (object)
Layout styling object for the image component, supporting properties like `width`, `height`, and other layout attributes.

### `source` (object)
Contains image resource information:
- **`uri`** (string): The URI address of the image resource to load
- **`cache`** ('immutable' | 'web' | 'cacheOnly', default: 'immutable'): Caching strategy for bitmap images only

### Callbacks

- **`onLoadStart()`**: Invoked when image loading begins
- **`onLoadEnd()`**: Invoked when image loading completes
- **`onError()`**: Invoked when a loading error occurs

## Basic Example

```tsx
import { View } from 'react-native';
import { Image } from '@granite-js/react-native';

function ImageExample() {
  return (
    <View>
      <Image
        source={{ uri: 'my-image-link' }}
        style={{
          width: 300,
          height: 300,
          borderWidth: 1,
        }}
        onError={() => {
          console.log('이미지 로드 실패');
        }}
      />
    </View>
  );
}
```

## Error Handling Example

```tsx
import { useState } from "react";
import { View } from "react-native";
import { Image } from '@granite-js/react-native';

function Index() {
  const [hasError, setHasError] = useState(false);

  return (
    <View>
      {hasError ? (
        <ErrorView />
      ) : (
        <Image
          style={{ width: 100, height: 100 }}
          source={{ uri: "invalid url" }}
          onError={() => {
            setHasError(true);
          }}
        />
      )}
    </View>
  );
}

function ErrorView() {
  return (
    <View
      style={{
        width: 100,
        height: 100,
        borderColor: "red",
        borderWidth: 1,
      }}
    />
  );
}
```

## Key Points

- The `onError` callback handles network issues and invalid URLs automatically
- Different rendering approaches are applied based on image format automatically
- Cache strategy is applicable only to bitmap images, not vector formats
