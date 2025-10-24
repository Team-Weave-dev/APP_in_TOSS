# Loader Component Documentation

## Overview

The `Loader` component provides visual feedback during content loading, data fetching, or ongoing operations.

## Usage

### Basic Implementation

```jsx
<Loader />
```

### Size Configuration

Control the loader size using the `size` prop with values: `small`, `medium` (default), or `large`.

```jsx
<div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
  <Loader size="small" />
  <Loader size="medium" />
  <Loader size="large" />
</div>
```

### Type Configuration

Set the loader appearance with the `type` prop: `primary` (default), `dark`, or `light`. The `light` type works best on dark backgrounds.

```jsx
<div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
  <Loader type="primary" />
  <Loader type="dark" />
  <Loader type="light" style={{ background: 'grey' }} />
</div>
```

### Adding Labels

Display descriptive text below the loader using the `label` prop to explain loading status or current operations.

```jsx
<Loader label={'Loading your card information now.'} />
```

## Props Interface

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `"small" \| "medium" \| "large"` | `'medium'` | Controls component size |
| `type` | `"primary" \| "dark" \| "light"` | `'primary'` | Sets visual appearance and color |
| `label` | `string` | — | Text displayed below loader; supports multiline |
| `style` | `React.CSSProperties` | — | Inline styles |
| `className` | `string` | — | CSS class name |
| `id` | `string` | — | Unique identifier |
