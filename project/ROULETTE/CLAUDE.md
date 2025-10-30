# ROULETTE - Apps in Toss 프로젝트

> **프로젝트 타입**: WebView
> **UI 라이브러리**: TDS Mobile + Tailwind CSS (하이브리드)
> **프레임워크**: @apps-in-toss/web-framework
> **설명**: 룰렛으로 단체 식사 메뉴 결정
> **최종 업데이트**: 2025-10-28
> **상위 문서**: [../../CLAUDE.md](../../CLAUDE.md) (APPinTOSS 프로젝트 루트)

---

## ✅ 기술 스택 검증

**자동 감지 결과** (package.json 기준):
- ✅ `@apps-in-toss/web-framework@1.1.2` - WebView 타입 확인됨
- ✅ `@toss/tds-mobile@^2.1.2` - TDS Mobile 설치 완료
- ✅ `@toss/tds-mobile-ait@^2.1.2` - AIT Provider 설치 완료
- ✅ `@emotion/react@^11.14.0` - Emotion 스타일링 엔진
- ✅ `next@14.2.0` - Next.js Static Export 구성 완료
- ✅ `react@18.2.0`, `react-dom@18.2.0` - WebView이므로 정상
- ✅ `tailwindcss@^3.4.0` - 커스텀 UI용 유지

**UI 라이브러리 전략** (하이브리드 접근):
- **TDS Mobile**: 표준 UI 컴포넌트 (Button, Dialog 등)
- **Tailwind CSS**: 커스텀 UI (룰렛 휠, 특수 레이아웃 등)
- **참조**: [../../docs/reference/tds-mobile/](../../docs/reference/tds-mobile/)

**마이그레이션 현황**:
- [x] TDS Mobile 설치: `npm install @toss/tds-mobile @toss/tds-mobile-ait @emotion/react`
- [x] Provider 설정: `TDSMobileAITProvider` in layout.tsx
- [x] RouletteButton → TDS Mobile Button 전환 완료
- [ ] 추가 컴포넌트는 필요시 점진적 마이그레이션

---

## 📚 문서 계층 구조

### 상위 참조 문서 (읽기 전용)
```
../../                          # APPinTOSS 프로젝트 루트
├── CLAUDE.md                   # 루트 프로젝트 컨텍스트
├── docs/                       # Apps in Toss 표준 문서 (참조 필수)
│   ├── reference/bedrock/      # Bedrock SDK API 문서
│   │   ├── ads/                # ✅ 광고 API (loadAppsInTossAdMob, showAppsInTossAdMob)
│   │   ├── analytics/          # Analytics API
│   │   ├── permission/         # 권한 관리
│   │   └── navigation/         # 네비게이션 제어
│   └── reference/tds-mobile/   # TDS Mobile 디자인 시스템
└── example/                    # Apps in Toss 예제 프로젝트 (참조 필수)
    ├── with-interstitial-ad/   # ✅ 전면형 광고 예제
    ├── with-rewarded-ad/       # ✅ 보상형 광고 예제
    └── with-location-once/     # GPS 위치 예제
```

**참조 규칙**:
- `../../docs/` - Apps in Toss 표준 문서, 읽기 전용
- `../../example/` - 공식 예제 코드, 참조 전용
- 모든 Bedrock SDK 사용 시 반드시 `../../docs/reference/bedrock/` 확인
- 광고 구현 시 `../../example/with-*-ad/` 예제 참조 필수

### 현재 프로젝트 문서 (읽기/쓰기)
```
./                              # ROULETTE 프로젝트 루트
├── CLAUDE.md                   # 현재 파일 (프로젝트 컨텍스트)
├── TASK.md                     # 작업 진행 현황 (실시간 업데이트)
├── README.md                   # 프로젝트 소개
├── docs/                       # ROULETTE 프로젝트 문서
│   ├── PRD.md                  # 제품 요구사항 정의서
│   ├── TECHNICAL_SPEC.md       # 기술 사양서
│   └── DEVELOPMENT_GUIDE.md    # 개발 가이드
└── src/                        # 소스 코드
```

---

## 🎯 프로젝트 개요

**프로젝트명**: ROULETTE
**목적**: 단체 식사 메뉴 선택을 돕는 룰렛 앱 + GPS 기반 맛집 추천 + 광고 수익화
**플랫폼**: Apps in Toss (WebView)
**개발 상태**: 🚀 개발 진행 중 (Sprint 0 완료, Sprint 1 진행)

### 핵심 기능
1. **테마별 룰렛**: 회식, 데이트, 배달, 술집 (각 6개 메뉴)
2. **GPS 기반 검색**: Kakao Local API로 현재 위치 주변 맛집 검색
3. **지도 표시**: Kakao Maps로 검색 결과 시각화
4. **광고 수익화**: 일일 무료 스핀 + 광고 스핀 모델

