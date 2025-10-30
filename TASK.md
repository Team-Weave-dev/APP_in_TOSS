# Apps in Toss 표준 규칙 참조 시스템 개선 작업

> **작업 시작**: 2025-10-30
> **목표**: 모든 하위 문서에서 상위 표준 규칙들이 일관되게 참조되도록 개선
> **핵심 문제**: UX Writing 규칙(~해요체 등) 및 기타 주요 규칙들이 하위 claude.md 파일에 명시되지 않음

---

## 🚨 발견된 문제

### 핵심 문제
- ❌ **하위 프로젝트에서 ~해요체 규칙 누락**: ROULETTE은 명시되어 있으나 다른 claude.md 파일들은 미명시
- ❌ **주요 표준 규칙 일부 누락**: UX Writing, 타입 구분, 언어 규칙 등이 하위 문서에 일관되게 명시되지 않음
- ❌ **계층적 참조 불완전**: 상위 문서의 규칙들이 하위 문서에서 제대로 참조되지 않음

### 영향 범위
```
루트 CLAUDE.md (표준 정의) ✅
├─ docs/claude.md ❓ (규칙 참조 불완전)
│  ├─ docs/01-intro/claude.md ❓
│  ├─ docs/02-prepare/claude.md ❓
│  ├─ docs/03-design/claude.md ❓
│  ├─ docs/04-development/claude.md ❓
│  └─ ... (기타 docs/*/claude.md)
├─ example/claude.md ❓ (규칙 참조 불완전)
└─ project/ROULETTE/CLAUDE.md ✅ (UX Writing 규칙 명시됨)
```

---

## 📋 작업 계획

### Phase 1: 표준 규칙 분석 및 정리 (우선순위: 🔴 최고)
- [ ] 1.1. 루트 CLAUDE.md 주요 규칙 추출
- [ ] 1.2. 공식 문서 (docs/03-design/03-ux-writing.md) 규칙 분석
- [ ] 1.3. ROULETTE 프로젝트 규칙 명시 방식 분석
- [ ] 1.4. 표준 규칙 목록 작성 (STANDARD_RULES.md 생성)

**핵심 규칙**:
1. **UX Writing** (공식 문서 기준)
   - ~해요체 사용 (상황/맥락 불문)
   - 능동적 말하기 (됐어요 → 했어요)
   - 긍정적 말하기 (없어요 → 있어요)

2. **언어 규칙**
   - 문서/커뮤니케이션: 한글
   - 코드/파일명/변수명: 영어

3. **프로젝트 타입 구분**
   - WebView: TDS Mobile
   - React Native: TDS React Native
   - Unity: Unity UI
   - 혼용 절대 금지

4. **접근 권한**
   - docs/, example/: 읽기 전용
   - project/*: 읽기/쓰기

5. **계층적 참조 원칙**
   - 상향 참조: 하위는 상위 먼저 읽기
   - 계층 명시: 각 claude.md는 상위 경로 명시

### Phase 2: 루트 CLAUDE.md 개선 (우선순위: 🔴 최고)
- [x] 2.1. "필수 지시사항" 섹션에 UX Writing 규칙 추가
- [x] 2.2. 하위 문서 작성 시 참조해야 할 표준 규칙 섹션 추가
- [x] 2.3. TASK.md 사용 규칙 섹션 추가 (임시 작업용)
- [x] 2.4. 변경사항 커밋

**추가 내용**:
```markdown
### UX Writing 규칙 (필수)
모든 사용자 대면 텍스트는 Apps in Toss UX Writing 가이드를 준수해야 합니다.

**필수 규칙**:
1. **~해요체 사용**: 상황/맥락 불문 모든 문구에 "~해요" 적용
2. **능동적 말하기**: 됐어요 → 했어요
3. **긍정적 말하기**: 없어요 → 있어요

**참조**: [docs/03-design/03-ux-writing.md](docs/03-design/03-ux-writing.md)
```

### Phase 3: docs/claude.md 계층 개선 (우선순위: 🟡 높음) ✅
- [x] 3.1. docs/claude.md: UX Writing 규칙 참조 추가
- [x] 3.2. docs/claude.md: 표준 규칙 체크리스트 추가
- [x] 3.3. docs/01-intro/claude.md: 규칙 참조 추가
- [x] 3.4. docs/02-prepare/claude.md: 규칙 참조 추가
- [x] 3.5. docs/03-design/claude.md: UX Writing 강조
- [x] 3.6. docs/04-development/claude.md: 타입별 규칙 강조
- [x] 3.7. 기타 docs/*/claude.md 파일 개선 (8개: checklist, analytics, marketing, settlement, growth, resources, reference)

