# setSecureScreen - 화면 캡처 차단하기

## 개요

`setSecureScreen` 함수는 네이티브 수준에서 화면 캡처를 차단하거나 허용하는 기능을 제공합니다. 금융 정보나 의료 데이터 같은 민감한 정보를 보호할 때 유용합니다.

**지원 환경:** React Native, WebView
**실행 환경:** Toss App, Sandbox App

## 함수 시그니처

```typescript
function setSecureScreen(options: {
    enabled: boolean;
}): Promise<{
    enabled: boolean;
}>;
```

## 파라미터

| 파라미터 | 타입 | 필수 | 설명 |
|---------|------|------|------|
| `options` | object | ○ | 화면 캡처 설정 옵션 |
| `options.enabled` | boolean | ○ | `true`: 캡처 차단, `false`: 캡처 허용 |

## 반환값

| 필드 | 타입 | 설명 |
|------|------|------|
| `enabled` | boolean | 현재 설정된 캡처 차단 상태 |

## 사용 예제

```typescript
import { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { setSecureScreen } from '@apps-in-toss/framework';

function SecureScreen() {
  useEffect(() => {
    // 화면 진입 시 캡처 차단 활성화
    setSecureScreen({ enabled: true });

    return () => {
      // 화면 퇴출 시 캡처 차단 해제
      setSecureScreen({ enabled: false });
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text>이 화면은 캡처가 차단되어 있습니다.</Text>
    </View>
  );
}
```

## 활용 시나리오

- 계좌 잔고 및 거래 내역 화면 보호
- 개인 신상정보 표시 페이지 보안
- 민감한 데이터를 다루는 모든 화면
