# ProgressStepper Component Documentation

## Overview

The `ProgressStepper` component combines a progress bar with a stepper to visually display work progress by stages. It clearly shows users their current position and remaining steps in a process.

## Key Features

- **Two Style Variants**: `compact` (streamlined) and `icon` (with icons for visual clarity)
- **Progress Tracking**: Display current active step with visual indicators
- **Completion Markers**: Optional checkmarks for finished steps
- **Custom Icons**: Support for stage-specific icons in icon variant

## Basic Usage

```jsx
<ProgressStepper variant="compact" activeStepIndex={1}>
  <ProgressStep title="유심 신청" />
  <ProgressStep title="배송 완료" />
  <ProgressStep title="개통 완료" />
</ProgressStepper>
```

## Variants

### Compact Variant
"간결한 스타일로, 명확한 진행 상태를 보여줘요"

### Icon Variant
"각 단계에 아이콘이 추가되어 쉽게 알아볼 수 있고, 시각적으로 더 직관적인 단계 구분이 가능해요"

## Simple Usage (Without Titles)

Omit the `title` prop for minimal step indicators ideal for space-constrained layouts.

## Completion Display

Enable `checkForFinish={true}` with `variant="icon"` to show checkmarks for all steps before the current active step.

## Custom Icons

Use the `icon` prop on `ProgressStep` to add stage-specific icons:

```jsx
<ProgressStep
  title="단계명"
  icon={<Asset.Icon name="icon-name" />}
/>
```

## Props

### ProgressStepperProps

| Prop | Default | Type | Description |
|------|---------|------|-------------|
| `variant` | — | `"compact"` \| `"icon"` | Style variant (required) |
| `paddingTop` | `'default'` | `"default"` \| `"wide"` | Top spacing (default: 16px, wide: 24px) |
| `activeStepIndex` | `0` | `number` | Current step index |
| `checkForFinish` | `false` | `boolean` | Show checkmarks for completed steps (icon variant only) |

### ProgressStepProps

| Prop | Default | Type | Description |
|------|---------|------|-------------|
| `title` | — | `string` | Step label |
| `icon` | — | `React.ReactNode` | Custom icon (icon variant only) |
