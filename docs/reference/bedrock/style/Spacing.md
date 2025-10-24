# Spacing

## 개요

`Spacing` 컴포넌트는 레이아웃에 여백을 추가하기 위해 빈 공간을 생성합니다. 세로 및 가로 간격 방향을 모두 지원합니다.

## 함수 시그니처

```typescript
Spacing: import("react").NamedExoticComponent<Props>
```

## 파라미터

### Props 객체

| 파라미터 | 타입 | 필수 | 기본값 | 설명 |
|---------|------|------|-------|------|
| `size` | `number` | Yes | — | 간격 크기를 정의하는 숫자 값 |
| `direction` | `'vertical' \| 'horizontal'` | No | `'vertical'` | 간격이 적용되는 축 |
| `style` | `StyleProp<ViewStyle>` | No | `undefined` | 추가 스타일시트 속성 |

## 사용 예제

```typescript
import { View, Text } from 'react-native';
import { Spacing } from '@granite-js/react-native';

function SpacingExample() {
  return (
    <View>
      <Text>위</Text>
      <Spacing size={16} direction="vertical"
        style={{ backgroundColor: 'red', width: 5 }} />
      <Text>아래, 세로 간격으로 아래에 배치됨</Text>

      <View style={{ flexDirection: 'row' }}>
        <Text>왼쪽</Text>
        <Spacing size={16} direction="horizontal"
          style={{ backgroundColor: 'red', height: 5 }} />
        <Text>오른쪽, 가로 간격으로 옆에 배치됨</Text>
      </View>
    </View>
  );
}
```

## 주요 사항

- **지원 환경**: React Native
- **실행 환경**: Toss AppSandbox App
- 컴포넌트는 보이지 않는 간격을 만드는 대신 레이아웃에서 물리적 공간을 차지합니다
- 디버깅 목적으로 선택적 `style` prop을 통해 시각적 스타일링을 적용할 수 있습니다
