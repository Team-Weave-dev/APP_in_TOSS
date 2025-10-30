# Bedrock SDK 레퍼런스 (bedrock)

> **상위 컨텍스트**: [reference/claude.md](../claude.md) → [docs/claude.md](../../claude.md) → [루트 CLAUDE.md](../../../CLAUDE.md)

## 📌 디렉토리 목적

Apps in Toss **Bedrock SDK의 상세 API 레퍼런스**입니다.

---

## 📖 이 디렉토리 사용 방법

⚠️ **이 파일의 역할**: 94개 API의 **네비게이션 가이드**

**API 사용 전 필수**:
- 이 파일에서 API 위치 파악
- **해당 API 문서를 반드시 읽으세요**
- 프로젝트 전체 규칙 준수

**예**: `getCurrentLocation()` 사용 시
→ `location/getCurrentLocation.md` **필수 참조**

**상세 가이드**: [../../04-development/02-prepare.md - API 사용 가이드](../../04-development/02-prepare.md)

---

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

## ⚠️ 프로젝트 전체 범용 규칙 (상위 문서 참조)

> **이 섹션**: 모든 API에 적용되는 범용 규칙 (상세는 링크 참조)
> **API별 상세 사항**: 반드시 해당 API 문서 참조

### 1. UX Writing - API 파라미터 텍스트 (🔴 필수)

사용자에게 표시되는 모든 텍스트는 ~해요체 사용

**적용**: share, toast, dialog 등의 메시지 파라미터
**예시**: `share({ title: '앱을 공유해요' })` ✅ / `'앱을 공유합니다'` ❌

**참조**: [../../03-design/03-ux-writing.md](../../03-design/03-ux-writing.md)

### 2. 언어 규칙 - API vs UI (🔴 필수)

- **로깅 데이터**: 영어 (예: `Analytics.logEvent('button_click', {...})`)
- **UI 텍스트**: 한글 ~해요체

**참조**: [../../06-analytics/claude.md](../../06-analytics/claude.md)

### 3. 프로젝트 타입 독립성

Bedrock SDK는 WebView/React Native/Unity 모두 공통 사용

**참조**: [../../../CLAUDE.md - 타입 구분](../../../CLAUDE.md#프로젝트-타입-구분-시스템)

**상세 규칙**: [../../../STANDARD_RULES.md](../../../STANDARD_RULES.md)

---

## 🔗 연관 디렉토리

- **개발 가이드**: [04-development/03-react-native.md](../../04-development/03-react-native.md)
- **예제 코드**: [../../../example/](../../../example/claude.md)
- **영상 가이드**: [04-development/19-bedrock-video.md](../../04-development/19-bedrock-video.md)
