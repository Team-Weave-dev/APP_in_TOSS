# 프로젝트 타입 구분 시스템

> **목적**: WebView와 React Native 프로젝트를 명확히 구분하여 잘못된 TDS 사용 방지
> **설계일**: 2025-10-28

---

## 🎯 시스템 목표

1. **명확한 타입 선언**: 프로젝트 생성 시 타입 명시
2. **자동 검증**: package.json 기반 타입 일치 확인
3. **올바른 참조**: 타입별로 다른 문서 참조
4. **오류 방지**: 잘못된 TDS 패키지 사용 차단

---

## 📁 프로젝트 타입 명시 방법

### Method 1: project/CLAUDE.md 선언 (필수)

모든 프로젝트의 CLAUDE.md 상단에 타입 선언:

```markdown
# [프로젝트명] - Apps in Toss 프로젝트

> **프로젝트 타입**: WebView | React Native | Unity
> **UI 라이브러리**: TDS Mobile | TDS React Native | Unity UI
> **프레임워크**: @apps-in-toss/web-framework | Granite | Unity

---

## 기술 스택 검증

**자동 감지 결과**:
- ✅ package.json에서 WebView 타입 확인됨
- ✅ TDS Mobile 사용 올바름

**필수 의존성**:
\`\`\`json
{
  "@apps-in-toss/web-framework": "latest",
  "@toss/tds-mobile": "latest",
  "react": "^18",
  "react-dom": "^18"
}
\`\`\`
```

### Method 2: package.json 자동 감지 (검증용)

프로젝트 타입을 package.json 의존성에서 자동 감지:

```javascript
// 타입 감지 로직
function detectProjectType(packageJson) {
  const deps = packageJson.dependencies || {};

  // WebView 타입 감지
  if (deps['@apps-in-toss/web-framework'] ||
      deps['react-dom'] ||
      deps['vite'] ||
      deps['next']) {
    return {
      type: 'webview',
      ui: '@toss/tds-mobile',
      docs: 'docs/reference/tds-mobile/'
    };
  }

  // React Native 타입 감지
  if (deps['@granite-js/react-native'] ||
      deps['@apps-in-toss/framework'] ||
      deps['react-native']) {
    return {
      type: 'react-native',
      ui: '@toss/tds-react-native',
      docs: 'docs/reference/tds-react-native/' // 추후 추가 필요
    };
  }

  return { type: 'unknown', ui: null, docs: null };
}
```

### Method 3: .appintoss.yml 설정 파일 (선택)

명시적 설정이 필요한 경우:

```yaml
# .appintoss.yml
project:
  name: "my-app"
  type: webview  # webview | react-native | unity

framework:
  name: "@apps-in-toss/web-framework"
  version: "latest"

ui:
  library: "@toss/tds-mobile"
  version: "latest"

validation:
  strict: true  # 타입 불일치 시 오류 발생
  auto_fix: false
```

---

## 🔍 타입별 참조 루트

### WebView 프로젝트

**참조 경로**:
```
project/MY_APP/CLAUDE.md (WebView 타입 선언)
│
├─ 개발 가이드
│  ├─ docs/04-development/06-webview.md
│  └─ docs/04-development/claude.md
│
├─ 디자인 시스템
│  ├─ docs/reference/tds-mobile/ (67개 컴포넌트)
│  ├─ docs/03-design/07-tds-mobile.md
│  └─ docs/03-design/claude.md
│
└─ API 레퍼런스
   └─ docs/reference/bedrock/ (공통)
```

**필수 읽기 순서**:
1. `QUICK_REFERENCE.md` → WebView 섹션
2. `docs/04-development/06-webview.md`
3. `docs/reference/tds-mobile/claude.md` (새로 생성 필요)
4. `docs/reference/tds-mobile/components/`

### React Native 프로젝트

**참조 경로**:
```
project/MY_APP/CLAUDE.md (React Native 타입 선언)
│
├─ 개발 가이드
│  ├─ docs/04-development/03-react-native.md
│  └─ docs/04-development/claude.md
│
├─ 디자인 시스템
│  ├─ docs/reference/tds-react-native/ (미수집)
│  └─ 공식: https://tossmini-docs.toss.im/tds-react-native/
│
└─ API 레퍼런스
   └─ docs/reference/bedrock/ (공통)
```

**필수 읽기 순서**:
1. `QUICK_REFERENCE.md` → React Native 섹션
2. `docs/04-development/03-react-native.md`
3. 공식 TDS React Native 문서 (온라인)
4. `docs/reference/bedrock/`

---

## ✅ 검증 규칙

### Rule 1: package.json vs CLAUDE.md 일치

```javascript
function validateProjectType(claudeMdType, packageJsonType) {
  if (claudeMdType !== packageJsonType) {
    throw new Error(`
      ❌ 프로젝트 타입 불일치!
      CLAUDE.md: ${claudeMdType}
      package.json 감지: ${packageJsonType}

      해결 방법:
      1. CLAUDE.md의 타입 선언 확인
      2. package.json의 dependencies 확인
      3. 올바른 타입으로 통일
    `);
  }
}
```

### Rule 2: TDS 패키지 일치

