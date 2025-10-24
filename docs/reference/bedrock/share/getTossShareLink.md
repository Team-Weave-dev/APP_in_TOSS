# getTossShareLink - 토스앱 공유 링크 생성

## 개요

`getTossShareLink` 함수는 토스 앱 내에서 특정 경로를 여는 공유 가능한 링크를 생성합니다. 토스 앱이 없는 사용자가 이 링크를 받으면 적절한 앱 스토어(iOS의 경우 App Store, Android의 경우 Play Store)로 이동합니다.

## 지원 환경

- **프레임워크**: React Native, WebView
- **실행 환경**: Toss App, Sandbox App

## 함수 시그니처

```typescript
function getTossShareLink(path: string): Promise<string>;
```

## 파라미터

| 파라미터 | 타입 | 필수 | 설명 |
|-----------|------|----------|-------------|
| `path` | string | Yes | `intoss://`로 시작해야 하는 딥링크 경로. 예: `intoss://my-app` 또는 `intoss://my-app/about?name=test` |

## 반환 값

- **타입**: `Promise<string>`
- `deep_link_value` 파라미터를 포함하는 완전한 토스 공유 링크를 반환합니다

## 사용 예제

### React (WebView)

```typescript
import { share, getTossShareLink } from '@apps-in-toss/web-framework';
import { Button } from '@toss-design-system/mobile';

function ShareButton() {
  async function handleClick() {
    const tossLink = await getTossShareLink('intoss://my-app');
    await share({ message: tossLink });
  }

  return <Button onClick={handleClick}>공유하기</Button>;
}
```

### React Native

```typescript
import { share, getTossShareLink } from '@apps-in-toss/framework';
import { Button } from "@toss-design-system/react-native";

function ShareButton() {
  async function handleClick() {
    const tossLink = await getTossShareLink('intoss://my-app');
    await share({ message: tossLink });
  }

  return <Button onClick={handleClick}>공유하기</Button>;
}
```

## 관련 함수

- **share**: 메시지 공유하기
- **openURL**: 외부 URL 열기
