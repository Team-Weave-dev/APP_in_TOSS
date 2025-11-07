# Migration Queue - 프로젝트 간 코드 동기화

두 PPT Maker 프로젝트 간 공통 코드 변경사항을 추적하고 동기화를 관리합니다.

---

## 📋 작성 규칙

### 마이그레이션 대기 항목 추가 시

**언제 추가하나요?**
- `services/`, `types/`, `constants/` 등 공통 코드 영역 변경 시
- 한쪽 프로젝트에서 새로운 공통 기능 개발 시
- AI 파이프라인, 템플릿 시스템 개선 시

**어떻게 추가하나요?**
1. **소스 프로젝트**에서 개발 완료 및 커밋
2. 이 문서의 **[📋 대기 중 (Pending)]** 섹션에 항목 추가
3. 체크리스트 작성
4. 소스 프로젝트의 `RELEASE_NOTES.md`에도 기록

### 마이그레이션 완료 시

1. 타겟 프로젝트에 코드 적용 및 테스트
2. 타겟 프로젝트 커밋
3. 체크리스트 모두 완료 확인
4. 항목을 **[✅ 완료 (Completed)]** 섹션으로 이동
5. 완료 날짜 및 커밋 해시 기록

### 항목 형식

```markdown
### [카테고리] 기능명

- **소스**: ppt-maker-in-toss | ppt-maker-next
- **타겟**: ppt-maker-next | ppt-maker-in-toss
- **영역**: services/gemini/ | types/ | constants/ | etc.
- **소스 커밋**: (7자리 해시)
- **날짜**: YYYY-MM-DD
- **설명**: 변경 내용 요약 (1-2문장)

**변경 상세**:
- 구체적인 변경 내용 1
- 구체적인 변경 내용 2

**마이그레이션 체크리스트**:
- [ ] 코드 파일 복사
- [ ] 의존성 확인 및 설치
- [ ] 타입 호환성 검증
- [ ] 테스트 작성 및 실행
- [ ] 문서 업데이트 (SPECIFICATION.md)
- [ ] 타겟 프로젝트 커밋
```

---

## 📋 대기 중 (Pending)

<!-- 새로운 항목은 여기에 추가하세요 -->

### 예시) [AI] Gemini Flash 1.5 Pro 모델 업그레이드

- **소스**: ppt-maker-next
- **타겟**: ppt-maker-in-toss
- **영역**: services/gemini/
- **소스 커밋**: a1b2c3d
- **날짜**: 2025-11-08
- **설명**: Gemini Flash 1.5 Pro로 업그레이드하여 생성 품질 향상

**변경 상세**:
- `services/gemini/content-generator.ts`: 모델명 변경
- `services/gemini/config.ts`: 새로운 모델 설정 추가
- 프롬프트 최적화로 토큰 사용량 10% 감소

**마이그레이션 체크리스트**:
- [ ] 코드 파일 복사
- [ ] 의존성 확인 및 설치
- [ ] 타입 호환성 검증
- [ ] 테스트 작성 및 실행
- [ ] 문서 업데이트 (SPECIFICATION.md)
- [ ] 타겟 프로젝트 커밋

---

## ✅ 완료 (Completed)

<!-- 완료된 항목은 여기로 이동하세요 -->

### 예시) [템플릿] 새로운 SlideType 추가 - QuoteSlide

- **소스**: ppt-maker-in-toss
- **타겟**: ppt-maker-next
- **영역**: services/template/base/toss-default/, types/slide.ts
- **소스 커밋**: xyz9876
- **완료 날짜**: 2025-11-07
- **완료 커밋**: abc1234
- **설명**: 인용구 슬라이드 타입 추가

**변경 상세**:
- `types/slide.ts`: QuoteSlide 타입 정의
- `services/template/base/toss-default/QuoteSlide.ts`: 템플릿 구현
- `services/template/engine/TemplateRegistry.ts`: 등록

**완료 체크리스트**:
- [x] 코드 파일 복사
- [x] 의존성 확인 및 설치
- [x] 타입 호환성 검증
- [x] 테스트 작성 및 실행
- [x] 문서 업데이트 (SPECIFICATION.md)
- [x] 타겟 프로젝트 커밋

---

## 📊 통계

**대기 중**: 1개
**완료**: 1개

---

## 🔍 빠른 검색

### 영역별

- **AI 파이프라인** (services/gemini/, services/perplexity/): 대기 1개, 완료 0개
- **템플릿 시스템** (services/template/): 대기 0개, 완료 1개
- **타입 정의** (types/): 대기 0개, 완료 1개
- **상수** (constants/): 대기 0개, 완료 0개

### 프로젝트별

- **ppt-maker-in-toss → ppt-maker-next**: 대기 0개, 완료 1개
- **ppt-maker-next → ppt-maker-in-toss**: 대기 1개, 완료 0개

---

## 📝 참조 문서

- [프로젝트 허브](CLAUDE.md)
- [ppt-maker-in-toss 가이드](ppt-maker-in-toss/CLAUDE.md)
- [ppt-maker-next 가이드](ppt-maker-next/CLAUDE.md)
- [ppt-maker-in-toss 릴리즈 노트](ppt-maker-in-toss/RELEASE_NOTES.md)
- [ppt-maker-next 릴리즈 노트](ppt-maker-next/RELEASE_NOTES.md)

---

**문서 버전**: 1.0
**최종 수정**: 2025-11-08
**유지보수**: 공통 코드 변경 시 반드시 업데이트하세요.
