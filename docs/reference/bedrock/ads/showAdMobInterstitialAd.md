# 광고 보여주기 (전면형)

## 개요

⚠️ **Deprecated**: 이 함수는 곧 제거될 예정입니다. `showAppsInTossAdMob`을 사용하세요.

`showAdMobInterstitialAd` 함수는 전면형 전면 광고를 사용자에게 표시합니다. 이 함수는 `loadAdMobInterstitialAd`를 사용하여 미리 로드된 광고를 표시합니다.

## 함수 시그니처

```typescript
function showAdMobInterstitialAd(params: ShowAdMobInterstitialAdParams): typeof noop;
```

## 파라미터

### ShowAdMobInterstitialAdParams

- **options** (필수) - ShowAdMobInterstitialAdOptions
  - **adUnitId** (필수, string): `loadAdMobInterstitialAd`를 통해 로드된 전면형 광고의 광고 단위 ID

- **onEvent** (선택) - 광고 관련 이벤트에서 트리거되는 콜백 함수
  - 타입: `(event: ShowAdMobInterstitialAdEvent) => void`
  - 광고 표시 요청 또는 기타 광고 이벤트 발생 시 실행
  - 이벤트 타입은 `ShowAdMobInterstitialAdEvent` 참조

- **onError** (선택) - 에러 콜백 함수
  - 타입: `(reason: unknown) => void`
  - 광고 표시 실패 시 트리거 (네트워크 오류, 지원되지 않는 환경 등)

## 속성

- **isSupported()** - `boolean` 반환
  - 현재 앱 환경이 Google AdMob 광고를 지원하는지 확인
  - 기능 사용 전에 호출해야 합니다

## 지원 환경

- **프레임워크**: React Native, WebView
- **실행 환경**: Toss App

## 사용 예제

```typescript
GoogleAdMob.showAdMobInterstitialAd({
  options: {
    adUnitId: '<AD_UNIT_ID>',
  },
  onEvent: (event) => {
    if (event.type === 'requested') {
      console.log('광고 표시 요청 완료');
    }
  },
  onError: (error) => {
    console.error('광고 표시 실패', error);
  },
});
```

## 중요 사항

- 호출하기 전에 항상 `isSupported()`를 사용하여 지원 여부 확인
- `loadAdMobInterstitialAd`를 통해 미리 로드된 광고가 필요합니다
- 전면 광고는 전체 앱 인터페이스를 덮습니다
- 사용자는 광고를 닫고 앱으로 돌아갈 수 있습니다
