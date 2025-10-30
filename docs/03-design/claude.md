# 디자인 (03-design)

> **상위 컨텍스트**: [docs/claude.md](../claude.md) → [루트 CLAUDE.md](../../CLAUDE.md)

## 📌 디렉토리 목적

Apps in Toss 앱의 **UI/UX 디자인 가이드라인**과 디자인 시스템입니다.

## ⚠️ 프로젝트 타입별 디자인 시스템

**중요**: 프로젝트 타입에 따라 사용하는 디자인 시스템이 다릅니다!

- 🌐 **WebView 앱**: **TDS Mobile**
  - 패키지: `@toss/tds-mobile`
  - 문서: [TDS Mobile (로컬 67개)](../reference/tds-mobile/)
  - 공식: https://tossmini-docs.toss.im/tds-mobile/

- 📱 **React Native 앱**: **TDS React Native**
  - 패키지: `@toss/tds-react-native`
  - 문서: [온라인만 가능](https://tossmini-docs.toss.im/tds-react-native/)

- 🎮 **Unity 게임**: Unity UI 시스템
  - 제한적 TDS 지원

**상세**: [프로젝트 타입 구분 시스템](../../CLAUDE.md#프로젝트-타입-구분-시스템)

## 📚 문서 구조

### 🎨 UI/UX 가이드 (필수)
1. **미니앱 브랜딩 가이드** (01-miniapp-branding-guide.md) - 로고, 네비게이션 ⭐
2. **사용자 UX 가이드** (02-consumer-ux-guide.md) - UX 원칙
3. **UX 라이팅** (03-ux-writing.md) - 문구 작성 가이드
4. **UX 라이팅 주의사항** (04-ux-writing-dont.md) - 금지 표현

### 🛠️ 디자인 준비하기
5. **prepare/** - Figma 활용법
   - `01-design.md` - TDS 컴포넌트 사용법
   - `02-deus.md` - Deus 시스템

### 📦 디자인 시스템
6. **리소스** (05-resources.md) - 다운로드 가능한 디자인 에셋
7. **컴포넌트** (06-components.md) - TDS 컴포넌트 개요
8. **TDS Mobile** (07-tds-mobile.md) - TDS 디자인 시스템 (WebView 전용) ⭐

## 🎯 읽기 순서 (권장)

### WebView 앱 디자인
```
01 → 02 → 07 (TDS Mobile 소개) → prepare/01-design.md
06 (컴포넌트 목록) → reference/tds-mobile/ (67개 문서)
03, 04 (문구 작성 시)
```

### React Native 앱 디자인
```
01 → 02 → https://tossmini-docs.toss.im/tds-react-native/
03, 04 (문구 작성 시)
```

### 검수 준비 (공통)
```
01 (브랜딩 재확인) → 05 (리소스 다운로드)
```

---

## ⚠️ UX Writing 필수 규칙

**모든 프로젝트는 반드시 UX Writing 가이드를 준수해야 합니다.**

### 핵심 규칙 (03-ux-writing.md 기준)

1. **~해요체 사용** (🔴 필수)
   - 상황/맥락 불문 모든 문구에 "~해요" 적용
   - ❌ ~습니다, 로딩 중... → ✅ ~해요, 로딩하고 있어요

2. **능동적 말하기** (🔴 필수)
   - ❌ 완료됐어요 → ✅ 완료했어요
   - ❌ 전송됐어요 → ✅ 전송했어요

3. **긍정적 말하기** (🔴 필수)
   - ❌ 검색 결과가 없어요 → ✅ 주변에 음식점을 찾지 못했어요 (+ 대안 제시)

**필수 참조 문서**:
- [03-ux-writing.md](03-ux-writing.md) - UX 라이팅 가이드
- [04-ux-writing-dont.md](04-ux-writing-dont.md) - 금지 표현

**적용 범위**:
- UI 컴포넌트의 모든 텍스트
- 에러 메시지 및 안내 문구
- 로딩 상태 텍스트
- JSDoc 주석의 예제 코드 내 텍스트

---

## 💡 핵심 포인트

### 타입별 TDS 사용 ⚠️
- 🌐 **WebView 앱**: TDS Mobile (`@toss/tds-mobile`)
  - ✅ 로컬 문서: [reference/tds-mobile](../reference/tds-mobile/) (67개)
  - ✅ Figma: prepare/01-design.md

- 📱 **React Native 앱**: TDS React Native (`@toss/tds-react-native`)
  - ⚠️ 온라인 문서만: https://tossmini-docs.toss.im/tds-react-native/
  - ✅ Figma: 별도 라이브러리

**절대 혼용 금지**: WebView ↔ React Native 간 TDS 교차 사용 불가!

### 브랜딩 가이드 준수
- ✅ 네비게이션 바 디자인 규칙 (01)
- ✅ 로고 사용 가이드라인 (01)

### UX 라이팅
- ✅ 토스 톤앤매너 따르기 (03)
- ❌ 금지 표현 피하기 (04)

## 🔗 연관 디렉토리

- **API 참조**:
  - [TDS Mobile](../reference/tds-mobile/) - WebView 전용 컴포넌트 (로컬 67개)
  - [TDS React Native](https://tossmini-docs.toss.im/tds-react-native/) - React Native 전용 (온라인)
- **개발**: [04-development](../04-development/claude.md) - 타입별 TDS 구현
- **검수**: [05-checklist](../05-checklist/claude.md) - 디자인 검수 항목

**마지막 업데이트**: 2025-10-28
**주요 변경**: 프로젝트 타입별 TDS 디자인 시스템 구분 명확화
