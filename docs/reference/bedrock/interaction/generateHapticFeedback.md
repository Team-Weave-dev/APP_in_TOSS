# 햅틱 진동 실행하기

## 개요

`generateHapticFeedback` 함수는 버튼 누름이나 화면 전환과 같은 상호작용 중 사용자 경험을 향상시키기 위해 기기에서 햅틱 진동을 트리거합니다.

## 지원 환경

- **프레임워크**: React Native, WebView
- **실행 환경**: Toss App, Sandbox App

## 함수 시그니처

```typescript
function generateHapticFeedback(options: HapticFeedbackOptions): Promise<void>;
```

## 파라미터

- **options** (`HapticFeedbackOptions`): 실행할 진동 타입을 지정하는 설정 객체

## 반환값

- `Promise<void>`: 햅틱 피드백이 생성되었을 때 resolve됩니다

## 사용 예제

```typescript
import { Button } from "react-native";
import { generateHapticFeedback } from '@apps-in-toss/framework';

function GenerateHapticFeedback() {
  return (
    <Button
      title="햅틱"
      onPress={() => {
        generateHapticFeedback({ type: "tickWeak" });
      }}
    />
  );
}
```

## 관련 문서

사용 가능한 햅틱 피드백 패턴을 정의하는 자세한 진동 타입 옵션은 `HapticFeedbackOptions` 문서를 참조하세요.

## 추가 리소스

완전한 예제 구현은 QR 코드를 통한 직접 테스트와 함께 [apps-in-toss-examples 저장소](https://github.com/toss/apps-in-toss-examples/tree/main/with-haptic-feedback)에서 확인할 수 있습니다.
