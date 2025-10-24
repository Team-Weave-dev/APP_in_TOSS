# Result Component Documentation

## Overview

The `Result` component displays the outcome of a user action, typically showing success or error states. It combines visual elements, messaging, and action buttons in a centered layout.

## Usage

### Basic Structure

```jsx
<Result
  figure={<Asset.Image src="image.png" />}
  title="Action Complete"
  description="Additional details here"
  button={<Result.Button>Action</Result.Button>}
/>
```

### Adding Visual Elements

Use the `figure` prop with `Asset` components to display icons, images, or animations above the title.

### Adding Buttons

The `button` prop accepts `Result.Button` components for user actions like retry or navigation.

## Props Interface

| Prop | Type | Description |
|------|------|-------------|
| **figure** | `React.ReactNode` | "visual element displayed above the title, typically icons or images using Asset" |
| **title** | `React.ReactNode` | "main heading conveying the action outcome or status" |
| **description** | `React.ReactNode` | "additional explanatory text below the title for context" |
| **button** | `React.ReactNode` | "action button component for user interactions like retry" |

## Accessibility

The component includes built-in accessibility features:

- **Headings**: Title renders as `<h5>` tag
- **Buttons**: Uses semantic `<button>` elements for screen readers
- **Images**: Decorative images automatically get `alt=""` treatment

Example with accessibility applied:

```jsx
<Result
  figure={<Asset.Image src="example.png" />}
  title="Try Again"
  description="System error occurred"
  button={<Result.Button>Retry</Result.Button>}
/>
```
