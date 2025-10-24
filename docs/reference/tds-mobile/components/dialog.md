# Dialog Component Documentation

## Overview

The Dialog component is a modal interface used to convey important information or request user actions. It's primarily employed for task completion notifications, status change alerts, or significant actions requiring user confirmation.

## Key Concepts

### AlertDialog vs ConfirmDialog

| Type | Purpose | Documentation |
|------|---------|---|
| **AlertDialog** | Single-button confirmation for notifications like task completion or status updates | [AlertDialog docs](https://tossmini-docs.toss.im/tds-mobile/components/Dialog/alert-dialog/) |
| **ConfirmDialog** | Two-button interface for user decisions before executing critical actions | [ConfirmDialog docs](https://tossmini-docs.toss.im/tds-mobile/components/Dialog/confirm-dialog/) |

## Component Structure

Dialog consists of three primary sections:

1. **Title**: Displays the main message using `AlertDialog.Title` or `ConfirmDialog.Title`
2. **Description** (optional): Provides supplementary details via `AlertDialog.Description` or `ConfirmDialog.Description`
3. **Buttons**:
   - AlertDialog: Single confirmation button (`AlertDialog.AlertButton`)
   - ConfirmDialog: Cancel/confirm buttons (`ConfirmDialog.CancelButton`, `ConfirmDialog.ConfirmButton`)

## AlertDialog Props

| Prop | Type | Default | Description |
|------|------|---------|---|
| `open` | boolean | - | Controls visibility of the dialog |
| `title` | ReactNode | - | Main message content |
| `description` | ReactNode | - | Supplementary explanation |
| `alertButton` | ReactNode | - | Confirmation button |
| `closeOnDimmerClick` | boolean | true | Allows closing via background click |
| `closeOnBackEvent` | boolean | true | Allows closing via back button |
| `onClose` | () => void | - | Callback when dialog closes |
| `onEntered` | () => void | - | Callback after opening animation completes |
| `onExited` | () => void | - | Callback after closing animation completes |
| `portalContainer` | HTMLElement | document.body | Target DOM element for rendering |

## AlertDialog.Title Props

| Prop | Type | Default | Description |
|------|------|---------|---|
| `as` | string | 'h3' | HTML tag type |
| `color` | string | adaptive.grey800 | Text color |
| `typography` | string | 't4' | Typography style |
| `fontWeight` | string | 'bold' | Font weight |

## AlertDialog.Description Props

| Prop | Type | Default | Description |
|------|------|---------|---|
| `as` | string | 'h3' | HTML tag type |
| `color` | string | adaptive.grey600 | Text color |
| `typography` | string | 't6' | Typography style |
| `fontWeight` | string | 'medium' | Font weight |

## AlertDialog.AlertButton Props

| Prop | Type | Default | Description |
|------|------|---------|---|
| `size` | string | 'medium' | Button size |
| `color` | string | colors.blue500 | Button color |
| `fontWeight` | string | 'bold' | Font weight |
| `variant` | string | - | Style variant (arrow, underline, clear) |

## Usage Example

```jsx
function AlertDialogExample() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Alert</Button>
      <AlertDialog
        open={open}
        title={<AlertDialog.Title>Success Message</AlertDialog.Title>}
        description={
          <AlertDialog.Description>Your feedback has been received.</AlertDialog.Description>
        }
        alertButton={
          <AlertDialog.AlertButton onClick={() => setOpen(false)}>
            Confirm
          </AlertDialog.AlertButton>
        }
        onClose={() => setOpen(false)}
      />
    </>
  );
}
```

## Key Features

- **Portal Rendering**: Customize where the dialog mounts in the DOM using `portalContainer`
- **Animation Callbacks**: Track opening/closing animations with `onEntered` and `onExited`
- **Flexible Closing**: Control closing behavior through dimmer clicks and back events
- **Content Flexibility**: Supports long titles, descriptions, and button labels with automatic wrapping
