# Slider Component Documentation

## Overview
The `Slider` component enables users to select a numeric value within a specified range by dragging a handle left and right. It's useful for visually representing number ranges and allowing intuitive adjustment of values.

## Usage

### Basic Implementation
```javascript
function Basic() {
  const [value, setValue] = React.useState(50);
  return <Slider value={value} onValueChange={(newValue) => setValue(newValue)} />;
}
```

### Customizing Track Color
Use the `color` property to modify the slider's track appearance. This enhances visual feedback or communicates specific states. The default color is `blue400`.

```javascript
<Slider color={adaptive.green500} value={value} onValueChange={(newValue) => setValue(newValue)} />
```

### Adding Labels
The `label` property displays minimum, maximum, and optional middle values beneath the slider, helping users understand the value range more clearly.

```javascript
<Slider
  value={value}
  minValue={100}
  maxValue={200}
  label={{ min: "100 won", mid: "150 won", max: "200 won" }}
  onValueChange={(newValue) => setValue(newValue)}
/>
```

### Displaying Tooltips
Use `Slider.Tooltip` to show the current value above the slider in real-time, facilitating precise value selection.

```javascript
<Slider
  value={value}
  tooltip={<SliderTooltip message={value} />}
  onValueChange={(newValue) => setValue(newValue)}
/>
```

## Props

| Prop | Type | Description |
|------|------|-------------|
| `value` | `number` | Current slider value |
| `defaultValue` | `number` | Initial value if uncontrolled |
| `onValueChange` | `(value: number) => void` | Callback when value changes |
| `minValue` | `number` | Minimum selectable value |
| `maxValue` | `number` | Maximum selectable value |
| `color` | `string` | Track color (CSS value) |
| `label` | `{ min: string; max: string; mid?: string; }` | Labels for range endpoints |
| `tooltip` | `React.ReactElement` | Tooltip displayed above slider |
