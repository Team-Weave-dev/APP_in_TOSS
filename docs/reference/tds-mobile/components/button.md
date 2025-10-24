# Button Component Documentation - TDS Mobile

## Overview

The Button component enables users to trigger actions or execute events. It handles various interactions including form submission, dialog opening, action cancellation, and deletion operations.

## Usage Examples

### Basic Button
```jsx
<Button>Click me</Button>
```

### Sizing

Control button dimensions using the `size` prop with options: `small`, `medium`, `large`, `xlarge`.

```jsx
<Button size="small">Small</Button>
<Button size="medium">Medium</Button>
<Button size="large">Large</Button>
<Button size="xlarge">XLarge</Button>
```

### Variants

#### Fill Variant
High saturation design emphasizing primary actions with strong visual prominence.

```jsx
<Button color="primary" variant="fill">Primary</Button>
<Button color="dark" variant="fill">Dark</Button>
<Button color="danger" variant="fill">Danger</Button>
<Button color="light" variant="fill">Light</Button>
```

#### Weak Variant
Lower saturation for secondary or less important actions, appearing semi-transparent.

```jsx
<Button color="primary" variant="weak">Primary</Button>
<Button color="dark" variant="weak">Dark</Button>
<Button color="danger" variant="weak">Danger</Button>
<Button color="light" variant="weak">Light</Button>
```

### Display Modes

Control layout behavior using the `display` prop:

- **`inline`**: Aligns alongside other elements
- **`block`**: Wraps to new line, expands to screen width
- **`full`**: Occupies entire parent width

```jsx
<Button display="inline">Inline</Button>
<Button display="block">Block</Button>
<Button display="full">Full</Button>
```

### Loading State

Indicate loading with three sequential indicators; button width remains constant.

```jsx
<Button loading>Primary</Button>
<Button loading disabled>Primary</Button>
```

### Disabled State

Prevent interaction and signal unavailability visually.

```jsx
<Button disabled>Primary</Button>
```

### Custom Colors

Override styling with CSS variables:

```jsx
<Button style={{
  '--button-color': 'white',
  '--button-background-color': 'red'
}}>응모하기</Button>
```

**Available CSS Variables:**
- `--button-color`: Text color
- `--button-background-color`: Background color
- `--button-disabled-opacity-color`: Disabled background transparency
- `--button-disabled-text-opacity`: Disabled text transparency
- `--button-gradient-color`: Loading gradient effect
- `--button-loader-color`: Loading indicator color
- `--button-loading-background-color`: Loading dim layer
- `--button-loading-opacity`: Loading dim transparency
- `--button-pressed-background-color`: Pressed state dim
- `--button-pressed-opacity`: Pressed state transparency

## Accessibility

### Built-in Features

| Feature | Effect | Benefit |
|---------|--------|---------|
| `button` role | Recognized as "button" by screen readers | Clarifies interactive element |
| `disabled` attribute | Announces unavailability | Users know interaction impossible |
| `aria-busy` (loading) | Signals work-in-progress state | Indicates ongoing operation |

### Additional Requirements

#### Semantic HTML
```jsx
<Button as="button" htmlType="submit">Submit</Button>
<Button as="a" href="https://example.com">Link</Button>
```

#### Icon-Only Buttons
```jsx
<Button aria-label="좋아요 표시"><HeartIcon /></Button>
<Button aria-label="계정 삭제 - 주의 필요" type="danger">삭제</Button>
```

#### Loading with Context
```jsx
<Button loading aria-label="데이터 로딩 중">
  <LoadingIcon />
</Button>
```

## Props Interface

| Prop | Default | Type | Description |
|------|---------|------|-------------|
| `as` | `'button'` | `"button" \| "a"` | Element tag selection |
| `color` | `'primary'` | `"primary" \| "danger" \| "light" \| "dark"` | Button color theme |
| `variant` | `'fill'` | `"fill" \| "weak"` | Visual style intensity |
| `display` | `'inline'` | `"inline" \| "block" \| "full"` | Layout behavior |
| `size` | `'xlarge'` | `"small" \| "medium" \| "large" \| "xlarge"` | Dimensions |
| `loading` | — | `boolean` | Shows loading spinner |
| `disabled` | — | `boolean` | Disables interaction |
| `type` | — | `"button" \| "submit" \| "reset"` | HTML button type |
| `htmlStyle` | — | `React.CSSProperties` | Inline styles |
