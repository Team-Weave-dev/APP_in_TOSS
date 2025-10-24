# setItem - Storage API Documentation

## 개요
`setItem` 함수는 문자열 데이터를 모바일 앱의 로컬 저장소에 저장하며, 앱이 종료되고 재시작된 후에도 정보를 유지합니다.

## 함수 시그니처

```typescript
function setItem(key: string, value: string): Promise<void>;
```

## 파라미터

| 파라미터 | 타입 | 필수 | 설명 |
|-----------|------|----------|-------------|
| `key` | string | Yes | 저장할 항목의 식별자 |
| `value` | string | Yes | 저장할 데이터 값 |

## 반환 값

- **Promise<void>**: 성공적으로 저장되면 데이터를 반환하지 않고 완료됩니다

## 지원 환경

- **프레임워크**: React Native / WebView
- **실행 환경**: Toss App / Sandbox App

## 사용 예시

### React 구현

```typescript
import { Storage } from '@apps-in-toss/web-framework';
import { Button, Text } from '@toss-design-system/mobile';
import { useState } from 'react';

const KEY = 'my-key';

function StorageExample() {
  const [storageValue, setStorageValue] = useState<string | null>(null);

  async function handleSet() {
    await Storage.setItem(KEY, 'my-value');
  }

  async function handleGet() {
    const value = await Storage.getItem(KEY);
    setStorageValue(value);
  }

  async function handleRemove() {
    await Storage.removeItem(KEY);
  }

  return (
    <>
      <Text>{storageValue}</Text>
      <Button onClick={handleSet}>저장</Button>
      <Button onClick={handleGet}>가져오기</Button>
      <Button onClick={handleRemove}>삭제</Button>
    </>
  );
}
```

### React Native 구현

```typescript
import { Storage } from '@apps-in-toss/framework';
import { Button, Text } from '@toss-design-system/react-native';
```

React 버전과 동일하게 구현되며 `onPress`가 `onClick`을 대체합니다.
