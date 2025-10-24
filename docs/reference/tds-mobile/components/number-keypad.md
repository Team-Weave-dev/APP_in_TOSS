# NumberKeypad Component Documentation

## Overview

The `NumberKeypad` component displays a numeric keypad, primarily used for entering numeric passwords. It offers flexible key arrangement to match any input requirements.

## Key Features

- **Customizable Layout**: Arrange numbers in any order using the `numbers` prop
- **Security Mode**: Enhanced protection for sensitive inputs through the `secure` prop
- **Simple Integration**: Two required callbacks for key and backspace interactions

## Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `onKeyClick` | `(value: string) => void` | — | Yes | Executes when a number key is clicked |
| `onBackspaceClick` | `() => void` | — | Yes | Executes when backspace is clicked; useful for custom deletion logic |
| `numbers` | `(0\|1\|2\|3\|4\|5\|6\|7\|8\|9)[]` | `[1,2,3,4,5,6,7,8,9,0]` | No | Array of digits to display in specified order |
| `secure` | `boolean` | `false` | No | "Enables security mode where random additional digits register as pressed" |

## Usage Examples

### Basic Implementation

```jsx
<NumberKeypad
  onKeyClick={() => {}}
  onBackspaceClick={() => {}}
/>
```

### Custom Key Arrangement

```jsx
<NumberKeypad
  numbers={[1, 3, 5, 7, 9, 2, 4, 6, 8, 0]}
  onKeyClick={() => {}}
  onBackspaceClick={() => {}}
/>
```

### Secure Input Mode

```jsx
<NumberKeypad
  secure={true}
  onKeyClick={() => {}}
  onBackspaceClick={() => {}}
/>
```

## Security Considerations

When `secure={true}`, the component obscures user input by simultaneously registering random digits (excluding adjacent keys) alongside the actual selection. This mode also prevents screenshot capture on Android and masks the app screen during background transitions—essential for sensitive data like identification numbers.
