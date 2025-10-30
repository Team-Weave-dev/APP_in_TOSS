# 기술 사양서 (Technical Specification)
# Roulette for Group Meals

> **프로젝트**: ROULETTE
> **버전**: 1.0
> **작성일**: 2025-10-24
> **관련 문서**: [CLAUDE.md](../CLAUDE.md) | [PRD](PRD.md) | [개발 가이드](DEVELOPMENT_GUIDE.md)

---

## 문서 개요

이 문서는 ROULETTE 프로젝트의 기술 스택, 아키텍처, API 연동 등 상세 기술 사양을 정의합니다.

---

## 1. 기술 스택 (Technology Stack)

### 1.1 프론트엔드

**프레임워크**:
- React 18
- Next.js 14 (Static Export)
- TypeScript

**렌더링 전략**:
- CSR (Client-Side Rendering) 중심
- SSR 비활성화
- Static Export로 정적 호스팅

**이유**: WebView 안정성 및 용량 최적화

### 1.2 상태 관리

- **React Query (TanStack Query)**: 서버 상태 관리
- **React Context**: 경량 글로벌 상태 (테마, 설정)

### 1.3 스타일링

- **Tailwind CSS**: 유틸리티 우선 CSS
- 또는 루트 디자인 토큰 시스템 상속

### 1.4 지도 및 장소 검색

- **Kakao Maps JS SDK**: 지도 렌더링, 마커, 오버레이
- **Kakao Local REST API**: 키워드/카테고리 장소 검색

### 1.5 유틸리티 라이브러리

- **Zod**: 입력/응답 스키마 검증
- **dayjs**: 시간 처리
- **uuid**: 고유 ID 생성

### 1.6 로깅 및 분석 (선택)

- PostHog 또는 Amplitude
- WebView 정책 확인 후 결정

### 1.7 품질 도구

- **ESLint**: 코드 린팅
- **Prettier**: 코드 포맷팅
- **TypeScript**: 타입 안전성

### 1.8 배포

- **Vercel** (Static Hosting)
- 또는 **S3 + CloudFront**

### 1.9 Apps in Toss 연계

- **Bedrock SDK**: Apps in Toss 네이티브 API
- 딥링크: `intoss://{appName}/path`
- WebView 옵션: `granite.config.ts`

---

## 2. 디렉토리 구조

```
ROULETTE/
├── .env.example                    # 환경변수 템플릿
├── .gitignore                      # Git 제외 파일
├── CLAUDE.md                       # 프로젝트 컨텍스트 가이드
├── README.md                       # 프로젝트 소개
├── package.json                    # 의존성 관리
├── tsconfig.json                   # TypeScript 설정
├── next.config.js                  # Next.js 설정 (Static Export)
├── tailwind.config.js              # Tailwind 설정
├── granite.config.ts               # Apps in Toss WebView 설정
│
├── docs/                           # 📚 프로젝트 문서
│   ├── PRD.md                      # 제품 요구사항
│   ├── TECHNICAL_SPEC.md           # 현재 파일
│   ├── DEVELOPMENT_GUIDE.md        # 개발 가이드
│   └── Dev-docs                    # 원본 참조 (GPT 작성)
│
├── public/                         # 정적 파일
│   ├── images/                     # 이미지
│   ├── icons/                      # 아이콘
│   └── favicon.ico                 # 파비콘
│
└── src/                            # 소스 코드
    ├── app/                        # Next.js App Router
    │   ├── layout.tsx              # 루트 레이아웃
    │   ├── page.tsx                # 홈: 테마 선택 + 룰렛
    │   ├── map/                    # 지도/목록 화면
    │   │   └── page.tsx
    │   └── result/                 # 결과 화면
    │       └── page.tsx
    │
    ├── components/                 # UI 컴포넌트
    │   ├── roulette/
    │   │   ├── RouletteWheel.tsx   # 룰렛 휠
    │   │   └── SpinButton.tsx      # 스핀 버튼
    │   ├── theme/
    │   │   └── ThemeSelector.tsx   # 테마 선택
    │   ├── map/
    │   │   ├── MapView.tsx         # 지도 뷰
    │   │   └── StoreList.tsx       # 가게 목록
    │   └── common/
    │       ├── Button.tsx          # 공통 버튼
    │       ├── Card.tsx            # 카드
    │       └── Loading.tsx         # 로딩 스피너
    │
    ├── hooks/                      # 커스텀 훅
    │   ├── useLocation.ts          # 위치 정보
    │   ├── usePlacesQuery.ts       # 장소 검색
    │   ├── useRoulette.ts          # 룰렛 로직
    │   └── useDeepLink.ts          # 딥링크 처리
    │
    ├── libs/                       # 유틸리티 라이브러리
    │   ├── kakao.ts                # Kakao SDK 로더
    │   ├── intoss.ts               # Apps in Toss 연동
    │   ├── random.ts               # 난수 생성
    │   └── storage.ts              # 로컬 저장소
    │
    ├── server/                     # API 라우트 (프록시)
    │   └── api/
    │       └── places/
    │           └── route.ts        # Kakao Local 프록시
    │
    ├── types/                      # 타입 정의
    │   ├── theme.ts                # 테마 타입
    │   ├── place.ts                # 장소 타입
    │   └── menu.ts                 # 메뉴 타입
    │
    ├── data/                       # 정적 데이터
    │   └── themes.json             # 테마별 메뉴 리스트
    │
    └── styles/                     # 스타일
        └── globals.css             # 전역 스타일
```

