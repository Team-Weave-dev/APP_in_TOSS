# 광고 보여주기 (보상형)

## 개요

⚠️ **Deprecated**: 이 함수는 곧 제거될 예정입니다. `showAppsInTossAdMob`을 사용하세요.

`showAdMobRewardedAd` 함수는 미리 로드된 보상형 광고를 사용자에게 표시합니다. 광고 전체를 시청한 사용자는 보상을 받습니다. 이 함수는 `loadAdMobRewardedAd`를 사용하여 미리 로드된 광고와 함께 작동합니다.

## 함수 시그니처

```typescript
function showAdMobRewardedAd(params: ShowAdMobRewardedAdParams): typeof noop;
```

## 파라미터

**params** (필수) - 다음을 포함하는 설정 객체:

- **options** (필수) - `ShowAdMobRewardedAdOptions`
  - **adUnitId** (필수, string): `loadAdMobRewardedAd`를 통해 로드된 보상형 광고 인스턴스의 광고 단위 식별자

- **onEvent** (선택): 광고 관련 이벤트 발생 시 트리거되는 콜백 (예: "광고 표시가 요청될 때")
  - 파라미터: `event: ShowAdMobRewardedAdEvent`

- **onError** (선택): 광고 표시 실패 시 트리거되는 콜백 (네트워크 오류, 지원되지 않는 환경)
  - 파라미터: `reason: unknown`

## 속성

- **isSupported()** => boolean: 기능을 사용하기 전에 현재 앱 환경이 Google AdMob 기능을 지원하는지 확인합니다.

## 사용 예제

```typescript
GoogleAdMob.showAdMobRewardedAd({
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

- 이 함수를 호출하기 전에 항상 `isSupported()`를 사용하여 지원 여부 확인
- 이 함수는 `loadAdMobRewardedAd`를 통해 미리 로드된 광고가 필요합니다
- 실행 환경: Toss App 전용
- 지원 플랫폼: React Native 및 WebView
