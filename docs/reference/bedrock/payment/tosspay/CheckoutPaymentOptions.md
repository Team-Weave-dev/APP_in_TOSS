# CheckoutPaymentOptions - 토스페이 결제 옵션

## 개요

`CheckoutPaymentOptions`는 토스페이 결제 창을 표시하는 데 필요한 설정을 지정하는 인터페이스입니다.

**지원 환경:**
- React Native
- WebView

**실행 환경:** Toss App, Sandbox App

## 인터페이스 정의

```typescript
interface CheckoutPaymentOptions {
  payToken: string;
}
```

## 속성

### payToken
- **타입:** `string`
- **필수:** Yes
- **설명:** 결제 토큰이에요

이 속성은 토스페이 체크아웃 프로세스를 시작하는 데 필요한 결제 토큰을 포함합니다.

## 관련 문서

이 인터페이스는 다음과 함께 사용됩니다:
- `checkoutPayment()` - 결제 인증 실행
- `CheckoutPaymentResult` - 결제 결과 응답 정의
- `TossPay` - 토스페이 메인 객체

## 구현 컨텍스트

`CheckoutPaymentOptions`는 결제 인증을 위한 파라미터 인터페이스로, 개발자는 미리 생성된 결제 토큰을 전달하여 토스 애플리케이션 환경에서 체크아웃 플로우를 시작합니다.
