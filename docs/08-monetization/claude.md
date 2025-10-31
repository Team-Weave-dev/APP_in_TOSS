# 수익화 (08-monetization)

> **상위 컨텍스트**: [docs/claude.md](../claude.md) → [루트 CLAUDE.md](../../CLAUDE.md)

---

## 📌 디렉토리 목적

앱 **수익 창출 도구 및 결제 시스템** 가이드입니다.

**문서 현황**: 총 12개 가이드 문서 (인앱 광고 4개, 토스 페이 4개, 인앱 결제 4개)

---

## 📚 수익화 방법

### 💰 인앱 광고 (In-App Ads)

앱 내 광고 노출을 통한 수익 창출 (전면형 광고 및 보상형 광고)

**가이드 문서**:
1. **[인앱 광고 이해하기](01-ads-intro.md)** - 광고 유형 및 주요 이점
2. **[콘솔 가이드](02-ads-console.md)** - 광고 그룹 생성 및 설정
3. **[개발 가이드](03-ads-develop.md)** - SDK 연동 및 구현 방법
4. **[QA 진행하기](04-ads-qa.md)** - 테스트 체크리스트 및 검증

**API 레퍼런스**:
- [loadAdMobInterstitialAd](../reference/bedrock/ads/loadAdMobInterstitialAd.md) - 전면 광고 로드
- [showAdMobInterstitialAd](../reference/bedrock/ads/showAdMobInterstitialAd.md) - 전면 광고 표시
- [loadAdMobRewardedAd](../reference/bedrock/ads/loadAdMobRewardedAd.md) - 보상형 광고 로드
- [showAdMobRewardedAd](../reference/bedrock/ads/showAdMobRewardedAd.md) - 보상형 광고 표시
- [loadAppsInTossAdMob](../reference/bedrock/ads/loadAppsInTossAdMob.md) - Apps in Toss 광고

**개발 흐름**:
```
1. 광고 로드 (loadAdMobInterstitialAd / loadAdMobRewardedAd)
2. 광고 표시 (showAdMobInterstitialAd / showAdMobRewardedAd)
3. 광고 이벤트 처리 (AdMobFullScreenEvent)
```

---

### 💳 토스 페이 (Toss Pay)

토스 간편결제를 통한 상품/서비스 판매

**가이드 문서**:
1. **[토스페이 이해하기](05-tosspay-intro.md)** - 토스페이 개요 및 이점
2. **[콘솔 가이드](06-tosspay-console.md)** - 계약 및 키 설정
3. **[개발 가이드](07-tosspay-develop.md)** - 결제 API 연동 가이드 (생성/인증/실행/환불/조회)
4. **[QA 진행하기](08-tosspay-qa.md)** - 결제 테스트 체크리스트

**API 레퍼런스**:
- [checkoutPayment](../reference/bedrock/tosspay/checkoutPayment.md) - 결제 인증 요청
- [CheckoutPaymentOptions](../reference/bedrock/tosspay/CheckoutPaymentOptions.md) - 결제 옵션
- [CheckoutPaymentResult](../reference/bedrock/tosspay/CheckoutPaymentResult.md) - 결제 결과

**개발 흐름**:
```
1. 결제 생성 (POST /make-payment) → payToken 획득
2. 결제 인증 (checkoutPayment) → 사용자 인증
3. 결제 실행 (POST /execute-payment) → 실제 결제 승인
4. 결제 상태 조회 (POST /get-payment-status)
```

---

### 🛒 인앱 결제 (IAP - In-App Purchase)

디지털 상품 판매를 통한 수익 창출 (소모품 및 비소모품)

**가이드 문서**:
1. **[인앱 결제 이해하기](09-iap-intro.md)** - 인앱 결제 개요 및 상품 유형
2. **[콘솔 가이드](10-iap-console.md)** - 약관 동의, KYC, 상품 등록, 환불 처리
3. **[개발 가이드](11-iap-develop.md)** - SDK 연동 및 주문 처리
4. **[QA 진행하기](12-iap-qa.md)** - 결제 테스트 체크리스트

**API 레퍼런스**:
- [getIapProductList](../reference/bedrock/payment/getIapProductList.md) - 상품 목록 조회
- [requestIap](../reference/bedrock/payment/requestIap.md) - 인앱 결제 요청
- [getPendingOrders](../reference/bedrock/payment/getPendingOrders.md) - 미처리 주문 조회
- [completeProductGrant](../reference/bedrock/payment/completeProductGrant.md) - 상품 지급 완료
- [getCompletedOrRefundedOrders](../reference/bedrock/payment/getCompletedOrRefundedOrders.md) - 완료/환불 주문 조회

**개발 흐름**:
```
1. 상품 목록 조회 (getIapProductList)
2. 인앱 결제 요청 (requestIap)
3. 결제 처리 (Apple/Google)
4. 미처리 주문 조회 (getPendingOrders)
5. 상품 지급 완료 (completeProductGrant)
```

