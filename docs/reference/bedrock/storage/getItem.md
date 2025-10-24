# getItem - 저장소 값 읽기

## 개요

`getItem` 함수는 모바일 앱의 로컬 저장소에서 문자열 데이터를 조회합니다. 앱 재시작 후에도 데이터가 유지되어야 할 때 주로 사용됩니다.

## 시그니처

```typescript
function getItem(key: string): Promise<string | null>;
```

## 파라미터

| 파라미터 | 타입 | 필수 | 설명 |
|---------|------|------|------|
| `key` | string | ✓ | 조회할 아이템의 키 |

## 반환 값

| 타입 | 설명 |
|------|------|
| `Promise<string \| null>` | 지정한 키에 저장된 문자열 값을 반환. 값이 없으면 `null` 반환 |

## 지원 환경

- **React Native**
- **WebView**
- **실행환경**: Toss App, Sandbox App

## 사용 예제

### 저장된 값 조회하기

```typescript
import { Storage } from '@apps-in-toss/framework';
import { Button, Text } from '@toss-design-system/react-native';
import { useState } from 'react';

const KEY = 'my-key';

function StorageExample() {
  const [storageValue, setStorageValue] = useState<string | null>(null);

  async function handleGet() {
    const value = await Storage.getItem(KEY);
    setStorageValue(value);
  }

  return (
    <>
      <Text>{storageValue}</Text>
      <Button onPress={handleGet}>가져오기</Button>
    </>
  );
}
```

## 관련 함수

- `setItem()` - 값 저장하기
- `removeItem()` - 값 삭제하기
- `clearItems()` - 모든 항목 삭제
