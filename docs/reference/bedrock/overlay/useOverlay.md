# 오버레이 제어하기

## 개요

`useOverlay`는 오버레이 표시 및 닫기 기능을 관리하는 React 훅입니다. 개발자가 오버레이 열기/닫기 상태를 쉽게 처리할 수 있게 하며 자동 오버레이 닫기를 위한 뒤로 가기 버튼 동작과의 통합을 제공합니다.

## 함수 시그니처

```typescript
function useOverlay(): {
    close: () => void;
    open: (overlayElement: CreateOverlayElement) => void;
};
```

## 반환값

훅은 두 가지 메서드가 있는 객체를 반환합니다:

- **`open`**: `CreateOverlayElement` 파라미터를 받아 오버레이를 표시합니다
- **`close`**: 현재 등록된 오버레이를 닫습니다

## 주요 기능

이 훅은 뒤로 가기 버튼 누름을 처리하도록 설계되어 있으며, 사용자가 뒤로 탐색을 시작할 때 자동으로 오버레이를 닫고 화면을 종료합니다.

## 사용 예제

```typescript
import { useOverlay } from '@apps-in-toss/framework';

const overlay = useOverlay();

const openBottomSheet = useCallback(() => {
  return new Promise<void>((resolve) => {
    overlay.open(({ isOpen, exit, close }) => {
      const handleClose = () => {
        close();
        resolve();
      };

      return (
        <BottomSheet
          open={isOpen}
          onClose={handleClose}
          onExited={exit}
          header={<BottomSheet.Header>헤더 텍스트</BottomSheet.Header>}
          cta={<BottomSheet.CTA onPress={handleClose}>확인</BottomSheet.CTA>}
        >
          <View>
            <TextField size="classic" label="name" value="FOCUS ME" />
          </View>
        </BottomSheet>
      );
    });
  });
}, []);
```

## 지원 환경

- **프레임워크**: React Native
- **실행 환경**: Toss AppSandbox App
