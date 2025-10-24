# ListFooter Component Documentation

## Overview

The `ListFooter` component displays at the end of a list to provide users with options to load more items or expand the list. It typically shows "View More" text with customizable visual elements.

## Usage

### Basic Text Usage

Display simple text by passing a string to `children`. This automatically renders using the `ListFooter.Text` component:

```jsx
<ListFooter>더 보기</ListFooter>
<ListFooter textColor={adaptive.grey600}>더 보기</ListFooter>
```

### With Custom Text Styling

Pass a `ListFooter.Text` component for advanced formatting:

```jsx
<ListFooter>
  <ListFooter.Text color={adaptive.blue400} fontWeight="bold">
    더 보기
  </ListFooter.Text>
</ListFooter>
```

### With Icons

Add icons using the `icon` prop. Accepts either icon name strings or custom icon components:

```jsx
<ListFooter icon="icon-plus-small-mono">더 보기</ListFooter>
<ListFooter
  icon="icon-arrow-down-mono"
  iconColor={adaptive.grey600}
  textColor={adaptive.grey600}
>
  더 보기
</ListFooter>
```

### Border Styles

Control the top divider appearance with the `border` prop:

- **`full`** (default): Full-width divider
- **`indented`**: Divider with left margin
- **`none`**: No divider

```jsx
<ListFooter border="full">더 보기</ListFooter>
<ListFooter border="indented">더 보기</ListFooter>
<ListFooter border="none">더 보기</ListFooter>
```

### Custom Hairline

Fine-tune the divider using `hairline` with `ListFooter.Hairline`:

```jsx
<ListFooter
  hairline={
    <ListFooter.Hairline
      indent={50}
      style={{ background: adaptive.blue100 }}
    />
  }
>
  더 보기
</ListFooter>
```

### Shadow Effects

Add shadow when interactive by providing `onClick`:

```jsx
<ListFooter icon="icon-plus-small-mono" onClick={handleClick}>
  더 보기
</ListFooter>
```

Customize shadow with `ListFooter.Shadow`:

```jsx
<ListFooter
  icon="icon-plus-small-mono"
  onClick={handleClick}
  shadow={
    <ListFooter.Shadow
      style={{ background: `radial-gradient(closest-side, ${adaptive.blue100})` }}
    />
  }
>
  더 보기
</ListFooter>
```

## Accessibility

**Required:** Provide an `aria-label` attribute to describe the component's purpose for screen reader users:

```jsx
<ListFooter
  onClick={goToNextPage}
  aria-label="다음 페이지로 이동하기"
>
  <ListFooter.Text>더 보기</ListFooter.Text>
</ListFooter>
```

## Props

### ListFooterProps

| Prop | Default | Type | Description |
|------|------|---------|-------------|
| `border` | `"full"` | `"full" \| "indented" \| "none"` | Top divider style |
| `icon` | — | `string \| ReactElement` | Icon to display |
| `hairline` | — | `ReactElement` | Custom divider component |
| `shadow` | — | `ReactElement` | Custom shadow component |
| `textColor` | `adaptive.blue500` | `string` | Text color |
| `iconColor` | `adaptive.blue500` | `string` | Icon color |
| `children` | — | `string \| ReactElement` | Content text |

### ListFooterTextProps

| Prop | Default | Type | Description |
|------|------|---------|-------------|
| `color` | — | `string` | Text color |
| `fontWeight` | `"medium"` | `"regular" \| "medium" \| "semibold" \| "bold"` | Font weight |

### ListFooterIconProps

| Prop | Default | Type | Description |
|------|------|---------|-------------|
| `name` | — | `string` | Icon name (required) |
| `color` | — | `string` | Icon color |

### ListFooterHairlineProps

| Prop | Default | Type | Description |
|------|------|---------|-------------|
| `indent` | — | `number` | Left margin in pixels |
