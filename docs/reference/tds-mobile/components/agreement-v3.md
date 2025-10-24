# AgreementV3 Documentation

## Overview

⚠️ **Deprecated**: `AgreementV3` is no longer maintained. Use `AgreementV4` instead.

The `AgreementV3` component displays user consent screens with various field types, grouping options, and collapsible sections.

## Usage Examples

### Single Field (No Checkbox)

```jsx
<AgreementV3.SingleField type="medium" arrowType="collapsible">
  이용약관
</AgreementV3.SingleField>
```

### Single Checkbox Field

```jsx
<AgreementV3.SingleCheckboxField
  type="medium"
  necessity="mandatory"
  arrowType="link"
>
  카드의 실제 소유자입니다
</AgreementV3.SingleCheckboxField>
```

### Grouped Items

```jsx
<AgreementV3.Group indent={1}>
  <AgreementV3.GroupItem type="medium">동의합니다.</AgreementV3.GroupItem>
  <AgreementV3.GroupItem type="medium">동의합니다.</AgreementV3.GroupItem>
</AgreementV3.Group>
```

### Collapsible Content

```jsx
<AgreementV3.CollapsibleGroup defaultOpen={true}>
  <AgreementV3.SingleField type="medium" arrowType="collapsible">
    개인정보 수집 동의
  </AgreementV3.SingleField>
  <AgreementV3.Collapsible>
    {/* Nested content */}
  </AgreementV3.Collapsible>
</AgreementV3.CollapsibleGroup>
```

### Additional Components

```jsx
// Full consent button
<AgreementV3.Button onCheckedChange={(checked) => console.log(checked)}>
  전체 동의하기
</AgreementV3.Button>

// Descriptive text
<AgreementV3.Description indent={1}>
  수집된 개인정보는 서비스 제공 목적으로만 사용됩니다.
</AgreementV3.Description>

// Tag highlight
<AgreementV3.Tag color="#3182f6">안심</AgreementV3.Tag>
```

## Key Props

| Component | Key Props |
|-----------|-----------|
| **SingleField** | `type`, `arrowType`, `indent`, `open` |
| **SingleCheckboxField** | `type`, `necessity` ("mandatory", "optional", "none"), `checked`, `onCheckedChange` |
| **Group** | `children`, `indent` |
| **CollapsibleGroup** | `open`, `defaultOpen`, `onChange` |
| **Button** | `inputType` ("checkbox", "radio"), `size` |

## Events

- `onClick`: Main area interaction
- `onArrowClick`: Arrow/link interaction
- `onCheckedChange` / `onChange`: Checkbox state changes
- `onPressEnd`, `onArrowPressEnd`: Touch release callbacks
