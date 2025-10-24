# 진동 타입(옵션)

## 개요

`HapticFeedbackOptions`는 Apps in Toss SDK의 `generateHapticFeedback` 함수에서 사용 가능한 진동 타입을 정의합니다. 이 인터페이스를 통해 개발자는 지원되는 기기에서 다양한 햅틱 피드백 패턴을 트리거할 수 있습니다.

## 시그니처

```typescript
interface HapticFeedbackOptions {
    type: HapticFeedbackType;
}
```

## 타입 정의

### HapticFeedbackType

```typescript
type HapticFeedbackType =
  | "tickWeak"
  | "tap"
  | "tickMedium"
  | "softMedium"
  | "basicWeak"
  | "basicMedium"
  | "success"
  | "error"
  | "wiggle"
  | "confetti";
```

## 파라미터

| 속성 | 타입 | 설명 |
|-----|------|------|
| `type` | `HapticFeedbackType` | 실행할 진동 패턴을 지정합니다 |

## 사용 가능한 진동 타입

- **tickWeak** - 가벼운 틱 진동
- **tap** - 탭과 같은 진동
- **tickMedium** - 중간 강도 틱
- **softMedium** - 부드러운 중간 진동
- **basicWeak** - 기본 약한 진동
- **basicMedium** - 기본 중간 진동
- **success** - 성공 피드백 패턴
- **error** - 오류 피드백 패턴
- **wiggle** - 흔들림 모션
- **confetti** - 축하 진동 패턴

## 지원 환경

- **프레임워크**: React Native, WebView
- **실행 환경**: Toss App, Sandbox App

## 관련 메서드

- `generateHapticFeedback()` - 이러한 옵션을 사용하여 진동 피드백을 트리거하는 함수
