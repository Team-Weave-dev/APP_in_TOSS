# 로그 (이벤트) - Apps in Toss Developer Center

## Overview

로깅은 미니앱의 성과를 높이는 가장 중요한 도구입니다. 사용자의 행동과 요소 노출을 기록하면, **이탈 지점을 파악하고, 전환율을 개선하며, 더 많은 트래픽을 유도**할 수 있습니다.

단순히 데이터를 쌓는 것이 아니라, 로깅을 통해 **사용자가 어디에서 멈추는지**와 **무엇에 반응하는지**를 알 수 있습니다. 이를 기반으로 기능을 개선하고 마케팅 전략에 활용할 수 있습니다.

**주요 사항:**
- 페이지 이동 로그는 자동으로 기록되므로 추가 설정이 불필요합니다
- 나머지 상호작용과 노출 로그는 직접 설정하여 더 정교한 분석이 가능합니다

## 로깅을 잘 활용하는 방법

- **의미 있는 상호작용만 로깅하기**
  - 버튼 클릭, 상품 조회, 구매 완료 등 실제 분석 가치가 있는 지점만 기록

- **추가 파라미터를 구체적으로 설정하기**
  - 단순 "버튼 클릭"이 아닌 `button_name: "subscribe_button"`처럼 구체적으로 지정하여 어떤 기능이 성과를 내는지 뚜렷하게 분석 가능

- **전환율 최적화에 활용하기**
  - 이탈이 많은 단계를 파악하면 UI 개선이나 타겟팅 프로모션에 활용 가능

## 주요 제약사항

- SDK 0.0.26 버전 이상이 적용된 미니앱만 데이터 확인 가능
- 샌드박스나 출시 준비 단계 데이터는 제공되지 않음
- **서비스 런칭 후 하루 뒤부터** 데이터를 확인할 수 있음

## 클릭 이벤트 로깅

사용자가 버튼을 클릭하는 등의 상호작용을 기록합니다.

```javascript
import { Analytics } from "@apps-in-toss/web-framework";

document.getElementById("myButton").addEventListener("click", function () {
  Analytics.click({ button_name: "my_button" });
});
```

**설명:**
- `Analytics.click` 메서드는 클릭 이벤트를 로깅
- `button_name` 파라미터는 버튼 식별 이름 (예: 'my_button')
- 클릭 데이터를 통해 어떤 버튼이 전환율을 높이는지 파악 가능

## 요소 노출 이벤트 로깅

화면에 특정 요소가 노출될 때 이벤트를 기록하여 사용자 관심도를 파악합니다.

```javascript
import { Analytics } from "@apps-in-toss/web-framework";

const target = document.getElementById("impressionItem");

const observer = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      Analytics.impression({ item_id: target.dataset.itemId });
      observer.disconnect();
    }
  },
  { threshold: 0.1 }
);

observer.observe(target);
```

**설명:**
- `IntersectionObserver`는 요소가 화면에 10% 이상 노출될 때 콜백 실행
- `Analytics.impression` 메서드는 노출 이벤트를 로깅
- `item_id` 파라미터는 아이템 식별 ID (예: '1234')

### HTML 예시

```html
<div id="impressionItem" data-item-id="1234">노출을 감지할 요소</div>
```

## 콘솔 가이드

설정한 로깅 데이터는 콘솔의 **분석 > 이벤트** 메뉴에서 확인할 수 있습니다. 이 화면에서 클릭률, 노출 대비 전환율, 주요 이탈 지점을 확인하고 서비스 개선에 바로 활용할 수 있습니다.

## 결론

**로깅은 미니앱 성공을 좌우하는 필수 기능입니다.** 파트너사에서 많이 활용할수록 더 많은 트래픽과 전환율 개선 효과를 누릴 수 있습니다.

---
**출처**: [Apps in Toss 개발자센터](https://developers-apps-in-toss.toss.im/analytics/logging.html)
