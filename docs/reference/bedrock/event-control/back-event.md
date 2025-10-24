# 뒤로가기 버튼 이벤트 제어하기

## 개요

네이티브 앱에서 사용자가 뒤로가기 버튼을 눌렀을 때 발생하는 이벤트를 감지하고 제어할 수 있습니다. 이를 통해 중요한 작업 중 실수로 화면이 닫히는 것을 방지할 수 있습니다.

## 지원 환경

- **플랫폼**: React Native, WebView
- **실행 환경**: Toss App, Sandbox App

## 함수 시그니처

### Web (React)

```typescript
graniteEvent.addEventListener('backEvent', options)
```

### React Native

```typescript
useBackEvent()
```

## 파라미터

| 파라미터 | 타입 | 설명 |
|---------|------|------|
| `onEvent` | `() => void` | "사용자가 뒤로가기 버튼을 눌렀을 때 호출되는 콜백 함수" |
| `onError` | `(error: Error) => void` | "이벤트 처리 중 에러 발생 시 호출" |

## 반환값

`unsubscription()` 함수를 반환하며, 이를 호출하면 이벤트 리스너가 해제됩니다.

## 사용 예시

### React Web

```typescript
import { graniteEvent } from '@apps-in-toss/web-framework';
import { useEffect } from 'react';

function ConfirmBackNavigation() {
  useEffect(() => {
    const unsubscription = graniteEvent.addEventListener('backEvent', {
      onEvent: () => {
        const shouldLeave = window.confirm(
          '작성 중인 내용이 저장되지 않아요. 나가시겠어요?'
        );
        if (shouldLeave) {
          // 나가는 로직
        }
      },
      onError: (error) => {
        alert(`에러가 발생했어요: ${error}`);
      },
    });

    return unsubscription;
  }, []);

  return <textarea placeholder="내용을 입력해주세요" />;
}
```

### React Native

```typescript
import { useBackEvent } from '@granite-js/react-native';
import { Alert, Button } from 'react-native';

function UseBackEventExample() {
  const backEvent = useBackEvent();

  const handleAddBackEvent = () => {
    backEvent.addEventListener(() => Alert.alert('back'));
  };

  return <Button title="Add BackEvent" onPress={handleAddBackEvent} />;
}
```

## 주요 특징

- **기본 동작 차단**: 아무 작업도 하지 않으면 기본 뒤로가기 동작이 자동으로 차단됩니다
- **사용자 확인**: 확인창을 통해 사용자의 의도를 재확인할 수 있습니다
- **에러 처리**: `onError` 콜백으로 예외 상황을 안전하게 처리할 수 있습니다
