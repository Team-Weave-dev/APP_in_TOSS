# Claude 작업 컨텍스트 (APPinTOSS 루트)

> **역할**: Apps in Toss 개발 프로젝트의 최상위 컨텍스트
> **관리 주체**: 루트 레벨

---

## 프로젝트 개요

**APPinTOSS**는 Apps in Toss 플랫폼 기반 개발 프로젝트의 중앙 저장소입니다.

**주요 구성 요소**:
- 📚 **공식 문서**: API 레퍼런스 및 개발 가이드 (239개)
- 💡 **공식 예제**: Bedrock SDK 활용 예제 프로젝트 (20+개)
- 🚀 **개발 프로젝트**: 실제 앱 개발 프로젝트

---

## 디렉토리 구조

```
APPinTOSS/                          # 루트 디렉토리
├── CLAUDE.md                       # 현재 파일 - 최상위 컨텍스트
├── REFERENCE_GUIDE.md              # 프로젝트 참조 규칙 가이드
├── TASK.md                         # 프로젝트 진행 상황
│
├── docs/                           # 📚 공식 문서 (읽기 전용)
│   ├── claude.md                   # 문서 디렉토리 가이드
│   ├── 01-intro/                   # 소개 및 시작 가이드
│   ├── 02-prepare/                 # 개발 준비
│   ├── 03-design/                  # 디자인 가이드
│   ├── 04-development/             # 개발 가이드
│   ├── 05-checklist/               # 체크리스트
│   ├── 06-analytics/               # 분석
│   ├── 07-marketing/               # 마케팅
│   ├── 08-monetization/            # 수익화
│   ├── 09-settlement/              # 정산
│   ├── 10-growth/                  # 성장
│   ├── 11-resources/               # 리소스
│   └── reference/                  # API 레퍼런스
│       ├── bedrock/                # Bedrock SDK (94개)
│       └── tds-mobile/             # TDS Mobile (67개)
│
├── example/                        # 💡 공식 예제 (읽기 전용)
│   ├── claude.md                   # 예제 디렉토리 가이드
│   ├── random-balls/               # 랜덤 볼 게임 예제
│   ├── weekly-todo-*/              # TODO 앱 예제 (jQuery, React, Vue)
│   └── with-*/                     # API 활용 예제 (21개)
│
└── project/                        # 🚀 개발 프로젝트 (읽기/쓰기)
    └── ROULETTE/                   # ROULETTE 프로젝트
        └── CLAUDE.md               # 프로젝트 컨텍스트
```

---

## 계층적 컨텍스트 시스템

이 프로젝트는 **3단계 계층적 참조 구조**를 사용합니다:

```
📁 APPinTOSS/CLAUDE.md (루트 - 전체 프로젝트 개요)
│
├─📁 docs/claude.md (문서 디렉토리 - 239개 문서 가이드)
│  ├─ 01-intro/claude.md (이해하기 - 플랫폼 소개)
│  ├─ 02-prepare/claude.md (시작하기 - 콘솔 등록)
│  ├─ 03-design/claude.md (디자인 - UI/UX 가이드)
│  ├─ 04-development/claude.md (개발 - 환경 구축)
│  ├─ 05-checklist/claude.md (검수 - 출시 가이드)
│  ├─ 06-analytics/claude.md (분석 - 데이터 로깅)
│  ├─ 07-marketing/claude.md (마케팅 - 홍보 도구)
│  ├─ 09-settlement/claude.md (정산 - 수익 정산)
│  ├─ 10-growth/claude.md (성장 - 최적화 전략)
│  ├─ 11-resources/claude.md (참고자료 - 보도자료)
│  └─ reference/claude.md (API 레퍼런스)
│     └─ bedrock/claude.md (Bedrock SDK - 94개 API)
│
├─📁 example/claude.md (예제 디렉토리 - 20+ 예제 가이드)
│
└─📁 project/*/CLAUDE.md (개별 프로젝트 가이드)
```

### 📖 필수 읽기 순서

#### 🎯 프로젝트 시작 전 (필수)
1. **이 파일** (CLAUDE.md) - 전체 구조 이해
2. **[QUICK_REFERENCE.md](QUICK_REFERENCE.md)** - 빠른 참조 가이드 ⭐
3. **[docs/01-intro/claude.md](docs/01-intro/claude.md)** - 플랫폼 이해
4. **[docs/02-prepare/claude.md](docs/02-prepare/claude.md)** - 콘솔 등록

#### 🎨 디자인 단계
5. **[docs/03-design/claude.md](docs/03-design/claude.md)** - UI/UX 가이드

#### 💻 개발 단계
6. **[docs/04-development/claude.md](docs/04-development/claude.md)** - 개발 환경
7. **[docs/reference/bedrock/claude.md](docs/reference/bedrock/claude.md)** - API 레퍼런스
8. **[example/claude.md](example/claude.md)** - 예제 코드

#### ✅ 출시 단계
9. **[docs/05-checklist/claude.md](docs/05-checklist/claude.md)** - 검수 가이드

