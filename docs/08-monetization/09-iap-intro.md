# 인앱 결제 이해하기

> **원본**: https://developers-apps-in-toss.toss.im/iap/intro.html
> **카테고리**: 수익화 > 인앱 결제

---

## 인앱 결제란?

인앱 결제는 사용자가 앱을 떠나지 않고 앱 내에서 직접 디지털 상품을 구매할 수 있는 결제 방법입니다. 사용자는 앱 세션 중에 기능, 아이템, 콘텐츠를 원활하게 구매할 수 있습니다.

상품은 두 가지 유형으로 분류됩니다:

- **소모품 (Consumable items)**: 사용 시 소진되며 지속적인 접근을 위해 재구매가 필요한 상품
- **비소모품 (Non-consumable items)**: 한 번 구매하면 영구적으로 접근할 수 있는 상품

## 인앱 결제의 이점

- **사용자 이탈 감소**: 고객이 앱을 종료하지 않고 거래를 완료하여 이탈을 최소화합니다
- **조기 수익화**: 개발자가 출시부터 유료 기능 및 구독 상품을 제공하여 수익을 창출할 수 있습니다
- **수익 최적화**: 소모품과 비소모품을 모두 사용하여 다양한 수익 흐름을 가능하게 합니다

## 중요 고려사항

- **환불 정책**: 환불 절차는 Apple 및 Google 가이드라인을 따릅니다
- **가격 구조**: 표시된 가격에는 기본 비용에 부가세가 포함됩니다
- **사용자 경험**: 결제 처리 중 앱 내 음악, 비디오 및 기타 기능은 일시 중지되어야 하며 이후 자동으로 재개되어야 합니다

---

## 관련 문서

- [콘솔 가이드](10-iap-console.md)
- [개발 가이드](11-iap-develop.md)
- [QA 진행하기](12-iap-qa.md)

## API 레퍼런스

- [getIapProductList](../reference/bedrock/payment/getIapProductList.md) - 상품 목록 조회
- [requestIap](../reference/bedrock/payment/requestIap.md) - 인앱 결제 요청
- [getPendingOrders](../reference/bedrock/payment/getPendingOrders.md) - 미처리 주문 조회
- [completeProductGrant](../reference/bedrock/payment/completeProductGrant.md) - 상품 지급 완료
- [getCompletedOrRefundedOrders](../reference/bedrock/payment/getCompletedOrRefundedOrders.md) - 완료/환불 주문 조회
