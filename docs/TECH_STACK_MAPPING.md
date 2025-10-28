# Apps in Toss 기술 스택 매핑

> **목적**: 프로젝트 타입별 정확한 기술 스택 및 UI 라이브러리 매핑
> **검증일**: 2025-10-28
> **출처**: 공식 Apps in Toss 개발자 문서 및 TDS 공식 문서

---

## 📋 프로젝트 타입 분류

### Type 1: WebView 앱

**프레임워크**:
- `@apps-in-toss/web-framework`

**UI 라이브러리**:
- **TDS Mobile** (@toss/tds-mobile)
- **필수 의존성**:
  ```json
  {
    "@toss/tds-mobile": "latest",
    "@toss/tds-mobile-ait": "latest",
    "@emotion/react": "^11",
    "react": "^18",
    "react-dom": "^18"
  }
  ```

**번들러**:
- Vite (권장)
- Webpack

**개발 가이드**:
- 공식 문서: https://developers-apps-in-toss.toss.im/tutorials/webview.html
- TDS 문서: https://tossmini-docs.toss.im/tds-mobile/

**프로젝트 내 참조 문서**:
- `docs/04-development/06-webview.md`
- `docs/reference/tds-mobile/` (67개 컴포넌트 문서)
- `docs/03-design/07-tds-mobile.md`

---

### Type 2: React Native 앱

**프레임워크**:
- Granite (`@granite-js/react-native`)
- `@apps-in-toss/framework`

**UI 라이브러리**:
- **TDS React Native** (@toss/tds-react-native)
- **필수 의존성**:
  ```json
  {
    "@toss/tds-react-native": "latest",
    "@granite-js/react-native": "latest",
    "@apps-in-toss/framework": "latest"
  }
  ```

**개발 가이드**:
- 공식 문서: https://developers-apps-in-toss.toss.im/tutorials/react-native.html
- TDS 문서: https://tossmini-docs.toss.im/tds-react-native/

**프로젝트 내 참조 문서**:
- `docs/04-development/03-react-native.md`
- ⚠️ **TDS React Native 문서 없음** (수집 필요)

---

### Type 3: Unity 게임 앱

**프레임워크**:
- Unity Engine
- React Native wrapper (Granite)

**UI 라이브러리**:
- TDS React Native (제한적 사용)
- Unity UI 시스템

**개발 가이드**:
- 공식 문서: https://developers-apps-in-toss.toss.im/tutorials/unity.html

**프로젝트 내 참조 문서**:
- `docs/04-development/07-unity.md`

---

## 🔍 기술 스택 구분 방법

### package.json 기반 자동 감지

**WebView 앱 감지**:
```javascript
const isWebView = packageJson.dependencies && (
  packageJson.dependencies['@apps-in-toss/web-framework'] ||
  packageJson.dependencies['react-dom'] ||
  packageJson.dependencies['next'] ||
  packageJson.dependencies['vite']
);
```

**React Native 앱 감지**:
```javascript
const isReactNative = packageJson.dependencies && (
  packageJson.dependencies['@granite-js/react-native'] ||
  packageJson.dependencies['@apps-in-toss/framework'] ||
  packageJson.dependencies['react-native']
);
```

**Unity 앱 감지**:
```javascript
// Unity 프로젝트는 별도 Assets/ 디렉토리 존재로 판별
const isUnity = fs.existsSync('Assets/');
```

---

## ⚠️ 주의사항

### 잘못된 조합 (사용 금지)

❌ **WebView 앱에서 TDS React Native 사용**:
```json
{
  "dependencies": {
    "@apps-in-toss/web-framework": "...",
    "@toss/tds-react-native": "..."  // ❌ 오류!
  }
}
```

❌ **React Native 앱에서 TDS Mobile 사용**:
```json
{
  "dependencies": {
    "@granite-js/react-native": "...",
    "@toss/tds-mobile": "...",       // ❌ 오류!
    "react-dom": "..."               // ❌ React Native에는 불필요
  }
}
```

### 올바른 조합 (권장)

✅ **WebView 앱**:
```json
{
  "dependencies": {
    "@apps-in-toss/web-framework": "latest",
    "@toss/tds-mobile": "latest",
    "@toss/tds-mobile-ait": "latest",
    "react": "^18",
    "react-dom": "^18"
  }
}
```

✅ **React Native 앱**:
```json
{
  "dependencies": {
    "@granite-js/react-native": "latest",
    "@apps-in-toss/framework": "latest",
    "@toss/tds-react-native": "latest",
    "react-native": "latest"
  }
}
```

---

## 📊 컴포넌트 수 비교

| TDS 버전 | 플랫폼 | Foundations | Components | Hooks | Total |
|---------|--------|-------------|------------|-------|-------|
| **TDS Mobile** | WebView | 2 | 58 | 4 | 64 |
| **TDS React Native** | React Native | ? | ? | ? | ? |

⚠️ **Note**: TDS React Native 문서 미수집 상태

---

## 🔗 공식 문서 링크

### Apps in Toss 개발자 센터
- 메인: https://developers-apps-in-toss.toss.im
- WebView 가이드: https://developers-apps-in-toss.toss.im/tutorials/webview.html
- React Native 가이드: https://developers-apps-in-toss.toss.im/tutorials/react-native.html
- Unity 가이드: https://developers-apps-in-toss.toss.im/tutorials/unity.html

### TDS 공식 문서
- TDS Mobile: https://tossmini-docs.toss.im/tds-mobile/
- TDS React Native: https://tossmini-docs.toss.im/tds-react-native/

### Bedrock SDK
- API 레퍼런스: https://developers-apps-in-toss.toss.im/reference/bedrock

---

## 📝 문서 수집 현황

### ✅ 수집 완료
- [x] Bedrock SDK (94개 API)
- [x] TDS Mobile (67개 문서)
- [x] Apps in Toss 개발 가이드 (78개)

### ⚠️ 수집 필요
- [ ] TDS React Native 문서
- [ ] Unity 연동 상세 가이드

---

**마지막 검증**: 2025-10-28
**검증 방법**: WebFetch를 통한 공식 문서 직접 확인
**신뢰도**: ✅ 높음 (공식 문서 기반)
