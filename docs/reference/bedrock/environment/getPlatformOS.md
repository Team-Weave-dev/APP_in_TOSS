# getPlatformOS - 플랫폼 OS 확인

## 개요

`getPlatformOS`는 현재 실행 중인 플랫폼을 확인하는 함수입니다. react-native의 `Platform.OS` 값을 기반으로 동작하며, iOS 또는 Android 중 하나를 반환합니다.

## 지원 환경

- **플랫폼**: React Native, WebView
- **실행환경**: Toss App, Sandbox App

## 함수 시그니처

```typescript
function getPlatformOS(): 'ios' | 'android';
```

## 반환 값

| 타입 | 설명 |
|------|------|
| `'ios' \| 'android'` | 현재 실행 중인 플랫폼 |

## 사용 예제

### 현재 실행중인 OS 플랫폼 확인하기

```tsx
import { getPlatformOS } from '@apps-in-toss/framework';
import { Text } from 'react-native';

function Page() {
  const platform = getPlatformOS();

  return <Text>현재 플랫폼: {platform}</Text>;
}
```

이 예제는 실행 중인 플랫폼을 감지하여 화면에 표시합니다. 반환된 값을 활용하여 플랫폼별 조건부 렌더링이나 기능 분기가 가능합니다.

## 관련 함수

- **getDeviceId**: 기기 고유 식별자 조회
- **getOperationalEnvironment**: 실행 환경 확인
- **getTossAppVersion**: 토스 앱 버전 조회
