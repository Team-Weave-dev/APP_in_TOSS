# FullSecureKeypad Component Documentation

## Overview

The `FullSecureKeypad` is a secure input component that displays both numbers and alphabetic characters. It's designed for security-sensitive contexts like password or authentication code entry, featuring randomly placed blank spaces to prevent input pattern prediction.

## Key Features

- **Dual Input Support**: Accepts both numeric (0-9) and alphabetic characters
- **Security Focus**: Random blank cell placement obscures input patterns
- **Localized**: Includes Korean character mappings alongside English letters
- **Submission Control**: Built-in submit button with customizable text and disabled state
- **Dynamic Reordering**: "Blank cells can be randomly repositioned via ref to enhance security"

## Props Interface

### FullSecureKeypadProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `onKeyClick`* | `(value: string) => void` | — | Executes when numeric or alphabetic keys are clicked |
| `onBackspaceClick`* | `() => void` | — | Executes on backspace key click; enables custom deletion logic |
| `onSpaceClick`* | `() => void` | — | Executes when space key is clicked |
| `onSubmit`* | `() => void` | — | Executes when submit button is clicked |
| `submitDisabled` | `boolean` | `false` | Disables submit button when `true` |
| `submitButtonText` | `string` | `'입력 완료'` | Custom text for submit button |

*Required props

### FullSecureKeypadRef

| Property | Type | Description |
|----------|------|-------------|
| `reorderEmptyCells` | `() => void` | Randomly repositions blank cells for enhanced security |
| `element` | `HTMLDivElement` | DOM reference to the component |

## Usage Pattern

```jsx
const ref = React.useRef({ reorderEmptyCells: () => {}, element: null });

<FullSecureKeypad
  ref={ref}
  onKeyClick={(value) => handleInput(value)}
  onBackspaceClick={() => handleDelete()}
  onSpaceClick={() => handleSpace()}
  onSubmit={() => handleSubmit()}
  submitButtonText="완료"
/>
```

## Dynamic Blank Reordering

Call `ref.current.reorderEmptyCells()` to randomize blank positions, enhancing security against input pattern analysis during multi-step authentication flows.
