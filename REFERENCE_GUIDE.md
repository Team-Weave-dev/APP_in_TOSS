# 프로젝트 참조 규칙 가이드

## 개요

이 문서는 APPinTOSS 루트 디렉토리를 표준 참조 베이스로 사용하여 하위 프로젝트를 개발하는 규칙을 정의합니다.

---

## 프로젝트 구조

```
APPinTOSS/                     # 루트 (표준 참조 베이스)
├── TASK.md                    # 프로젝트 진행 상황
├── CLAUDE.md                  # Claude 작업 규칙
├── REFERENCE_GUIDE.md         # 현재 파일 - 참조 규칙
├── docs/                      # 문서 참조 (읽기 전용)
│   ├── CLAUDE.md              # 문서 디렉토리 가이드
│   ├── 01-intro/              # 가이드 문서
│   ├── ...                    # 기타 가이드
│   └── reference/             # API 레퍼런스
│       ├── bedrock/           # Bedrock SDK (94개)
│       └── tds-mobile/        # TDS Mobile (67개)
├── example/                   # 예제 코드 참조 (읽기 전용)
│   ├── README.md              # 예제 저장소 설명
│   ├── with-album-photos/     # 앨범 사진 예제
│   ├── with-camera/           # 카메라 예제
│   ├── with-haptic-feedback/  # 햅틱 진동 예제
│   ├── with-location-*/       # 위치 정보 예제
│   ├── with-storage/          # 저장소 예제
│   └── ...                    # 기타 API 예제
└── projects/                  # 하위 프로젝트 (작성 예정)
    ├── project-a/             # 개별 프로젝트 A
    ├── project-b/             # 개별 프로젝트 B
    └── ...
```

---

## 프로젝트 타입 구분 시스템

**중요**: Apps in Toss는 **3가지 프로젝트 타입**을 지원하며, 각 타입은 **서로 다른 UI 라이브러리**를 사용합니다!

### 지원 프로젝트 타입

#### 🌐 Type 1: WebView 앱 (Web React)
- **프레임워크**: `@apps-in-toss/web-framework`
- **UI 라이브러리**: **TDS Mobile** (`@toss/tds-mobile`)
- **필수 의존성**: `react-dom`
- **문서**: [TDS Mobile (로컬 67개)](docs/reference/tds-mobile/)
- **공식**: https://tossmini-docs.toss.im/tds-mobile/
- **템플릿**: [templates/webview-project-CLAUDE.md.template](templates/webview-project-CLAUDE.md.template)

#### 📱 Type 2: React Native 앱
- **프레임워크**: Granite (`@granite-js/react-native`)
- **UI 라이브러리**: **TDS React Native** (`@toss/tds-react-native`)
- **필수 의존성**: `react-native`
- **문서**: https://tossmini-docs.toss.im/tds-react-native/ (온라인만)
- **템플릿**: [templates/react-native-project-CLAUDE.md.template](templates/react-native-project-CLAUDE.md.template)

#### 🎮 Type 3: Unity 게임/앱
- **게임 엔진**: Unity + React Native wrapper
- **UI 시스템**: Unity UI (제한적 TDS 지원)
- **문서**: [Unity 개발 가이드](docs/04-development/07-unity.md)
- **템플릿**: [templates/unity-project-CLAUDE.md.template](templates/unity-project-CLAUDE.md.template)

### ⚠️ 타입별 주의사항

**절대 혼용 금지**:
- ❌ WebView 앱에서 `@toss/tds-react-native` 사용
- ❌ React Native 앱에서 `@toss/tds-mobile` 사용
- ❌ React Native 앱에서 `react-dom` 사용

**프로젝트 타입 확인**:
```bash
# WebView 프로젝트 확인
cat package.json | grep "@toss/tds-mobile"    # 있어야 함
cat package.json | grep "react-dom"           # 있어야 함

# React Native 프로젝트 확인
cat package.json | grep "@toss/tds-react-native"  # 있어야 함
cat package.json | grep "react-native"        # 있어야 함
```

