# WebView 속성 제어하기

## 개요

웹으로 개발한 서비스는 내부적으로 WebView가 사용됩니다. WebView의 설정을 변경하려면 `granite.config.ts` 파일에서 `webViewProps` 속성을 구성하면 됩니다.

## 지원 환경

- **플랫폼**: WebView
- **실행 환경**: Toss AppSandbox App

## 사용 가능한 WebView 속성

### 1. `allowsInlineMediaPlayback`

HTML5 동영상을 WebView 내에서 전체 화면이 아닌 인라인 방식으로 재생하도록 설정합니다.

- **타입**: `boolean`
- **기본값**: `false`
- **플랫폼**: iOS 전용
- **참고**: HTML 문서 내 `<video>` 태그에 `webkit-playsinline` 속성이 필요합니다.

### 2. `bounces`

"스크롤 콘텐츠 끝에 도달했을 때 튕기는 효과가 발생할지 설정합니다."

- **타입**: `boolean`
- **기본값**: `true`
- **플랫폼**: iOS 전용

### 3. `pullToRefreshEnabled`

아래로 당겨서 새로고침하는 기능을 활성화합니다.

- **타입**: `boolean`
- **기본값**: `true`
- **플랫폼**: iOS 전용
- **참고**: `true`일 때 `bounces` 옵션도 자동으로 `true`로 설정됩니다.

### 4. `overScrollMode`

Android에서 오버스크롤 효과를 어떻게 처리할지 설정합니다.

- **타입**: `'never'` | `'always'` | `'auto'`
- **기본값**: `'always'`
- **플랫폼**: Android 전용

### 5. `mediaPlaybackRequiresUserAction`

오디오나 비디오가 자동으로 재생되지 않도록 설정합니다.

- **타입**: `boolean`
- **기본값**: `true`
- **플랫폼**: iOS, Android
- **참고**: Android 17 이상 버전에서만 적용됩니다.

### 6. `allowsBackForwardNavigationGestures`

"좌우 스와이프 제스처를 사용해 뒤로 가기 및 앞으로 가기 탐색을 할 수 있게 설정합니다."

- **타입**: `boolean`
- **기본값**: `true`
- **플랫폼**: iOS 전용

## 설정 예시

```typescript
import { defineConfig } from "@apps-in-toss/web-framework/config";

export default defineConfig({
  webViewProps: {
    bounces: true,
    pullToRefreshEnabled: true,
    allowsInlineMediaPlayback: false,
    overScrollMode: "never",
  },
});
```
