# Rating Component Documentation

## Overview

The `Rating` component enables users to provide evaluations of items or content by selecting a number of icons to express satisfaction levels. Changes are reflected visually in real-time, and the component supports both interactive and read-only modes.

## Usage Examples

### Basic Implementation

```jsx
function Basic() {
  const [value, setValue] = React.useState(5);

  return (
    <Rating
      readOnly={false}
      value={value}
      max={5}
      size="medium"
      aria-label="별점 평가"
      onValueChange={setValue}
    />
  );
}
```

### Interactive Sizing

For interactive ratings, adjust dimensions using three available sizes:

```jsx
<Rating readOnly={false} value={5} max={5} size="medium" />
<Rating readOnly={false} value={5} max={5} size="large" />
<Rating readOnly={false} value={5} max={5} size="big" />
```

### Read-Only Variants

The read-only mode offers three display styles—`full`, `compact`, and `iconOnly`—providing different visual presentations of the rating without user interaction capability.

```jsx
<Rating readOnly={true} value={5} max={5} size="medium" variant="full" />
<Rating readOnly={true} value={5} max={5} size="medium" variant="compact" />
<Rating readOnly={true} value={5} max={5} size="medium" variant="iconOnly" />
```

### Read-Only Sizing

Display-only ratings support five size options:

```jsx
<Rating readOnly={true} value={5} max={5} size="tiny" variant="full" />
<Rating readOnly={true} value={5} max={5} size="small" variant="full" />
<Rating readOnly={true} value={5} max={5} size="medium" variant="full" />
<Rating readOnly={true} value={5} max={5} size="large" variant="full" />
<Rating readOnly={true} value={5} max={5} size="big" variant="full" />
```

### Disabled State

Prevent interaction while maintaining visual representation:

```jsx
<Rating
  readOnly={false}
  value={3}
  max={5}
  size="medium"
  disabled={true}
  aria-label="현재 별점 현황"
  onValueChange={handleChange}
/>
```

## Props Interface

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `readOnly` | `boolean` | — | ✓ | Determines interactive vs. display-only behavior |
| `value` | `number` | — | ✓ | Current rating score |
| `size` | `string` | — | ✓ | Interactive: `medium`, `large`, `big`; Read-only: `tiny`, `small`, `medium`, `large`, `big` |
| `variant` | `string` | — | ✓ | Read-only only; `full`, `compact`, `iconOnly` |
| `max` | `number` | `5` | — | Maximum achievable score |
| `onValueChange` | `(value: number) => void` | `undefined` | — | Callback fired when rating changes (interactive mode only) |
| `disabled` | `boolean` | `false` | — | Disables interaction; unavailable in read-only mode |

## Accessibility

The component includes built-in support for assistive technologies:

- **`aria-label`**: Identifies the rating functionality to screen readers
- **`aria-valuetext`**: Announces current score (e.g., "5점 만점 중 3점")
- **`aria-hidden`**: Prevents redundant icon announcements
- Hidden `<input type="range" />` element supports keyboard navigation

```jsx
<Rating
  readOnly={false}
  value={3}
  max={5}
  size="medium"
  aria-label="별점평가"
  aria-valuetext="5점 만점 중 3점"
  onValueChange={setValue}
/>
```
