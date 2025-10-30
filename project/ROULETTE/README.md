# 🎰 Roulette for Group Meals

단체 식사 메뉴 선택을 돕는 룰렛 앱 + GPS 기반 맛집 추천 + 길안내

**플랫폼**: Apps in Toss (WebView)

---

## 📋 프로젝트 개요

"오늘 저녁 뭐 먹지?" 고민을 해결하는 간단하고 재미있는 룰렛 앱입니다.

### 핵심 기능

- 🎯 **테마별 룰렛**: 회식, 데이트, 배달, 술집
- 📍 **GPS 기반 검색**: 현재 위치 주변 맛집 찾기
- 🗺️ **지도 표시**: Kakao Maps 연동
- 🧭 **길안내**: 카카오맵 앱/웹 길찾기

---

## 🚀 빠른 시작

### 1. 환경 설정

```bash
# 저장소 클론
git clone <repository-url>
cd ROULETTE

# 의존성 설치
npm install

# 환경변수 설정
cp .env.example .env
# .env 파일을 편집하여 API 키 입력
```

### 2. 환경변수 설정

`.env` 파일:
```bash
# Kakao API
NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY=your_javascript_key
KAKAO_REST_API_KEY=your_rest_api_key

# Apps in Toss
NEXT_PUBLIC_INTOSS_APP_NAME=roulette
NEXT_PUBLIC_INTOSS_DEBUG=true
```

**Kakao API 키 발급**:
1. [Kakao Developers](https://developers.kakao.com/) 접속
2. 애플리케이션 생성
3. JavaScript 키 및 REST API 키 발급
4. 플랫폼 설정 → Web 플랫폼 등록 (리퍼러 설정)

### 3. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 접속

### 4. 빌드 및 배포

```bash
# Static Export 빌드
npm run build

# 빌드 결과 확인
ls -la out/
```

---

## 📁 프로젝트 구조

```
ROULETTE/
├── CLAUDE.md                   # 프로젝트 컨텍스트 가이드
├── README.md                   # 현재 파일
├── docs/                       # 프로젝트 문서
│   ├── PRD.md                  # 제품 요구사항
│   ├── TECHNICAL_SPEC.md       # 기술 사양서
│   └── DEVELOPMENT_GUIDE.md    # 개발 가이드
├── src/                        # 소스 코드
│   ├── app/                    # Next.js App Router
│   ├── components/             # UI 컴포넌트
│   ├── hooks/                  # 커스텀 훅
│   ├── libs/                   # 유틸리티
│   └── types/                  # 타입 정의
└── public/                     # 정적 파일
```

---

## 🛠️ 기술 스택

- **Frontend**: React 18 + Next.js 14 (Static Export)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Map/Search**: Kakao Maps/Local API
- **State**: React Query + Context
- **Platform**: Apps in Toss (Bedrock SDK)

---

## 📚 문서

자세한 정보는 다음 문서를 참조하세요:

- **[CLAUDE.md](CLAUDE.md)**: 프로젝트 컨텍스트 및 리소스 가이드
- **[PRD](docs/PRD.md)**: 제품 요구사항 정의서
- **[기술 사양서](docs/TECHNICAL_SPEC.md)**: 상세 기술 스택 및 아키텍처
- **[개발 가이드](docs/DEVELOPMENT_GUIDE.md)**: 개발 규칙 및 프로세스

---

## 🧪 테스트

```bash
# 유닛 테스트
npm run test

# E2E 테스트
npm run test:e2e

# 테스트 커버리지
npm run test:coverage
```

---

## 📦 배포

### Vercel (권장)

```bash
# Vercel CLI 설치
npm install -g vercel

# 배포
vercel --prod
```

### S3 + CloudFront

```bash
# 빌드
npm run build

# S3 업로드
aws s3 sync out/ s3://your-bucket-name/

# CloudFront 캐시 무효화
aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"
```

---

## 🔗 Apps in Toss 연동

### 로컬 테스트

1. 개발 서버 실행
   ```bash
   npm run dev
   ```

2. Apps in Toss 샌드박스에서 접속
   ```
   intoss://roulette/?debug=true
   ```

### 딥링크 스킴

```
intoss://roulette/map?theme=회식&lat=37.5665&lng=126.9780
```

---

## 🎯 주요 명령어

```bash
# 개발
npm run dev              # 개발 서버 실행
npm run build            # 프로덕션 빌드
npm run lint             # 코드 린팅
npm run type-check       # 타입 체크

# 테스트
npm run test             # 유닛 테스트
npm run test:watch       # Watch 모드
npm run test:e2e         # E2E 테스트
```

---

## 📝 개발 규칙

### 언어 컨벤션

- ✅ 문서/설명: **한글**
- ✅ 코드/주석: **영어**

### 작업 순서

1. PRD 확인 → 요구사항 이해
2. Ticket 작성 → 작업 범위 명확화
3. 구현 → 코드 작성
4. 테스트 → 검증
5. Commit → 커밋 메시지 작성

자세한 내용은 [개발 가이드](docs/DEVELOPMENT_GUIDE.md)를 참조하세요.

---

## 🐛 트러블슈팅

### Kakao Maps 로딩 실패

1. `NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY` 확인
2. Kakao Developers에서 리퍼러 설정 확인
3. 브라우저 콘솔 에러 확인

### API 프록시 오류

1. `KAKAO_REST_API_KEY` 환경변수 확인
2. `/api/places` 엔드포인트 동작 확인
3. 서버 로그 확인

---

## 📄 라이선스

이 프로젝트는 MIT 라이선스를 따릅니다.

---

## 👥 기여

이슈 및 PR은 언제나 환영합니다!

---

**작성일**: 2025-10-24
**버전**: 1.0
