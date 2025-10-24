# Flex

## 개요

`Flex`는 **Flexbox 레이아웃**을 사용하여 자식 요소를 배치하는 React Native 컴포넌트입니다. 콘텐츠 센터링을 위한 편리한 옵션으로 가로 및 세로 정렬을 단순화합니다.

## 함수 시그니처

```typescript
Flex: FlexType
```

## 파라미터

### Props 객체

| 속성 | 타입 | 기본값 | 설명 |
|-----|------|-------|------|
| `align` | `'flex-start' \| 'flex-end' \| 'center' \| 'stretch' \| 'baseline'` | `'stretch'` | 주 축을 따라 자식을 정렬합니다. [`alignItems`](https://reactnative.dev/docs/0.72/layout-props#alignitems)에 매핑됩니다. |
| `justify` | `'flex-start' \| 'flex-end' \| 'center' \| 'space-between' \| 'space-around' \| 'space-evenly'` | `'flex-start'` | 교차 축을 따라 자식을 정렬합니다. [`justifyContent`](https://reactnative.dev/docs/0.72/layout-props#justifycontent)에 매핑됩니다. |
| `direction` | `'column' \| 'row'` | `'column'` | flex 방향을 설정합니다. [`flexDirection`](https://reactnative.dev/docs/0.72/layout-props#flexdirection)에 매핑됩니다. |
| `style` | `ViewProps['style']` | `undefined` | 배경색, 테두리, 마진 등을 위한 추가 스타일 속성. |

## 속성

- **`Flex.Center`** - 자식을 가로 및 세로 모두 센터링합니다
- **`Flex.CenterVertical`** - 자식을 세로로만 센터링합니다
- **`Flex.CenterHorizontal`** - 자식을 가로로만 센터링합니다

## 사용 예제

```typescript
import { Flex } from '@granite-js/react-native';
import { Text } from 'react-native';

function FlexExample() {
  return (
    <>
      <Flex direction="column">
        <Text>세로 레이아웃</Text>
        <Text>1</Text>
        <Text>2</Text>
        <Text>3</Text>
      </Flex>
      <Flex direction="row">
        <Text>가로 레이아웃</Text>
        <Text>1</Text>
        <Text>2</Text>
        <Text>3</Text>
      </Flex>
    </>
  );
}
```

## 지원 환경

- **프레임워크**: React Native
- **실행 환경**: Toss AppSandbox App
