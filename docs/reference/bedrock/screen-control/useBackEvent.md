# useBackEvent - 뒤로가기 이벤트 제어하기

## 개요

`useBackEvent`는 React Native 환경에서 뒤로 가기 이벤트를 관리하는 Hook입니다. 특정 컴포넌트가 활성화되었을 때만 뒤로 가기 동작을 커스터마이징할 수 있으며, `useVisibility`를 통해 화면 가시성을 감지합니다.

## 함수 시그니처

```typescript
function useBackEvent(): BackEventControls;
```

## 반환 값

**BackEventControls**: 뒤로 가기 이벤트를 제어하는 객체

- `addEventListener(callback: () => void)`: 이벤트 리스너 등록
- `removeEventListener(callback: () => void)`: 이벤트 리스너 제거

## 에러 처리

Hook이 `BackEventProvider` 내에서 사용되지 않을 경우 에러 발생

## 사용 예제

```typescript
import { useEffect, useState } from "react";
import { Alert, Button, View } from "react-native";
import { useBackEvent } from '@granite-js/react-native';

function UseBackEventExample() {
  const backEvent = useBackEvent();
  const [handler, setHandler] = useState<{ callback: () => void } | undefined>(
    undefined
  );

  useEffect(() => {
    const callback = handler?.callback;

    if (callback != null) {
      backEvent.addEventListener(callback);

      return () => {
        backEvent.removeEventListener(callback);
      };
    }

    return;
  }, [backEvent, handler]);

  return (
    <View>
      <Button
        title="Add BackEvent"
        onPress={() => {
          setHandler({ callback: () => Alert.alert("back") });
        }}
      />
      <Button
        title="Remove BackEvent"
        onPress={() => {
          setHandler(undefined);
        }}
      />
    </View>
  );
}
```

## 동작 방식

- "Add BackEvent" 버튼 클릭 시 이벤트가 등록되어, 뒤로 가기 버튼 클릭 시 알림 표시
- "Remove BackEvent" 버튼 클릭 시 기본 뒤로 가기 동작으로 복구
