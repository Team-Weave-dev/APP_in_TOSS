# Apps in Toss 프로젝트 표준 규칙

> **목적**: 모든 하위 프로젝트가 준수해야 하는 필수 규칙 정의
> **작성일**: 2025-10-30
> **적용 대상**: 모든 project/*/CLAUDE.md 파일

---

## 📌 규칙 적용 원칙

### 우선순위
1. **🔴 필수 (MUST)**: 반드시 준수, 위반 시 런타임 오류 또는 UX 불일치
2. **🟡 권장 (SHOULD)**: 강력히 권장, 표준 준수를 위해 필요
3. **🟢 선택 (MAY)**: 프로젝트 상황에 따라 선택

### 계층 구조
```
루트 CLAUDE.md (표준 정의)
├─ STANDARD_RULES.md (본 문서 - 규칙 상세)
└─ project/*/CLAUDE.md (규칙 준수 및 참조)
```

---

## 🔴 필수 규칙 (MUST)

### 1. UX Writing 규칙

**출처**: [docs/03-design/03-ux-writing.md](docs/03-design/03-ux-writing.md)

**적용 범위**: 모든 사용자 대면 텍스트
- UI 컴포넌트의 모든 텍스트 (버튼, 레이블, 메시지 등)
- 에러 메시지 및 안내 문구
- 로딩 상태 텍스트
- JSDoc 주석의 예제 코드 내 텍스트

#### 1.1. ~해요체 사용 (최우선)

**규칙**: 상황, 맥락을 불문하고 모든 문구에 "~해요" 어미를 사용합니다.

**올바른 예시**:
```typescript
// ✅ 올바름
<Button>룰렛 돌리기</Button>
<p>검색하고 있어요...</p>
<p>주변 맛집을 찾고 있어요</p>
<ErrorMessage>연결이 끊겼어요. 다시 시도해주세요.</ErrorMessage>
```

**잘못된 예시**:
```typescript
// ❌ 잘못됨
<Button>룰렛 돌리기 시작</Button>  // 명사형
<p>검색 중...</p>                  // 명사형
<p>검색하고 있습니다...</p>         // 습니다체
<ErrorMessage>연결이 끊겼습니다.</ErrorMessage>  // 습니다체
```

**변환 규칙**:
- ❌ ~습니다, ~했습니다, ~없습니다 → ✅ ~해요, ~했어요, ~없어요
- ❌ 검색 중..., 로딩 중... → ✅ 검색하고 있어요, 불러오고 있어요
- ❌ 완료, 성공 → ✅ 완료했어요, 성공했어요

#### 1.2. 능동적 말하기

**규칙**: 최대한 능동형 문장을 사용합니다.

**올바른 예시**:
```typescript
// ✅ 올바름
"룰렛을 돌렸어요"
"검색을 완료했어요"
"저장했어요"
```

**잘못된 예시**:
```typescript
// ❌ 잘못됨
"룰렛이 돌아갔어요"    // 수동형
"검색이 완료됐어요"    // 수동형
"저장됐어요"           // 수동형
```

**변환 규칙**:
- ❌ 됐어요 → ✅ 했어요
- ❌ 완료됐어요 → ✅ 완료했어요
- ❌ 저장됐어요 → ✅ 저장했어요

**예외 사항** (수동형 허용):
- ⚠️ 서비스 종료, 기간 만료: "자산 조회 기간이 곧 만료돼요"
- ⚠️ 사용자에게 미치는 영향: "토스뱅크 대출로 갈아타면 원래 대출이 해지돼요"

#### 1.3. 긍정적 말하기

**규칙**: 부정형 문장을 최소화하고, 사용자가 할 수 있는 것을 알려줍니다.

**올바른 예시**:
```typescript
// ✅ 올바름
"주변에 음식점을 찾지 못했어요. 더 넓은 범위에서 검색해보세요."
"1km 이내 검색 결과가 없어요. 3km로 범위를 넓혀볼까요?"
```

**잘못된 예시**:
```typescript
// ❌ 잘못됨
"검색 결과가 없어요."          // 부정형, 대안 없음
"음식점을 찾을 수 없어요."     // 부정형, 대안 없음
```

**변환 규칙**:
- ❌ 없어요 (단독) → ✅ ~찾지 못했어요 + 대안 제시
- ❌ 할 수 없어요 → ✅ ~하려면 [방법] 필요해요

### 2. 프로젝트 타입 구분

**출처**: [루트 CLAUDE.md - 프로젝트 타입 구분 시스템](CLAUDE.md#프로젝트-타입-구분-시스템)

**규칙**: 각 프로젝트는 타입에 맞는 UI 라이브러리만 사용해야 합니다.

#### 2.1. 타입 정의

| 타입 | UI 라이브러리 | 필수 의존성 | 프레임워크 |
|------|--------------|------------|-----------|
| **Type 1: WebView** | `@toss/tds-mobile` | `react-dom` | `@apps-in-toss/web-framework` |
| **Type 2: React Native** | `@toss/tds-react-native` | `react-native` | Granite (`@granite-js/react-native`) |
| **Type 3: Unity** | Unity UI | `react-native-unity-view` | Unity Engine |

#### 2.2. 혼용 금지 규칙

**절대 금지**:
- ❌ WebView 앱에서 `@toss/tds-react-native` 사용
- ❌ React Native 앱에서 `@toss/tds-mobile` 사용
- ❌ React Native 앱에서 `react-dom` 사용
- ❌ WebView 앱에서 `react-native` 사용

**이유**: 런타임 오류 발생 (DOM API vs Native API 불일치)

#### 2.3. CLAUDE.md 타입 선언

프로젝트 CLAUDE.md 상단에 타입을 명시합니다:

```markdown
# [프로젝트명] - Apps in Toss 프로젝트

