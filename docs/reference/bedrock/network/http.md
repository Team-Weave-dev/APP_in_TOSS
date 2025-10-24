# HTTP 통신하기

## 개요

Bedrock에서는 표준 웹 API인 Fetch API를 사용하여 네트워크 통신을 구현할 수 있습니다. 이를 통해 비동기 네트워크 요청을 간단히 처리할 수 있습니다.

## 지원 환경

- **프레임워크**: React Native, WebView
- **실행 환경**: Toss App, Sandbox App

## Fetch API 사용하기

### 기본 함수 시그니처

```typescript
fetch(url: string, options?: RequestInit): Promise<Response>
```

### 파라미터

| 파라미터 | 타입 | 설명 |
|---------|------|------|
| `url` | string | 요청할 API의 URL |
| `options` | RequestInit (선택) | 요청 옵션 (메서드, 헤더, 본문 등) |

### 반환값

반환되는 Promise는 Response 객체를 담으며, `.json()` 메서드로 JSON 형식의 응답 데이터를 변환할 수 있습니다.

## 사용 예제

```typescript
const handlePress = useCallback(async () => {
  const result = await fetch("https://jsonplaceholder.typicode.com/todos");
  const json = await result.json();
  setTodos(json);
}, []);
```

위 예제는 외부 API에서 할 일 목록을 가져오는 방식을 보여줍니다.

## 다른 네트워크 라이브러리 사용

React Native는 XMLHttpRequest API를 지원하므로, 이를 기반으로 하는 써드파티 네트워크 라이브러리도 활용 가능합니다. 자세한 내용은 [React Native 공식 문서](https://reactnative.dev/docs/0.72/network#using-other-networking-libraries)를 참고하세요.

## 중요 사항

- 네트워크 요청 활동은 개발자 도구의 네트워크 인스펙터에서 확인할 수 있습니다
- 비동기 처리이므로 async/await 패턴을 권장합니다
