# 광고 보여주기

## 개요

`showAppsInTossAdMob` 함수는 이전에 로드된 광고를 사용자에게 표시합니다. 이 함수는 `loadAppsInTossAdMob`과 함께 작동하여 이미 로드된 광고를 보여줍니다.

## 지원 환경

- **프레임워크**: React Native, WebView
- **실행 환경**: Toss App

## 함수 시그니처

```typescript
function showAppsInTossAdMob(params: ShowAdMobParams): typeof noop;
```

## 파라미터

### ShowAdMobParams 객체

- **options** (필수, ShowAdMobOptions)
  - **adUnitId** (필수, string): `loadAppsInTossAdMob`에서 사용한 광고 단위 그룹 ID

- **onEvent** (필수 함수)
  - 광고 관련 이벤트 발생 시 트리거되는 콜백
  - 파라미터: `event: ShowAdMobEvent`
  - "requested", "clicked", "dismissed", "impression" 등의 이벤트 처리

- **onError** (필수 함수)
  - 광고 표시 실패 시 트리거되는 콜백
  - 파라미터: `reason: unknown`
  - 네트워크 오류나 지원되지 않는 환경 처리

## 주요 속성

- **isSupported()** ⇒ boolean
  - 현재 Toss 앱 환경이 Google AdMob 기능을 지원하는지 확인
  - 기능 사용 전에 반드시 호출해야 합니다

## 이벤트 타입

일반적인 이벤트 타입:
- `requested`: 광고 표시 요청 완료
- `clicked`: 사용자가 광고를 클릭함
- `dismissed`: 광고가 닫힘
- `impression`: 광고가 표시됨
- `userEarnedReward`: 사용자가 보상형 광고 시청 완료
- `show`: 광고 콘텐츠 표시됨
- `failedToShow`: 표시 시도 실패

## 사용 시 주의사항

현재 앱 환경과의 호환성을 보장하기 위해 이 함수를 호출하기 전에 항상 `isSupported()`를 사용하여 지원 여부를 확인하세요.
