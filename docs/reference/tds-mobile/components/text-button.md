# TextButton Component Documentation

## Overview
The `TextButton` component triggers user actions or events. It extends the `ParagraphText` component, inheriting all its properties.

## Props

| Prop | Default | Type | Description |
|------|---------|------|-------------|
| **size*** | — | `"xsmall"` \| `"small"` \| `"medium"` \| `"large"` \| `"xlarge"` \| `"xxlarge"` | Determines the button's text size |
| **variant** | `'clear'` | `"arrow"` \| `"underline"` \| `"clear"` | Controls the button's visual presentation |
| **disabled** | — | `false` \| `true` | Disables the button, preventing interaction |

*Required property

## Usage Examples

### Size Variations
Six size options available: `xsmall`, `small`, `medium`, `large`, `xlarge`, `xxlarge`

```jsx
<TextButton size="medium">Text button</TextButton>
<TextButton size="xlarge">Text button</TextButton>
```

### Variants

**Arrow variant** - displays a right-aligned arrow icon:
```jsx
<TextButton variant="arrow">Text button</TextButton>
```

**Underline variant** - adds text underline decoration:
```jsx
<TextButton variant="underline">Text button</TextButton>
```

**Clear variant** (default) - no additional styling

### Disabled State
```jsx
<TextButton disabled>Text button</TextButton>
```

Disabled buttons are non-interactive with reduced opacity (0.38).