### 수익 모델 (최적화 완료)
- **하루 3회 무료 스핀** → 전면형 광고 (eCPM ₩5,000)
- **추가 스핀** → 보상형 광고 시청 (eCPM ₩10,000)
- **검색 반경 확대** → 보상형 광고 (eCPM ₩10,000)
- **예상 수익** (DAU 20k): ₩16,800,000/월
- **손익분기점**: DAU 36명 (매우 낮음)

---

## 🏗️ 기술 스택

### Core
- **Framework**: Next.js 14 (Static Export for WebView)
- **Language**: TypeScript 5.3
- **Styling**: Tailwind CSS 3.4

### Apps in Toss
- **Framework**: `@apps-in-toss/web-framework@1.1.2`
- **UI Library**:
  - **TDS Mobile** `@toss/tds-mobile@^2.1.2` - 표준 UI 컴포넌트
  - **Tailwind CSS** `^3.4.0` - 커스텀 UI 및 레이아웃
- **Provider**: `TDSMobileAITProvider` (layout.tsx)
- **SDK**: Bedrock SDK
- **참조**: `../../docs/reference/bedrock/`, `../../docs/reference/tds-mobile/`
- **예제**: `../../example/with-interstitial-ad/`, `../../example/with-rewarded-ad/`

### APIs
- **Kakao Maps**: JavaScript SDK (클라이언트)
- **Kakao Local**: REST API (프록시 통해 서버에서 호출)

### State Management
- **Server State**: TanStack Query (React Query)
- **Client State**: React Context + Hooks
- **Validation**: Zod

---

## 📂 프로젝트 구조

```
ROULETTE/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── page.tsx            # 홈 (테마 선택)
│   │   ├── roulette/           # 룰렛 화면
│   │   │   └── page.tsx
│   │   └── map/                # 지도 화면
│   │       └── page.tsx
│   │
│   ├── components/             # UI 컴포넌트
│   │   ├── roulette/
│   │   │   ├── RouletteWheel.tsx       # 룰렛 UI
│   │   │   ├── RouletteButton.tsx      # 스핀 버튼
│   │   │   └── RouletteResult.tsx      # 결과 표시
│   │   ├── map/
│   │   │   ├── KakaoMap.tsx            # 지도 컴포넌트
│   │   │   └── PlaceList.tsx           # 장소 리스트
│   │   └── common/
│   │       └── ThemeSelector.tsx       # 테마 선택
│   │
│   ├── hooks/                  # Custom Hooks
│   │   ├── useRouletteSpinLimit.ts     # ✅ 일일 스핀 제한
│   │   ├── useRouletteAd.ts            # ✅ 보상형 광고 (스핀)
│   │   ├── useInterstitialAd.ts        # ✅ 전면형 광고
│   │   ├── useKakaoMap.ts              # Kakao Maps 로더
│   │   └── usePlaceSearch.ts           # 장소 검색
│   │
│   ├── libs/                   # 유틸리티
│   │   ├── kakao/
│   │   │   ├── maps.ts         # Maps SDK 로더
│   │   │   └── local.ts        # Local API 래퍼
│   │   ├── roulette.ts         # 룰렛 로직 (난수 생성)
│   │   └── storage.ts          # localStorage 래퍼
│   │
│   └── types/                  # 타입 정의
│       ├── roulette.ts         # 테마, 메뉴 타입
│       ├── kakao.ts            # Kakao API 타입
│       └── ad.ts               # 광고 타입
│
├── public/                     # 정적 파일
│   └── images/                 # 이미지 에셋
│
├── docs/                       # 프로젝트 문서
│   ├── PRD.md                  # 제품 요구사항
│   ├── TECHNICAL_SPEC.md       # 기술 사양서
│   └── DEVELOPMENT_GUIDE.md    # 개발 가이드
│
├── package.json                # ✅ 의존성 설정
├── tsconfig.json               # ✅ TypeScript 설정
├── next.config.js              # ✅ Next.js 설정 (Static Export)
├── tailwind.config.ts          # ✅ Tailwind 설정
├── TASK.md                     # ✅ 작업 진행 현황
└── CLAUDE.md                   # 현재 파일
```

**현재 상태**: Sprint 0 완료 (프로젝트 초기화, 광고 훅 구현), Sprint 1 진행 중

---

## 🔑 환경 변수

```bash
# .env (실제 값은 .env.example 참조)

# Kakao API
NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY=      # Kakao Maps JS SDK
KAKAO_REST_API_KEY=                    # Kakao Local REST API

# Apps in Toss
NEXT_PUBLIC_INTOSS_APP_NAME=roulette
NEXT_PUBLIC_INTOSS_DEBUG=true

# AdMob
NEXT_PUBLIC_INTERSTITIAL_AD_GROUP_ID=  # 전면형 광고 그룹 ID
NEXT_PUBLIC_REWARDED_AD_GROUP_ID=      # 보상형 광고 그룹 ID
```

