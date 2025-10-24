# NumericSpinner Component Documentation

## Overview

The `NumericSpinner` component enables easy integer input through increment/decrement buttons, ideal for numeric entry without keyboard interaction.

## Usage

### Controlled Component (External State Management)

Manage the spinner's value externally using `number` and `onNumberChange` props:

```jsx
function Controlled() {
  const [value, setValue] = React.useState(0);
  return (
    <NumericSpinner
      size="large"
      number={value}
      onNumberChange={(number) => setValue(number)}
    />
  );
}
```

### Uncontrolled Component (Internal State Management)

Use `defaultNumber` for internal state management without external tracking:

```jsx
<NumericSpinner size="large" defaultNumber={0} />
```

### Size Variants

Available sizes: `tiny`, `small`, `medium`, `large`

```jsx
<NumericSpinner size="tiny" defaultNumber={0} />
<NumericSpinner size="small" defaultNumber={0} />
<NumericSpinner size="medium" defaultNumber={0} />
<NumericSpinner size="large" defaultNumber={0} />
```

### Disabled State

```jsx
<NumericSpinner size="large" defaultNumber={0} disable />
```

## Props Interface

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| **size** | `"tiny"` \| `"small"` \| `"medium"` \| `"large"` | — | Component dimensions |
| **number** | `number` | `0` | Current displayed value (external control) |
| **defaultNumber** | `number` | — | Initial value (internal management) |
| **minNumber** | `number` | `0` | Minimum allowed value |
| **maxNumber** | `number` | `999` | Maximum allowed value |
| **disable** | `boolean` | `false` | Disables interaction when true |
| **onNumberChange** | `(number: number) => void` | — | Callback for value changes |

## Accessibility

The component includes built-in accessibility features with semantic button elements and `aria-live="polite"` announcements. Customize button descriptions using `decreaseAriaLabel` and `increaseAriaLabel` for context-specific clarity:

```jsx
<NumericSpinner
  decreaseAriaLabel="Reduce item quantity"
  increaseAriaLabel="Increase item quantity"
/>
```
