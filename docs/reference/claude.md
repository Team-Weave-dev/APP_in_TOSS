# API & SDK 레퍼런스 (reference)

> **상위 컨텍스트**: [docs/claude.md](../claude.md) → [루트 CLAUDE.md](../../CLAUDE.md)

## 📌 디렉토리 목적

**API 및 SDK 상세 레퍼런스** 문서입니다.

## 📚 하위 디렉토리

### 1. Bedrock SDK (bedrock/) ⭐
- **문서 수**: 94개 API
- **내용**: Apps in Toss 네이티브 기능 SDK
- **대상**: 앱 개발자 (필수)
- **상세**: [bedrock/claude.md](bedrock/claude.md)

**주요 카테고리**:
- 📱 화면 제어 (screen-control)
- 📍 위치 정보 (location)
- 💳 결제 (payment)
- 📢 광고 (ads)
- 📊 분석 (analytics)
- 🎨 인터랙션 (interaction)
- 🌐 네트워크 (network)
- 💾 저장소 (storage)

### 2. TDS Mobile (tds-mobile/)
- **문서 수**: 67개 컴포넌트 + Hook
- **내용**: 토스 디자인 시스템
- **대상**: 디자이너, 프론트엔드 개발자
- **원본**: https://tossmini-docs.toss.im/tds-mobile/

**주요 카테고리**:
- 🎨 Foundations (색상, 타이포그래피)
- 🧩 Components (Button, Dialog, Modal 등)
- 🪝 Hooks (useDialog, useToast 등)

## 🎯 API 사용 패턴

### 1. API 문서 찾기
```bash
# 기능별로 탐색
cd reference/bedrock/[카테고리]/

# 예: 위치 정보 API
cd reference/bedrock/location/
```

### 2. 컴포넌트 찾기
```bash
# TDS 컴포넌트 탐색
cd reference/tds-mobile/components/

# 예: Button 컴포넌트
cat reference/tds-mobile/components/button.md
```

### 3. 개발 시 참조 순서
```
1. 가이드 문서 (04-development) - 전체 구조 이해
2. API 레퍼런스 (reference/bedrock) - 구체적 구현
3. 예제 코드 (../../example/) - 실제 사용 예시
```

## 💡 빠른 참조

### 자주 사용하는 API

#### 필수 기능
- **화면 닫기**: [bedrock/screen-control/closeView.md](bedrock/screen-control/closeView.md)
- **로컬 저장소**: [bedrock/storage/](bedrock/storage/)
- **네비게이션**: [bedrock/routing.md](bedrock/routing.md)

#### 위치 기반
- **현재 위치**: [bedrock/location/getCurrentLocation.md](bedrock/get-current-location.md)
- **위치 추적**: [bedrock/location/startUpdateLocation.md](bedrock/location/startUpdateLocation.md)

#### 결제
- **토스 페이**: [bedrock/payment/tosspay/](bedrock/payment/tosspay/)
- **인앱 결제**: [bedrock/payment/iap/](bedrock/payment/iap/)

#### 광고
- **전면 광고**: [bedrock/ads/loadAdMobInterstitialAd.md](bedrock/ads/loadAdMobInterstitialAd.md)
- **보상형 광고**: [bedrock/ads/loadAdMobRewardedAd.md](bedrock/ads/loadAdMobRewardedAd.md)

### 자주 사용하는 TDS 컴포넌트
- **Button**: [tds-mobile/components/button.md](tds-mobile/components/button.md)
- **TextField**: [tds-mobile/components/text-field.md](tds-mobile/components/text-field.md)
- **Dialog**: [tds-mobile/components/dialog.md](tds-mobile/components/dialog.md)
- **BottomSheet**: [tds-mobile/hooks/useBottomSheet.md](tds-mobile/hooks/useBottomSheet.md)

## 🔗 연관 디렉토리

- **개발 가이드**: [04-development](../04-development/claude.md)
- **디자인**: [03-design](../03-design/claude.md)
- **예제 코드**: [../../example/](../../example/claude.md)
