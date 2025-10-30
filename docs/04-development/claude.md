# 개발 (04-development)

> **상위 컨텍스트**: [docs/claude.md](../claude.md) → [루트 CLAUDE.md](../../CLAUDE.md)

## 📌 디렉토리 목적

Apps in Toss 앱 **개발 환경 구축 및 연동** 가이드입니다.

## ⚠️ 프로젝트 타입별 UI 라이브러리

**중요**: 프로젝트 타입에 따라 사용하는 UI 라이브러리가 다릅니다!

- 🌐 **WebView 앱**: **TDS Mobile** (`@toss/tds-mobile`)
  - 필수: `react-dom`
  - 참조: [06-webview.md](06-webview.md), [TDS Mobile 문서](../reference/tds-mobile/)

- 📱 **React Native 앱**: **TDS React Native** (`@toss/tds-react-native`)
  - 필수: `react-native`
  - 참조: [03-react-native.md](03-react-native.md), [TDS RN 공식 문서](https://tossmini-docs.toss.im/tds-react-native/)

- 🎮 **Unity 게임**: Unity UI 시스템
  - 참조: [07-unity.md](07-unity.md)

**상세**: [프로젝트 타입 구분 시스템](../../CLAUDE.md#프로젝트-타입-구분-시스템)

## 📚 문서 구조

### 🏗️ 개발 구조 이해
1. **개발 구조** (01-integration-process.md) - 전체 개발 흐름 ⭐ **시작점**
2. **준비하기** (02-prepare.md) - 개발 환경 요구사항

### 📱 Client 환경 설정
3. **Android** (04-android.md) - Android Studio, SDK 설정
4. **iOS** (05-ios.md) - Xcode, CocoaPods 설정

### 🔧 연동하기
5. **React Native** (03-react-native.md) - Granite 프레임워크 ⭐
   - UI: **TDS React Native** (`@toss/tds-react-native`)
6. **WebView** (06-webview.md) - 웹 기반 앱 개발
   - UI: **TDS Mobile** (`@toss/tds-mobile`)
7. **Unity** (07-unity.md) - 게임 개발 (Unity 포팅)
   - UI: Unity UI 시스템

### 🧪 테스트 및 출시
8. **샌드박스** (08-sandbox.md) - 로컬 테스트 환경
9. **토스앱** (09-toss.md) - 실제 환경 테스트
10. **앱 내 기능** (10-function.md) - 기능별 테스트
11. **모니터링** (11-sentry-monitoring.md) - Sentry 연동

### 🔐 인증
12. **토스 로그인** (12-login-intro.md, 13-login-console.md) - 사용자 인증

### 📹 참고자료
14. **Bedrock 영상** (19-bedrock-video.md) - SDK 영상 가이드

## 🎯 프로젝트 유형별 필수 문서

### 📱 React Native 앱 (TDS React Native 사용)
```
01 → 02 → 04 → 05 → 03 (Granite + TDS React Native) → 08 → 09
```
**UI 라이브러리**: TDS React Native (`@toss/tds-react-native`)
**공식 문서**: https://tossmini-docs.toss.im/tds-react-native/

### 🌐 WebView 앱 (TDS Mobile 사용)
```
01 → 02 → 06 (WebView + TDS Mobile) → 08 → 09
```
**UI 라이브러리**: TDS Mobile (`@toss/tds-mobile`)
**로컬 문서**: [TDS Mobile 문서](../reference/tds-mobile/)

### 🎮 Unity 게임 (Unity UI 사용)
```
01 → 02 → 04 → 05 → 07 (Unity) → 08 → 09
```
**UI 시스템**: Unity UI (제한적 TDS 지원)

---

## 🚨 타입별 필수 준수 사항

**프로젝트 타입에 따라 사용할 수 있는 UI 라이브러리가 엄격히 구분됩니다.**

### WebView 프로젝트 (🔴 필수)

**사용 가능**:
- ✅ TDS Mobile (`@toss/tds-mobile`)
- ✅ `react-dom`
- ✅ Emotion (`@emotion/react`)

**절대 금지**:
- ❌ TDS React Native (`@toss/tds-react-native`)
- ❌ `react-native` 관련 패키지

**참조**:
- [06-webview.md](06-webview.md)
- [TDS Mobile 문서](../reference/tds-mobile/)

### React Native 프로젝트 (🔴 필수)

**사용 가능**:
- ✅ TDS React Native (`@toss/tds-react-native`)
- ✅ `react-native`
- ✅ Granite (`@granite-js/react-native`)

**절대 금지**:
- ❌ TDS Mobile (`@toss/tds-mobile`)
- ❌ `react-dom`

**참조**:
- [03-react-native.md](03-react-native.md)
- [TDS RN 공식](https://tossmini-docs.toss.im/tds-react-native/)

### Unity 프로젝트

**사용 가능**:
- ✅ Unity UI 시스템

**참조**:
- [07-unity.md](07-unity.md)

**⚠️ 혼용 시 발생하는 문제**:
- 런타임 오류 발생
- 빌드 실패
- API 호환성 문제

**상세**: [프로젝트 타입 구분 시스템](../../CLAUDE.md#프로젝트-타입-구분-시스템)

---

## ⚠️ 필수 규칙 (상위 문서 참조)

개발 시 반드시 준수해야 할 규칙입니다.

### 1. UX Writing (🔴 필수)

모든 UI 컴포넌트의 텍스트는 ~해요체를 사용해야 합니다.

**적용 대상**:
- ✅ TDS 컴포넌트의 모든 텍스트 props
- ✅ 버튼, Dialog, Toast 메시지
- ✅ 에러 메시지 및 안내 문구
- ✅ 로딩 상태 텍스트

**올바른 예시**:
```typescript
// ✅ 올바름
<Button>저장할까요?</Button>
<Dialog title="정말 삭제할까요?">
  삭제된 데이터는 복구할 수 없어요
</Dialog>
<Toast>저장했어요!</Toast>
```

**잘못된 예시**:
```typescript
// ❌ 잘못됨
<Button>저장하시겠습니까?</Button>
<Dialog title="정말 삭제하시겠습니까?">
  삭제된 데이터는 복구할 수 없습니다
</Dialog>
<Toast>저장 완료</Toast>
```

**참조**: [../03-design/03-ux-writing.md](../03-design/03-ux-writing.md)

### 2. 프로젝트 타입 구분 (🔴 필수)

**상세**: 위 "🚨 타입별 필수 준수 사항" 섹션 참조

**핵심**:
- ❌ WebView ↔ React Native UI 라이브러리 혼용 절대 금지
- ✅ 프로젝트 타입에 맞는 TDS 라이브러리만 사용

**참조**: [../../CLAUDE.md - 타입 구분](../../CLAUDE.md#프로젝트-타입-구분-시스템)

### 3. 언어 규칙

- **UI 텍스트**: 한글 (~해요체)
- **API 호출/로깅**: 영어
- **코드/변수명**: 영어

**상세 규칙**: [../../STANDARD_RULES.md](../../STANDARD_RULES.md)

---

## ⚠️ 주의사항

1. **프로젝트 타입 확인**: WebView vs React Native에 따라 TDS 라이브러리 다름!
   - WebView → TDS Mobile
   - React Native → TDS React Native

2. **환경 설정 먼저**: Android/iOS 환경을 먼저 구축 (04, 05)

3. **샌드박스 필수**: 토스앱 테스트 전 샌드박스에서 검증 (08)

4. **로그인 검토**: 사용자 인증 필요 시 12-13 참조

## 🔗 연관 디렉토리

- **이전 단계**: [02-prepare](../02-prepare/claude.md) - 콘솔 등록
- **디자인**: [03-design](../03-design/claude.md) - TDS Mobile/TDS React Native 디자인
- **API 참조**:
  - [Bedrock SDK](../reference/bedrock/) - 공통 API (모든 타입)
  - [TDS Mobile](../reference/tds-mobile/) - WebView 전용 UI
- **검수**: [05-checklist](../05-checklist/claude.md) - 출시 전 체크

**마지막 업데이트**: 2025-10-28
**주요 변경**: 프로젝트 타입별 TDS 라이브러리 구분 명확화