---

## 📚 참조 문서

### 필수 참조
- [TASK.md](TASK.md) - 작업 진행 현황 및 계획 (실시간 업데이트)
- [docs/PRD.md](docs/PRD.md) - 제품 요구사항
- [docs/TECHNICAL_SPEC.md](docs/TECHNICAL_SPEC.md) - 기술 사양서
- [docs/DEVELOPMENT_GUIDE.md](docs/DEVELOPMENT_GUIDE.md) - 개발 가이드

### Bedrock SDK 참조 (../../docs/reference/bedrock/)
- **광고**: `ads/loadAppsInTossAdMob.md`, `ads/showAppsInTossAdMob.md`
- **위치**: `get-current-location.md`
- **권한**: `permission.md`
- **네비게이션**: `routing.md`

### 예제 코드 참조 (../../example/)
- **전면형 광고**: `with-interstitial-ad/` (✅ 참조 완료)
- **보상형 광고**: `with-rewarded-ad/` (✅ 참조 완료)
- **위치 정보**: `with-location-once/`

---

## ⚠️ 중요 규칙

### 코드 작성
- ✅ 모든 코드/주석: **영어**
- ✅ 문서/설명: **한글**
- ✅ Bedrock SDK 사용 시 반드시 `../../docs/reference/bedrock/` 확인
- ✅ 광고 API는 최신 표준 사용 (`loadAppsInTossAdMob`, `showAppsInTossAdMob`)
- ❌ Deprecated API 사용 금지 (`loadAdMobInterstitialAd`, etc.)

### UX Writing Guidelines ⚠️
**모든 사용자 대면 텍스트는 Apps in Toss UX Writing 가이드를 준수해야 합니다.**

**필수 규칙**:
- ✅ **해요체 사용**: 모든 문구에 "~해요" 어미 사용 (상황/맥락 불문)
  - ❌ "~습니다", "~했습니다", "~없습니다" → ✅ "~해요", "~했어요", "~없어요"
  - ❌ "검색 중...", "로딩 중..." → ✅ "검색하고 있어요", "불러오고 있어요"
- ✅ **능동적 말하기**: 능동형 문장 사용
  - ❌ "됐어요" → ✅ "했어요"
  - ❌ "완료됐어요" → ✅ "완료했어요"
- ✅ **긍정적 말하기**: 부정형 최소화, 사용자가 할 수 있는 것을 알려주기
  - ❌ "검색 결과가 없어요" → ✅ "주변에 음식점을 찾지 못했어요"
  - 대안 제시: "더 넓은 범위 검색" 버튼 제공
- ✅ **캐주얼한 경어**: 과도한 존댓말 지양
  - ❌ "~시겠어요?", "~께" → ✅ "~해요", "~에게"

**참조 문서**: [../../docs/03-design/03-ux-writing.md](../../docs/03-design/03-ux-writing.md)

**적용 범위**:
- UI 컴포넌트의 모든 텍스트 (버튼, 레이블, 메시지 등)
- 에러 메시지 및 안내 문구
- 로딩 상태 텍스트
- JSDoc 주석의 예제 코드 내 텍스트

### 프로젝트 타입 주의사항 ⚠️
- ✅ **WebView 프로젝트**: 현재 Tailwind CSS 사용 중
- 🎯 **TDS Mobile 권장**: `@toss/tds-mobile` 마이그레이션 예정
- ❌ **React Native 라이브러리 금지**: `@toss/tds-react-native` 절대 사용 금지
- ❌ **React Native 패키지 금지**: `react-native` 관련 패키지 사용 불가
- ✅ **react-dom 사용 가능**: WebView이므로 DOM API 정상 동작
- 📚 **참조**: [../../docs/reference/tds-mobile/](../../docs/reference/tds-mobile/)

