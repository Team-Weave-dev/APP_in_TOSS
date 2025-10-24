# getDeviceId - 기기 고유 식별자 조회

## 개요

`getDeviceId` 함수는 현재 사용 중인 기기의 고유 식별자 문자열을 가져옵니다. 이 식별자는 기기별 설정 저장, 로깅 및 분석을 위한 사용자 기기 식별, 동일 사용자가 사용하는 여러 기기 구별 등에 유용합니다.

## 지원 환경

- **프레임워크**: React Native, WebView
- **실행 환경**: Toss App, Sandbox App

## 함수 시그니처

```typescript
function getDeviceId(): string;
```

## 반환 값

- **타입**: `string`
- **설명**: 기기의 고유 식별자를 나타내는 문자열

## 사용 예제

### React (WebView)

```tsx
import { getDeviceId } from "@apps-in-toss/web-framework";
import { useState } from "react";

const DeviceInfo = () => {
  const [deviceId, setDeviceId] = useState<string | null>(null);

  const fetchDeviceId = async () => {
    setDeviceId(getDeviceId());
  };

  return (
    <div>
      <button onClick={fetchDeviceId}>기기 ID 가져오기</button>
      {deviceId && <p>Device ID: {deviceId}</p>}
    </div>
  );
};
```

### React Native

```tsx
import { getDeviceId } from '@apps-in-toss/framework';
import { Text } from '@toss-design-system/react-native';

function MyPage() {
  const id = getDeviceId();

  return <Text>사용자의 기기 고유 식별자: {id}</Text>;
}
```

## 관련 함수

- **getOperationalEnvironment**: 실행 환경 확인
- **getPlatformOS**: 플랫폼 OS 확인
- **getTossAppVersion**: 토스 앱 버전 조회
