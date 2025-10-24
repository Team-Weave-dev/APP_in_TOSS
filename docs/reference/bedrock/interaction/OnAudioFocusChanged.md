# OnAudioFocusChanged

## 개요

`OnAudioFocusChanged`는 오디오 포커스 변경 시 호출되는 콜백 함수입니다. 비디오 컴포넌트에서 "음소거 없음" 상태일 때 필수로 구현해야 합니다.

## 지원 환경

- **프레임워크**: React Native
- **실행 환경**: Toss AppSandbox App

## 함수 시그니처

```typescript
type OnAudioFocusChanged = NonNullable<VideoProperties['onAudioFocusChanged']>;
```

## 파라미터

| 파라미터 | 타입 | 필수 | 설명 |
|---------|------|------|------|
| `event` | Object | ✓ | 오디오 포커스 정보를 담은 이벤트 객체 |
| `event.hasAudioFocus` | boolean | ✓ | 비디오 컴포넌트가 오디오 포커스 보유 여부 |

## 주요 특징

- 오디오 포커스 변경을 감지하여 대응 가능
- `muted` 속성이 `false`인 경우 반드시 구현 필요
- 비디오 재생 중 다른 앱의 오디오와의 충돌 방지

## 관련 컴포넌트

- Video 컴포넌트
- RNVideoRef