**템플릿 사용**:
```bash
# 새 WebView 프로젝트 생성
cp templates/webview-project-CLAUDE.md.template project/my-app/CLAUDE.md

# 새 React Native 프로젝트 생성
cp templates/react-native-project-CLAUDE.md.template project/my-app/CLAUDE.md

# 새 Unity 프로젝트 생성
cp templates/unity-project-CLAUDE.md.template project/my-app/CLAUDE.md
```

**상세 가이드**: [templates/TEMPLATE_GUIDE.md](templates/TEMPLATE_GUIDE.md)

---

## 참조 규칙

### 1. 문서 참조 (/docs)

**목적**: API 사용법, 가이드라인, 디자인 시스템 참조

**참조 대상**:
- **가이드 문서**: 개발 프로세스, 디자인, 마케팅, 수익화 등 (78개)
- **Bedrock SDK API**: 공통 API 레퍼런스 (94개) - 모든 타입 공통
- **TDS Mobile**: WebView 앱 전용 UI 컴포넌트 (67개) ⚠️
- **TDS React Native**: React Native 앱 전용 (온라인만) ⚠️

**사용 방법**:
```bash
# 예: 햅틱 피드백 API 참조
cat ../../docs/reference/bedrock/interaction/generateHapticFeedback.md

# 예: TDS Button 컴포넌트 참조
cat ../../docs/reference/tds-mobile/components/button.md

# 예: 개발 가이드 참조
cat ../../docs/04-development/03-react-native.md
```

**참조 시나리오**:
1. **API 사용 전**: 해당 API 문서를 읽고 함수 시그니처 및 사용법 확인
2. **컴포넌트 구현 전**: TDS Mobile 문서에서 디자인 패턴 확인
3. **마케팅/수익화**: 가이드 문서에서 정책 및 가이드라인 확인

**주의사항**:
- ⚠️ `/docs` 디렉토리는 **읽기 전용**입니다
- ⚠️ 하위 프로젝트에서 직접 수정하지 않습니다
- 💡 문서는 항상 최신 공식 문서를 참조하여 업데이트됩니다

---

### 2. 예제 코드 참조 (/example)

**목적**: 공식 예제 프로젝트를 통한 실제 구현 참조

**참조 대상**:
- **기본 앱**: random-balls, weekly-todo (jQuery, React, Vue)
- **API 예제**: 각 Bedrock API 사용 예제 (20+ 예제)

**주요 예제 목록**:

| 예제 디렉토리 | 관련 API | 문서 참조 |
|-------------|---------|-----------|
| `with-album-photos/` | 앨범 사진 | `docs/reference/bedrock/fetch-album-photos.md` |
| `with-camera/` | 카메라 | `docs/reference/bedrock/open-camera.md` |
| `with-clipboard-text/` | 클립보드 | `docs/reference/bedrock/get-clipboard-text.md` |
| `with-contacts/` | 연락처 | `docs/reference/bedrock/fetch-contacts.md` |
| `with-contacts-viral/` | 초대 및 리워드 | `docs/reference/bedrock/contacts-viral.md` |
| `with-game/` | 게임센터 | `docs/reference/bedrock/game/*.md` |
| `with-haptic-feedback/` | 햅틱 진동 | `docs/reference/bedrock/interaction/generateHapticFeedback.md` |
| `with-in-app-purchase/` | 인앱 결제 | `docs/reference/bedrock/payment/iap/*.md` |
| `with-interstitial-ad/` | 전면형 광고 | `docs/reference/bedrock/ads/loadAdMobInterstitialAd.md` |
| `with-rewarded-ad/` | 보상형 광고 | `docs/reference/bedrock/ads/loadAdMobRewardedAd.md` |
| `with-locale/` | 로케일 | `docs/reference/bedrock/language/getLocale.md` |
| `with-location-once/` | 현재 위치 | `docs/reference/bedrock/get-current-location.md` |
| `with-location-tracking/` | 위치 추적 | `docs/reference/bedrock/location/startUpdateLocation.md` |
| `with-location-callback/` | 위치 훅 | `docs/reference/bedrock/location/useGeolocation.md` |
| `with-network-status/` | 네트워크 상태 | `docs/reference/bedrock/network/getNetworkStatus.md` |
| `with-operational-environment/` | 동작 환경 | `docs/reference/bedrock/environment/getOperationalEnvironment.md` |
| `with-platform-os/` | 플랫폼 확인 | `docs/reference/bedrock/environment/getPlatformOS.md` |
| `with-share-link/` | 공유 링크 | `docs/reference/bedrock/share/getTossShareLink.md` |
| `with-share-text/` | 텍스트 공유 | `docs/reference/bedrock/share.md` |
| `with-storage/` | 저장소 | `docs/reference/bedrock/storage/*.md` |

