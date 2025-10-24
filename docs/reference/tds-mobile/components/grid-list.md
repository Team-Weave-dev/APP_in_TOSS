# GridList Component Documentation

## Overview

The `GridList` component arranges `GridList.Item` components in a grid layout. Each item displays an image and text, with a touch expansion effect on mobile for user feedback.

## Basic Usage

```jsx
<GridList>
  <GridList.Item
    image={
      <img
        src="https://static.toss.im/icons/png/4x/icn-bank-toss.png"
        style={{ width: '24px', height: '24px' }}
      />
    }
  >
    Item 1
  </GridList.Item>
  <GridList.Item
    image={
      <img
        src="https://static.toss.im/icons/png/4x/icn-bank-toss.png"
        style={{ width: '24px', height: '24px' }}
      />
    }
  >
    Item 2
  </GridList.Item>
</GridList>
```

## Column Variants

### Single Column (column={1})

Best for lengthy content or emphasizing high-priority menu items.

```jsx
<GridList column={1}>
  <GridList.Item image={<img src="..." />}>1-column grid</GridList.Item>
  <GridList.Item image={<img src="..." />}>1-column grid</GridList.Item>
</GridList>
```

### Two Columns (column={2})

Ideal for larger item sizes and improved readability.

```jsx
<GridList column={2}>
  <GridList.Item image={<img src="..." />}>2-column grid</GridList.Item>
  <GridList.Item image={<img src="..." />}>2-column grid</GridList.Item>
  <GridList.Item image={<img src="..." />}>2-column grid</GridList.Item>
</GridList>
```

### Three Columns (column={3})

"The most common layout efficiently displays numerous items on one screen," suited for categories and menus.

```jsx
<GridList column={3}>
  <GridList.Item image={<img src="..." />}>3-column grid</GridList.Item>
  <GridList.Item image={<img src="..." />}>3-column grid</GridList.Item>
  <GridList.Item image={<img src="..." />}>3-column grid</GridList.Item>
</GridList>
```

## API Reference

### GridListProps

| Property | Default | Type | Description |
|----------|---------|------|-------------|
| **column** | `3` | `1 \| 2 \| 3` | Controls grid column count |
| **children** | — | `React.ReactNode` | Child elements, typically `GridList.Item` components |

### GridListItemProps

| Property | Default | Type | Description |
|----------|---------|------|-------------|
| **image*** | — | `React.ReactNode` | Image element displayed in the item |
| **children** | — | `React.ReactNode` | Text rendered below image via `Paragraph` component |

*Required prop
