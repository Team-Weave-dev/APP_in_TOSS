# BottomCTA.Double Documentation

## Overview

`BottomCTA.Double` is a bottom call-to-action component that renders **two buttons** side-by-side. It provides a fixed or floating button interface for mobile applications with extensive customization options.

## Key Features

- Dual button layout with equal width distribution
- Optional background styling with gradient support
- SafeArea padding support for notched devices
- Scroll-triggered visibility toggling
- Animation support on initial appearance
- Accessory slot support above and below buttons

## Usage Examples

### Basic Implementation

```jsx
<BottomCTA.Double
  leftButton={<CTAButton color="danger" variant="weak">Cancel</CTAButton>}
  rightButton={<CTAButton>Confirm</CTAButton>}
/>
```

### Removing Background

Set `background="none"` to eliminate the default background color and gradient effect.

### SafeArea Handling

By default, `hasSafeAreaPadding={true}` adds padding matching the device's safe area inset. The component uses CSS variables: `max(var(--toss-safe-area-bottom, 0px), env(safe-area-inset-bottom), 20px)`.

### Delayed Animation

```jsx
<BottomCTA.Double
  showAfterDelay={{ animation: 'fade', delay: 1 }}
  leftButton={<CTAButton color="danger" variant="weak">Left</CTAButton>}
  rightButton={<CTAButton>Right</CTAButton>}
/>
```

Supported animations: `'fade'`, `'scale'`, `'slide'`

### Scroll-Based Visibility

Enable `hideOnScroll={true}` to auto-hide during scrolling. Configure `hideOnScrollDistanceThreshold` (default: 1px) to adjust trigger sensitivity.

### Accessory Elements

```jsx
<BottomCTA.Double
  topAccessory={<div>Info text</div>}
  bottomAccessory={<div>Footer</div>}
  leftButton={...}
  rightButton={...}
/>
```

## Props Interface

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| **leftButton*** | `React.ReactNode` | — | Left button element |
| **rightButton*** | `React.ReactNode` | — | Right button element |
| `showAfterDelay` | `{ animation, delay }` | — | Initial appearance animation config |
| `show` | `boolean` | `false` | Toggle visibility with animation |
| `hideOnScroll` | `boolean` | `false` | Auto-hide during scroll |
| `hideOnScrollDistanceThreshold` | `number` | `1` | Scroll distance in px to trigger hide |
| `hasSafeAreaPadding` | `boolean` | `true` | Apply device safe area padding |
| `hasPaddingBottom` | `boolean` | `true` | Enable bottom padding |
| `takeSpace` | `boolean` | — | Reserve layout space when fixed |
| `fixed` | `boolean` | — | Pin to screen bottom |
| `containerStyle` | `CSSProperties` | — | Custom container styles (avoid opacity/bottom with keyboard) |
| `containerRef` | `Ref<HTMLDivElement>` | — | Container element reference |
| `background` | `'default'` \| `'none'` | `'default'` | Background styling option |
| `topAccessory` | `React.ReactNode` | — | Element above buttons |
| `bottomAccessory` | `React.ReactNode` | — | Element below buttons |

## Related Components

- [Single](https://tossmini-docs.toss.im/tds-mobile/components/BottomCTA/Single/) - Single button variant
- [FixedBottomCTA](https://tossmini-docs.toss.im/tds-mobile/components/BottomCTA/fixed-bottom-cta/) - Fixed positioning variant