**추가 형식**:
```markdown
## ⚠️ 필수 규칙 (상위 문서 참조)

하위 프로젝트 개발 시 **반드시 준수**해야 하는 규칙입니다.

### 1. UX Writing (🔴 필수)
- ~해요체 사용 (상황 불문)
- 능동적/긍정적 말하기
- 참조: [03-design/03-ux-writing.md](03-design/03-ux-writing.md)

### 2. 프로젝트 타입 구분 (🔴 필수)
- WebView ↔ React Native 혼용 금지
- 참조: [../../CLAUDE.md - 타입 구분](../../CLAUDE.md)

### 3. 언어 규칙
- 문서: 한글 / 코드: 영어
```

### Phase 4: example/claude.md 개선 (우선순위: 🟡 높음) ✅
- [x] 4.1. example/claude.md 읽기
- [x] 4.2. 표준 규칙 참조 섹션 추가
- [x] 4.3. 예제 코드 내 텍스트도 ~해요체 확인 안내 추가

### Phase 5: 프로젝트 템플릿 개선 (우선순위: 🟢 보통) ✅
- [x] 5.1. templates/webview-project-CLAUDE.md.template 검토
- [x] 5.2. templates/react-native-project-CLAUDE.md.template 검토
- [x] 5.3. templates/unity-project-CLAUDE.md.template 검토
- [x] 5.4. 템플릿에 UX Writing 규칙 명시 여부 확인 및 개선

**참고**: ROULETTE 프로젝트는 이미 UX Writing 규칙이 잘 명시되어 있으므로 이를 템플릿에 반영

### Phase 6: 교차 검증 (우선순위: 🔴 최고) ✅
- [x] 6.1. 모든 claude.md 파일 규칙 일관성 확인
  - [x] 루트 CLAUDE.md
  - [x] docs/claude.md
  - [x] docs/*/claude.md (15개)
  - [x] example/claude.md
  - [x] templates/*.template (3개)
- [x] 6.2. 규칙 참조 링크 검증
- [x] 6.3. 상향 참조 경로 확인
- [x] 6.4. 누락된 규칙 최종 확인 (3개 파일 수정)

### Phase 7: 문서화 및 커밋 (우선순위: 🔴 최고)
- [ ] 7.1. STANDARD_RULES.md 최종 작성
- [ ] 7.2. CHANGELOG 작성 (변경 로그)
- [ ] 7.3. Git 커밋 및 푸시
- [ ] 7.4. TASK.md 완료 표시

---

## 📊 진행 상황

- **Phase 1**: ✅ 4/4 (100%)
- **Phase 2**: ✅ 4/4 (100%)
- **Phase 3**: ✅ 7/7 (100%)
- **Phase 4**: ✅ 3/3 (100%)
- **Phase 5**: ✅ 4/4 (100%)
- **Phase 6**: ✅ 4/4 (100%)
- **Phase 7**: ⬜ 0/4 (0%)

**전체 진행률**: 26/30 (87%)

---

## 📝 작업 로그

### 2025-10-30

**18:30 - 작업 시작**
- TASK.md 생성
- 문제 분석: UX Writing 규칙(~해요체 등)이 하위 문서에 명시되지 않음
- 작업 계획 수립: 7개 Phase, 30개 체크리스트

**19:00 - Phase 1 완료** ✅
- 루트 CLAUDE.md 주요 규칙 추출 완료
- 공식 문서 (docs/03-design/03-ux-writing.md) 분석 완료
- ROULETTE 프로젝트 규칙 명시 방식 분석 완료
- STANDARD_RULES.md 생성 (344줄, MUST/SHOULD/MAY 규칙 정의)

**19:15 - Phase 2 완료** ✅
- 루트 CLAUDE.md "필수 지시사항"에 UX Writing 규칙 추가
- "하위 CLAUDE.md 작성 가이드" 섹션 신규 추가
  - 필수 포함 섹션 4개 정의 (프로젝트 헤더, UX Writing, 타입 주의사항, 기술 스택)
  - 각 섹션별 템플릿 예시 제공
  - STANDARD_RULES.md 및 ROULETTE 참조 링크 추가
- TASK.md 사용 규칙 검증 완료
- git commit 완료 (386cd69)

**다음 작업**: Phase 3 - docs/claude.md 계층 개선 (7개 하위 작업)

**20:00 - Phase 3 완료** ✅
- 12개 docs/*/claude.md 파일에 "필수 규칙 (상위 문서 참조)" 섹션 추가 완료
- 총 599줄 추가
- 각 디렉토리 특성에 맞는 맥락화된 예시 제공
  - 📊 Analytics: 로깅 데이터(영어) vs UI 텍스트(한글) 구분 명확화
  - 📢 Marketing: 푸시 알림, 광고 카피 예시
  - 💳 Settlement: 결제/환불 메시지 예시
  - 📈 Growth: 친구 초대, 리워드 문구 예시
  - 📚 Reference: Bedrock SDK vs TDS 라이브러리 혼용 금지 코드 예시
