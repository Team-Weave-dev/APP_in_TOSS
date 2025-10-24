# 개발하기 (Push Messaging)

## Overview

This page documents the API for sending messages to users through the Apps in Toss platform.

## Base URL

```
https://apps-in-toss-api.toss.im
```

## Send Message Endpoint

**Method:** `POST`
**Endpoint:** `/api-partner/v1/apps-in-toss/messenger/send-message`
**Content-Type:** `application/json`

### Request Headers

| Name | Type | Required | Description |
|------|------|----------|-------------|
| x-toss-user-key | string | Y | userKey value obtained through Toss login |

### Request Parameters

| Name | Type | Required | Description |
|------|------|----------|-------------|
| templateSetCode | String | Y | Template code for the message to send |
| context | object | Y | Variables to pass for registered template content |

### Request Example

```json
{
  "templateSetCode": "test_01",
  "context": {
    "storeName": "토스증권",
    "date": "2025-01-20 15:30"
  }
}
```

**Note:** The `userName` is automatically populated with the user's name and does not need to be provided.

### cURL Example

```bash
curl --location 'https://{{domain}}/api-partner/v1/apps-in-toss/messenger/send-message' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {{userKey}}' \
--data '{
  "templateSetCode": "test_01",
  "context": {
    "storeName": "토스증권",
    "date": "2025-01-20 15:30"
  }
}'
```

### Response Structure

```json
{
  "resultType": "SUCCESS",
  "result": {
    "msgCount": 1,
    "sentPushCount": 1,
    "sentInboxCount": 0,
    "sentSmsCount": 0,
    "sentAlimtalkCount": 0,
    "sentFriendtalkCount": 0,
    "detail": {
      "sentPush": [
        {
          "contentId": "toss:PUSH~~~~"
        }
      ],
      "sentInbox": [],
      "sentSms": [],
      "sentAlimtalk": [],
      "sentFriendtalk": []
    },
    "fail": {
      "sentPush": [
        {
          "contentId": "toss:PUSH~~~~",
          "reachFailReason": "failure reason"
        }
      ]
    }
  },
  "error": {
    "errorType": 0,
    "errorCode": "string",
    "reason": "string",
    "data": {},
    "title": "string"
  }
}
```

### Result Type Values

- `SUCCESS`
- `HTTP_TIMEOUT`
- `NETWORK_ERROR`
- `EXECUTION_FAIL`
- `INTERRUPTED`
- `INTERNAL_ERROR`
- `FAIL`

## Related Navigation

- **Previous:** [Console Guide](/push/console.html)
- **Next:** [QA Process](/push/qa.html)
