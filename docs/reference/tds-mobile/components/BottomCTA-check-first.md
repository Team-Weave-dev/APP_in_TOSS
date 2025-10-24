# BottomCTA 이해하기

## 페이지 개요

이 문서는 Toss Design System의 BottomCTA 컴포넌트에 대한 입문 가이드입니다. 읽은 후 다음을 이해할 수 있습니다:

- FixedBottomCTA와 BottomCTA의 차이점
- BottomCTA.Single과 BottomCTA.Double의 사용 시기

## BottomCTA란?

BottomCTA 컴포넌트는 사용자 인터페이스에서 "특정 작업을 수행하도록 유도하는 버튼"을 의미합니다. 이는 페이지 하단에 위치하며, 스크롤이나 키보드 입력 중에도 접근이 용이한 특징이 있습니다.

## FixedBottomCTA vs BottomCTA

### 주요 차이점

두 컴포넌트 모두 하단 호출 버튼을 제공하지만, **고정 여부**에서 차이가 있습니다.

**FixedBottomCTA의 정의:**
```
FixedBottomCTA = BottomCTA의 fixed prop을 true로 설정한 래퍼
```

FixedBottomCTA는 항상 화면 하단에 고정되어 표시됩니다.

**💡 참고사항:** FixedBottomCTA는 기본적으로 단일 CTA 형식입니다. 두 개의 버튼이 필요하면 `FixedBottomCTA.Double`을 사용하세요.

## Single vs Double 비교

| 유형 | 특징 | 사용 케이스 |
|------|------|----------|
| **Single** | 단일 버튼 렌더링 | children prop을 통해 버튼 콘텐츠 정의 |
| **Double** | 이중 버튼 렌더링 | leftButton, rightButton props로 각 버튼 콘텐츠 정의 |

### Single 사용 시기
버튼 하나로 충분한 단순한 작업 흐름에 적합합니다.

### Double 사용 시기
사용자에게 두 가지 선택지를 제공해야 할 때 (예: 확인/취소, 동의/거절) 적합합니다.

---

## 관련 문서
- [Single 상세 가이드](/tds-mobile/components/BottomCTA/Single/)
- [Double 상세 가이드](/tds-mobile/components/BottomCTA/Double/)
- [FixedBottomCTA 가이드](/tds-mobile/components/BottomCTA/fixed-bottom-cta/)