---

## 3. 환경변수

### `.env.example`

```bash
# Kakao API
NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY=your_javascript_key
KAKAO_REST_API_KEY=your_rest_api_key          # 서버 프록시용

# Apps in Toss
NEXT_PUBLIC_INTOSS_APP_NAME=roulette
NEXT_PUBLIC_INTOSS_DEBUG=true                  # 개발 중 디버깅

# 기본 설정
NEXT_PUBLIC_DEFAULT_RADIUS_M=1500              # 검색 반경 (미터)
NEXT_PUBLIC_DEFAULT_LAT=37.5665                # 기본 위도 (서울시청)
NEXT_PUBLIC_DEFAULT_LNG=126.9780               # 기본 경도
```

### 환경변수 설명

| 변수명 | 설명 | 필수 여부 |
|--------|------|----------|
| `NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY` | Kakao Maps JS SDK 키 | 필수 |
| `KAKAO_REST_API_KEY` | Kakao Local REST API 키 (서버용) | 필수 |
| `NEXT_PUBLIC_INTOSS_APP_NAME` | Apps in Toss 앱 이름 | 필수 |
| `NEXT_PUBLIC_INTOSS_DEBUG` | 디버깅 모드 | 선택 |
| `NEXT_PUBLIC_DEFAULT_RADIUS_M` | 기본 검색 반경 | 선택 |
| `NEXT_PUBLIC_DEFAULT_LAT` | 기본 위도 | 선택 |
| `NEXT_PUBLIC_DEFAULT_LNG` | 기본 경도 | 선택 |

---

## 4. 아키텍처

### 4.1 시스템 아키텍처

```
[Apps in Toss WebView]
        │
        │ intoss://{appName}/map?theme=회식&lat=...
        ▼
[Next.js Static App (CSR)]
        │
        ├─► [Bedrock SDK] ─► GPS 위치, 햅틱, 저장소, 공유
        │
        ├─► [Kakao Maps JS SDK] ─► 지도 렌더링
        │
        └─► [API Proxy] ─► [Kakao Local REST API] ─► 장소 검색
```

### 4.2 데이터 플로우

```
1. 사용자 테마 선택
   ↓
2. 룰렛 스핀 (클라이언트 난수)
   ↓
3. 결과 확정 → 키워드 추출
   ↓
4. GPS 위치 요청 (Bedrock SDK)
   ↓
5. Kakao Local API 검색 (서버 프록시)
   ↓
6. 결과 표시 (지도 + 목록)
   ↓
7. 길안내 클릭 → Kakao Maps 앱/웹 열기
```