**사용 방법**:
```bash
# 예: 햅틱 피드백 구현 참조
cd ../../example/with-haptic-feedback
cat src/App.tsx  # 구현 코드 확인

# 예: 위치 추적 구현 참조
cd ../../example/with-location-tracking
cat src/App.tsx  # 위치 추적 로직 확인

# 예: React 기반 TODO 앱 구조 참조
cd ../../example/weekly-todo-react
ls -la src/      # 프로젝트 구조 확인
```

**참조 시나리오**:
1. **API 구현 전**: 해당 API 예제 코드를 읽고 사용 패턴 이해
2. **프로젝트 구조 설계**: weekly-todo 예제에서 기본 앱 구조 참조
3. **디버깅**: 공식 예제와 자신의 코드를 비교하여 차이점 확인

**주의사항**:
- ⚠️ `/example` 디렉토리는 **읽기 전용**입니다
- ⚠️ 예제 코드를 직접 수정하지 않고, 자신의 프로젝트로 복사하여 수정합니다
- 💡 예제는 공식 저장소에서 주기적으로 업데이트됩니다
- 📌 각 예제의 README.md 파일에서 QR 코드를 통한 실제 테스트 가능

---

## 하위 프로젝트 개발 워크플로우

### 1. 프로젝트 시작

```bash
# 1. projects 디렉토리에 새 프로젝트 생성
cd /Users/a/Documents/Team-jane/APPinTOSS/projects
mkdir my-new-app
cd my-new-app

# 2. 필요한 예제 코드 복사 (선택사항)
cp -r ../../example/weekly-todo-react/* .

# 3. 의존성 설치 및 초기화
npm install
```

### 2. 개발 중 참조 패턴

#### 시나리오 A: 햅틱 진동 기능 추가하기

```bash
# Step 1: API 문서 확인
cat ../../docs/reference/bedrock/interaction/generateHapticFeedback.md

# Step 2: 타입 정의 확인
cat ../../docs/reference/bedrock/interaction/HapticFeedbackOptions.md

# Step 3: 예제 코드 참조
cat ../../example/with-haptic-feedback/src/App.tsx

# Step 4: 자신의 프로젝트에 구현
vim src/components/Button.tsx  # 코드 작성
```

#### 시나리오 B: TDS Button 컴포넌트 사용하기

```bash
# Step 1: TDS Mobile 문서 확인
cat ../../docs/reference/tds-mobile/components/button.md

# Step 2: 예제 앱에서 실제 사용 패턴 확인 (있는 경우)
grep -r "import.*Button" ../../example/

# Step 3: 자신의 프로젝트에 구현
vim src/components/MyComponent.tsx
```

#### 시나리오 C: 인앱 결제 연동하기

