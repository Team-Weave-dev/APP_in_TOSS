# NavigationBar API Documentation

## Overview

The NavigationBar component allows adding icon buttons to the top common navigation bar in Apps in Toss applications.

**Supported Environments:**
- React Native
- WebView

**Runtime:** Toss App, Sandbox App

## Interface

```typescript
interface NavigationBarOptions {
  withBackButton?: boolean;
  withHomeButton?: boolean;
  initialAccessoryButton?: InitialAccessoryButton; // Max 1 button
}

interface InitialAccessoryButton {
  id: string;
  title?: string;
  icon: {
    name: string;
  };
}
```

## Implementation Methods

### Method 1: Initial Configuration

**React (Web):**
Configure in `defineConfig`:

```typescript
navigationBar: {
  withBackButton: true,
  withHomeButton: true,
  initialAccessoryButton: {
    id: 'heart',
    title: 'Heart',
    icon: { name: 'icon-heart-mono' },
  }
}
```

**React Native:**
Configure in `granite.config.ts`:

```typescript
navigationBar: {
  withBackButton: true,
  withHomeButton: true,
  initialAccessoryButton: {
    id: 'heart',
    title: '하트',
    icon: { name: 'icon-heart-mono' },
  }
}
```

### Method 2: Runtime Addition

**React (Web):**
```typescript
import { partner, tdsEvent } from '@apps-in-toss/web-framework';

useEffect(() => {
  partner.addAccessoryButton({
    id: 'heart',
    title: '하트',
    icon: { name: 'icon-heart-mono' },
  });

  const cleanup = tdsEvent.addEventListener('navigationAccessoryEvent', {
    onEvent: ({ id }) => {
      if (id === 'heart') console.log('clicked');
    },
  });

  return cleanup;
}, []);
```

**React Native:**
```typescript
import { useTopNavigation } from '@apps-in-toss/framework';

const { addAccessoryButton } = useTopNavigation();

addAccessoryButton({
  title: '하트',
  icon: { name: 'icon-heart-mono' },
  id: 'heart',
  onPress: () => console.log('clicked'),
});
```

## Key Properties

| Property | Type | Description |
|----------|------|-------------|
| `id` | string | Unique identifier for the button |
| `title` | string | Optional button label |
| `icon.name` | string | Icon identifier from design system |
| `withBackButton` | boolean | Show back navigation button |
| `withHomeButton` | boolean | Show home button |
