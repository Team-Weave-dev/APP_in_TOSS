# Apps in Toss 문서 계층구조 리팩토링 작업

> **작업 시작**: 2025-10-28
> **목표**: 공식 문서 기반 올바른 계층구조 재구축 및 프로젝트 타입 구분 시스템 구축

---

## 🚨 발견된 문제

### 핵심 오류
- ❌ TDS Mobile을 React Native 전용으로 잘못 표시
- ✅ 실제: TDS Mobile은 WebView(Web React) 전용
- ❌ 모든 claude.md 파일에서 반대로 설명됨
- 📅 잘못된 커밋: efcd89d (2025-10-28)

### 영향 범위
```
QUICK_REFERENCE.md
docs/reference/tds-mobile/claude.md (새로 생성)
docs/04-development/claude.md
docs/03-design/claude.md
docs/reference/claude.md
```

---

## 📋 작업 계획

### Phase 1: 긴급 복구 (우선순위: 🔴 최고)
- [x] 1.1. 잘못된 커밋 되돌리기 (git revert efcd89d) ✅
- [x] 1.2. TASK.md 규칙을 CLAUDE.md에 추가 ✅
- [x] 1.3. 복구 완료 확인 ✅

### Phase 2: 공식 문서 재확인 (우선순위: 🔴 최고)
- [x] 2.1. Apps in Toss 공식 문서 구조 분석 ✅
  - [x] WebView 개발 가이드 분석
  - [x] React Native 개발 가이드 분석
  - [x] TDS Mobile 공식 문서 분석
  - [x] TDS React Native 공식 문서 분석
- [x] 2.2. 현재 수집된 문서 검증 ✅
  - [x] docs/reference/tds-mobile/ (67개 문서) 검증
  - [x] docs/reference/bedrock/ (94개 API) 검증
- [x] 2.3. 정확한 기술 스택 매핑 정리 ✅
  - [x] TECH_STACK_MAPPING.md 생성

### Phase 3: 프로젝트 타입 구분 시스템 설계 (우선순위: 🟡 높음)
- [x] 3.1. 프로젝트 타입 정의 ✅
  ```
  Type 1: WebView App
  - Framework: @apps-in-toss/web-framework
  - UI: TDS Mobile (@toss/tds-mobile)
  - Tech: React 18+, react-dom, Vite/Webpack

  Type 2: React Native App
  - Framework: Granite (@granite-js/react-native)
  - UI: TDS React Native (@toss/tds-react-native)
  - Tech: React Native, Metro

  Type 3: Unity Game App
  - Framework: Unity + React Native wrapper
  - UI: Limited TDS support
  - Tech: Unity, C#
  ```
- [x] 3.2. 프로젝트별 타입 명시 방법 설계 ✅
  - [x] CLAUDE.md 선언 방식
  - [x] package.json 자동 감지
  - [x] .appintoss.yml 선택적 설정
- [x] 3.3. 타입별 참조 루트 설계 ✅
  - [x] WebView 참조 경로
  - [x] React Native 참조 경로
  - [x] PROJECT_TYPE_SYSTEM.md 생성

### Phase 4: 디렉토리 구조 재설계 (우선순위: 🟡 높음)
- [ ] 4.1. 현재 구조 분석
  ```
  docs/
  ├── reference/
  │   ├── bedrock/ (모든 타입 공통)
  │   └── tds-mobile/ (WebView 전용) ← 잘못 분류됨
  ```
- [ ] 4.2. 타입별 구조 제안
  ```
  Option A: 타입별 분리
  docs/
  ├── reference/
  │   ├── common/bedrock/ (공통)
  │   ├── webview/tds-mobile/
  │   └── react-native/tds-react-native/

  Option B: 현재 구조 유지 + 명확한 표시
  docs/
  ├── reference/
  │   ├── bedrock/ (공통)
  │   ├── tds-mobile/ (WebView only)
  │   └── README 또는 claude.md에서 명확히 구분
  ```
- [ ] 4.3. 최적 구조 결정
- [ ] 4.4. 필요시 디렉토리 재구성

### Phase 5: 계층구조 파일 재작성 (우선순위: 🟡 높음)
- [ ] 5.1. 루트 CLAUDE.md 수정
  - [ ] 프로젝트 타입 구분 추가
  - [ ] TASK.md 사용 규칙 추가
  - [ ] 올바른 기술 스택 매핑
- [ ] 5.2. QUICK_REFERENCE.md 수정
  - [ ] 프로젝트 타입별 올바른 참조
  - [ ] WebView → TDS Mobile
  - [ ] React Native → TDS React Native
