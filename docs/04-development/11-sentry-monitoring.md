# 모니터링

## 개요

앱에 Sentry를 연동하면 JavaScript에서 발생한 오류를 감지하고 모니터링할 수 있습니다. 앱의 안정성을 높이고, 사용자에게 더 나은 경험을 제공할 수 있습니다.

## 1. Sentry 초기 설정하기

[Sentry 공식 가이드](https://docs.sentry.io/platforms/react-native)를 참고해서 앱에서 초기화 코드를 추가해야 합니다.

### 네이티브 기능은 사용할 수 없습니다

앱인토스 환경에서는 JavaScript에서 발생한 오류만 추적할 수 있습니다. `enableNative` 옵션을 `false`로 설정해야 합니다.

```typescript
import * as Sentry from '@sentry/react-native';

Sentry.init({
  // ...
  enableNative: false,
});
```

## 2. Sentry 플러그인 설치하기

프로젝트 루트 디렉터리에서 아래 명령어 중 사용하는 패키지 관리자에 맞는 명령어를 실행하세요.

**npm:**
```sh
npm install @granite-js/plugin-sentry
```

**pnpm:**
```sh
pnpm install @granite-js/plugin-sentry
```

**yarn:**
```sh
yarn add @granite-js/plugin-sentry
```

## 3. 플러그인 구성하기

설치한 `@granite-js/plugin-sentry`를 `granite.config.ts` 파일의 `plugins` 항목에 추가하세요. `useClient` 옵션은 반드시 `false`로 설정해야 합니다.

### useClient 옵션을 false로 설정해야 하는 이유

`useClient`를 `false`로 설정하면 빌드 시 소스맵이 자동으로 업로드되지 않습니다. 앱인토스 환경에서는 빌드 후 수동으로 소스맵을 업로드해야 하기 때문입니다.

```typescript
import { defineConfig } from '@granite-js/react-native/config';
import { sentry } from '@granite-js/plugin-sentry';
import { appsInToss } from '@apps-in-toss/framework/plugins';

export default defineConfig({
  // ...,
  plugins: [
    sentry({ useClient: false }),
    appsInToss({
      // ...
    }),
  ],
});
```

## 4. 앱 출시하기

앱을 출시하는 방법은 [앱 출시하기](/development/test/toss.html) 문서를 참고하세요.

## 5. 센트리에 소스맵 배포하기

출시한 앱의 오류를 정확히 추적하려면 소스맵을 Sentry에 업로드해야 합니다.

아래 명령어를 실행하면 소스맵이 업로드됩니다.

**npm:**
```sh
npx ait sentry upload-sourcemap \
  --api-key <API_KEY> \
  --app-name <APP_NAME> \
  --deployment-id <DEPLOYMENT_ID>
```

**pnpm:**
```sh
pnpm ait sentry upload-sourcemap \
  --api-key <API_KEY> \
  --app-name <APP_NAME> \
  --deployment-id <DEPLOYMENT_ID>
```

**yarn:**
```sh
yarn ait sentry upload-sourcemap \
  --api-key <API_KEY> \
  --app-name <APP_NAME> \
  --deployment-id <DEPLOYMENT_ID>
```

### 명령어 실행 시 필요한 값

- `<API_KEY>`: 앱인토스 콘솔에서 발급받은 API 키
- `<APP_NAME>`: 센트리에 등록된 서비스 이름
- `<DEPLOYMENT_ID>`: 앱을 배포할 때 사용한 배포 ID

명령어 실행 후 Sentry의 조직(Org), 프로젝트(Project), 인증 토큰을 입력하라는 메시지가 나오면 알맞게 입력하세요. 입력이 완료되면 지정한 서비스의 소스맵이 Sentry에 업로드됩니다.
