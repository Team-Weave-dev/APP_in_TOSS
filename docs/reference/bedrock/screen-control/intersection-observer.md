# 스크롤 뷰에서 요소 감지하기

## 개요

스크롤 뷰 내에서 특정 요소가 화면에 표시되는지를 감지하는 기능을 제공합니다. `IOScrollView`와 `ImpressionArea` 컴포넌트를 통해 요소의 노출 상태를 추적할 수 있습니다.

## 주요 컴포넌트

### IOScrollView
스크롤 뷰 내 요소의 가시성을 감지하기 위한 래퍼 컴포넌트입니다. 반드시 상위 레벨에 배치해야 합니다.

### ImpressionArea
특정 요소가 설정된 비율 이상으로 노출되었을 때 콜백을 실행합니다. 반드시 `IOScrollView` 내부에 위치해야 합니다.

## 함수 시그니처

```typescript
<ImpressionArea
  areaThreshold={number}
  onImpressionStart={() => void}
>
  {children}
</ImpressionArea>
```

## 파라미터

| 파라미터 | 타입 | 설명 |
|---------|------|------|
| `areaThreshold` | number | 노출 감지 임계값 (0~1 범위, 기본값: 0.2) |
| `onImpressionStart` | function | 임계값 초과 시 실행될 콜백 함수 |

## 사용 예시

```typescript
import { createRoute, ImpressionArea, IOScrollView } from '@granite-js/react-native';
import { Alert, Text, View } from 'react-native';

function ImageComponent() {
  return (
    <IOScrollView>
      <ImpressionArea
        areaThreshold={0.2}
        onImpressionStart={() => {
          Alert.alert('요소가 노출되었습니다');
        }}
      >
        <View style={{ width: '100%', height: 100, backgroundColor: 'blue' }} />
      </ImpressionArea>
    </IOScrollView>
  );
}
```

## 주의사항

`ImpressionArea`는 반드시 `IOScrollView` 내부에 포함되어야 합니다. 그렇지 않으면 "IOContext.Provider 밖에서 사용"이라는 오류가 발생합니다.

## 관련 API

- **IOScrollView**: 스크롤 영역 노출 감지
- **ImpressionArea**: 컴포넌트 노출 감지
