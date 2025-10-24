# 값 삭제하기 (removeItem) - Storage API Documentation

## 개요

`removeItem` 함수는 키 식별자를 제공하여 모바일 앱의 로컬 저장소에서 특정 항목을 삭제할 수 있게 해줍니다.

## 함수 시그니처

```typescript
declare function removeItem(key: string): Promise<void>;
```

## 파라미터

| 파라미터 | 타입 | 필수 | 설명 |
|-----------|------|----------|-------------|
| `key` | string | Yes | 삭제할 아이템의 키를 입력해요 |

## 반환 값

- **타입:** `Promise<void>`
- **동작:** 아이템을 삭제하면 아무 값도 반환하지 않아요

## 지원 환경

- **프레임워크:** React Native, WebView
- **실행 환경:** Toss App, Sandbox App

## 사용 예시

### React 구현

```typescript
import { Storage } from '@apps-in-toss/web-framework';
import { Button, Text } from '@toss-design-system/mobile';
import { useState } from 'react';

const KEY = 'my-key';

function StorageClearButton() {
  const [storageValue, setStorageValue] = useState<string | null>(null);

  async function handleRemove() {
    await Storage.removeItem(KEY);
  }

  return (
    <Button onClick={handleRemove}>삭제하기</Button>
  );
}
```

### React Native 구현

```typescript
import { Storage } from '@apps-in-toss/framework';
import { Button, Text } from '@toss-design-system/react-native';
import { useState } from 'react';

const KEY = 'my-key';

function StorageClearButton() {
  async function handleRemove() {
    await Storage.removeItem(KEY);
  }

  return (
    <Button onPress={handleRemove}>삭제하기</Button>
  );
}
```

## 관련 함수

- **setItem:** 네이티브 저장소에 값 저장
- **getItem:** 저장된 값 조회
- **clearItems:** 저장된 모든 항목 삭제
