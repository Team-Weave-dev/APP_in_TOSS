# TDS Mobile Colors Foundation Documentation

## Overview

The Toss Design System (TDS) Mobile provides a unified color system enabling developers and designers to maintain consistent UI implementations aligned with design guidelines through standardized color naming conventions.

## Installation

To use the TDS color system, install the colors package:

```bash
yarn add @toss/tds-colors
```

## Basic Usage

Import and apply colors from the `colors` object:

```javascript
import { colors } from '@toss/tds-colors';

<div style={{
  width: 100,
  height: 100,
  backgroundColor: colors.blue500
}} />
```

## Color Palette

### Grey Series
- `grey50` (#f9fafb) through `grey900` (#191f28)
- Ranges from lightest to darkest neutral tones

### Blue Series
- `blue50` (#e8f3ff) through `blue900` (#194aa6)
- Primary accent color palette

### Red Series
- `red50` (#ffeeee) through `red900` (#a51926)
- Used for error and alert states

### Additional Palettes
- **Orange**: `orange50` (#fff3e0) to `orange900` (#e45600)
- **Yellow**: `yellow50` (#fff9e7) to `yellow900` (#dd7d02)
- **Green**: `green50` (#f0faf6) to `green900` (#027648)
- **Teal**: `teal50` (#edf8f8) to `teal900` (#076565)
- **Purple**: `purple50` (#f9f0fc) to `purple900` (#65237b)

### Grey Opacity Series
Opacity-based colors ranging from `greyOpacity50` (2% opacity) to `greyOpacity900` (91% opacity)

## Background Colors

Semantic background color tokens:
- `background` (#FFFFFF) - Primary background
- `greyBackground` - Light grey tonal background
- `layeredBackground` (#FFFFFF) - Layered content background
- `floatedBackground` (#FFFFFF) - Floating element background
