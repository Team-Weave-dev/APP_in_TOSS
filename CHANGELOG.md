# APPinTOSS 문서 계층구조 리팩토링 변경 로그

> **작업 기간**: 2025-10-28
> **작업 범위**: 문서 계층구조 전면 개편 및 프로젝트 타입 구분 시스템 도입
> **영향 파일**: 22개 파일 (신규 5개, 수정 17개)

---

## 📋 개요

### 목적
Apps in Toss 프로젝트에 **프로젝트 타입 구분 시스템**을 도입하여 WebView, React Native, Unity 프로젝트 간의 혼동을 방지하고, 각 타입별로 올바른 UI 라이브러리와 프레임워크를 사용하도록 가이드합니다.

### 주요 문제점 (Before)
1. ❌ **TDS Mobile 분류 오류**: TDS Mobile을 React Native 전용으로 잘못 표시
2. ❌ **타입 구분 부재**: 프로젝트 타입별 기술 스택 차이 명시 없음
3. ❌ **혼용 위험**: WebView/React Native 앱에서 잘못된 UI 라이브러리 사용 가능
4. ❌ **템플릿 부재**: 새 프로젝트 생성 시 표준 템플릿 없음
5. ❌ **링크 검증 부족**: 문서 간 참조 링크 일부 깨짐

### 해결 방안 (After)
1. ✅ **올바른 분류**: TDS Mobile = WebView 전용, TDS React Native = React Native 전용
2. ✅ **타입 시스템**: 3가지 프로젝트 타입 명확히 구분 (WebView, React Native, Unity)
3. ✅ **사용 제한**: 각 타입별 사용 가능/불가능 기술 명시 및 경고
4. ✅ **표준 템플릿**: 3개 타입별 CLAUDE.md 템플릿 + 사용 가이드 제공
5. ✅ **링크 검증**: 109개 링크 검증 및 수정 완료

---

## 🎯 주요 변경사항

### 1. 프로젝트 타입 구분 시스템 도입

#### Type 1: 🌐 WebView 앱
- **프레임워크**: `@apps-in-toss/web-framework`
- **UI 라이브러리**: **TDS Mobile** (`@toss/tds-mobile`)
- **필수 의존성**: `react-dom`
- **로컬 문서**: ✅ 67개 (docs/reference/tds-mobile/)
- **템플릿**: templates/webview-project-CLAUDE.md.template

