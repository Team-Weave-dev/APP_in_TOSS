# 클릭 이벤트 기록하기 (LoggingPress)

## 개요

`LoggingPress`는 사용자가 특정 요소를 탭할 때 해당 이벤트를 자동으로 기록하는 컴포넌트입니다. 예를 들어, 구매 버튼 클릭 같은 사용자 행동을 추적할 때 활용됩니다.

## 지원 환경

- **프레임워크**: React Native
- **실행 환경**: Toss App

## 함수 시그니처

```typescript
LoggingPress: ForwardRefExoticComponent<
  LoggingPressProps & RefAttributes<unknown>
>
```

## 주요 정보

### 데이터 수집 환경

데이터는 **라이브 환경에서만** 수집됩니다. 샌드박스나 QR 테스트 환경에서는 실제 이벤트가 기록되지 않습니다.

### 데이터 확인 시점

콘솔에서 수집된 데이터를 확인할 수 있는 시점은 **+1일 후**입니다.

## 사용 예제

### 기본 사용법

```typescript
import { Analytics } from '@apps-in-toss/framework';
import { Button } from 'react-native';

function TrackElements() {
  return (
    <Analytics.Press>
      <Button label="Press Me" />
    </Analytics.Press>
  );
}
```

이 예제에서 `Analytics.Press` 컴포넌트는 하위 요소(Button)의 클릭 이벤트를 자동으로 감지하고 기록합니다.

## 관련 API

- **이전**: [컴포넌트 노출 기록하기 (LoggingImpression)](/bedrock/reference/framework/분석/LoggingImpression.html)
- **다음**: [필요한 권한 설정하기](/bedrock/reference/framework/권한/permission.html)

---

**참고**: 자세한 분석 초기화 및 추가 설정은 [분석 초기 설정하기](/bedrock/reference/framework/분석/init.html) 문서를 참고하세요.
