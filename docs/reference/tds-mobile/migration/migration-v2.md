# TDS Mobile v2.x 마이그레이션 가이드

## 개요

`@toss/tds-mobile` v1.x에서 v2.x로 업그레이드하기 위한 단계별 마이그레이션 지침입니다. 이 가이드는 주요 API 변경사항과 자동/수동 마이그레이션 방법을 제공합니다.

## 마이그레이션 완료 후

1. v2.0.0 이상으로 업데이트됨
2. 주요 변경사항(BREAKING CHANGES) 자동 처리
3. 더욱 직관적이고 일관된 컴포넌트 API 사용 가능

## 주요 변경사항 요약

| 컴포넌트 | 변경 내용 |
|---------|---------|
| **Badge** | `type` → `color`, `style` → `variant`, `htmlStyle` → `style` |
| **BoardRow** | `RightArrow` → `ArrowIcon` |
| **BottomCTA/FixedBottomCTA** | `TypeA` → `Single`, `TypeB` → `Double` |
| **Button** | `type` → `color`, `style` → `variant`, `htmlType` → `type`, `htmlStyle` → `style`, 사이즈 값 변경 |
| **IconButton** | `label` → `aria-label` |
| **ListRow** | `verticalPadding` 값 재정의 |
| **TextButton** | `typography` → `size` |
| **Top** | `subtitle1` → `subtitleTop`, `subtitle2` → `subtitleBottom` |

## CLI를 이용한 자동 마이그레이션

### 패키지 업데이트

```bash
pnpm up "@toss/tds-mobile*"
```

### 마이그레이션 도구 실행

```bash
pnpm exec @toss/tds-mobile-migration tds-v2 --glob="{src,pages}/**/*{tsx,ts}"
```

> 기본값은 `{src,pages}/**/*.{ts,tsx}`입니다.

### AITProvider 변경

```bash
pnpm install @toss/tds-mobile-ait
pnpm remove @toss/tds-mobile-bedrock
```

## CLI 마이그레이션 제한사항

⚠️ **로컬 래핑 컴포넌트는 자동 변환 대상이 아닙니다.** Badge나 Button을 감싼 사용자 정의 컴포넌트는 수동으로 처리해야 합니다.

### 자동 변환되지 않는 예시

```jsx
// 로컬 래핑 컴포넌트
export const MyButton = (props: ComponentProps<typeof Button>) => {
  return <Button {...props} />;
};

// 사용 시 - CLI에서 변환 안됨
function SomeComponent() {
  return (
    <MyButton
      type="primary"            // ❌ color로 변환 안됨
      style="filled"            // ❌ variant로 변환 안됨
      htmlStyle={{ margin: 4 }} // ❌ style로 변환 안됨
    >
      버튼
    </MyButton>
  );
}
```

### 수동 처리 방법

```jsx
// 수동으로 prop 이름 변경
<MyButton
  color="primary"
  variant="filled"
  style={{ margin: 4 }}
>
  버튼
</MyButton>
```

---

## 수동 마이그레이션 가이드

### Badge

```jsx
// type → color, style → variant
- <Badge type="blue" style="filled">배지</Badge>
+ <Badge color="blue" variant="filled">배지</Badge>

// htmlStyle → style
- <Badge htmlStyle={{ backgroundColor: 'red' }}>배지</Badge>
+ <Badge style={{ backgroundColor: 'red' }}>배지</Badge>

// 복합 컴포넌트도 동일
- <Paragraph.Badge type="yellow" style="fill">경고</Paragraph.Badge>
+ <Paragraph.Badge color="yellow" variant="fill">경고</Paragraph.Badge>
```

### BoardRow

```jsx
// RightArrow → ArrowIcon
- <BoardRow.RightArrow />
+ <BoardRow.ArrowIcon />

- import type { BoardRowRightArrowProps } from '@toss/tds-mobile';
+ import type { BoardRowArrowIconProps } from '@toss/tds-mobile';
```

