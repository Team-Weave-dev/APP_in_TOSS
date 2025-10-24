# closeView - 화면 닫기

## 개요

`closeView`는 현재 화면을 종료하는 함수입니다. "닫기" 버튼 클릭 시와 같이 서비스를 종료해야 할 때 활용됩니다.

## 지원 환경

- **플랫폼**: React Native, WebView
- **실행환경**: Toss App, Sandbox App

## 함수 시그니처

```typescript
function closeView(): Promise<void>;
```

## 반환 값

- `Promise<void>`: 화면 종료 작업의 비동기 처리 결과

## 사용 예제

### 기본 구현 - 닫기 버튼

```tsx
import { Button } from 'react-native';
import { closeView } from '@granite-js/react-native';

function CloseButton() {
  return <Button title="닫기" onPress={closeView} />;
}
```

## 주요 특징

- 현재 화면을 토스앱으로 돌아가도록 종료합니다
- Promise 기반의 비동기 함수로 동작합니다
- 별도의 파라미터 입력이 필요하지 않습니다

## 관련 기능

네비게이션 제어의 다른 기능들:
- iOS 스와이프 제스처 설정
- 뒤로가기 이벤트 제어