> **프로젝트 타입**: WebView | React Native | Unity
> **UI 라이브러리**: TDS Mobile | TDS React Native | Unity UI
> **프레임워크**: @apps-in-toss/web-framework | Granite | Unity

---

## ✅ 기술 스택 검증

**자동 감지 결과** (package.json 기준):
- ✅ [타입] 확인됨
- ✅ [UI 라이브러리] 사용 올바름
```

### 3. 언어 규칙

**출처**: [루트 CLAUDE.md - 필수 지시사항](CLAUDE.md#필수-지시사항)

#### 3.1. 문서 및 커뮤니케이션
- **언어**: 한글
- **대상**:
  - 모든 .md 파일
  - 주석 중 설명/설명 부분
  - 사용자 대면 텍스트

**올바른 예시**:
```markdown
# 프로젝트 개요

이 프로젝트는 룰렛으로 식사 메뉴를 결정하는 앱입니다.
```

```typescript
/**
 * 룰렛을 돌려 랜덤 메뉴를 선택합니다.
 * @returns 선택된 메뉴 이름
 */
function spinRoulette(): string {
  // 구현...
}
```

#### 3.2. 코드, 파일명, 변수명
- **언어**: 영어
- **대상**:
  - 파일명
  - 변수명, 함수명, 클래스명
  - 타입명
  - API 엔드포인트

**올바른 예시**:
```typescript
// ✅ 올바름
interface RouletteTheme {
  id: string;
  name: string;
  items: string[];
}

function selectRandomMenuItem(items: string[]): string {
  // ...
}
```

**잘못된 예시**:
```typescript
// ❌ 잘못됨
interface 룰렛테마 {  // 한글 타입명
  id: string;
  이름: string;      // 한글 속성명
  items: string[];
}

function 랜덤메뉴선택(items: string[]): string {  // 한글 함수명
  // ...
}
```

### 4. 문서/예제 접근 권한

**출처**: [루트 CLAUDE.md - 디렉토리별 역할 및 접근 권한](CLAUDE.md#디렉토리별-역할-및-접근-권한)

#### 4.1. 읽기 전용 디렉토리
- **docs/**: 공식 문서 (239개)
- **example/**: 공식 예제 (20+개)

**규칙**:
- ✅ 참조 및 복사 가능
- ❌ 직접 수정 절대 금지
- ✅ 필요한 내용은 프로젝트 내 별도 파일로 복사

#### 4.2. 읽기/쓰기 디렉토리
- **project/*/**: 각 프로젝트 디렉토리

**규칙**:
- ✅ 자유로운 수정 가능
- ✅ 독립적 개발
- ❌ 상위 디렉토리(docs/, example/) 수정 금지

### 5. 계층적 참조 원칙

**출처**: [루트 CLAUDE.md - 컨텍스트 참조 원칙](CLAUDE.md#컨텍스트-참조-원칙)

#### 5.1. 상향 참조
- 하위 디렉토리는 상위 claude.md를 먼저 읽어야 합니다
- CLAUDE.md 상단에 상위 문서 경로를 명시합니다

**올바른 예시**:
```markdown
# [프로젝트명] - Apps in Toss 프로젝트

