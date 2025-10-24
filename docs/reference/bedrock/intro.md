# 앱인토스 SDK 시작하기

## 개요

Granite는 앱인토스 SDK의 공통 런타임 프레임워크로, 두 가지 형태로 제공됩니다:
- WebView용 SDK
- ReactNative용 SDK

## 핵심 컴포넌트

### AppsInToss

`AppsInToss.registerApp()` 메서드는 서비스 환경을 초기화하고 복잡한 구성 없이 필수 기능을 제공합니다.

**함수 시그니처:**
```typescript
AppsInToss: {
    registerApp(
      AppContainer: ComponentType<PropsWithChildren<InitialProps>>,
      { appName, context, router }: BedrockProps
    ): (initialProps: InitialProps) => JSX.Element;
    readonly appName: string;
}
```

### 주요 기능

프레임워크는 기본적으로 다음 기능을 제공합니다:
- **파일 기반 라우팅** (Next.js와 유사): URL 경로가 파일 구조에 자동으로 매핑됩니다
- **쿼리 파라미터 처리**: URL 스킴 파라미터에 쉽게 액세스
- **뒤로 가기 버튼 제어**: 사용자 지정 처리를 위한 뒤로 가기 이벤트 가로채기
- **화면 가시성 감지**: 화면이 나타나거나 사라질 때 감지

### InitialProps 타입

```typescript
type InitialProps = AndroidInitialProps | IOSInitialProps;
```

네이티브 플랫폼은 다음 정보를 포함하는 초기 데이터를 전달합니다:
- `platform`: 'ios' | 'android'
- `initialColorPreference`: 색상 테마 기본 설정
- `networkStatus`: 현재 네트워크 연결 상태
- `scheme`: 화면 진입에 사용된 URL 스킴
- `initialFontSize`: (iOS) 시스템 폰트 크기
- `isVisible`: (iOS) 화면 가시성 상태
- `initialFontScale`: (Android) 접근성 폰트 스케일

## 사용 예제

### 기본 등록

```typescript
import { AppsInToss } from '@apps-in-toss/framework';
import { context } from '../require.context';

function AppContainer({ children }: PropsWithChildren<InitialProps>) {
  return <>{children}</>;
}

export default AppsInToss.registerApp(AppContainer, { context });
```

### InitialProps 사용

```typescript
function AppContainer({ children, ...initialProps }: PropsWithChildren<InitialProps>) {
  console.log({ initialProps });
  return <>{children}</>;
}
```

## 관련 리소스

- [샘플 프로젝트](https://github.com/toss/apps-in-toss-examples/tree/main)
- [예제 모음](https://github.com/toss/apps-in-toss-examples/tree/main/examples)

## 관련 API

- **Storage**: 로컬 저장소 관리 (setItem, getItem, removeItem, clearItems)
- **Analytics**: 분석 데이터 수집 (LoggingArea, LoggingImpression, LoggingPress)
- **Environment**: 환경 정보 조회 (getDeviceId, getOperationalEnvironment, getTossAppVersion, isMinVersionSupported, getPlatformOS, getSchemeUri)
