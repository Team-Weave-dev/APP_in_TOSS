# Badge Component Documentation

## Overview

The `Badge` component is designed to highlight and quickly communicate an item's status. It provides visual emphasis through various size and style options.

## Usage

### Sizes

The component supports four size options via the `size` prop:

- **xsmall**: Compact badge for minimal visual footprint
- **small**: Small badge for regular use cases
- **medium**: Default badge size
- **large**: Prominent badge for emphasis

Example implementation:
```jsx
<Badge size="xsmall" color="blue" variant="fill">xsmall</Badge>
<Badge size="small" color="blue" variant="fill">small</Badge>
<Badge size="medium" color="blue" variant="fill">medium</Badge>
<Badge size="large" color="blue" variant="fill">large</Badge>
```

### Variants

#### Fill Variant
The fill style features high saturation, creating a visually striking appearance ideal for emphasizing primary items.

Supported colors: blue, teal, green, red, yellow, elephant

```jsx
<Badge variant="fill" color="blue" size="xsmall">Badge</Badge>
```

#### Weak Variant
The weak style uses lower saturation for a subtler, less prominent visual presentation.

```jsx
<Badge variant="weak" color="blue" size="xsmall">Badge</Badge>
```

## Props Interface

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `variant` | `"fill"` \| `"weak"` | Yes | Determines color saturation and transparency |
| `size` | `"xsmall"` \| `"small"` \| `"medium"` \| `"large"` | Yes | Controls component dimensions |
| `color` | `"blue"` \| `"teal"` \| `"green"` \| `"red"` \| `"yellow"` \| `"elephant"` | Yes | Sets the color scheme |
