# Analytics Init Documentation

## Overview

The `init` function initializes analytics features in your application. This function must be called before using any analytics functionality.

## Function Signature

```typescript
declare function init(options: AnalyticsConfig): void;
```

## Parameters

**options** (required) - `AnalyticsConfig`
- A configuration object needed to enable analytics functionality

## Environment Support

- **Framework**: React Native
- **Runtime**: Toss App

## Implementation Notes

The `init` function serves as a prerequisite for all analytics operations. You must invoke it with appropriate configuration settings before attempting to log user behaviors, record impressions, or track click events.

## Related Functions

After initialization, you can use these analytics functions:

- **LoggingArea** - Record metrics at the region level
- **LoggingImpression** - Capture component visibility events
- **LoggingPress** - Track user click interactions

## Navigation

- Previous: [User Behavior Logging](/bedrock/reference/framework/%EB%B6%84%EC%84%9D/Analytics.html)
- Next: [Area-Based Logging](/bedrock/reference/framework/%EB%B6%84%EC%84%9D/LoggingArea.html)

---

**Note**: The documentation references `AnalyticsConfig` as the required parameter type, but specific configuration properties are not detailed in the provided content.
