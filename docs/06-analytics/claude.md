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

## 🔗 연관 디렉토리

- **개발 참조**: [04-development](../04-development/claude.md)
- **API**: [reference/bedrock/analytics](../reference/bedrock/analytics/)
- **성장**: [10-growth](../10-growth/claude.md) - 데이터 기반 성장
