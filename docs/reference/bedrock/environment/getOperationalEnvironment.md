# getOperationalEnvironment - 실행 환경 확인

## 개요

`getOperationalEnvironment` 함수는 애플리케이션이 실행되고 있는 현재 배포 환경을 식별할 수 있게 해줍니다.

## 함수 시그니처

```typescript
function getOperationalEnvironment(): 'toss' | 'sandbox';
```

## 반환 값

함수는 운영 컨텍스트를 나타내는 문자열을 반환합니다:

- `'toss'`: 토스 앱에서 실행 중이에요
- `'sandbox'`: 샌드박스 환경에서 실행 중이에요

## 지원 환경

- **React Native**
- **WebView**
- **실행 환경**: Toss App / Sandbox App

## 사용 예제

### 기본 환경 감지

```typescript
import { getOperationalEnvironment } from '@apps-in-toss/framework';
import { Text } from '@toss-design-system/react-native';

function EnvironmentInfo() {
  const environment = getOperationalEnvironment();
  return <Text>{`Current environment: '${environment}'`}</Text>;
}
```

### 조건부 기능 구현

```typescript
import { View, Button } from 'react-native';
import { getOperationalEnvironment } from '@apps-in-toss/framework';

const isSandbox = getOperationalEnvironment() === 'sandbox';

function Component() {
  const handlePress = () => {
    if (isSandbox) {
      // 샌드박스 전용 기능
    } else {
      // 프로덕션 기능
    }
  };
  return <Button onPress={handlePress}>Details</Button>;
}
```

## 주요 활용 사례

다양한 배포 환경에서 기능 가용성과 동작을 관리하면 개발자가 샌드박스에서 테스트 기능을 제공하면서 토스 앱에서 프로덕션 안정성을 보장할 수 있습니다.

## 관련 함수

- **getDeviceId**: 기기 고유 식별자 조회
- **getTossAppVersion**: 토스 앱 버전 조회
- **isMinVersionSupported**: 최소 버전 지원 확인
