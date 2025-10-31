# 수익화 (08-monetization)

> **상위 컨텍스트**: [docs/claude.md](../claude.md) → [루트 CLAUDE.md](../../CLAUDE.md)

## 📌 디렉토리 목적

앱 **수익 창출 도구 및 결제 시스템** 가이드입니다.

## 📚 수익화 방법

### 💰 인앱 광고 (AdMob)
앱 내 광고 노출을 통한 수익 창출

**API 레퍼런스**:
- [전면 광고 로드](../reference/bedrock/ads/loadAdMobInterstitialAd.md)
- [전면 광고 표시](../reference/bedrock/ads/showAdMobInterstitialAd.md)
- [보상형 광고 로드](../reference/bedrock/ads/loadAdMobRewardedAd.md)
- [보상형 광고 표시](../reference/bedrock/ads/showAdMobRewardedAd.md)
- [Apps in Toss 광고](../reference/bedrock/ads/loadAppsInTossAdMob.md)

**개발 가이드**: [온라인 문서 참조](https://developers-apps-in-toss.toss.im)

### 💳 토스 페이 (Toss Pay)
토스 간편결제를 통한 상품/서비스 판매

**API 레퍼런스**:
- [결제 요청](../reference/bedrock/payment/tosspay/checkoutPayment.md)
- [결제 옵션](../reference/bedrock/payment/tosspay/CheckoutPaymentOptions.md)
- [결제 결과](../reference/bedrock/payment/tosspay/CheckoutPaymentResult.md)

**개발 가이드**: [온라인 문서 참조](https://developers-apps-in-toss.toss.im)

### 🛒 인앱 결제 (IAP)
디지털 상품 판매를 통한 수익 창출

**API 레퍼런스**:
- [상품 목록 조회](../reference/bedrock/payment/iap/getProductItemList.md)
- [구매 주문 생성](../reference/bedrock/payment/iap/createOneTimePurchaseOrder.md)
- [미처리 주문 조회](../reference/bedrock/payment/iap/getPendingOrders.md)
- [완료/환불 주문 조회](../reference/bedrock/payment/iap/getCompletedOrRefundedOrders.md)
- [상품 지급 완료](../reference/bedrock/payment/iap/completeProductGrant.md)

**개발 가이드**: [온라인 문서 참조](https://developers-apps-in-toss.toss.im)

## 🎯 수익화 유형별 개발 흐름

### 인앱 광고 (AdMob)
```
1. 광고 로드 (load~Ad)
2. 광고 표시 (show~Ad)
3. 광고 이벤트 처리 (AdMobFullScreenEvent)
```

### 토스 페이
```
1. 상품 정의 (가격, 설명)
2. 결제 요청 (checkoutPayment)
3. 결제 결과 처리 (CheckoutPaymentResult)
```

### 인앱 결제 (IAP)
```
1. 상품 목록 조회 (getProductItemList)
2. 구매 주문 생성 (createOneTimePurchaseOrder)
3. 결제 처리
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

**참조**: [../../CLAUDE.md - 프로젝트 타입 구분 시스템](../../CLAUDE.md#프로젝트-타입-구분-시스템)

### 3. 언어 규칙

- **사용자 안내 문구**: 한글 (~해요체)
- **로깅 데이터**: 영어 (예: `payment_completed`, `ad_viewed`)
- **코드/변수명**: 영어

**상세 규칙**: [../../STANDARD_RULES.md](../../STANDARD_RULES.md)

---

## ⚠️ 주의사항

### 인앱 광고 구현 시
- ✅ 광고 로드 완료 후 표시
- ✅ 광고 이벤트 처리 필수 (show, dismiss, error)
- ✅ 사용자 경험 저해하지 않도록 적절한 타이밍에 노출

### 토스 페이 구현 시
- ✅ 결제 금액 및 상품명 명확히 표시
- ✅ 결제 결과 검증 필수
- ✅ 결제 실패 시 사용자 안내

### 인앱 결제 구현 시
- ✅ 미처리 주문 조회 및 처리 필수
- ✅ 상품 지급 완료 API 호출 필수
- ✅ 결제 복원 기능 제공 (소모성 상품 제외)

## 🔗 연관 디렉토리

- **광고 API**: [reference/bedrock/ads](../reference/bedrock/ads/)
- **결제 API**: [reference/bedrock/payment](../reference/bedrock/payment/)
- **개발 환경**: [04-development](../04-development/claude.md)
- **QA 테스트**: [05-checklist](../05-checklist/claude.md)

---

## 📖 온라인 문서

이 디렉토리는 수익화 API 레퍼런스만 포함합니다.

**상세 가이드 문서**:
- **인앱 광고**: https://developers-apps-in-toss.toss.im/ads/intro
- **토스 페이**: https://developers-apps-in-toss.toss.im/tosspay/intro
- **인앱 결제**: https://developers-apps-in-toss.toss.im/iap/intro

**콘솔 설정 및 QA 가이드는 온라인 문서를 참조하세요.**
