# TDS Mobile 시작하기

## 개요

TDS Mobile 패키지를 통해 모바일 환경에서 다양한 UI 컴포넌트를 쉽게 구현할 수 있습니다. 이 가이드는 프로젝트 설정부터 컴포넌트 사용까지의 전체 과정을 안내합니다.

## 1단계: 필수 패키지 설치

프로젝트에서 다음 명령어를 실행하여 필수 패키지를 설치하세요:

```bash
npm install @toss/tds-mobile @toss/tds-mobile-ait @emotion/react@^11 react@^18 react-dom@^18
```

**필수 종속성:**
- `@toss/tds-mobile` - 핵심 컴포넌트 라이브러리
- `@toss/tds-mobile-ait` - AIT 제공자
- `@emotion/react` (v11 이상)
- `react` 및 `react-dom` (v18 이상)

## 2단계: Provider 구성

애플리케이션 루트에서 `TDSMobileAITProvider`로 컴포넌트 트리를 래핑하여 필요한 컨텍스트를 제공하세요:

```javascript
import { TDSMobileAITProvider } from '@toss/tds-mobile-ait';

function App({ Component, pageProps }) {
  return (
    <TDSMobileAITProvider>
      <Component {...pageProps} />
    </TDSMobileAITProvider>
  );
}
```

이 Provider는 모든 TDS Mobile 컴포넌트가 올바르게 작동하기 위한 필수 설정을 제공합니다.

## 3단계: 컴포넌트 사용

패키지 설치와 Provider 설정 완료 후, 컴포넌트를 불러와 사용할 수 있습니다:

```javascript
import { Button } from '@toss/tds-mobile';

const App = () => <Button>버튼</Button>;
```

이제 Button을 포함한 모든 TDS Mobile 컴포넌트를 프로젝트에서 활용할 준비가 완료되었습니다.
