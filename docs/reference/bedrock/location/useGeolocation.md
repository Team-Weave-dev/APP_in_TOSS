# 훅으로 위치 사용하기

## 개요

`useGeolocation` 훅은 GPS를 사용하여 실시간 기기 위치 추적을 가능하게 합니다. 기기의 위치가 변경됨에 따라 자동으로 업데이트되는 위치 데이터를 반환하므로 지도 기반 서비스 및 배달 추적 애플리케이션에 이상적입니다.

## 함수 시그니처

```typescript
function useGeolocation({ accuracy, distanceInterval, timeInterval }: UseGeolocationOptions): Location | null;
```

## 파라미터

**options** (필수) - 다음 속성을 가진 설정 객체:

- **accuracy** (`Accuracy`): 위치 감지의 정밀도 수준
  - `Accuracy.Lowest`: ±3km 오차 범위
  - `Accuracy.Low`: ±1km 오차 범위
  - `Accuracy.Balanced`: ±수백 미터
  - `Accuracy.High`: ±10m 오차 범위
  - `Accuracy.Highest`: 최대 정밀도
  - `Accuracy.BestForNavigation`: 내비게이션에 최적화된 최고 정밀도

- **timeInterval** (`number`): 최소 업데이트 빈도 (밀리초). 시스템 조건에 따라 실제 업데이트가 덜 자주 발생할 수 있습니다.

- **distanceInterval** (`number`): 업데이트를 트리거하는 최소 거리 임계값 (미터).

## 반환값

기기 좌표를 포함하는 `Location` 객체를 반환하거나, 위치 데이터 로딩 중에는 `null`을 반환합니다. 완전한 객체 구조는 Location 문서를 참조하세요.

## 사용 예제

```typescript
import React from 'react';
import { View, Text } from 'react-native';
import { useGeolocation, Accuracy } from '@apps-in-toss/framework';

function LocationWatcher() {
  const location = useGeolocation({
    accuracy: Accuracy.Balanced,
    distanceInterval: 10,
    timeInterval: 1000,
  });

  if (location == null) {
    return <Text>위치 데이터 가져오는 중...</Text>;
  }

  return (
    <View>
      <Text>
        위치: {location.latitude}, {location.longitude}
      </Text>
    </View>
  );
}
```

## 지원 환경

- **프레임워크**: React Native
- **실행 환경**: Toss AppSandbox App
