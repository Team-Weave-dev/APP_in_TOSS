# Stepper Component Documentation

## Overview

The `Stepper` component visualizes multiple sequential steps. Each step can include a title and description, with customizable elements on the left and right sides.

## Core Props

### Stepper Props
| Prop | Default | Type | Description |
|------|---------|------|-------------|
| **play** | `true` | `boolean` | "Executes the entrance animation of StepperRow components when Stepper renders" |
| **delay** | `0` | `number` | Delay before animation starts (in seconds) |
| **staggerDelay** | `0.1` | `number` | Time interval between sequential step appearances (in seconds) |

### StepperRow Props
| Prop | Type | Required | Description |
|-----|------|----------|-------------|
| **left** | `ReactNode` | Yes | "Components displayed in the left area, typically icons or images" |
| **center** | `ReactNode` | Yes | "Title and description content for the center area" |
| **right** | `ReactNode` | No | "Components for the right area, often buttons or icons" |
| **hideLine** | `boolean` | No | Hides the connector line (use on final step) |

### StepperRow.Texts Props
| Prop | Type | Required | Description |
|-----|------|----------|-------------|
| **type** | `"A" \| "B" \| "C"` | Yes | Style variant (A: t5/t6, B: t4/t6, C: t5/t7) |
| **title** | `ReactNode` | Yes | Step title text |
| **description** | `ReactNode` | No | Step description text |

## Usage Examples

### Basic Implementation
```jsx
<Stepper>
  <StepperRow
    left={<StepperRow.NumberIcon number={1} />}
    center={<StepperRow.Texts type="A" title="Title" description="Description" />}
    right={<StepperRow.RightArrow />}
  />
  <StepperRow
    left={<StepperRow.NumberIcon number={2} />}
    center={<StepperRow.Texts type="A" title="Title" description="Description" />}
    right={<StepperRow.RightArrow />}
  />
  <StepperRow
    left={<StepperRow.NumberIcon number={3} />}
    center={<StepperRow.Texts type="A" title="Title" description="Description" />}
    hideLine
  />
</Stepper>
```

### With Custom Animation Timing
```jsx
<Stepper staggerDelay={0.5}>
  {/* StepperRow components */}
</Stepper>
```

### With Asset Frame
```jsx
<StepperRow
  left={
    <StepperRow.AssetFrame
      shape={Asset.frameShape.CircleMedium}
      content={<Asset.ContentImage src="image.png" />}
    />
  }
  center={<StepperRow.Texts type="A" title="Title" description="Description" />}
/>
```

## Key Components

- **StepperRow.NumberIcon**: Displays numbered badges (1-9)
- **StepperRow.Texts**: Configurable title and description text
- **StepperRow.RightArrow**: Right-side arrow icon
- **StepperRow.RightButton**: Right-side button element
- **StepperRow.AssetFrame**: Custom frame for images/icons
