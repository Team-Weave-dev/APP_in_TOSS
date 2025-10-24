# Claude 작업 컨텍스트 및 규칙 (루트)

> **계층적 문서 구조**: 이 파일은 최상위 컨텍스트입니다. 하위 디렉토리의 `claude.md`를 참조하여 세부 컨텍스트를 확보하세요.

---

## 프로젝트 개요

**목적**: Toss 개발자 문서를 체계적으로 수집하고, 로컬 환경에서 참조 가능한 표준 베이스로 구축

**현재 상태**:
- ✅ 문서 수집 100% 완료 (239개)
- ✅ 참조 아키텍처 구축 완료
- ✅ 예제 프로젝트 준비 완료

**프로젝트 유형**: 참조 문서 저장소 (Reference Repository)

---

## 필수 지시사항

### 언어 규칙
- **모든 문서 및 커뮤니케이션**: 한글로 작성
- **코드, 파일명, 변수명**: 영어로 유지
- **Claude의 사고 과정**: 한글로 표현

### 컨텍스트 확보 규칙 (계층적 읽기)
```
1단계: /CLAUDE.md (루트) ← 현재 파일
2단계: /docs/claude.md (문서 디렉토리)
3단계: /example/claude.md (예제 디렉토리)
4단계: TASK.md (프로젝트 상태)
5단계: REFERENCE_GUIDE.md (참조 규칙)
```

**읽기 순서**:
1. 작업 시작 시 루트 CLAUDE.md를 먼저 읽어 전체 컨텍스트 파악
2. 작업 대상 디렉토리의 claude.md를 읽어 세부 규칙 확인
3. TASK.md를 읽어 현재 진행 상황 파악
4. 필요시 REFERENCE_GUIDE.md에서 참조 규칙 확인

### 작업 추적
- **TASK.md**: 프로젝트 진행 상황 및 다음 작업 계획
- **TodoWrite**: 복잡한 작업의 단계별 진행 추적
- **세션 관리**: Serena MCP 활용 (필요시)

---

## 프로젝트 구조

```
APPinTOSS/                     # 루트 - 표준 참조 베이스
├── CLAUDE.md                  # 현재 파일 - 최상위 컨텍스트
├── TASK.md                    # 프로젝트 상태 및 진행 계획
├── REFERENCE_GUIDE.md         # 참조 규칙 가이드
│
├── docs/                      # 문서 디렉토리 (239개)
│   ├── claude.md              # 문서 디렉토리 컨텍스트
│   ├── 01-intro/              # 가이드: 소개 (3개)
│   ├── 02-prepare/            # 가이드: 준비 (1개)
│   ├── 03-design/             # 가이드: 디자인 (9개)
│   ├── 04-development/        # 가이드: 개발 (21개)
│   ├── 05-checklist/          # 가이드: 체크리스트 (2개)
│   ├── 06-analytics/          # 가이드: 분석 (2개)
│   ├── 07-marketing/          # 가이드: 마케팅 (20개)
│   ├── 08-monetization/       # 가이드: 수익화 (12개)
│   ├── 09-settlement/         # 가이드: 정산 (1개)
│   ├── 10-growth/             # 가이드: 성장 (5개)
│   ├── 11-resources/          # 가이드: 리소스 (2개)
│   └── reference/             # API 레퍼런스
│       ├── bedrock/           # Bedrock SDK (94개)
│       └── tds-mobile/        # TDS Mobile (67개)
│
├── example/                   # 예제 디렉토리 (20+ 예제)
│   ├── claude.md              # 예제 디렉토리 컨텍스트
│   ├── README.md              # 공식 저장소 설명
│   ├── random-balls/          # 기본 앱 예제
│   ├── weekly-todo-*/         # TODO 앱 (jQuery, React, Vue)
│   ├── with-haptic-feedback/  # 햅틱 진동 예제
│   ├── with-location-*/       # 위치 정보 예제
│   └── ...                    # 기타 API 예제
│
└── projects/                  # 하위 프로젝트 (향후 생성)
    └── (개별 프로젝트 디렉토리)
```

---

## 역할 및 책임

### 루트 레벨 (현재 위치)
**역할**: 전체 프로젝트 관리 및 표준 설정

**책임**:
- 프로젝트 전체 상태 관리 (TASK.md)
- 참조 규칙 정의 (REFERENCE_GUIDE.md)
- 계층적 컨텍스트 구조 유지 (CLAUDE.md)
- 하위 디렉토리 일관성 보장

