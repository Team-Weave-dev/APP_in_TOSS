# 광고 공통 이벤트 타입

## 개요

`AdMobFullScreenEvent`는 Toss App 환경에서 전면 광고(전면형 및 보상형 광고)에 의해 트리거되는 이벤트를 처리합니다.

## 함수 시그니처

```typescript
type AdMobFullScreenEvent = AdClicked | AdDismissed | AdFailedToShow | AdImpression | AdShow;
```

## 이벤트 타입

이벤트 타입은 5가지 고유한 이벤트 상태를 포함합니다:

| 이벤트 | 설명 |
|-------|------|
| `clicked` | 사용자가 광고를 클릭함 |
| `dismissed` | 사용자가 광고를 닫거나 취소함 |
| `failedToShow` | 광고 표시 실패 |
| `impression` | 광고가 사용자에게 노출됨 |
| `show` | 광고 표시 시작 |

## 사용 예제

```typescript
function handleEvent(event: AdMobFullScreenEvent) {
  switch (event.type) {
    case 'clicked':
      console.log('광고가 클릭됐어요.');
      break;

    case 'dismissed':
      console.log('광고가 닫혔어요.');
      break;

    case 'failedToShow':
      console.log('광고가 보여지지 않았어요.');
      break;

    case 'impression':
      console.log('광고가 노출됐어요.');
      break;

    case 'show':
      console.log('광고가 보여졌어요.');
      break;
  }
}
```

## 지원 환경

- **프레임워크**: React Native
- **실행 환경**: Toss App
