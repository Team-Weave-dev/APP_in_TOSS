# BottomCTA.Single Documentation

## Overview

`BottomCTA.Single` is a component that renders a single button in a simplified bottom call-to-action format.

## Key Usage Patterns

### Remove Background
Set the `background` prop to `"none"` to eliminate the gradient and background color.

### Safe Area Padding
The `hasSafeAreaPadding` prop (default: `true`) adds bottom padding equal to the device's safe area height, ensuring buttons display safely on notched devices.

### Fixed Above Keyboard
Enable `fixedAboveKeyboard={true}` to keep the button visible above the mobile keyboard when input fields are active. This feature is unavailable in `BottomCTA.Double`.

### Animations
Use `showAfterDelay` to trigger entrance animations: `"fade"`, `"scale"`, or `"slide"` with a configurable delay in seconds.

### Scroll Behavior
Set `hideOnScroll={true}` to automatically hide the button during downward scrolling and reveal it when scrolling up. Configure `hideOnScrollDistanceThreshold` (default: 1px) to adjust scroll sensitivity.

### Accessories
Add custom content above or below the button using `topAccessory` and `bottomAccessory` props.

## Key Props

| Prop | Type | Default | Purpose |
|------|------|---------|---------|
| `children` | `React.ReactNode` | Required | Button content |
| `background` | `"default"` \| `"none"` | `"default"` | Control background styling |
| `hasSafeAreaPadding` | boolean | `true` | Apply device safe area padding |
| `fixedAboveKeyboard` | boolean | — | Keep button above keyboard |
| `hideOnScroll` | boolean | `false` | Hide during scroll |
| `fixed` | boolean | — | Pin to screen bottom |
