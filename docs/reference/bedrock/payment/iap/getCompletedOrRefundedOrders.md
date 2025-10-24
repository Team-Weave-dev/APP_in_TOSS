# getCompletedOrRefundedOrders - 완료/환불 주문 목록 조회

## 개요

`getCompletedOrRefundedOrders` 함수는 완료되거나 환불된 인앱 구매 주문 목록을 조회합니다. 여기에는 결제와 상품 전달이 완료된 주문과 환불된 거래가 포함됩니다.

**중요:** 결제는 완료되었지만 상품이 아직 지급되지 않은 주문건은 조회되지 않아요.

## 지원 환경

- **플랫폼:** React Native, WebView
- **실행 환경:** Toss App
- **최소 버전:** Android 5.231.0, iOS 5.231.0

## 함수 시그니처

```typescript
function getCompletedOrRefundedOrders(params?: {
  key?: string | null;
}): Promise<CompletedOrRefundedOrdersResult | undefined>;
```

## 파라미터

| 파라미터 | 타입 | 설명 |
|-----------|------|-------------|
| `key` | string \| null (선택) | 페이지네이션을 위한 커서 키. 이전 응답의 `nextKey`를 사용합니다. 초기 요청에는 생략하거나 `null`을 전달합니다. |

## 반환 값

**타입:** `Promise<CompletedOrRefundedOrdersResult | undefined>`

앱 버전이 최소 지원 버전 미만인 경우 `undefined`를 반환합니다.

### CompletedOrRefundedOrdersResult 구조

```typescript
interface CompletedOrRefundedOrdersResult {
    hasNext: boolean;
    nextKey?: string | null;
    orders: {
        orderId: string;
        sku: string;
        status: 'COMPLETED' | 'REFUNDED';
        date: string;
    }[];
}
```

| 속성 | 타입 | 설명 |
|----------|------|-------------|
| `hasNext` | boolean | 페이지네이션을 위한 추가 주문 존재 여부 |
| `nextKey` | string \| null | 다음 페이지 조회를 위한 페이지네이션 커서 |
| `orders[].orderId` | string | 고유 주문 식별자 |
| `orders[].sku` | string | 상품 SKU 식별자 |
| `orders[].status` | 'COMPLETED' \| 'REFUNDED' | 주문 상태 |
| `orders[].date` | string | ISO 8601 형식 날짜(YYYY-MM-DDTHH:mm:ss). 완료된 주문의 경우 구매 날짜, 환불된 주문의 경우 환불 날짜를 나타냅니다. |

## 사용 예제

```typescript
import { IAP } from '@apps-in-toss/framework';

async function fetchOrders() {
  try {
    const response = await IAP.getCompletedOrRefundedOrders();
    return response;
  } catch (error) {
    console.error(error);
  }
}
```

## 관련 함수

- **getPendingOrders**: 상품 전달 대기 중인 주문 조회
- **completeProductGrant**: 상품 전달 완료로 표시
