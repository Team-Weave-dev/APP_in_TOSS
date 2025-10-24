# KeyboardAboveView

## 개요

`KeyboardAboveView`는 React Native 환경에서 키보드 표시 시 자식 컴포넌트를 자동으로 키보드 위로 이동시키는 컴포넌트입니다.

## 함수 시그니처

```typescript
function KeyboardAboveView({
  style,
  children,
  ...props
}: ComponentProps<typeof View>): ReactElement;
```

## 파라미터

| 파라미터 | 타입 | 설명 |
|---------|------|------|
| `style` | `StyleProp<ViewStyle>` | 배경색, 크기 등 추가 스타일 속성 |
| `children` | `ReactNode` | 키보드 위에 표시될 컴포넌트 (버튼, 입력창 등) |
| `...props` | `View Props` | View 컴포넌트의 추가 속성 |

## 반환값

`Animated.View`를 기반으로 한 React 엘리먼트를 반환하며, 키보드 표시 시 자동으로 위치가 조정됩니다.

## 사용 예제

```typescript
import { ScrollView, TextInput, View, Text } from 'react-native';
import { KeyboardAboveView } from 'react-native-bedrock';

function KeyboardAboveViewExample() {
  return (
    <>
      <ScrollView>
        <TextInput placeholder="placeholder" />
      </ScrollView>

      <KeyboardAboveView>
        <View style={{ width: '100%', height: 50, backgroundColor: 'yellow' }}>
          <Text>키보드 위에 표시됩니다.</Text>
        </View>
      </KeyboardAboveView>
    </>
  );
}
```

## 지원 환경

- **프레임워크**: React Native
- **실행 환경**: Toss AppSandbox App
