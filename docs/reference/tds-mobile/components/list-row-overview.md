# ListRow Overview Documentation

## Understanding ListRow

The `ListRow` component structures list-based UI interfaces. It divides content into three distinct areas—**left**, **contents**, and **right**—enabling placement of icons, text, and images to create intuitive list items. The component supports touch effects and arrow indicators to signal interactivity, plus disabled states for controlling item accessibility.

## Core Structure

### Three Primary Regions

- **Left**: Positioned at the component's start, accommodates icons or images for visual clarity
- **Contents**: Central area displaying primary text information with flexible layout options
- **Right**: Trailing section for supplementary details or interactive elements

## Styling Options

### Border Variations
- `indented`: Applies left-offset dividing line between items
- `none`: Removes divider for connected visual appearance

### Spacing Control

**Vertical Padding** (`verticalPadding`):
- `small` (8px), `medium` (12px), `large` (16px), `xlarge` (24px)

**Horizontal Padding** (`horizontalPadding`):
- `small` (20px), `medium` (24px)

### Disabled States

Two disabled styling options exist:
- `type1`: Light background treatment
- `type2`: More prominent darker background

## Interactive Features

### Touch Effects
When `onClick` handler or `withTouchEffect` property is present, the component displays visual feedback during interaction.

### Visual Emphasis Methods
- **Shine**: Horizontal sweep effect highlighting new or changed content
- **Blink**: Full-item pulsing animation for urgent attention

## Loading States

The `ListRow.Loader` component displays skeleton UI while content loads, supporting three shapes:
- `square`: Rectangular placeholder
- `circle`: Rounded placeholder
- `bar`: Linear placeholder

Each accepts adjustable vertical padding to match layout requirements.

## Key Props

| Prop | Default | Purpose |
|------|---------|---------|
| `border` | `indented` | Divider style control |
| `disabled` | `false` | Activation state |
| `verticalPadding` | `medium` | Top/bottom spacing |
| `horizontalPadding` | `medium` | Left/right spacing |
| `withArrow` | `false` | Arrow icon display |
| `withTouchEffect` | `false` | Touch visual feedback |
