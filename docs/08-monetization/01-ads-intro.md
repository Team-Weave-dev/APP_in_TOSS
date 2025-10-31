# 인앱 광고 이해하기

> **원본**: https://developers-apps-in-toss.toss.im/ads/intro.html
> **카테고리**: 수익화 > 인앱 광고

---

## 개요

인앱 광고는 앱 내부에 노출되는 광고로, "서비스 이용 중 자연스럽게 사용자에게 도달하는 광고 방식"입니다.

## 광고 유형

인앱 광고는 두 가지 형태로 제공됩니다:

### 1. 전면형 광고
- 광고가 전체화면으로 표시됨
- 화면 전환 지점에서 노출

### 2. 보상형 광고
- "'광고를 시청하면 보상 지급'의 구조"
- 사용자가 원할 때 광고를 볼 수 있음

## 주요 이점

- **유연한 활용**: 전면형과 리워드 광고를 선택하여 원하는 지점에 배치 가능
- **즉시 수익화**: 출시 첫날부터 광고 수익 발생
- **리텐션 향상**: 게임에서 "광고 보고 이어하기" 기능으로 사용자 재참여 유도

## 필수 주의사항

### 테스트 ID 사용 필수
"인앱 광고 테스트는 반드시 테스트용 ID를 사용"해야 합니다:
- 전면형: `ait-ad-test-interstitial-id`
- 리워드형: `ait-ad-test-rewarded-id`

운영 ID 사용 시 제재될 수 있습니다.

### 기타 주의사항
- 과도한 광고 노출 금지
- 광고 재생 시 앱 사운드를 일시 중지하고, 종료 후 자동 복구

## 관련 문서

- [콘솔 가이드](02-ads-console.md)
- [개발 가이드](03-ads-develop.md)
- [QA 진행하기](04-ads-qa.md)

## API 레퍼런스

- [전면 광고 로드](../reference/bedrock/ads/loadAdMobInterstitialAd.md)
- [전면 광고 표시](../reference/bedrock/ads/showAdMobInterstitialAd.md)
- [리워드 광고 로드](../reference/bedrock/ads/loadAdMobRewardedAd.md)
- [리워드 광고 표시](../reference/bedrock/ads/showAdMobRewardedAd.md)
