# margin

## 개요

`margin` 유틸리티 함수는 React Native 애플리케이션에서 컴포넌트 주위의 외부 간격을 설정합니다. x축(가로), y축(세로) 또는 개별 방향(상, 우, 하, 좌)에 프리셋 값과 사용자 정의 숫자 모두로 여백을 정의할 수 있습니다.

## 함수 시그니처

```typescript
margin: BoxSpacing
```

## 파라미터

**option** (필수) · `BoxSpacingOption`
- 모든 방향에 균일하게 적용하거나 숫자 값을 사용하여 방향별로 개별적으로 적용할 수 있는 외부 여백 값을 지정합니다.

## 속성

`margin` 객체는 다음 속성을 제공합니다:

### 방향별 함수
- **`x(value: number)`** - 왼쪽과 오른쪽에 여백 적용
- **`y(value: number)`** - 위와 아래에 여백 적용
- **`top(value: number)`** - 위에만 여백 적용
- **`right(value: number)`** - 오른쪽에만 여백 적용
- **`bottom(value: number)`** - 아래에만 여백 적용
- **`left(value: number)`** - 왼쪽에만 여백 적용

### 프리셋 값
일반적인 간격 값(4px, 8px, 12px, 16px, 24px, 32px)을 위한 단축 속성:
- `x4`, `x8`, `x12`, `x16`, `x24`, `x32`
- `y4`, `y8`, `y12`, `y16`, `y24`, `y32`
- `top4`, `top8`, `top12`, `top16`, `top24`, `top32`
- `right4`, `right8`, `right12`, `right16`, `right24`, `right32`
- `bottom4`, `bottom8`, `bottom12`, `bottom16`, `bottom24`, `bottom32`
- `left4`, `left8`, `left12`, `left16`, `left24`, `left32`

## 사용 예제

```tsx
import { margin } from '@granite-js/react-native';
import { View, Text } from 'react-native';

function Component() {
  return (
    <View>
      <View style={margin.x8}>
        <Text>가로 여백 적용됨</Text>
      </View>
      <View style={margin.y8}>
        <Text>세로 여백 적용됨</Text>
      </View>
      <View style={margin.bottom(100)}>
        <Text>사용자 정의 100px 아래 여백</Text>
      </View>
    </View>
  );
}
```

## 참고사항

- 지원 환경: React Native
- 실행 환경: Toss AppSandbox App
- 모든 여백 값은 React Native의 style prop과 호환되는 `ViewStyle` 객체를 반환합니다