**상위 표준 준수**:
- WebView 앱과 React Native 앱의 UI 라이브러리는 완전히 다름
- 잘못된 라이브러리 사용 시 런타임 오류 발생
- 자세한 내용: [../../CLAUDE.md - 프로젝트 타입 구분 시스템](../../CLAUDE.md#프로젝트-타입-구분-시스템)

### 파일 위치
- ✅ 모든 개발은 `./` (ROULETTE 루트)에서만 진행
- ❌ `../../` (상위 디렉토리) 수정 금지 (읽기 전용)

### 문서 참조
- ✅ Bedrock API: `../../docs/reference/bedrock/`
- ✅ 예제 코드: `../../example/`
- ✅ TDS Mobile: `../../docs/reference/tds-mobile/`
- ✅ 프로젝트 문서: `./docs/`
- ✅ 작업 현황: `./TASK.md` (실시간 업데이트)

### 개발 워크플로우

**Step 1: 작업 확인**
```bash
# TASK.md 확인 → 현재 진행 중인 작업 파악
# docs/ 참조 → PRD, TECHNICAL_SPEC 확인
# ../../docs/reference/ 참조 → Bedrock API 문서 확인
```

**Step 2: 구현**
```bash
# 컴포넌트/훅 작성
# 표준 API 준수 (../../docs/reference/bedrock/)
# 예제 참조 (../../example/)
```

**Step 3: 문서 업데이트**
```bash
# TASK.md 체크박스 업데이트
# CLAUDE.md 필요 시 수정
```

**Step 4: 커밋**
```bash
git add .
git commit -m "feat: 컴포넌트명 구현"
```

---

## 📝 작업 진행 상황

### ✅ 완료된 작업
- [x] 프로젝트 초기화 (package.json, tsconfig.json, next.config.js 등)
- [x] 광고 통합 (useRouletteSpinLimit, useRouletteAd, useInterstitialAd)
- [x] 디렉토리 구조 생성
- [x] 문서화 (PRD, TECHNICAL_SPEC, DEVELOPMENT_GUIDE)
- [x] TASK.md 실시간 업데이트 시스템

### 🔄 진행 중인 작업
- 룰렛 컴포넌트 구현 (RouletteWheel, RouletteButton)
- 테마 데이터 구조 설계

### ⏳ 예정된 작업
- Kakao Maps/Local API 통합
- 지도 컴포넌트 구현
- 앱 배포 및 테스트

---

## 🎨 핵심 컴포넌트 설계

### 1. 광고 통합 (✅ 완료)

#### useRouletteSpinLimit Hook
```typescript
const { freeSpins, hasFreeSpins, consumeFreeSpin } = useRouletteSpinLimit();
// 하루 3회 무료 스핀, localStorage 자동 관리, 자정 리셋
```

#### useRouletteAd Hook
```typescript
const { showAdForSpin } = useRouletteAd();
// 보상형 광고 → 스핀 권한 부여
```

#### useInterstitialAd Hook
```typescript
const { showInterstitialAd } = useInterstitialAd();
// 전면형 광고 → 화면 전환
```

### 2. 룰렛 시스템 (진행 중)

#### RouletteWheel Component
```typescript
interface RouletteWheelProps {
  items: string[];           // 메뉴 아이템 배열
  selectedIndex: number;     // 선택된 인덱스
  spinning: boolean;         // 스핀 중 여부
}
// crypto.getRandomValues() 사용 (공정성)
```

#### RouletteButton Component
```typescript
interface RouletteButtonProps {
  onSpin: () => void;
  disabled: boolean;
  freeSpins: number;
}
// freeSpins > 0 → "룰렛 돌리기" (무료)
// freeSpins === 0 → "광고 보고 돌리기"
```

---

## 🚀 빠른 시작

```bash
# 1. 의존성 설치
npm install

# 2. 환경변수 설정
cp .env.example .env
# .env 파일 편집 (Kakao API 키, AdMob ID 입력)

# 3. 개발 서버 실행
npm run dev

# 4. 브라우저 접속
# http://localhost:3000
```

---

## 📖 관련 문서

### 상위 문서
- [../../CLAUDE.md](../../CLAUDE.md) - APPinTOSS 프로젝트 루트 컨텍스트
- [../../REFERENCE_GUIDE.md](../../REFERENCE_GUIDE.md) - 참조 규칙 가이드

### 현재 프로젝트 문서
- [TASK.md](TASK.md) - 작업 진행 현황 (실시간 업데이트)
- [README.md](README.md) - 프로젝트 소개
- [docs/PRD.md](docs/PRD.md) - 제품 요구사항
- [docs/TECHNICAL_SPEC.md](docs/TECHNICAL_SPEC.md) - 기술 사양서
- [docs/DEVELOPMENT_GUIDE.md](docs/DEVELOPMENT_GUIDE.md) - 개발 가이드

---

**프로젝트 생성일**: 2025-10-24
**마지막 업데이트**: 2025-10-28
**버전**: 1.2
**작성자**: Claude Code

**변경 이력**:
- v1.2 (2025-10-28): TDS Mobile 마이그레이션 완료 - 의존성 설치, Provider 설정, RouletteButton 전환
- v1.1 (2025-10-28): 상위 표준 준수 - 프로젝트 타입 명시, 기술 스택 검증 추가, UI 라이브러리 주의사항 추가
- v1.0 (2025-10-24): 초기 버전 생성
