# LoggingImpression API Documentation

## 개요

`LoggingImpression`은 요소가 뷰포트 내에서 보이게 될 때 자동으로 감지하고 로그를 기록하도록 설계된 컴포넌트입니다.

## 함수 시그니처

```typescript
function LoggingImpression({
  enabled,
  impression: impressionType,
  ...props
}: LoggingImpressionProps): import("react/jsx-runtime").JSX.Element;
```

## 지원 환경

- **프레임워크**: React Native
- **실행 환경**: Toss App

## 주요 기능

이 컴포넌트는 래핑된 콘텐츠가 뷰포트에 진입할 때 노출 데이터를 자동으로 캡처하여, 가시성 추적을 위한 수동 로깅 요구사항을 제거합니다.

## 사용 예시

### 기본 구현

```tsx
import { Analytics } from '@apps-in-toss/framework';

function TrackElements() {
  return (
    <Analytics.Impression>
      <Text>Hello</Text>
    </Analytics.Impression>
  );
}
```

이 예제에서는 추가 설정 없이 자식 요소에 대한 가시성 정보를 자동으로 수집합니다.

## 관련 API

- **이전**: [LoggingArea](/bedrock/reference/framework/%EB%B6%84%EC%84%9D/LoggingArea.html) - 영역 기반 로깅
- **다음**: [LoggingPress](/bedrock/reference/framework/%EB%B6%84%EC%84%9D/LoggingPress.html) - 클릭 이벤트 추적

## 관련 컴포넌트

고급 가시성 감지 시나리오의 경우 다음 대안을 고려하세요:
- `ImpressionArea` - 컴포넌트 노출 감지
- `InView` - 요소 가시성 감지
- `IOScrollView` - 스크롤 영역 추적
- `IOFlatList` - 리스트 항목 가시성 감지