> **상위 문서**: [../../CLAUDE.md](../../CLAUDE.md) (APPinTOSS 프로젝트 루트)
```

#### 5.2. 계층 명시
각 CLAUDE.md는 자신의 위치와 상위 컨텍스트를 명확히 표시합니다.

**계층 구조**:
```
루트 CLAUDE.md
├─ docs/claude.md
│  ├─ docs/01-intro/claude.md
│  └─ docs/reference/claude.md
├─ example/claude.md
└─ project/*/CLAUDE.md  ← 프로젝트 문서 (이 규칙 준수)
```

---

## 🟡 권장 규칙 (SHOULD)

### 1. Bedrock SDK 사용 시 문서 확인

**권장 사항**: Bedrock API 사용 전 반드시 공식 문서를 확인합니다.

**참조**: [docs/reference/bedrock/](docs/reference/bedrock/)

**예시**:
```bash
# API 사용 전 문서 확인
cat ../../docs/reference/bedrock/ads/loadAppsInTossAdMob.md

# 예제 코드 확인
cat ../../example/with-interstitial-ad/src/App.tsx
```

### 2. 버전 확인

**권장 사항**: Bedrock API 및 TDS 라이브러리의 최소 지원 버전을 확인합니다.

**확인 방법**:
- API 문서의 "Minimum Version" 섹션 확인
- TDS v2 마이그레이션 가이드 참조

### 3. 프로젝트 독립성

**권장 사항**: 각 프로젝트는 독립적으로 개발되어야 합니다.

**규칙**:
- ✅ 공통 로직은 프로젝트 내부에 복사
- ❌ 상위 디렉토리의 코드를 직접 참조하지 않음
- ✅ 예제 코드는 복사 후 수정

---

## 🟢 선택 규칙 (MAY)

### 1. UI 라이브러리 하이브리드 사용

**상황**: WebView 프로젝트에서 TDS Mobile로 커버하기 어려운 커스텀 UI가 필요한 경우

**허용**:
- ✅ TDS Mobile + Tailwind CSS 병행 사용
- ✅ TDS Mobile + Custom CSS 병행 사용

**조건**:
- 표준 UI는 TDS Mobile 우선 사용
- 커스텀 UI는 명확한 이유가 있을 때만 사용
- CLAUDE.md에 하이브리드 전략 명시

**예시** (ROULETTE 프로젝트):
```markdown
## ✅ 기술 스택 검증

**UI 라이브러리 전략** (하이브리드 접근):
- **TDS Mobile**: 표준 UI 컴포넌트 (Button, Dialog 등)
- **Tailwind CSS**: 커스텀 UI (룰렛 휠, 특수 레이아웃 등)
```

### 2. 추가 도구 활용

**허용**:
- ✅ TanStack Query (React Query)
- ✅ Zod (Validation)
- ✅ Tailwind CSS (WebView만)
- ✅ Emotion (TDS Mobile 필수 의존성)

**조건**:
- package.json에 명시
- CLAUDE.md 기술 스택 섹션에 기록

---

## 📋 CLAUDE.md 필수 섹션

모든 프로젝트 CLAUDE.md는 다음 섹션을 포함해야 합니다:

### 1. 프로젝트 헤더
```markdown
# [프로젝트명] - Apps in Toss 프로젝트

> **프로젝트 타입**: WebView | React Native | Unity
> **UI 라이브러리**: TDS Mobile | TDS React Native | Unity UI
> **프레임워크**: @apps-in-toss/web-framework | Granite | Unity
> **상위 문서**: [../../CLAUDE.md](../../CLAUDE.md)
```

### 2. 기술 스택 검증
```markdown
## ✅ 기술 스택 검증

**자동 감지 결과** (package.json 기준):
- ✅ [타입] 확인됨
- ✅ [UI 라이브러리] 사용 올바름
```

### 3. UX Writing 규칙 (🔴 필수)
```markdown
## ⚠️ 중요 규칙

### UX Writing Guidelines

**모든 사용자 대면 텍스트는 Apps in Toss UX Writing 가이드를 준수해야 합니다.**

**필수 규칙**:
1. **~해요체 사용**: 모든 문구에 "~해요" 어미 사용
2. **능동적 말하기**: 됐어요 → 했어요
3. **긍정적 말하기**: 없어요 → 있어요 + 대안 제시

**참조**: [../../docs/03-design/03-ux-writing.md](../../docs/03-design/03-ux-writing.md)

**적용 범위**:
- UI 컴포넌트의 모든 텍스트
- 에러 메시지 및 안내 문구
- 로딩 상태 텍스트
```

### 4. 프로젝트 타입 주의사항
```markdown
### 프로젝트 타입 주의사항

- ✅ **[타입] 프로젝트**: [UI 라이브러리] 사용
- ❌ **[다른 타입] 라이브러리 금지**: [금지 라이브러리] 절대 사용 금지
- 📚 **참조**: [../../docs/reference/[library]/](../../docs/reference/[library]/)
```

### 5. 상위 표준 준수
```markdown
**상위 표준 준수**:
- WebView 앱과 React Native 앱의 UI 라이브러리는 완전히 다름
- 잘못된 라이브러리 사용 시 런타임 오류 발생
- 자세한 내용: [../../CLAUDE.md - 프로젝트 타입 구분 시스템](../../CLAUDE.md#프로젝트-타입-구분-시스템)
```

---

## ✅ 규칙 준수 체크리스트

프로젝트 CLAUDE.md 작성 시 아래 체크리스트를 확인하세요:

### 필수 항목 (🔴 MUST)
- [ ] 프로젝트 타입 선언 (WebView/React Native/Unity)
- [ ] UI 라이브러리 명시 및 검증
- [ ] UX Writing 규칙 섹션 포함
  - [ ] ~해요체 규칙 명시
  - [ ] 능동적 말하기 명시
  - [ ] 긍정적 말하기 명시
- [ ] 프로젝트 타입 주의사항 섹션
- [ ] 상위 문서 참조 경로 명시
- [ ] 언어 규칙 준수 (문서 한글, 코드 영어)

### 권장 항목 (🟡 SHOULD)
- [ ] 기술 스택 검증 섹션
- [ ] Bedrock SDK 참조 방법
- [ ] 예제 코드 참조 경로
- [ ] 버전 정보

### 선택 항목 (🟢 MAY)
- [ ] 하이브리드 UI 전략 (필요 시)
- [ ] 추가 도구 목록
- [ ] 프로젝트별 커스텀 규칙

---

## 📚 참조 문서

### 공식 문서
- [UX Writing 가이드](docs/03-design/03-ux-writing.md) - ~해요체 규칙 상세
- [프로젝트 타입 시스템](CLAUDE.md#프로젝트-타입-구분-시스템) - 타입별 기술 스택
- [참조 규칙 가이드](REFERENCE_GUIDE.md) - 전체 참조 워크플로우

### 템플릿
- [WebView 프로젝트 템플릿](templates/webview-project-CLAUDE.md.template)
- [React Native 프로젝트 템플릿](templates/react-native-project-CLAUDE.md.template)
- [Unity 프로젝트 템플릿](templates/unity-project-CLAUDE.md.template)

### 예시
- [ROULETTE 프로젝트](project/ROULETTE/CLAUDE.md) - 모범 사례 (UX Writing 규칙 잘 명시됨)

---

**마지막 업데이트**: 2025-10-30
**버전**: 1.0
**담당자**: Claude Code

**변경 이력**:
- v1.0 (2025-10-30): 초기 버전 생성 - 5개 필수 규칙, 3개 권장 규칙, 2개 선택 규칙 정의