---

## 5. Kakao API 연동

### 5.1 Kakao Maps JS SDK

**용도**: 지도 렌더링, 마커, 인포윈도우

**설치**:
```html
<script src="//dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_JAVASCRIPT_KEY}&libraries=services"></script>
```

**주요 기능**:
- 지도 생성 및 렌더링
- 마커 표시 (현재 위치, 가게 위치)
- 인포윈도우 (가게 정보)
- 줌/팬 기능

**로더 구현**: `src/libs/kakao.ts`

```typescript
export async function loadKakao(): Promise<typeof window.kakao> {
  if (typeof window === 'undefined') throw new Error('Client only');
  if (window.kakao?.maps) return window.kakao;

  await new Promise<void>((resolve, reject) => {
    const script = document.createElement('script');
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY}&libraries=services`;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = reject;
    document.head.appendChild(script);
  });

  return window.kakao!;
}
```

### 5.2 Kakao Local REST API

**용도**: 키워드/카테고리 장소 검색

**API 엔드포인트**:
```
GET https://dapi.kakao.com/v2/local/search/keyword.json
```

**요청 파라미터**:
- `query`: 검색 키워드 (예: "삼겹살")
- `x`: 경도 (lng)
- `y`: 위도 (lat)
- `radius`: 반경 (미터, 최대 20000)
- `page`: 페이지 번호
- `size`: 결과 개수 (최대 45)

**인증**:
```
Authorization: KakaoAK ${KAKAO_REST_API_KEY}
```

**보안 고려사항**:
- ⚠️ REST API Key는 **서버 프록시로 감싸기** (필수)
- JavaScript Key는 리퍼러 제한 설정

### 5.3 서버 프록시 구현

**경로**: `src/server/api/places/route.ts`

**목적**: Kakao REST API Key 보호

**구현 예시**:
```typescript
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const PlaceQuerySchema = z.object({
  query: z.string().min(1),
  lat: z.number(),
  lng: z.number(),
  radius: z.number().optional(),
  page: z.number().optional(),
});

export async function GET(request: NextRequest) {
  try {
    const params = Object.fromEntries(request.nextUrl.searchParams);
    const validated = PlaceQuerySchema.parse({
      query: params.query,
      lat: parseFloat(params.lat),
      lng: parseFloat(params.lng),
      radius: params.radius ? parseInt(params.radius) : 1500,
      page: params.page ? parseInt(params.page) : 1,
    });

    const response = await fetch(
      `https://dapi.kakao.com/v2/local/search/keyword.json?query=${validated.query}&x=${validated.lng}&y=${validated.lat}&radius=${validated.radius}&page=${validated.page}`,
      {
        headers: {
          Authorization: `KakaoAK ${process.env.KAKAO_REST_API_KEY}`,
        },
      }
    );

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid request' },
      { status: 400 }
    );
  }
}
```

### 5.4 길안내 링크

**웹 링크**:
```
https://map.kakao.com/link/to/{장소명},{lat},{lng}
```

**구현**:
```typescript
export function getKakaoDirectionsUrl(name: string, lat: number, lng: number): string {
  return `https://map.kakao.com/link/to/${encodeURIComponent(name)},${lat},${lng}`;
}
```

---

## 6. 확률 및 룰렛 로직

### 6.1 균등 확률 보장

**요구사항**: N개 항목을 동일 확률 1/N로 선택

**난수 생성**: Web Crypto API 사용

```typescript
// src/libs/random.ts
export function uniformPick<T>(arr: T[]): T {
  const randomValue = crypto.getRandomValues(new Uint32Array(1))[0];
  const index = Math.floor((randomValue / 2**32) * arr.length);
  return arr[index];
}
```

**이유**:
- `Math.random()`보다 암호학적으로 안전
- 공정성 보장

### 6.2 룰렛 애니메이션

**구현**: `requestAnimationFrame` + CSS Transform

```typescript
function spinRoulette(items: string[], onComplete: (result: string) => void) {
  const selected = uniformPick(items);
  const duration = 3000; // 3초
  const startTime = Date.now();

  function animate() {
    const elapsed = Date.now() - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // ease-out 감속
    const eased = 1 - Math.pow(1 - progress, 3);

    // 회전 각도 계산
    const rotation = eased * (360 * 5 + itemAngle); // 5바퀴 + 목표 각도

    // CSS Transform 적용
    element.style.transform = `rotate(${rotation}deg)`;

    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      onComplete(selected);
    }
  }

  animate();
}
```

### 6.3 공정성 검증 (테스트)

```typescript
// tests/random.test.ts
describe('uniformPick', () => {
  it('should have uniform distribution', () => {
    const items = ['A', 'B', 'C', 'D', 'E'];
    const counts: Record<string, number> = {};
    const iterations = 10000;

    for (let i = 0; i < iterations; i++) {
      const result = uniformPick(items);
      counts[result] = (counts[result] || 0) + 1;
    }

    // 각 항목이 약 20% (1/5) 확률
    Object.values(counts).forEach(count => {
      const probability = count / iterations;
      expect(probability).toBeCloseTo(0.2, 1); // ±10% 허용
    });
  });
});
```

---

## 7. 성능 최적화

### 7.1 Static Export + 코드 스플리팅

**설정**: `next.config.js`

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Static Export
  images: {
    unoptimized: true, // Static Export 시 필수
  },
};

module.exports = nextConfig;
```

