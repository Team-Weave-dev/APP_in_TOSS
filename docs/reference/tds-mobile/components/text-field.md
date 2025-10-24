# TextField Component Documentation

## Overview

The TextField component is a foundational input element in the Toss Design System for mobile. It "accepts user input with various design options and attributes" supporting everything from standard text input to password fields.

The component provides:
- Clear labeling through `label` and `placeholder` properties
- Contextual guidance via `help` text
- Multiple visual variants for different use cases
- Error state indicators and disabled states
- Flexible customization options

## Component Variants

| Variant | Purpose |
|---------|---------|
| `box` | Default rectangular style, clear and concise |
| `line` | Underline-only style for minimalist design |
| `big` | Enlarged text emphasizing critical input |
| `hero` | Large format for attention-grabbing fields |

## Core Props

### TextFieldProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant`* | `"box" \| "line" \| "big" \| "hero"` | — | Field appearance style |
| `label` | `string` | — | Header label text |
| `labelOption` | `"appear" \| "sustain"` | `"appear"` | Label visibility behavior |
| `help` | `React.ReactNode` | — | Helper text below field |
| `hasError` | `boolean` | `false` | Error state indicator |
| `disabled` | `boolean` | `false` | Disable field interaction |
| `placeholder` | `string` | — | Input placeholder text |
| `prefix` | `string` | — | Text prefix (e.g., "$") |
| `suffix` | `string` | — | Text suffix (e.g., "kg") |
| `value` | `string \| number` | — | Controlled input value |
| `defaultValue` | `string` | — | Initial uncontrolled value |

### Event Handlers

- `onChange(event)` - Triggered on value changes
- `onFocus(event)` - Triggered on field focus
- `onBlur(event)` - Triggered on focus loss

## Label Behavior

**`sustain`** mode keeps the label permanently visible, reducing confusion with multiple fields.

**`appear`** mode displays the label only when the field has content, creating a cleaner appearance.

## Specialized Variants

### TextField.Clearable
Includes a clear button that removes input and triggers `onClear()` callback—useful for search and filter scenarios.

### TextField.Password
Masks sensitive input by default. Provides visibility toggle via `onVisibilityChange(visible)` callback for user convenience without compromising security.

### TextField.Button
Behaves like an input field but functions as a clickable button element, triggering `onClick()` for selection or action workflows.

## Validation Pattern

Use `hasError` with conditional `help` text for real-time validation feedback:

```javascript
const [value, setValue] = useState('');
const isInvalid = value.length > 2;

<TextField
  hasError={isInvalid}
  help={isInvalid ? "Keep under 3 characters" : null}
  value={value}
  onChange={(e) => setValue(e.target.value)}
/>
```

## Common Use Cases

- **Search fields** - Pair with `TextField.Clearable`
- **Password protection** - Use `TextField.Password`
- **Financial input** - Apply `prefix="$"` or `suffix="₩"`
- **Selection triggers** - Implement `TextField.Button`
- **Form validation** - Combine `hasError` with contextual `help`
