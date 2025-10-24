# getProductItemList - 인앱 결제 상품 목록 조회

## 개요

`getProductItemList`는 인앱 구매 가능한 상품 목록을 조회합니다. 이 함수는 구매 가능한 아이템을 화면에 표시합니다.

**지원 환경:** React Native, WebView
**실행 환경:** Toss App

## 함수 시그니처

```typescript
function getProductItemList(): Promise<{ products: IapProductListItem[] } | undefined>;
```

## 반환 값

상품 정보를 포함하는 프로미스를 반환하거나, 앱 버전이 최소 지원 버전(5.219.0) 미만인 경우 `undefined`를 반환합니다.

## 상품 아이템 인터페이스

```typescript
interface IapProductListItem {
  sku: string;
  displayAmount: string;
  displayName: string;
  iconUrl: string;
  description: string;
}
```

### 속성

- **sku** (string): 고유 상품 식별자, `createOneTimePurchaseOrder` 호출 시 `productId`로 사용
- **displayAmount** (string): 통화 단위가 포함된 가격 (예: "1,000원")
- **displayName** (string): 콘솔에서 설정한 상품명
- **iconUrl** (string): 콘솔에서 설정한 상품 아이콘 이미지 URL
- **description** (string): 콘솔에서 설정한 상품 설명

## 사용 예제

```typescript
async function fetchProducts() {
  try {
    const response = await IAP.getProductItemList();
    setProducts(response?.products ?? []);
  } catch (error) {
    console.error("상품 목록을 가져오는 데 실패했어요:", error);
  }
}
```

## 응답 예제

```json
{
  "products": [
    {
      "sku": "sku1",
      "displayName": "광고 제거",
      "displayAmount": "4,900원",
      "iconUrl": "https://cdn.example.com/icons/premium-monthly.png",
      "description": "광고 제거 및 프리미엄 기능 제공"
    }
  ]
}
```

## 관련 함수

- **createOneTimePurchaseOrder**: 결제하기
- **getPendingOrders**: 대기 중인 주문 조회
- **completeProductGrant**: 상품 지급 처리
