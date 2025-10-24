# ImpressionArea - 컴포넌트 노출 감지하기

## 개요

`ImpressionArea` 컴포넌트는 "특정 컴포넌트가 화면에 보이는지 여부를 감지해서 외부에 알려주는 컴포넌트"입니다. 화면 노출 시점에 로그 수집이나 애니메이션 실행 같은 작업을 구현할 수 있습니다.

## 함수 시그니처

```typescript
function ImpressionArea(props: Props): ReactElement;
```

## 파라미터

| 파라미터 | 타입 | 기본값 | 설명 |
|---------|------|-------|------|
| `onImpressionStart` | `() => void` | - | 자식 컴포넌트가 화면에 표시될 때 실행되는 콜백함수 |
| `onImpressionEnd` | `() => void` | - | 자식 컴포넌트가 화면에서 가려졌을 때 실행되는 콜백함수 |
| `enabled` | `boolean` | `true` | 화면 노출 조건 제어값. `false`일 경우 `onImpressionStart` 미실행 |
| `areaThreshold` | `number` | `0` | "노출 영역 비율(0~1). 이 값보다 큰 비율로 표시되면 콜백 호출" |
| `timeThreshold` | `number` | `0` | 화면 노출 후 콜백 호출까지의 지연 시간(밀리초) |
| `style` | `ViewStyle` | `undefined` | `InView` 컴포넌트에 적용할 스타일 |
| `UNSAFE__impressFallbackOnMount` | `boolean` | `false` | 마운트 시점에 즉시 노출된 것으로 간주할지 여부 |

## 반환값

`ReactElement` - 노출 감지 기능이 포함된 컴포넌트

## 주요 특징

- **IOScrollView 필수**: 기본적으로 `IOScrollView` 내에서만 작동합니다
- **대체 옵션**: `IOScrollView` 외부에서 사용할 경우 `UNSAFE__impressFallbackOnMount`를 `true`로 설정

## 사용 예제

### 기본 사용법

```typescript
<IOScrollView>
  <ImpressionArea
    onImpressionStart={() => setIsImpressionStart(true)}
    onImpressionEnd={() => setIsImpressionStart(false)}
  >
    <Button title="Button" />
  </ImpressionArea>
</IOScrollView>
```

### 마운트 시 감지

```typescript
<ImpressionArea
  UNSAFE__impressFallbackOnMount={true}
  onImpressionStart={() => setIsImpressionStart(true)}
  onImpressionEnd={() => setIsImpressionStart(false)}
>
  <Button title="Button" />
</ImpressionArea>
```

## 지원 환경

- **프레임워크**: React Native
- **런타임**: Toss AppSandbox App
