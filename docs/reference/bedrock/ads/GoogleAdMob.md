# AdMob 객체

## 개요

`GoogleAdMob` 객체는 Bedrock 프레임워크 내에서 Google AdMob 광고 관련 기능을 담고 있는 컨테이너입니다.

## 지원 환경

- **프레임워크**: React Native, WebView
- **실행 환경**: Toss App

## 함수 시그니처

```typescript
GoogleAdMob: {
    loadAdMobInterstitialAd: typeof loadAdMobInterstitialAd;
    showAdMobInterstitialAd: typeof showAdMobInterstitialAd;
    loadAdMobRewardedAd: typeof loadAdMobRewardedAd;
    showAdMobRewardedAd: typeof showAdMobRewardedAd;
    loadAppsInTossAdMob: typeof loadAppsInTossAdMob;
    showAppsInTossAdMob: typeof showAppsInTossAdMob;
}
```

## 속성

### Deprecated 메서드

**`loadAdMobInterstitialAd`** *(Deprecated)*
- 전면형 광고를 불러옵니다
- `loadAppsInTossAdMob`으로 대체되었습니다

**`showAdMobInterstitialAd`** *(Deprecated)*
- 불러온 전면형 광고를 표시합니다
- `showAppsInTossAdMob`으로 대체되었습니다

**`loadAdMobRewardedAd`** *(Deprecated)*
- 보상형 광고를 불러옵니다
- `loadAppsInTossAdMob`으로 대체되었습니다

**`showAdMobRewardedAd`** *(Deprecated)*
- 불러온 보상형 광고를 표시합니다
- `showAppsInTossAdMob`으로 대체되었습니다

### 현재 메서드

**`loadAppsInTossAdMob`**
- 광고를 불러오는 통합 함수입니다
- 설정 옵션 및 이벤트 처리에 대한 자세한 내용은 관련 문서를 참조하세요

**`showAppsInTossAdMob`**
- 광고를 표시하는 통합 함수입니다
- 프레젠테이션 및 이벤트 관리를 처리합니다

## 마이그레이션 안내

deprecated된 메서드를 사용하는 개발자는 향후 호환성을 위해 통합된 `loadAppsInTossAdMob` 및 `showAppsInTossAdMob` 함수로 전환해야 합니다.
