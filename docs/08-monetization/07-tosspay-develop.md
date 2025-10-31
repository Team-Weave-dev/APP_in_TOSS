# 토스페이 개발 가이드

> **원본**: https://developers-apps-in-toss.toss.im/tosspay/develop.html
> **카테고리**: 수익화 > 토스페이

---

## 개요

토스페이는 토스앱 내에서 간편 결제를 제공하는 서비스입니다. 이 문서는 결제 생성, 인증, 실행, 환불 및 상태 조회를 위한 API 연동 가이드를 제공합니다.

**BaseURL**: `https://pay-apps-in-toss-api.toss.im`

---

## 1. 결제 생성하기 (Make Payment)

결제 건을 생성하여 결제 토큰을 발급받습니다.

### 요청
- **Method**: POST
- **URL**: `/api-partner/v1/apps-in-toss/pay/make-payment`
- **Content-type**: application/json

### 필수 헤더
| 파라미터 | 설명 |
|---------|------|
| `x-toss-user-key` | 토스 로그인을 통해 획득한 사용자 키 |

### 필수 파라미터
| 파라미터 | 타입 | 설명 |
|---------|------|------|
| `orderNo` | String | 가맹점의 고유 주문번호 (50자 이내, 특수문자 `_-:.^@'` 허용) |
| `productDesc` | String | 상품 설명 (255자 이내, 백슬래시 미포함) |
| `amount` | Integer | 총 결제 금액 |
| `amountTaxFree` | Integer | 비과세 금액 (필수 입력) |
| `isTestPayment` | Boolean | 샌드박스 여부 |

### 선택 파라미터
| 파라미터 | 타입 | 설명 |
|---------|------|------|
| `amountTaxable` | Integer | 과세 금액 |
| `amountVat` | Integer | 부가세 |
| `amountServiceFee` | Integer | 봉사료 |
| `enablePayMethods` | String | 결제수단 제한: `TOSS_MONEY`, `CARD` |
| `cashReceipt` | Boolean | 현금영수증 발급 여부 |
| `installment` | String | 할부 제한: `USE`, `NOT_USE` |

### 응답
```json
{
  "resultType": "SUCCESS",
  "success": {
    "payToken": "string"
  }
}
```

**주의**: "주문번호는 반드시 가맹점별로 매회 유니크해야 하며, 중복될 경우 결제 생성 요청이 실패합니다."

---

## 2. 결제 인증하기 (Checkout Payment)

SDK를 통해 결제창을 띄우고 사용자 인증을 수행합니다. 이 단계에서는 사용자 인증만 진행되며, 실제 결제는 다음 단계에서 처리됩니다.

**API 레퍼런스**: [checkoutPayment](../reference/bedrock/tosspay/checkoutPayment.md)

---

## 3. 결제 실행하기 (Execute Payment)

인증 완료된 결제를 실제로 승인하여 금액을 출금합니다.

### 요청
- **Method**: POST
- **URL**: `/api-partner/v1/apps-in-toss/pay/execute-payment`

### 필수 파라미터
| 파라미터 | 타입 | 설명 |
|---------|------|------|
| `payToken` | String | 결제 생성 시 발급받은 토큰 |
| `isTestPayment` | Boolean | 샌드박스 여부 |

### 선택 파라미터
| 파라미터 | 타입 | 설명 |
|---------|------|------|
| `orderNo` | String | 가맹점 주문번호 |

### 응답 필드 (핵심)
| 필드 | 설명 |
|------|------|
| `mode` | 결제환경 (LIVE/TEST) |
| `orderNo` | 승인된 주문번호 |
| `amount` | 상품금액 |
| `approvalTime` | 승인 처리 시간 |
| `stateMsg` | 상태 응답 텍스트 |
| `paidAmount` | 지불수단 승인금액 |
| `payMethod` | 결제수단 (TOSS_MONEY/CARD) |
| `transactionId` | 거래 트랜잭션 아이디 |

---

## 4. 결제 환불하기 (Refund Payment)

결제 건을 구매자에게 환불합니다.

### 요청
- **Method**: POST
- **URL**: `/api-partner/v1/apps-in-toss/pay/refund-payment`

### 필수 파라미터
| 파라미터 | 타입 | 설명 |
|---------|------|------|
| `payToken` | String | 토스페이 토큰 |
| `reason` | String | 환불 사유 (한글, 숫자, 영문, 특정 특수문자만 허용) |
| `isTestPayment` | Boolean | 샌드박스 여부 |

### 응답 필드
환불 번호, 처리 시간, 환불 가능 잔액, 실제 환불 금액 등이 반환됩니다.

---

## 5. 결제 상태 조회하기 (Get Payment Status)

생성된 결제건의 거래 상태와 트랜잭션을 조회합니다.

### 요청
- **Method**: POST
- **URL**: `/api-partner/v1/apps-in-toss/pay/get-payment-status`

### 필수 파라미터
| 파라미터 | 타입 | 설명 |
|---------|------|------|
| `payToken` | String | 토스페이 토큰 |
| `orderNo` | String | 가맹점 주문번호 |
| `isTestPayment` | Boolean | 샌드박스 여부 |

### 응답 정보
결제 상태, 거래 트랜잭션 목록, 할인 정보, 결제 수단 상세정보 등을 포함합니다.

---

## 결제 상태 코드

| 상태 | 설명 |
|------|------|
| `PAY_STANDBY` | 결제 대기 중 |
| `PAY_APPROVED` | 구매자 인증 완료 |
| `PAY_COMPLETE` | 결제 완료 |
| `REFUND_SUCCESS` | 환불 성공 |
| `SETTLEMENT_COMPLETE` | 정산 완료 |

---

## 은행 코드 목록 (일부)

| 코드 | 은행명 |
|------|--------|
| 088 | 신한은행 |
| 089 | 케이뱅크 |
| 090 | 카카오뱅크 |
| 092 | 토스뱅크 |

---

## 카드사 코드

| 코드 | 카드사 |
|------|--------|
| 1 | 신한 |
| 2 | 현대 |
| 4 | 국민 |
| 5 | 롯데 |
| 6 | 하나 |

---

## 주요 에러 코드

| 코드 | 설명 |
|------|------|
| `PAYMENT_EXISTING_PAYMENT` | 이미 존재하는 결제 |
| `COMMON_INVALID_API_KEY` | 바르지 않은 apiKey |
| `COMMON_BREAK_TIME_OF_BANK` | 은행 점검 시간 |

---

## 주의사항

- "결제 토큰은 매회 유니크하게 생성되며, 가맹점에서는 반드시 저장하고 관리해야 합니다."
- 할인 금액은 토스앱의 자동 할인과 포인트 사용액을 포함합니다.
- 테스트 환경과 라이브 환경 간 주문번호 충돌 방지를 위해 가맹점에서 관리 필요합니다.

## 관련 문서

- [토스페이 이해하기](05-tosspay-intro.md)
- [콘솔 가이드](06-tosspay-console.md)
- [QA 진행하기](08-tosspay-qa.md)