### 🔄 컨텍스트 참조 원칙

1. **상향 참조**: 하위 디렉토리는 상위 claude.md를 먼저 읽기
2. **계층 명시**: 각 claude.md는 상위 컨텍스트 경로 명시
3. **빠른 탐색**: 각 디렉토리의 claude.md에서 핵심 문서 파악
4. **전체 규칙**: REFERENCE_GUIDE.md에서 참조 워크플로우 확인

---

## 필수 지시사항

### 언어 규칙
- **모든 문서 및 커뮤니케이션**: 한글로 작성
- **코드, 파일명, 변수명**: 영어로 유지
- **Claude의 사고 과정**: 한글로 표현

### 작업 추적
- **TASK.md**: 프로젝트 진행 상황 및 다음 작업 계획
- **TodoWrite**: 복잡한 작업의 단계별 진행 추적
- **Serena MCP**: 세션 메모리 및 프로젝트 컨텍스트 (필요시)

### ⚠️ TASK.md 사용 규칙 (임시 - 리팩토링 작업 중)

**작업 기간**: 2025-10-28 ~ 완료 시까지

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

4. **검토 필요 사항 표시**
   - 사용자 의견이 필요한 항목 명시
   - 여러 옵션 중 선택이 필요한 경우 표시

**삭제 시점**:
- 사용자가 명시적으로 삭제 지시할 때까지 유지
- 리팩토링 작업 완료 후에도 사용자 지시 전까지 보존

**현재 작업**: docs와 example 디렉토리의 계층구조 리팩토링
**목표**: 공식 문서 기반 올바른 계층구조 재구축 및 프로젝트 타입 구분 시스템 구축

---

## 디렉토리별 역할 및 접근 권한

| 디렉토리 | 역할 | 접근 권한 | 관리 주체 |
|---------|------|----------|-----------|
| `/docs` | API 레퍼런스 및 가이드 문서 | 읽기 전용 | 루트 레벨 |
| `/example` | 공식 예제 코드 | 읽기 전용 | Git 저장소 |
| `/project` | 개발 프로젝트 | 읽기/쓰기 | 각 프로젝트 |

### 📚 docs/ - 공식 문서 (읽기 전용)

**목적**: Apps in Toss 개발자 문서 저장소

**구성**:
- 가이드 문서: 78개
- Bedrock SDK API: 94개
- TDS Mobile: 67개

**원본 출처**:
- 가이드: https://developers-apps-in-toss.toss.im
- Bedrock SDK: https://developers-apps-in-toss.toss.im/reference/bedrock
- TDS Mobile: https://tossmini-docs.toss.im/tds-mobile

**세부 가이드**: [docs/claude.md](docs/claude.md)

### 💡 example/ - 공식 예제 (읽기 전용)

**목적**: Apps in Toss 공식 예제 코드 저장소

**구성**:
- 기본 앱: 3개 (random-balls, TODO 앱 3종)
- API 예제: 21개 (Bedrock SDK 활용)

**원본 출처**:
- 공식 저장소: https://github.com/toss/apps-in-toss-examples
- 개발자센터: https://developers-apps-in-toss.toss.im

**세부 가이드**: [example/claude.md](example/claude.md)

### 🚀 project/ - 개발 프로젝트 (읽기/쓰기)

**목적**: 실제 앱 개발 프로젝트 저장소

**접근 권한**: 각 프로젝트는 독립적으로 개발 가능

**프로젝트 가이드**:
- [ROULETTE 프로젝트](project/ROULETTE/CLAUDE.md)

---

## 개발 워크플로우

### 1. 프로젝트 시작

```bash
# 1. project 디렉토리에 새 프로젝트 생성
cd /Users/a/Documents/Team-jane/APPinTOSS/project
mkdir my-new-app
cd my-new-app

# 2. 필요한 예제 코드 복사 (선택사항)
cp -r ../../example/weekly-todo-react/* .

# 3. CLAUDE.md 생성 (이 문서 참조)
vim CLAUDE.md

# 4. 의존성 설치 및 초기화
npm install
```

### 2. 개발 중 참조 패턴

**API 사용 전**:
```bash
# 1. API 문서 확인
cat ../../docs/reference/bedrock/[category]/[api-name].md

# 2. 예제 코드 확인
cat ../../example/with-[feature]/src/App.tsx

# 3. 프로젝트에 구현
vim src/[component].tsx
```

**TDS 컴포넌트 사용**:
```bash
# 1. TDS Mobile 문서 확인
cat ../../docs/reference/tds-mobile/components/[component].md

# 2. 프로젝트에 적용
vim src/[component].tsx
```

### 3. 지속적인 참조

```bash
# 개발 가이드 참조
cat ../../docs/04-development/*.md

# 디자인 가이드라인
cat ../../docs/03-design/*.md

# 마케팅 정책
cat ../../docs/07-marketing/*.md

# 전체 참조 규칙
cat ../../REFERENCE_GUIDE.md
```

---

## 참조 베스트 프랙티스

### ✅ 권장사항

