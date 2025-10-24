# setDeviceOrientation - 화면 방향 설정하기

## 개요

`setDeviceOrientation` 함수는 앱의 화면 방향을 세로(portrait) 또는 가로(landscape) 모드로 설정하는 기능을 제공합니다.

## 함수 시그니처

```typescript
function setDeviceOrientation(options: {
  type: 'portrait' | 'landscape';
}): Promise<void>;
```

## 파라미터

| 이름 | 타입 | 필수 | 설명 |
|------|------|------|------|
| options | object | ✓ | 화면 방향 설정 옵션 |
| options.type | string | ✓ | `'portrait'` 또는 `'landscape'` 중 선택 |

## 반환값

화면 방향 설정이 완료되면 해결되는 `Promise<void>`를 반환합니다.

## 사용 예제

### 기본 사용법

```typescript
import { setDeviceOrientation } from '@apps-in-toss/web-framework';

async function handleClick() {
  await setDeviceOrientation({ type: 'landscape' });
}
```

### 화면 이동 시 설정 복구

```typescript
import { setDeviceOrientation } from '@apps-in-toss/web-framework';
import { useEffect } from 'react';

function VideoScreen() {
  useEffect(() => {
    setDeviceOrientation({ type: 'landscape' });

    return () => {
      setDeviceOrientation({ type: 'portrait' }); // 정리
    };
  }, []);
}
```

## 주요 특징

- 앱 전체에 영향을 미치므로 특정 화면에서만 사용할 경우 cleanup 함수로 복구 필요
- 동영상 재생이나 게임 화면 등에서 유용
- 비동기 작업으로 Promise 기반 처리

## 지원 환경

- **플랫폼**: React Native, WebView
- **런타임**: Toss App, Sandbox App
