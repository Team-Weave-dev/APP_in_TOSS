# BoardRow Component Documentation

## Overview

The `BoardRow` component is an accordion-style element that displays information in a collapsible format. It's ideal for Q&A sections and organizing content in limited spaces.

## Basic Usage

```jsx
<BoardRow
  title="매도 환전이 무엇인가요?"
  prefix={<BoardRow.Prefix>Q</BoardRow.Prefix>}
  icon={<BoardRow.ArrowIcon />}
>
  <BoardRow.Text>주식 거래가 실시간이 아니기 때문에...</BoardRow.Text>
</BoardRow>
```

## Key Features

### Initial Open State
Use `initialOpened` to render with content expanded by default:

```jsx
<BoardRow initialOpened title="Question" ... >
  <BoardRow.Text>Answer content</BoardRow.Text>
</BoardRow>
```

### Controlled Open/Close
Manage panel state externally with `isOpened`, `onOpen`, and `onClose`:

```jsx
function OpenClose() {
  const [isOpened, setIsOpened] = React.useState(false);
  return (
    <BoardRow
      isOpened={isOpened}
      onOpen={() => setIsOpened(true)}
      onClose={() => setIsOpened(false)}
      ...
    >
      <BoardRow.Text>Content</BoardRow.Text>
    </BoardRow>
  );
}
```

### Content Options

**Simple text:**
```jsx
<BoardRow ... >
  <BoardRow.Text>Simple answer</BoardRow.Text>
</BoardRow>
```

**Rich content with Post:**
```jsx
<BoardRow ... >
  <Post.Paragraph typography="t6">Text</Post.Paragraph>
  <Post.Ul typography="t6">
    <Post.Li>List item</Post.Li>
  </Post.Ul>
</BoardRow>
```

## Props Reference

### BoardRowProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | ReactNode | Required | Header text |
| `initialOpened` | boolean | `false` | Open on first render |
| `isOpened` | boolean | `false` | Controlled open state |
| `onOpen` | () => void | — | Opens content |
| `onClose` | () => void | — | Closes content |
| `prefix` | ReactNode | — | Element before title |
| `icon` | ReactNode | — | Element after title |
| `children` | ReactNode | — | Content area |
| `liAttributes` | LiHTMLAttributes | — | HTML li attributes |

### BoardRowTextProps

| Prop | Type | Default |
|------|------|---------|
| `typography` | Typography | `"t6"` |

### BoardRowPrefixProps

| Prop | Type | Default |
|------|------|---------|
| `typography` | Typography | `"st8"` |
| `fontWeight` | string | `"regular"` |
| `color` | string | `adaptive.blue500` |

### BoardRowIconProps

| Prop | Type | Default |
|------|------|---------|
| `name` | string | `"icon-arrow-right-mono"` |
| `color` | string | `adaptive.grey400` |
| `size` | number | `24` |

## Accessibility

The component provides built-in accessibility support:

- Uses `<button>` semantics for clickable headers
- Automatically manages `aria-expanded` attribute
- Screen readers announce open/closed state
- Full keyboard navigation support
