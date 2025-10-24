# getTossAppVersion - 토스 앱 버전 조회

## 개요

`getTossAppVersion` 함수는 현재 토스 앱 버전을 문자열 형식(예: "5.206.0")으로 가져옵니다. 로깅 목적이나 특정 최소 버전이 필요한 기능을 조건부로 실행할 때 유용합니다.

## 지원 환경

- **프레임워크**: React Native, WebView
- **실행 환경**: Toss App only

## 함수 시그니처

```typescript
function getTossAppVersion(): string
```

## 반환 값

- **타입**: `string`
- **설명**: 토스 앱 버전

## 사용 예제

### React 구현

```tsx
import { getTossAppVersion } from '@apps-in-toss/web-framework';
import { Text } from '@toss-design-system/mobile';

function TossAppVersionPage() {
  const tossAppVersion = getTossAppVersion();
  return <Text>{tossAppVersion}</Text>;
}
```

### React Native 구현

```tsx
import { getTossAppVersion } from '@apps-in-toss/framework';
import { Text } from '@toss-design-system/react-native';

function TossAppVersionPage() {
  const tossAppVersion = getTossAppVersion();
  return <Text>{tossAppVersion}</Text>;
}
```

## 활용 사례

- 디버깅을 위한 버전 로깅
- 앱 버전 요구사항에 따른 기능 게이팅

## 관련 함수

- **isMinVersionSupported**: 최소 버전 지원 확인
- **getOperationalEnvironment**: 실행 환경 확인
- **getDeviceId**: 기기 고유 식별자 조회
