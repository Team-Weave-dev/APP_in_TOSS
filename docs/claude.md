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

**상위 컨텍스트**: [루트 CLAUDE.md](../CLAUDE.md)
**관련 문서**: [REFERENCE_GUIDE.md](../REFERENCE_GUIDE.md)

**마지막 업데이트**: 2025-10-24
