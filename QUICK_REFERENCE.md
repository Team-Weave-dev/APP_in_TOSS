# Apps in Toss 개발 빠른 참조 가이드

> **목적**: 프로젝트 유형별 필수 문서와 자주 사용하는 API를 빠르게 찾기

---

## 📋 프로젝트 유형별 필수 문서

### 🎮 게임 앱 (React Native + Unity)

#### 필수 읽기 순서
```
1. docs/01-intro/01-overview.md (플랫폼 이해)
2. docs/01-intro/03-guide.md (정책 확인)
3. docs/02-prepare/01-console-workspace.md (콘솔 등록)
4. docs/03-design/01-miniapp-branding-guide.md (브랜딩)
5. docs/04-development/07-unity.md (Unity 포팅)
6. docs/04-development/08-sandbox.md (테스트)
7. docs/05-checklist/01-app-game.md (검수 준비)
```

#### 주요 API
- [화면 방향](docs/reference/bedrock/screen-control/setDeviceOrientation.md) - 가로/세로 모드
- [햅틱 피드백](docs/reference/bedrock/interaction/generateHapticFeedback.md) - 진동
- [보상형 광고](docs/reference/bedrock/ads/loadAdMobRewardedAd.md) - 리워드 광고
- [게임센터](docs/reference/bedrock/game/) - 리더보드

---

### 📱 React Native 앱

#### 필수 읽기 순서
```
1. docs/01-intro/01-overview.md
2. docs/02-prepare/01-console-workspace.md
3. docs/03-design/07-tds-mobile.md (TDS 디자인 시스템)
4. docs/04-development/04-android.md (Android 환경)
5. docs/04-development/05-ios.md (iOS 환경)
6. docs/04-development/03-react-native.md (Granite 프레임워크)
7. docs/05-checklist/02-app-nongame.md
```

#### 주요 API
- [화면 닫기](docs/reference/bedrock/screen-control/closeView.md) - 필수
- [저장소](docs/reference/bedrock/storage/) - 로컬 데이터
- [분석](docs/reference/bedrock/analytics/) - 이벤트 로깅
- [네트워크 상태](docs/reference/bedrock/network/getNetworkStatus.md)

#### TDS 컴포넌트
- [Button](docs/reference/tds-mobile/components/button.md)
- [TextField](docs/reference/tds-mobile/components/text-field.md)
- [Dialog](docs/reference/tds-mobile/components/dialog.md)
- [BottomSheet](docs/reference/tds-mobile/hooks/useBottomSheet.md)

---

### 🌐 WebView 앱

#### 필수 읽기 순서
```
1. docs/01-intro/01-overview.md
2. docs/02-prepare/01-console-workspace.md
3. docs/03-design/07-tds-mobile.md
4. docs/04-development/06-webview.md (WebView 연동)
5. docs/05-checklist/02-app-nongame.md
```

#### 주요 API
- 동일: React Native 앱과 유사

---

### 🛒 커머스 앱

#### 추가 필수 문서
```
+ docs/reference/bedrock/payment/tosspay/ (토스 페이 결제)
+ docs/reference/bedrock/share/ (공유 기능)
+ docs/reference/bedrock/fetch-album-photos.md (사진 업로드)
+ docs/07-marketing/ (마케팅 도구)
+ docs/10-growth/04-share.md (바이럴 전략)
```

---

### 📍 위치 기반 앱

#### 추가 필수 문서
```
+ docs/reference/bedrock/location/ (위치 API)
+ docs/reference/bedrock/get-current-location.md
```

---

## 🚀 개발 단계별 체크리스트

### 1단계: 프로젝트 준비 ✅

- [ ] [플랫폼 이해](docs/01-intro/01-overview.md)
- [ ] [정책 확인](docs/01-intro/03-guide.md) - 금지 서비스
- [ ] [콘솔 등록](docs/02-prepare/01-console-workspace.md)
- [ ] 앱 유형 결정 (게임/비게임)

### 2단계: 디자인 🎨

- [ ] [브랜딩 가이드](docs/03-design/01-miniapp-branding-guide.md) 숙지
- [ ] [TDS 디자인 시스템](docs/03-design/07-tds-mobile.md) 학습
- [ ] [Figma 준비](docs/03-design/prepare/01-design.md)
- [ ] [UX 라이팅](docs/03-design/03-ux-writing.md) 가이드

### 3단계: 개발 환경 💻

- [ ] [Android 환경 설정](docs/04-development/04-android.md)
- [ ] [iOS 환경 설정](docs/04-development/05-ios.md)
- [ ] [React Native](docs/04-development/03-react-native.md) or [WebView](docs/04-development/06-webview.md) or [Unity](docs/04-development/07-unity.md)
- [ ] [Bedrock SDK 설치](docs/04-development/02-prepare.md)

### 4단계: 핵심 기능 구현 🔧

- [ ] 화면 닫기 구현 (필수)
- [ ] 로컬 저장소 연동
- [ ] 이벤트 로깅
- [ ] 필요 시: 로그인, 결제, 광고 등

