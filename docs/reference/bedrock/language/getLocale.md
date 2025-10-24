# 로케일 가져오기

## 개요

`getLocale` 함수는 네이티브 모듈에서 사용자의 로케일 정보를 가져옵니다. 이 함수는 애플리케이션에서 지역화 및 언어 설정을 구현하는 데 유용합니다.

## 함수 시그니처

```typescript
function getLocale(): string;
```

## 반환값

- **타입**: `string`
- **설명**: 사용자의 로케일 정보를 반환합니다. 네이티브 모듈이 로케일 데이터를 가져올 수 없으면 기본값으로 `'ko-KR'`을 반환합니다.

## 사용 예제

```tsx
import { getLocale } from '@apps-in-toss/framework';
import { Text } from 'react-native';

function MyPage() {
  const locale = getLocale();

  return (
    <Text>사용자의 로케일 정보: {locale}</Text>
  )
}
```

## 지원 환경

- **프레임워크**: React Native, WebView
- **실행 환경**: Toss App

## 주요 사항

- 이 함수는 사용자 로케일 기본 설정을 감지하는 간단한 방법을 제공합니다
- 네이티브 데이터를 사용할 수 없을 때 기본 폴백은 한국어(`ko-KR`)입니다
- 다국어 지원 및 지역 맞춤 설정을 구현하는 데 유용합니다
- 참조 구현은 [apps-in-toss-examples](https://github.com/toss/apps-in-toss-examples) 저장소의 `with-locale` 예제에서 확인할 수 있습니다
