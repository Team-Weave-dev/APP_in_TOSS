# ListHeader Component Documentation

## Overview

The `ListHeader` component serves as a header UI element for pages or sections, allowing users to perform actions or receive additional information. It typically includes a title, optional right-side content, and secondary descriptions.

## Basic Usage

```jsx
<ListHeader
  title={
    <ListHeader.TitleParagraph
      typography="t5"
      color={adaptive.grey800}
      fontWeight="bold"
    >
      Title Content
    </ListHeader.TitleParagraph>
  }
  right={
    <ListHeader.RightText typography="t7" color={adaptive.grey700}>
      Accessory
    </ListHeader.RightText>
  }
  description={
    <ListHeader.DescriptionParagraph>
      Secondary description
    </ListHeader.DescriptionParagraph>
  }
  rightAlignment="center"
/>
```

## Title Variants

### TitleParagraph
Use for static text titles with customizable typography and font weight.

### TitleTextButton
Create clickable titles with three style variants: `clear`, `arrow`, or `underline`. Supports `size` prop (`xsmall`, `medium`, `large`).

### TitleSelector
Implement dropdown-style selection with customizable typography.

## Right Content Options

- **RightText**: Simple text display with color customization
- **RightArrow**: Text with clickable arrow icon, supports `onClick` handlers

## Key Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `React.ReactNode` | Required | Title element using `TitleParagraph`, `TitleTextButton`, or `TitleSelector` |
| `description` | `React.ReactNode` | `undefined` | Secondary text using `DescriptionParagraph` |
| `descriptionPosition` | `"top"` \| `"bottom"` | `"top"` | Description placement relative to title |
| `right` | `React.ReactNode` | `undefined` | Right-aligned content element |
| `rightAlignment` | `"center"` \| `"bottom"` | `"center"` | Vertical alignment of right content |
| `titleWidthRatio` | `number` | `0.66` | Title width proportion when right content exists |

## Description Position Example

```jsx
// Description above title (default)
<ListHeader descriptionPosition="top" ... />

// Description below title
<ListHeader descriptionPosition="bottom" ... />
```
