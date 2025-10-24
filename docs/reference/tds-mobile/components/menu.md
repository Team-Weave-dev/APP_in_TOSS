# Menu Component Documentation

## Overview

The `Menu` component provides dropdown functionality for selecting items or managing states. It allows users to view organized options and perform actions in various contexts like settings or task lists.

## Key Components

### Menu.Dropdown
Container for dropdown menu items with optional header support.

### Menu.Header
Displays a title at the top of the dropdown menu.

### Menu.DropdownItem
Individual selectable menu option within the dropdown.

### Menu.DropdownCheckItem
Menu item with integrated checkbox functionality.

### Menu.DropdownIcon
Icon display component for menu items.

### Menu.Trigger
Controls menu visibility based on user interactions with configurable placement.

## Props Reference

### MenuDropdownProps
| Prop | Type | Description |
|------|------|-------------|
| `header` | `React.ReactNode` | Defines dropdown header, typically using `Menu.Header` |

### MenuDropdownItemProps
| Prop | Type | Description |
|------|------|-------------|
| `left` | `React.ReactNode` | Left-side component (use `Menu.DropdownCheckItem` for checkboxes) |
| `right` | `React.ReactNode` | Right-side component (use `Menu.DropdownIcon` for icons) |
| `children` | `React.ReactNode` | Item content |

### MenuDropdownCheckedItemProps
| Prop | Type | Description |
|------|------|-------------|
| `checked` | `boolean` | Checkbox state |
| `onCheckedChange` | `(checked: boolean) => void` | State change callback |

### MenuTriggerProps
| Prop | Default | Type | Description |
|------|---------|------|-------------|
| `open` | - | `boolean` | Controlled open state |
| `defaultOpen` | - | `boolean` | Initial open state |
| `children` | - | `React.ReactNode` | Trigger element |
| `dropdown` | - | `React.ReactNode` | Dropdown content |
| `placement` | `'bottom-start'` | `"top"\|"bottom"\|"left"\|"right"` with optional `-start`/`-end` | Menu position relative to trigger |
| `onOpen` | - | `() => void` | Open handler |
| `onClose` | - | `() => void` | Close handler |

## Usage Examples

### Basic Dropdown
```jsx
<Menu.Dropdown header={<Menu.Header>Edit</Menu.Header>}>
  <Menu.DropdownItem>First option</Menu.DropdownItem>
  <Menu.DropdownItem>Second option</Menu.DropdownItem>
  <Menu.DropdownItem>Third option</Menu.DropdownItem>
</Menu.Dropdown>
```

### With Icons
```jsx
<Menu.Dropdown header={<Menu.Header>Edit</Menu.Header>}>
  <Menu.DropdownItem right={<Menu.DropdownIcon name="icon-setting-mono" />}>
    First option
  </Menu.DropdownItem>
</Menu.Dropdown>
```

### With Checkbox Items
```jsx
<Menu.Dropdown header={<Menu.Header>Edit</Menu.Header>}>
  <Menu.DropdownCheckItem checked={false}>First option</Menu.DropdownCheckItem>
  <Menu.DropdownCheckItem checked={true}>Second option</Menu.DropdownCheckItem>
</Menu.Dropdown>
```

### Controlled Trigger
```jsx
function MenuExample() {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState(1);

  return (
    <Menu.Trigger
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      placement="bottom"
      dropdown={
        <Menu.Dropdown header={<Menu.Header>Select</Menu.Header>}>
          <Menu.DropdownCheckItem
            checked={selected === 1}
            onCheckedChange={(checked) => checked && setSelected(1)}
          >
            Option 1
          </Menu.DropdownCheckItem>
        </Menu.Dropdown>
      }
    >
      <Button>Click me</Button>
    </Menu.Trigger>
  );
}
```

## Placement Options

Position menu relative to trigger element:
- **Vertical**: `top`, `bottom`
- **Horizontal**: `left`, `right`
- **Alignment**: `-start`, `-end` (or centered if omitted)

Example: `top-start`, `bottom-end`, `left`, `right-start`
