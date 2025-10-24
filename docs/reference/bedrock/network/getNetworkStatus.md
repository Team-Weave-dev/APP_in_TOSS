# 네트워크 연결 상태 확인하기

## 개요

`getNetworkStatus` 함수는 인터넷 사용 가능 여부 및 연결 유형(Wi-Fi, 모바일 데이터 등)을 포함한 기기의 현재 네트워크 연결 상태를 가져옵니다.

## 함수 시그니처

```typescript
function getNetworkStatus(): Promise<NetworkStatus>;
```

## 반환값

다음 값 중 하나를 가진 `Promise<NetworkStatus>`를 반환합니다:

- **OFFLINE**: 인터넷 연결 없음
- **WIFI**: Wi-Fi를 통해 연결됨
- **2G**: 2G 네트워크를 통해 연결됨
- **3G**: 3G 네트워크를 통해 연결됨
- **4G**: 4G 네트워크를 통해 연결됨
- **5G**: 5G 네트워크를 통해 연결됨
- **WWAN**: "인터넷에 연결되어 있지만 연결 유형을 알 수 없음 (iOS 전용)"
- **UNKNOWN**: "연결 상태를 확인할 수 없음 (Android 전용)"

## 사용 예제

```typescript
import { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { getNetworkStatus, NetworkStatus } from '@apps-in-toss/framework';

function GetNetworkStatus() {
  const [status, setStatus] = useState<NetworkStatus | ''>('');

  useEffect(() => {
    async function fetchStatus() {
      const networkStatus = await getNetworkStatus();
      setStatus(networkStatus);
    }

    fetchStatus();
  }, []);

  return (
    <View>
      <Text>현재 네트워크 상태: {status}</Text>
    </View>
  );
}
```

## 지원 환경

- **프레임워크**: React Native, WebView
- **실행 환경**: Toss App, Sandbox App
