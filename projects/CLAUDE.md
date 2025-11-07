# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

# PPT Maker 프로젝트 - 두 플랫폼 가이드

이 디렉토리에는 **두 가지 버전의 PPT Maker 프로젝트**가 있습니다.

---

## 📂 프로젝트 구조

```
projects/
├── CLAUDE.md                    # 📍 현재 문서 (허브)
├── ppt-maker-in-toss/           # Apps in Toss 미니앱 버전
│   └── CLAUDE.md                # → 앱인토스 가이드
└── ppt-maker-next/              # 독립 웹 서비스 버전
    └── CLAUDE.md                # → 웹 서비스 가이드
```

---

## 🎯 두 프로젝트 비교

### ppt-maker-in-toss (앱인토스 전용)

**플랫폼**: Apps in Toss 미니앱
**UI**: TDS Mobile (@toss/tds-mobile)
**배포**: Apps in Toss 스토어
**인증**: Bedrock SDK (향후)
**저장**: Bedrock Storage (key-value)
**결제**: Apps in Toss IAP (향후)

### ppt-maker-next (독립 웹 서비스)

**플랫폼**: Vercel + Supabase
**UI**: shadcn/ui + Radix UI
**배포**: Vercel
**인증**: NextAuth.js (GitHub, Google OAuth)
**저장**: Supabase PostgreSQL + Prisma
**결제**: 자체 구독/크레딧 시스템
**권한**: Zanzibar ReBAC

---

## ⚡ 빠른 명령어

### ppt-maker-in-toss

```bash
cd ppt-maker-in-toss
npm run dev          # 개발 서버 (포트 3000)
npm run build        # 프로덕션 빌드
npm run lint         # ESLint 검사
npx tsc --noEmit     # TypeScript 타입 체크
```

### ppt-maker-next

```bash
cd ppt-maker-next
npm run dev          # 개발 서버 (포트 3000)
npm run build        # 프로덕션 빌드
npm run lint         # ESLint 검사
npx tsc --noEmit     # TypeScript 타입 체크

# Prisma (데이터베이스)
npx prisma generate         # Prisma Client 생성
npx prisma migrate dev      # 개발 마이그레이션
npx prisma studio           # Prisma Studio (DB GUI)
```

---

## 🧩 공통점과 차이점

### ✅ 공통 코드 영역 (100% 재사용 가능)

두 프로젝트는 **핵심 비즈니스 로직을 100% 공유**합니다.

| 영역 | 경로 | 설명 |
|------|------|------|
| **AI 파이프라인** | `services/gemini/`, `services/perplexity/` | Gemini + Perplexity 3단계 파이프라인 |
| **템플릿 시스템** | `services/template/` | 21개 슬라이드 타입, HTML 생성 엔진 |
| **슬라이드 변환** | `services/slide/` | UnifiedPPTJSON → HTMLSlide 변환 |
| **타입 정의** | `types/` | 모든 TypeScript 타입 |
| **디자인 시스템** | `constants/design.ts` | TDS Colors, 타이포그래피, 레이아웃 |
| **상태 관리** | `store/` | Zustand 기반 (저장소만 다름) |

**핵심 성과**:
- ✅ **비용 98% 절감**: 100원 → 2원 (AI API 최적화)
- ✅ **무제한 편집**: 클라이언트 템플릿 엔진 (재생성 0원)
- ✅ **21개 슬라이드 타입**: Title, Content, Bullet, Section, Stats, Chart 등

### ❌ 플랫폼별 차이점

| 기능 | ppt-maker-in-toss | ppt-maker-next |
|------|-------------------|----------------|
| **UI 라이브러리** | TDS Mobile | shadcn/ui + Radix UI |
| **인증** | Bedrock SDK (향후) | NextAuth.js v4 (GitHub, Google) |
| **데이터베이스** | Bedrock Storage (key-value) | Supabase PostgreSQL + Prisma (8 테이블) |
| **권한 관리** | 단순 소유권 | Zanzibar ReBAC |
| **결제/수익화** | Apps in Toss IAP (향후) | 자체 구독 (Free/Pro/Premium) + 크레딧 |
| **API Routes** | `/api/research/` (프록시만) | NextAuth + Prisma CRUD APIs |
| **배포** | Apps in Toss 스토어 | Vercel |

---

## 🗺️ 기능별 경로 매핑

### AI 파이프라인 (공통 - 100%)

