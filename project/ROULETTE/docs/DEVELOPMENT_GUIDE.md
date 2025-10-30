# 개발 가이드 (Development Guide)
# Roulette for Group Meals

> **프로젝트**: ROULETTE
> **버전**: 1.0
> **작성일**: 2025-10-24
> **관련 문서**: [CLAUDE.md](../CLAUDE.md) | [PRD](PRD.md) | [기술 사양서](TECHNICAL_SPEC.md)

---

## 문서 개요

이 문서는 ROULETTE 프로젝트의 개발 규칙, 워크플로우, 테스트, 배포 프로세스를 정의합니다.

---

## 1. 개발 규칙

### 1.1 언어 및 코딩 컨벤션

**핵심 규칙**:
- ✅ **모든 설명/문서**: 한글
- ✅ **코드 주석/식별자**: 영어

**예시**:
```typescript
// ✅ 올바른 예시
/**
 * Generates haptic feedback for roulette spin
 */
export async function generateSpinFeedback() {
  // Implementation
}

// ❌ 잘못된 예시
/**
 * 룰렛 스핀을 위한 햅틱 피드백 생성
 */
export async function 햅틱피드백생성() {
  // 구현
}
```

### 1.2 작업 순서

**필수 순서**:
1. **PRD 확인** → 요구사항 이해
2. **Ticket 작성** → 작업 범위 명확화
3. **구현** → 코드 작성
4. **테스트** → 검증
5. **Commit** → 커밋 메시지 작성

**❌ 스코프 크립 금지**:
- 티켓 범위 외 작업 금지
- 추가 기능은 별도 티켓 생성

### 1.3 작업 전 필수 확인

**매번 작업 시작 전**:
1. [CLAUDE.md](../CLAUDE.md) 읽기
2. [PRD.md](PRD.md) 해당 섹션 읽기
3. [TECHNICAL_SPEC.md](TECHNICAL_SPEC.md) 해당 섹션 읽기
4. ESLint, TSConfig 규칙 확인

### 1.4 요청 포맷

**컴포넌트/훅/유틸 생성 요청 시 포함 사항**:
- ✅ 입력/출력 타입
- ✅ 상태/에러 처리 방법
- ✅ 로딩 UX
- ✅ 테스트 시나리오

**Kakao API 연동 시 포함 사항**:
- ✅ 입력 검증 (Zod 스키마)
- ✅ 오류 코드 매핑 표
- ✅ 재시도 로직

**예시**:
```
요청: "룰렛 스핀 컴포넌트 생성"

포함 내용:
- 입력: MenuItem[], onComplete 콜백
- 출력: 선택된 MenuItem
- 상태: idle, spinning, completed
- 에러: 없음 (클라이언트 로직)
- 로딩: 스핀 애니메이션 (3초)
- 테스트: 균등 확률 검증 (10000회)
```

---

## 2. 테스트 전략

### 2.1 테스트 우선 개발

**원칙**: 테스트 → 구현 → 검증

**테스트 레벨**:
1. **Unit**: 개별 함수/컴포넌트
2. **Integration**: API 연동, 훅
3. **E2E**: 핵심 사용자 플로우

### 2.2 유닛 테스트

**대상**:
- 난수 생성 (`src/libs/random.ts`)
- 유틸리티 함수
- 단순 컴포넌트

**도구**: Jest, React Testing Library

**예시**:
```typescript
// tests/libs/random.test.ts
import { uniformPick } from '@/libs/random';

describe('uniformPick', () => {
  it('should return item from array', () => {
    const items = ['A', 'B', 'C'];
    const result = uniformPick(items);
    expect(items).toContain(result);
  });

  it('should have uniform distribution', () => {
    const items = ['A', 'B', 'C'];
    const counts: Record<string, number> = {};
    const iterations = 10000;

    for (let i = 0; i < iterations; i++) {
      const result = uniformPick(items);
      counts[result] = (counts[result] || 0) + 1;
    }

    Object.values(counts).forEach(count => {
      const probability = count / iterations;
      expect(probability).toBeCloseTo(0.33, 1);
    });
  });
});
```

