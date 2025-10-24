# Stack

## 개요

`Stack` 컴포넌트는 자식 요소를 사이에 사용자 정의 가능한 간격으로 가로 또는 세로 방향으로 배치하도록 설계된 React Native용 레이아웃 유틸리티입니다.

## 함수 시그니처

```typescript
Stack: StackType
```

## 파라미터

컴포넌트는 다음 속성을 가진 `props` 객체를 받습니다:

| 속성 | 타입 | 설명 |
|-----|------|------|
| `align` | `'flex-start' \| 'flex-end' \| 'center' \| 'stretch' \| 'baseline'` | 주 축을 따라 자식 요소를 정렬합니다. `alignItems` flexbox 속성에 매핑됩니다. |
| `justify` | `'flex-start' \| 'flex-end' \| 'center' \| 'space-between' \| 'space-around' \| 'space-evenly'` | 교차 축을 따라 자식 요소를 정렬합니다. `justifyContent`에 매핑됩니다. |
| `direction` | `'vertical' \| 'horizontal'` | 레이아웃 방향을 결정합니다. 기본값은 `'vertical'`입니다. |
| `gutter` | `number \| ReactElement` | 자식 요소 사이의 간격을 설정합니다. 숫자 값(픽셀) 또는 사용자 정의 React 컴포넌트를 받습니다. |

## 하위 컴포넌트

- **`Stack.Horizontal`** – 자식을 가로(행) 레이아웃으로 배치합니다
- **`Stack.Vertical`** – 자식을 세로(열) 레이아웃으로 배치합니다

## 사용 예제

```tsx
import { Text } from 'react-native';
import { Stack } from '@granite-js/react-native';

function StackExample() {
  return (
    <>
      <Stack gutter={16} direction="horizontal">
        <Text>항목 1</Text>
        <Text>항목 2</Text>
        <Text>항목 3</Text>
      </Stack>
      <Stack gutter={16} direction="vertical">
        <Text>항목 A</Text>
        <Text>항목 B</Text>
        <Text>항목 C</Text>
      </Stack>
    </>
  );
}
```

## 환경 지원

- **프레임워크**: React Native
- **실행 환경**: Toss AppSandbox App
