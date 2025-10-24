# checkoutPayment - 토스페이 결제 인증 실행

## 개요

`checkoutPayment` 함수는 토스페이 결제 창을 표시하고 사용자 인증을 수행합니다. 완료 시 인증 결과를 반환합니다.

**중요:** 이 함수는 결제 창을 통한 사용자 인증만 처리합니다. 실제 결제 처리는 인증 성공 후 서버에서 별도로 수행해야 합니다.

## 지원 환경

- **프레임워크**: React Native, WebView
- **실행 환경**: Toss App, Sandbox App

## 함수 시그니처

```typescript
function checkoutPayment(options: CheckoutPaymentOptions): Promise<CheckoutPaymentResult>;
```

## 파라미터

**options** (필수) · `CheckoutPaymentOptions`

결제 창을 표시하는 데 필요한 설정 객체입니다.

## 반환 값

**Promise<CheckoutPaymentResult>**

인증 성공 여부와 이유 코드를 포함하는 프로미스를 반환합니다.

## 사용 예제

### React 구현

```typescript
import { checkoutPayment } from '@apps-in-toss/web-framework';
import { Button } from '@toss-design-system/mobile';

function TossPayButton() {
  async function handlePayment() {
    try {
      const { payToken } = await fetch('/my-api/payment/create').then((res) => res.json());
      const { success, reason } = await checkoutPayment({ payToken });

      if (success) {
        await fetch('/my-api/payment/execute', {
          method: 'POST',
          body: JSON.stringify({ payToken }),
          headers: { 'Content-Type': 'application/json' },
        });
      } else {
        console.log('인증 실패:', reason);
      }
    } catch (error) {
      console.error('결제 인증 중 오류가 발생했어요:', error);
    }
  }

  return <Button onClick={handlePayment}>결제하기</Button>;
}
```

### React Native 구현

```typescript
import { TossPay } from '@apps-in-toss/framework';
import { Button } from '@toss-design-system/react-native';

function TossPayButton() {
  async function handlePayment() {
    try {
      const { payToken } = await fetch('/my-api/payment/create').then((res) => res.json());
      const { success, reason } = await TossPay.checkoutPayment({ payToken });

      if (success) {
        await fetch('/my-api/payment/execute', {
          method: 'POST',
          body: JSON.stringify({ payToken }),
          headers: { 'Content-Type': 'application/json' },
        });
      } else {
        console.log('인증 실패:', reason);
      }
    } catch (error) {
      console.error('결제 인증 중 오류가 발생했어요:', error);
    }
  }

  return <Button onPress={handlePayment}>결제하기</Button>;
}
```

## 관련 API

- **CheckoutPaymentOptions**: 결제 옵션 인터페이스
- **CheckoutPaymentResult**: 결제 결과 인터페이스
- **TossPay**: 토스페이 메인 객체