```bash
# Step 1: 가이드 문서 확인
cat ../../docs/08-monetization/*

# Step 2: API 레퍼런스 확인
cat ../../docs/reference/bedrock/payment/iap/*.md

# Step 3: 공식 예제 코드 확인
cd ../../example/with-in-app-purchase
cat src/App.tsx
cat pages/index.tsx

# Step 4: 자신의 프로젝트에 구현
cd ../../projects/my-new-app
vim src/services/payment.ts
```

### 3. 지속적인 참조

```bash
# 개발 가이드 참조
cat ../../docs/04-development/*.md

# 디자인 가이드라인 확인
cat ../../docs/03-design/*.md

# 마케팅 정책 확인
cat ../../docs/07-marketing/*.md

# 체크리스트 확인
cat ../../docs/05-checklist/*.md
```

---

## 참조 베스트 프랙티스

### ✅ 권장사항

1. **문서 우선 참조**
   - API를 사용하기 전 반드시 해당 문서를 먼저 읽습니다
   - 함수 시그니처, 파라미터, 반환 타입을 정확히 확인합니다

2. **예제 코드 활용**
   - 문서만으로 이해가 어려울 때 예제 코드를 참조합니다
   - 공식 예제의 패턴을 따라 구현합니다

3. **디렉토리 구조 일관성**
   - weekly-todo 예제의 프로젝트 구조를 기본 템플릿으로 활용합니다
   - src/, pages/, public/ 등의 구조를 유지합니다

4. **버전 확인**
   - Bedrock API 문서에서 최소 지원 버전을 확인합니다
   - TDS Mobile 컴포넌트의 v2 마이그레이션 가이드를 참조합니다

### ❌ 주의사항

1. **문서/예제 직접 수정 금지**
   - `/docs`와 `/example`은 읽기 전용입니다
   - 수정이 필요한 경우 루트 레벨에서 관리합니다

2. **복사 후 참조 끊기**
   - 예제 코드를 복사한 후에는 독립적으로 개발합니다
   - 예제 디렉토리를 직접 수정하지 않습니다

3. **상대 경로 하드코딩 방지**
   - 문서/예제 경로를 코드에 하드코딩하지 않습니다
   - 필요시 스크립트로 자동화합니다

---

## 업데이트 규칙

### 문서 업데이트

```bash
# 루트 레벨에서만 수행
cd /Users/a/Documents/Team-jane/APPinTOSS

# 문서 수정 또는 추가
# 예: 새로운 API 문서 추가
# docs/reference/bedrock/new-api/newFunction.md

# TASK.md에 기록
vim TASK.md
```

### 예제 업데이트

```bash
# 공식 저장소에서 최신 변경사항 가져오기
cd /Users/a/Documents/Team-jane/APPinTOSS/example
git pull origin main

# 하위 프로젝트에서 업데이트 확인
cd ../projects/my-new-app
# 변경사항 확인 후 필요시 코드 업데이트
```

---

## 디렉토리별 역할 요약

| 디렉토리 | 역할 | 접근 권한 | 관리 주체 |
|---------|------|----------|-----------|
| `/docs` | API 레퍼런스 및 가이드 문서 | 읽기 전용 | 루트 레벨 |
| `/example` | 공식 예제 코드 | 읽기 전용 | 루트 레벨 (Git) |
| `/templates` | 프로젝트 타입별 템플릿 | 읽기 전용 | 루트 레벨 |
| `/project` | 개발 프로젝트 | 읽기/쓰기 | 각 프로젝트 |

---

## 문의 및 기여

### 문서 개선 제안
- 문서 내용 오류나 개선 제안은 TASK.md에 기록합니다
- 원본 출처: https://developers-apps-in-toss.toss.im

### 예제 코드 이슈
- 공식 저장소: https://github.com/toss/apps-in-toss-examples
- 이슈는 공식 저장소에 직접 제보합니다

---

**마지막 업데이트**: 2025-10-28
**주요 변경**: 프로젝트 타입 구분 시스템 추가 (WebView, React Native, Unity)