- git commit 완료 (064bf0b)
- 작업 원칙: 정확성 우선 (시간보다 품질)

**다음 작업**: Phase 4 - example/claude.md 개선 (3개 하위 작업)

**20:30 - Phase 4 완료** ✅
- example/claude.md에 "필수 규칙 (상위 문서 참조)" 섹션 추가 완료
- 총 88줄 추가
- 예제 코드 활용 시 핵심 가이드:
  - ⚠️ **예제 코드 내 텍스트 확인**: 공식 예제는 ~해요체를 준수하지 않을 수 있음
  - ✅ **체크리스트 제공**: Button, Dialog, Toast 등 UI 텍스트 검토 필요
  - 📋 **프로젝트 타입**: 대부분 WebView 예제 (TDS Mobile), React Native는 TDS React Native로 변경 필요
  - 🔒 **접근 권한**: 읽기 전용, 복사 후 수정 필수
- example/.gitignore에 claude.md 추가 (서브모듈 내 충돌 방지)

**다음 작업**: Phase 5 - 프로젝트 템플릿 개선 (4개 하위 작업)

**21:00 - Phase 5 완료** ✅
- 3개 프로젝트 템플릿에 UX Writing Guidelines 섹션 추가 완료
- 템플릿별 총 24-26줄 추가
- ROULETTE/CLAUDE.md의 상세한 UX Writing 규칙을 템플릿에 반영:
  - ✅ **~해요체 사용**: 상황/맥락 불문 모든 문구 적용
  - ✅ **능동적 말하기**: 됐어요 → 했어요
  - ✅ **긍정적 말하기**: 부정형 최소화 + 대안 제시
  - ✅ **캐주얼한 경어**: 과도한 존댓말 지양
- 템플릿별 특화:
  - **WebView**: TDS Mobile 컴포넌트 텍스트 적용
  - **React Native**: TDS React Native 컴포넌트 텍스트 적용
  - **Unity**: Unity UI (TextMeshPro 등), 게임 내 다이얼로그 적용
- 참조 문서 링크 추가 (STANDARD_RULES.md, ux-writing.md)

**다음 작업**: Phase 6 - 교차 검증 (4개 하위 작업)

**21:30 - Phase 6 완료** ✅
- 전체 18개 claude.md/template 파일 규칙 일관성 검증 완료
- 검증 결과:
  - ✅ 18개 파일 중 15개 "필수 규칙" 섹션 포함
  - ⚠️ 3개 파일 규칙 섹션 누락 발견:
    - docs/04-development/claude.md (⚠️ 주의사항만 있음)
    - docs/reference/bedrock/claude.md (규칙 섹션 없음)
    - docs/reference/tds-mobile/claude.md (규칙 섹션 없음)
- 규칙 참조 링크 검증:
  - ✅ STANDARD_RULES.md: 14개 참조 모두 유효
  - ✅ ux-writing.md: 17개 참조 모두 유효
  - ✅ 모든 파일 존재 확인 완료
