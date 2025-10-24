# useVisibilityChange - 가시성 변경 감지하기

## 개요

`useVisibilityChange` 훅을 사용하면 페이지나 컴포넌트가 사용자에게 보이는 상태 변화를 감지할 수 있습니다. 화면이 포그라운드 또는 백그라운드로 전환될 때 등록된 콜백 함수가 호출됩니다.

**지원 환경:** React Native
**실행 환경:** Toss AppSandbox App

## 함수 시그니처

```typescript
function useVisibilityChange(callback: VisibilityCallback): void;
```

## 파라미터

| 파라미터 | 타입 | 필수 여부 | 설명 |
|---------|------|---------|------|
| `callback` | `VisibilityCallback` | 필수 | 화면 보임 상태 변경 시 호출되는 콜백 함수. 반환값이 `true`면 "visible", `false`면 "hidden" 문자열 전달 |

## 반환값

없음 (void)

## 사용 예제

```typescript
import { useVisibilityChange } from '@granite-js/react-native';
import { Button, Linking } from 'react-native';

export default function ImagePage() {
  useVisibilityChange((visibilityState) => {
    console.log({ visibilityState });
  });

  return (
    <Button
      onPress={() => {
        Linking.openURL('https://toss.im');
      }}
      title="https://toss.im 이동"
    />
  );
}
```

**출력 예시:**
```
{ "visibilityState": "hidden" }
{ "visibilityState": "visible" }
{ "visibilityState": "hidden" }
{ "visibilityState": "visible" }
```

## 주요 동작

- 홈 화면 이동 시: "hidden" 출력
- 앱 재진입 시: "visible" 출력
- 외부 링크 이동 시: "hidden" 출력

## 참고사항

WebView 환경에서 앱 백그라운드 전환 감지는 표준 `visibilitychange` 이벤트 활용을 권장합니다.
