# Checkbox Component Documentation

## Overview

The `Checkbox` component enables users to select one or multiple items. It supports checked and unchecked states with simultaneous multi-item selection capabilities.

## Variants

The component offers two visual presentations:

- **`<Checkbox.Circle />`**: Checkmark icon surrounded by a circular border
- **`<Checkbox.Line />`**: Standalone checkmark icon without enclosure

## State Management

### Controlled Component
Use `checked` and `onCheckedChange` props for external state management:

```jsx
function Controlled() {
  const [checked, setChecked] = React.useState(true);
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <Checkbox.Circle checked={checked} onCheckedChange={setChecked} />
      <Checkbox.Line checked={checked} onCheckedChange={setChecked} />
    </div>
  );
}
```

### Uncontrolled Component
Use `defaultChecked` for internal state management:

```jsx
<div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
  <Checkbox.Circle defaultChecked={true} />
  <Checkbox.Line defaultChecked={true} />
</div>
```

## Customization

### Size Adjustment
Control dimensions using the `size` property (default: 24):

```jsx
<Checkbox.Circle defaultChecked={true} size={24} />
```

### Disabled State
Disable interaction with the `disabled` prop. Clicking produces a shake animation:

```jsx
<Checkbox.Circle defaultChecked={true} disabled />
```

### Radio Button Behavior
Convert to radio button by setting `inputType="radio"`:

```jsx
<Checkbox.Circle
  inputType="radio"
  value="1"
  checked={checked === '1'}
  onChange={(e) => setChecked(e.target.value)}
/>
```

## Props Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `inputType` | `"checkbox"` \| `"radio"` | `"checkbox"` | HTML input type |
| `size` | `number` | `24` | Component dimensions |
| `checked` | `boolean` | - | External checked state |
| `onCheckedChange` | `(checked: boolean) => void` | - | Selection change handler |
| `defaultChecked` | `boolean` | - | Initial checked state |
| `disabled` | `boolean` | - | Disable interaction |

## Accessibility

Built-in support includes:
- `role="checkbox"` and `tabindex="0"` for screen reader identification
- `aria-checked` attribute reflecting current state
- `aria-disabled="true"` for disabled instances

**Required**: Developers must provide `aria-label` prop to describe the checkbox purpose:

```jsx
<Checkbox.Circle
  checked={checked}
  onCheckedChange={setChecked}
  aria-label="Terms agreement"
/>
```

Note: Avoid including "checkbox" in the label text since screen readers announce this automatically.
