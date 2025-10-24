# 광고 불러오기 (보상형)

## 개요

⚠️ **Deprecated**: 이 함수는 곧 제거될 예정입니다. `loadAppsInTossAdMob`을 사용하세요.

Apps in Toss 플랫폼에서 보상형 광고를 로드하는 deprecated된 함수에 대한 문서입니다. 이 함수는 즉시 표시할 수 있도록 보상형 광고를 미리 준비합니다.

## 함수 시그니처

```typescript
function loadAdMobRewardedAd(params: LoadAdMobRewardedAdParams): typeof noop;
```

## 파라미터

### `LoadAdMobRewardedAdParams`

- **`options`** (필수) - `LoadAdMobRewardedAdOptions`
  - **`adUnitId`** (필수, string): Google AdMob에서 발급한 보상형 광고 단위 식별자

- **`onEvent`** (콜백): 광고 관련 이벤트 발생 시 트리거됩니다
  - 받는 값: `LoadAdMobRewardedAdEvent`
  - 이벤트 타입: `loaded`, `clicked`, `dismissed`, `failedToShow`, `impression`, `show`, `userEarnedReward`

- **`onError`** (콜백): 광고 로딩 실패 시 호출됩니다
  - 받는 값: `unknown` (에러 사유)

## 속성

- **`isSupported()`** → boolean: 현재 앱 환경이 Google AdMob 기능을 지원하는지 확인합니다

## 주요 이벤트

| 이벤트 | 설명 |
|-------|------|
| `loaded` | 광고가 성공적으로 로드됨 |
| `userEarnedReward` | 사용자가 광고 시청 완료 |
| `dismissed` | 광고 닫힘 |
| `failedToShow` | 광고 표시 실패 |
| `clicked` | 사용자가 광고 클릭 |

## 코드 예제

```typescript
const cleanup = GoogleAdMob.loadAdMobRewardedAd({
  options: {
    adUnitId: '<AD_UNIT_ID>',
  },
  onEvent: (event) => {
    if (event.type === 'loaded') {
      console.log('표시 준비 완료');
    }
  },
  onError: (error) => {
    console.error('실패:', error);
  },
});
```

## 중요 사항

- 사용 전에 `isSupported()`를 통해 플랫폼 지원 여부 확인
- 환경 컨텍스트: React Native 및 WebView
- 실행 환경: Toss App 전용
- 이벤트 리스너 제거를 위한 cleanup 함수 반환
