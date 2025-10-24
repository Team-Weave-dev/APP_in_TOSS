# fetchContacts API Documentation

## Overview
The `fetchContacts` function retrieves a user's contact list in paginated format from their device.

**Supported Environments:** React Native, WebView
**Runtime:** Toss App, Sandbox App

## Function Signature

```typescript
function fetchContacts(options: {
  size: number;
  offset: number;
  query?: {
    contains?: string;
  };
}): Promise<ContactResult>;
```

## Parameters

**options** (required)
- **size** (number, required): Maximum number of contacts to retrieve per call
- **offset** (number, required): Starting position for retrieval; use `0` for initial calls, then use the `nextOffset` value from previous responses
- **query** (optional)
  - **contains** (string, optional): Filters contacts by name substring; omit to retrieve all contacts

## Return Value

Returns `Promise<ContactResult>` containing:
- **result**: Array of `ContactEntity` objects with contact details
- **nextOffset**: The offset value for the subsequent call; `null` when no more contacts exist
- **done**: Boolean indicating completion of all contacts

## Properties

- **openPermissionDialog()**: Displays a system permission dialog with allow, allow-once, or deny options; returns `'allowed'` or `'denied'`
- **getPermission()**: Returns current permission status: `'allowed'`, `'denied'`, or `'notDetermined'`

## Error Handling

Throws `FetchContactsPermissionError` when permission is denied. Check using:
```typescript
if (error instanceof FetchContactsPermissionError) {
  // Handle permission denied
}
```

## Example Usage

```typescript
const response = await fetchContacts({
  size: 10,
  offset: contacts.nextOffset ?? 0,
  query: { contains: '김' }
});

// Check permission status
const permission = await fetchContacts.getPermission();

// Request permission
await fetchContacts.openPermissionDialog();
```
