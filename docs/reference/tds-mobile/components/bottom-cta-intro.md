# BottomCTA 이해하기 Documentation

## Overview
The `BottomCTA` component is a call-to-action button displayed in mobile UI. According to the documentation, it's "주로 사용자가 특정 작업을 완료할 수 있도록 도와줄 때 사용하죠" (primarily used to help users complete specific tasks). It remains fixed at the page bottom for easy access during scrolling or keyboard input.

## FixedBottomCTA vs BottomCTA

**FixedBottomCTA** is a wrapper around `BottomCTA` with the `fixed` prop preset to `true`. The documentation defines it as:

```typescript
export const FixedBottomCTA = (props: Omit<ComponentProps<typeof BottomCTA>, 'fixed'>) => {
  return <BottomCTA fixed={true} {...props} />;
};
```

The key difference: `FixedBottomCTA` always displays as fixed to the bottom, while regular `BottomCTA` can toggle this behavior via the `fixed` prop.

**Note:** `FixedBottomCTA` defaults to the Single variant. Use `FixedBottomCTA.Double` for two-button layouts.

## Single vs Double

| Type | Description |
|------|-------------|
| **Single** | Renders one button. Content is provided via `children` prop |
| **Double** | Renders two buttons side-by-side using `leftButton` and `rightButton` props |

Both variants support customization through their respective props for flexible CTA implementations.
