# 인앱 결제 개발 가이드

> **원본**: https://developers-apps-in-toss.toss.im/iap/develop.html
> **카테고리**: 수익화 > 인앱 결제

---

## 개요

Apps in Toss에서 인앱 결제(IAP)를 구현하는 방법을 다룹니다. 상품 관리, 구매 요청, 주문 복원, 상태 조회를 포함합니다.

## 핵심 요구사항

- **SDK 1.1.3+** 상품 지급 완료 프로세스에 필요
- **SDK 1.2.2+** 구매 복원 기능 추가
- 기기 간 구매를 유지하기 위해 네이티브 스토리지를 사용한 기기 영속성 구현 필수
- 주문 상태 API 접근을 위해 토스 로그인 통합 필요

## 핵심 구현 단계

### 1. 상품 목록 조회

SDK 메서드를 사용하여 콘솔에 등록된 상품 카탈로그에 접근합니다. 샌드박스 환경에서는 실제 승인된 상품 대신 "테스트 상품 - 1"과 같은 모의 데이터가 표시됩니다. 토스 앱 내 프로덕션 환경에서는 실제 승인된 상품이 표시됩니다.

**레퍼런스:** [getIapProductList](../reference/bedrock/payment/getIapProductList.md)

### 2. 인앱 결제 요청

SDK는 Google/Apple 영수증 검증을 포함하여 토스 서버를 통한 검증과 함께 구매 플로우를 시작합니다. SDK 1.1.3+는 성공 콜백을 반환하기 전에 파트너 상품 지급 로직을 실행합니다. 실패 시 `PRODUCT_NOT_GRANTED_BY_PARTNER` 오류를 반환합니다 (토스 앱 5.230.0+).

**참고:** "환불은 Apps in Toss가 아닌 앱 마켓플레이스에서 관리됩니다."

**레퍼런스:** [requestIap](../reference/bedrock/payment/requestIap.md)

### 3. 미처리 주문 복원

**getPendingOrders** - 상품 배송이 필요한 미결제 주문을 조회합니다
**completeProductGrant** - 상품 지급 후 주문을 완료 상태로 표시합니다

최소 앱 버전 지원: Android 5.231.0, iOS 5.231.0

**레퍼런스:**
- [getPendingOrders](../reference/bedrock/payment/getPendingOrders.md)
- [completeProductGrant](../reference/bedrock/payment/completeProductGrant.md)

### 4. 주문 상태 조회

#### SDK 메서드
`getCompletedOrRefundedOrders`는 완료 및 환불된 주문을 반환합니다 (미처리 주문 제외).

**레퍼런스:** [getCompletedOrRefundedOrders](../reference/bedrock/payment/getCompletedOrRefundedOrders.md)

#### API 메서드
**엔드포인트:** `POST /api-partner/v1/apps-in-toss/order/get-order-status`

**필수 헤더:**
- `x-toss-user-key`: 토스 로그인을 통해 획득

**요청 본문:**
```json
{
  "orderId": "13c9a1ff-2baa-4495-bbfa-a0826ba8c7c0"
}
```

**응답 상태 값:**
- `PAYMENT_COMPLETED` - 결제 및 상품 배송 완료
- `PURCHASED` - 결제 성공 (SDK 1.1.2 이하)
- `ORDER_IN_PROGRESS` - 처리 중
- `FAILED` - 결제 또는 배송 실패
- `REFUNDED` - 환불 완료
- `NOT_FOUND` - 주문을 찾을 수 없음

## 중요 사항

- 테스트 환불은 소액으로만 진행
- 기기 변경 시 주문 복원 로직 필요
- 실패한 주문은 `getPendingOrders` 및 `completeProductGrant`를 통한 복원 필요
- 사용자는 토스 앱(v5.229.1+)을 통해 환불을 요청할 수 있음

## 관련 문서

- [인앱 결제 이해하기](09-iap-intro.md)
- [콘솔 가이드](10-iap-console.md)
- [QA 진행하기](12-iap-qa.md)