### 5단계: 테스트 🧪

- [ ] [샌드박스 테스트](docs/04-development/08-sandbox.md)
- [ ] [토스앱 테스트](docs/04-development/09-toss.md)
- [ ] [기능별 테스트](docs/04-development/10-function.md)
- [ ] [Sentry 모니터링](docs/04-development/11-sentry-monitoring.md)

### 6단계: 검수 준비 ✅

- [ ] [게임 검수 가이드](docs/05-checklist/01-app-game.md) or [비게임 검수 가이드](docs/05-checklist/02-app-nongame.md)
- [ ] 브릿지 뷰 디자인 확인
- [ ] 네비게이션 바 검토
- [ ] 보안 요구사항 (비게임)

### 7단계: 출시 및 성장 🚀

- [ ] 앱 번들 업로드
- [ ] 검수 통과 (2~3일)
- [ ] [마케팅 전략](docs/07-marketing/) 수립
- [ ] [성장 가이드](docs/10-growth/) 참고

---

## 💡 자주 사용하는 API

### 필수 (모든 앱)
- **[closeView](docs/reference/bedrock/screen-control/closeView.md)** - 화면 닫기
- **[storage.setItem](docs/reference/bedrock/storage/setItem.md)** - 데이터 저장
- **[storage.getItem](docs/reference/bedrock/storage/getItem.md)** - 데이터 조회
- **[Analytics.logEvent](docs/reference/bedrock/analytics/Analytics.md)** - 이벤트 로깅

### 위치 정보
- **[getCurrentLocation](docs/reference/bedrock/get-current-location.md)** - 현재 위치
- **[startUpdateLocation](docs/reference/bedrock/location/startUpdateLocation.md)** - 위치 추적

### 미디어
- **[openCamera](docs/reference/bedrock/open-camera.md)** - 카메라 촬영
- **[fetchAlbumPhotos](docs/reference/bedrock/fetch-album-photos.md)** - 앨범 선택

### 결제
- **[checkoutPayment](docs/reference/bedrock/payment/tosspay/checkoutPayment.md)** - 토스 페이
- **[createOneTimePurchaseOrder](docs/reference/bedrock/payment/iap/createOneTimePurchaseOrder.md)** - 인앱 결제

### 광고
- **[loadAdMobInterstitialAd](docs/reference/bedrock/ads/loadAdMobInterstitialAd.md)** - 전면 광고
- **[loadAdMobRewardedAd](docs/reference/bedrock/ads/loadAdMobRewardedAd.md)** - 보상형 광고

### 공유
- **[share](docs/reference/bedrock/share.md)** - 일반 공유
- **[getTossShareLink](docs/reference/bedrock/share/getTossShareLink.md)** - 토스 공유

### 기타
- **[generateHapticFeedback](docs/reference/bedrock/interaction/generateHapticFeedback.md)** - 햅틱
- **[getNetworkStatus](docs/reference/bedrock/network/getNetworkStatus.md)** - 네트워크
- **[getClipboardText](docs/reference/bedrock/get-clipboard-text.md)** - 클립보드

---

## 📚 예제 코드 빠른 찾기

### 기본 앱 예제
- **[random-balls](example/random-balls/)** - 게임 기본 구조
- **[weekly-todo-react](example/weekly-todo-react/)** - React 앱 구조
- **[weekly-todo-vue](example/weekly-todo-vue/)** - Vue 앱 구조

### API별 예제
- **[with-haptic-feedback](example/with-haptic-feedback/)** - 햅틱
- **[with-location-tracking](example/with-location-tracking/)** - 위치 추적
- **[with-camera](example/with-camera/)** - 카메라
- **[with-storage](example/with-storage/)** - 로컬 저장소
- **[with-share-link](example/with-share-link/)** - 공유
- **[with-in-app-purchase](example/with-in-app-purchase/)** - 인앱 결제

전체 예제: [example/claude.md](example/claude.md)

---

## 🆘 문제 해결

### 문서를 찾을 수 없을 때
1. 먼저 해당 디렉토리의 `claude.md` 확인
2. [REFERENCE_GUIDE.md](REFERENCE_GUIDE.md)에서 검색
3. [docs/claude.md](docs/claude.md)에서 전체 구조 확인

### API 사용법을 모를 때
1. [docs/reference/bedrock/claude.md](docs/reference/bedrock/claude.md) - API 목록
2. 해당 API 문서 확인
3. [example/](example/) 디렉토리에서 예제 검색

### 정책 관련 질문
1. [docs/01-intro/03-guide.md](docs/01-intro/03-guide.md) - 서비스 정책
2. [docs/03-design/01-miniapp-branding-guide.md](docs/03-design/01-miniapp-branding-guide.md) - 브랜딩
3. [docs/07-marketing/01-guideline.md](docs/07-marketing/01-guideline.md) - 광고 가이드

---

**마지막 업데이트**: 2025-10-24
