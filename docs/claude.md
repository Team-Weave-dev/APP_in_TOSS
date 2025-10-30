# Claude 작업 컨텍스트 (docs 디렉토리)

> **상위 컨텍스트**: [루트 CLAUDE.md](../CLAUDE.md) 먼저 읽기
> **역할**: 문서 디렉토리 세부 규칙 및 참조 가이드

---

## 디렉토리 역할

**목적**: Apps in Toss 개발자 문서 저장소 (읽기 전용)

**관리 주체**: 루트 레벨

**접근 권한**:
- 루트 레벨: 읽기/쓰기
- 하위 프로젝트: 읽기 전용

---

## 문서 현황

**총 239개 문서**:
- 가이드 문서: 78개
- Bedrock SDK API: 94개
- TDS Mobile: 67개

**완료 상태**: 100% ✅

---

## 원본 출처

**가이드 문서**: https://developers-apps-in-toss.toss.im
**Bedrock SDK**: https://developers-apps-in-toss.toss.im/reference/bedrock
**TDS Mobile**: https://tossmini-docs.toss.im/tds-mobile

---

## ⚠️ 프로젝트 전체 범용 규칙 (상위 문서 참조)

> **이 섹션**: 모든 곳에 적용되는 범용 규칙 (상세는 링크 참조)
> **상세 내용**: 반드시 각 링크된 문서 참조

하위 프로젝트 개발 시 **반드시 준수**해야 하는 규칙입니다.

### 1. UX Writing (🔴 필수)
모든 사용자 대면 텍스트는 ~해요체를 사용해야 합니다.

**핵심 규칙**:
- **~해요체 사용**: 상황/맥락 불문 모든 문구에 적용
- **능동적 말하기**: 됐어요 → 했어요
- **긍정적 말하기**: 없어요 → 있어요 + 대안 제시

**참조**: [03-design/03-ux-writing.md](03-design/03-ux-writing.md)

### 2. 프로젝트 타입 구분 (🔴 필수)
WebView, React Native, Unity 프로젝트는 각각 다른 UI 라이브러리를 사용합니다.

**중요**:
- WebView → TDS Mobile
- React Native → TDS React Native
- ❌ **혼용 절대 금지**: 잘못된 라이브러리 사용 시 런타임 오류

**참조**: [../CLAUDE.md - 프로젝트 타입 구분 시스템](../CLAUDE.md#프로젝트-타입-구분-시스템)

### 3. 언어 규칙
- **문서/커뮤니케이션**: 한글
- **코드/파일명/변수명**: 영어

**상세 규칙**: [../STANDARD_RULES.md](../STANDARD_RULES.md)

---

## 하위 프로젝트 참조 방법

### 문서 읽기
```bash
# API 문서 참조
cat ../../docs/reference/bedrock/interaction/generateHapticFeedback.md

# TDS 컴포넌트 참조
cat ../../docs/reference/tds-mobile/components/button.md

# 가이드 참조
cat ../../docs/04-development/03-react-native.md
```

### 검색
```bash
# API 검색
grep -r "generateHapticFeedback" ../../docs/reference/bedrock/

# 카테고리 확인
ls ../../docs/reference/bedrock/interaction/
```

---

## 주의사항

⚠️ **읽기 전용**: 하위 프로젝트는 이 디렉토리를 수정할 수 없습니다.
✅ **복사 사용**: 필요한 내용은 복사하여 별도 메모로 저장하세요.

---

## ✅ 표준 규칙 준수 체크리스트

하위 프로젝트 개발 시 다음 체크리스트로 규칙 준수 여부를 확인하세요.

### UX Writing 체크
- [ ] 모든 UI 텍스트가 ~해요체로 작성되었나요?
- [ ] 능동형 문장을 사용했나요? (됐어요 → 했어요)
- [ ] 부정형 대신 긍정형 + 대안 제시를 했나요?
- [ ] 로딩 상태 텍스트도 ~해요체인가요? (검색 중 → 검색하고 있어요)

### 프로젝트 타입 체크
- [ ] package.json에 올바른 UI 라이브러리가 설치되었나요?
- [ ] WebView 프로젝트는 TDS Mobile만 사용하나요?
- [ ] React Native 프로젝트는 TDS React Native만 사용하나요?
- [ ] 다른 타입의 UI 라이브러리가 잘못 포함되지 않았나요?

### 언어 규칙 체크
- [ ] 모든 문서와 주석이 한글로 작성되었나요?
- [ ] 모든 코드, 파일명, 변수명이 영어로 작성되었나요?

### 문서 참조 체크
- [ ] CLAUDE.md에 상위 문서 참조가 명시되었나요?
- [ ] 프로젝트 타입과 UI 라이브러리가 CLAUDE.md에 명시되었나요?
- [ ] UX Writing 규칙이 CLAUDE.md에 포함되었나요?

---

**상위 컨텍스트**: [루트 CLAUDE.md](../CLAUDE.md)
**관련 문서**: [REFERENCE_GUIDE.md](../REFERENCE_GUIDE.md)

**마지막 업데이트**: 2025-10-24
