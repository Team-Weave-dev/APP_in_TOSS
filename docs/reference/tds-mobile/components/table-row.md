# TableRow Component Documentation

## Overview

The `TableRow` component arranges data horizontally in a concise, readable format. It's ideal for displaying information titles alongside their corresponding content with flexible text ratio and alignment options.

## Usage

### Props (TableRowProps)

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `left` | `React.ReactNode` | Yes | Element positioned on the left side; accepts strings, numbers, or React components |
| `right` | `React.ReactNode` | Yes | Element positioned on the right side; accepts strings, numbers, or React components |
| `align` | `"left"` \| `"space-between"` | Yes | Controls alignment direction |
| `leftRatio` | `number` | No | Sets left area width as a percentage of total width |

## Layout Patterns

### Space-Between Alignment

Using `align="space-between"` positions title and content at opposite ends, creating visual separation:

```jsx
<TableRow align="space-between" left="김토스" right="받는 분" />
<TableRow align="space-between" left="강토스" right="받는 분 통장표시" />
```

### Left Alignment

Using `align="left"` groups both elements toward the left side. The `leftRatio` prop adjusts the left area's proportional width (e.g., `leftRatio={30}` allocates 30% to the left):

```jsx
<TableRow align="left" left="김토스" right="받는 분" />
<TableRow align="left" left="강토스" right="받는 분 통장표시" leftRatio={30} />
```
