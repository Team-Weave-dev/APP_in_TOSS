# padding

## 개요

`padding` 함수는 컴포넌트 내부 간격을 설정하여 콘텐츠와 컴포넌트 경계 사이에 적절한 간격을 만듭니다. 균일하게(단일 값), 축별로(x/y), 또는 방향별로(상, 우, 하, 좌) 간격을 지정할 수 있습니다.

## 함수 시그니처

```typescript
padding: BoxSpacing
```

## 파라미터

**option** (필수) · `BoxSpacingOption`

모든 방향에 균일한 패딩을 적용하거나 방향별로 개별 값을 적용하는 숫자 값을 받습니다.

## 속성

`padding` 객체는 메서드와 프리셋을 제공합니다:

### 방향별 메서드
- `x(value: number)` - 가로 패딩 (왼쪽 & 오른쪽)
- `y(value: number)` - 세로 패딩 (위 & 아래)
- `top(value: number)` - 위 패딩
- `right(value: number)` - 오른쪽 패딩
- `bottom(value: number)` - 아래 패딩
- `left(value: number)` - 왼쪽 패딩

### 프리셋 값
각 방향에는 프리셋 토큰이 포함됩니다: `4`, `8`, `12`, `16`, `24`, `32` (픽셀 단위)

예시: `padding.x8`, `padding.top16`, `padding.bottom24`

## 사용 예제

```typescript
import { padding } from '@react-native-bedrock/core';
import { View, Text } from 'react-native';

function Component() {
  return (
    <View>
      <View style={padding.x8}>
        <Text>가로 패딩 적용됨</Text>
      </View>
      <View style={padding.y8}>
        <Text>세로 패딩 적용됨</Text>
      </View>
      <View style={padding.bottom(100)}>
        <Text>사용자 정의 100px 아래 패딩</Text>
      </View>
    </View>
  );
}
```

## 환경 지원

- **프레임워크**: React Native
- **실행 환경**: Toss AppSandbox App
