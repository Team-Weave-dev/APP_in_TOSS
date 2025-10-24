# Common Layout API Documentation

## Overview

The Common Layout feature allows developers to manage shared UI elements across multiple pages in React Native applications. According to the documentation: "레이아웃을 사용하면 여러 페이지에서 공통으로 사용되는 UI 요소를 쉽게 관리할 수 있어요" (layouts enable easy management of UI components shared across pages).

## Creating Layout Files

Layouts are implemented by creating a `_layout.tsx` file. The file's location determines its application scope.

### Basic Structure

```tsx
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return <>{children}</>;
}
```

## Application Scope

Layout application varies by file location:

- **`pages/_layout.tsx`**: Applied to all pages globally
- **`pages/[section]/_layout.tsx`**: Applied only to pages within that section

## Nested Layouts

Multiple layouts can be combined hierarchically. When several layouts apply to a page, they execute sequentially from the top-level directory downward.

### Example Structure

```
pages/
├── _layout.tsx          // Global layout
├── about/
│   ├── _layout.tsx     // Section-specific layout
│   ├── index.tsx       // Main page
│   └── team.tsx        // Team page
└── index.tsx           // Root page
```

## Accessing Query Parameters

Use the `useParams` hook to access query parameters within layouts:

```tsx
import { useParams } from "react-native-bedrock";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  const params = useParams({ strict: false });
  const title = params?.title ?? "Default Title";

  return (
    <View style={{ flex: 1 }}>
      <View style={{ padding: 16 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>{title}</Text>
      </View>
      <View style={{ flex: 1 }}>{children}</View>
    </View>
  );
}
```

## Related References

- Routing documentation
- Query parameter usage guide
