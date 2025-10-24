# ColorPreference

## 개요

`ColorPreference`는 기기의 현재 색상 모드를 나타내는 타입입니다. 라이트 모드와 다크 모드 중 하나의 값을 가집니다.

## 지원 환경

- **프레임워크**: React Native
- **실행 환경**: Toss AppSandbox App

## 타입 정의

```typescript
type ColorPreference = 'light' | 'dark';
```

### 타입 설명

| 값 | 설명 |
|---|---|
| `'light'` | 라이트 모드 |
| `'dark'` | 다크 모드 |

## 사용 방법

이 타입은 기기의 색상 모드 설정을 감지하여 앱의 UI를 동적으로 조정할 때 활용됩니다.

```typescript
// 색상 모드에 따른 조건부 처리 예시
const currentMode: ColorPreference = 'dark'; // 또는 'light'

if (currentMode === 'dark') {
  // 다크 모드 스타일 적용
} else {
  // 라이트 모드 스타일 적용
}
```

## 관련 문서

- ScrollViewInertialBackground
- KeyboardAboveView
- OnAudioFocusChanged
