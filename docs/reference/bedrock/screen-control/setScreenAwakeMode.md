# setScreenAwakeMode - 화면 항상 켜짐 설정하기

## 개요

`setScreenAwakeMode` 함수는 디바이스 화면이 자동으로 꺼지지 않도록 유지하는 기능을 제공합니다. 웹툰, 동영상, 문서 같이 "지속적인 화면 표시가 필요한 콘텐츠 감상에 유용"합니다.

**지원 환경:**
- React Native / WebView
- 실행: Toss App, Sandbox App

## 함수 시그니처

```typescript
function setScreenAwakeMode(options: {
    enabled: boolean;
}): Promise<{
    enabled: boolean;
}>;
```

## 파라미터

| 파라미터 | 타입 | 필수 | 설명 |
|---------|------|------|------|
| `options` | object | ✓ | 화면 항상 켜짐 모드 설정 |
| `options.enabled` | boolean | ✓ | `true`: 항상 켜짐 / `false`: 화면 보호기 시간에 따라 꺼짐 |

## 반환값

활성화 상태를 나타내는 객체를 반환합니다:

```typescript
{
    enabled: boolean  // 현재 화면 항상 켜짐 모드 상태
}
```

## 사용 예제

### 기본 사용법

```typescript
import { Button } from 'react-native';
import { setScreenAwakeMode } from 'react-native-bedrock';

function SetScreenAwakeMode() {
  return (
    <Button
      title="화면 항상 켜기"
      onPress={() => {
        setScreenAwakeMode({ enabled: true });
      }}
    />
  );
}
```

### 화면 진입/이탈 시 상태 복구

특정 화면에서만 항상 켜짐을 활성화하고, 떠날 때 복구하려면:

```typescript
import { useEffect } from 'react';
import { setScreenAwakeMode } from 'react-native-bedrock';

function MediaScreen() {
  useEffect(() => {
    setScreenAwakeMode({ enabled: true });

    return () => {
      setScreenAwakeMode({ enabled: false });  // 이전 상태 복구
    };
  }, []);

  return <Text>미디어 콘텐츠</Text>;
}
```

## 주의사항

- 앱 전체에 영향을 미치므로 특정 화면에서만 사용할 경우 정리 함수로 반드시 해제
- 앱을 벗어나면 설정이 자동으로 비활성화될 수 있음
- 불필요한 배터리 소모를 방지하기 위해 꼭 필요한 상황에서만 사용
