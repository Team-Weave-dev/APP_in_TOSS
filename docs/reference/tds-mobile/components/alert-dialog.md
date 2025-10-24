# AlertDialog Component Documentation

## Overview

The `AlertDialog` component displays important information to users with a single confirmation button. It's ideal for completion notifications, status updates, and user feedback scenarios where users must acknowledge the message.

## Core Props

### AlertDialogProps

| Prop | Default | Type | Description |
|------|---------|------|-------------|
| `open` | - | `boolean` | Controls component visibility |
| `title` | - | `ReactNode` | Main heading content |
| `description` | - | `ReactNode` | Supporting text (optional) |
| `alertButton` | - | `ReactNode` | Confirmation button element |
| `closeOnDimmerClick` | `true` | `boolean` | Enables background dismissal |
| `closeOnBackEvent` | `true` | `boolean` | Responds to back navigation |
| `onClose` | - | `() => void` | Closure callback handler |
| `onEntered` | - | `() => void` | Animation completion callback |
| `onExited` | - | `() => void` | Closure animation callback |
| `portalContainer` | `document.body` | `HTMLElement` | Render target element |

### AlertDialogTitleProps

Customizes the title presentation with `as`, `color`, `typography`, and `fontWeight` properties. Defaults to `h3` tag with `t4` typography.

### AlertDialogDescriptionProps

Controls description styling via `color` (defaults to `adaptive.grey600`), `typography` (`t6`), and `fontWeight` (`medium`).

### AlertDialogAlertButtonProps

Configures button appearance with `size`, `color`, `fontWeight`, and optional `variant` options (arrow, underline, clear).

## Usage Patterns

**Basic Implementation**: Manage state with `open` and `onClose` to control visibility.

**Long Content**: The component automatically handles overflow with line-wrapping for titles and scrollable descriptions.

**Suppress Dismissal**: Set `closeOnDimmerClick={false}` to prevent background closure and trigger wiggle animation feedback.

**Custom Portal**: Use `portalContainer` to render dialogs in specific DOM containers instead of `document.body`.

**Minimal Setup**: Description is optional; titles and buttons work standalone.

## Key Examples

- Standard alert with title, description, and confirmation button
- Non-dismissible variant with wiggle feedback on background interaction
- Multi-line titles and scrollable long descriptions
- Button-only dialogs without supporting text
- Custom container rendering for advanced layouts
