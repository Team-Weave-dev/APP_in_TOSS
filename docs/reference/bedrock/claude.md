# Bedrock SDK 레퍼런스 (bedrock)

> **상위 컨텍스트**: [reference/claude.md](../claude.md) → [docs/claude.md](../../claude.md) → [루트 CLAUDE.md](../../../CLAUDE.md)

## 📌 디렉토리 목적

Apps in Toss **Bedrock SDK의 상세 API 레퍼런스**입니다.

## 📚 API 카테고리 (94개)

### 📱 화면 제어 (screen-control/)
- closeView - 화면 닫기 ⭐
- setScreenAwakeMode - 화면 깨우기 모드
- setDeviceOrientation - 화면 방향 설정
- useBackEvent - 뒤로가기 이벤트
- useParams - URL 파라미터
- IntersectionObserver - 화면 노출 감지

### 📍 위치 정보 (location/, get-current-location.md)
- getCurrentLocation - 현재 위치 조회 ⭐
- startUpdateLocation - 실시간 위치 추적
- useGeolocation - React Hook

### 💳 결제 (payment/)
- **토스 페이** (tosspay/)
  - checkoutPayment - 토스 페이 결제 ⭐
- **인앱 결제** (iap/)
  - createOneTimePurchaseOrder - 구매 주문
  - getProductItemList - 상품 목록
  - completeProductGrant - 구매 완료

### 📢 광고 (ads/)
- loadAdMobInterstitialAd - 전면 광고 ⭐
- loadAdMobRewardedAd - 보상형 광고 ⭐
- showAdMobInterstitialAd - 광고 표시
- showAdMobRewardedAd - 보상 광고 표시

### 📊 분석 (analytics/)
- Analytics - 이벤트 로깅 ⭐
- LoggingPress - 클릭 로깅
- LoggingArea - 영역 노출 로깅

### 🎨 인터랙션 (interaction/)
- generateHapticFeedback - 햅틱 피드백 ⭐
- KeyboardAboveView - 키보드 위 뷰

### 🌐 네트워크 (network/)
- getNetworkStatus - 네트워크 상태
- http - HTTP 요청

### 💾 저장소 (storage/)
- getItem - 데이터 조회 ⭐
- setItem - 데이터 저장 ⭐
- removeItem - 데이터 삭제
- clearItems - 전체 삭제

### 📷 미디어 (camera, photo)
- openCamera - 카메라 촬영 ⭐
- fetchAlbumPhotos - 앨범 사진 선택 ⭐

### 📋 기타
- **공유** (share/)
  - share - 일반 공유
  - getTossShareLink - 토스 공유 링크
- **클립보드**
  - getClipboardText - 복사
  - setClipboardText - 붙여넣기
- **연락처** (fetch-contacts.md)
- **게임** (game/)
- **언어** (language/)
- **환경** (environment/)

## 🎯 개발 시나리오별 필수 API

### 기본 앱
```
- closeView (화면 닫기)
- storage (로컬 저장소)
- analytics (이벤트 로깅)
```

### 위치 기반 앱
```
+ getCurrentLocation (현재 위치)
+ startUpdateLocation (위치 추적)
```

### 커머스 앱
```
+ checkoutPayment (토스 페이)
+ share (공유)
+ fetchAlbumPhotos (사진 업로드)
```

### 게임 앱
```
+ generateHapticFeedback (햅틱)
+ loadAdMobRewardedAd (보상 광고)
+ setDeviceOrientation (가로/세로)
```

## 💡 사용 예시

### 화면 닫기
```typescript
import { closeView } from '@apps-in-toss/bedrock';

closeView();
```

### 로컬 저장소
```typescript
import { storage } from '@apps-in-toss/bedrock';

await storage.setItem('user_name', 'John');
const name = await storage.getItem('user_name');
```

### 이벤트 로깅
```typescript
import { Analytics } from '@apps-in-toss/bedrock';

Analytics.logEvent('button_click', {
  button_name: 'start'
});
```

---

## ⚠️ 필수 규칙 (상위 문서 참조)

Bedrock SDK 사용 시 반드시 준수해야 할 규칙입니다.

### 1. UX Writing - API 파라미터 텍스트 (🔴 필수)

Bedrock API 호출 시 사용자에게 표시되는 모든 텍스트는 ~해요체를 사용해야 합니다.

**적용 대상**:
- ✅ Toast, Alert, Dialog의 메시지 파라미터
- ✅ Share API의 공유 텍스트
- ✅ Push 알림 메시지

**올바른 예시**:
```typescript
// ✅ 올바름
import { share, Analytics } from '@apps-in-toss/bedrock';

share({
  title: '앱을 공유해요',
  text: '친구에게 앱을 소개하고 포인트를 받아가세요'
});

Analytics.logEvent('share_complete', {
  share_message: 'invite_friend'  // 로깅 데이터는 영어
});
```

**잘못된 예시**:
```typescript
// ❌ 잘못됨
share({
  title: '앱을 공유합니다',
  text: '친구에게 앱을 소개하고 포인트를 받아가십시오'
});
```

**참조**: [../../03-design/03-ux-writing.md](../../03-design/03-ux-writing.md)

### 2. 언어 규칙 - API vs UI (🔴 필수)

**이벤트 로깅** (Analytics API):
- ✅ **이벤트 이름**: 영어 (snake_case)
  - 예: `button_click`, `screen_view`, `purchase_complete`
- ✅ **파라미터 이름**: 영어 (snake_case)
  - 예: `button_name`, `screen`, `product_id`
- ✅ **파라미터 값**: 영어
  - 예: `'start_game'`, `'home'`, `'premium_item'`

**사용자 대면 텍스트** (share, toast 등):
- ✅ **한글 (~해요체)** 사용

**올바른 예시**:
```typescript
// ✅ 올바름
Analytics.logEvent('button_click', {  // 로깅: 영어
  button_name: 'share',
  action: 'tap'
});

share({
  text: '이 앱을 친구에게 공유해보세요'  // UI 텍스트: 한글 (~해요체)
});
```

**참조**: [../../06-analytics/claude.md](../../06-analytics/claude.md)

### 3. 프로젝트 타입 독립성

**Bedrock SDK는 모든 프로젝트 타입에서 동일하게 사용 가능합니다** (WebView, React Native, Unity 공통).

단, UI 라이브러리는 타입별로 분리됩니다:
- WebView → TDS Mobile
- React Native → TDS React Native

**참조**: [../../../CLAUDE.md - 타입 구분](../../../CLAUDE.md#프로젝트-타입-구분-시스템)

**상세 규칙**: [../../../STANDARD_RULES.md](../../../STANDARD_RULES.md)

---

## 🔗 연관 디렉토리

- **개발 가이드**: [04-development/03-react-native.md](../../04-development/03-react-native.md)
- **예제 코드**: [../../../example/](../../../example/claude.md)
- **영상 가이드**: [04-development/19-bedrock-video.md](../../04-development/19-bedrock-video.md)