---

## ⚠️ 프로젝트 전체 범용 규칙 (상위 문서 참조)

> **이 섹션**: 모든 곳에 적용되는 범용 규칙 (상세는 링크 참조)
> **상세 내용**: 반드시 각 링크된 문서 참조

수익화 기능 구현 시 반드시 준수해야 할 규칙입니다.

### 1. UX Writing - 결제/광고 안내 문구 (🔴 필수)

**모든 결제 및 광고 관련 안내 문구는 ~해요체를 사용해야 합니다.**

**적용 대상**:
- ✅ 결제 확인 다이얼로그
- ✅ 상품 구매 안내
- ✅ 광고 시청 보상 안내
- ✅ 결제 완료 메시지
- ✅ 에러 메시지

**올바른 예시**:
```typescript
// ✅ 결제 확인
Dialog.confirm({
  title: '구매 확인',
  message: '이 상품을 구매하시겠어요?'
})

// ✅ 광고 보상 안내
Toast.show({ message: '광고를 시청하고 보상을 받았어요' })

// ✅ 결제 완료
Toast.show({ message: '결제가 완료됐어요' })

// ✅ 결제 실패
Dialog.alert({
  message: '결제를 처리할 수 없어요. 다시 시도해 주세요.'
})
```

**잘못된 예시**:
```typescript
// ❌ ~습니다 체 사용
message: '이 상품을 구매하시겠습니까?'

// ❌ 명사형 종결
message: '광고 시청 보상 지급 완료'

// ❌ ~되다 수동형
message: '결제가 완료되었습니다'
```

**참조**: [../03-design/03-ux-writing.md](../03-design/03-ux-writing.md)

### 2. 프로젝트 타입 독립성

수익화 API는 WebView/React Native/Unity 모든 프로젝트 타입에서 공통으로 사용됩니다.

**중요**:
- ✅ Bedrock SDK의 수익화 API는 프로젝트 타입 무관하게 동일
- ✅ UI 구현만 프로젝트 타입별 라이브러리 사용 (TDS Mobile / TDS React Native)
- ✅ 결제/광고 로직은 모든 타입에서 동일한 방식으로 구현

**참조**: [../../CLAUDE.md - 프로젝트 타입 구분 시스템](../../CLAUDE.md#프로젝트-타입-구분-시스템)

### 3. 언어 규칙

- **사용자 안내 문구**: 한글 (~해요체)
- **로깅 데이터**: 영어 (예: `payment_completed`, `ad_viewed`, `purchase_failed`)
- **코드/변수명**: 영어

**상세 규칙**: [../../STANDARD_RULES.md](../../STANDARD_RULES.md)

---

## ⚠️ 주의사항

### 인앱 광고 구현 시
- ✅ 광고 로드 완료 후 표시
- ✅ 광고 이벤트 처리 필수 (show, dismiss, error)
- ✅ 사용자 경험 저해하지 않도록 적절한 타이밍에 노출
- ✅ 테스트 시 테스트 광고 ID 사용 필수
- ✅ 광고 재생 중 앱 사운드 일시 중지 및 자동 복구

### 토스 페이 구현 시
- ✅ 주문번호는 반드시 고유해야 함 (중복 시 결제 생성 실패)
- ✅ 결제 금액 및 상품명 명확히 표시
- ✅ 결제 결과 검증 필수 (transactionId 저장 및 대사)
- ✅ 결제 실패 시 사용자 안내
- ✅ mTLS 구현 및 키/토큰 서버 전용 저장

### 인앱 결제 구현 시
- ✅ 미처리 주문 조회 및 처리 필수
- ✅ 상품 지급 완료 API 호출 필수
- ✅ 결제 복원 기능 제공 (비소모품 필수, 소모품 제외)
- ✅ 기기 변경 시 주문 복원 로직 구현
- ✅ 중복 구매/지급 방지 로직 구현

---

## 🔗 연관 디렉토리

- **광고 API**: [reference/bedrock/ads](../reference/bedrock/ads/)
- **결제 API**: [reference/bedrock/payment](../reference/bedrock/payment/)
- **개발 환경**: [04-development](../04-development/claude.md)
- **QA 테스트**: [05-checklist](../05-checklist/claude.md)
- **UX Writing**: [03-design/03-ux-writing.md](../03-design/03-ux-writing.md)

---

## 📖 참고 자료

**로컬 가이드 문서**: 이 디렉토리에 12개 가이드 문서 포함 (상세 구현 및 QA 체크리스트)

**온라인 문서**:
- **인앱 광고**: https://developers-apps-in-toss.toss.im/ads/intro.html
- **토스 페이**: https://developers-apps-in-toss.toss.im/tosspay/intro.html
- **인앱 결제**: https://developers-apps-in-toss.toss.im/iap/intro.html

**콘솔**: https://console.toss.im (약관 동의, 정산 정보 등록, 광고 그룹/상품 등록)
