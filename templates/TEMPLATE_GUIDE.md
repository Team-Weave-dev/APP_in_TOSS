# Apps in Toss 프로젝트 템플릿 사용 가이드

> **버전**: 1.0
> **최종 업데이트**: 2025-10-28
> **상위 문서**: [../CLAUDE.md](../CLAUDE.md)

---

## 📌 개요

이 디렉토리는 **Apps in Toss 프로젝트 타입별 CLAUDE.md 템플릿**을 제공합니다.

### 템플릿의 목적
- ✅ **일관성**: 모든 프로젝트가 동일한 구조와 규칙을 따름
- ✅ **타입 구분**: WebView/React Native/Unity 타입별 명확한 가이드
- ✅ **혼용 방지**: 타입별로 사용 가능/불가능한 기술 명시
- ✅ **빠른 시작**: 새 프로젝트 생성 시 템플릿 복사로 즉시 시작

---

## 📚 템플릿 목록

| 템플릿 파일 | 프로젝트 타입 | UI 라이브러리 | 설명 |
|------------|-------------|-------------|------|
| [webview-project-CLAUDE.md.template](webview-project-CLAUDE.md.template) | 🌐 WebView | TDS Mobile | Web React 기반 앱 |
| [react-native-project-CLAUDE.md.template](react-native-project-CLAUDE.md.template) | 📱 React Native | TDS React Native | 네이티브 React Native 앱 |
| [unity-project-CLAUDE.md.template](unity-project-CLAUDE.md.template) | 🎮 Unity | Unity UI | Unity 게임/앱 |

---

## 🎯 템플릿 선택 가이드

### 어떤 템플릿을 선택해야 할까요?

#### 1. 🌐 WebView 템플릿 (추천: 웹 기반 앱)
**선택하세요:**
- 웹 기술(HTML/CSS/JavaScript)로 개발하고 싶을 때
- React, Vue, Vanilla JS 등 웹 프레임워크 사용
- 빠른 개발 주기 및 웹 배포 동시 진행
- TDS Mobile 컴포넌트 사용 (67개 로컬 문서)

**예시 프로젝트**:
- TODO 앱, 투표 앱, 뉴스 피드 등
- 간단한 유틸리티 앱
- 웹사이트의 모바일 버전

**UI 라이브러리**: TDS Mobile (`@toss/tds-mobile`)
**필수 의존성**: `react-dom`

#### 2. 📱 React Native 템플릿 (추천: 네이티브 성능 필요)
**선택하세요:**
- 네이티브 성능이 중요한 앱
- 네이티브 기능(카메라, 센서, GPS 등) 많이 사용
- iOS/Android 네이티브 코드 통합 필요
- Granite 프레임워크 사용

**예시 프로젝트**:
- 실시간 위치 추적 앱
- AR/VR 앱 (카메라 사용)
- 복잡한 애니메이션 앱

**UI 라이브러리**: TDS React Native (`@toss/tds-react-native`)
**필수 의존성**: `react-native`

#### 3. 🎮 Unity 템플릿 (추천: 게임)
**선택하세요:**
- 게임 개발
- 3D 그래픽/물리 엔진 필요
- Unity 에셋 활용
- Unity 기존 프로젝트 포팅

**예시 프로젝트**:
- 미니게임, 퍼즐 게임
- 3D 시뮬레이션
- Unity 기반 교육 앱

**UI 시스템**: Unity UI (uGUI, UI Toolkit)
**통합 방식**: React Native wrapper

---

## 🚀 템플릿 사용 방법