```javascript
function validateTDSPackage(projectType, packageJson) {
  const deps = packageJson.dependencies;

  if (projectType === 'webview') {
    if (deps['@toss/tds-react-native']) {
      throw new Error('❌ WebView 프로젝트에서 TDS React Native 사용 불가!');
    }
    if (!deps['@toss/tds-mobile']) {
      console.warn('⚠️ WebView 프로젝트는 TDS Mobile 사용 권장');
    }
  }

  if (projectType === 'react-native') {
    if (deps['@toss/tds-mobile'] || deps['react-dom']) {
      throw new Error('❌ React Native 프로젝트에서 TDS Mobile/react-dom 사용 불가!');
    }
    if (!deps['@toss/tds-react-native']) {
      console.warn('⚠️ React Native 프로젝트는 TDS React Native 사용 권장');
    }
  }
}
```

### Rule 3: 필수 의존성 확인

```javascript
const REQUIRED_DEPS = {
  webview: [
    '@apps-in-toss/web-framework',
    '@toss/tds-mobile',
    'react',
    'react-dom'
  ],
  'react-native': [
    '@granite-js/react-native',
    '@apps-in-toss/framework',
    '@toss/tds-react-native',
    'react-native'
  ]
};

function checkRequiredDeps(projectType, packageJson) {
  const required = REQUIRED_DEPS[projectType];
  const missing = required.filter(dep => !packageJson.dependencies[dep]);

  if (missing.length > 0) {
    console.warn(`⚠️ 필수 의존성 누락: ${missing.join(', ')}`);
  }
}
```

---

## 📝 프로젝트 생성 워크플로우

### Step 1: 타입 결정

```bash
# 사용자에게 질문
"어떤 타입의 프로젝트를 생성하시겠습니까?"
1) WebView 앱 (웹 기반, TDS Mobile 사용)
2) React Native 앱 (네이티브, TDS React Native 사용)
3) Unity 게임 앱
```

### Step 2: 프로젝트 스캐폴딩

**WebView 선택 시**:
```bash
cd project/
mkdir my-webview-app
cd my-webview-app

# 템플릿 복사
cp ../../docs/templates/webview/CLAUDE.md ./CLAUDE.md

# 프레임워크 초기화
npm init
npm install @apps-in-toss/web-framework @toss/tds-mobile
npx ait init
```

**React Native 선택 시**:
```bash
cd project/
npm create granite-app my-react-native-app
cd my-react-native-app

# 템플릿 복사
cp ../../docs/templates/react-native/CLAUDE.md ./CLAUDE.md

# TDS React Native 설치
npm install @toss/tds-react-native
```

### Step 3: CLAUDE.md 자동 생성

```markdown
# My WebView App

> **프로젝트 타입**: ✅ WebView
> **UI 라이브러리**: TDS Mobile
> **생성일**: 2025-10-28

---

## 📚 필수 참조 문서

### 개발 가이드
- [WebView 개발 가이드](../../docs/04-development/06-webview.md)
- [Bedrock SDK](../../docs/reference/bedrock/claude.md)

### 디자인 시스템
- [TDS Mobile 컴포넌트](../../docs/reference/tds-mobile/claude.md)
- [TDS Mobile Foundations](../../docs/reference/tds-mobile/foundations/)

### 빠른 참조
- [QUICK_REFERENCE.md](../../QUICK_REFERENCE.md#webview-앱)
- [기술 스택 매핑](../../docs/TECH_STACK_MAPPING.md#type-1-webview-앱)

---

## ⚠️ 주의사항

### ❌ 사용 금지
- TDS React Native (@toss/tds-react-native) - React Native 전용!
- react-native 패키지 - 네이티브 앱 전용!

### ✅ 사용 권장
- TDS Mobile (@toss/tds-mobile)
- Web React 컴포넌트
- Vite/Webpack 번들러

---

**자동 생성**: Claude Code
**템플릿 버전**: 1.0.0
```

### Step 4: 검증

```bash
# 자동 검증 스크립트 실행
npm run validate-type

# 출력 예시:
✅ 프로젝트 타입: WebView
✅ CLAUDE.md 타입 선언: WebView
✅ package.json 타입 감지: WebView
✅ TDS 패키지: @toss/tds-mobile (올바름)
✅ 필수 의존성: 모두 설치됨
```

---

## 🚀 Claude Code 통합

### CLAUDE.md 자동 파싱

Claude Code가 프로젝트 진입 시 자동으로 타입 인식:

```markdown
# project/my-app/CLAUDE.md

> **프로젝트 타입**: WebView

<!-- Claude Code는 이 선언을 보고 자동으로 WebView 모드로 전환 -->
<!-- TDS Mobile 문서 참조, React Native 관련 제안 비활성화 -->
```

### 컨텍스트 자동 로드

```javascript
// Claude Code 내부 로직
function loadProjectContext(projectPath) {
  const claudeMd = readFile(`${projectPath}/CLAUDE.md`);
  const type = parseProjectType(claudeMd);

  switch(type) {
    case 'webview':
      loadDocs('docs/reference/tds-mobile/');
      setUILibrary('@toss/tds-mobile');
      break;
    case 'react-native':
      loadDocs('https://tossmini-docs.toss.im/tds-react-native/');
      setUILibrary('@toss/tds-react-native');
      break;
  }
}
```

---

## 📖 템플릿 파일 위치

- `docs/templates/webview/CLAUDE.md`
- `docs/templates/react-native/CLAUDE.md`
- `docs/templates/unity/CLAUDE.md`

---

**설계 완료**: 2025-10-28
**검토 필요**: 사용자 피드백 기반 개선
