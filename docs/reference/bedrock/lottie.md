# Lottie Component Documentation

## Overview

The `Lottie` component enables rendering of Lottie animations in React Native applications. It loads and plays Lottie JSON files with customizable playback options.

## Function Signature

```typescript
function Lottie({ width, maxWidth, height, src, autoPlay, speed, style, onAnimationFailure, ...props }: Props): JSX.Element;
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `src` | string | ✓ | — | "URL of the Lottie JSON file" for animation rendering |
| `height` | number \| '100%' | ✓ | — | "Animation height; must be specified to prevent layout shifting" |
| `width` | number \| '100%' | — | — | Animation width |
| `maxWidth` | number | — | — | Maximum animation width |
| `autoPlay` | boolean | — | true | Auto-starts animation when component mounts |
| `speed` | number | — | 1 | Controls playback speed of the animation |
| `style` | object | — | — | Custom styling |
| `onAnimationFailure` | function | — | — | Callback triggered on animation load failure |
| `...props` | object | — | — | Accepts additional LottieView props from underlying library |

## Return Value

Returns a JSX element rendering the `LottieView` component from the `lottie-react-native` library.

## Usage Example

```tsx
import { Lottie } from '@granite-js/react-native';

function LottieExample() {
  return (
    <Lottie
      height={100}
      src="https://my-lottie-animation-url.com"
      autoPlay={true}
      loop={false}
      onAnimationFailure={() => {
        console.log('Animation Failed');
      }}
      onAnimationFinish={() => {
        console.log('Animation Finished');
      }}
    />
  );
}
```

## Key Requirements

- **Height is mandatory** to prevent layout instability during rendering
- Use the `src` prop rather than direct `source` attribute for safety validation
- Supports standard `LottieView` library properties through prop spreading

## Environment Support

- **Framework**: React Native
- **Runtime**: Toss App, Sandbox App
