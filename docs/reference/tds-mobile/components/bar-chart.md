# BarChart Component Documentation

## Overview

The `BarChart` component visualizes data using a bar graph format. It allows developers to represent data values through bar heights and apply custom colors to emphasize specific bars, enabling users to quickly understand data importance.

## Key Features

- **Data visualization**: Represent values as bar heights proportional to a maximum value
- **Color theming**: Apply colors to highlight specific bars
- **Flexible styling**: Three fill types for different visualization needs
- **Responsive labels**: Automatically manages label display for large datasets
- **Customizable height**: Control the overall chart dimensions

## Basic Usage

```jsx
<BarChart
  data={[
    { maxValue: 10, value: 6, label: '1월', barAnnotation: 6 },
    { maxValue: 10, value: 5, label: '2월', barAnnotation: 5 },
  ]}
  fill={{
    type: 'all-bar',
    theme: 'green',
  }}
/>
```

## Fill Types

### AllBar
"모든 막대에 같은 색상을 적용" (applies uniform color across all bars)

```jsx
fill={{
  type: 'all-bar',
  theme: 'yellow',
}}
```

### SingleBar
Highlights one bar with a specific color using `barIndex`

```jsx
fill={{
  type: 'single-bar',
  barIndex: 0,
  theme: 'blue',
}}
```

### Auto
"오른쪽부터 색상을 자동으로 지정" (auto-assigns colors from right to left) following the sequence: blue → green → yellow → orange → red → grey

```jsx
fill={{
  type: 'auto',
  count: 6,
}}
```

## Data Structure

Each data item requires:

| Property | Type | Description |
|----------|------|-------------|
| `value` | number | Bar height value |
| `maxValue` | number | Maximum scale value for the chart |
| `label` | string | X-axis label |
| `barAnnotation` | string \| number | Text/number displayed above bar |
| `theme` | string | Color theme (blue, green, yellow, orange, red, grey, default) |

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `data` | BarChartData[] | Required | Array of data items |
| `fill` | AllBar \| SingleBar \| Auto | Required | Fill configuration object |
| `height` | number | 205 | Chart height in pixels |

## Responsive Behavior

When data exceeds 12 items, "라벨이 겹쳐 보이는 것을 방지" (prevents label overlap) by displaying labels and annotations only at the first and last bars.
