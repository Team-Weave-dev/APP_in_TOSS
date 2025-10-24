# useWaitForReturnNavigator - 화면 복귀 후 코드 실행하기

## 개요

`useWaitForReturnNavigator`는 화면 전환 후 돌아왔을 때 다음 코드를 동기적으로 실행하는 Hook입니다. React Navigation의 `navigate`를 사용하여 화면 이동을 관리합니다.

## 함수 시그니처

```typescript
function useWaitForReturnNavigator<T extends Record<string, object | undefined>>(): <RouteName extends keyof T>(route: RouteName, params?: T[RouteName]) => Promise<void>;
```

## 매개변수

- `route`: 네비게이션할 화면 경로 (RouteName)
- `params` (선택사항): 화면에 전달할 파라미터 객체

## 반환값

Promise를 반환하며, 화면에서 돌아왔을 때 resolve됩니다.

## 사용 예제

```typescript
import { Button } from 'react-native';
import { useWaitForReturnNavigator } from '@apps-in-toss/framework';

function UseWaitForReturnNavigator() {
  const navigate = useWaitForReturnNavigator();

  return (
    <Button
      title="이동하기"
      onPress={async () => {
        console.log(1);
        await navigate('/examples/use-visibility');
        // 화면에 돌아오면 이 코드가 실행됩니다.
        console.log(2);
      }}
    />
  );
}
```

## 지원 환경

- **프레임워크**: React Native
- **실행환경**: Toss AppSandbox App