| 기능 | 경로 | 설명 |
|------|------|------|
| 자료 조사 | `services/perplexity/researcher.ts` | Perplexity Sonar/Reasoning (~160-200원) |
| 콘텐츠 생성 | `services/gemini/content-generator.ts` | Gemini Flash/Pro (~2원) |
| JSON 파싱 | `services/gemini/parser.ts` | UnifiedPPTJSON 변환 |
| 슬라이드 변환 | `services/slide/converter.ts` | JSON → HTMLSlide |

### 템플릿 시스템 (공통 - 100%)

| 기능 | 경로 | 설명 |
|------|------|------|
| 템플릿 엔진 | `services/template/engine/TemplateEngine.ts` | HTML 생성 엔진 |
| 템플릿 레지스트리 | `services/template/engine/TemplateRegistry.ts` | 템플릿 관리 |
| 기본 템플릿 | `services/template/base/toss-default/` | 4개 기본 타입 |
| 프리미엄 템플릿 | `services/template/premium/` | 동적 로딩 |

### 프론트엔드 페이지 (UI만 다름)

| 기능 | ppt-maker-in-toss | ppt-maker-next |
|------|-------------------|----------------|
| 홈 화면 | `app/page.tsx` (TDS) | `app/page.tsx` (shadcn) |
| 텍스트 입력 | `app/input/page.tsx` (TDS) | `app/input/page.tsx` (shadcn) |
| 슬라이드 뷰어 | `app/viewer/page.tsx` (TDS) | `app/viewer/page.tsx` (shadcn) |
| 편집기 | (향후) | `app/editor/page.tsx` (shadcn) |
| 인증 | (향후) | `app/(auth)/login/`, `app/(auth)/signup/` |
| 구독 관리 | (향후 IAP) | `app/subscription/page.tsx` |
| 크레딧 관리 | (향후) | `app/credits/page.tsx` |

### 백엔드 인프라 (완전히 다름)

| 기능 | ppt-maker-in-toss | ppt-maker-next |
|------|-------------------|----------------|
| 인증 API | Bedrock SDK (향후) | `app/api/auth/[...nextauth]/route.ts` |
| 프리젠테이션 CRUD | Bedrock Storage | `app/api/presentations/`, `lib/prisma.ts` |
| 구독 API | (향후) | `app/api/subscriptions/`, `prisma/schema.prisma` |
| 크레딧 API | (향후) | `app/api/credits/` |
| 권한 관리 | 단순 소유권 | `lib/permissions.ts` (Zanzibar) |

---

## 🏗️ 아키텍처 큰 그림

### AI 3단계 파이프라인 (공통)

```
사용자 텍스트 입력
    ↓
1️⃣ Perplexity AI (선택)
    → 웹 자료 조사 (~160-200원)
    ↓
2️⃣ Gemini Flash/Pro
    → 콘텐츠 + JSON 생성 (~2원)
    → UnifiedPPTJSON 형식 직접 생성
    ↓
3️⃣ 클라이언트 템플릿 엔진
    → HTML 생성 (0원)
    → 21개 슬라이드 타입 지원
    ↓
[저장소]
    ↙         ↘
Bedrock Storage  Supabase PostgreSQL
(앱인토스)       (웹 서비스)
```

**비용 절감 효과**:
- 기존: ~100원 (Gemini Pro 콘텐츠 생성 + 파싱 + HTML 생성)
- 개선: ~2원 (Gemini Flash 통합 + 클라이언트 템플릿)
- **절감률: 98%**

### 데이터 구조 (공통)

```typescript
// UnifiedPPTJSON (편집 가능한 구조화된 데이터)
interface UnifiedPPTJSON {
  slides: Slide[]  // 21개 타입 지원
}

// Presentation (저장 형식 - 플랫폼별 다름)
interface Presentation {
  id: string
  title: string
  slideData: UnifiedPPTJSON  // 편집 가능
  slides: HTMLSlide[]        // 렌더링용
  templateId: string
  createdAt: number
  updatedAt?: number
}
```

### 저장소 비교

**앱인토스 (Bedrock Storage)**:
```typescript
// key-value 저장소
await setItem(`ppt_${timestamp}`, presentation)
const data = await getItem(`ppt_${timestamp}`)
```

**웹 서비스 (Supabase + Prisma)**:
```typescript
// PostgreSQL (8개 테이블)
await prisma.presentation.create({
  data: {
    userId: session.user.id,
    title: "제목",
    slideData: unifiedPPTJSON,
    metadata: { ... }
  }
})
```

---

## 🚀 개발 워크플로우

### 공통 코드 수정 시 (AI, 템플릿, 타입)

