# 디자인 (03-design)

> **상위 컨텍스트**: [docs/claude.md](../claude.md) → [루트 CLAUDE.md](../../CLAUDE.md)

## 📌 디렉토리 목적

Apps in Toss 앱의 **UI/UX 디자인 가이드라인**과 디자인 시스템입니다.

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
8. **TDS Mobile** (07-tds-mobile.md) - TDS 디자인 시스템 ⭐

## 🎯 읽기 순서 (권장)

### 디자인 시작 전
```
01 → 02 → 07 (TDS 소개) → prepare/01-design.md
```

### 디자인 진행 중
```
06 (컴포넌트 목록) → reference/tds-mobile/ (상세 문서)
03, 04 (문구 작성 시)
```

### 검수 준비
```
01 (브랜딩 재확인) → 05 (리소스 다운로드)
```

## 💡 핵심 포인트

### ⚠️ 프로젝트 유형별 UI 라이브러리

**React Native 앱**:
- ✅ **TDS Mobile 필수 사용**
- ✅ 공식 Figma 라이브러리 활용 (prepare/01-design.md)
- 📚 상세 문서: [reference/tds-mobile](../reference/tds-mobile/)

**WebView 앱**:
- ❌ **TDS Mobile 사용 불가** (React Native 전용)
- ✅ 일반 웹 UI 라이브러리 사용 (Material-UI, Ant Design 등)
- ✅ 브랜딩 가이드는 동일하게 적용 (01-miniapp-branding-guide.md)

자세한 구분: [QUICK_REFERENCE.md](../../QUICK_REFERENCE.md#프로젝트-유형-구분-필수-확인-)

### 브랜딩 가이드 준수
- ✅ 네비게이션 바 디자인 규칙 (01)
- ✅ 로고 사용 가이드라인 (01)

### UX 라이팅
- ✅ 토스 톤앤매너 따르기 (03)
- ❌ 금지 표현 피하기 (04)

## 🔗 연관 디렉토리

- **API 참조**: [reference/tds-mobile](../reference/tds-mobile/) - TDS 컴포넌트 상세
- **개발**: [04-development](../04-development/claude.md) - TDS 구현
- **검수**: [05-checklist](../05-checklist/claude.md) - 디자인 검수 항목
