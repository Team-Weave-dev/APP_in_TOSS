# Bubble Component Documentation

## Overview

The `Bubble` component is used to display messages in conversational UI, distinguishing between user and other party messages through color and shape.

## Usage

### Distinguishing Message Origin

Use the `background` prop to differentiate message sources:
- `blue`: Message from current user
- `grey`: Message from other party

```jsx
<div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
  <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
    <Bubble background="grey" withTail>
      Hello
    </Bubble>
  </div>
  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
    <Bubble background="blue" withTail>
      Hello
    </Bubble>
  </div>
</div>
```

### Adding Tail to Bubble

Control whether the bubble displays a tail using the `withTail` prop:
- `grey` bubbles show tail on left
- `blue` bubbles show tail on right

```jsx
<Bubble background="grey" withTail={false}>
  Hello
</Bubble>

<Bubble background="grey" withTail>
  How are you?
</Bubble>
```

## Props Interface

### BubbleProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| **background** | `"blue"` \| `"grey"` | Required | Sets bubble background color |
| **withTail** | `boolean` | `true` | Determines if bubble displays tail |
| **children** | `React.ReactNode` | — | Content inside bubble (typically string) |

The component extends `HTMLAttributes<HTMLDivElement>`, supporting all standard HTML div attributes.
