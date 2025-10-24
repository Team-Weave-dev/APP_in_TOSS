# AgreementV4 Documentation

## Overview

The `AgreementV4` component enables developers to "easily construct screens requiring user consent" with support for grouping items, collapsible sections, and various UI elements like checkboxes, badges, and tags.

## Core Components

### AgreementV4.Text
Displays consent item descriptions or titles. Supports click detection via `onPressEnd` callback.

### AgreementV4.Badge
Provides visual emphasis with `variant` options:
- `fill`: Background color applied (requires `bgColor`)
- `clear`: Transparent style

### AgreementV4.Checkbox
Selection component with three variants:
- `checkbox`: Standard checkbox appearance
- `dot`: Circular indicator
- `hidden`: Visually concealed but maintains layout space

### AgreementV4.Necessity
Indicates requirement status:
- `mandatory`: Required (blue color)
- `optional`: Optional (gray color)

### AgreementV4.RightArrow
Collapse/expand indicator for interactive sections.

### AgreementV4.Description
Provides supplementary information with variants:
- `box`: Boxed style with background
- `normal`: Plain text formatting

### AgreementV4.Header
Section titles with size variants: `xLarge`, `large`, `medium`, `medium-title`, `small`, `small-last`.

## Key Features

**IndentPushable**: Creates visual hierarchy through indentation, controlled via `pushed` prop.

**Collapsible**: Toggles content visibility with `collapsed` state and `onCollapsedChange` callback.

**Group**: Bundles multiple items together with optional `showGradient` effect.

## Basic Usage

```jsx
<AgreementV4
  variant="large"
  left={<AgreementV4.Checkbox />}
  middle={<AgreementV4.Text>Service Agreement</AgreementV4.Text>}
  right={<AgreementV4.Badge variant="fill" bgColor={color} textColor={textColor}>Badge</AgreementV4.Badge>}
/>
```

## Key Props

| Prop | Type | Notes |
|------|------|-------|
| `variant` | string | Controls size/style (`xLarge`–`small-last`) |
| `left` | ReactNode | Typically contains checkbox |
| `middle` | ReactNode | Main text content |
| `right` | ReactNode | Badge or arrow elements |
| `indent` | number | Indentation level |
| `onPressEnd` | function | Click handler |
