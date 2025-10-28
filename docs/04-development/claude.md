# 개발 (04-development)

> **상위 컨텍스트**: [docs/claude.md](../claude.md) → [루트 CLAUDE.md](../../CLAUDE.md)

## 📌 디렉토리 목적

Apps in Toss 앱 **개발 환경 구축 및 연동** 가이드입니다.

## 📚 문서 구조

### 🏗️ 개발 구조 이해
1. **개발 구조** (01-integration-process.md) - 전체 개발 흐름 ⭐ **시작점**
2. **준비하기** (02-prepare.md) - 개발 환경 요구사항

### 📱 Client 환경 설정
3. **Android** (04-android.md) - Android Studio, SDK 설정
4. **iOS** (05-ios.md) - Xcode, CocoaPods 설정

### 🔧 연동하기
5. **React Native** (03-react-native.md) - Granite 프레임워크 (권장) ⭐
6. **WebView** (06-webview.md) - 웹 기반 앱 개발
7. **Unity** (07-unity.md) - 게임 개발 (Unity 포팅)

### 🧪 테스트 및 출시
8. **샌드박스** (08-sandbox.md) - 로컬 테스트 환경
9. **토스앱** (09-toss.md) - 실제 환경 테스트
10. **앱 내 기능** (10-function.md) - 기능별 테스트
11. **모니터링** (11-sentry-monitoring.md) - Sentry 연동

### 🔐 인증
12. **토스 로그인** (12-login-intro.md, 13-login-console.md) - 사용자 인증

### 📹 참고자료
14. **Bedrock 영상** (19-bedrock-video.md) - SDK 영상 가이드

## 🎯 프로젝트 유형별 필수 문서

### React Native 앱
```
01 → 02 → 04 → 05 → 03 → 08 → 09
```

### WebView 앱
```
01 → 02 → 06 → 08 → 09
```

### Unity 게임
```
01 → 02 → 04 → 05 → 07 → 08 → 09
```

## ⚠️ 주의사항

1. **환경 설정 먼저**: Android/iOS 환경을 먼저 구축 (04, 05)
2. **샌드박스 필수**: 토스앱 테스트 전 샌드박스에서 검증 (08)
3. **로그인 검토**: 사용자 인증 필요 시 12-13 참조

## 🔗 연관 디렉토리

- **이전 단계**: [02-prepare](../02-prepare/claude.md) - 콘솔 등록
- **디자인**: [03-design](../03-design/claude.md) - TDS, UI/UX
- **API 참조**: [reference/bedrock](../reference/bedrock/) - Bedrock SDK
- **검수**: [05-checklist](../05-checklist/claude.md) - 출시 전 체크