### 2.3 통합 테스트

**대상**:
- Kakao API 프록시
- 위치 정보 훅
- 장소 검색 훅

**도구**: Jest + MSW (Mock Service Worker)

**예시**:
```typescript
// tests/hooks/usePlacesQuery.test.ts
import { renderHook, waitFor } from '@testing-library/react';
import { usePlacesQuery } from '@/hooks/usePlacesQuery';
import { server } from '../mocks/server';
import { rest } from 'msw';

describe('usePlacesQuery', () => {
  it('should fetch places successfully', async () => {
    const { result } = renderHook(() =>
      usePlacesQuery({
        query: '삼겹살',
        lat: 37.5665,
        lng: 126.9780,
      })
    );

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
    });

    expect(result.current.data?.places).toHaveLength(20);
  });

  it('should handle API error', async () => {
    server.use(
      rest.get('/api/places', (req, res, ctx) => {
        return res(ctx.status(500), ctx.json({ error: 'Server error' }));
      })
    );

    const { result } = renderHook(() =>
      usePlacesQuery({
        query: '삼겹살',
        lat: 37.5665,
        lng: 126.9780,
      })
    );

    await waitFor(() => {
      expect(result.current.isError).toBe(true);
    });
  });
});
```

### 2.4 E2E 테스트

**대상**: 핵심 사용자 플로우

**도구**: Playwright 또는 Cypress

**시나리오**:
1. 테마 선택 → 룰렛 스핀 → 결과 확인
2. 위치 권한 허용 → 검색 → 지도 표시
3. 가게 선택 → 길안내 클릭

---

## 3. 성능 및 보안 체크

### 3.1 번들 크기

**체크리스트**:
- [ ] 전체 번들 < 500KB (gzip)
- [ ] 개별 페이지 < 200KB
- [ ] 이미지 최적화 (WebP, AVIF)

**검증 방법**:
```bash
npm run build
du -sh .next/static/*
```

### 3.2 WebView 정책

**체크리스트**:
- [ ] 압축 해제 번들 < 100MB (Apps in Toss 제한)
- [ ] HTTPS 전용
- [ ] 외부 스크립트 최소화

### 3.3 위치 정보 관리

**체크리스트**:
- [ ] 동의 UI 명확
- [ ] 저장하지 않음 (메모리만 사용)
- [ ] 철회 가능

### 3.4 API Key 보안

**체크리스트**:
- [ ] JavaScript Key: 리퍼러 제한 설정
- [ ] REST API Key: 서버 프록시 사용
- [ ] .env 파일 .gitignore 등록

---

## 4. QA 체크리스트

### 4.1 기능 테스트

**위치 권한**:
- [ ] 허용 → GPS 위치 사용
- [ ] 거부 → 기본 위치(서울시청) 사용
- [ ] 철회 → 권한 요청 배너 표시

**테마별 룰렛**:
- [ ] 회식 테마: 6개 항목 로딩
- [ ] 데이트 테마: 6개 항목 로딩
- [ ] 배달 테마: 6개 항목 로딩
- [ ] 술집 테마: 6개 항목 로딩
- [ ] 균등 분포 스모크 테스트 (시각적 확인)

**지도 렌더링**:
- [ ] 지도 정상 로딩
- [ ] 마커 표시 (현재 위치, 가게)
- [ ] 줌/팬 기능
- [ ] 마커 클릭 → 인포윈도우
- [ ] 스켈레톤/로딩 상태

**Kakao API**:
- [ ] 검색 정상 작동
- [ ] 쿼터 초과 시 에러 처리
- [ ] 네트워크 오류 시 재시도
- [ ] 빈 결과 처리

**길안내**:
- [ ] 웹 링크 정상 작동
- [ ] 카카오맵 앱 설치 시 앱 열기
- [ ] 미설치 시 웹 길찾기

**WebView**:
- [ ] 뒤로가기 동작
- [ ] 닫기 버튼
- [ ] 스크롤
- [ ] 화면 회전 (가로/세로)

