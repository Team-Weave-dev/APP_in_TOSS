# Modal Component Documentation - TDS Mobile

## Overview

The `Modal` component displays important content that requires user attention or immediate interaction. It appears above other screen content to focus user attention, and users must confirm or complete required actions before returning to the previous screen.

## Component Structure

The Modal is composed of two sub-components:
- **Modal.Overlay**: Background element that helps users concentrate on the content
- **Modal.Content**: Container for the modal's actual content

## Basic Usage

```jsx
function Basic() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal open={open} onOpenChange={setOpen}>
        <Modal.Overlay />
        <Modal.Content
          style={{
            padding: '32px 20px 20px 20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <p style={{ marginBottom: '24px' }}>
            Your modal content here
          </p>
          <Button
            display="block"
            color="primary"
            onClick={() => setOpen(false)}
          >
            Confirm
          </Button>
        </Modal.Content>
      </Modal>
    </>
  );
}
```

## Key Features

### Close Event Handling

Use the `onExited` callback to perform actions after the modal fully closes and animation completes:

```jsx
<Modal
  open={open}
  onOpenChange={setOpen}
  onExited={() => alert('Modal fully closed')}
>
  {/* content */}
</Modal>
```

### Overlay Click Events

Handle overlay (background) clicks via `Modal.Overlay`'s `onClick` prop:

```jsx
<Modal.Overlay onClick={() => alert('Overlay clicked')} />
```

Common use cases:
- Confirm unsaved changes before closing
- Prevent accidental closure during critical processes
- Reset input content when modal closes

## Props Interface

### ModalProps

| Property | Default | Type | Description |
|----------|---------|------|-------------|
| `open` | - | `boolean` | Controls modal open/closed state |
| `onOpenChange` | - | `(open: boolean) => void` | Callback when modal state changes |
| `onExited` | - | `() => void` | Callback after modal closes and animation completes |
| `portalContainer` | `document.body` | `HTMLElement` | DOM element where modal renders |

### ModalOverlayProps

| Property | Default | Type | Description |
|----------|---------|------|-------------|
| `onClick` | - | `() => void` | Callback when overlay is clicked |

## Accessibility Features

The Modal includes built-in accessibility support:

| Feature | Effect |
|---------|--------|
| `aria-hidden` | Background content hidden from screen readers |
| `tabIndex={0}` | Keyboard focus moves to modal on open |
| `role="button"` | Overlay identified as clickable element |

These features enable keyboard navigation and screen reader compatibility without additional configuration.
