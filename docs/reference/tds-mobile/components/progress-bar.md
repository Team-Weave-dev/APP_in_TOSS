# ProgressBar Component Documentation

## Overview

The `ProgressBar` component visually represents task completion status. It's useful for displaying data loading progress, step-by-step workflows, and other completion states.

## Basic Usage

```jsx
<ProgressBar progress={0.5} size="normal" />
```

The `progress` prop accepts values between 0.0 and 1.0, where 0.5 represents 50% completion.

## Size Options

Three size variants are available:

```jsx
<ProgressBar progress={0.7} size="light" />
<ProgressBar progress={0.7} size="normal" />
<ProgressBar progress={0.7} size="bold" />
```

Default size is `normal`.

## Color Customization

Change the progress bar color using the `color` prop with CSS color values:

```jsx
<ProgressBar progress={0.7} color={colors.blue400} />
<ProgressBar progress={0.7} color={colors.green400} />
<ProgressBar progress={0.7} color={colors.red400} />
```

Default color is `blue400`.

## Animation

Enable smooth transitions when progress updates:

```jsx
<ProgressBar progress={progress} animate />
```

Set `animate` to `true` for animated effects during progress changes.

## Props Interface

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `progress` | number | — | ✓ | Progress value (0.0–1.0) |
| `size` | "light" \| "normal" \| "bold" | "normal" | ✓ | Component size |
| `color` | string | colors.blue400 | — | Bar color |
| `animate` | boolean | false | — | Enable animation |
| `className` | string | — | — | Custom CSS class |
