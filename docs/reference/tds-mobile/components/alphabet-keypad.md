# AlphabetKeypad Component Documentation

## Overview

The `AlphabetKeypad` component is a keypad displaying alphabetic characters, primarily used for entering authentication codes or alphanumeric inputs. It supports flexible key arrangement to match specific input requirements.

## Key Features

- **Customizable Layout**: Arrange alphabet keys in any order via the `alphabets` prop
- **Case Sensitivity**: Distinguishes between uppercase and lowercase letters
- **Backspace Support**: Dedicated key for deletion operations
- **Default Configuration**: Displays A-Z in uppercase by default

## Props Interface

### AlphabetKeypadProps

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `onKeyClick` | `(value: string) => void` | — | ✓ | Callback triggered when an alphabet key is clicked; receives the selected character |
| `onBackspaceClick` | `() => void` | — | ✓ | Callback for backspace key activation; enables custom deletion logic or confirmations |
| `alphabets` | `string[]` | `['A'–'Z']` | — | Array of characters to display, respecting input order and case preference |

## Usage Patterns

### Basic Implementation

```jsx
<AlphabetKeypad
  onKeyClick={(value) => handleInput(value)}
  onBackspaceClick={() => handleDelete()}
/>
```

### Custom Alphabet Arrangement

Reverse the alphabet sequence or apply domain-specific ordering:

```jsx
<AlphabetKeypad
  alphabets={['z', 'y', 'x', 'w', 'v', 'u', 't', 's', 'r', 'q', 'p', 'o', 'n', 'm', 'l', 'k', 'j', 'i', 'h', 'g', 'f', 'e', 'd', 'c', 'b', 'a']}
  onKeyClick={(value) => handleInput(value)}
  onBackspaceClick={() => handleDelete()}
/>
```

### Mixed Case Support

Combine uppercase and lowercase letters for flexible input scenarios:

```jsx
<AlphabetKeypad
  alphabets={['A', 'a', 'B', 'b', 'C', 'c']}
  onKeyClick={(value) => handleInput(value)}
  onBackspaceClick={() => handleDelete()}
/>
```

## Common Applications

- Authentication code entry requiring letter inputs
- Custom password fields with alphabetic constraints
- Accessibility-focused input interfaces
- Specialized entry systems requiring non-standard key arrangements
