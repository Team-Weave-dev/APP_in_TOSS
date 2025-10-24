# completeProductGrant - 상품 지급 완료 처리

## 개요

`completeProductGrant` 함수는 사용자에게 상품을 전달한 후 대기 중인 인앱 구매 주문을 완료로 표시합니다.

**지원 환경:**
- React Native
- WebView

**실행 환경:** Toss App

**최소 버전 요구사항:** Android 5.231.0, iOS 5.231.0

## 함수 시그니처

```typescript
function completeProductGrant(params: {
  params: {
    orderId: string;
  };
}): Promise<boolean | undefined>;
```

## 파라미터

**객체 구조:**
- `params` (객체)
  - `orderId` (string): 상품 이행이 필요한 완료된 주문의 고유 식별자

## 반환 값

- `Promise<boolean | undefined>`: 성공적인 완료를 나타내는 boolean을 반환합니다. 앱 버전이 최소 지원 버전(Android 5.233.0, iOS 5.233.0) 미만인 경우 `undefined`를 반환합니다.

## 사용 예제

```typescript
import { IAP } from '@apps-in-toss/framework';

async function handleGrantProduct(orderId: string) {
  try {
    await IAP.completeProductGrant({ params: { orderId } });
  } catch (error) {
    console.error(error);
  }
}
```

## 구현 참고사항

이 함수는 상품이 사용자에게 성공적으로 전달된 후에만 호출되어야 하며, 주문 상태를 대기 중에서 완료로 업데이트합니다.

## 관련 함수

- **getPendingOrders**: 대기 중인 주문 목록 조회
- **createOneTimePurchaseOrder**: 결제 실행
- **getCompletedOrRefundedOrders**: 완료 또는 환불된 주문 조회
