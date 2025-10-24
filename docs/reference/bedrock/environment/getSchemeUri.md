# getSchemeUri - 스킴 URI 값 조회

## 개요

`getSchemeUri`는 화면에 처음 진입할 때 사용된 스킴 URI 값을 가져옵니다. 페이지 탐색으로 인한 URI 변경 사항은 반영되지 않습니다.

## 지원 환경

- **플랫폼**: React Native, WebView
- **실행 환경**: Toss App, Sandbox App

## 함수 시그니처

```typescript
function getSchemeUri(): string;
```

## 반환 값

- **타입**: `string`
- **설명**: 화면 진입 시점의 스킴 URI 값을 반환합니다

## 사용 예제

### 초기 스킴 URI 가져오기

```tsx
import { getSchemeUri } from '@apps-in-toss/framework';
import { Text } from 'react-native';

function MyPage() {
  const schemeUri = getSchemeUri();

  return <Text>처음에 화면에 진입한 스킴 값: {schemeUri}</Text>
}
```

## 주요 참고 사항

- 함수는 화면 진입 시의 초기 스킴 URI만 캡처합니다
- 이후 페이지 탐색은 반환 값을 업데이트하지 않습니다
- 사용자가 애플리케이션에 액세스할 때 원래 진입점이나 컨텍스트를 추적하는 데 유용합니다

## 관련 함수

- **getDeviceId**: 기기 고유 식별자 조회
- **getOperationalEnvironment**: 실행 환경 확인
- **getPlatformOS**: 플랫폼 OS 확인
