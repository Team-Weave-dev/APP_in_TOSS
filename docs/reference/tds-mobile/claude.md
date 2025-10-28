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
  - [useOverlay.md](hooks/useOverlay.md) - 오버레이 제어

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
- [Radio](components/radio.md) - 라디오 버튼
- [Switch](components/switch.md) - 토글 스위치
- [Select](components/select.md) - 셀렉트 박스

#### 레이아웃
- [Flex](components/flex.md) - 플렉스 레이아웃
- [Grid](components/grid.md) - 그리드 레이아웃
- [Container](components/container.md) - 컨테이너
- [Divider](components/divider.md) - 구분선

#### 피드백
- [Dialog](components/dialog.md) - 다이얼로그
- [Toast](hooks/useToast.md) - 토스트 메시지
- [Spinner](components/spinner.md) - 로딩 스피너
- [ProgressBar](components/progress-bar.md) - 진행 바

#### 네비게이션
- [Tabs](components/tabs.md) - 탭
- [BottomSheet](components/bottom-sheet.md) - 바텀시트
- [SegmentedControl](components/segmented-control.md) - 세그먼트 컨트롤

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
