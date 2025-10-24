# Routing API Documentation

## Overview

The routing system enables navigation between screens in Granite applications built with React Native. The implementation is based on [React Navigation](https://reactnavigation.org/).

## Core Concepts

### Route Definition

Routes are defined using `createRoute`:

```typescript
export const Route = createRoute("/page-name", {
  validateParams: (params) => params as { paramName: type },
  component: ComponentName,
});
```

**Key Features:**
- Type-safe parameter validation
- Automatic type generation during development
- File-based routing from `pages/` directory

## Navigation Functions

### Navigate to Screen

```typescript
const navigation = useNavigation();
navigation.navigate("/destination-path", {
  key1: value1,
  key2: value2
});
```

Transitions to a specified route while maintaining navigation history.

### Return to Previous Screen

```typescript
if (navigation.canGoBack()) {
  navigation.goBack();
}
```

Always verify navigation history exists before calling `goBack()` to prevent errors.

### Access Route Parameters

```typescript
const params = Route.useParams();
// Type-safe access: params.paramName
```

Alternative pattern:
```typescript
import { useParams } from 'react-native-bedrock';
const params = useParams({ from: '/source-path' });
```

## Advanced Navigation Control

### Reset Navigation Stack

```typescript
import { CommonActions } from "@react-native-bedrock/native/@react-navigation/native";

navigation.dispatch((state) => {
  return CommonActions.reset({
    ...state,
    index: 0,
    routes: state.routes.filter((route) => route.name === "/target-route"),
  });
});
```

This clears history, keeping only specified routes and preventing back navigation to removed screens.

## Type Safety

Automatic type definitions are generated in `src/router.gen.ts`:

```typescript
declare module '@granite-js/react-native' {
  interface RegisterScreen {
    '/route-name': ReturnType<typeof Route.useParams>;
  }
}
```

No manual type files needed—regeneration occurs automatically during development.

## Environment

**Supported Platform:** React Native
**Runtime:** Toss App, Sandbox App
