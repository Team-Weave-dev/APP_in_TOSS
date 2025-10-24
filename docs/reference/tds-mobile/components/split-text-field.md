# SplitTextField Component Documentation

## Overview

The `SplitTextField` component divides input data across multiple fields, making it ideal for structured formats like resident registration numbers. It automatically advances focus between fields and provides an intuitive input experience while minimizing user errors.

Two specialized variants are provided:
- **RRN13**: Captures all 13 digits of a resident registration number
- **RRNFirst7**: Captures only the first 7 digits (birth date and gender code)

## Key Features

### RRN13 (13-Digit Registration Number)

Splits input into two fields: 6-digit birth date and 7-digit remaining digits. Focus automatically advances after completing the first field.

**Example usage:**
```jsx
<SplitTextField.RRN13
  variant="box"
  label="주민등록번호"
  help="주민등록번호를 입력해주세요."
/>
```

### RRNFirst7 (7-Digit First Section)

Captures birth date (6 digits) and gender code (1 digit). Useful for age verification scenarios.

**Example usage:**
```jsx
<SplitTextField.RRNFirst7
  variant="box"
  label="주민등록번호 (앞 7자리)"
  help="생년월일과 성별코드를 입력하세요."
/>
```

## Masking Options

**RRN13 masking** (default: `true`):
- Protects sensitive information while maintaining input validity
- Set `mask={false}` to display unmasked digits

**RRNFirst7 masking** (default: `false`):
- Masks only the gender code digit
- Set `mask={true}` for enhanced security

## Variant Styles

Four visual variants available:
- `"box"`: Standard rectangular style
- `"line"`: Underline-only style
- `"big"`: Emphasized larger text
- `"hero"`: Eye-catching oversized style

## Customizing Individual Fields

Use `first` and `second` props to customize each field independently:

```jsx
<SplitTextField.RRN13
  variant="box"
  label="주민등록번호"
  first={{ placeholder: '앞 6자리' }}
  second={{ placeholder: '뒷 7자리' }}
/>
```

## Props Interface

| Prop | Default | Type | Description |
|------|---------|------|-------------|
| `variant` | — | `"box" \| "line" \| "big" \| "hero"` | Visual style |
| `label` | `'주민등록번호'` | `string` | Field label |
| `labelOption` | — | `"appear" \| "sustain"` | Label visibility behavior |
| `help` | — | `React.ReactNode` | Helper text below field |
| `hasError` | `false` | `boolean` | Error state indicator |
| `first` | — | `TextFieldPublicProps` | First field configuration |
| `second` | — | `TextFieldPublicProps` | Second field configuration |
| `focused` | — | `boolean` | Focus state |
| `paddingTop` | — | `string \| number` | Top padding |
| `paddingBottom` | — | `string \| number` | Bottom padding |

**RRN13-specific:**
- `mask` (default: `true`): Toggle last-section masking

**RRNFirst7-specific:**
- `mask` (default: `false`): Toggle gender-code masking
