# TDS Mobile 컴포넌트 (tds-mobile/)

> **상위 컨텍스트**: [reference/claude.md](../claude.md) → [docs/claude.md](../../claude.md) → [루트 CLAUDE.md](../../../CLAUDE.md)

---

## ⚠️ 중요: WebView 앱 전용

**TDS Mobile은 WebView 앱에서만 사용 가능합니다!**

### ✅ 사용 가능 (WebView 앱)
- **프레임워크**: `@apps-in-toss/web-framework`
- **UI 라이브러리**: `@toss/tds-mobile`
- **필수 의존성**:
  ```json
  {
    "@toss/tds-mobile": "latest",
    "@toss/tds-mobile-ait": "latest",
    "@emotion/react": "^11",
    "react": "^18",
    "react-dom": "^18"
  }
  ```
- **번들러**: Vite, Webpack
- **개발 가이드**: [WebView 개발](../../04-development/06-webview.md)

### ❌ 사용 불가 (React Native 앱)
React Native 앱에서는 **TDS React Native**를 사용해야 합니다!
- **패키지**: `@toss/tds-react-native`
- **공식 문서**: https://tossmini-docs.toss.im/tds-react-native/
- **차이점**: `react-dom` 대신 `react-native` 사용

---

## 📌 디렉토리 목적

Apps in Toss **WebView 앱** 전용 UI 컴포넌트 라이브러리 문서입니다.

**원본 출처**: https://tossmini-docs.toss.im/tds-mobile/

---

## 📚 문서 구조

### 🎓 시작하기
- **[00-intro.md](00-intro.md)** - TDS Mobile 소개
- **[01-start.md](01-start.md)** - 설치 및 초기 설정

### 🎨 Foundations (기초)
- **[foundations/](foundations/)** - 색상, 타이포그래피 등 디자인 토큰
  - colors.md - 색상 팔레트
  - typography.md - 폰트 시스템

### 🧩 Components (컴포넌트)
- **[components/](components/)** - 58개 UI 컴포넌트
  - **주요 컴포넌트**:
    - [button.md](components/button.md) - 버튼
    - [text-field.md](components/text-field.md) - 입력 필드
    - [dialog.md](components/dialog.md) - 다이얼로그
    - [bottom-sheet.md](components/bottom-sheet.md) - 바텀시트
    - [modal.md](components/modal.md) - 모달
    - [tooltip.md](components/tooltip.md) - 툴팁
  - **전체 목록**: `ls components/`

### 🪝 Hooks
- **[hooks/](hooks/)** - 4개 React Hook
  - [useBottomSheet.md](hooks/useBottomSheet.md) - 바텀시트 제어
  - [useDialog.md](hooks/useDialog.md) - 다이얼로그 제어
  - [useToast.md](hooks/useToast.md) - 토스트 메시지
  - OverlayExtension - 오버레이 확장 (고급)

### 🔄 Migration (마이그레이션)
- **[migration/](migration/)** - TDS v1 → v2 마이그레이션 가이드
  - v1-to-v2.md - 주요 변경사항
  - breaking-changes.md - 주요 변경사항

### 🛠️ Utilities (유틸리티)
- **[utilities/](utilities/)** - 헬퍼 함수 및 유틸리티

---

## 💡 빠른 참조

### 자주 사용하는 컴포넌트

#### 입력 및 폼
- [Button](components/button.md) - 버튼
- [TextField](components/text-field.md) - 텍스트 입력
- [Checkbox](components/checkbox.md) - 체크박스
- [Switch](components/switch.md) - 토글 스위치

#### 레이아웃
- [GridList](components/grid-list.md) - 그리드 리스트
- [BorderBox](components/border.md) - 테두리 박스

#### 피드백
- [Dialog](components/dialog.md) - 다이얼로그
- [Toast](hooks/useToast.md) - 토스트 메시지
- [NumericSpinner](components/numeric-spinner.md) - 숫자 스피너
- [ProgressBar](components/progress-bar.md) - 진행 바

#### 네비게이션
- [BottomSheet](components/bottom-sheet.md) - 바텀시트
- [SegmentedControl](components/segmented-control.md) - 세그먼트 컨트롤

