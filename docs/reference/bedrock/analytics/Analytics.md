# 사용자 행동 기록하기

## 개요

`Analytics` 객체는 Toss App 플랫폼에서 실행되는 애플리케이션 내에서 사용자 행동을 추적하고 기록할 수 있게 합니다. 이 시스템은 서비스 개선 및 사용자 흐름 분석을 지원하기 위해 화면 탐색, 버튼 클릭 및 컴포넌트 가시성에 대한 데이터를 자동으로 수집합니다.

## 지원 환경

- **프레임워크**: React Native
- **실행 환경**: Toss App

## 타입 시그니처

```typescript
Analytics: {
    readonly init: typeof init;
    readonly Screen: typeof LoggingScreen;
    readonly Press: import("react").ForwardRefExoticComponent<
        import(".").LoggingPressProps &
        import("react").RefAttributes<unknown>
    >;
    readonly Impression: typeof LoggingImpression;
    readonly Area: typeof LoggingArea;
}
```

## 속성

### `init`
- **타입**: `typeof init`
- **목적**: 앱 시작 시 한 번 호출하여 설정을 적용해야 하는 분석 구성을 위한 초기화 함수
- **참조**: [분석 초기 설정하기](/bedrock/reference/framework/%EB%B6%84%EC%84%9D/init.html) 참조

### `Press`
- **타입**: `typeof LoggingPress` (ForwardRefExoticComponent)
- **목적**: 버튼 및 인터랙티브 요소의 클릭 이벤트를 기록하는 컴포넌트
- **참조**: [클릭 이벤트 기록하기](/bedrock/reference/framework/%EB%B6%84%EC%84%9D/LoggingPress.html) 참조

### `Impression`
- **타입**: `typeof LoggingImpression`
- **목적**: 사용자가 화면에서 특정 컴포넌트를 실제로 볼 때를 감지하고 기록하는 컴포넌트
- **참조**: [컴포넌트 노출 기록하기](/bedrock/reference/framework/%EB%B6%84%EC%84%9D/LoggingImpression.html) 참조

### `Area`
- **타입**: `typeof LoggingArea`
- **목적**: 통합 추적을 위해 여러 요소를 단일 분석 영역으로 그룹화하는 컴포넌트
- **참조**: [영역 단위로 기록하기](/bedrock/reference/framework/%EB%B6%84%EC%84%9D/LoggingArea.html) 참조

## 관련 문서

- [분석 초기 설정하기 (init)](/bedrock/reference/framework/%EB%B6%84%EC%84%9D/init.html)
- [영역 단위로 기록하기 (LoggingArea)](/bedrock/reference/framework/%EB%B6%84%EC%84%9D/LoggingArea.html)
- [컴포넌트 노출 기록하기 (LoggingImpression)](/bedrock/reference/framework/%EB%B6%84%EC%84%9D/LoggingImpression.html)
- [클릭 이벤트 기록하기 (LoggingPress)](/bedrock/reference/framework/%EB%B6%84%EC%84%9D/LoggingPress.html)
