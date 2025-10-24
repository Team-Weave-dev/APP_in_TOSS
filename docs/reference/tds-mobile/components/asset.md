# Asset Component Documentation

## Overview

The Asset component provides wrapped versions of commonly used `Frame` combinations with content components for easier implementation.

## Wrapped Components

These preset combinations are available:

- **Asset.Icon** = Frame + ContentIcon
- **Asset.Image** = Frame + ContentImage
- **Asset.Lottie** = Frame + ContentLottie
- **Asset.Text** = Frame + ContentText
- **Asset.Video** = Frame + ContentVideo

The `shape` property from Frame is renamed to `frameShape` in wrapped components.

## Usage Examples

### Asset.Icon
Displays icons with customizable color and size:
```jsx
<Asset.Icon color="green" name="heart-line" />
```

### Asset.Image
Shows images with frame control and scale options:
```jsx
<Asset.Image
  frameShape={{ height: 100, width: 100 }}
  scaleType="crop"
  src="https://static.toss.im/2d-emojis/svg/u1F600.svg"
/>
```

### Asset.Lottie
Renders Lottie animations within a frame:
```jsx
<Asset.Lottie
  frameShape={{ height: 300, width: 300 }}
  scaleType="crop"
  src="https://static.toss.im/lotties/activation/1won_new/1won.json"
/>
```

### Asset.Text
Displays text content within a frame container.

### Asset.Video
Plays video with control options (autoPlay, loop, muted, controls, playsInline).

## Key Props

| Prop | Type | Description |
|------|------|-------------|
| `frameShape` | FrameShapeType | Frame dimensions and shape |
| `scaleType` | "fit" \| "crop" | How content scales within frame |
| `backgroundColor` | string | Frame background color |
| `acc` | ReactNode | Accessory elements to add |
| `overlap` | { color: string } | Shows multiple items merged |

## Icon Props
- `name` (required): Icon identifier
- `color`: Icon color (CSS values or adaptive colors)

## Image Props
- `src` (required): Image URL
- `alt`: Alternative text
- `scaleType`: "fit" maintains ratio; "crop" fills frame

## Video Props
- `src` (required): Video URL
- `autoPlay`: Default true
- `loop`: Default true
- `muted`: Default true
- `controls`: Default false
