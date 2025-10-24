# BlurView Component Documentation

## Overview

The `BlurView` component applies a blur effect to backgrounds on iOS devices. On Android, it renders as a standard `View` component without blur effects. This component from the React Native framework supports customizable blur intensity and vibrancy effects.

## Component Signature

```typescript
function BlurView({
  blurType,
  blurAmount,
  reducedTransparencyFallbackColor,
  vibrancyEffect,
  ...viewProps
}: BlurViewProps): JSX.Element;
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `blurType` | BlurType | — | Defines the blur style (e.g., `light`, `dark`, `extraDark`) |
| `blurAmount` | number | 10 | Controls blur intensity; ranges from 0 to 100 |
| `vibrancyEffect` | boolean | false | Enables vibrancy for enhanced content perception on blurred backgrounds |
| `reducedTransparencyFallbackColor` | string | — | Fallback color when blur isn't supported or rendering fails |

The component inherits standard React Native `ViewProps` for layout control.

## Key Features

- **iOS-Only Blur**: "iOS 5.126.0 and later support blur effects; Android rendering shows no blur"
- **Vibrancy Support**: Applies Apple's UIVibrancyEffect for enhanced visual appeal
- **Fallback Handling**: Uses `reducedTransparencyFallbackColor` when blur is unavailable

## Usage Example

```tsx
import { View, Text, StyleSheet } from 'react-native';
import { BlurView } from '@granite-js/react-native';

function BlurViewExample() {
  return (
    <View style={styles.container}>
      <Text style={styles.absolute}>Blurred Text</Text>
      <BlurView
        style={styles.absolute}
        blurType="light"
        blurAmount={1}
      />
      <Text>Non Blurred Text</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 300,
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
```

## Important Notes

- Cross-platform support varies; blur effects only function on iOS
- Check device capability before implementing blur-dependent UI logic
- Consider fallback colors for devices without blur support
