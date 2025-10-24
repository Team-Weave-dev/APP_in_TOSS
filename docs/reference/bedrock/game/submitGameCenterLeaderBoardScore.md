# 게임 리더보드에 점수 제출하기

## 개요

`submitGameCenterLeaderBoardScore` 함수는 게임 플레이 완료 후 플레이어 점수를 게임 리더보드에 제출할 수 있습니다. "사용자는 Apps in Toss SDK로 식별됩니다."

## 지원 환경

- **프레임워크**: WebView
- **실행 환경**: Toss App
- **최소 버전**: Toss App 5.221.0

## 함수 시그니처

```typescript
function submitGameCenterLeaderBoardScore(params: {
  score: string;
}): Promise<SubmitGameCenterLeaderBoardScoreResponse | undefined>;
```

## 파라미터

- **`params.score`** (필수, string)
  제출할 게임 점수로, 숫자 문자열 형식입니다. 예시: `"123.45"` 또는 `"9999"`

## 반환값

- **`Promise<SubmitGameCenterLeaderBoardScoreResponse | undefined>`**
  제출 결과를 반환합니다. 앱 버전이 최소 요구사항보다 낮으면 작업을 수행하지 않고 `undefined`를 반환합니다.

## 중요 사항

⚠️ **주의사항:**
- "게임 리더보드는 Toss app 5.221.0 미만 버전에서 지원되지 않습니다"
- 플레이어 프로필이 설정되기 전인 게임 진입 직후에 점수를 제출하면 오류가 발생할 수 있으므로 피하세요
- 함수는 지원되지 않는 앱 버전에서 `undefined`를 반환합니다

## 사용 예제

```typescript
import { submitGameCenterLeaderBoardScore } from '@apps-in-toss/web-framework';

async function handleScoreSubmission() {
  try {
    const result = await submitGameCenterLeaderBoardScore({ score: '123.45' });

    if (!result) {
      console.warn('지원되지 않는 앱 버전');
      return;
    }

    if (result.statusCode === 'SUCCESS') {
      console.log('점수가 성공적으로 제출되었습니다!');
    } else {
      console.error('점수 제출 실패:', result.statusCode);
    }
  } catch (error) {
    console.error('제출 중 오류 발생:', error);
  }
}
```