- 상향 참조 경로 검증:
  - ✅ docs/*/claude.md (10개): docs/claude.md → 루트 CLAUDE.md
  - ✅ docs/reference/bedrock/claude.md: 3단계 계층 참조 올바름
  - ✅ docs/reference/tds-mobile/claude.md: 3단계 계층 참조 올바름
  - ✅ example/claude.md: 루트 CLAUDE.md 참조
- 누락 규칙 추가 (3개 파일, 총 248줄):
  - docs/04-development/claude.md (53줄): UX Writing, 프로젝트 타입, 언어 규칙
  - docs/reference/bedrock/claude.md (79줄): API 파라미터 텍스트, 언어 규칙 (API vs UI), 타입 독립성
  - docs/reference/tds-mobile/claude.md (108줄): 컴포넌트 텍스트, WebView 전용, 언어 규칙
- git commit 완료 (05cc68f)

**최종 결과**:
- ✅ **18개 파일 모두 규칙 섹션 포함 (100% 완료)**
- ✅ **모든 참조 링크 유효**
- ✅ **계층 구조 일관성 검증 완료**

**다음 작업**: Phase 7 - 문서화 및 커밋 (4개 하위 작업)

---

## 💡 표준 규칙 요약 (Phase 1 완료 후 업데이트 예정)

### 1. UX Writing 규칙 (🔴 필수)
**출처**: [docs/03-design/03-ux-writing.md](docs/03-design/03-ux-writing.md)

1. **~해요체 사용**
   - 상황/맥락 불문 모든 문구에 적용
   - ❌ ~습니다, ~했습니다 → ✅ ~해요, ~했어요
   - ❌ 검색 중..., 로딩 중... → ✅ 검색하고 있어요, 불러오고 있어요

2. **능동적 말하기**
   - ❌ 됐어요 → ✅ 했어요
   - ❌ 완료됐어요 → ✅ 완료했어요

3. **긍정적 말하기**
   - ❌ 검색 결과가 없어요 → ✅ 주변에 음식점을 찾지 못했어요 (+ 대안 제시)

**적용 범위**:
- UI 컴포넌트의 모든 텍스트
- 에러 메시지 및 안내 문구
- 로딩 상태 텍스트
- JSDoc 주석의 예제 코드 내 텍스트

### 2. 프로젝트 타입 구분 (🔴 필수)
- **Type 1 - WebView**: TDS Mobile (`@toss/tds-mobile`)
- **Type 2 - React Native**: TDS React Native (`@toss/tds-react-native`)
- **Type 3 - Unity**: Unity UI
- ❌ **절대 혼용 금지**: WebView ↔ React Native 간 UI 라이브러리 교차 사용 불가

### 3. 언어 규칙
- **문서/커뮤니케이션**: 한글
- **코드/파일명/변수명**: 영어
- **Claude 사고 과정**: 한글

### 4. 접근 권한
- **docs/, example/**: 읽기 전용 (하위 프로젝트 수정 금지)
- **project/***: 읽기/쓰기 (각 프로젝트 독립 개발)

### 5. 계층적 참조 원칙
- **상향 참조**: 하위 디렉토리는 상위 claude.md 먼저 읽기
- **계층 명시**: 각 claude.md는 상위 컨텍스트 경로 명시

---

## ⚙️ TASK.md 사용 규칙 (임시 - 작업 완료 후 제거 예정)

**작업 기간**: 2025-10-30 ~ 완료 시까지

**필수 규칙**:
1. **모든 작업은 TASK.md를 통해 추적**
   - Phase별 체크리스트 확인
   - 작업 전 해당 항목 확인
   - 작업 완료 후 체크 표시

2. **작업 로그 기록**
   - 주요 작업 완료 시 TASK.md 하단에 로그 기록
   - 문제 발생 시 즉시 기록
   - 의사결정 사항 문서화

3. **진행 상황 업데이트**
   - 각 Phase 완료 시 진행률 업데이트
   - 전체 진행률 계산 및 표시

**삭제 시점**:
- 사용자가 작업 완료 확인 후 명시적으로 삭제 지시할 때까지 유지

**현재 작업**: 표준 규칙 참조 시스템 개선
**목표**: 모든 하위 claude.md 파일에서 주요 규칙들이 일관되게 참조되도록 개선

---

**마지막 업데이트**: 2025-10-30 21:30
**담당자**: Claude Code
**상태**: 🚀 Phase 6 완료, Phase 7 대기 (87% 진행)
