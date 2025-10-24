# IOScrollView - 스크롤 영역 노출 감지하기

## 개요

`IOScrollView`는 Intersection Observer 기능이 추가된 ScrollView 컴포넌트입니다. 스크롤 중 특정 요소가 화면에 표시되거나 사라지는 상태를 감지할 수 있으며, `InView` 컴포넌트를 자식 요소로 사용하여 화면 노출 여부를 확인합니다.

**지원환경:** React Native
**실행환경:** Toss AppSandbox App

## 함수 시그니처

```typescript
IOScrollView: ForwardRefExoticComponent<
  IOScrollViewProps & RefAttributes<IOScrollViewController>
>
```

## 주요 특징

- ScrollView의 모든 기능을 포함한 확장 컴포넌트
- 자식 요소의 뷰포트 가시성 자동 추적
- `InView` 컴포넌트와 함께 사용하여 노출 상태 관리

## 사용 예제

```typescript
import { ReactNode, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { InView, IOScrollView } from '@granite-js/react-native';

const mockData = Array.from({ length: 30 }, (_, i) => ({
  key: String(i)
}));

function IOScrollViewPage() {
  return (
    <IOScrollView>
      {mockData.map((data) => (
        <InViewItem key={data.key}>{data.key}</InViewItem>
      ))}
    </IOScrollView>
  );
}

function InViewItem({ children }: { children: ReactNode }) {
  const [visible, setVisible] = useState(false);

  return (
    <InView onChange={setVisible}>
      <View style={styles.item}>
        <Text>{children}</Text>
        <Text>{visible ? 'visible' : ''}</Text>
      </View>
    </InView>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});
```

## 동작 원리

리스트의 각 항목이 화면에 나타나면 `InView` 컴포넌트의 `onChange` 콜백이 호출되어 `visible` 상태가 `true`로 변경됩니다.
