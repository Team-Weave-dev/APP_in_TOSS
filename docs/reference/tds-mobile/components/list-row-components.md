# ListRow Components Documentation

## Overview

The `ListRow` component provides a structured way to build list items with three distinct areas: left, contents, and right. This system enables consistent, flexible list layouts.

## Core Sub-Components

### 1. ListRow.AssetIcon

Displays icons with customizable styling.

**Shape Options:**
- `original`: Icon without background
- `squircle`: Rounded square background
- `card`: Card-style background
- `circle-background`: Circular background
- `circle-masking`: Circular mask applied

**Key Props:**
- `shape`: Controls visual style (default: `squircle`)
- `variant`: `"fill"` or `"none"` (default: `"none"`)
- `size`: `"xsmall"` | `"small"` | `"medium"` (default: `"medium"`)
- `name`: Icon identifier (design system icons)
- `alt`: Accessibility text
- `backgroundColor`: Background color for shaped variants
- `acc`: Badge/accessory element
- `accPosition`: `"bottom-right"` | `"top-right"`
- `accMasking`: Apply circular border to accessory

### 2. ListRow.IconButton

Interactive button component for list actions.

**Variants:**
- `fill`: Solid background (default: `clear`)
- `clear`: Transparent background
- `border`: Bordered style

**Key Props:**
- `variant`: Button style type
- `iconSize`: Pixel size (default: `24`)
- `label`: ARIA label for accessibility
- `src`: Image URL for icon
- `bgColor`: Background color
- `color`: Icon color (monocolor icons only)

### 3. ListRow.AssetImage

Displays images or thumbnails with multiple shape options.

**Shape Variants:**
- `original`: Unmasked image (height-constrained to 56px)
- `squircle`: Rounded square mask
- `card`: Card-shaped mask
- `square`: Square mask (fixed 52×52)
- `circle`: Circular mask (fixed 40×40)

**Key Props:**
- `src`: Image URL (required)
- `shape`: Mask type (default: `"squircle"`)
- `size`: `"xsmall"` | `"small"` | `"medium"` (default: `"small"`)
- `scale`: Image scaling factor
- `scaleType`: Scaling behavior (e.g., `"fit"`)
- `backgroundColor`: Background color for transparent images
- `paddingX`: Add horizontal padding (card shape)
- `acc`: Accessory badge

### 4. ListRow.AssetLottie

Animated Lottie elements for dynamic list content.

**Features:**
- Same shape system as images
- Height-constrained to 40px for original shape
- Fixed sizes for square (52×52) and circle (40×40)

**Key Props:**
- `src`: Lottie JSON file URL (required)
- `shape`: Mask variant (default: `"squircle"`)
- `size`: Dimension option
- `backgroundColor`: Background color

### 5. ListRow.AssetText

Text elements with background styling for left area.

**Shape Options:**
- `squircle`: Rounded square
- `card`: Card style

**Key Props:**
- `children`: Text content (required)
- `shape`: Style variant (required)
- `size`: `"xsmall"` | `"small"` | `"medium"` (default: `"small"`)
- `backgroundColor`: Background color
- `color`: Text color (default: `adaptive.blue500`)
- `paddingX`: Horizontal padding option

### 6. ListRow.Texts

Multi-line text composition with semantic styling.

**Type Naming Convention:**
- Prefix: `1Row`, `2Row`, or `3Row` (line count)
- Optional `Right` prefix (right alignment)
- Suffix: `TypeA`–`TypeC`/`TypeF` (style set)

**Single-Line Types:**
- `1RowTypeA`, `1RowTypeB`, `1RowTypeC`
- `Right1RowTypeA`–`Right1RowTypeE`

**Two-Line Types:**
- `2RowTypeA`–`2RowTypeF`
- `Right2RowTypeA`–`Right2RowTypeE`

**Three-Line Types:**
- `3RowTypeA`–`3RowTypeF`

**Key Props:**
- `type`: Text style template (required)
- `top`: Primary text content
- `middle`: Secondary text (3-row only)
- `bottom`: Supporting text (2–3 row)
- `marginTop`: Top spacing adjustment

## Layout Areas

### Left Area
Supports visual identifiers: icons, images, animated content, or text badges.

### Contents Area
Primary information zone using `ListRow.Texts` for consistent typography hierarchy.

### Right Area
Interactive or supplementary elements: text, buttons, switches, badges, or navigation arrows.

**Arrow Support:**
Use `withArrow={true}` prop to display navigation indicator.

## Usage Example

```jsx
<ListRow
  left={
    <ListRow.AssetIcon
      shape="squircle"
      name="icon-crown"
      backgroundColor={adaptive.grey100}
    />
  }
  contents={
    <ListRow.Texts
      type="2RowTypeA"
      top="Title"
      bottom="Subtitle"
    />
  }
  right={
    <ListRow.IconButton
      variant="fill"
      iconSize={16}
      src="icon-url"
      label="Action"
    />
  }
/>
```
