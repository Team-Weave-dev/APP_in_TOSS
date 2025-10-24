# Overlay Extension 이해하기

## 개요

`OverlayExtension`은 오버레이 UI 컴포넌트들을 선언적으로 관리하는 유틸리티 훅 모음입니다. Dialog, Toast, BottomSheet 같은 인터페이스 요소를 간편하게 사용할 수 있게 지원합니다.

## 학습 목표

이 문서를 통해 다음을 습득할 수 있습니다:

- `useDialog`, `useToast`, `useBottomSheet` 훅의 차이점 이해
- 각 훅의 사용 목적과 적절한 활용 시나리오 파악
- 기능 및 사용 방법 습득

## 훅 비교: useDialog vs useToast vs useBottomSheet

| 훅 | 특징 | 활용 사례 | 참고 |
|---|---|---|---|
| **useDialog** | "사용자의 주의가 필요한 중요한 정보나 결정을 요구" | • 주요 작업 확인 • 경고 메시지 • 명시적 선택 요구 | [useDialog 문서](/tds-mobile/hooks/OverlayExtension/use-dialog/) |
| **useToast** | "일시적인 알림이나 피드백 표시" | • 완료 알림 • 오류 메시지 • 상태 피드백 | [useToast 문서](/tds-mobile/hooks/OverlayExtension/use-toast/) |
| **useBottomSheet** | "추가 정보나 작업을 화면 하단에서 표시" | • 상세 정보 • 추가 옵션 • 복잡한 상호작용 | [useBottomSheet 문서](/tds-mobile/hooks/OverlayExtension/use-bottom-sheet/) |

## 사용 예시

세 가지 훅의 기본 활용 패턴:

- **Dialog**: 사용자 결정이 필수인 중요 사항 처리
- **Toast**: 자동으로 사라지는 임시 알림 표시
- **BottomSheet**: 화면 아래에서 추가 기능이나 정보 제공

각 훅은 특정 상황에 최적화되어 있으므로, 콘텐츠의 중요도와 상호작용 필요 수준에 따라 선택하면 됩니다.
