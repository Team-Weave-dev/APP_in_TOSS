# setIosSwipeGestureEnabled - iOS 스와이프 설정하기

## 개요

`setIosSwipeGestureEnabled` 함수를 통해 iOS 기기에서 화면 스와이프 제스처로 뒤로가기 기능을 활성화 또는 비활성화할 수 있습니다.

## 함수 시그니처

```typescript
function setIosSwipeGestureEnabled(options: {
    isEnabled: boolean;
}): Promise<void>;
```

## 파라미터

| 파라미터 | 타입 | 필수 | 설명 |
|---------|------|------|------|
| `options` | object | ✓ | 스와이프 제스처 설정 옵션 |
| `options.isEnabled` | boolean | ✓ | `true`: 스와이프 뒤로가기 활성화 / `false`: 비활성화 |

## 반환값

- `Promise<void>`: 비동기 작업 완료 시 resolve되는 Promise

## 사용 예제

화면 스와이프로 뒤로가기 기능을 토글하는 버튼 구현:

```tsx
import { setIosSwipeGestureEnabled } from '@apps-in-toss/framework';
import { Button } from 'react-native';

function Page() {
  return (
    <>
      <Button
        title="스와이프 끄기"
        onPress={() => setIosSwipeGestureEnabled({ isEnabled: false })}
      />
      <Button
        title="스와이프 켜기"
        onPress={() => setIosSwipeGestureEnabled({ isEnabled: true })}
      />
    </>
  );
}
```

## 지원 환경

- **WebView 환경**에서만 지원
- **Toss AppSandbox App**에서 실행
