# Top Component Documentation

## Overview

The `Top` component is a flexible header component for page tops that supports various layouts. It enables easy placement of multiple elements (text, buttons, images) and is primarily used for constructing headers or title areas.

## Usage

### Basic Structure

```jsx
<Top
  title={<Top.TitleParagraph>동해물과 백두산이</Top.TitleParagraph>}
  right={<Top.RightButton>송금</Top.RightButton>}
/>
```

### Key Features

**Spacing Control**
- `upperGap` and `lowerGap` props adjust vertical margins (default: 24)

**Content Positioning**
- `upper`: Add elements above content area
- `lower`: Add elements below content area
- `right`: Add elements to the right side
- `subtitleTop` / `subtitleBottom`: Position subtitles around titles

### Title Variants

| Component | Purpose |
|-----------|---------|
| `Top.TitleParagraph` | Static text display |
| `Top.TitleTextButton` | Interactive text button |
| `Top.TitleSelector` | Dropdown-style selector with arrow icon |

### Subtitle Options

- `Top.SubtitleParagraph`: Plain text
- `Top.SubtitleTextButton`: Interactive text button
- `Top.SubtitleSelector`: Selector button with arrow
- `Top.SubtitleBadges`: Badge array display

### Bottom CTAs

```jsx
<Top.LowerCTA
  type="2-button"
  leftButton={<Top.LowerCTAButton>Cancel</Top.LowerCTAButton>}
  rightButton={<Top.LowerCTAButton>Send</Top.LowerCTAButton>}
/>
```

## Accessibility

The component includes built-in ARIA attributes:
- `role="heading"` and `aria-level="1"` for main titles
- `aria-level="2"` for subtitles
- `aria-haspopup="listbox"` for selector components

## Props Interface

**TopProps**
- `title*` (React.ReactNode): Main title element
- `upperGap` (number): Top margin (default: 24)
- `lowerGap` (number): Bottom margin (default: 24)
- `upper`, `lower`, `right`: Content areas
- `subtitleTop`, `subtitleBottom`: Subtitle areas
- `rightVerticalAlign`: "center" | "end" (default: "center")