1. **services/, types/, constants/ 수정**
2. 두 프로젝트 모두 테스트
3. 각 프로젝트의 SPECIFICATION.md 업데이트

```bash
# 앱인토스 테스트
cd ppt-maker-in-toss
npm run dev
npx tsc --noEmit

# 웹 서비스 테스트
cd ppt-maker-next
npm run dev
npx tsc --noEmit
```

### 플랫폼별 코드 수정 시

**앱인토스 (app/, components/)**:
```bash
cd ppt-maker-in-toss
# TDS Mobile 컴포넌트 사용
# Bedrock SDK 연동 (향후)
```

**웹 서비스 (app/, components/, lib/, prisma/)**:
```bash
cd ppt-maker-next
# shadcn/ui 컴포넌트 사용
# Prisma 스키마 수정 → npx prisma migrate dev
# Zanzibar 권한 정책 업데이트
```

---

## 📝 릴리즈 노트 관리

### 커밋 시 릴리즈 노트 업데이트 (필수)

**모든 커밋 시 해당 프로젝트의 RELEASE_NOTES.md를 업데이트해야 합니다.**

#### 업데이트 절차

1. **커밋 타입 분류**:
   - `feat:` → ✨ Features
   - `fix:` → 🐛 Fixes
   - `style:`, `ui:` → 🎨 UI/UX
   - `docs:` → 📝 Documentation
   - `refactor:`, `chore:`, `build:` → 🔧 Technical

2. **형식**:
```markdown
### [카테고리 아이콘] [카테고리명]

#### YYYY-MM-DD
- **[변경사항 요약]** (커밋해시)
  - 세부 내용 1
  - 세부 내용 2
```

3. **추가 위치**: 각 프로젝트의 `RELEASE_NOTES.md` → `[Unreleased]` 섹션
4. **날짜 헤더**: 당일 첫 커밋인 경우 `#### YYYY-MM-DD` 추가
5. **커밋 해시**: 7자리 단축 해시만 기록 (URL 제외)

#### 예시

```bash
# ppt-maker-in-toss 커밋 시
cd ppt-maker-in-toss
# 1. 코드 변경
# 2. RELEASE_NOTES.md 업데이트
# 3. git commit

# ppt-maker-next 커밋 시
cd ppt-maker-next
# 1. 코드 변경
# 2. RELEASE_NOTES.md 업데이트
# 3. git commit
```

#### 상세 규칙

