# 게임 리더보드 열기

## 개요

`openGameCenterLeaderboard` 함수는 게임 환경 내에서 사용자가 순위를 볼 수 있게 합니다. 이 기능을 통해 플레이어는 자신의 순위를 확인하고, 친구와 연결하며, 점수를 공유할 수 있습니다.

## 함수 시그니처

```typescript
function openGameCenterLeaderboard(): Promise<void>;
```

## 호환성

- **지원 환경**: WebView
- **실행 환경**: Toss App
- **최소 버전**: Toss App 5.221.0 이상

## 중요 사항

⚠️ **주요 고려사항:**

- 5.221.0 미만 버전을 실행하는 기기는 이 기능을 지원하지 않으며 작업을 실행하지 않고 `undefined`를 반환합니다
- 리더보드 WebView가 게임 프로필 표시와 겹칠 수 있습니다—게임 진입 직후에는 호출하지 마세요
- 구버전 앱을 사용하는 사용자는 어쨌든 이 기능을 사용하는 게임에 액세스할 수 없습니다

## 반환값

- 리더보드 WebView 표시를 호출합니다
- 앱 버전이 최소 요구사항보다 낮을 때 `undefined`를 반환합니다 (하지만 그런 사용자는 어차피 이 기능을 사용하는 게임을 실행할 수 없습니다)

## 사용 예제

### React 구현

```typescript
import { isMinVersionSupported, openGameCenterLeaderboard } from '@apps-in-toss/web-framework';
import { Button } from "@toss-design-system/mobile";

function GameCenterLeaderboardOpenButton() {
  const isSupported = isMinVersionSupported({
    android: "5.221.0",
    ios: "5.221.0",
  });

  if (!isSupported) {
    return;
  }

  function handleClick() {
    openGameCenterLeaderboard();
  };

  return <Button onClick={handleClick}>리더보드 웹뷰 호출</Button>;
}
```

### React Native 구현

```typescript
import { isMinVersionSupported, openGameCenterLeaderboard } from '@apps-in-toss/framework';
import { Button } from "@toss-design-system/react-native";

function GameCenterLeaderboardOpenButton() {
  const isSupported = isMinVersionSupported({
    android: "5.221.0",
    ios: "5.221.0",
  });

  if (!isSupported) {
    return;
  }

  function handlePress() {
    openGameCenterLeaderboard();
  };

  return <Button onPress={handlePress}>리더보드 웹뷰 호출</Button>;
}
```

## 관련 리소스

완전한 구현 예제는 [apps-in-toss-examples 저장소](https://github.com/toss/apps-in-toss-examples), 특히 `with-game` 브랜치를 참조하세요.
