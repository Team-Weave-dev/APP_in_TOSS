# Skeleton Component Documentation

## Overview

The `Skeleton` component displays a temporary layout placeholder while content loads, helping users understand the page structure and recognize that loading is occurring.

## Usage

### Predefined Patterns

The component offers nine built-in patterns:

- **topList**: Title at the top with list items
- **topListWithIcon**: Title with icon-enabled list
- **amountTopList**: Title and subtitle at top with list
- **amountTopListWithIcon**: Title, subtitle, and icons
- **subtitleList**: List featuring subtitles
- **subtitleListWithIcon**: Subtitled list with icons
- **listOnly**: List format only
- **listWithIconOnly**: Icon-included list
- **cardOnly**: Card-format pattern

```jsx
<Skeleton pattern="topListWithIcon" style={{ width: '100%' }} />
```

### Custom Patterns

Build custom layouts using array syntax with these types:

- **title**: Bold, prominent skeleton bar for headings
- **subtitle**: Thinner bar for subheadings
- **list**: Multi-line horizontal bar skeleton
- **listWithIcon**: List with icon positioning
- **card**: Rectangular block format
- **spacer(${number})**: Adds pixel-based spacing

```jsx
<Skeleton
  custom={['title', 'subtitle', 'spacer(20)', 'card']}
  repeatLastItemCount={1}
  style={{ width: '100%' }}
/>
```

### Repetition

Control repetition via `repeatLastItemCount`:

- Number: repeats last element that many times
- `'infinite'`: repeats up to 30 times
- Default: 3 repetitions

```jsx
<Skeleton pattern="listOnly" repeatLastItemCount={5} />
```

### Background Colors

Set via `background` prop:

- **white**: Light backgrounds
- **grey**: Standard (default)
- **greyOpacity100**: Opaque dark grey

```jsx
<Skeleton
  pattern="amountTopListWithIcon"
  background="white"
/>
```

## Props Interface

| Prop | Default | Type | Description |
|------|---------|------|-------------|
| **height** | `auto` | string \| number | Component height |
| **pattern** | `topList` | Predefined pattern names | Layout template |
| **custom** | — | Array of type strings | User-defined layout |
| **repeatLastItemCount** | `3` | number \| `"infinite"` | Repetition count |
| **play** | `show` | `"show"` \| `"hide"` | Display state |
| **background** | `grey` | `"white"` \| `"grey"` \| `"greyOpacity100"` | Background color |
