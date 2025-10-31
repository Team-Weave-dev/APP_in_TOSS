# 인앱 광고 개발하기

> **원본**: https://developers-apps-in-toss.toss.im/ads/develop.html
> **카테고리**: 수익화 > 인앱 광고

---

## 개요

Apps in Toss 플랫폼을 통한 인앱 광고 구현을 다룹니다.

## 주요 섹션

### 1. 광고 불러오기

**목적:** 필요할 때 즉시 표시할 수 있도록 광고를 미리 로드합니다.

**구현:** SDK 통합을 통해 `loadAppsInTossAdMob` 함수를 사용합니다.

**중요 경고:** "페이지 별로 광고를 미리 로드해 주세요. 광고가 로드되지 않은 상태에서 호출하면 오류가 발생해 fill-rate가 낮아질 수 있어요." - 페이지별로 광고를 미리 로드하세요. 로드되지 않은 상태에서 호출하면 오류가 발생하고 fill-rate가 낮아질 수 있습니다.

**iOS 주의사항:** 앱 추적 모드가 활성화되어 있으면 광고 로드가 제대로 작동하지 않을 수 있습니다. 테스트 전에 추적 모드를 비활성화하세요.

### 2. 광고 보여주기

**순서 요구사항:** `loadAppsInTossAdMob`에서 이벤트를 수신한 후에만 `showAppsInTossAdMob`를 호출하세요.

**패턴:** 로드 → 표시 → 다음 로드 → 표시 순서를 따르세요 (안정적인 작동 보장).

**제한사항:** 한 번에 하나의 광고만 로드됩니다.

## 테스트

### 테스트 광고 ID

개발 테스트를 위해 다음 테스트 광고 ID를 사용하세요:
- **전면형 (Interstitial):** `ait-ad-test-interstitial-id`
- **리워드형 (Rewarded):** `ait-ad-test-rewarded-id`

**중요:** 테스트 중 실제 광고 ID를 사용하면 제재를 받을 수 있습니다.

## FAQ

**샌드박스 제한사항:** 인앱 광고 기능은 샌드박스 환경에서 지원되지 않습니다. 대신 콘솔 QR 코드를 사용하여 테스트하세요.

---

**최소 SDK 버전:** 1.0.3 이상 필요.

## API 레퍼런스

- [loadAdMobInterstitialAd](../reference/bedrock/ads/loadAdMobInterstitialAd.md) - 전면 광고 로드
- [showAdMobInterstitialAd](../reference/bedrock/ads/showAdMobInterstitialAd.md) - 전면 광고 표시
- [loadAdMobRewardedAd](../reference/bedrock/ads/loadAdMobRewardedAd.md) - 리워드 광고 로드
- [showAdMobRewardedAd](../reference/bedrock/ads/showAdMobRewardedAd.md) - 리워드 광고 표시

## 관련 문서

- [인앱 광고 이해하기](01-ads-intro.md)
- [콘솔 가이드](02-ads-console.md)
- [QA 진행하기](04-ads-qa.md)