1. **문서 우선 참조**
   - API 사용 전 반드시 해당 문서 먼저 확인
   - 함수 시그니처, 파라미터, 반환 타입 정확히 파악

2. **예제 코드 활용**
   - 문서만으로 이해 어려울 때 예제 코드 참조
   - 공식 예제의 패턴을 따라 구현

3. **프로젝트 독립성**
   - 각 프로젝트는 독립적으로 개발
   - docs/example 디렉토리는 절대 수정 금지

4. **버전 확인**
   - Bedrock API 문서에서 최소 지원 버전 확인
   - TDS Mobile v2 마이그레이션 가이드 참조

### ❌ 주의사항

1. **문서/예제 직접 수정 금지**
   - `/docs`와 `/example`은 읽기 전용
   - 수정이 필요한 경우 루트 레벨에서 관리

2. **복사 후 참조 끊기**
   - 예제 코드 복사 후 독립적으로 개발
   - 예제 디렉토리 직접 수정 금지

3. **상대 경로 하드코딩 방지**
   - 문서/예제 경로를 코드에 하드코딩하지 않기
   - 필요시 스크립트로 자동화

---

## MCP 도구 활용

### 문서 수집 작업
- **Playwright MCP**: 웹 페이지 탐색 및 구조 파악
- **WebFetch**: HTML → Markdown 변환
- **Sequential MCP**: 복잡한 다단계 분석 (--ultrathink)

### 프로젝트 관리
- **Serena MCP**: 세션 메모리 및 프로젝트 컨텍스트
- **TodoWrite**: 복잡한 작업 단계 추적
- **Context7 MCP**: 공식 문서 패턴 참조

### 예제 및 개발
- **Magic MCP**: UI 컴포넌트 생성 (하위 프로젝트용)
- **Morphllm MCP**: 패턴 기반 코드 변환 (필요시)

---

## 하위 컨텍스트 가이드

- **[문서 디렉토리 가이드](docs/claude.md)**: docs/ 세부 사용 규칙
- **[예제 디렉토리 가이드](example/claude.md)**: example/ 세부 사용 규칙
- **[참조 규칙 가이드](REFERENCE_GUIDE.md)**: 전체 참조 워크플로우
- **[ROULETTE 프로젝트](project/ROULETTE/CLAUDE.md)**: ROULETTE 프로젝트 가이드

---

## 업데이트 규칙

### 문서 업데이트

```bash
# 루트 레벨에서만 수행
cd /Users/a/Documents/Team-jane/APPinTOSS

# 문서 수정 또는 추가
# 예: 새로운 API 문서 추가
# docs/reference/bedrock/new-api/newFunction.md

# TASK.md에 기록
vim TASK.md
```

### 예제 업데이트

```bash
# 공식 저장소에서 최신 변경사항 가져오기
cd /Users/a/Documents/Team-jane/APPinTOSS/example
git pull origin main

# 하위 프로젝트에서 업데이트 확인
cd ../project/my-new-app
# 변경사항 확인 후 필요시 코드 업데이트
```

---

## 기술적 제약사항

### 이미지 처리
- **제약**: Claude는 8,000px 초과 이미지를 처리할 수 없음
- **해결**: 모든 이미지는 원본 URL로 참조
- **형식**: `![alt텍스트](원본 URL)`

### 문서 형식
- **마크다운**: GitHub-flavored Markdown 사용
- **코드 블록**: 언어 명시 필수 (```typescript, ```javascript 등)
- **제목 계층**: H1은 페이지 제목, H2 이하는 섹션 구분

### Git 관리
- **루트**: 별도 Git 저장소 (선택)
- **/example**: Git 서브모듈 또는 독립 관리
- **/docs**: Git으로 버전 관리 권장

---

## 유지보수 지침

### 정기 작업
1. **월 1회**: 공식 문서 사이트 변경사항 확인
2. **주 1회**: example 저장소 업데이트 확인
3. **필요시**: TASK.md 정리 및 아카이빙

### 문서 추가/수정
```bash
# 1. 새 API 발견 시
cd docs/reference/bedrock/new-category/
# 새 문서 작성

# 2. TASK.md 업데이트
vim ../../../TASK.md

# 3. docs/claude.md 업데이트 (목록 추가)
vim ../claude.md
```

### 문제 발생 시
1. **문서 오류**: TASK.md에 기록 후 원본 확인
2. **예제 동작 불가**: GitHub 이슈 확인
3. **구조 변경 필요**: 루트 CLAUDE.md부터 업데이트

---

## 문의 및 기여

### 문서 개선 제안
- 문서 내용 오류나 개선 제안은 TASK.md에 기록
- 원본 출처: https://developers-apps-in-toss.toss.im

### 예제 코드 이슈
- 공식 저장소: https://github.com/toss/apps-in-toss-examples
- 이슈는 공식 저장소에 직접 제보

---

**마지막 업데이트**: 2025-10-28
**변경 이력**: 계층적 참조 시스템 강화 + 실무 지침 통합 (언어 규칙, MCP 도구, 기술 제약사항, 유지보수 가이드)
