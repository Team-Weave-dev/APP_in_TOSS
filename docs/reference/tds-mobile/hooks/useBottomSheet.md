# useBottomSheet Hook Documentation

## 개요

`useBottomSheet` 유틸리티 훅은 화면 하단에서 위로 슬라이드되는 바텀 시트를 관리할 수 있게 해줍니다. 일관된 구현 패턴을 통해 바텀 시트 제어를 간소화하고 반복적인 코드를 줄입니다.

## 목적

"이 훅을 사용하면 바텀 시트의 열림과 닫힘 상태를 제어하고, 콘텐츠 표시 및 사용자 상호작용을 효율적으로 처리할 수 있습니다."

## 훅 메서드

### 1. 기본 바텀 시트

**메서드:** `open(options)`

기본 바텀 시트를 다음과 함께 표시합니다:
- `header`: 시트의 제목 콘텐츠
- `children`: 표시할 주요 콘텐츠
- `closeOnDimmerClick`: 배경 클릭으로 닫기 전환 (기본값: `true`)
- `onClose`: 시트가 닫힐 때의 콜백

### 2. 단일 버튼 시트

**메서드:** `openOneButtonSheet(options)`

하나의 액션 버튼이 포함된 바텀 시트를 표시합니다:
- `button`: 텍스트 또는 커스텀 버튼 컴포넌트 (문자열은 기본 버튼 생성)
- `closeOnButtonClick`: 버튼 클릭 동작 제어

### 3. 두 버튼 시트

**메서드:** `openTwoButtonSheet(options)`

두 개의 액션 버튼이 있는 바텀 시트를 표시합니다:
- `leftButton`: 왼쪽 버튼 설정 (기본값: '취소')
- `rightButton`: 오른쪽 버튼 설정 (기본값: '확인')
- 각 버튼에 대한 개별 닫기 제어

### 4. 비동기 두 버튼 시트

**메서드:** `openAsyncTwoButtonSheet(options)`

"작업이 완료될 때까지 버튼이 로딩 상태를 표시하고, 조건이 만족될 때까지 시트를 열린 상태로 유지하는 비동기 작업을 처리합니다."

- `onLeftButtonClick`: 왼쪽 버튼 비동기 함수
- `onRightButtonClick`: 오른쪽 버튼 비동기 함수
- 자동 로딩 상태 관리

## 설정 옵션

### 공통 속성

| 속성 | 기본값 | 타입 | 설명 |
|----------|---------|------|-------------|
| `children` | — | `React.ReactNode` | 시트 콘텐츠 |
| `header` | — | `React.ReactNode` | 제목 텍스트 |
| `closeOnDimmerClick` | `true` | Boolean | 배경 클릭으로 시트 닫기 |
| `onEntered` | — | Function | 열린 후 콜백 |
| `onExited` | — | Function | 닫힌 후 콜백 |

### 접근성 속성

- `UNSAFE_disableFocusLock`: 포커스 제한 비활성화 (주의해서 사용)
- `UNSAFE_ignoreDimmerClick`: 배경 클릭으로 닫기 방지
- `UNSAFE_ignoreBackEvent`: 뒤로 가기 네비게이션 이벤트 무시

## 코드 예시

### 기본 구현

```typescript
const { open, close } = useBottomSheet();

open({
  header: 'Sheet Title',
  children: <Text>Content here</Text>,
  onClose: () => close(),
});
```

### 단일 버튼 패턴

```typescript
const { openOneButtonSheet } = useBottomSheet();

openOneButtonSheet({
  header: 'Confirmation',
  children: <Text>Action description</Text>,
  button: 'Confirm',
});
```

### 두 버튼 패턴

```typescript
await openTwoButtonSheet({
  header: 'Decision Required',
  children: <Text>Choose an action</Text>,
  leftButton: 'Cancel',
  rightButton: 'Confirm',
});
```

### 비동기 작업

```typescript
openAsyncTwoButtonSheet({
  header: 'Confirm Cancellation',
  children: <Text>This cannot be undone</Text>,
  onRightButtonClick: () => performAsyncTask(),
});
```

## 중요 참고사항

⚠️ **권장 동작:** "사용자가 배경과 상호작용하거나 뒤로 버튼을 누를 때, 작업을 취소하고 시트를 닫는 것이 권장 패턴입니다."

`UNSAFE_` 접두사가 붙은 속성은 접근성 기능을 제한하므로 기술적으로 피할 수 없는 경우에만 사용해야 합니다.
