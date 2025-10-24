# ConfirmDialog Component Documentation

## Overview

The `ConfirmDialog` component provides a user interface for situations requiring confirmation or selection. It presents two action buttons—confirm and cancel—enabling users to make explicit choices within a modal dialog.

## Key Features

- **Dual-action interface**: Includes both confirmation and cancellation options
- **Flexible content**: Supports titles, descriptions, and custom button configurations
- **Long content handling**: Automatically manages scrolling for extended descriptions
- **Dimmer control**: Configurable background click behavior with optional wiggle animation
- **Portal rendering**: Can be rendered to specific DOM containers beyond the default body

## Core Props

| Prop | Type | Default | Purpose |
|------|------|---------|---------|
| `open` | boolean | — | Controls dialog visibility |
| `title` | ReactNode | — | Dialog heading content |
| `description` | ReactNode | — | Optional descriptive text |
| `cancelButton` | ReactNode | — | Cancel action button |
| `confirmButton` | ReactNode | — | Confirm action button |
| `closeOnDimmerClick` | boolean | true | Enables closing via background click |
| `onClose` | function | — | Callback when dialog closes |
| `portalContainer` | HTMLElement | document.body | Render target container |

## Usage Patterns

### Basic Implementation

```jsx
const [open, setOpen] = useState(false);

<ConfirmDialog
  open={open}
  title={<ConfirmDialog.Title>Confirm Action</ConfirmDialog.Title>}
  description={<ConfirmDialog.Description>Description text</ConfirmDialog.Description>}
  cancelButton={<ConfirmDialog.CancelButton onClick={() => setOpen(false)}>No</ConfirmDialog.CancelButton>}
  confirmButton={<ConfirmDialog.ConfirmButton onClick={() => setOpen(false)}>Yes</ConfirmDialog.ConfirmButton>}
  onClose={() => setOpen(false)}
/>
```

### Disable Dimmer Click

Set `closeOnDimmerClick={false}` to prevent dismissal via background interaction. This triggers a wiggle animation when users attempt to close externally.

### Minimal Configuration

The description can be omitted for simpler confirmations requiring only title and action buttons.

## Sub-Components

**ConfirmDialog.Title**: Customizable heading with typography and color options (default: `t4`, bold)

**ConfirmDialog.Description**: Optional descriptive content with independent styling (default: `t6`, medium)

**ConfirmDialog.CancelButton**: Weak-style secondary action (default: dark type)

**ConfirmDialog.ConfirmButton**: Primary confirmation action (extends Button component)