### 4.2 비기능 테스트

**네트워크**:
- [ ] 느린 네트워크 (3G 시뮬레이션)
- [ ] 오프라인 → 오류 화면
- [ ] 재연결 → 자동 재시도

**성능**:
- [ ] 번들 크기 측정
- [ ] LCP (Largest Contentful Paint) < 2.5s
- [ ] INP (Interaction to Next Paint) < 200ms

---

## 5. 배포 프로세스

### 5.1 프리뷰 배포

**단계**:
1. `.env` 설정 (스테이징 환경)
2. 빌드 및 배포
   ```bash
   npm run build
   # Vercel 또는 S3 배포
   ```
3. 프리뷰 URL 확인

### 5.2 샌드박스 검증

**Apps in Toss 샌드박스**:
1. 로컬 개발 서버 실행
   ```bash
   npm run dev
   ```
2. QR 코드 또는 딥링크로 접속
   ```
   intoss://roulette/?debug=true
   ```
3. QA 체크리스트 수행

### 5.3 프로덕션 배포

**단계**:
1. `.env` 프로덕션 설정
2. 빌드
   ```bash
   npm run build
   ```
3. 정적 호스팅 배포 (Vercel/S3)
4. Apps in Toss에서 WebView URL 등록
5. 검수 제출
6. 승인 후 출시

### 5.4 릴리즈 노트

**포함 내용**:
- 변경 로그
- API 영향
- 번들 크기
- 알려진 이슈

**예시**:
```markdown
# v1.0.0 - 2025-10-24

## 신규 기능
- 테마별 룰렛 (회식, 데이트, 배달, 술집)
- GPS 기반 맛집 검색
- 지도 표시 및 길안내

## 기술 변경
- Next.js 14 Static Export
- Kakao Maps/Local API 연동
- Apps in Toss Bedrock SDK 통합

## 번들 크기
- 전체: 450KB (gzip)
- 홈: 120KB
- 지도: 180KB

## 알려진 이슈
- iOS에서 햅틱 피드백 약함 (추후 개선)
```

---

## 6. 초기 티켓 (Sprint 0~1)

### Sprint 0: 환경 설정

**티켓 #1**: 프로젝트 초기화
- [ ] Next.js + TypeScript 설정
- [ ] ESLint, Prettier 설정
- [ ] Tailwind CSS 설정
- [ ] 디렉토리 구조 생성

**티켓 #2**: 환경변수 및 설정
- [ ] `.env.example` 생성
- [ ] `granite.config.ts` 설정
- [ ] `next.config.js` (Static Export)

### Sprint 1: 핵심 기능

**티켓 #3**: 룰렛 컴포넌트
- [ ] 균등 확률 난수 생성 (`random.ts`)
- [ ] 룰렛 휠 컴포넌트
- [ ] 스핀 애니메이션
- [ ] 결과 콜백
- [ ] 유닛 테스트 (균등 분포)

**티켓 #4**: 테마/메뉴 프리셋
- [ ] 테마별 메뉴 JSON (`themes.json`)
- [ ] 테마 선택 컴포넌트
- [ ] 타입 정의 (`theme.ts`, `menu.ts`)

**티켓 #5**: 위치 권한 훅
- [ ] `useLocation()` 훅
- [ ] 권한 요청 로직
- [ ] 동의/거부/기본값 처리
- [ ] 에러 처리

**티켓 #6**: Kakao SDK 로더
- [ ] 동적 스크립트 로드 (`kakao.ts`)
- [ ] 타입 안전성 보장
- [ ] 에러 처리

**티켓 #7**: 장소 검색 훅
- [ ] `usePlacesQuery()` 훅 (React Query)
- [ ] API 프록시 (`/api/places`)
- [ ] Zod 스키마 검증
- [ ] 에러 핸들링

**티켓 #8**: 지도/목록 화면
- [ ] MapView 컴포넌트
- [ ] StoreList 컴포넌트
- [ ] 마커 및 인포윈도우
- [ ] 길안내 버튼

