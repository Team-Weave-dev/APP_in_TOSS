# 개발 서버 실행 및 테스트 가이드

> **작성일**: 2025-10-24
> **대상**: 개발자 및 테스터
> **목적**: 로컬 개발 환경 설정부터 기능 테스트까지 완전 가이드

---

## 📋 목차

1. [사전 준비](#사전-준비)
2. [Kakao API 키 발급](#kakao-api-키-발급)
3. [환경 설정](#환경-설정)
4. [개발 서버 실행](#개발-서버-실행)
5. [기능 테스트](#기능-테스트)
6. [문제 해결](#문제-해결)

---

## 사전 준비

### 1. 필수 소프트웨어 설치

```bash
# Node.js 버전 확인 (18.17 이상 권장)
node --version

# npm 버전 확인
npm --version
```

Node.js가 없다면:
- [Node.js 공식 사이트](https://nodejs.org/)에서 LTS 버전 다운로드
- 설치 후 터미널 재시작

### 2. 프로젝트 클론 및 의존성 설치

```bash
# 프로젝트 디렉토리로 이동
cd /Users/a/Documents/Team-jane/APPinTOSS/project/ROULETTE

# 의존성 설치
npm install
```

---

## Kakao API 키 발급

### 1. Kakao Developers 계정 생성

1. [Kakao Developers](https://developers.kakao.com/) 접속
2. 카카오 계정으로 로그인
3. 우측 상단 "내 애플리케이션" 클릭

### 2. 애플리케이션 생성

1. "애플리케이션 추가하기" 클릭
2. 앱 설정:
   - **앱 이름**: `룰렛 (개발)` 또는 원하는 이름
   - **사업자명**: 개인 또는 법인명
3. "저장" 클릭

### 3. API 키 확인

애플리케이션 상세 페이지에서:

1. **JavaScript 키** 복사
   - "요약 정보" → "앱 키" → "JavaScript 키"
   - 예: `a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6`

2. **REST API 키** 복사
   - "요약 정보" → "앱 키" → "REST API 키"
   - 예: `q9w8e7r6t5y4u3i2o1p0a9s8d7f6g5h4`

### 4. 플랫폼 설정

1. 좌측 메뉴 → "플랫폼" 클릭
2. "Web 플랫폼 등록" 클릭
3. 사이트 도메인 입력:
   ```
   http://localhost:3000
   ```
4. "저장" 클릭

### 5. Kakao 지도 활성화

1. 좌측 메뉴 → "제품 설정" → "Kakao 지도" 클릭
2. "사용 설정" ON

---

## 환경 설정

### 1. 환경변수 파일 생성

```bash
# .env.example을 복사하여 .env.local 생성
cp .env.example .env.local
```

### 2. .env.local 파일 편집

```bash
# 텍스트 에디터로 열기
nano .env.local
# 또는
code .env.local
```

### 3. API 키 입력

```env
# Kakao API Keys (발급받은 키로 교체)
NEXT_PUBLIC_KAKAO_JS_KEY=여기에_JavaScript_키_입력
NEXT_PUBLIC_KAKAO_REST_KEY=여기에_REST_API_키_입력

# Apps in Toss Configuration
NEXT_PUBLIC_INTOSS_APP_NAME=roulette
NEXT_PUBLIC_INTOSS_DEBUG=true

# AdMob Ad Group IDs (개발 시에는 임시값 사용 가능)
NEXT_PUBLIC_INTERSTITIAL_AD_GROUP_ID=dev_interstitial_id
NEXT_PUBLIC_REWARDED_AD_GROUP_ID=dev_rewarded_id
```

**중요**:
- API 키는 따옴표 없이 입력
- `NEXT_PUBLIC_INTOSS_DEBUG=true`로 설정하면 광고 없이 테스트 가능

---

## 개발 서버 실행

### 1. 개발 서버 시작

```bash
npm run dev
```

성공 시 출력:
```
> roulette@1.0.0 dev
> next dev

   ▲ Next.js 14.2.0
   - Local:        http://localhost:3000
   - Ready in 2.1s
```

### 2. 브라우저에서 접속

1. 브라우저 열기
2. 주소창에 입력: `http://localhost:3000`
3. 룰렛 메인 페이지 로드 확인

### 3. 개발 도구 열기

**Chrome/Edge**:
- Windows: `F12` 또는 `Ctrl+Shift+I`
- Mac: `Cmd+Option+I`

**주요 탭**:
- **Console**: 로그 메시지 확인
- **Network**: API 호출 확인
- **Application**: localStorage/sessionStorage 확인

---

## 기능 테스트

### ✅ 테스트 시나리오 1: 무료 룰렛 스핀

#### 단계

1. **메인 페이지 확인**
   - URL: `http://localhost:3000`
   - 제목: "오늘 뭐 먹지?"
   - 룰렛 휠 표시 (4개 테마: 한식, 중식, 일식, 양식)

2. **무료 스핀 횟수 확인**
   - "오늘 남은 무료 스핀" 표시
   - 횟수: "3회"
   - 버튼: "무료 스핀" (파란색)

3. **스핀 실행**
   - "무료 스핀" 버튼 클릭
   - 룰렛 회전 애니메이션 시작 (3초)
   - 결과 모달 팝업

4. **결과 확인**
   ```
   📋 확인 항목:
   - 테마 표시 (예: 한식)
   - 메뉴 표시 (예: 김치찌개)
   - "지도에서 찾기" 버튼
   - "다시 돌리기" 버튼
   ```

5. **localStorage 확인**
   - 개발자 도구 → Application → Local Storage
   - 키: `roulette_spin_limit`
   - 값 확인:
     ```json
     {
       "date": "2025-10-24",
       "freeSpinsRemaining": 2,
       "adSpinsUsed": 0
     }
     ```

#### 예상 결과

✅ 룰렛이 회전하고 결과가 표시됨
✅ 무료 스핀이 1회 차감됨 (3 → 2)
✅ 결과 모달에서 메뉴 정보 확인됨

---

### ✅ 테스트 시나리오 2: 광고 스핀

#### 단계

1. **무료 스핀 3회 소진**
   - "무료 스핀" 버튼 3번 클릭
   - 무료 스핀 횟수: 0회

2. **광고 스핀 버튼 확인**
   - 텍스트 변경: "광고 보고 스핀"
   - 색상 변경: 노란색
   - 설명: "광고를 시청하면 추가 스핀 기회를 얻을 수 있어요"

3. **광고 스핀 실행**
   - 버튼 클릭
   - **개발 환경**: 광고 없이 즉시 스핀 (콘솔: "Ad not supported in current environment")
   - **실제 환경**: 보상형 광고 표시 → 시청 완료 → 스핀

4. **localStorage 확인**
   ```json
   {
     "date": "2025-10-24",
     "freeSpinsRemaining": 0,
     "adSpinsUsed": 1
   }
   ```

#### 예상 결과

✅ 무료 스핀 소진 후 광고 스핀 버튼 표시
✅ 개발 환경에서 광고 스킵되고 바로 스핀
✅ 광고 스핀 횟수가 기록됨

---

### ✅ 테스트 시나리오 3: 지도 검색

#### 단계

1. **지도 페이지 이동**
   - 룰렛 결과 모달에서 "지도에서 찾기" 클릭
   - **개발 환경**: 바로 이동
   - **실제 환경** (무료 스핀): 전면형 광고 → 이동

2. **위치 권한 요청**
   - 브라우저 팝업: "localhost가 사용자의 위치를 알고자 합니다"
   - "허용" 클릭

3. **지도 로딩 확인**
   - Console 로그:
     ```
     ✅ Kakao Maps SDK loaded
     📍 Got current position: {lat: 37.5665, lng: 126.978}
     🔍 Searching places: 김치찌개 (500m radius)
     ✅ Found 5 places
     ```

4. **UI 요소 확인**
   ```
   📋 왼쪽: 지도
   - Kakao 지도 표시
   - 현재 위치 중심
   - 검색 결과 마커 (빨간색 핀)

   📋 오른쪽: 장소 리스트
   - 헤더: "검색 결과" + "반경 500m"
   - 카드 목록 (장소명, 카테고리, 주소, 거리)
   - "더 넓은 범위 검색" 버튼 (결과 적을 때)
   ```

5. **장소 카드 클릭**
   - 전화번호 클릭 → 전화 걸기
   - "Kakao 지도에서 보기" → 새 탭에서 상세 페이지

#### 예상 결과

✅ 지도가 정상적으로 로드됨
✅ 현재 위치에서 500m 반경 검색
✅ 검색 결과가 리스트와 마커로 표시됨

---

### ✅ 테스트 시나리오 4: 반경 확대

#### 단계

1. **검색 결과 없는 경우 시뮬레이션**
   - URL 수동 입력: `http://localhost:3000/map?menu=희귀한메뉴123`
   - 검색 결과: 0개

2. **자동 확대 메시지**
   - "주변에 음식점을 찾지 못했어요"
   - "더 넓은 범위 검색" 버튼 표시

3. **1단계 확대 (500m → 1km)**
   - 버튼 클릭
   - Console: `📏 Expanding search radius to 1000m`
   - 재검색 실행

4. **2단계 확대 (1km → 1.5km)**
   - 여전히 결과 없으면
   - 버튼: "더 넓은 범위 검색 (1000m → 1500m)"
   - 클릭 → 1.5km로 확대

5. **3단계 확대 (1.5km → 3km, 광고)**
   - 1.5km까지 확대 후에도 결과 없으면
   - 버튼: "광고 보고 3km 범위 검색" (노란색)
   - 클릭 → **개발 환경**: 바로 3km 검색
   - Console: `📏 Expanding search radius to 3000m (rewarded)`

#### 예상 결과

✅ 검색 결과 없을 때 점진적 반경 확대
✅ 500m → 1km → 1.5km (자동)
✅ 1.5km → 3km (광고 시청)
✅ 각 단계에서 재검색 실행

---

### ✅ 테스트 시나리오 5: 캐싱 동작

#### 단계

1. **첫 번째 검색**
   - 메뉴: "김치찌개"
   - 위치: 현재 위치
   - Console 로그:
     ```
     🔍 Searching places: 김치찌개 (500m radius)
     ✅ Found 5 places
     💾 Cached search result
     ```

2. **페이지 새로고침**
   - `F5` 또는 새로고침 버튼
   - 다시 "지도에서 찾기" → 지도 페이지

3. **두 번째 검색 (캐시 사용)**
   - Console 로그:
     ```
     🎯 Using cached search result
     ✅ Found 5 places (from cache)
     ```
   - **API 호출 없음** (Network 탭 확인)

4. **sessionStorage 확인**
   - Application → Session Storage
   - 키: `kakao_search_김치찌개_127.027610_37.497942_500`
   - 값:
     ```json
     {
       "data": { "documents": [...], "meta": {...} },
       "timestamp": 1729776000000,
       "ttl": 300000
     }
     ```

5. **캐시 만료 테스트**
   - 5분 대기 또는 timestamp 수동 변경
   - 새로고침
   - Console: `🔍 Searching places...` (캐시 만료, 새로 검색)

#### 예상 결과

✅ 첫 검색: API 호출
✅ 5분 이내 재검색: 캐시 사용
✅ 5분 후: 캐시 만료, 재호출

---

### ✅ 테스트 시나리오 6: 검색 횟수 제한

#### 단계

1. **연속 검색 (5회)**
   - 다른 메뉴로 5번 검색 실행
   - 각 검색마다 sessionStorage 확인

2. **6번째 검색 시도**
   - Console 에러:
     ```
     검색 횟수를 초과했습니다. 페이지를 새로고침해주세요.
     ```
   - 리스트에 에러 메시지 표시

3. **sessionStorage 확인**
   - 키: `place_search_count`
   - 값: `5`

4. **새 탭에서 테스트**
   - 새 탭 열기: `Ctrl+T` (Windows) / `Cmd+T` (Mac)
   - 같은 URL 접속
   - 검색 횟수 리셋 확인 (새 세션)

#### 예상 결과

✅ 세션당 최대 5회 검색
✅ 초과 시 에러 메시지
✅ 새 탭/세션에서 리셋

---

### ✅ 테스트 시나리오 7: 일일 무료 스핀 리셋

#### 단계

1. **현재 날짜 확인**
   - localStorage → `roulette_spin_limit`
   - `date`: "2025-10-24"

2. **날짜 변경 (수동)**
   - localStorage 값 편집:
     ```json
     {
       "date": "2025-10-23",
       "freeSpinsRemaining": 0,
       "adSpinsUsed": 5
     }
     ```

3. **페이지 새로고침**
   - `F5`

4. **리셋 확인**
   - 무료 스핀: 3회로 복구
   - localStorage:
     ```json
     {
       "date": "2025-10-24",
       "freeSpinsRemaining": 3,
       "adSpinsUsed": 0
     }
     ```
   - Console: 리셋 로그 없음 (자동 처리)

#### 예상 결과

✅ 날짜 변경 시 자동 리셋
✅ 무료 스핀 3회 복구
✅ 광고 스핀 기록 초기화

---

## 문제 해결

### ❌ "Failed to load Kakao Maps SDK"

**증상**:
```
❌ 지도를 로드하지 못했습니다
Failed to load Kakao Maps SDK
```

**원인**:
1. API 키 오류
2. 도메인 미등록
3. 네트워크 오류

**해결 방법**:

1. **.env.local 파일 확인**
   ```bash
   cat .env.local
   ```
   - `NEXT_PUBLIC_KAKAO_JS_KEY` 값 확인
   - 따옴표 없이 키만 입력되어 있는지 확인

2. **Kakao Developers 플랫폼 설정**
   - 애플리케이션 → 플랫폼 → Web
   - 도메인: `http://localhost:3000` 등록 확인

3. **브라우저 캐시 삭제**
   - `Ctrl+Shift+Delete` → 캐시 삭제
   - 새로고침: `Ctrl+F5`

4. **개발 서버 재시작**
   ```bash
   # 서버 중지: Ctrl+C
   npm run dev
   ```

---

### ❌ "Failed to get position"

**증상**:
```
위치 권한이 거부되었습니다. 서울 시청을 기준으로 표시합니다.
```

**원인**:
- 위치 권한 거부

**해결 방법**:

**Chrome**:
1. 주소창 왼쪽 자물쇠 아이콘 클릭
2. "위치" → "허용"
3. 페이지 새로고침

**Firefox**:
1. 주소창 왼쪽 `i` 아이콘 클릭
2. 권한 → 위치 정보 접근 → "허용"
3. 페이지 새로고침

**Safari**:
1. Safari → 환경설정 → 웹 사이트 → 위치 정보
2. localhost → "허용"
3. 페이지 새로고침

**Fallback 동작**:
- 권한 거부 시 서울 시청 좌표로 자동 설정
- 검색은 정상 작동 (서울 시청 기준)

---

### ❌ "검색 결과가 없습니다"

**증상**:
```
주변에 음식점을 찾지 못했어요
```

**원인**:
1. 실제로 주변에 해당 음식점 없음
2. 검색 반경이 좁음
3. 메뉴명 오타

**해결 방법**:

1. **반경 확대**
   - "더 넓은 범위 검색" 버튼 클릭
   - 500m → 1km → 1.5km → 3km

2. **위치 변경 (테스트용)**
   - 서울 시청 근처로 변경 (음식점 많음)
   - localStorage 삭제 후 재검색

3. **다른 메뉴로 테스트**
   - "김치찌개", "짜장면" 등 일반적인 메뉴
   - 희귀한 메뉴는 검색 결과 적을 수 있음

---

### ❌ Kakao API CORS 에러

**증상**:
```
Access to fetch at 'https://dapi.kakao.com/...' from origin 'http://localhost:3000'
has been blocked by CORS policy
```

**원인**:
- REST API 키 오류 (일반적으로 CORS 제한 없음)
- 네트워크 차단

**해결 방법**:

1. **API 키 확인**
   - `.env.local`의 `NEXT_PUBLIC_KAKAO_REST_KEY` 확인
   - Kakao Developers에서 키 재확인

2. **네트워크 확인**
   - 방화벽 또는 프록시 설정 확인
   - VPN 사용 중이면 일시 해제

3. **브라우저 확장 프로그램**
   - 광고 차단기 비활성화
   - 시크릿 모드에서 테스트

---

### ❌ "광고가 표시되지 않습니다"

**증상**:
- 광고 버튼 클릭 시 바로 스핀됨
- Console: "Ad not supported in current environment"

**원인**:
- **정상 동작**: 개발 환경에서는 Apps in Toss SDK 없음

**설명**:
```javascript
// useRouletteAd.ts
if (GoogleAdMob.loadAppsInTossAdMob.isSupported?.() === false) {
  console.warn('Ad not supported in current environment');
  // 개발 환경: 광고 스킵하고 바로 스핀 권한 부여
  if (process.env.NEXT_PUBLIC_INTOSS_DEBUG === 'true') {
    onSpinGranted();
  }
  return;
}
```

**테스트**:
- 광고 통합은 **실제 Apps in Toss 배포 후** 테스트 필요
- 로컬에서는 광고 없이 기능 동작 확인만 가능

---

### ❌ 빌드 오류

**증상**:
```bash
npm run build

> build
> next build

Error: ...
```

**해결 방법**:

1. **타입 오류**
   ```bash
   npm run type-check
   ```
   - TypeScript 오류 확인 및 수정

2. **의존성 문제**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **환경변수 누락**
   - `.env.local` 파일 존재 확인
   - 필수 환경변수 입력 확인

---

## 🎯 성능 확인

### 1. 캐싱 효과 측정

**Network 탭 확인**:

```
첫 번째 검색:
- dapi.kakao.com/v2/local/search → 200 OK (실제 API 호출)

두 번째 검색 (5분 이내):
- API 호출 없음 (캐시 사용)
- Console: "🎯 Using cached search result"
```

**예상 절감**:
- API 호출: 20-30% 감소
- 응답 속도: 즉시 (캐시)

### 2. 검색 횟수 제한

**sessionStorage 확인**:
```
키: place_search_count
값: 0 → 1 → 2 → 3 → 4 → 5 → 에러
```

**예상 절감**:
- 과도한 검색 방지
- 비용: 10-15% 절감

### 3. SDK 재사용

**Elements 탭 확인**:
```html
<head>
  <!-- Kakao Maps SDK (1개만 존재) -->
  <script src="https://dapi.kakao.com/v2/maps/sdk.js..."></script>
</head>
```

- 페이지 이동 시에도 script 태그 유지
- 중복 로드 없음

---

## ✅ 테스트 체크리스트

### 기본 기능
- [ ] 룰렛 스핀 (무료)
- [ ] 룰렛 스핀 (광고)
- [ ] 무료 스핀 차감
- [ ] 광고 스핀 기록
- [ ] 결과 모달 표시

### 지도 기능
- [ ] 위치 권한 요청
- [ ] 지도 로딩
- [ ] 장소 검색 (500m)
- [ ] 마커 표시
- [ ] 검색 결과 리스트

### 반경 확대
- [ ] 500m → 1km
- [ ] 1km → 1.5km
- [ ] 1.5km → 3km (광고)

### 최적화
- [ ] 검색 결과 캐싱
- [ ] 검색 횟수 제한
- [ ] SDK 재사용

### 리셋
- [ ] 일일 무료 스핀 리셋
- [ ] 날짜 변경 시 자동 리셋

---

## 📞 추가 지원

### 로그 확인

**중요 로그 패턴**:
```
✅ - 성공 (예: ✅ Kakao Maps SDK loaded)
🔍 - 검색 (예: 🔍 Searching places...)
📍 - 위치 (예: 📍 Got current position)
💾 - 캐싱 (예: 💾 Cached search result)
🎯 - 캐시 사용 (예: 🎯 Using cached search result)
❌ - 에러 (예: ❌ Failed to...)
```

### 유용한 도구

1. **React DevTools**
   - [Chrome 확장](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
   - 컴포넌트 상태 확인

2. **Redux DevTools** (선택사항)
   - 상태 관리 디버깅

3. **Lighthouse**
   - Chrome DevTools → Lighthouse
   - 성능, 접근성, SEO 점수

---

**문서 버전**: 1.0
**마지막 업데이트**: 2025-10-24
**작성자**: Claude Code
