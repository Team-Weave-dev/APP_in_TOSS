# useToast Hook Documentation

## 개요

`useToast`는 TDS Mobile 디자인 시스템의 유틸리티 훅으로, 화면에 간단하고 임시적인 알림 메시지를 표시합니다. 비침습적인 방식으로 사용자 피드백과 이벤트 알림을 제공합니다.

## 핵심 기능

이 훅을 사용하면 선택적 아이콘, 버튼, 사용자 정의 표시 시간을 가진 닫을 수 있는 알림 메시지를 표시할 수 있습니다. 메시지는 설정된 시간 후 자동으로 사라지거나 수동으로 닫을 수 있습니다.

### 웹 환경 동작

- **기본 지속 시간**: 3초(버튼 없음), 5초(버튼 있음)
- **사용자 정의 지속 시간**: `duration` 속성으로 구성 가능
- **수동 제어**: `closeToast()` 메서드로 프로그래밍 방식으로 닫기

### 앱 환경 동작

- **플랫폼별 위치**: Android(상단에서 26px), iOS(상단에서 46px)
- **SafeArea 인식**: Safe Area와 BottomCTA 컴포넌트 높이 자동 고려
- **고정 동작**: 수동 닫기 메서드 없음; 앱 브리지 환경용으로 설계됨

## 사용 예시

### 기본 토스트 메시지

```javascript
function Basic() {
  const toast = useToast();
  return (
    <Button onClick={() => toast.openToast('메시지를 전송했어요')}>
      기본 토스트 열기
    </Button>
  );
}
```

### 아이콘 포함

```javascript
function IconToast() {
  const toast = useToast();
  return (
    <Button
      onClick={() => {
        toast.openToast('프로필을 업데이트했어요', {
          icon: 'icon-check',
          iconType: 'circle',
        });
      }}
    >
      아이콘 토스트 열기
    </Button>
  );
}
```

### 액션 버튼 포함

```javascript
function ButtonToast() {
  const toast = useToast();
  return (
    <Button
      onClick={() => {
        toast.openToast('결제에 실패했어요', {
          icon: 'icon-warning-circle',
          button: {
            text: '다시 시도하기',
            onClick: () => alert('결제 재시도'),
          },
        });
      }}
    >
      버튼 토스트 열기
    </Button>
  );
}
```

### 위치 제어

```javascript
function PositionToast() {
  const toast = useToast();
  return (
    <Button
      onClick={() => {
        toast.openToast('새로운 알림이 있어요', {
          type: 'top',
          gap: 30,
        });
      }}
    >
      상단 토스트 열기
    </Button>
  );
}
```

### 지속 시간 설정

```javascript
function AnimationTimingToast() {
  const toast = useToast();
  return (
    <Button
      onClick={() => {
        toast.openToast('메시지예요', {
          duration: 1000,
        });
      }}
    >
      애니메이션 타이밍 조절
    </Button>
  );
}
```

## 인터페이스 문서

### ToastButton

| 속성 | 타입 | 필수 | 설명 |
|----------|------|----------|-------------|
| `text` | string | Yes | 버튼 표시 텍스트 |
| `onClick` | `() => void` | Yes | 버튼 클릭 시 콜백 함수 |

### OpenToastOptions

| 속성 | 기본값 | 타입 | 설명 |
|----------|---------|------|-------------|
| `type` | `'bottom'` | `"top"` \| `"bottom"` | 화면에서 토스트 위치 |
| `gap` | — | number | 상단/하단 가장자리로부터의 거리 (우선순위) |
| `icon` | — | string | 아이콘 이름 (lottie와 호환 불가) |
| `iconType` | undefined | `"circle"` \| `"square"` | 아이콘 모양 스타일 |
| `lottie` | — | string | Lottie 애니메이션 URL (icon과 호환 불가) |
| `button` | — | ToastButton | 액션 버튼 설정 |
| `higherThanCTA` | `false` | boolean | BottomCTA 컴포넌트 위에 표시 |
| `duration` | — | number | 자동 닫기 시간 (밀리초) |

## 주요 참고사항

- 아이콘과 Lottie 애니메이션은 상호 배타적입니다
- `gap` 속성은 기본 간격 계산을 재정의합니다
- 웹 환경은 수동 지속 시간 제어를 지원; 앱 환경은 고정 3초 기본값 사용
- SafeArea 및 BottomCTA 높이는 앱 환경의 위치 지정에 자동으로 반영됩니다
