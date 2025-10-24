# 오버레이 생성·관리하기

## 개요

`useOverlayBase`는 별도의 UI 레이어에 렌더링되는 오버레이 컴포넌트(다이얼로그와 유사)의 선언적 관리를 가능하게 하는 React 훅입니다. 이 훅은 Promise와 원활하게 작동하여 비동기 작업과 오버레이 제어를 결합하는 데 유용합니다. `useOverlayBase`를 여러 번 호출하여 여러 오버레이를 관리할 수 있습니다.

**필수 설정**: 앱의 `_app.tsx` 파일에 `<OverlayProvider>`를 추가하세요.

## 함수 시그니처

```typescript
function useOverlayBase({ exitOnUnmount }?: Options): {
    open: (overlayElement: CreateOverlayElement) => void;
    close: () => void;
};
```

## 파라미터

### Options 객체

- **exitOnUnmount** (boolean, 기본값: `true`)
  - `useOverlayBase`를 호출하는 컴포넌트가 언마운트될 때 오버레이가 자동으로 언마운트되는지 제어합니다
  - `false`일 때 오버레이는 메모리에 유지되며 `exit` 함수를 호출하여 수동으로 닫아야 합니다

## 반환값

다음을 포함하는 객체:

- **open**: 오버레이 요소를 받아 오버레이를 표시하는 함수
- **close**: 등록된 오버레이를 닫는 함수

## 사용 예제

### 설정 (_app.tsx)

```typescript
import { OverlayProvider } from '@apps-in-toss/framework';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <OverlayProvider>
      <Component {...pageProps} />
    </OverlayProvider>
  )
}
```

### 구현 (Page.tsx)

```typescript
import { useOverlayBase } from '@react-native-bedrock/core';

const overlay = useOverlayBase();

const openFooConfirmDialog = () => {
  return new Promise<boolean>(resolve => {
    overlay.open(({ isOpen, close }) => (
      <FooConfirmDialog
        open={isOpen}
        onClose={() => {
          resolve(false);
          close();
        }}
        onConfirm={() => {
          resolve(true);
          close();
        }}
      />
    ));
  });
};

await openFooConfirmDialog();
// 다이얼로그가 닫힌 후 코드 실행
console.log('다이얼로그가 닫혔습니다');
```

## 주요 기능

- **Promise 통합**: async/await 패턴과 오버레이 관리 결합
- **유연한 라이프사이클**: 오버레이가 컴포넌트와 함께 자동 언마운트되는지 제어
- **다중 오버레이**: 필요에 따라 여러 독립적인 오버레이 인스턴스 생성

## 환경

- **프레임워크**: React Native
- **실행 환경**: Toss AppSandbox App
