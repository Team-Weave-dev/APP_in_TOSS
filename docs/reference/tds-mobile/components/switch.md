# Switch Component Documentation

## Overview

The `Switch` component is a UI element that toggles between two states (e.g., on/off, enabled/disabled). It provides an intuitive visual representation for activating or deactivating settings and options.

## Basic Usage

```jsx
function Basic() {
  const [checked, setChecked] = React.useState(true);
  return (
    <Switch
      checked={checked}
      onChange={() => setChecked((prev) => !prev)}
    />
  );
}
```

## States

### On/Off States
Display active and inactive switch configurations:

```jsx
<div style={{ display: 'flex', gap: '8px' }}>
  <Switch checked />
  <Switch checked={false} />
</div>
```

### Disabled State
Prevent user interaction and indicate unavailability:

```jsx
<div style={{ display: 'flex', gap: '8px' }}>
  <Switch checked disabled />
  <Switch checked={false} disabled />
</div>
```

### Remove Touch Animation
Disable the touch feedback animation on click:

```jsx
function Effects() {
  const [checked, setChecked] = React.useState(true);
  return (
    <Switch
      hasTouchEffect={false}
      checked={checked}
      onChange={() => setChecked((prev) => !prev)}
    />
  );
}
```

## Props

| Prop | Default | Type | Description |
|------|---------|------|-------------|
| `checked` | — | `boolean` | Controls the on/off state; pair with `onChange` handler |
| `disabled` | `false` | `boolean` | Disables interaction when `true` |
| `name` | — | `string` | Sets the HTML input `name` attribute |
| `hasTouchEffect` | `true` | `boolean` | Toggles click animation; set to `false` to disable |
| `onChange` | — | `(event, checked) => void` | Fires when state changes |
| `onClick` | — | `(event) => void` | Fires on click |

## Accessibility

Built-in ARIA support includes:

- **`role="switch"`**: Identifies component as a switch control
- **`aria-checked`**: Reflects current state to assistive technology
- **`aria-disabled`**: Announces disabled status

### Additional Labels

For icons or external labels, add descriptive context:

```jsx
<Switch
  checked={isDarkMode}
  onChange={toggleDarkMode}
  aria-label="다크 모드"
/>
```

Avoid redundant terms like "switch" or "on/off" in labels—focus on the feature being controlled.
