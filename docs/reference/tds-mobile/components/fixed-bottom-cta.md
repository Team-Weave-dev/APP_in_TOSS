# FixedBottomCTA Component Documentation

## Overview

The `FixedBottomCTA` component displays a fixed call-to-action button positioned at the bottom of the screen. It's designed for mobile interfaces where persistent CTAs need to remain accessible during scrolling.

## Usage Examples

### Basic Implementation

```jsx
<FixedBottomCTA>확인!!</FixedBottomCTA>
```

### Double Button Layout

The `Double` variant renders two buttons side-by-side:

```jsx
<FixedBottomCTA.Double
  leftButton={
    <CTAButton color="dark" variant="weak">
      취소
    </CTAButton>
  }
  rightButton={<CTAButton>확인</CTAButton>}
/>
```

This configuration displays a secondary action button on the left and a primary action button on the right.

## Advanced Features

### Scroll Animation

Adding the `hideOnScroll` property enables automatic button visibility management:

```jsx
<FixedBottomCTA.Double
  hideOnScroll
  leftButton={
    <CTAButton color="dark" variant="weak">
      취소
    </CTAButton>
  }
  rightButton={<CTAButton>확인</CTAButton>}
/>
```

**Behavior:** The button disappears when users scroll downward and reappears when scrolling upward, providing a cleaner interface during content browsing.

## Key Properties

| Property | Type | Description |
|----------|------|-------------|
| `hideOnScroll` | boolean | Enables automatic hiding/showing during scroll |
| `leftButton` | ReactNode | Secondary action button (Double variant) |
| `rightButton` | ReactNode | Primary action button (Double variant) |

## Component Structure

This component is part of the TDS Mobile design system and integrates with the broader Toss Design System for consistent styling and behavior across mobile applications.
