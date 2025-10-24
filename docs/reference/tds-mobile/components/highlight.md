# Highlight Component Documentation

## Overview

The `Highlight` component emphasizes specific screen areas by dimming the surrounding content. When activated, it draws user attention to a designated region with optional messaging.

## Basic Usage

```jsx
<Highlight open>
  <div>Item to highlight</div>
</Highlight>
```

## Key Features

### Padding
Add internal spacing around the highlighted area:

```jsx
<Highlight open padding={10}>
  <div>Item to highlight</div>
</Highlight>
```

### Messages
Display descriptive text near the highlighted region:

```jsx
<Highlight
  open
  message="Highlight message"
  messageXAlignment="center"
>
  <div>Item to highlight</div>
</Highlight>
```

### Message Alignment & Styling
Control message positioning and appearance:

```jsx
<Highlight
  open
  message="Long highlight message text here"
  messageXAlignment="right"
  messageYAlignment="bottom"
  messageColor="pink"
>
  <div>Item to highlight</div>
</Highlight>
```

The system automatically determines alignment based on available space unless explicitly set.

## Props Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| **open** | boolean | - | Controls visibility of highlighted area |
| **padding** | number | 0 | Internal padding in pixels |
| **delay** | number | 0 | Delay before display (seconds) |
| **message** | string \| function | - | Descriptive text or custom renderer |
| **messageColor** | string | white | Message text color |
| **messageXAlignment** | "left" \| "center" \| "right" | auto | Horizontal message alignment |
| **messageYAlignment** | "top" \| "bottom" | auto | Vertical message alignment |
| **highlighterClassname** | string | - | Additional styling class |
| **onClick** | () => void | - | Handler for outside-area clicks |
| **onExited** | () => void | - | Handler for animation completion |

## Native Integration

Within Toss app environments, trigger native highlights via app bridge using `showHighlight`.
