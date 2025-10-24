# getSafeAreaInsets - Safe Area 여백 값 구하기

## 개요

`getSafeAreaInsets` 함수는 모바일 기기의 시스템 UI(상태바, 홈 인디케이터 등)로 인한 안전 영역 여백을 픽셀 단위로 반환합니다. 특히 iPhone X 이상이나 노치가 있는 Android 기기에서 콘텐츠 가림 문제를 해결하는 데 유용합니다.

## 함수 시그니처

```typescript
function getSafeAreaInsets(): { top: number; bottom: number }
```

## 반환값

반환 객체는 다음 두 가지 속성을 포함합니다:

| 속성 | 타입 | 설명 |
|------|------|------|
| `top` | number | 상단 상태바가 차지하는 여백(픽셀) |
| `bottom` | number | 하단 홈 인디케이터 또는 네비게이션바 여백(픽셀) |

## 사용 예시

### 기본 사용법

```typescript
import { getSafeAreaInsets } from "@apps-in-toss/web-framework";

const insets = getSafeAreaInsets();
// 예: { top: 44, bottom: 34 }
```

### 하단 고정 버튼 구현

웹 앱의 하단 고정 버튼이 홈 인디케이터와 겹치지 않도록 설정:

```tsx
const Button = () => {
  const insets = getSafeAreaInsets();
  return (
    <div style={{ paddingBottom: `${insets.bottom}px` }}>
      <button>확인</button>
    </div>
  );
};
```

### 상단 고정 헤더 구현

상단 헤더가 상태바에 겹치지 않도록 설정:

```tsx
const Header = () => {
  const insets = getSafeAreaInsets();
  return (
    <div style={{ paddingTop: `${insets.top}px` }}>
      <h1>제목</h1>
    </div>
  );
};
```

## 지원 환경

- **실행 환경**: Toss AppSandbox App
- **WebView 기반 앱**: 전체 화면 모드에서 필수