**코드 스플리팅**:
- 페이지별 자동 분할 (`/`, `/map`, `/result`)
- 지도 SDK는 필요 시점에 로드

### 7.2 이미지 최적화

- **포맷**: WebP, AVIF
- **아이콘**: SVG sprite
- **압축**: TinyPNG, ImageOptim

### 7.3 번들 제한

**목표**:
- 전체 번들: < 500KB (gzip)
- 개별 페이지: < 200KB

**검증**:
```bash
npm run build
# Check bundle size in .next/static/
```

### 7.4 지연 로딩

- Kakao SDK: 지도 페이지에서만 로드
- 지도 컴포넌트: Dynamic Import

```typescript
import dynamic from 'next/dynamic';

const MapView = dynamic(() => import('@/components/map/MapView'), {
  loading: () => <Loading />,
  ssr: false,
});
```

### 7.5 메모리 관리

- 마커 수 제한: 최대 50개
- 페이지네이션: 20개/페이지
- 클러스터링 고려 (향후)

---

## 8. 보안

### 8.1 API Key 관리

**JavaScript Key**:
- 환경변수: `NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY`
- 노출 허용 (리퍼러 제한 설정)

**REST API Key**:
- 환경변수: `KAKAO_REST_API_KEY`
- **서버 프록시로 보호** (필수)
- 클라이언트 노출 금지

### 8.2 HTTPS

- 전체 통신 HTTPS 강제
- Mixed Content 방지

### 8.3 CSP (Content Security Policy)

```html
<meta http-equiv="Content-Security-Policy"
      content="default-src 'self';
               script-src 'self' https://dapi.kakao.com;
               style-src 'self' 'unsafe-inline';">
```

### 8.4 위치 정보 보호

- 저장하지 않음 (메모리/세션만 사용)
- 동의 UI 명확히
- 철회 가능

---

## 9. 타입 정의

### 9.1 테마 및 메뉴

```typescript
// src/types/theme.ts
export type Theme = '회식' | '데이트' | '배달' | '술집';

export interface MenuItem {
  id: string;
  label: string;   // 예: "삼겹살", "파스타"
  weight?: number; // 기본 1 (향후 가중치 기능용)
}

export interface ThemeData {
  theme: Theme;
  items: MenuItem[];
}
```

### 9.2 장소

```typescript
// src/types/place.ts
import { z } from 'zod';

export const PlaceSchema = z.object({
  id: z.string(),
  name: z.string(),
  lat: z.number(),
  lng: z.number(),
  address: z.string().optional(),
  category: z.string().optional(),
  phone: z.string().optional(),
  url: z.string().url().optional(),
  distance: z.number().optional(), // 미터
});

export type Place = z.infer<typeof PlaceSchema>;
```

