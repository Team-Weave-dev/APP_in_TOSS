# LoggingArea API Documentation

## 개요

`LoggingArea` 컴포넌트는 "여러 컴포넌트의 텍스트를 단일 로그 단위로 그룹화"하고 지정된 영역 내에서 노출 또는 클릭 이벤트를 자동으로 수집할 수 있게 해줍니다.

## 함수 시그니처

```typescript
function LoggingArea({
  children,
  params: _params,
  ...props
}: LoggingAreaProps): import("react/jsx-runtime").JSX.Element;
```

## 지원 환경

- **프레임워크**: React Native
- **실행 환경**: Toss App

## 사용 예시

### 여러 컴포넌트를 단일 영역으로 추적

```tsx
import { Analytics } from '@apps-in-toss/framework';
import { View, Text } from 'react-native';

function TrackElements() {
  return (
    <Analytics.Area>
      <View>
        <Text>Hello</Text>
        <Text>World!</Text>
      </View>
    </Analytics.Area>
  );
}
```

## 주요 기능

- **자동 추적**: 영역 내의 노출 및 클릭 정보가 자동으로 수집됩니다
- **그룹화된 분석**: 여러 자식 컴포넌트가 단일 분석 단위로 처리됩니다
- **간단한 통합**: `Analytics.Area` 컴포넌트로 컴포넌트를 감싸기만 하면 됩니다

## 관련 문서

포괄적인 분석 설정은 다음을 참조하세요:
- [분석 초기화](/bedrock/reference/framework/분석/init.html)
- [컴포넌트 노출 추적](/bedrock/reference/framework/분석/LoggingImpression.html)
- [클릭 이벤트 로깅](/bedrock/reference/framework/분석/LoggingPress.html)
