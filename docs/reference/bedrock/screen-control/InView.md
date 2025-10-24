# InView - 요소 노출 감지하기

## 개요

`InView` 컴포넌트는 화면에 요소가 표시되거나 사라지는 것을 감지합니다. 요소가 화면에 조금이라도 나타나면 `onChanged` 핸들러가 호출되며, 첫 번째 인자로 `true`가 전달됩니다. 요소가 화면에서 사라지면 `false`가 전달됩니다.

## 지원 환경

- **플랫폼**: React Native
- **실행 환경**: Toss AppSandbox App

## 중요 제약사항

`InView`는 반드시 `IOContext`를 포함한 `IOScrollView` 또는 `IOFlatList` 내부에서 사용해야 합니다. 컨텍스트 외부에서 사용하면 `IOProviderMissingError`가 발생합니다.

## 함수 시그니처

```typescript
class InView<T = ViewProps> extends PureComponent<InViewProps<T>>
```

## 주요 Props

| Props | 타입 | 필수 | 설명 |
|-------|------|------|------|
| `children` | React.ReactNode | ✓ | 자식 컴포넌트 |
| `as` | React.ComponentType | - | 렌더링할 컴포넌트 (기본값: View) |
| `triggerOnce` | boolean | - | `true`일 때 첫 노출 시에만 콜백 호출 |
| `onChange` | (inView: boolean, areaThreshold: number) => void | - | 노출 상태 변경 시 호출되는 콜백 |
| `onLayout` | (event: LayoutChangeEvent) => void | - | 레이아웃 변경 시 호출되는 콜백 |

## 사용 예제

```typescript
import { View, Text, Dimensions } from "react-native";
import { InView, IOScrollView } from '@granite-js/react-native';

function Example() {
  const handleChange = (inView: boolean, areaThreshold: number) => {
    if (inView) {
      console.log(`${areaThreshold * 100}% 비율로 화면에 표시됨`);
    } else {
      console.log("화면에서 사라짐");
    }
  };

  return (
    <IOScrollView>
      <InView onChange={handleChange}>
        <View style={{ width: 100, height: 300, backgroundColor: "yellow" }} />
      </InView>
    </IOScrollView>
  );
}
```

## 반환값

`onChange` 콜백 함수를 통해 두 개의 인자가 전달됩니다:

- **inView** (boolean): 요소의 화면 노출 여부
- **areaThreshold** (number): 노출 비율 (0 ~ 1.0)