각 프로젝트의 CLAUDE.md "필수 규칙" 섹션을 참조하세요:
- [ppt-maker-in-toss/CLAUDE.md - 릴리즈 노트 규칙](ppt-maker-in-toss/CLAUDE.md#5-릴리즈-노트-업데이트-규칙-필수)
- [ppt-maker-next/CLAUDE.md - 릴리즈 노트 규칙](ppt-maker-next/CLAUDE.md#5-릴리즈-노트-업데이트-규칙-필수)

---

## 🔄 공통 코드 마이그레이션 관리

### Migration Queue 시스템

**두 프로젝트는 핵심 비즈니스 로직을 100% 공유**하므로, 한쪽에서 공통 코드를 변경하면 다른 쪽에도 동기화해야 합니다.

#### 공통 코드 영역 (100% 재사용)

| 영역 | 경로 | 설명 |
|------|------|------|
| **AI 파이프라인** | `services/gemini/`, `services/perplexity/` | Gemini + Perplexity 3단계 파이프라인 |
| **템플릿 시스템** | `services/template/` | 21개 슬라이드 타입, HTML 생성 엔진 |
| **슬라이드 변환** | `services/slide/` | UnifiedPPTJSON → HTMLSlide 변환 |
| **타입 정의** | `types/` | 모든 TypeScript 타입 |
| **디자인 시스템** | `constants/design.ts` | TDS Colors, 타이포그래피, 레이아웃 |

#### 마이그레이션 워크플로우

```
1️⃣ 소스 프로젝트에서 공통 코드 개발
    ↓
2️⃣ 커밋 및 RELEASE_NOTES.md 업데이트
    ↓
3️⃣ MIGRATION_QUEUE.md에 마이그레이션 항목 추가
    ↓ (대기 중 상태)
4️⃣ 타겟 프로젝트로 코드 복사 및 적용
    ↓
5️⃣ 테스트 및 검증
    ↓
6️⃣ 타겟 프로젝트 커밋
    ↓
7️⃣ MIGRATION_QUEUE.md에서 완료 처리
```

#### 추적 문서

**[MIGRATION_QUEUE.md](MIGRATION_QUEUE.md)** - 마이그레이션 대기 및 완료 항목 추적

**섹션 구성**:
- 📋 **대기 중 (Pending)**: 마이그레이션이 필요한 항목
- ✅ **완료 (Completed)**: 마이그레이션 완료된 항목
- 📊 **통계**: 대기/완료 현황

**항목 형식**:
```markdown
### [카테고리] 기능명

- **소스**: ppt-maker-in-toss | ppt-maker-next
- **타겟**: ppt-maker-next | ppt-maker-in-toss
- **영역**: services/gemini/
- **소스 커밋**: (7자리 해시)
- **날짜**: YYYY-MM-DD
- **설명**: 변경 내용 요약

**마이그레이션 체크리스트**:
- [ ] 코드 파일 복사
- [ ] 의존성 확인
- [ ] 타입 호환성 검증
- [ ] 테스트 작성 및 실행
- [ ] 문서 업데이트
- [ ] 타겟 프로젝트 커밋
```

#### 상세 규칙

각 프로젝트의 CLAUDE.md "필수 규칙" 섹션을 참조하세요:
- [ppt-maker-in-toss/CLAUDE.md - 마이그레이션 규칙](ppt-maker-in-toss/CLAUDE.md#6-공통-코드-마이그레이션-규칙-필수)
- [ppt-maker-next/CLAUDE.md - 마이그레이션 규칙](ppt-maker-next/CLAUDE.md#6-공통-코드-마이그레이션-규칙-필수)

#### 예시 시나리오

**시나리오 1**: ppt-maker-next에서 Gemini 모델 업그레이드

```bash
# 1. ppt-maker-next에서 개발
cd ppt-maker-next
# services/gemini/content-generator.ts 수정
git commit -m "feat: Gemini Flash 1.5 Pro 업그레이드"

# 2. MIGRATION_QUEUE.md에 항목 추가
vim ../MIGRATION_QUEUE.md
# [📋 대기 중 (Pending)] 섹션에 추가

# 3. ppt-maker-in-toss로 마이그레이션
cd ../ppt-maker-in-toss
# 코드 복사 및 테스트
git commit -m "feat: Gemini Flash 1.5 Pro 업그레이드 (from ppt-maker-next)"

# 4. MIGRATION_QUEUE.md에서 완료 처리
vim ../MIGRATION_QUEUE.md
# [✅ 완료 (Completed)] 섹션으로 이동
```

**시나리오 2**: ppt-maker-in-toss에서 새로운 SlideType 추가

```bash
# 1. ppt-maker-in-toss에서 개발
cd ppt-maker-in-toss
# types/slide.ts, services/template/ 수정
git commit -m "feat: QuoteSlide 타입 추가"

# 2. MIGRATION_QUEUE.md에 항목 추가
vim ../MIGRATION_QUEUE.md

# 3. ppt-maker-next로 마이그레이션
cd ../ppt-maker-next
# 코드 복사 및 테스트
git commit -m "feat: QuoteSlide 타입 추가 (from ppt-maker-in-toss)"

# 4. 완료 처리
vim ../MIGRATION_QUEUE.md
```

---

## 📚 상세 문서

### 단일 진실 공급원 (Single Source of Truth)

각 프로젝트의 `/docs/SPECIFICATION.md`가 기술 명세의 유일한 권위 있는 출처입니다.

- **[ppt-maker-in-toss/docs/SPECIFICATION.md](ppt-maker-in-toss/docs/SPECIFICATION.md)**
  - Apps in Toss 플랫폼 아키텍처
  - Bedrock SDK 연동 계획
  - TDS Mobile 디자인 시스템

- **[ppt-maker-next/docs/SPECIFICATION.md](ppt-maker-next/docs/SPECIFICATION.md)**
  - Vercel + Supabase 아키텍처
  - NextAuth.js 인증 시스템
  - Prisma 데이터베이스 스키마 (8 테이블)
  - Zanzibar 권한 시스템

### 각 프로젝트 가이드

- **[ppt-maker-in-toss/CLAUDE.md](ppt-maker-in-toss/CLAUDE.md)**
  - 앱인토스 개발 환경 설정
  - TDS Mobile 컴포넌트 사용법
  - Bedrock SDK 연동 가이드
  - apps-in-toss 스킬 활용

- **[ppt-maker-next/CLAUDE.md](ppt-maker-next/CLAUDE.md)**
  - 웹 서비스 개발 환경 설정
  - NextAuth.js 인증 흐름
  - Prisma 마이그레이션
  - Zanzibar 권한 체크

### 릴리즈 노트

각 프로젝트의 버전별 변경사항을 추적합니다.

- **[ppt-maker-in-toss/RELEASE_NOTES.md](ppt-maker-in-toss/RELEASE_NOTES.md)**
  - Apps in Toss 미니앱 버전 변경사항
  - 커밋별 UI/UX 개선, 기능 추가, 버그 수정 내역
  - 버전별 릴리즈 히스토리

- **[ppt-maker-next/RELEASE_NOTES.md](ppt-maker-next/RELEASE_NOTES.md)**
  - 웹 서비스 버전 변경사항
  - 커밋별 기능 추가, 버그 수정, 문서 업데이트 내역
  - 버전별 릴리즈 히스토리

---

## ⚠️ 주의사항

### 1. UI 라이브러리 절대 혼용 금지

```typescript
// ❌ 잘못된 예
// ppt-maker-in-toss에서 shadcn/ui 사용
import { Button } from "@/components/ui/button"  // ❌

// ✅ 올바른 예
import { Button } from "@toss/tds-mobile"  // ✅
```

```typescript
// ❌ 잘못된 예
// ppt-maker-next에서 TDS Mobile 사용
import { Button } from "@toss/tds-mobile"  // ❌

// ✅ 올바른 예
import { Button } from "@/components/ui/button"  // ✅
```

### 2. 환경 변수 관리

**공통 (두 프로젝트 모두)**:
```env
NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_key
PERPLEXITY_API_KEY=your_perplexity_key  # 서버 전용
```

**웹 서비스 전용 (ppt-maker-next)**:
```env
DATABASE_URL=postgresql://...
NEXTAUTH_SECRET=your_secret
GITHUB_CLIENT_ID=...
GITHUB_CLIENT_SECRET=...
SUPABASE_SERVICE_ROLE_KEY=...  # 절대 클라이언트 노출 금지
```

### 3. 공통 코드 수정 시 주의

`services/`, `types/`, `constants/` 수정 시:
1. 두 프로젝트 모두 영향을 받음
2. 양쪽 프로젝트 모두 테스트 필수
3. 타입 호환성 유지 필수

---

## 🧪 테스트

### 전체 슬라이드 타입 테스트

각 프로젝트의 `docs/TEST_PROMPT.md` 참조

### TypeScript 타입 체크

```bash
# 앱인토스
cd ppt-maker-in-toss && npx tsc --noEmit

# 웹 서비스
cd ppt-maker-next && npx tsc --noEmit
```

---

## 📊 프로젝트 현황

| Phase | ppt-maker-in-toss | ppt-maker-next |
|-------|-------------------|----------------|
| **Phase 1**: 템플릿 시스템 | ✅ 완료 | ✅ 완료 |
| **Phase 2**: 기본 편집 | ✅ 완료 | ✅ 완료 |
| **Phase 3**: 웹 서비스 전환 | N/A | ✅ 완료 |
| **Phase 4**: 인증/DB | 🚧 Bedrock 대기 | ✅ 완료 |
| **Phase 5**: 구독/크레딧 | 🚧 IAP 계획 | 🚧 구현 중 |
| **Phase 6**: 고급 편집 | 📝 계획 | 📝 계획 |

---

## 🤝 개발 가이드

### 새로운 슬라이드 타입 추가 (공통 코드)

1. `types/slide.ts`에 타입 정의
2. `services/template/base/toss-default/[Type]Slide.ts` 구현
3. `services/template/engine/TemplateRegistry.ts`에 등록
4. 양쪽 프로젝트에서 테스트
5. `docs/SPECIFICATION.md` 업데이트

### 새로운 페이지 추가 (플랫폼별)

**앱인토스**:
```bash
cd ppt-maker-in-toss
# 1. app/[page]/page.tsx 생성 (TDS Mobile 사용)
# 2. TDS Mobile 컴포넌트로 UI 구성
# 3. CLAUDE.md 업데이트
```

**웹 서비스**:
```bash
cd ppt-maker-next
# 1. app/[page]/page.tsx 생성 (shadcn/ui 사용)
# 2. shadcn/ui 컴포넌트로 UI 구성
# 3. NextAuth 세션 확인 (필요시)
# 4. Zanzibar 권한 체크 (필요시)
# 5. CLAUDE.md 업데이트
```

---

**문서 버전**: 1.0
**최종 수정**: 2025-11-08
**유지보수**: 이 문서는 두 프로젝트의 허브 역할을 합니다. 주요 변경 시 업데이트해주세요.
