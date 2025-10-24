# Toss Certificate Request API Documentation

## Overview
The `appsInTossSignTossCert` function invokes Toss authentication screens using a transaction ID (`txId`) obtained from a certificate verification request.

## Supported Environments
- **Frameworks**: React Native, WebView
- **Runtime**: Toss App
- **Minimum SDK Version**: v1.2.2
- **Minimum Toss App Version**: v5.233.0

## Function Signature

```typescript
appsInTossSignTossCert(params: AppsInTossSignTossCertParams): Promise<unknown>
```

## Parameters

### AppsInTossSignTossCertParams

| Parameter | Type | Description |
|-----------|------|-------------|
| `txId` | `string` | Transaction ID issued during certificate verification request |

## Response

### Success Response
- **Type**: No parameters returned
- The response indicates authentication screen completion

### Error Response
```typescript
type AppsInTossSignTossCertError = {
  code: string;
  message: string;
};
```

Possible error scenarios include:
- User cancellation
- Application not installed
- Scheme invocation failure

## Implementation Example

```typescript
import { appsInTossSignTossCert } from '@apps-in-toss/web-framework';

export async function openTossCertWithTxId(txId: string): Promise<unknown> {
  try {
    const response = await appsInTossSignTossCert({ txId });
    return response;
  } catch (e: unknown) {
    throw e;
  }
}
```

## Important Notes

The response serves completion confirmation purposes only. "Server must invoke result inquiry API using txId to determine final authentication status."
