# ListRow Legacy 문서

## 개요
이 문서는 v3에서 제거되는 API를 다루며, ListRow 컴포넌트의 이전 버전 사용법을 설명합니다.

## 학습 목표
문서를 읽고 나면 다음을 이해할 수 있습니다:
- ListRow에서 사용 가능한 컴포넌트와 활용 방법
- left, contents, right 세 영역의 구성 요소와 각 영역별 적합한 컴포넌트 선택

---

## 주요 구성 요소

### 1. 아이콘 (Icon & FillIcon)

**ListRow.Icon** - 배경 스타일 옵션:
- `no-background`: 배경 없는 기본 아이콘
- `squircle-background`: 스쿼클 배경 (크기: medium/large)
- `circle-background`: 원형 배경
- `circle-masking`: 원형 마스킹

**ListRow.FillIcon** - 배경 스타일 옵션:
- `default`: 기본 스타일
- `squircle`: 스쿼클 형태 마스킹 (크기: medium/large)
- `circle-background`: 원형 배경
- `circle-masking`: 원형 마스킹

### 2. 아이콘 버튼 (IconButton)

`ListRow.IconButton` 컴포넌트는 리스트 항목에 상호작용 버튼을 추가합니다.

**variant 옵션**:
- `fill`: 배경색 있는 채워진 형태
- `clear`: 배경색 없는 깔끔한 형태
- `border`: 테두리 있는 형태

**주요 속성**:
- `iconSize`: 아이콘 크기 (기본값: 24px)
- `label`: 접근성을 위한 aria-label
- `bgColor`: 배경색 (기본값: adaptive.greyOpacity100)

### 3. 이미지 (Image)

`ListRow.Image` 컴포넌트로 썸네일과 실제 이미지를 표시합니다.

**type 옵션**:
- `default`: 기본 스타일
- `square`: 정사각형
- `rectangle`: 직사각형
- `rectangle-small`: 소형 직사각형
- `circle`: 원형
- `circle-small`: 소형 원형
- `3d-emoji`: 3D 이모지 표현

### 4. 이미지 컨테이너 (ImageContainer)

로띠 애니메이션을 포함할 때 사용합니다. `Asset.Lottie`를 감싸서 활용하며, Image와 동일한 type 속성을 지원합니다.

### 5. 왼쪽 텍스트 (LeftText)

왼쪽 영역에 순서나 간단한 텍스트를 표시합니다.

**type 옵션**:
- `default`: 굵은 글씨체
- `border`: 원형 테두리가 있는 텍스트

### 6. 다중 텍스트 (Texts)

리스트 항목의 텍스트 정보를 여러 줄로 표시합니다.

**네이밍 규칙**:
- 앞부분 숫자: 줄 수 (1Row, 2Row, 3Row)
- "Right" 접두어: 오른쪽 정렬
- 마지막 알파벳: 스타일 세트

**1줄 텍스트**: 1RowTypeA ~ 1RowTypeC, Right1RowTypeA ~ Right1RowTypeE
**2줄 텍스트**: 2RowTypeA ~ 2RowTypeF, Right2RowTypeA ~ Right2RowTypeE
**3줄 텍스트**: 3RowTypeA ~ 3RowTypeF

---

## 영역별 활용

### 왼쪽 영역 (left)
사용 가능한 컴포넌트:
- `ListRow.Icon`
- `ListRow.LeftText`
- `ListRow.Image`
- `ListRow.ImageContainer`

### Contents 영역
주로 `ListRow.Texts`를 사용하여 1줄, 2줄, 3줄 텍스트 표현

### 오른쪽 영역 (right)
사용 가능한 컴포넌트:
- `ListRow.Texts` (오른쪽 정렬 타입)
- `ListRow.IconButton`
- `Switch`, `Badge` 등 다른 컴포넌트와 조합 가능
- `withArrow` prop으로 화살표 아이콘 표시

---

## Props 인터페이스

### ListRowIconProps
| 속성 | 기본값 | 타입 | 설명 |
|------|------|------|------|
| shape | no-background | string | 아이콘 모양 설정 |
| alt | - | string | 대체 텍스트 |
| dataLoggingLabel | - | string | 로깅 라벨 |
| size | medium | medium \| large | 아이콘 크기 |

### ListRowFillIconProps
| 속성 | 기본값 | 타입 | 설명 |
|------|------|------|------|
| shape | default | string | 아이콘 모양 설정 |
| alt | - | string | 대체 텍스트 |
| dataLoggingLabel | - | string | 로깅 라벨 |
| size | medium | medium \| large | 아이콘 크기 |

### ListRowIconButtonProps
| 속성 | 기본값 | 타입 | 설명 |
|------|------|------|------|
| variant | clear | fill \| clear \| border | 버튼 형태 |
| color | - | string | 아이콘 색상 |
| bgColor | adaptive.greyOpacity100 | string | 배경색 |
| iconSize | 24 | number | 아이콘 크기 (px) |
| label | - | string | aria-label 속성 |

### ListRowTextsProps
| 속성 | 기본값 | 타입 | 설명 |
|------|------|------|------|
| type | - | string | 텍스트 타입 |
| top | - | ReactElement \| string | 상단 텍스트 |
| middle | - | ReactElement \| string | 중간 텍스트 (3Row만) |
| bottom | - | ReactElement \| string | 하단 텍스트 (2Row, 3Row) |
| marginTop | - | number | 위쪽 여백 |

---

## 주요 특징

**디자인 일관성**: 체계적인 네이밍 규칙으로 직관적인 컴포넌트 선택 가능

**접근성**: aria-label과 alt 텍스트 지원으로 스크린 리더 사용성 확보

**유연한 구성**: 세 영역에 다양한 컴포넌트 조합으로 다채로운 리스트 표현 가능

**시각적 다양성**: 아이콘, 이미지, 텍스트 등 다양한 콘텐츠 타입 지원

---

## 마이그레이션 참고
이 문서는 "v3에서 제거되는 API"를 다루므로, 새로운 프로젝트는 최신 ListRow 버전 사용을 권장합니다. 기존 코드 업그레이드 필요 시 공식 마이그레이션 가이드를 참조하세요.
