# isMinVersionSupported - 최소 버전 지원 확인

## 개요

`isMinVersionSupported` 함수는 현재 토스 앱 버전이 각 플랫폼에 대해 지정된 최소 버전 요구사항을 충족하거나 초과하는지 확인합니다.

## 지원 환경

- **React Native**
- **WebView**
- **실행 환경**: Toss App only

## 함수 시그니처

```typescript
function isMinVersionSupported(minVersions: {
  android: `${number}.${number}.${number}` | 'always' | 'never';
  ios: `${number}.${number}.${number}` | 'always' | 'never';
}): boolean;
```

## 파라미터

**minVersions** (필수) - 플랫폼별 최소 버전 요구사항을 지정하는 객체

- **android** - Android 플랫폼 최소 버전을 시맨틱 형식(예: "1.2.0")으로 지정하거나 리터럴 값 'always'/'never' 사용
- **ios** - iOS 플랫폼 최소 버전을 시맨틱 형식(예: "1.3.0")으로 지정하거나 리터럴 값 'always'/'never' 사용

## 반환 값

- **boolean** - 현재 앱 버전이 최소 요구사항을 충족하면 `true`를 반환하고, 그렇지 않으면 `false`를 반환합니다

## 사용 예제

### React

```tsx
import { isMinVersionSupported } from '@apps-in-toss/web-framework';
import { Text } from '@toss-design-system/mobile';

function VersionCheck() {
  const isSupported = isMinVersionSupported({
    android: '1.2.0',
    ios: '1.3.0',
  });

  return <div>{!isSupported && <Text>최신 버전으로 업데이트가 필요해요.</Text>}</div>;
}
```

### React Native

```tsx
import { isMinVersionSupported } from '@apps-in-toss/framework';
import { Text } from '@toss-design-system/react-native';
import { View } from 'react-native';

function VersionCheck() {
  const isSupported = isMinVersionSupported({
    android: '1.2.0',
    ios: '1.3.0'
  });

  return (
    <View>
      {!isSupported && (
        <Text>최신 버전으로 업데이트가 필요해요.</Text>
      )}
    </View>
  );
}
```

## 활용 사례

기능이 최신 앱 버전을 필요로 할 때 업데이트 프롬프트를 조건부로 표시하여 이전 버전 사용자에게 우아한 성능 저하를 보장합니다.

## 관련 함수

- **getTossAppVersion**: 토스 앱 버전 조회
- **getOperationalEnvironment**: 실행 환경 확인
- **getPlatformOS**: 플랫폼 OS 확인