### 9.3 API 응답

```typescript
// src/types/api.ts
export interface PlacesQueryParams {
  query: string;
  lat: number;
  lng: number;
  radius?: number;
  page?: number;
}

export interface PlacesResponse {
  places: Place[];
  meta: {
    total: number;
    page: number;
    isEnd: boolean;
  };
}

export interface ApiError {
  code: string;
  message: string;
}
```

---

## 10. API 계약

### 10.1 장소 검색 API

**엔드포인트**: `GET /api/places`

**요청**:
```
GET /api/places?query=파스타&lat=37.56&lng=126.97&radius=1500&page=1
```

**응답 (성공)**:
```json
{
  "places": [
    {
      "id": "12345",
      "name": "이탈리안 레스토랑",
      "lat": 37.561,
      "lng": 126.975,
      "address": "서울시 중구 ...",
      "category": "이탈리안",
      "phone": "02-1234-5678",
      "distance": 350
    }
  ],
  "meta": {
    "total": 45,
    "page": 1,
    "isEnd": false
  }
}
```

**응답 (오류)**:
```json
{
  "error": {
    "code": "INVALID_QUERY",
    "message": "검색어를 입력하세요"
  }
}
```

---

## 11. Apps in Toss WebView 설정

### 11.1 granite.config.ts

```typescript
// granite.config.ts
export default {
  webViewProps: {
    allowsBackForwardNavigationGestures: true,
    allowsInlineMediaPlayback: true,
    bounces: false,
    scrollEnabled: true,
  },
  debug: process.env.NEXT_PUBLIC_INTOSS_DEBUG === 'true',
};
```

### 11.2 딥링크 매핑

| 웹 경로 | 딥링크 |
|---------|--------|
| `/` | `intoss://roulette/` |
| `/map` | `intoss://roulette/map?theme=...&lat=...&lng=...` |
| `/result` | `intoss://roulette/result?item=...` |

---

## 12. 코드 예시

### 12.1 난수 생성

```typescript
// src/libs/random.ts
export const uniformPick = <T>(arr: T[]): T => {
  const randomValue = crypto.getRandomValues(new Uint32Array(1))[0];
  const index = Math.floor((randomValue / 2**32) * arr.length);
  return arr[index];
};
```

### 12.2 Kakao SDK 로더

```typescript
// src/libs/kakao.ts
export async function loadKakao(): Promise<typeof window.kakao> {
  if (typeof window === 'undefined') throw new Error('Client only');
  if (window.kakao?.maps) return window.kakao;

  await new Promise<void>((resolve, reject) => {
    const script = document.createElement('script');
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY}&libraries=services`;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = reject;
    document.head.appendChild(script);
  });

  return window.kakao!;
}
```

---

## 13. 리스크 및 대응

### 13.1 iOS WebView 쿠키 제한

**문제**: iOS WebView에서 서드파티 쿠키 제한

**대응**:
- 토큰/헤더 기반 인증
- 서버 프록시로 REST API Key 보호

### 13.2 지도/검색 쿼터

**문제**: Kakao API 쿼터 초과

**대응**:
- 캐시 구현 (짧은 TTL)
- 페이지네이션
- 에러 UX 명확히

### 13.3 위치 권한 거부

**문제**: 사용자가 위치 권한 거부

**대응**:
- 기본 위치 제공 (서울시청)
- 권한 요청 배너
- 수동 위치 입력 (향후)

### 13.4 번들 크기

**문제**: 번들 크기 증가

**대응**:
- 코드 스플리팅
- 지연 로딩
- 이미지 최적화

---

## 관련 문서

- **[PRD](PRD.md)**: 제품 요구사항
- **[개발 가이드](DEVELOPMENT_GUIDE.md)**: 개발 규칙 및 프로세스
- **[CLAUDE.md](../CLAUDE.md)**: 프로젝트 컨텍스트

---

**작성일**: 2025-10-24
**버전**: 1.0
**작성자**: Claude Code (기반: GPT Dev-docs)
