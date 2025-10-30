# API & SDK 레퍼런스 (reference)

> **상위 컨텍스트**: [docs/claude.md](../claude.md) → [루트 CLAUDE.md](../../CLAUDE.md)

## 📌 디렉토리 목적

**API 및 SDK 상세 레퍼런스** 문서입니다.

## ⚠️ 프로젝트 타입별 참조

**중요**: UI 라이브러리는 프로젝트 타입에 따라 다릅니다!

- 🌐 **WebView 앱**: TDS Mobile (로컬 문서: `tds-mobile/`)
- 📱 **React Native 앱**: TDS React Native (온라인: https://tossmini-docs.toss.im/tds-react-native/)
- 🎮 **Unity 앱**: Unity UI 시스템
- 🔧 **공통**: Bedrock SDK (`bedrock/`) - 모든 타입에서 사용

**상세**: [프로젝트 타입 구분 시스템](../../CLAUDE.md#프로젝트-타입-구분-시스템)

## 📚 하위 디렉토리

### 1. Bedrock SDK (bedrock/) ⭐
- **문서 수**: 94개 API
- **내용**: Apps in Toss 네이티브 기능 SDK
- **대상**: 앱 개발자 (필수)
- **상세**: [bedrock/claude.md](bedrock/claude.md)

**주요 카테고리**:
- 📱 화면 제어 (screen-control)
- 📍 위치 정보 (location)
- 💳 결제 (payment)
- 📢 광고 (ads)
- 📊 분석 (analytics)
- 🎨 인터랙션 (interaction)
- 🌐 네트워크 (network)
- 💾 저장소 (storage)

### 2. TDS Mobile (tds-mobile/) - WebView 전용 ⚠️
- **문서 수**: 67개 컴포넌트 + Hook
- **내용**: 토스 디자인 시스템 (WebView 앱 전용)
- **대상**: WebView 앱 개발자, 디자이너
- **프로젝트 타입**: **WebView 앱만** 사용 가능
- **필수 의존성**: `react`, `react-dom`, `@emotion/react`
- **원본**: https://tossmini-docs.toss.im/tds-mobile/

**주요 카테고리**:
- 🎨 Foundations (색상, 타이포그래피)
- 🧩 Components (Button, Dialog, Modal 등)
- 🪝 Hooks (useDialog, useToast 등)

**상세 가이드**: [tds-mobile/claude.md](tds-mobile/claude.md)

### 3. TDS React Native - React Native 전용 ⚠️
- **로컬 문서**: ❌ 없음 (온라인 참조 필요)
- **내용**: 토스 디자인 시스템 (React Native 앱 전용)
- **대상**: React Native 앱 개발자
- **프로젝트 타입**: **React Native 앱만** 사용 가능
- **필수 의존성**: `react-native`, `@granite-js/react-native`
- **공식 문서**: https://tossmini-docs.toss.im/tds-react-native/

**컴포넌트**: Button, TextField, Dialog 등 (온라인 확인)

---

## ⚠️ 프로젝트 전체 범용 규칙 (상위 문서 참조)

> **이 섹션**: 모든 곳에 적용되는 범용 규칙 (상세는 링크 참조)
> **상세 내용**: 반드시 각 링크된 문서 참조

API 및 UI 라이브러리 사용 시 반드시 준수해야 할 규칙입니다.

### 1. 프로젝트 타입 구분 (🔴 필수)

**Bedrock SDK (공통)**:
- ✅ WebView, React Native, Unity 모든 타입에서 동일하게 사용 가능
- ✅ 94개 API 모두 공통 사용
- 예: `closeView()`, `getCurrentLocation()`, `logEvent()`

**UI 라이브러리 (타입별 분리)**:
- ✅ **WebView 앱**: TDS Mobile (`@toss/tds-mobile`)
  - 로컬 문서: `docs/reference/tds-mobile/`
  - 의존성: `react`, `react-dom`, `@emotion/react`
- ✅ **React Native 앱**: TDS React Native (`@toss/tds-react-native`)
  - 온라인: https://tossmini-docs.toss.im/tds-react-native/
  - 의존성: `react-native`, `@granite-js/react-native`
- ✅ **Unity 앱**: Unity UI 시스템

**절대 금지** ❌:
```javascript
// ❌ WebView 프로젝트에서 TDS React Native 사용
import { Button } from '@toss/tds-react-native'; // 런타임 오류!

// ❌ React Native 프로젝트에서 TDS Mobile 사용
import { Button } from '@toss/tds-mobile'; // 런타임 오류!

// ❌ React Native 프로젝트에서 react-dom 사용
import ReactDOM from 'react-dom'; // 런타임 오류!
```

**올바른 사용** ✅:
```javascript
// ✅ WebView 프로젝트
import { Button } from '@toss/tds-mobile';

// ✅ React Native 프로젝트
import { Button } from '@toss/tds-react-native';
```

**참조**: [../../CLAUDE.md - 프로젝트 타입 구분](../../CLAUDE.md#프로젝트-타입-구분-시스템)

### 2. API 문서 필수 참조 (🟡 중요)

**API 사용 전 반드시 문서 확인**:
```bash
# 1. Bedrock API 문서 확인
cat docs/reference/bedrock/[category]/[api-name].md

# 2. 함수 시그니처, 파라미터, 반환 타입 파악
# 3. 예제 코드 참조
# 4. 프로젝트에 구현
```

**이유**:
- 파라미터 타입 및 필수 여부 확인
- 최소 지원 버전 확인
- 예외 처리 방법 파악
- 베스트 프랙티스 학습

### 3. UX Writing - UI 컴포넌트 텍스트 (🔴 필수)

TDS 컴포넌트의 모든 텍스트 props는 ~해요체를 사용해야 합니다.

**적용 대상**:
- ✅ Button label
- ✅ Dialog title/content
- ✅ TextField placeholder/helperText
- ✅ Toast message
- ✅ BottomSheet content

**올바른 예시**:
```typescript
// ✅ 올바름
<Button>저장할까요?</Button>
<Dialog title="정말 삭제할까요?">
  삭제된 데이터는 복구할 수 없어요
</Dialog>
<TextField
  placeholder="이름을 입력해주세요"
  helperText="2자 이상 입력해주세요"
/>
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
```

**참조**: [../03-design/03-ux-writing.md](../03-design/03-ux-writing.md)

### 4. 언어 규칙

- **UI 컴포넌트 텍스트**: 한글 (~해요체)
- **API 호출/로깅**: 영어
- **코드/변수명**: 영어

**올바른 예시**:
```typescript
// ✅ 올바름
const handleSubmit = () => {
  Analytics.logEvent('button_click', { // API: 영어
    button_name: 'submit'
  });
  showToast('제출했어요!'); // UI: 한글 (~해요체)
};
```

**상세 규칙**: [../../STANDARD_RULES.md](../../STANDARD_RULES.md)

---

## 🎯 API 사용 패턴

### 1. API 문서 찾기
```bash
# 기능별로 탐색
cd reference/bedrock/[카테고리]/

# 예: 위치 정보 API
cd reference/bedrock/location/
```

### 2. 컴포넌트 찾기 (타입별)
```bash
# WebView 앱: TDS Mobile 컴포넌트 (로컬)
cd reference/tds-mobile/components/
cat reference/tds-mobile/components/button.md

# React Native 앱: TDS React Native (온라인)
# https://tossmini-docs.toss.im/tds-react-native/
open https://tossmini-docs.toss.im/tds-react-native/
```

### 3. 개발 시 참조 순서
```
1. 가이드 문서 (04-development) - 전체 구조 이해
2. API 레퍼런스 (reference/bedrock) - 구체적 구현
3. 예제 코드 (../../example/) - 실제 사용 예시
```

## 💡 빠른 참조

### 자주 사용하는 API

#### 필수 기능
- **화면 닫기**: [bedrock/screen-control/closeView.md](bedrock/screen-control/closeView.md)
- **로컬 저장소**: [bedrock/storage/](bedrock/storage/)
- **네비게이션**: [bedrock/routing.md](bedrock/routing.md)

#### 위치 기반
- **현재 위치**: [bedrock/location/getCurrentLocation.md](bedrock/get-current-location.md)
- **위치 추적**: [bedrock/location/startUpdateLocation.md](bedrock/location/startUpdateLocation.md)

#### 결제
- **토스 페이**: [bedrock/payment/tosspay/](bedrock/payment/tosspay/)
- **인앱 결제**: [bedrock/payment/iap/](bedrock/payment/iap/)

#### 광고
- **전면 광고**: [bedrock/ads/loadAdMobInterstitialAd.md](bedrock/ads/loadAdMobInterstitialAd.md)
- **보상형 광고**: [bedrock/ads/loadAdMobRewardedAd.md](bedrock/ads/loadAdMobRewardedAd.md)

### 자주 사용하는 TDS 컴포넌트

#### WebView 앱 (TDS Mobile - 로컬 문서)
- **Button**: [tds-mobile/components/button.md](tds-mobile/components/button.md)
- **TextField**: [tds-mobile/components/text-field.md](tds-mobile/components/text-field.md)
- **Dialog**: [tds-mobile/components/dialog.md](tds-mobile/components/dialog.md)
- **BottomSheet**: [tds-mobile/hooks/useBottomSheet.md](tds-mobile/hooks/useBottomSheet.md)

#### React Native 앱 (TDS React Native - 온라인)
- **공식 문서**: https://tossmini-docs.toss.im/tds-react-native/
- Button, TextField, Dialog 등 (온라인 확인 필요)

## 🔗 연관 디렉토리

- **개발 가이드**: [04-development](../04-development/claude.md)
- **디자인**: [03-design](../03-design/claude.md)
- **예제 코드**: [../../example/](../../example/claude.md)