### Step 1: 템플릿 선택
위의 [템플릿 선택 가이드](#-템플릿-선택-가이드)를 참고하여 프로젝트 타입 결정

### Step 2: 프로젝트 디렉토리 생성
```bash
cd /Users/a/Documents/Team-jane/APPinTOSS/project
mkdir my-new-app
cd my-new-app
```

### Step 3: 템플릿 복사
```bash
# WebView 프로젝트
cp ../../templates/webview-project-CLAUDE.md.template CLAUDE.md

# React Native 프로젝트
cp ../../templates/react-native-project-CLAUDE.md.template CLAUDE.md

# Unity 프로젝트
cp ../../templates/unity-project-CLAUDE.md.template CLAUDE.md
```

### Step 4: 템플릿 커스터마이징
`CLAUDE.md` 파일을 열어서 다음 항목을 수정:

#### 필수 수정 항목 (모든 템플릿 공통)
```markdown
1. [프로젝트명] → 실제 프로젝트명으로 변경
2. [YYYY-MM-DD] → 현재 날짜로 변경
3. [프로젝트 간단 설명] → 프로젝트 설명 작성
4. [개발 진행 상태] → 현재 상태 (예: 기획 중, 개발 진행 중)
5. [핵심 기능 1/2/3] → 실제 핵심 기능으로 변경
6. [수익 모델 설명] → 수익 모델 작성 (선택사항)
```

#### 타입별 추가 수정
**WebView**:
```markdown
- [React 기반 프레임워크] → Next.js, Vite, CRA 등
- [스타일링 방법] → Tailwind, Emotion, CSS Modules 등
```

**React Native**:
```markdown
- [최소 버전] → iOS/Android 최소 지원 버전
```

**Unity**:
```markdown
- [버전] → Unity 버전 (예: 2022.3 LTS)
- [Physics 엔진] → Unity Physics 사용 여부
- [렌더링 파이프라인] → URP, HDRP 등
```

### Step 5: 프로젝트 초기화
```bash
# 의존성 파일 생성
npm init -y

# WebView: Vite 프로젝트 생성
npm create vite@latest . -- --template react-ts

# React Native: Granite 프로젝트 생성
npx @granite-js/cli init

# Unity: Unity Hub에서 프로젝트 생성
```

### Step 6: TASK.md 생성
```bash
# 작업 추적용 TASK.md 생성
touch TASK.md
```

### Step 7: 개발 시작!
```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

---

## 📋 프로젝트 생성 체크리스트

### 필수 작업
- [ ] 템플릿 선택 (WebView/React Native/Unity)
- [ ] 프로젝트 디렉토리 생성
- [ ] 템플릿 복사 (`CLAUDE.md`)
- [ ] 템플릿 커스터마이징 (프로젝트명, 날짜 등)
- [ ] 프로젝트 초기화 (`npm init` 또는 프레임워크별 CLI)
- [ ] `TASK.md` 생성
- [ ] `.env.example` 생성 (환경 변수 템플릿)

### 타입별 추가 작업

#### WebView
- [ ] TDS Mobile 설치 (`npm install @toss/tds-mobile`)
- [ ] `react-dom` 확인 (package.json)
- [ ] Bedrock SDK 설치 (`@apps-in-toss/framework`)
- [ ] 번들러 설정 (Vite/Webpack/Next.js)

#### React Native
- [ ] Granite 프레임워크 설정
- [ ] TDS React Native 설치
- [ ] Android/iOS 네이티브 설정
- [ ] `granite.config.ts` 생성

#### Unity
- [ ] Unity 프로젝트 생성 (`unity/` 디렉토리)
- [ ] React Native 래퍼 생성 (`rn-wrapper/` 디렉토리)
- [ ] Unity → RN 브릿지 설정
- [ ] `react-native-unity-view` 설치

---

## 🔍 타입별 주요 차이점 비교

| 항목 | WebView | React Native | Unity |
|------|---------|--------------|-------|
| **UI 라이브러리** | TDS Mobile | TDS React Native | Unity UI |
| **필수 의존성** | `react-dom` | `react-native` | `react-native-unity-view` |
| **프레임워크** | Next.js, Vite 등 | Granite | Unity Engine |
| **TDS 문서** | 로컬 67개 | 온라인만 | 제한적 지원 |
| **네이티브 성능** | 낮음 | 높음 | 매우 높음 |
| **개발 난이도** | 낮음 | 중간 | 높음 |
| **번들 크기** | 작음 | 중간 | 큼 |
| **적합한 앱** | 웹 기반 유틸리티 | 네이티브 기능 활용 | 게임, 3D 앱 |

---

## ⚠️ 주의사항

### 타입 혼용 금지
```bash
# ❌ 잘못된 예시
# WebView 프로젝트에서 React Native TDS 사용
npm install @toss/tds-react-native  # 금지!

# ✅ 올바른 예시
# WebView 프로젝트에서 TDS Mobile 사용
npm install @toss/tds-mobile  # 정상
```

### package.json 검증
프로젝트 타입과 의존성이 일치하는지 확인:

```bash
# WebView 프로젝트라면
cat package.json | grep "@toss/tds-mobile"    # 있어야 함
cat package.json | grep "react-dom"           # 있어야 함
cat package.json | grep "@toss/tds-react-native"  # 없어야 함

# React Native 프로젝트라면
cat package.json | grep "@toss/tds-react-native"  # 있어야 함
cat package.json | grep "react-native"        # 있어야 함
cat package.json | grep "@toss/tds-mobile"    # 없어야 함
cat package.json | grep "react-dom"           # 없어야 함
```

---

## 📖 참조 문서

### 전체 가이드
- [루트 CLAUDE.md](../CLAUDE.md) - 전체 프로젝트 구조
- [QUICK_REFERENCE.md](../QUICK_REFERENCE.md) - 빠른 참조
- [REFERENCE_GUIDE.md](../REFERENCE_GUIDE.md) - 참조 규칙

### 타입별 개발 가이드
- [WebView 개발](../docs/04-development/06-webview.md)
- [React Native 개발](../docs/04-development/03-react-native.md)
- [Unity 개발](../docs/04-development/07-unity.md)

### TDS 디자인 시스템
- [TDS Mobile (WebView)](../docs/reference/tds-mobile/) - 로컬 67개 문서
- [TDS React Native](https://tossmini-docs.toss.im/tds-react-native/) - 온라인

### Bedrock SDK
- [Bedrock SDK](../docs/reference/bedrock/) - 94개 API

### 예제 프로젝트
- [ROULETTE](../project/ROULETTE/CLAUDE.md) - WebView 앱 예제
- [공식 예제들](../example/) - API 활용 예제

---

## 🙋 FAQ

### Q1: 어떤 템플릿을 선택해야 할까요?
**A**: [템플릿 선택 가이드](#-템플릿-선택-가이드)를 참고하세요. 일반적으로:
- 웹 기술로 빠르게 개발 → WebView
- 네이티브 성능 필요 → React Native
- 게임 개발 → Unity

### Q2: 템플릿 복사 후 어디서부터 시작하나요?
**A**: `CLAUDE.md` 파일의 `[대괄호]` 부분을 모두 수정하고, 프로젝트를 초기화하세요. 자세한 내용은 [템플릿 사용 방법](#-템플릿-사용-방법)을 참고하세요.

### Q3: TDS Mobile과 TDS React Native를 함께 사용할 수 있나요?
**A**: **아니요, 절대 불가능합니다!** WebView는 TDS Mobile만, React Native는 TDS React Native만 사용해야 합니다. 혼용 시 런타임 에러가 발생합니다.

### Q4: 기존 프로젝트에 템플릿을 적용할 수 있나요?
**A**: 네, 템플릿을 참고하여 기존 프로젝트의 `CLAUDE.md`를 업데이트하면 됩니다. 특히 프로젝트 타입 선언 섹션을 추가하는 것이 중요합니다.

### Q5: Unity 프로젝트는 왜 React Native wrapper가 필요한가요?
**A**: Apps in Toss는 React Native 기반 플랫폼이므로, Unity 게임을 통합하려면 React Native 래퍼가 필요합니다. 래퍼는 Unity와 Apps in Toss 간의 브릿지 역할을 합니다.

### Q6: 로컬 TDS 문서가 없는 경우는?
**A**: React Native는 로컬 TDS 문서가 없으므로, 공식 온라인 문서(https://tossmini-docs.toss.im/tds-react-native/)를 참조해야 합니다.

### Q7: 프로젝트 타입을 중간에 변경할 수 있나요?
**A**: 기술적으로 가능하지만 권장하지 않습니다. 프로젝트를 새로 만드는 것이 더 안전합니다. WebView ↔ React Native 변경은 특히 UI 라이브러리 전체를 교체해야 하므로 매우 복잡합니다.

---

## 🔗 관련 링크

### 공식 문서
- [Apps in Toss 개발자 센터](https://developers-apps-in-toss.toss.im)
- [TDS Mobile](https://tossmini-docs.toss.im/tds-mobile/)
- [TDS React Native](https://tossmini-docs.toss.im/tds-react-native/)
- [Bedrock SDK](https://developers-apps-in-toss.toss.im/reference/bedrock)

### GitHub
- [공식 예제 저장소](https://github.com/toss/apps-in-toss-examples)

---

**마지막 업데이트**: 2025-10-28
**버전**: 1.0
**작성자**: Claude Code
