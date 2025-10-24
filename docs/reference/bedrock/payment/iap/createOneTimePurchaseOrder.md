# createOneTimePurchaseOrder - 인앱 결제 실행

## 개요

`createOneTimePurchaseOrder` 함수는 결제 창을 사용자에게 표시하고 거래 프로세스를 관리하여 인앱 구매 플로우를 시작합니다.

## 지원 환경

- **프레임워크**: React Native, WebView
- **실행 환경**: Toss App

## 함수 시그니처

```typescript
function createOneTimePurchaseOrder(
  params: IapCreateOneTimePurchaseOrderOptions
): () => void;
```

## 파라미터

### IapCreateOneTimePurchaseOrderOptions

```typescript
interface IapCreateOneTimePurchaseOrderOptions {
  options: {
    sku: string;
    processProductGrant: (params: { orderId: string }) => boolean | Promise<boolean>;
  };
  onEvent: (event: SuccessEvent) => void | Promise<void>;
  onError: (error: unknown) => void | Promise<void>;
}
```

**options** (필수)
- `sku` (필수, string): 구매할 상품 식별자
- `processProductGrant` (필수, function): 주문 생성 후 실행되는 콜백. `orderId`를 받고 전달 성공 여부를 나타내는 boolean 또는 Promise<boolean>을 반환해야 함

**onEvent** (필수): 구매 성공 시 트리거됩니다. type이 "success"인 SuccessEvent와 결제 세부 정보를 받습니다

**onError** (필수): 구매 프로세스 중 오류 발생 시 트리거됩니다

## 반환 값

인앱 구매 작업 완료 후 리소스를 해제하기 위해 호출해야 하는 정리 함수 `() => void`를 반환합니다.

## 성공 이벤트 데이터

```typescript
interface IapCreateOneTimePurchaseOrderResult {
  orderId: string;           // 구매 주문 ID
  displayName: string;       // 표시용 상품명
  displayAmount: string;     // 통화 기호가 포함된 가격
  amount: number;            // 숫자 가격 값
  currency: string;          // 통화 코드
  fraction: number;          // 가격 표시를 위한 소수 자릿수
  miniAppIconUrl: string | null; // 미니앱 아이콘 URL
}
```

## 오류 코드

- `INVALID_PRODUCT_ID`: 유효하지 않거나 존재하지 않는 상품 식별자
- `PAYMENT_PENDING`: 승인 대기 중인 결제
- `NETWORK_ERROR`: 서버 통신 실패
- `INVALID_USER_ENVIRONMENT`: 상품과 호환되지 않는 기기/계정
- `APP_MARKET_VERIFICATION_FAILED`: 앱 스토어 검증 실패; 환불 필요
- `TOSS_SERVER_VERIFICATION_FAILED`: 결제 완료되었으나 서버 전송 실패
- `INTERNAL_ERROR`: 서버 측 처리 오류
- `KOREAN_ACCOUNT_ONLY`: iOS 전용; 한국 계정 필요
- `USER_CANCELED`: 사용자가 구매 중단
- `PRODUCT_NOT_GRANTED_BY_PARTNER`: 파트너 상품 전달 실패

## 사용 예제

```typescript
const cleanup = IAP.createOneTimePurchaseOrder({
  options: {
    sku: "product_id",
    processProductGrant: ({ orderId }) => {
      // 상품 전달 로직 구현
      return true; // 전달 성공 상태 반환
    }
  },
  onEvent: (event) => {
    console.log(event); // 성공한 구매 처리
  },
  onError: (error) => {
    console.error(error); // 오류 처리
  },
});

// 완료 시 정리 함수 호출
cleanup();
```

## 관련 함수

- **getProductItemList**: 상품 목록 조회
- **getPendingOrders**: 대기 중인 주문 조회
- **completeProductGrant**: 상품 지급 완료 처리
