# TDS Mobile 디자인 시스템 (tds-mobile)

> **상위 컨텍스트**: [reference/claude.md](../claude.md) → [docs/claude.md](../../claude.md) → [루트 CLAUDE.md](../../../CLAUDE.md)

---

## ⚠️ React Native 앱 전용

**TDS Mobile은 React Native 앱에서만 사용 가능합니다.**

| 프로젝트 타입 | TDS Mobile 사용 |
|--------------|----------------|
| ✅ **React Native 앱** | **필수 사용** |
| ❌ **WebView 앱** | **사용 불가** |

**프로젝트 타입 확인**: [04-development/claude.md](../../04-development/claude.md#프로젝트-유형별-필수-문서)

---

## 📌 디렉토리 목적

**토스 디자인 시스템 (TDS Mobile v2)** React Native 컴포넌트 레퍼런스

**대상**: React Native 앱 개발자, 디자이너
**원본**: https://tossmini-docs.toss.im/tds-mobile/

---

## 📚 문서 구조

### 📖 시작하기
- **[00-intro.md](00-intro.md)** - TDS Mobile 소개 ⭐
- **[01-start.md](01-start.md)** - 설치 및 시작 가이드

### 🎨 Foundations (기초)
- **[colors.md](foundations/colors.md)** - 색상 시스템
- **[typography.md](foundations/typography.md)** - 타이포그래피

### 🧩 Components (58개)
#### 필수 컴포넌트 (모든 앱)
- **[button.md](components/button.md)** - 기본 버튼
- **[text-field.md](components/text-field.md)** - 텍스트 입력
- **[dialog.md](components/dialog.md)** - 다이얼로그
- **[bottom-sheet.md](components/bottom-sheet.md)** - 바텀시트
- **[toast.md](components/toast.md)** - 토스트 알림

#### 입력 컴포넌트
- **[checkbox.md](components/checkbox.md)** - 체크박스
- **[switch.md](components/switch.md)** - 스위치
- **[text-area.md](components/text-area.md)** - 여러 줄 입력
- **[search-field.md](components/search-field.md)** - 검색 필드
- **[slider.md](components/slider.md)** - 슬라이더
- **[stepper.md](components/stepper.md)** - 스테퍼
- **[numeric-spinner.md](components/numeric-spinner.md)** - 숫자 스피너

#### 키패드
- **[number-keypad.md](components/number-keypad.md)** - 숫자 키패드
- **[alphabet-keypad.md](components/alphabet-keypad.md)** - 알파벳 키패드
- **[full-secure-keypad.md](components/full-secure-keypad.md)** - 보안 키패드

#### 다이얼로그 & 오버레이
- **[alert-dialog.md](components/alert-dialog.md)** - 경고 다이얼로그
- **[confirm-dialog.md](components/confirm-dialog.md)** - 확인 다이얼로그
- **[modal.md](components/modal.md)** - 모달
- **[tooltip.md](components/tooltip.md)** - 툴팁

#### 리스트 & 테이블
- **[list-row-overview.md](components/list-row-overview.md)** - 리스트 개요 ⭐
- **[list-row-components.md](components/list-row-components.md)** - 리스트 컴포넌트
- **[list-header.md](components/list-header.md)** - 리스트 헤더
- **[list-footer.md](components/list-footer.md)** - 리스트 푸터
- **[grid-list.md](components/grid-list.md)** - 그리드 리스트
- **[table-row.md](components/table-row.md)** - 테이블 행
- **[board-row.md](components/board-row.md)** - 보드 행

#### 네비게이션
- **[tab.md](components/tab.md)** - 탭
- **[segmented-control.md](components/segmented-control.md)** - 세그먼트 컨트롤
- **[menu.md](components/menu.md)** - 메뉴

#### 피드백 & 상태
- **[loader.md](components/loader.md)** - 로더
- **[skeleton.md](components/skeleton.md)** - 스켈레톤
- **[progress-bar.md](components/progress-bar.md)** - 프로그레스 바
- **[progress-stepper.md](components/progress-stepper.md)** - 프로그레스 스테퍼
- **[badge.md](components/badge.md)** - 배지
- **[rating.md](components/rating.md)** - 평점

#### CTA & 액션
- **[BottomCTA-check-first.md](components/BottomCTA-check-first.md)** - BottomCTA 개요 ⭐
- **[bottom-cta-intro.md](components/bottom-cta-intro.md)** - CTA 소개
- **[bottom-cta-single.md](components/bottom-cta-single.md)** - 단일 CTA
- **[bottom-cta-double.md](components/bottom-cta-double.md)** - 이중 CTA
- **[fixed-bottom-cta.md](components/fixed-bottom-cta.md)** - 고정 CTA
- **[icon-button.md](components/icon-button.md)** - 아이콘 버튼
- **[text-button.md](components/text-button.md)** - 텍스트 버튼

#### 데이터 표시
- **[bar-chart.md](components/bar-chart.md)** - 막대 차트
- **[asset.md](components/asset.md)** - 자산 표시
- **[asset-frame.md](components/asset-frame.md)** - 자산 프레임
- **[post.md](components/post.md)** - 포스트
- **[paragraph.md](components/paragraph.md)** - 단락
- **[result.md](components/result.md)** - 결과 표시
- **[highlight.md](components/highlight.md)** - 하이라이트
- **[bubble.md](components/bubble.md)** - 말풍선

#### 레이아웃
- **[border.md](components/border.md)** - 테두리
- **[top.md](components/top.md)** - 상단 영역
- **[bottom-info.md](components/bottom-info.md)** - 하단 정보

#### 약관 & 동의
- **[agreement-v3.md](components/agreement-v3.md)** - 약관 v3
- **[agreement-v4.md](components/agreement-v4.md)** - 약관 v4

#### 기타
- **[split-text-field.md](components/split-text-field.md)** - 분할 입력 필드
- **[ListRowLegacy.md](components/ListRowLegacy.md)** - 레거시 리스트
- **[asset-check-first.md](components/asset-check-first.md)** - 자산 사전 확인

### 🪝 Hooks (4개)
- **[OverlayExtension-check-first.md](hooks/OverlayExtension-check-first.md)** - 오버레이 확장 ⭐
- **[useBottomSheet.md](hooks/useBottomSheet.md)** - 바텀시트 Hook
- **[useDialog.md](hooks/useDialog.md)** - 다이얼로그 Hook
- **[useToast.md](hooks/useToast.md)** - 토스트 Hook

### 🔄 Migration
- **[migration/](migration/)** - 버전 마이그레이션 가이드

---

## 🎯 프로젝트 유형별 필수 컴포넌트

### 🎮 게임 앱
```
필수: Button, Dialog, Toast, Loader
선택: Progress Bar, Badge, Rating
```

### 🛒 커머스 앱
```
필수: Button, TextField, Dialog, BottomSheet, List Row
선택: Rating, Badge, Bar Chart, Asset
```

### 📍 위치 기반 앱
```
필수: Button, TextField, SearchField, BottomSheet, List Row
선택: Loader, Skeleton, Toast
```

### 📱 일반 앱
```
필수: Button, TextField, Dialog, Toast, Tab
선택: Switch, Checkbox, Progress Bar
```

---

## 📖 읽기 순서

### 프로젝트 시작 전 (필수)
```
1. 00-intro.md - TDS Mobile 개요
2. 01-start.md - 설치 가이드
3. foundations/colors.md - 색상 시스템
4. foundations/typography.md - 타이포그래피
```

### 컴포넌트 선택 (프로젝트 유형별)
```
1. 위 "프로젝트 유형별 필수 컴포넌트" 참조
2. 필수 컴포넌트 문서 읽기
3. 선택 컴포넌트 추가 검토
```

### 고급 기능
```
1. hooks/ - 다이얼로그, 바텀시트 등 Hook 사용
2. migration/ - 버전 업그레이드
```

---

## 💡 빠른 참조

### 가장 많이 사용하는 컴포넌트 Top 10
1. **Button** - 기본 버튼
2. **TextField** - 텍스트 입력
3. **Dialog** - 다이얼로그
4. **BottomSheet** - 바텀시트
5. **Toast** - 토스트 알림
6. **List Row** - 리스트 항목
7. **Tab** - 탭 네비게이션
8. **Loader** - 로딩 인디케이터
9. **Switch** - 스위치
10. **Checkbox** - 체크박스

### 프로젝트 시작 시 설치

```bash
# React Native 프로젝트에서
npm install @toss/tds-mobile
# 또는
yarn add @toss/tds-mobile
```

자세한 설치 가이드: [01-start.md](01-start.md)

---

## 🚨 주의사항

### ✅ DO (권장)
- TDS Mobile 컴포넌트 최대한 활용
- 공식 디자인 가이드라인 준수
- 토스 브랜드 컬러 사용 (foundations/colors.md)
- 접근성 고려 (내장 접근성 기능 활용)

### ❌ DON'T (지양)
- 커스텀 UI 컴포넌트 직접 구현
- TDS 컴포넌트 스타일 임의 변경
- 브랜드 컬러 무시
- WebView 앱에서 TDS Mobile 사용 시도

---

## 🔗 연관 문서

### 상위 문서
- **[reference/claude.md](../claude.md)** - API 레퍼런스 개요
- **[docs/claude.md](../../claude.md)** - 문서 디렉토리 가이드
- **[루트 CLAUDE.md](../../../CLAUDE.md)** - 프로젝트 루트

### 개발 가이드
- **[04-development/03-react-native.md](../../04-development/03-react-native.md)** - React Native 개발
- **[04-development/claude.md](../../04-development/claude.md)** - 개발 가이드

### 디자인 가이드
- **[03-design/claude.md](../../03-design/claude.md)** - 디자인 가이드
- **[03-design/07-tds-mobile.md](../../03-design/07-tds-mobile.md)** - TDS 소개

### 예제 코드
- **[example/claude.md](../../../example/claude.md)** - 공식 예제

---

**마지막 업데이트**: 2025-10-28
**문서 개수**: 67개 (Foundations 2개 + Components 58개 + Hooks 4개 + 기타 3개)
**대상**: React Native 앱 개발자 전용
