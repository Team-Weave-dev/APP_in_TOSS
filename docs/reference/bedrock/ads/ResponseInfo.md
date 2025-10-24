# 광고 로드 응답 객체

## 개요

`ResponseInfo` 객체는 광고 로드 요청에 대한 응답 정보를 담고 있습니다. 이 객체를 통해 광고 네트워크별 응답 상태와 로드된 광고의 상세 정보를 확인할 수 있습니다.

## 지원 환경

- **프레임워크**: React Native
- **실행 환경**: Toss App

## 타입 정의

```typescript
interface ResponseInfo {
  adNetworkInfoArray: Array<AdNetworkResponseInfo>;
  loadedAdNetworkInfo: AdNetworkResponseInfo | null;
  responseId: string | null;
}
```

## 속성

### adNetworkInfoArray
- **타입**: `Array<AdNetworkResponseInfo>`
- **필수**: Yes
- **설명**: 광고 요청 시 응답한 모든 광고 네트워크의 정보를 배열 형태로 포함합니다. 각 네트워크별 응답 상태를 추적할 때 사용됩니다.

### loadedAdNetworkInfo
- **타입**: `AdNetworkResponseInfo | null`
- **필수**: Yes
- **설명**: 실제로 로드된 광고의 네트워크 정보입니다. 성공적으로 광고가 로드되지 않은 경우 null 값을 가집니다.

### responseId
- **타입**: `string | null`
- **필수**: Yes
- **설명**: 광고 로드 응답의 고유 식별자입니다. 추적 및 분석 목적으로 사용되며, 응답이 없는 경우 null 값을 가집니다.

## 관련 문서

- [광고 네트워크 응답 객체 (AdNetworkResponseInfo)](/bedrock/reference/framework/광고/AdNetworkResponseInfo.html)
- [광고 불러오기](/bedrock/reference/framework/광고/loadAppsInTossAdMob.html)
