# Post Component Documentation

## Overview

The `Post` component provides styled typography for post-format content, including titles, body text, and lists. It's commonly used for announcements and event pages.

## Components

### Headings

Four heading levels available with decreasing size:

- **Post.H1**: Largest title (default typography: `t2`)
- **Post.H2**: Large title (default typography: `t3`)
- **Post.H3**: Standard title (default typography: `st8`)
- **Post.H4**: Small title (default typography: `t5`)

```jsx
<Post.H1>Main Heading</Post.H1>
<Post.H2>Secondary Heading</Post.H2>
<Post.H3>Tertiary Heading</Post.H3>
<Post.H4>Small Heading</Post.H4>
```

### Paragraph

Body text component with customizable typography:

```jsx
<Post.Paragraph>
  Main content text goes here.
</Post.Paragraph>

<Post.Paragraph typography="t7">
  Smaller paragraph text.
</Post.Paragraph>
```

### Lists

**Ordered List** (numbered):
```jsx
<Post.Ol>
  <Post.Li>First item</Post.Li>
  <Post.Li>Second item</Post.Li>
</Post.Ol>
```

**Unordered List** (bullets):
```jsx
<Post.Ul>
  <Post.Li>Item one</Post.Li>
  <Post.Li>Item two</Post.Li>
</Post.Ul>
```

Supports nested lists for hierarchical content.

### Divider

Horizontal rule for content separation:

```jsx
<Post.Hr />
```

## Props

All components support:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `typography` | string | Component-specific | Text style (t1–t7, st1–st13) |
| `paddingBottom` | string \| number | – | Bottom margin in pixels |

Typography options (t1–t7 for body, st1–st13 for subtitles) scale across different screen sizes and design contexts.
