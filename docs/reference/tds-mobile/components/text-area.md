# TextArea Component Documentation

## Overview

The `TextArea` component enables multi-line text input for scenarios like feedback forms, address fields, and note-taking. It supports both fixed and adaptive height configurations, allowing developers to provide ample input space while handling extended text efficiently.

## Key Features

- **Fixed Height Mode**: Set explicit dimensions using the `height` property for consistent layouts
- **Auto-Adjusting Height**: Content dynamically expands the container; `minHeight` prevents excessive shrinking
- **Extended TextField**: Builds on `TextField` functionality, excluding `prefix`, `suffix`, and `right` props

## Props

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `height` | `string \| number` | `-` | Establishes the textarea's fixed vertical dimension |
| `minHeight` | `string \| number` | `-` | Defines the minimum vertical extent of the component |

All other `TextField` properties apply, except `prefix`, `suffix`, and `right`.

## Usage Patterns

### Fixed Height Implementation
Set explicit pixel values for predictable layouts in reviews, brief feedback, or constrained UI spaces.

### Adaptive Height Implementation
Content expands automatically as users type; ideal for longer-form inputs like detailed comments or address entries where scroll-free viewing matters.

## Examples

**Fixed height (200px):**
```jsx
<TextArea
  variant="box"
  height="200px"
  placeholder="Enter text here."
  help="Fixed-height text field"
/>
```

**Auto-adjusting with minimum threshold (100px minimum):**
```jsx
<TextArea
  variant="box"
  minHeight={100}
  placeholder="Type extended content or press Enter."
  help="Auto-adjusting text field"
/>
```
