# IconButton Component Documentation

## Overview

The `IconButton` component enables users to trigger actions or events using icon-based buttons. It maintains a clean UI while conveying functionality intuitively through icons.

## Usage

### Variants

The component supports three style variants via the `variant` prop:

#### Clear
Displays only the icon without background. Background appears on interaction.

```jsx
<IconButton
  src="https://static.toss.im/icons/svg/icon-search-bold-mono.svg"
  variant="clear"
  aria-label="Search"
/>
```

#### Fill
Adds a filled background color, emphasizing the icon. Background disappears on click.

```jsx
<IconButton
  src="https://static.toss.im/icons/svg/icon-search-bold-mono.svg"
  variant="fill"
  aria-label="Search"
/>
```

#### Border
Includes a border outline that distinguishes the icon. Background appears on interaction.

```jsx
<IconButton
  src="https://static.toss.im/icons/svg/icon-search-bold-mono.svg"
  variant="border"
  aria-label="Search"
/>
```

## Customization

### Icon Color
Modify icon color using the `color` prop (works with `-mono` suffix icons only):

```jsx
<IconButton
  src="https://static.toss.im/icons/svg/icon-search-bold-mono.svg"
  color="adaptive.red500"
  aria-label="Search"
/>
```

### Background Color
Set background using `bgColor`. Behavior varies by variant:

```jsx
<IconButton
  src="https://static.toss.im/icons/svg/icon-search-bold-mono.svg"
  variant="fill"
  bgColor="adaptive.greyOpacity100"
  aria-label="Search"
/>
```

### Icon Size
Control icon dimensions via `iconSize`:

```jsx
<IconButton
  src="https://static.toss.im/icons/svg/icon-search-bold-mono.svg"
  iconSize={20}
  aria-label="Search"
/>
```

## Props Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| **aria-label*** | string | — | Required. Describes button action for accessibility |
| variant | `"clear"` \| `"fill"` \| `"border"` | `"clear"` | Button style variant |
| src | string | — | Icon URL (cannot use with `name`) |
| name | string | — | Icon name (cannot use with `src`) |
| color | string | — | Icon color (mono icons only) |
| bgColor | string | `adaptive.greyOpacity100` | Button background color |
| iconSize | number | 24 | Icon size in pixels |

## Accessibility

The `aria-label` attribute is **mandatory**. Since icons alone lack semantic meaning, explicitly describe the action:

```jsx
<IconButton
  src="https://static.toss.im/icons/svg/icon-search-bold-mono.svg"
  aria-label="Search functionality"
/>
```
