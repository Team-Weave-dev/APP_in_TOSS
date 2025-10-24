# Tooltip Component Documentation

## Overview

The `Tooltip` component displays supplementary information when users focus on specific elements, typically small UI components like icons or buttons.

## Basic Usage

### State Management

**External State Control:**
```jsx
const [isOpen, setIsOpen] = useState(false);
<Tooltip message={'Tooltip text'} open={isOpen}>
  <Button onClick={() => setIsOpen(!isOpen)}>Click Me</Button>
</Tooltip>
```

**Internal State Control:**
```jsx
<Tooltip message={'Tooltip text'} openOnHover>
  <Button>Hover Me</Button>
</Tooltip>
```

## Key Props

| Prop | Default | Type | Description |
|------|---------|------|-------------|
| `message` | - | `React.ReactNode` | "The content displayed within the tooltip" |
| `size` | `'medium'` | `'small'` \| `'medium'` \| `'large'` | Controls tooltip dimensions |
| `placement` | `'bottom'` | `'top'` \| `'bottom'` | Vertical positioning relative to trigger |
| `open` | - | `boolean` | External open/close state |
| `defaultOpen` | `false` | `boolean` | Initial state for internal management |
| `openOnHover` | `false` | `boolean` | Opens on mouse hover |
| `openOnFocus` | `false` | `boolean` | Opens when element receives focus |
| `dismissible` | `false` | `boolean` | Closes on outside click or Escape key |
| `autoFlip` | `false` | `boolean` | "Auto-adjusts position when tooltip exits viewport" |
| `offset` | - | `number` | Distance from trigger element |
| `messageAlign` | `'left'` | `'left'` \| `'center'` \| `'right'` | Text alignment within tooltip |
| `anchorPositionByRatio` | `0.5` | `number` | Arrow position (0-1 range) |
| `motionVariant` | `'weak'` | `'weak'` \| `'strong'` | Animation intensity |
| `clipToEnd` | `'none'` | `'left'` \| `'right'` \| `'none'` | Arrow clipping direction |
| `strategy` | `'absolute'` | `'absolute'` \| `'fixed'` | CSS positioning method |

## Common Patterns

**Hover activation:**
```jsx
<Tooltip message={'Help text'} openOnHover>
  <Button>Hover</Button>
</Tooltip>
```

**Focus activation with dismissible:**
```jsx
<Tooltip message={'Info'} openOnFocus dismissible>
  <Button>Focus Me</Button>
</Tooltip>
```

**Custom sizing and positioning:**
```jsx
<Tooltip message={'Tip'} size="large" placement="top" offset={15}>
  <Button>Large Tooltip</Button>
</Tooltip>
```
