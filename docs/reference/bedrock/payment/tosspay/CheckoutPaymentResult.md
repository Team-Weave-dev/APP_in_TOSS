# CheckoutPaymentResult - 토스페이 결제 결과

## 개요

`CheckoutPaymentResult`는 토스페이 결제 창에서 반환되는 결제 인증 결과를 나타내는 TypeScript 인터페이스입니다.

## 타입 시그니처

```typescript
interface CheckoutPaymentResult {
  success: boolean;
  reason?: string;
}
```

## 속성

### `success` (필수)
- **타입**: `boolean`
- **설명**: 인증이 성공했는지 여부예요

### `reason` (선택)
- **타입**: `string`
- **설명**: 인증이 실패했을 경우의 이유예요

## 지원 환경

- **프레임워크**: React Native, WebView
- **실행 환경**: Toss App, Sandbox App

## 사용 컨텍스트

이 인터페이스는 `checkoutPayment()` 함수를 통한 결제 체크아웃 프로세스에서 반환되어, 개발자가 사용자가 결제 인증을 성공적으로 완료했는지 확인하고 실패 시나리오를 적절하게 처리할 수 있도록 합니다.

## 관련 함수

- **checkoutPayment**: 결제 인증 실행
- **CheckoutPaymentOptions**: 결제 옵션 인터페이스
