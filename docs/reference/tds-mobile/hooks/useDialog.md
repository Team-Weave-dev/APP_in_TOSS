# useDialog Hook Documentation

## 개요

`useDialog` 훅은 Alert와 Confirm 형태의 다이얼로그를 쉽게 표시할 수 있게 해주는 유틸리티 훅입니다.

## 목적

이 훅을 사용하면 컴포넌트 상태를 수동으로 관리하지 않고도 프로그래밍 방식으로 모달 다이얼로그를 표시할 수 있습니다.

## 주요 기능

- **Alert dialogs** - 단일 액션 버튼이 있는 알림 표시
- **Confirm dialogs** - 확인/취소 옵션으로 사용자 결정 요청
- **Async support** - 자동 로딩 상태로 비동기 작업 처리

---

## 사용 예시

### 기본 Alert Dialog

`openAlert` 메서드를 사용하여 설정 객체를 전달합니다:

```javascript
const { openAlert } = useDialog();

openAlert({
  title: '알려드릴게요',
  description: '작업이 완료됐어요.',
  alertButton: '확인하기',
});
```

**설정 옵션:**
- `title` (필수) - 다이얼로그 제목
- `description` - 추가 텍스트 콘텐츠
- `alertButton` - 버튼 텍스트 또는 커스텀 요소 (기본값: '확인')
- `closeOnDimmerClick` - 배경 클릭으로 닫기 허용 (기본값: false)

### Confirm Dialog

`openConfirm`을 사용하여 사용자 확인을 요청합니다:

```javascript
const { openConfirm } = useDialog();

openConfirm({
  title: '삭제할까요?',
  description: '이 작업은 되돌릴 수 없어요.',
  confirmButton: '삭제하기',
  cancelButton: '취소',
});
```

### Async Confirm Dialog

`openAsyncConfirm` 메서드는 비동기 작업을 처리합니다:

```javascript
const { openAsyncConfirm } = useDialog();

openAsyncConfirm({
  title: '상담을 종료할까요?',
  confirmButton: '종료하기',
  cancelButton: '취소',
  onConfirmClick: () => delay(2000),
});
```

비동기 실행 중 자동으로 로딩 상태를 표시합니다.

---

## API 레퍼런스

### AlertOptions

| 속성 | 기본값 | 타입 | 설명 |
|----------|---------|------|-------------|
| `title`* | — | `React.ReactNode` | 필수 다이얼로그 제목 |
| `description` | — | `React.ReactNode` | 선택적 설명 텍스트 |
| `alertButton` | '확인' | `ReactElement \| string` | 버튼 콘텐츠 또는 커스텀 요소 |
| `closeOnDimmerClick` | false | `boolean` | 배경 클릭으로 닫기 활성화 |
| `onEntered` | — | `() => void` | 다이얼로그 열린 후 콜백 |
| `onExited` | — | `() => void` | 다이얼로그 닫힌 후 콜백 |

### ConfirmOptions

| 속성 | 기본값 | 타입 | 설명 |
|----------|---------|------|-------------|
| `title`* | — | `React.ReactNode` | 필수 다이얼로그 제목 |
| `description` | — | `React.ReactNode` | 선택적 설명 텍스트 |
| `confirmButton` | '확인' | `ReactElement \| string` | 확인 버튼 콘텐츠 |
| `cancelButton` | '취소' | `ReactElement \| string` | 취소 버튼 콘텐츠 |
| `closeOnDimmerClick` | false | `boolean` | 배경 클릭으로 닫기 활성화 |
| `onEntered` | — | `() => void` | 다이얼로그 열린 후 콜백 |
| `onExited` | — | `() => void` | 다이얼로그 닫힌 후 콜백 |

### AsyncConfirmOptions

ConfirmOptions를 확장하며 다음을 추가합니다:

| 속성 | 기본값 | 타입 | 설명 |
|----------|---------|------|-------------|
| `onConfirmClick` | — | `() => Promise<void>` | 확인 버튼 비동기 핸들러 |
| `confirmButtonLoadingPropName` | 'loading' | `string` | 로딩 상태 prop 이름 |
| `onCancelClick` | — | `() => Promise<void>` | 취소 버튼 비동기 핸들러 |
| `cancelButtonLoadingPropName` | 'loading' | `string` | 로딩 상태 prop 이름 |

---

## 관련 리소스

- [Overlay Extension 개요](https://tossmini-docs.toss.im/tds-mobile/hooks/OverlayExtension/check-first/)
- [useToast Hook](https://tossmini-docs.toss.im/tds-mobile/hooks/OverlayExtension/use-toast/)
- [useBottomSheet Hook](https://tossmini-docs.toss.im/tds-mobile/hooks/OverlayExtension/use-bottom-sheet/)
