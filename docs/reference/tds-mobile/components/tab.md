# Tab Component Documentation - TDS Mobile

## Overview

The Tab component enables efficient content switching across multiple sections on a single screen. Each tab displays a content list, and users can switch between corresponding content based on their selection.

## Basic Usage

```jsx
function Basic() {
  const [selected, setSelected] = React.useState(0);

  return (
    <Tab onChange={(index) => setSelected(index)}>
      <Tab.Item selected={selected === 0}>Tab 1</Tab.Item>
      <Tab.Item selected={selected === 1}>Tab 2</Tab.Item>
      <Tab.Item selected={selected === 2}>Tab 3</Tab.Item>
    </Tab>
  );
}
```

## Props

### Tab Component Props

| Prop | Default | Type | Description |
|------|---------|------|-------------|
| **children** | - | `React.ReactNode` | One or more Tab.Item components |
| **onChange** | - | `(index: number, key?: string \| number) => void` | Callback when selected tab changes |
| **size** | `'large'` | `"large"` \| `"small"` | Controls height and text sizing |
| **fluid** | `false` | `boolean` | Enables horizontal scroll for many items |
| **itemGap** | - | `number` | Gap between tabs in pixels |
| **ariaLabel** | - | `string` | Accessibility label for assistive tech |

### Tab.Item Props

| Prop | Default | Type | Description |
|------|---------|------|-------------|
| **selected** | - | `boolean` | Marks item as selected state |
| **redBean** | `false` | `boolean` | Shows red notification badge |

## Variants

### Size Variants

Adjust sizing via the `size` property:

```jsx
<Tab size="small" onChange={(index) => setSelected(index)}>
  <Tab.Item selected={selected === 0}>Small</Tab.Item>
  <Tab.Item selected={selected === 1}>Small</Tab.Item>
</Tab>

<Tab size="large" onChange={(index) => setSelected(index)}>
  <Tab.Item selected={selected === 0}>Large</Tab.Item>
  <Tab.Item selected={selected === 1}>Large</Tab.Item>
</Tab>
```

### Custom Spacing

Control tab spacing with `itemGap`:

```jsx
<Tab itemGap={36} onChange={(index) => setSelected(index)}>
  <Tab.Item selected={selected === 0}>Tab 1</Tab.Item>
  <Tab.Item selected={selected === 1}>Tab 2</Tab.Item>
  <Tab.Item selected={selected === 2}>Tab 3</Tab.Item>
</Tab>
```

### Scrollable Content

Enable horizontal scrolling for multiple items using `fluid`:

```jsx
<Tab fluid onChange={(index) => setSelected(index)}>
  {Array.from({ length: 20 }, (_, index) => (
    <Tab.Item key={index} selected={selected === index}>
      {index === 0 ? 'Tab 1' : 'Long text'}
    </Tab.Item>
  ))}
</Tab>
```

## Accessibility

### Built-in Features

- `role="tablist"` on container identifies tab list to screen readers
- `role="tab"` on items marks individual tabs
- `aria-selected` automatically updates based on selected state
- Red notification badge includes "(Update available)" title

### Additional Considerations

When using icons or ambiguous content, provide `aria-label` without repeating "tab":

```jsx
<button role="tab" aria-selected="false" aria-label="Settings">
  <SettingsIcon />
</button>
```
