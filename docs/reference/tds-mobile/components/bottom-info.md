# BottomInfo Component Documentation

## Overview

The `BottomInfo` component displays critical information and disclaimers at the screen's bottom. It's particularly useful for financial products requiring legal notices and terms disclosure.

## Key Features

- **Primary Use Case**: Presenting disclaimers and important notices in financial applications
- **Best Practice**: Pairs effectively with the `Post` component for organized list formatting
- **Gradient Support**: Customizable bottom gradient to maintain visual consistency during scrolling

## Usage Examples

### Basic Implementation

```jsx
<BottomInfo>
  <Post.Ul paddingBottom={24} typography="t7">
    <Post.Li>
      Loan period of 40 years applies to applicants under age 39 or
      newlywed couples (within 7 years of marriage registration).
    </Post.Li>
    <Post.Li>
      The company and loan recruiters must provide sufficient explanation
      regarding this product.
    </Post.Li>
    <Post.Li>
      Early repayment fees may apply based on remaining contract days.
    </Post.Li>
  </Post.Ul>
</BottomInfo>
```

### Custom Gradient

```jsx
<BottomInfo
  bottomGradient={`linear-gradient(${adaptive.greyBackground}, ${adaptive.blue100})`}
>
  {/* content */}
</BottomInfo>
```

### No Gradient

```jsx
<BottomInfo bottomGradient="none">
  {/* content */}
</BottomInfo>
```

## Props Interface

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| **bottomGradient** | `"none"` \| `"linear-gradient(${string})"` | `"linear-gradient(adaptive.greyBackground, rgba(255,255,255,0))"` | Controls gradient appearance and background color at component base |

## Design Considerations

- Default gradient blends component background with screen background for seamless scrolling
- Custom gradients help maintain visual consistency when page background differs
- Avoid `"none"` value on iOS devices unless specifically required