**관리 대상**:
- `/docs` - 문서 수집 및 업데이트
- `/example` - 공식 예제 동기화
- `/projects` - 하위 프로젝트 생성 및 관리 (향후)

### /docs 디렉토리
**역할**: 참조 문서 저장소 (읽기 전용)

**세부 컨텍스트**: `/docs/claude.md` 참조

**관리 방식**:
- 원본 출처에서 주기적으로 업데이트
- 하위 프로젝트는 읽기 전용으로 참조
- 문서 수정은 루트 레벨에서만 수행

### /example 디렉토리
**역할**: 공식 예제 코드 저장소 (읽기 전용)

**세부 컨텍스트**: `/example/claude.md` 참조

**관리 방식**:
- Git 저장소로 관리 (https://github.com/toss/apps-in-toss-examples)
- 주기적으로 `git pull`로 최신화
- 하위 프로젝트는 복사하여 사용

---

## 작업 흐름

### 1. 일반 작업 시작
```bash
# Step 1: 루트 컨텍스트 확보
cat CLAUDE.md

# Step 2: 프로젝트 상태 확인
cat TASK.md

# Step 3: 대상 디렉토리 컨텍스트 확보
cat docs/claude.md      # 문서 작업 시
cat example/claude.md   # 예제 작업 시

# Step 4: 필요시 참조 규칙 확인
cat REFERENCE_GUIDE.md
```

### 2. 문서 업데이트 작업
```bash
# 1. 현재 상태 확인
cat TASK.md
cat docs/claude.md

# 2. 원본 출처에서 수집
# (Playwright, WebFetch 등 활용)

# 3. 마크다운으로 변환 및 저장
# docs/reference/bedrock/new-api.md

# 4. 진행 상황 기록
vim TASK.md
```

### 3. 예제 동기화 작업
```bash
# 1. 최신 변경사항 확인
cd example
git status
git log --oneline -5

# 2. 업데이트 가져오기
git pull origin main

# 3. 변경사항 확인 및 기록
cd ..
vim TASK.md
```

### 4. 하위 프로젝트 생성 (향후)
```bash
# 1. 프로젝트 디렉토리 생성
mkdir -p projects/my-app
cd projects/my-app

# 2. 예제 복사 (선택)
cp -r ../../example/weekly-todo-react/* .

# 3. 참조 규칙 확인
cat ../../REFERENCE_GUIDE.md

# 4. 개발 시작
npm install
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

## 하위 claude.md 파일 역할

### /docs/claude.md
**역할**: 문서 디렉토리 세부 규칙

**포함 내용**:
- 디렉토리 구조 상세 설명
- 각 문서의 원본 URL 매핑
- 문서 업데이트 절차
- 하위 프로젝트 참조 방법

**참조 시점**: 문서 작업 또는 문서 참조 시

### /example/claude.md
**역할**: 예제 디렉토리 세부 규칙

**포함 내용**:
- 예제 프로젝트 목록 및 설명
- 각 예제의 관련 API 문서 링크
- 예제 사용 방법 및 주의사항
- Git 동기화 절차

**참조 시점**: 예제 활용 또는 동기화 시

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

## 참고 링크

**공식 출처**:
- 개발자 문서: https://developers-apps-in-toss.toss.im
- TDS Mobile: https://tossmini-docs.toss.im/tds-mobile
- 예제 저장소: https://github.com/toss/apps-in-toss-examples

**관련 문서**:
- [TASK.md](./TASK.md) - 프로젝트 진행 상황
- [REFERENCE_GUIDE.md](./REFERENCE_GUIDE.md) - 참조 규칙 가이드
- [docs/claude.md](./docs/claude.md) - 문서 디렉토리 컨텍스트
- [example/claude.md](./example/claude.md) - 예제 디렉토리 컨텍스트

---

## 주요 규칙 요약

1. **계층적 읽기**: 루트 → 하위 디렉토리 → TASK.md 순서로 컨텍스트 확보
2. **읽기 전용 원칙**: /docs와 /example은 하위 프로젝트에서 읽기만 가능
3. **루트 관리**: 모든 문서/예제 수정은 루트 레벨에서만 수행
4. **언어 일관성**: 문서는 한글, 코드는 영어
5. **상태 추적**: TASK.md로 모든 변경사항 기록

---

**마지막 업데이트**: 2025-10-24
**프로젝트 상태**: 문서 수집 완료, 유지보수 단계
