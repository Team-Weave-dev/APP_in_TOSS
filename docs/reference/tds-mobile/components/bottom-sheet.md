# BottomSheet Component Documentation

## Overview

The `BottomSheet` component is a panel that slides up from the screen's bottom. It displays additional details or guides user actions without leaving the current page.

## Basic Usage

```jsx
function Basic() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div style={{ padding: 16 }}>
      <Button onClick={() => setIsOpen(true)}>Open BottomSheet</Button>
      <BottomSheet
        UNSAFE_disableFocusLock
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <Post.Paragraph>BottomSheet content here</Post.Paragraph>
      </BottomSheet>
    </div>
  );
}
```

## Key Variants

### With Header

Add a title section using `BottomSheet.Header`:

```jsx
header={<BottomSheet.Header>Title Text</BottomSheet.Header>}
```

### With Header Description

Include a subtitle via `headerDescription`:

```jsx
headerDescription={
  <BottomSheet.HeaderDescription>Subtitle text</BottomSheet.HeaderDescription>
}
```

### With CTA Button

Attach a call-to-action button using the `cta` prop:

```jsx
cta={<BottomSheet.CTA onClick={() => setIsOpen(false)}>Confirm</BottomSheet.CTA>}
```

### With Double CTA

Display two side-by-side buttons:

```jsx
cta={
  <BottomSheet.DoubleCTA
    leftButton={<Button variant="weak">Cancel</Button>}
    rightButton={<Button>Confirm</Button>}
  />
}
```

### With Select Options

Present selectable options to users:

```jsx
<BottomSheet.Select
  onChange={(e) => handleSelection(e.target.value)}
  value={selectedValue}
  options={[
    { name: 'Option 1', value: 'opt1' },
    { name: 'Option 2', value: 'opt2' }
  ]}
/>
```

## Maintaining Page Focus

Use `UNSAFE_disableFocusLock` and `disableDimmer` to keep page focus active while the sheet is open:

```jsx
<BottomSheet
  UNSAFE_disableFocusLock
  disableDimmer
  open={isOpen}
  onClose={() => setIsOpen(false)}
/>
```

## Core Props

| Prop | Type | Description |
|------|------|-------------|
| `open` | boolean | Controls visibility |
| `onClose` | function | Triggered when closing |
| `header` | ReactNode | Title section |
| `headerDescription` | ReactNode | Subtitle section |
| `cta` | ReactNode | Action button area |
| `children` | ReactNode | Main content |
| `hasTextField` | boolean | Raises sheet above keyboard |
| `expandBottomSheet` | boolean | Enables full-height expansion |
| `maxHeight` | number | Default height in px |
| `expandedMaxHeight` | number | Expanded height in px |

## Accessibility

- Use `ariaLabelledBy` to specify header ID for screen readers
- Use `ariaDescribedBy` for detailed content descriptions
- `a11yIncludeHeaderInScroll` (default: true) includes header in scroll at 160%+ text scaling
