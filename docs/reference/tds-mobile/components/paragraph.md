# Paragraph Component Documentation

## Overview

The `Paragraph` component displays text with support for combining various sub-elements to create complex layouts. It enables inline rendering of text, icons, badges, and links within a single semantic unit.

## Usage

### Basic Text Display

Use `Paragraph.Text` to render text content:

```jsx
<Paragraph typography="t5">
  <Paragraph.Text>동해물과 백두산이 마르고 닳도록</Paragraph.Text>
  <Paragraph.Text>하느님이 보우하사</Paragraph.Text>
  <Paragraph.Text>우리나라 만세</Paragraph.Text>
</Paragraph>
```

### Adding Icons

Insert icons using `Paragraph.Icon`:

```jsx
<Paragraph typography="t5">
  <Paragraph.Text>{`동해물과 백두산이\n마르고 닳도록`}</Paragraph.Text>
  <Paragraph.Icon name="heart-line" />
  <Paragraph.Text>하느님이 보우하사</Paragraph.Text>
</Paragraph>
```

### Adding Badges

Apply badges with `Paragraph.Badge`:

```jsx
<Paragraph typography="t5">
  <Paragraph.Badge color="blue" variant="fill">우리</Paragraph.Badge>
  <Paragraph.Badge color="red" variant="weak">나라</Paragraph.Badge>
</Paragraph>
```

### Adding Links

Create links with `Paragraph.Link`. Two styles available: `underline` and `none` (clear):

```jsx
<Paragraph typography="t5">
  <Paragraph.Text>일반 텍스트 사이에 </Paragraph.Text>
  <Paragraph.Link as="a" href="https://toss.im" type="underline">
    <Paragraph.Text>밑줄이 있는 링크</Paragraph.Text>
  </Paragraph.Link>
</Paragraph>
```

## Props Reference

### Paragraph

| Prop | Default | Type | Description |
|------|---------|------|-------------|
| `typography` | — | Typography sizes (t1-t7, st1-st13) | Controls text size |
| `display` | `'block'` | `'block' \| 'inline'` | Display property |
| `ellipsisAfterLines` | — | number | Line clamping with ellipsis |
| `textAlign` | — | CSS text-align values | Text alignment |
| `fontWeight` | `'regular'` | `'regular' \| 'medium' \| 'semibold' \| 'bold'` | Weight |
| `color` | — | string | CSS color or color name |

### ParagraphText

| Prop | Default | Type | Description |
|------|---------|------|-------------|
| `children` | — | ReactNode | Text content |
| `typography` | — | Typography sizes | Override parent size |
| `fontWeight` | — | Weight options | Override weight |
| `color` | — | string | Override color |

### ParagraphBadge

| Prop | Default | Type | Description |
|------|---------|------|-------------|
| `style` | — | `'fill' \| 'weak'` | Badge appearance |
| `type` | — | Color types | Badge color |
| `children` | — | ReactNode | Badge content |
| `typography` | — | Typography sizes | Text size |

### ParagraphLink

| Prop | Default | Type | Description |
|------|---------|------|-------------|
| `type` | `'clear'` | `'underline' \| 'clear'` | Link style |
| `color` | Blue 500 | string | Link color |
| `typography` | — | Typography sizes | Text size |
| `fontWeight` | — | Weight options | Text weight |

### ParagraphIcon

| Prop | Default | Type | Description |
|------|---------|------|-------------|
| `typography` | — | Typography sizes | Icon height |
