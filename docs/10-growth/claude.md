# 성장 가이드 (10-growth)

> **상위 컨텍스트**: [docs/claude.md](../claude.md) → [루트 CLAUDE.md](../../CLAUDE.md)

## 📌 디렉토리 목적

앱 **성장 전략 및 최적화** 가이드입니다.

## 📚 문서 구조 (읽기 순서)

1. **시작하기** (01-intro.md) - 성장 개요 ⭐
2. **사용자 유입 만들기** (02-traffic.md) - 트래픽 확보
3. **사용자 리텐션 확보하기** (03-retention.md) - 재방문 유도
4. **공유 기능으로 바이럴 효과 만들기** (04-share.md) - 바이럴 루프
5. **데이터 기반 성장 인사이트 만들기** (05-insight.md) - 데이터 분석

## 🎯 성장 단계별 전략

### 1단계: 사용자 유입 (Traffic)
```
02-traffic.md
- 토스 홈 광고
- 프로모션 (토스 포인트)
- 푸시 마케팅
```

### 2단계: 리텐션 (Retention)
```
03-retention.md
- 푸시 알림 활용
- 앱 내 리워드
- 사용자 세그먼트 타겟팅
```

### 3단계: 바이럴 (Viral)
```
04-share.md
- 공유 기능 구현
- 공유 리워드
- 토스 공유 링크
```

### 4단계: 최적화 (Insight)
```
05-insight.md
- 대시보드 분석
- A/B 테스트
- 데이터 기반 의사결정
```

## 💡 핵심 전략

### AARRR 프레임워크
- **Acquisition** (획득): 02-traffic.md
- **Activation** (활성화): 03-retention.md
- **Retention** (유지): 03-retention.md
- **Referral** (추천): 04-share.md
- **Revenue** (수익): [08-monetization](../08-monetization/)

---

## ⚠️ 필수 규칙 (상위 문서 참조)

성장 기능 구현 시 반드시 준수해야 할 규칙입니다.

### 1. UX Writing - 성장 기능 UI (🔴 필수)

모든 성장 기능의 사용자 대면 텍스트는 ~해요체를 사용해야 합니다.

**적용 대상**:
- ✅ 푸시 알림 메시지 (리텐션)
- ✅ 공유 기능 문구 (바이럴)
- ✅ 리워드 안내 문구
- ✅ 인센티브 설명 텍스트

**올바른 예시**:
```
✅ "친구를 초대하면 포인트를 드려요"
✅ "오늘의 출석 체크를 완료했어요!"
✅ "공유하고 보상을 받아가세요"
✅ "3일 연속 접속하면 특별 리워드를 드려요"
```

**잘못된 예시**:
```
❌ "친구를 초대하면 포인트를 드립니다"
❌ "출석 체크 완료"
❌ "공유 시 보상 제공"
❌ "3일 연속 접속 시 특별 리워드 제공"
```

**참조**: [../03-design/03-ux-writing.md](../03-design/03-ux-writing.md)

### 2. 언어 규칙 - 분석 데이터

성장 지표 추적을 위한 이벤트 로깅은 영어로 작성합니다.

**올바른 예시**:
```javascript
// ✅ 올바름
Analytics.logEvent('share_complete', {
  share_channel: 'kakao',
  content_type: 'referral'
});
```

**참조**: [../06-analytics/claude.md](../06-analytics/claude.md)

### 3. 프로젝트 타입 구분 (🔴 필수)

Share API, Push API는 모든 프로젝트 타입에서 사용 가능하지만, UI 라이브러리는 타입별로 다릅니다.

**참조**: [../../CLAUDE.md - 타입 구분](../../CLAUDE.md#프로젝트-타입-구분-시스템)

**상세 규칙**: [../../STANDARD_RULES.md](../../STANDARD_RULES.md)

---

## 🔗 연관 디렉토리

- **마케팅 도구**: [07-marketing](../07-marketing/claude.md)
- **분석**: [06-analytics](../06-analytics/claude.md)
- **수익화**: [08-monetization](../08-monetization/)
- **공유 API**: [reference/bedrock/share](../reference/bedrock/share/)
