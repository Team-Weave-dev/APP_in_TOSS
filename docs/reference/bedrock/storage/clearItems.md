# clearItems - 모든 항목 삭제

## 개요

`clearItems` 함수는 모바일 앱의 로컬 저장소에 저장된 모든 데이터를 제거합니다.

## 지원 환경
- React Native
- WebView

## 실행 환경
- Toss App
- Sandbox App

## 함수 시그니처

```typescript
declare function clearItems(): Promise<void>;
```

## 반환 값

**Promise<void>**

저장소의 모든 항목을 삭제한 후 아무 값도 반환하지 않으며, 저장소가 초기화됩니다.

## 사용 예제

### React 예제

```tsx
import { Storage } from '@apps-in-toss/web-framework';
import { Button } from '@toss-design-system/mobile';

function StorageClearButton() {
  async function handleClick() {
    await Storage.clearItems();
    console.log('Storage cleared');
  }

  return <Button onClick={handleClick}>저장소 초기화</Button>;
}
```

### React Native 예제

```tsx
import { Storage } from '@apps-in-toss/framework';
import { Button } from '@toss-design-system/react-native';

function StorageClearButton() {
  async function handlePress() {
    await Storage.clearItems();
    console.log('Storage cleared');
  }

  return <Button onPress={handlePress}>저장소 초기화</Button>;
}
```

## 관련 함수

- **setItem**: 값 저장하기 - 저장소에 데이터 저장
- **getItem**: 값 읽기 - 저장소에서 데이터 조회
- **removeItem**: 값 삭제하기 - 특정 항목만 삭제