- [ ] 5.3. docs/reference/claude.md 수정
  - [ ] TDS Mobile 설명 수정 (WebView 전용)
  - [ ] TDS React Native 추가 (필요시)
- [ ] 5.4. docs/reference/tds-mobile/claude.md 수정
  - [ ] WebView 전용 명시
  - [ ] 잘못된 React Native 참조 제거
- [ ] 5.5. docs/04-development/claude.md 수정
  - [ ] 프로젝트 유형별 올바른 TDS 매핑
- [ ] 5.6. docs/03-design/claude.md 수정
  - [ ] 프로젝트 유형별 UI 라이브러리 올바른 매핑

### Phase 6: 프로젝트 템플릿 생성 (우선순위: 🟢 보통)
- [ ] 6.1. WebView 프로젝트 CLAUDE.md 템플릿
- [ ] 6.2. React Native 프로젝트 CLAUDE.md 템플릿
- [ ] 6.3. Unity 프로젝트 CLAUDE.md 템플릿
- [ ] 6.4. 템플릿 사용 가이드 작성

### Phase 7: 검증 및 테스트 (우선순위: 🔴 최고)
- [ ] 7.1. 모든 claude.md 파일 교차 검증
- [ ] 7.2. 참조 링크 검증
- [ ] 7.3. 계층구조 일관성 검증
- [ ] 7.4. 공식 문서와 대조 검증

### Phase 8: 문서화 및 커밋 (우선순위: 🔴 최고)
- [ ] 8.1. REFERENCE_GUIDE.md 업데이트
- [ ] 8.2. 변경 로그 작성
- [ ] 8.3. Git 커밋 및 푸시
- [ ] 8.4. TASK.md 완료 표시

---

## 💡 개선 제안

### 제안 1: 프로젝트 타입 선언 파일
```yaml
# project/.appintoss.yml
type: webview | react-native | unity
framework:
  webview: @apps-in-toss/web-framework
  react-native: @granite-js/react-native
  unity: unity
ui:
  webview: @toss/tds-mobile
  react-native: @toss/tds-react-native
```

### 제안 2: 타입별 참조 루트
```
루트 CLAUDE.md
├─ [WebView 프로젝트] → docs/webview-guide.md
│  └─ TDS Mobile 참조
└─ [React Native 프로젝트] → docs/react-native-guide.md
   └─ TDS React Native 참조
```

### 제안 3: 자동 검증 스크립트
- 프로젝트 타입과 의존성 매칭 검증
- 잘못된 TDS 패키지 사용 감지

---

## 📊 진행 상황

- **Phase 1**: ✅ 3/3 (100%)
- **Phase 2**: ✅ 3/3 (100%)
- **Phase 3**: ✅ 3/3 (100%)
- **Phase 4**: ⬜ 0/4 (0%)
- **Phase 5**: ⬜ 0/6 (0%)
- **Phase 6**: ⬜ 0/4 (0%)
- **Phase 7**: ⬜ 0/4 (0%)
- **Phase 8**: ⬜ 0/4 (0%)

**전체 진행률**: 9/31 (29%)

---

## 📝 작업 로그

### 2025-10-28

**16:45 - 작업 시작**
- TASK.md 생성
- 문제 분석 및 작업 계획 수립 (8개 Phase, 31개 체크리스트)

**16:48 - Phase 1 완료**
- ✅ 1.1: git revert efcd89d 성공 (5개 파일 복구, 390줄 제거)
- ✅ 1.2: CLAUDE.md에 TASK.md 사용 규칙 추가
- ✅ 1.3: 복구 완료 확인

**16:55 - Phase 2 완료**
- ✅ 2.1: 공식 문서 구조 분석 (WebView, React Native, TDS 문서 모두 확인)
- ✅ 2.2: 수집된 문서 검증 (67개 TDS Mobile 파일 확인)
- ✅ 2.3: TECH_STACK_MAPPING.md 생성 (정확한 기술 스택 매핑 문서화)

**17:00 - Phase 3 완료**
- ✅ 3.1: 프로젝트 타입 정의 (WebView, React Native, Unity)
- ✅ 3.2: 타입 명시 방법 설계 (CLAUDE.md 선언 + package.json 자동 감지)
- ✅ 3.3: 타입별 참조 루트 설계
- ✅ PROJECT_TYPE_SYSTEM.md 생성 (상세한 타입 구분 시스템 문서화)
- **다음 작업**: Phase 4 - 디렉토리 구조 재설계

---

**마지막 업데이트**: 2025-10-28
**담당자**: Claude Code
**검토 필요**: Phase 3.2, 4.3 (사용자 의견 필요)