#### Type 2: 📱 React Native 앱
- **프레임워크**: Granite (`@granite-js/react-native`)
- **UI 라이브러리**: **TDS React Native** (`@toss/tds-react-native`)
- **필수 의존성**: `react-native`
- **로컬 문서**: ❌ 없음 (온라인만: https://tossmini-docs.toss.im/tds-react-native/)
- **템플릿**: templates/react-native-project-CLAUDE.md.template

#### Type 3: 🎮 Unity 앱
- **게임 엔진**: Unity
- **UI 시스템**: Unity UI (uGUI, UI Toolkit)
- **통합 방식**: React Native wrapper
- **TDS 지원**: ⚠️ 제한적 (Unity UI 주로 사용)
- **템플릿**: templates/unity-project-CLAUDE.md.template

### 2. 타입별 혼용 금지 규칙
```
❌ WebView 앱에서 @toss/tds-react-native 사용
❌ React Native 앱에서 @toss/tds-mobile 사용
❌ React Native 앱에서 react-dom 사용
❌ WebView 앱에서 react-native 사용
```

### 3. 표준 템플릿 제공
새 프로젝트 생성 시 타입별 템플릿 복사 후 커스터마이징하여 타입 혼동 방지

---

## 📝 Phase별 상세 변경 내역

### Phase 1: 초기 설정 및 문제 파악 ✅
**작업 일시**: 2025-10-28 초기

- [x] 1.1. 잘못된 커밋 되돌리기 (efcd89d)
  - 이유: TDS Mobile을 React Native 전용으로 잘못 분류한 커밋
  - 조치: `git revert efcd89d`

- [x] 1.2. TASK.md 생성
  - 8개 Phase, 31개 체크리스트 작성
  - 진행 상황 추적 시스템 구축

- [x] 1.3. CLAUDE.md 사용 규칙 추가
  - TASK.md 사용 규칙 및 체크리스트 규칙 추가

**영향 파일**:
- 신규: TASK.md

### Phase 2: 공식 문서 재확인 ✅
**작업 일시**: 2025-10-28

- [x] 2.1. TDS Mobile 공식 문서 확인
  - 확인 결과: WebView(Web React) 전용 라이브러리
  - 의존성: `react-dom` 필수

- [x] 2.2. TDS React Native 공식 문서 확인
  - 확인 결과: React Native 전용 라이브러리
  - 의존성: `react-native` 필수

- [x] 2.3. 오류 원인 분석
  - 발견: 모든 claude.md 파일에서 반대로 설명됨
  - 원인: 초기 문서화 시 분류 오류

### Phase 3: 프로젝트 타입 구분 시스템 설계 ✅
**작업 일시**: 2025-10-28

- [x] 3.1. 3가지 타입 정의
  - Type 1: WebView (TDS Mobile)
  - Type 2: React Native (TDS React Native)
  - Type 3: Unity (Unity UI + RN wrapper)

- [x] 3.2. 타입별 기술 스택 매핑
  - UI 라이브러리, 프레임워크, 필수 의존성 정의

- [x] 3.3. 혼용 방지 규칙 설계
  - 타입별 사용 가능/불가능 패키지 명시
  - package.json 검증 예제 작성

### Phase 4: 루트 CLAUDE.md 리팩토링 ✅
**작업 일시**: 2025-10-28

- [x] 4.1. 프로젝트 타입 구분 시스템 섹션 추가
  - 3가지 타입 상세 설명
  - 타입별 필수 의존성 및 문서 위치

- [x] 4.2. QUICK_REFERENCE.md 업데이트
  - TDS Mobile → WebView 전용 명시
  - TDS React Native → React Native 전용 명시

- [x] 4.3. 계층적 참조 구조 명확화
  - 상향 참조 원칙 강화
  - 각 계층별 역할 명확화

- [x] 4.4. 루트 CLAUDE.md 커밋
  - 커밋 메시지: "Feat: 프로젝트 타입 구분 시스템 추가"

**영향 파일**:
- 수정: CLAUDE.md
- 수정: QUICK_REFERENCE.md

### Phase 5: 모든 계층 claude.md 리팩토링 ✅
**작업 일시**: 2025-10-28

**5.1. docs/claude.md 업데이트**
- 프로젝트 타입별 참조 섹션 추가

**5.2. docs/01-intro/claude.md 업데이트**
- 플랫폼 소개에 타입 구분 추가

**5.3. docs/02-prepare/claude.md 업데이트**
- 타입별 준비 사항 구분

**5.4. docs/03-design/claude.md 업데이트**
- 프로젝트 타입별 디자인 시스템 섹션 추가
- WebView → TDS Mobile, React Native → TDS React Native 명시

**5.5. docs/04-development/claude.md 업데이트**
- 타입별 개발 가이드 링크 구분

**5.6. docs/reference/claude.md 업데이트**
- TDS Mobile: WebView 전용 명시
- TDS React Native: React Native 전용, 온라인만 가능

**5.7. docs/reference/bedrock/claude.md 리팩토링**
- 공통 SDK임을 명시 (모든 타입에서 사용 가능)

**5.8. docs/reference/tds-mobile/claude.md 전면 리팩토링**
- ⚠️ WebView 앱 전용 경고 추가
- 필수 의존성 명시 (react-dom)
- React Native 앱에서 사용 불가 명시
- TDS React Native와의 차이점 설명

**5.9-5.11. 나머지 디렉토리 claude.md 업데이트**
- docs/05-checklist/claude.md
- docs/06-analytics/claude.md
- docs/07-marketing/claude.md
- docs/09-settlement/claude.md
- docs/10-growth/claude.md
- docs/11-resources/claude.md

**5.12. example/claude.md 업데이트**
- 예제별 프로젝트 타입 명시

**영향 파일** (17개):
- docs/claude.md
- docs/01-intro/claude.md
- docs/02-prepare/claude.md
- docs/03-design/claude.md
- docs/04-development/claude.md
- docs/05-checklist/claude.md
- docs/06-analytics/claude.md
- docs/07-marketing/claude.md
- docs/09-settlement/claude.md
- docs/10-growth/claude.md
- docs/11-resources/claude.md
- docs/reference/claude.md
- docs/reference/bedrock/claude.md
- docs/reference/tds-mobile/claude.md
- example/claude.md

**커밋**:
```
feat: 계층적 문서 참조 시스템 전면 리팩토링 완료

Phase 5 완료:
- 17개 claude.md 파일 프로젝트 타입 시스템 적용
- TDS Mobile: WebView 전용 명시
- TDS React Native: React Native 전용, 온라인 문서만
- Bedrock SDK: 공통 사용 가능
- 타입별 혼용 금지 규칙 추가
```

### Phase 6: 프로젝트 템플릿 생성 ✅
**작업 일시**: 2025-10-28

**6.1. WebView 프로젝트 템플릿 생성**
- 파일: templates/webview-project-CLAUDE.md.template
- 내용: TDS Mobile 전용, react-dom 필수, 사용 불가 패키지 명시

**6.2. React Native 프로젝트 템플릿 생성**
- 파일: templates/react-native-project-CLAUDE.md.template
- 내용: TDS React Native 전용, react-native 필수, 온라인 문서만

**6.3. Unity 프로젝트 템플릿 생성**
- 파일: templates/unity-project-CLAUDE.md.template
- 내용: Unity UI + React Native wrapper, TDS 제한적 지원

**6.4. 템플릿 사용 가이드 작성**
- 파일: templates/TEMPLATE_GUIDE.md
- 내용:
  - 템플릿 선택 가이드
  - 7단계 사용 방법
  - 프로젝트 생성 체크리스트
  - 타입별 비교 표
  - FAQ 및 주의사항

**영향 파일** (신규 4개):
- templates/webview-project-CLAUDE.md.template
- templates/react-native-project-CLAUDE.md.template
- templates/unity-project-CLAUDE.md.template
- templates/TEMPLATE_GUIDE.md

**커밋**:
```
feat: 프로젝트 타입별 CLAUDE.md 템플릿 시스템 구축

Phase 6 완료:
- WebView 프로젝트 템플릿
- React Native 프로젝트 템플릿
- Unity 프로젝트 템플릿
- 템플릿 사용 가이드 (7단계 워크플로우)
- 타입별 비교표 및 FAQ

새 프로젝트 생성 시:
cp templates/[type]-project-CLAUDE.md.template project/[name]/CLAUDE.md
```

### Phase 7: 검증 및 테스트 ✅
**작업 일시**: 2025-10-28

**7.1. 모든 claude.md 파일 크로스 검증**
- 검증 대상: 17개 파일
- 확인 항목: 프로젝트 타입 시스템 일관성, 상위 참조 경로 정확성
- 결과: ✅ 모든 파일 일관성 확보

**7.2. 참조 링크 검증**
- 도구: Python 스크립트로 자동 검증
- 검증 링크: 109개
- 발견 문제: 10개 깨진 링크 (주로 TDS Mobile 예제 컴포넌트)
- 수정 내용:
  - 존재하지 않는 컴포넌트 링크 제거
  - 실제 존재하는 컴포넌트로 교체 (grid-list, border, numeric-spinner 등)
  - 공식 문서 참조 링크 추가
- 최종 결과: ✅ 0개 깨진 링크

**7.3. 계층 구조 일관성 검증**
- 확인: 3단계 계층 구조 (루트 → 디렉토리 → 서브디렉토리)
- 결과: ✅ 모든 파일 상위 참조 정확

**7.4. 공식 문서 대조 검증**
- TDS Mobile 공식 문서 재확인
- TDS React Native 공식 문서 재확인
- Bedrock SDK 공식 문서 재확인
- 결과: ✅ 모든 내용 공식 문서와 일치

**영향 파일**:
- 수정: docs/reference/tds-mobile/claude.md (링크 수정)

### Phase 8: 최종 문서화 및 커밋 🔄 (진행 중)
**작업 일시**: 2025-10-28 (현재)

**8.1. REFERENCE_GUIDE.md 업데이트** ✅
- 프로젝트 타입 구분 시스템 섹션 추가 (3가지 타입 상세 설명)
- 참조 대상 섹션에 TDS Mobile/React Native 구분 추가
- 디렉토리별 역할 요약 테이블에 /templates 추가
- 마지막 업데이트 날짜 및 변경 이력 추가

**8.2. 변경 로그 작성** 🔄 (현재)
- 파일: CHANGELOG.md
- 내용: 전체 리팩토링 작업 기록

**8.3. Git 커밋 및 푸시** ⏳ (예정)
- Phase 6-8 변경사항 커밋
- 커밋 메시지 작성

**8.4. TASK.md 완료 표시** ⏳ (예정)
- 전체 31개 체크리스트 완료 확인
- 최종 진행률 업데이트

**영향 파일**:
- 수정: REFERENCE_GUIDE.md ✅
- 신규: CHANGELOG.md 🔄
- 수정: TASK.md ⏳

---

## 📊 영향받는 파일 전체 목록

### 신규 파일 (5개)
1. TASK.md - 작업 추적 문서
2. CHANGELOG.md - 변경 로그 (현재 파일)
3. templates/webview-project-CLAUDE.md.template
4. templates/react-native-project-CLAUDE.md.template
5. templates/unity-project-CLAUDE.md.template
6. templates/TEMPLATE_GUIDE.md

### 수정 파일 (17개)
1. CLAUDE.md - 루트 컨텍스트
2. QUICK_REFERENCE.md - 빠른 참조
3. REFERENCE_GUIDE.md - 참조 가이드
4. docs/claude.md
5. docs/01-intro/claude.md
6. docs/02-prepare/claude.md
7. docs/03-design/claude.md
8. docs/04-development/claude.md
9. docs/05-checklist/claude.md
10. docs/06-analytics/claude.md
11. docs/07-marketing/claude.md
12. docs/09-settlement/claude.md
13. docs/10-growth/claude.md
14. docs/11-resources/claude.md
15. docs/reference/claude.md
16. docs/reference/bedrock/claude.md
17. docs/reference/tds-mobile/claude.md
18. example/claude.md

---

## 🔄 마이그레이션 가이드

### 기존 프로젝트 업데이트 방법

#### 1. 프로젝트 타입 확인
```bash
# package.json 확인
cat package.json | grep "@toss/tds"
cat package.json | grep "react-dom\|react-native"
```

**타입 판별**:
- `react-dom` + `@toss/tds-mobile` → WebView 프로젝트
- `react-native` + `@toss/tds-react-native` → React Native 프로젝트
- Unity 디렉토리 존재 → Unity 프로젝트

#### 2. 해당 템플릿 참조
```bash
# WebView 프로젝트
cat templates/webview-project-CLAUDE.md.template

# React Native 프로젝트
cat templates/react-native-project-CLAUDE.md.template

# Unity 프로젝트
cat templates/unity-project-CLAUDE.md.template
```

#### 3. 프로젝트 CLAUDE.md 업데이트
기존 `CLAUDE.md` 파일에 다음 섹션 추가:

```markdown
## ⚠️ 프로젝트 타입: [WebView|React Native|Unity] 앱

### ✅ 사용 가능한 기술
[템플릿 참조하여 작성]

### ❌ 사용 불가 (혼용 금지!)
[템플릿 참조하여 작성]

### 📚 참조 문서
[타입별 적절한 문서 링크]
```

#### 4. package.json 검증
```bash
# WebView 프로젝트 검증
cat package.json | grep "@toss/tds-mobile"    # 있어야 함
cat package.json | grep "react-dom"           # 있어야 함
cat package.json | grep "@toss/tds-react-native"  # 없어야 함

# React Native 프로젝트 검증
cat package.json | grep "@toss/tds-react-native"  # 있어야 함
cat package.json | grep "react-native"        # 있어야 함
cat package.json | grep "@toss/tds-mobile"    # 없어야 함
cat package.json | grep "react-dom"           # 없어야 함
```

---

## 📚 참조 문서

### 새 프로젝트 생성
1. [TEMPLATE_GUIDE.md](templates/TEMPLATE_GUIDE.md) - 템플릿 선택 및 사용법
2. [WebView 템플릿](templates/webview-project-CLAUDE.md.template)
3. [React Native 템플릿](templates/react-native-project-CLAUDE.md.template)
4. [Unity 템플릿](templates/unity-project-CLAUDE.md.template)

### 프로젝트 타입별 가이드
1. [WebView 개발 가이드](docs/04-development/06-webview.md)
2. [React Native 개발 가이드](docs/04-development/03-react-native.md)
3. [Unity 개발 가이드](docs/04-development/07-unity.md)

### UI 라이브러리 문서
1. [TDS Mobile (WebView 전용)](docs/reference/tds-mobile/) - 로컬 67개 문서
2. [TDS React Native (React Native 전용)](https://tossmini-docs.toss.im/tds-react-native/) - 온라인만
3. [Bedrock SDK (공통)](docs/reference/bedrock/) - 94개 API

### 전체 프로젝트 구조
1. [루트 CLAUDE.md](CLAUDE.md) - 프로젝트 전체 개요
2. [QUICK_REFERENCE.md](QUICK_REFERENCE.md) - 빠른 참조
3. [REFERENCE_GUIDE.md](REFERENCE_GUIDE.md) - 참조 규칙

---

## 🎯 향후 유지보수

### 새 프로젝트 생성 시
1. templates/ 디렉토리에서 적절한 템플릿 복사
2. TEMPLATE_GUIDE.md의 7단계 워크플로우 따르기
3. package.json 검증으로 타입 확인

### 문서 업데이트 시
1. 공식 문서 변경사항 월 1회 확인
2. 타입별 분류가 올바른지 검증
3. 링크 검증 스크립트 실행

### 문제 발생 시
1. TASK.md에 이슈 기록
2. 해당 타입 템플릿 참조
3. 공식 문서 재확인

---

**작성일**: 2025-10-28
**작성자**: Claude Code
**버전**: 1.0
**진행률**: 29/31 (94%) - Phase 8.2 완료