⚠️ **전체 컴포넌트 목록**: `ls components/` 명령어로 확인하거나 [공식 문서](https://tossmini-docs.toss.im/tds-mobile/components) 참조

---

## ⚠️ 필수 규칙 (상위 문서 참조)

TDS Mobile 사용 시 반드시 준수해야 할 규칙입니다.

### 1. UX Writing - 컴포넌트 텍스트 (🔴 필수)

**모든 TDS Mobile 컴포넌트의 텍스트는 ~해요체를 사용해야 합니다.**

**적용 대상**:
- ✅ Button label
- ✅ Dialog title/content
- ✅ TextField placeholder/helperText
- ✅ Toast message
- ✅ BottomSheet content
- ✅ Tooltip, Badge, Label 등 모든 텍스트

**올바른 예시**:
```typescript
// ✅ 올바름
import { Button, Dialog, TextField, useToast } from '@toss/tds-mobile';

<Button>저장할까요?</Button>

<Dialog title="정말 삭제할까요?">
  삭제된 데이터는 복구할 수 없어요
</Dialog>

<TextField
  placeholder="이름을 입력해주세요"
  helperText="2자 이상 입력해주세요"
/>

const toast = useToast();
toast('저장했어요!');
```

**잘못된 예시**:
```typescript
// ❌ 잘못됨
<Button>저장하시겠습니까?</Button>

<Dialog title="정말 삭제하시겠습니까?">
  삭제된 데이터는 복구할 수 없습니다
</Dialog>

<TextField
  placeholder="이름을 입력하십시오"
  helperText="2자 이상 입력하세요"
/>

toast('저장 완료');
```

**참조**: [../../03-design/03-ux-writing.md](../../03-design/03-ux-writing.md)

### 2. WebView 전용 (🔴 필수)

**TDS Mobile은 WebView 앱에서만 사용 가능합니다!**

**올바른 프로젝트 구성**:
```json
// ✅ WebView 프로젝트 package.json
{
  "dependencies": {
    "@toss/tds-mobile": "latest",
    "@emotion/react": "^11",
    "react": "^18",
    "react-dom": "^18"
  }
}
```

**절대 금지**:
```json
// ❌ React Native 프로젝트에서 사용 금지
{
  "dependencies": {
    "@toss/tds-mobile": "latest",  // ❌ 런타임 오류!
    "react-native": "^0.72"
  }
}
```

**React Native 앱**은 반드시 **TDS React Native**를 사용해야 합니다:
- 패키지: `@toss/tds-react-native`
- 공식 문서: https://tossmini-docs.toss.im/tds-react-native/

**참조**: [../../../CLAUDE.md - 타입 구분](../../../CLAUDE.md#프로젝트-타입-구분-시스템)

### 3. 언어 규칙

- **컴포넌트 텍스트**: 한글 (~해요체)
- **props 이름**: 영어 (camelCase)
- **코드/변수명**: 영어

**올바른 예시**:
```typescript
// ✅ 올바름
const submitButton = ( // 변수명: 영어
  <Button onClick={handleSubmit}> // props: 영어
    제출할까요? // 텍스트: 한글 (~해요체)
  </Button>
);
```

**상세 규칙**: [../../../STANDARD_RULES.md](../../../STANDARD_RULES.md)

---

## 🎯 사용 패턴

### 컴포넌트 임포트
```typescript
// ✅ WebView 앱에서 사용
import { Button, TextField, Dialog } from '@toss/tds-mobile';
import { useDialog, useToast } from '@toss/tds-mobile';
```

### 프로젝트 설정 확인
```bash
# package.json 확인
cat package.json | grep "@toss/tds-mobile"

# ✅ WebView 프로젝트라면 있어야 함
"@toss/tds-mobile": "^x.x.x"
"react-dom": "^18.x.x"

# ❌ React Native 패키지가 있으면 안됨!
"@toss/tds-react-native" # 없어야 함
"react-native" # 없어야 함
```

---

## 🔗 연관 문서

### 개발 가이드
- [WebView 개발 가이드](../../04-development/06-webview.md)
- [개발 환경 구축](../../04-development/02-prepare.md)
- [샌드박스 테스트](../../04-development/08-sandbox.md)

### 디자인
- [TDS Mobile 소개](../../03-design/07-tds-mobile.md)
- [브랜딩 가이드](../../03-design/01-miniapp-branding-guide.md)
- [UX 라이팅](../../03-design/03-ux-writing.md)

### 예제 코드
- [weekly-todo-react](../../../example/weekly-todo-react/) - React + TDS Mobile 예제
- [with-* 예제들](../../../example/) - API 활용 예제

---

## 📖 공식 문서

**TDS Mobile 공식 사이트**: https://tossmini-docs.toss.im/tds-mobile/

**주요 페이지**:
- 컴포넌트 목록: https://tossmini-docs.toss.im/tds-mobile/components
- Hooks: https://tossmini-docs.toss.im/tds-mobile/hooks
- Foundations: https://tossmini-docs.toss.im/tds-mobile/foundations

---

**마지막 업데이트**: 2025-10-28
**문서 수**: 67개 (컴포넌트 58개 + Hooks 4개 + Foundations 2개 + 기타 3개)
**타입**: WebView 앱 전용 ⚠️