**티켓 #9**: 딥링크 처리
- [ ] `useDeepLink()` 훅
- [ ] 쿼리 파싱
- [ ] 라우팅 처리

**티켓 #10**: 에러/로딩 UX
- [ ] 토스트 컴포넌트
- [ ] 스켈레톤 로더
- [ ] 에러 바운더리

**티켓 #11**: QA 스모크 테스트
- [ ] 위치 권한 플로우
- [ ] 검색 기능
- [ ] 길안내
- [ ] WebView 뒤로가기

---

## 7. Git 워크플로우

### 7.1 브랜치 전략

```
main (프로덕션)
  └─ develop (개발)
      ├─ feature/roulette-component
      ├─ feature/map-view
      └─ feature/kakao-integration
```

### 7.2 커밋 메시지

**포맷**:
```
<type>(<scope>): <subject>

<body>
```

**타입**:
- `feat`: 새로운 기능
- `fix`: 버그 수정
- `docs`: 문서 변경
- `style`: 코드 스타일 (포맷팅)
- `refactor`: 리팩토링
- `test`: 테스트 추가/수정
- `chore`: 빌드, 설정 변경

**예시**:
```
feat(roulette): add spin animation

- Implement requestAnimationFrame animation
- Add ease-out easing function
- Trigger haptic feedback on complete
```

---

## 8. 문서 유지보수

### 8.1 문서 업데이트 시점

**PRD 업데이트**:
- 기능 요구사항 변경 시
- 사용자 시나리오 추가 시

**TECHNICAL_SPEC 업데이트**:
- 기술 스택 변경 시
- API 계약 변경 시
- 아키텍처 수정 시

**DEVELOPMENT_GUIDE 업데이트**:
- 개발 규칙 변경 시
- 새로운 티켓 추가 시

### 8.2 문서 검토

**주기**: 매 스프린트 종료 시

**체크리스트**:
- [ ] 문서가 최신 상태인가?
- [ ] 예시 코드가 작동하는가?
- [ ] 링크가 유효한가?

---

## 9. 개발 환경

### 9.1 필수 도구

- **Node.js**: v18 이상
- **npm** 또는 **yarn**
- **Git**
- **VS Code** (권장)
  - ESLint 플러그인
  - Prettier 플러그인
  - TypeScript 플러그인

### 9.2 로컬 개발

```bash
# 1. 저장소 클론
git clone <repository-url>
cd ROULETTE

# 2. 의존성 설치
npm install

# 3. 환경변수 설정
cp .env.example .env
# .env 파일 편집

# 4. 개발 서버 실행
npm run dev

# 5. 브라우저에서 확인
# http://localhost:3000
```

### 9.3 유용한 명령어

```bash
# 개발 서버
npm run dev

# 빌드 (Static Export)
npm run build

# 타입 체크
npm run type-check

# 린트
npm run lint

# 테스트
npm run test

# 테스트 (watch 모드)
npm run test:watch

# E2E 테스트
npm run test:e2e
```

---

## 10. 트러블슈팅

### 10.1 일반적인 문제

**Q: Kakao Maps가 로딩되지 않습니다.**

A:
1. `NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY` 확인
2. 리퍼러 제한 설정 확인 (Kakao Developers)
3. 브라우저 콘솔 에러 확인

**Q: API 프록시가 작동하지 않습니다.**

A:
1. `KAKAO_REST_API_KEY` 환경변수 확인
2. `/api/places` 엔드포인트 확인
3. 서버 로그 확인

**Q: WebView에서 뒤로가기가 작동하지 않습니다.**

A:
1. `granite.config.ts` 확인
2. `allowsBackForwardNavigationGestures: true` 설정

---

## 관련 문서

- **[PRD](PRD.md)**: 제품 요구사항
- **[기술 사양서](TECHNICAL_SPEC.md)**: 상세 기술 스택
- **[CLAUDE.md](../CLAUDE.md)**: 프로젝트 컨텍스트

---

**작성일**: 2025-10-24
**버전**: 1.0
**작성자**: Claude Code (기반: GPT Dev-docs)
