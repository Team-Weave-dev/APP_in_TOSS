# 광고 불러오기

## 개요

`loadAppsInTossAdMob` 함수는 필요할 때 즉시 표시할 수 있도록 광고를 미리 로드합니다.

## 지원 환경

- **프레임워크**: React Native, WebView
- **실행 환경**: Toss App

## 함수 시그니처

```typescript
function loadAppsInTossAdMob(params: LoadAdMobParams): typeof noop;
```

## 파라미터

### LoadAdMobParams

- **options** (필수) · LoadAdMobOptions
  - **adGroupId** (필수) · string: 콘솔에서 발급받은 광고 그룹 식별자

- **onEvent** · `(event: LoadAdMobEvent) => void`
  - 광고 관련 이벤트 발생 시 호출되는 콜백 (예: 광고 닫힘, 광고 클릭)
  - 자세한 이벤트 타입은 LoadAdMobEvent 참조

- **onError** · `(reason: unknown) => void`
  - 광고 로딩 실패 시 호출되는 콜백 (예: 네트워크 오류, 지원되지 않는 환경)

## 속성

- **isSupported()** · `() => boolean`
  - 현재 앱 환경이 Google AdMob 광고 기능을 지원하는지 확인
  - 이 기능을 사용하기 전에 호출해야 합니다

## 사용 예제

```typescript
import { GoogleAdMob } from '@apps-in-toss/framework';
import { useEffect } from 'react';

const AD_GROUP_ID = '<AD_GROUP_ID>';

function GoogleAdmobExample() {
    useEffect(() => {
        if (GoogleAdMob.loadAppsInTossAdMob.isSupported() !== true) {
            return;
        }

        const cleanup = GoogleAdMob.loadAppsInTossAdMob({
            options: {
                adGroupId: AD_GROUP_ID,
            },
            onEvent: (event) => {
                if (event.type === 'loaded') {
                    console.log('광고 로드 성공', event.data);
                }
            },
            onError: (error) => {
                console.error('광고 로드 실패', error);
            },
        });

        return cleanup;
    }, []);
}
```

## 중요 사항

- 광고 로드 전에 항상 `isSupported()`로 지원 여부를 확인하세요
- 함수는 컴포넌트 언마운트 시 호출해야 하는 cleanup 함수를 반환합니다
- 광고 그룹 ID는 개발자 콘솔에서 받아야 합니다
