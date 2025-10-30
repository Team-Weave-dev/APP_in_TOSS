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
- [ ] 2.1. "필수 지시사항" 섹션에 UX Writing 규칙 추가
- [ ] 2.2. 하위 문서 작성 시 참조해야 할 표준 규칙 섹션 추가
- [ ] 2.3. TASK.md 사용 규칙 섹션 추가 (임시 작업용)
- [ ] 2.4. 변경사항 커밋

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

### Phase 3: docs/claude.md 계층 개선 (우선순위: 🟡 높음)
- [ ] 3.1. docs/claude.md: UX Writing 규칙 참조 추가
- [ ] 3.2. docs/claude.md: 표준 규칙 체크리스트 추가
- [ ] 3.3. docs/01-intro/claude.md: 규칙 참조 추가
- [ ] 3.4. docs/02-prepare/claude.md: 규칙 참조 추가
- [ ] 3.5. docs/03-design/claude.md: UX Writing 강조
- [ ] 3.6. docs/04-development/claude.md: 타입별 규칙 강조
- [ ] 3.7. 기타 docs/*/claude.md 파일 개선

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

### Phase 4: example/claude.md 개선 (우선순위: 🟡 높음)
- [ ] 4.1. example/claude.md 읽기
- [ ] 4.2. 표준 규칙 참조 섹션 추가
- [ ] 4.3. 예제 코드 내 텍스트도 ~해요체 확인 안내 추가

### Phase 5: 프로젝트 템플릿 개선 (우선순위: 🟢 보통)
- [ ] 5.1. templates/webview-project-CLAUDE.md.template 검토
- [ ] 5.2. templates/react-native-project-CLAUDE.md.template 검토
- [ ] 5.3. templates/unity-project-CLAUDE.md.template 검토
- [ ] 5.4. 템플릿에 UX Writing 규칙 명시 여부 확인 및 개선

**참고**: ROULETTE 프로젝트는 이미 UX Writing 규칙이 잘 명시되어 있으므로 이를 템플릿에 반영

### Phase 6: 교차 검증 (우선순위: 🔴 최고)
- [ ] 6.1. 모든 claude.md 파일 규칙 일관성 확인
  - [ ] 루트 CLAUDE.md
  - [ ] docs/claude.md
  - [ ] docs/*/claude.md (15개)
  - [ ] example/claude.md
  - [ ] templates/*.template (3개)
- [ ] 6.2. 규칙 참조 링크 검증
- [ ] 6.3. 상향 참조 경로 확인
- [ ] 6.4. 누락된 규칙 최종 확인

### Phase 7: 문서화 및 커밋 (우선순위: 🔴 최고)
- [ ] 7.1. STANDARD_RULES.md 최종 작성
- [ ] 7.2. CHANGELOG 작성 (변경 로그)
- [ ] 7.3. Git 커밋 및 푸시
- [ ] 7.4. TASK.md 완료 표시

---

## 📊 진행 상황

- **Phase 1**: ⬜ 0/4 (0%)
- **Phase 2**: ⬜ 0/4 (0%)
- **Phase 3**: ⬜ 0/7 (0%)
- **Phase 4**: ⬜ 0/3 (0%)
- **Phase 5**: ⬜ 0/4 (0%)
- **Phase 6**: ⬜ 0/4 (0%)
- **Phase 7**: ⬜ 0/4 (0%)

**전체 진행률**: 0/30 (0%)

---

## 📝 작업 로그

### 2025-10-30

**18:30 - 작업 시작**
- TASK.md 생성
- 문제 분석: UX Writing 규칙(~해요체 등)이 하위 문서에 명시되지 않음
- 작업 계획 수립: 7개 Phase, 30개 체크리스트

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

**마지막 업데이트**: 2025-10-30 18:30
**담당자**: Claude Code
**상태**: 🚀 작업 시작 (Phase 1 대기)
