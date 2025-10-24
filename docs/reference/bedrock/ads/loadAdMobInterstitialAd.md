# 광고 불러오기 (전면형)

## 개요

⚠️ **Deprecated**: 이 함수는 곧 제거될 예정입니다. `loadAppsInTossAdMob`을 사용하세요.

전면형 전면 광고를 로드하는 deprecated된 함수에 대한 문서입니다.

## 함수 시그니처

```typescript
function loadAdMobInterstitialAd(params: LoadAdMobInterstitialAdParams): typeof noop;
```

## 파라미터

### LoadAdMobInterstitialAdParams

- **options** (필수): `LoadAdMobInterstitialAdOptions`
  - **adUnitId** (필수, string): Google AdMob에서 제공하는 전면형 광고의 광고 단위 ID

- **onEvent** (함수): 광고 관련 이벤트 발생 시 트리거되는 콜백
  - 받는 값: `LoadAdMobInterstitialAdEvent`
  - 예시: 광고 로드됨, 클릭됨, 닫힘, impression 기록됨

- **onError** (함수): 광고 로딩 실패 시 호출되는 콜백
  - 받는 값: `unknown` (에러 사유)
  - 트리거 조건: 네트워크 오류, 지원되지 않는 환경

## 반환값

광고 이벤트 구독 해제를 위한 cleanup 함수(`typeof noop`)를 반환합니다.

## 주요 속성

- **isSupported()** → `boolean`: Google AdMob 광고 기능을 사용하기 전에 현재 앱 환경이 지원하는지 확인합니다.

## 중요 사항

⚠️ **Deprecated**: 이 함수는 곧 제거될 예정입니다. 대체 함수로 `loadAppsInTossAdMob`을 사용하세요.

## 지원 환경

- **프레임워크**: React Native, WebView
- **실행 환경**: Toss App
