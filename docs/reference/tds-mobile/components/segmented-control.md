# SegmentedControl Component Documentation

## Overview

The `SegmentedControl` component enables users to select a single option from multiple choices, functioning similarly to a radio button group.

## Key Features

- **Single Selection**: Users can select only one item at a time
- **Size Options**: Supports `small` and `large` sizes
- **Layout Modes**: Offers `fixed` and `fluid` alignment options
- **Accessible**: Built-in ARIA support for screen readers

## Usage Examples

### Controlled State Management

Manage selection state externally using `value` and `onChange`:

```jsx
function Controlled() {
  const [value, setValue] = React.useState('1');
  return (
    <SegmentedControl value={value} onChange={(value) => setValue(value)}>
      <SegmentedControl.Item value="1">Item 1</SegmentedControl.Item>
      <SegmentedControl.Item value="2">Item 2</SegmentedControl.Item>
      <SegmentedControl.Item value="3">Item 3</SegmentedControl.Item>
    </SegmentedControl>
  );
}
```

### Uncontrolled State Management

Use `defaultValue` for internal state management:

```jsx
<SegmentedControl defaultValue="1">
  <SegmentedControl.Item value="1">Item 1</SegmentedControl.Item>
  <SegmentedControl.Item value="2">Item 2</SegmentedControl.Item>
  <SegmentedControl.Item value="3">Item 3</SegmentedControl.Item>
</SegmentedControl>
```

### Size Variants

```jsx
<SegmentedControl size="small" defaultValue="1">
  {/* items */}
</SegmentedControl>

<SegmentedControl size="large" defaultValue="1">
  {/* items */}
</SegmentedControl>
```

### Scrollable Layout

Enable horizontal scrolling with `alignment="fluid"` for many items or long labels:

```jsx
<SegmentedControl defaultValue="1" alignment="fluid">
  {Array.from({ length: 20 }, (_, index) => (
    <SegmentedControl.Item key={index} value={String(index + 1)}>
      Item {index + 1}
    </SegmentedControl.Item>
  ))}
</SegmentedControl>
```

## Props

### SegmentedControlProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `React.ReactNode` | — | One or more `SegmentedControl.Item` components |
| `size` | `"small"` \| `"large"` | `"small"` | Controls component sizing |
| `alignment` | `"fixed"` \| `"fluid"` | `"fixed"` | Fixed width or content-based sizing |
| `value` | `string` | — | Selected item value (controlled mode) |
| `defaultValue` | `string` | — | Initial selected value (uncontrolled mode) |
| `onChange` | `(v: string) => void` | — | Callback when selection changes |

### SegmentedControlItemProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `React.ReactNode` | — | Item label text |
| `value` | `string` | — | Value passed to parent's `onChange` |
| `size` | `"small"` \| `"large"` | — | Overrides parent size styling |

## Accessibility

The component implements standard ARIA patterns:

- **`role="radiogroup"`**: Identifies the container as a radio group
- **`role="radio"`**: Labels each item as selectable
- **`aria-checked`**: Automatically reflects selection state
- **`aria-labelledby`**: Associates labels with interactive elements
