# 실시간 위치 추적하기

## 개요

`startUpdateLocation` 함수는 위치가 변경될 때마다 콜백이 트리거되는 연속 기기 위치 추적을 가능하게 합니다. 현재 사용자 위치를 표시하는 지도 앱이나 이동 거리를 기록하는 피트니스 앱과 같이 실시간 위치 업데이트가 필요한 애플리케이션에 유용합니다.

## 함수 시그니처

```typescript
function startUpdateLocation(options: {
  onError: (error: unknown) => void;
  onEvent: (location: Location) => void;
  options: StartUpdateLocationOptions;
}): () => void;
```

## 파라미터

- **onError** (필수): 위치 감지 실패 시 호출되는 콜백 함수
- **onEvent** (필수): 위치 변경 시마다 트리거되는 콜백 함수. `Location` 객체를 반환합니다
- **options** (필수): 다음을 포함하는 설정 객체:
  - `accuracy`: 위치 정확도 설정 (number)
  - `timeInterval`: 최소 업데이트 간격 (밀리초)
  - `distanceInterval`: 업데이트를 트리거하는 최소 거리 변화 (미터)

## 속성

- **openPermissionDialog**: 옵션("허용", "한 번 허용", "허용 안 함")이 있는 권한 요청 대화 상자를 표시합니다
- **getPermission**: 현재 권한 상태를 반환합니다 (`allowed`, `denied`, 또는 `notDetermined`)

## 에러 처리

위치 권한이 거부되거나 시스템에 의해 제한될 때 `StartUpdateLocationPermissionError`가 발생합니다. 다음을 사용하여 에러 타입을 확인하세요: `error instanceof StartUpdateLocationPermissionError`

## 플랫폼 지원

- **환경**: React Native, WebView
- **실행 환경**: Toss App, Sandbox App

## 주요 사항

애플리케이션 요구사항에 따라 업데이트 간격과 정확도 수준을 조정하여 배터리 최적화를 달성할 수 있습니다. 시스템 제약으로 인해 실제 업데이트 빈도는 지정된 최소 간격을 초과할 수 있습니다.
