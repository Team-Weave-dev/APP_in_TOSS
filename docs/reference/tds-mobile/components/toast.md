# Toast Component Documentation

## Overview

The Toast component displays brief notifications to users when actions are completed or events occur. Messages appear at the top or bottom of the screen and automatically disappear after a short duration.

## Usage

### Basic Toast

Position toasts at the top or bottom using the `position` prop with values of `"top"` or `"bottom"`.

```jsx
function BasicToasts() {
  const [openTop, setOpenTop] = React.useState(false);
  const [openBottom, setOpenBottom] = React.useState(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '12px' }}>
      <Button onClick={() => setOpenTop(true)}>Top Toast</Button>
      <Toast
        position="top"
        open={openTop}
        text="Top toast message"
        duration={3000}
        onClose={() => setOpenTop(false)}
      />
      <Button onClick={() => setOpenBottom(true)}>Bottom Toast</Button>
      <Toast
        position="bottom"
        open={openBottom}
        text="Bottom toast message"
        duration={3000}
        onClose={() => setOpenBottom(false)}
      />
    </div>
  );
}
```

### Toast with Icon

Add visual context using the `leftAddon` prop with `Toast.Icon` to convey message type (success, warning, error).

```jsx
function ToastWithIcon() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Icon Toast</Button>
      <Toast
        position="top"
        open={open}
        text="Toast with icon"
        leftAddon={<Toast.Icon name="icn-success-color" />}
        duration={3000}
        onClose={() => setOpen(false)}
      />
    </>
  );
}
```

### Toast with Button

Bottom-positioned toasts support action buttons via the `button` prop for immediate user interaction.

```jsx
function ToastWithButton() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Button Toast</Button>
      <Toast
        position="bottom"
        open={open}
        text="Toast with action button"
        button={<Toast.Button onClick={() => alert('clicked')}>Confirm</Toast.Button>}
        duration={3000}
        onClose={() => setOpen(false)}
      />
    </>
  );
}
```

### Toast Above CTA

Use `higherThanCTA` to position toasts above fixed bottom action buttons.

```jsx
function ToastAboveCTA() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>CTA Toast</Button>
      <Toast
        position="bottom"
        open={open}
        text="Displays above CTA button"
        higherThanCTA
        duration={3000}
        onClose={() => setOpen(false)}
      />
      {open ? <FixedBottomCTA>Action Button</FixedBottomCTA> : <div style={{ height: '110px' }} />}
    </>
  );
}
```

### Toast with Lottie Animation

Embed animated graphics using `Toast.Lottie` in the `leftAddon` prop.

```jsx
function ToastWithLottie() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Lottie Toast</Button>
      <Toast
        position="top"
        open={open}
        text="Toast with animation"
        leftAddon={<Toast.Lottie src="https://static.toss.im/lotties-common/check-green-spot.json" />}
        duration={3000}
        onClose={() => setOpen(false)}
      />
    </>
  );
}
```

## Accessibility

The Toast component provides screen reader support through `aria-live` attributes:

- **`assertive`**: Immediate announcement for critical alerts
- **`polite`** (default): Announces after current content finishes reading

## API Reference

### ToastProps

| Prop | Default | Type | Description |
|------|---------|------|-------------|
| `open` | - | `boolean` | Controls visibility state |
| `position` | - | `"top" \| "bottom"` | Display location |
| `text` | - | `string` | Message content |
| `leftAddon` | - | `React.ReactNode` | Icon or animation (left side) |
| `button` | - | `React.ReactNode` | Action button (bottom only) |
| `duration` | `3000` | `number` | Auto-close delay in milliseconds |
| `onClose` | - | `() => void` | Triggered when closing begins |
| `onExited` | - | `() => void` | Triggered after animation completes |
| `higherThanCTA` | `false` | `boolean` | Position above fixed CTA |
| `aria-live` | `"polite"` | `"assertive" \| "polite"` | Screen reader priority |

### ToastButtonProps

| Prop | Default | Type | Description |
|------|---------|------|-------------|
| `children` | - | `string` | Button text |
| `onClick` | - | `() => void` | Click handler |

### ToastIconProps

| Prop | Default | Type | Description |
|------|---------|------|-------------|
| `name` | - | `string` | Icon identifier |
| `icon` | - | `string` | Icon type |
| `frameShape` | `{ width: 24, height: 24 }` | `FrameShapeType` | Size customization |

### ToastLottieProps

| Prop | Default | Type | Description |
|------|---------|------|-------------|
| `src` | - | `string` | Animation source URL |
| `frameShape` | `{ width: 24, height: 24 }` | `FrameShapeType` | Size customization |

### FrameShapeType

| Prop | Default | Type | Description |
|------|---------|------|-------------|
| `width` | - | `string \| number` | Frame width |
| `height` | - | `string \| number` | Frame height |
| `radius` | - | `string \| number` | Border radius |
| `acc` | - | `FrameAccShapeType` | Accessory area settings |
| `overlap` | - | `FrameOverlapShapeType` | Stacking effect |
