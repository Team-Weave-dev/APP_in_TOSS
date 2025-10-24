# getPendingOrders - 대기 중인 주문 목록 조회

## 개요

`getPendingOrders` 함수는 결제는 완료되었지만 상품이 아직 사용자에게 전달되지 않은 주문 목록을 조회합니다.

## 지원 환경

- **실행 환경**: Toss App
- **플랫폼**: React Native, WebView
- **최소 버전**: Android 5.231.0, iOS 5.231.0

## 함수 시그니처

```typescript
function getPendingOrders(): Promise<{ orderIds: string[] } | undefined>;
```

## 반환 값

- **타입**: `Promise<{ orderIds: string[] } | undefined>`
- **설명**: 대기 중인 주문 ID 배열을 반환합니다. 앱 버전이 최소 지원 버전 미만인 경우 `undefined`를 반환합니다.

## 주요 기능

- 상품 전달을 기다리는 미지급 주문 조회
- 불완전한 `createOneTimePurchaseOrder` 호출로부터 주문 복구 가능
- 개발자가 사용자에게 지급해야 할 상품을 식별할 수 있게 함

## 사용 예제

```typescript
import { IAP } from '@apps-in-toss/framework';

async function fetchOrders() {
  try {
    const pendingOrders = await IAP.getPendingOrders();
    return pendingOrders;
  } catch (error) {
    console.error(error);
  }
}
```

## 관련 함수

- **createOneTimePurchaseOrder**: 구매 시작
- **completeProductGrant**: 상품 전달 처리
- **getProductItemList**: 사용 가능한 상품 조회
