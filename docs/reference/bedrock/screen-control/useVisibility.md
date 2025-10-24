# useVisibility - 화면 보임 여부 확인하기

## 개요

`useVisibility` 훅은 현재 화면이 사용자에게 보이는지 여부를 감지합니다. 앱이 백그라운드로 전환되거나 다른 화면으로 이동할 때 상태 변화를 추적할 수 있습니다.

## 함수 시그니처

```typescript
function useVisibility(): boolean;
```

## 반환 값

**boolean**: 화면의 현재 가시성 상태
- `true`: 사용자에게 화면이 보임
- `false`: 사용자에게 화면이 보이지 않음

## 동작 특성

- 다른 앱으로 전환하거나 홈 버튼 입력 시 `false` 반환
- 토스 앱으로 복귀하면 `true` 반환
- 토스 앱 내 다른 서비스로 이동하면 `false` 반환
- 시스템 공유 모달 열고 닫을 때는 상태 변화 없음

## 사용 예제

```typescript
import { useVisibility } from '@granite-js/react-native';
import { useEffect } from 'react';
import { Button, Linking } from 'react-native';

export default function VisibilityPage() {
  const visibility = useVisibility();

  useEffect(() => {
    console.log({ visibility });
  }, [visibility]);

  return (
    <Button
      onPress={() => {
        Linking.openURL('https://toss.im');
      }}
      title="https://toss.im 이동"
    />
  );
}
```

예상 출력: 홈 화면 이동 시 `false`, 복귀 시 `true`가 순차적으로 기록됩니다.
