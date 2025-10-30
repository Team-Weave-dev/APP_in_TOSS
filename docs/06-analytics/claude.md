# 분석 (06-analytics)

> **상위 컨텍스트**: [docs/claude.md](../claude.md) → [루트 CLAUDE.md](../../CLAUDE.md)

## 📌 디렉토리 목적

앱 **데이터 분석 및 로깅** 가이드입니다.

## 📚 문서

### 1. 대시보드 (01-dashboard.md)
- **내용**: 콘솔 대시보드 사용법, 주요 지표 확인
- **대상**: PM, 마케터

### 2. 로그 (이벤트) (02-logging.md)
- **내용**: 커스텀 이벤트 로깅 구현 ⭐
- **대상**: 개발자
- **연관 API**: [reference/bedrock/analytics](../reference/bedrock/analytics/)

## 🎯 활용 시나리오

### 대시보드 활용
- 일일 활성 사용자(DAU)
- 주간 활성 사용자(WAU)
- 사용자 행동 분석

### 로그 구현
```javascript
// 예시: Bedrock SDK
import { Analytics } from '@apps-in-toss/bedrock';

Analytics.logEvent('button_click', {
  button_name: 'start_game',
  screen: 'home'
});
```

---

## ⚠️ 필수 규칙 (상위 문서 참조)

분석 및 로깅 구현 시 반드시 준수해야 할 규칙입니다.

### 1. 언어 규칙 - 로깅 데이터 (🔴 필수)

**이벤트 로깅**:
- ✅ **이벤트 이름**: 영어 (snake_case)
  - 예: `button_click`, `screen_view`, `purchase_complete`
- ✅ **파라미터 이름**: 영어 (snake_case)
  - 예: `button_name`, `screen`, `product_id`
- ✅ **파라미터 값 (문자열)**: 영어
  - 예: `'start_game'`, `'home'`, `'premium_item'`

**올바른 예시**:
```javascript
// ✅ 올바름
Analytics.logEvent('button_click', {
  button_name: 'start_game',
  screen: 'home',
  user_action: 'tap'
});
```

**잘못된 예시**:
```javascript
// ❌ 잘못됨 - 한글 사용
Analytics.logEvent('버튼_클릭', {
  버튼_이름: '게임_시작',
  화면: '홈'
});
```

**이유**: 데이터 분석 플랫폼의 국제 표준 및 호환성 유지

### 2. UX Writing - 앱 UI (🔴 필수)

분석 이벤트 로깅과 별개로, **앱의 UI 텍스트**는 반드시 ~해요체를 사용해야 합니다.

- 앱 화면의 버튼, 안내 문구: ~해요체
- 분석 이벤트 데이터: 영어

**참조**: [../03-design/03-ux-writing.md](../03-design/03-ux-writing.md)

### 3. 프로젝트 타입 구분 (🔴 필수)

Analytics API는 모든 프로젝트 타입에서 동일하게 사용 가능하지만, UI 라이브러리는 타입별로 다릅니다.

**참조**: [../../CLAUDE.md - 타입 구분](../../CLAUDE.md#프로젝트-타입-구분-시스템)

**상세 규칙**: [../../STANDARD_RULES.md](../../STANDARD_RULES.md)

---

## 🔗 연관 디렉토리

- **개발 참조**: [04-development](../04-development/claude.md)
- **API**: [reference/bedrock/analytics](../reference/bedrock/analytics/)
- **성장**: [10-growth](../10-growth/claude.md) - 데이터 기반 성장
