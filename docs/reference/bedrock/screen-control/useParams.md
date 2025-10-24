# useParams - 쿼리 파라미터 사용하기

## 개요

`useParams` 훅은 URL 스킴으로 실행된 애플리케이션에 포함된 쿼리 스트링 값을 참조하는 기능을 제공합니다. 이를 통해 특정 화면을 실행할 때 필요한 데이터를 전달하거나 특정 기능을 활성화할 수 있습니다.

## 함수 시그니처

```typescript
function useParams<TScreen extends keyof RegisterScreen>(options: {
    from: TScreen;
    strict?: true;
}): RegisterScreen[TScreen];
```

## 파라미터

| 파라미터 | 타입 | 필수 | 설명 |
|---------|------|------|------|
| `options.from` | string | 필수 | 파라미터를 가져올 라우트 경로 |
| `options.strict` | boolean | 선택 | 엄격 모드 설정 (기본값: true) |

## 반환값

지정된 라우트의 파라미터 객체를 반환합니다. `validateParams`에서 정의한 타입으로 타입 안전성을 보장합니다.

## 주요 기능

### 기본 사용법

라우트 생성 시 `validateParams` 옵션으로 필수 파라미터를 정의합니다:

```typescript
export const Route = createRoute('/examples/use-params', {
  validateParams: (params) => params as { id: string },
  component: UseParamsExample,
});

function UseParamsExample() {
  const params = Route.useParams();
  return <Text>{params.id}</Text>;
}
```

### 유효성 검증

필수 파라미터 누락 시 에러를 발생시킵니다:

```typescript
validateParams: (params) => {
  if (!("name" in params)) throw Error("name is required");
  if (typeof params.name !== "string") throw Error("name must be a string");
  return params as { name: string; age: number };
}
```

### 파라미터 값 변환

`parserParams` 옵션으로 쿼리 값을 원하는 타입으로 변환합니다:

```typescript
parserParams: (params) => {
  const { referer, ...rest } = params;
  return rest; // referer 제거
}
```

## 지원 환경

- **플랫폼**: React Native
- **실행환경**: Toss AppSandbox App
