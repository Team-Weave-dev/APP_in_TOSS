# ScrollViewInertialBackground

## 개요

`ScrollViewInertialBackground`는 React Native 환경에서 iOS ScrollView의 콘텐츠 위아래 공간에 배경색을 추가하는 컴포넌트입니다. iOS의 바운스 효과(Bounce) 발생 시 시각적 일관성을 제공합니다.

**지원 환경**: React Native
**실행 환경**: Toss AppSandbox App

## 함수 시그니처

```typescript
function ScrollViewInertialBackground({
  topColor,
  bottomColor,
  spacer: _spacer,
}: ScrollViewInertialBackgroundProps): JSX.Element;
```

## 파라미터

| 파라미터 | 타입 | 기본값 | 설명 |
|---------|------|-------|------|
| `topColor` | `string` | `adaptive.background` | 스크롤 위쪽 영역에 적용할 배경색 |
| `bottomColor` | `string` | `adaptive.background` | 스크롤 아래쪽 영역에 적용할 배경색 |
| `spacer` | `number` | 화면 높이 | 배경색이 적용될 콘텐츠 위아래 공간 크기 |

## 사용 예제

```typescript
import { ScrollView, View, Text } from 'react-native';
import { ScrollViewInertialBackground } from 'react-native-bedrock';

const dummies = Array.from({ length: 20 }, (_, i) => i);

function InertialBackgroundExample() {
  return (
    <ScrollView>
      <ScrollViewInertialBackground topColor="red" bottomColor="blue" />
      {dummies.map((i) => (
        <View
          key={`dummy-${i}`}
          style={{
            width: '100%',
            height: 100,
            borderBottomColor: 'black',
            borderBottomWidth: 1
          }}
        >
          <Text>스크롤을 해보세요.</Text>
        </View>
      ))}
    </ScrollView>
  );
}
```

이 예제에서는 스크롤 위에 빨간색, 아래에 파란색 배경을 설정하여 스크롤 범위를 벗어났을 때도 시각적 일관성을 유지합니다.