### BottomCTA / FixedBottomCTA

```jsx
// TypeA → Single
- <BottomCTA.TypeA onClick={handleClick}>버튼</BottomCTA.TypeA>
+ <BottomCTA.Single onClick={handleClick}>버튼</BottomCTA.Single>

// TypeB → Double
- <BottomCTA.TypeB
+ <BottomCTA.Double
    leftButton={<CTAButton color="secondary">취소</CTAButton>}
    rightButton={<CTAButton color="primary">확인</CTAButton>}
  />
```

### Button

```jsx
// type → color, style → variant
- <Button type="primary" style="filled">버튼</Button>
+ <Button color="primary" variant="filled">버튼</Button>

// htmlType → type, htmlStyle → style
- <Button htmlType="submit" htmlStyle={{ margin: '10px' }}>폼</Button>
+ <Button type="submit" style={{ margin: '10px' }}>폼</Button>

// 사이즈 값 변경: tiny → small, big → xlarge
- <Button size="tiny">작은 버튼</Button>
+ <Button size="small">작은 버튼</Button>

- <Button size="big">큰 버튼</Button>
+ <Button size="xlarge">큰 버튼</Button>
```

### IconButton

```jsx
// label → aria-label (필수)
- <IconButton label="닫기" />
+ <IconButton aria-label="닫기" />

- <ListRow.IconButton label="설정" />
+ <ListRow.IconButton aria-label="설정" />
```

### ListRow

사이즈 값 매핑:
- `extraSmall` → `small`
- `small` → `medium`
- `medium` → `large`
- `large` → `xlarge`

```jsx
// verticalPadding 값 변경
- <ListRow verticalPadding="extraSmall">최소 패딩</ListRow>
+ <ListRow verticalPadding="small">최소 패딩</ListRow>

- <ListRow verticalPadding="small">작은 패딩</ListRow>
+ <ListRow verticalPadding="medium">작은 패딩</ListRow>

- <ListRow verticalPadding="medium">중간 패딩</ListRow>
+ <ListRow verticalPadding="large">중간 패딩</ListRow>

- <ListRow verticalPadding="large">큰 패딩</ListRow>
+ <ListRow verticalPadding="xlarge">큰 패딩</ListRow>
```

### TextButton

```jsx
// typography → size 값 매핑
- <TextButton typography="t7">아주 작은</TextButton>
+ <TextButton size="xsmall">아주 작은</TextButton>

- <TextButton typography="t6">작은</TextButton>
+ <TextButton size="small">작은</TextButton>

- <TextButton typography="t5">중간</TextButton>
+ <TextButton size="medium">중간</TextButton>

- <TextButton typography="t4">큰</TextButton>
+ <TextButton size="large">큰</TextButton>

- <TextButton typography="t3">아주 큼</TextButton>
+ <TextButton size="xlarge">아주 큼</TextButton>

- <TextButton typography="st2">매우 큼</TextButton>
+ <TextButton size="xxlarge">매우 큼</TextButton>
```

### Top

```jsx
// subtitle1 → subtitleTop, subtitle2 → subtitleBottom
- <Top subtitle1="상단">제목</Top>
+ <Top subtitleTop="상단">제목</Top>

- <Top subtitle2="하단">제목</Top>
+ <Top subtitleBottom="하단">제목</Top>

- <Top subtitle1="상단" subtitle2="하단">제목</Top>
+ <Top subtitleTop="상단" subtitleBottom="하단">제목</Top>
```

---

## 주의사항

- Button 기반 모든 컴포넌트(`ResultButton`, `CTAButton`, `AlertDialog.AlertButton` 등)도 동일한 규칙 적용
- `aria-label`은 IconButton에서 필수값입니다
- 로컬 래핑 컴포넌트는 수동으로 업데이트 필요

마이그레이션 관련 문의는 "앱인토스 커뮤니티"로 문의하시기 바랍니다.
