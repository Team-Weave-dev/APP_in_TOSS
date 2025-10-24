# 앱 진입 완료 이벤트 감지하기

## 개요

`appsInTossEvent`를 통해 토스 앱에서 전달되는 다양한 상태 이벤트를 처리할 수 있습니다. 특히 `entryMessageExited` 이벤트는 "앱으로 이동했어요"와 같은 안내 메시지가 화면에서 사라지는 시점을 알려줍니다.

## 함수 시그니처

```typescript
appsInTossEvent.addEventListener('entryMessageExited', options)
```

## 파라미터

| 파라미터 | 타입 | 설명 |
|---------|------|------|
| `onEvent` | `() => void` | "메시지가 화면에서 사라지는 즉시 호출되는 콜백 함수" |
| `onError` | `(error: Error) => void` | 오류 발생 시 호출되는 선택적 콜백 함수 |

## 반환값

구독한 리스너를 해제하기 위한 `unsubscription` 함수를 반환합니다.

## 사용 예시

### React

```typescript
import { appsInTossEvent } from '@apps-in-toss/web-framework';
import { useEffect } from 'react';

function GameStarter() {
  useEffect(() => {
    const unsubscription = appsInTossEvent.addEventListener('entryMessageExited', {
      onEvent: () => {
        startGame();
      },
      onError: (error) => {
        console.error('게임 시작 이벤트 처리 중 오류:', error);
      },
    });

    return () => {
      unsubscription();
    };
  }, []);

  const startGame = () => {
    console.log('게임을 시작합니다!');
  };

  return <div><h2>게임을 준비 중...</h2></div>;
}
```

### React Native

```typescript
import { appsInTossEvent } from '@apps-in-toss/framework';
import { useEffect } from 'react';
import { View, Text } from 'react-native';

function GameStarter() {
  useEffect(() => {
    const unsubscription = appsInTossEvent.addEventListener('entryMessageExited', {
      onEvent: () => {
        startGame();
      },
      onError: (error) => {
        console.error('게임 시작 이벤트 처리 중 오류:', error);
      },
    });

    return () => {
      unsubscription();
    };
  }, []);

  const startGame = () => {
    console.log('게임을 시작합니다!');
  };

  return <View><Text>게임을 준비 중...</Text></View>;
}
```

## 해결하는 문제

- 안내 메시지가 사라진 정확한 순간 감지
- 초기화 작업이나 데이터 로딩을 적절한 타이밍에 실행
- 사용자가 앱을 정상적으로 이용할 준비 완료 확인
