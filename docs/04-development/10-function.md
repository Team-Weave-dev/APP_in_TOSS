# 앱 내 기능 콘솔 가이드

## 개요

앱 내 기능은 사용자가 검색이나 미니홈 화면에서 특정 기능(서비스)으로 직접 접속할 수 있도록 해주는 기능입니다.

**예시:** '식단 기록하기' → 해당 서비스의 홈 화면을 거치지 않고 바로 식단을 기록하는 화면으로 이동

### 필수 확인 사항

- 비게임 앱은 **필수로 1개 이상** 설정 필요
- 앱 내 기능 검토는 영업일 기준 **1~2일 소요**

![](https://developers-apps-in-toss.toss.im/assets/function_0.DqhNG86B.png)

---

## 앱 내 기능 최초 등록하기 (신규 출시 앱)

미니앱을 최초 출시할 때 앱 내 기능을 함께 등록할 수 있습니다.

**접속방법:** 앱인토스 콘솔 → 워크스페이스 선택 → 미니앱 선택 → 좌측 메뉴 '앱 출시' → 미니앱 선택 → '+ 등록하기'

### 1단계: 앱 출시 메뉴에서 등록하기

![](https://developers-apps-in-toss.toss.im/assets/function_1.CQwL-fxB.png)

### 2단계: ait 파일 업로드

![](https://developers-apps-in-toss.toss.im/assets/function_2.DFxsZMrh.png)

### 3단계: 앱 내 기능 등록

![](https://developers-apps-in-toss.toss.im/assets/function_3.CWI20Cnu.png)

사용자가 바로 접속할 수 있는 기능의 이름과 이동할 `intoss:///pages`를 입력합니다.

#### 작성 가이드

- **형식:** "~하기" 또는 "명사형"
  - ✅ 예: '송금 내역 확인하기', '해외 송금하기', '여행 예약 내역 확인하기'
  - ❌ 피할 것: '예약 확인하기', '내역 확인', '보러가기', '시청하기'

- 미니앱 서비스의 기능이 명확하게 드러나야 합니다.
- 미니앱 출시 검토와 함께 진행됩니다.
- **설정 후 반드시 실제 접속을 확인하세요.**

### 4단계: 검토 결과 확인

![](https://developers-apps-in-toss.toss.im/assets/function_4.Zo9XScrl.png)

'앱 내 기능' 탭에서 검토 결과를 확인할 수 있습니다.

---

## 앱 내 기능 등록 및 수정하기 (이미 출시된 앱)

이미 출시한 미니앱의 경우 '앱 내 기능' 탭에서 별도로 등록/수정 가능합니다.

**접속방법:** 앱인토스 콘솔 → 워크스페이스 선택 → 미니앱 선택 → 좌측 메뉴 '앱 출시' → '앱 내 기능' 탭

### 1단계: 수정하기 버튼 클릭

![](https://developers-apps-in-toss.toss.im/assets/function_5.CGDWSPcQ.png)

### 2단계: 검토 결과 확인

![](https://developers-apps-in-toss.toss.im/assets/function_6.C0IHT0Mu.png)

![](https://developers-apps-in-toss.toss.im/assets/function_7.BPnZwR1S.png)

---

## 주의사항

- 앱 내 기능만 따로 추가/수정하는 경우 영업일 기준 1~2일 소요
- 현재 운영 중인 미니앱에서 수정 시 **앱 내 기능 정상 접속 확인 필수**
