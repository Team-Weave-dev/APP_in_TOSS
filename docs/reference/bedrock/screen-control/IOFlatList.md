# IOFlatList - 리스트 항목 노출 감지하기

## 개요

`IOFlatList`는 React Native에서 스크롤 중 리스트 항목의 화면 노출 여부를 감지하기 위한 컴포넌트입니다. Intersection Observer 기능을 `FlatList`에 추가하여 각 항목이 뷰포트에 표시되는지 모니터링합니다.

## 지원 환경

- **프레임워크**: React Native
- **실행 환경**: Toss AppSandbox App

## 함수 시그니처

```typescript
IOFlatList: typeof IOFlatListFunction;
```

## 주요 기능

`IOFlatList`는 `InView` 컴포넌트와 함께 사용되어 다음을 지원합니다:
- 리스트 항목이 화면에 표시될 때 자동 감지
- 자식 `InView` 컴포넌트의 노출 상태 추적
- "노출 상태에 따른 이벤트 발생"

## 사용 예제

```typescript
import { ReactNode, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { InView, IOFlatList } from '@granite-js/react-native';

const mockData = Array.from({ length: 30 }, (_, i) => ({ key: String(i) }));

function FlatListPage() {
  return (
    <IOFlatList
      data={mockData}
      renderItem={({ item }) => <InViewItem>{item.key}</InViewItem>}
    />
  );
}

function InViewItem({ children }: { children: ReactNode }) {
  const [visible, setVisible] = useState(false);

  return (
    <InView onChange={setVisible}>
      <View style={styles.item}>
        <Text>{children}</Text>
        <Text>{visible ? "visible" : ""}</Text>
      </View>
    </InView>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});
```

## 관련 컴포넌트

- **InView**: "요소 노출 감지" 기능을 제공하는 래퍼 컴포넌트
- **IOScrollView**: 스크롤 뷰용 노출 감지 버전
