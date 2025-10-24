# Asset Frame Documentation

## Overview

The `Asset.Frame` component serves as the foundational structure for all Asset components, providing "consistent style for asset size, shape, background, and more."

## Core Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `content` * | `React.ReactNode` | — | Primary content displayed inside the frame (icons, images, videos) |
| `shape` * | `FrameShapeType` | — | Defines frame dimensions and styling with preset options available |
| `backgroundColor` | `string` | `adaptive.grey100` | Frame background color |
| `acc` | `React.ReactNode` | — | Accessory element overlaid on the frame |
| `accPosition` | `'top-left'` \| `'top-right'` \| `'bottom-left'` \| `'bottom-right'` | `'bottom-right'` | Accessory placement |
| `accMasking` | `'circle'` \| `'none'` | `'none'` | Masking style applied beneath accessory |
| `overlap` | `{ color: string }` | — | Overlap effect indicating merged items |
| `color` | `string` | — | Content color, typically for icons |

## Shape Configuration

**FrameShapeType** properties:
- `width`: Frame width (string or number)
- `height`: Frame height (string or number)
- `radius`: Border radius for corners
- `acc`: Accessory area settings
- `overlap`: Overlap effect configuration

## Preset Shapes

Framework offers predefined shapes:
- **Square**: Small, Medium, Large
- **Rectangle**: Medium, Large
- **Circle**: Small, Medium, Large
- **Card**: Small, Medium, Large

Access via `Asset.frameShape.*` (e.g., `Asset.frameShape.SquareSmall`)

## Key Features

**Accessories**: Add supplementary elements like badges at frame edges using the `acc` prop with `accPosition` control.

**Overlap Effect**: "Express that multiple items have been combined" using the `overlap` property with color values.

**Scale Type**: Control content fitting via `scaleType`:
- `fit`: Maintains aspect ratio within frame
- `crop`: Fills frame, truncates overflow

## Basic Usage

```jsx
<Asset.Frame
  shape={Asset.frameShape.RectangleLarge}
  content={<Asset.ContentImage src="..." alt="..." />}
/>
```
