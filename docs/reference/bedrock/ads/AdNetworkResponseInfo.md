# 광고 네트워크 응답 객체

## 개요

`AdNetworkResponseInfo` 인터페이스는 Apps in Toss 광고 시스템 내에서 광고 네트워크 응답에 대한 정보를 포함합니다.

## 함수 시그니처

```typescript
interface AdNetworkResponseInfo {
  adSourceId: string;
  adSourceName: string;
  adSourceInstanceId: string;
  adSourceInstanceName: string;
  adNetworkClassName: string | null;
}
```

## 속성

| 속성 | 타입 | 설명 |
|-----|------|------|
| `adSourceId` | string | 광고 소스 ID |
| `adSourceName` | string | 광고 소스 이름 |
| `adSourceInstanceId` | string | 광고 소스 인스턴스 ID |
| `adSourceInstanceName` | string | 광고 소스 인스턴스 이름 |
| `adNetworkClassName` | string \| null | 광고 네트워크 클래스 이름 (nullable) |

## 지원 환경

- **프레임워크**: React Native
- **실행 환경**: Toss App

## 관련 문서

- [광고 공통 이벤트 타입](/bedrock/reference/framework/광고/AdMobFullScreenEvent.html)
- [광고 로드 응답 객체](/bedrock/reference/framework/광고/ResponseInfo.html)
- [Google AdMob 객체](/bedrock/reference/framework/광고/GoogleAdMob.html)
