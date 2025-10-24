# Border Component Documentation

## Overview

The `Border` component creates visual dividers between UI elements, clarifying distinctions and expressing visual hierarchy. It's primarily used for separating lists and sections.

## Usage

### Dividing Items

Use the `Border` component to separate list items or sections with different `variant` options:

- **`full`**: Line spans the entire width
- **`padding24`**: Line has 24px margins on both sides

```jsx
<div style={{ display: 'flex', flexDirection: 'column', width: 350, borderRadius: 20, backgroundColor: adaptive.grey100 }}>
  <ListRow contents={<ListRow.Texts type="1RowTypeA" top="동해물과 백두산이" />} />
  <Border variant="full" />
  <ListRow contents={<ListRow.Texts type="1RowTypeA" top="동해물과 백두산이" />} />
</div>
```

### Adding Left Spacing

For cases requiring left margin, set `variant` to `padding24`:

```jsx
<div style={{ display: 'flex', flexDirection: 'column' }}>
  <ListRow contents={<ListRow.Texts type="1RowTypeA" top="동해물과 백두산이" />} />
  <Border variant="padding24" />
  <ListRow contents={<ListRow.Texts type="1RowTypeA" top="동해물과 백두산이" />} />
</div>
```

### Section Dividing

For spacing between sections, use `variant="height16"`:

```jsx
<div style={{ display: 'flex', flexDirection: 'column' }}>
  <ListRow contents={<ListRow.Texts type="1RowTypeA" top="동해물과 백두산이" />} />
  <Border variant="height16" />
  <ListRow contents={<ListRow.Texts type="1RowTypeA" top="동해물과 백두산이" />} />
</div>
```

## Props

| Prop | Default | Type | Description |
|------|---------|------|-------------|
| `variant` | `"full"` | `"full"` \| `"padding24"` \| `"height16"` | Determines border style; use `full` or `padding24` for item dividers, `height16` for section spacing |
| `height` | — | `string` | Customize height when `variant="height16"` |
