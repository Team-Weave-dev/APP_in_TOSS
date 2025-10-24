# 토스앱

## 개요

샌드박스 앱에서 테스트를 완료한 후, 콘솔에 **앱 번들(.ait)** 을 업로드하고 **QR코드**로 토스앱에서 최종 테스트한 뒤 출시할 수 있습니다.

![이미지](https://developers-apps-in-toss.toss.im/assets/release-flow.BUfX8Fba.png)

## 1. 앱 번들 업로드

먼저 **앱 번들(.ait)** 을 업로드하세요. 업로드가 완료되면 워크스페이스 멤버만 접근 가능한 **테스트 스킴/QR**을 생성할 수 있어요.

**접속 방법:** 워크스페이스 선택 → 앱 선택 → 좌측 메뉴에서 '앱 출시' 선택

![이미지](https://developers-apps-in-toss.toss.im/assets/function_1.CQwL-fxB.png)

![이미지](https://developers-apps-in-toss.toss.im/assets/release-01_info.D82eL_Ha.png)

### 앱 번들 정책

앱 번들은 **압축 해제 기준 100MB 이하**만 허용됩니다. 빌드 파일에 모든 리소스(이미지, 사운드, 영상 등)을 포함하면 용량을 초과할 수 있습니다. **리소스 다운로드를 빌드 파일과 반드시 분리해야 합니다.**

- 앱 실행에 꼭 필요한 최소 리소스만 빌드 파일에 포함하세요.
- 대용량 리소스는 **외부 스토리지/CDN**을 통해 다운로드하도록 구성해 주세요.
- 추가 리소스는 **단계적 다운로드**(Lazy Loading)을 적용하면 사용자 경험이 향상돼요.

## 2. 테스트 진행하기

앱 번들을 올린 후 '테스트하기' 버튼을 눌러 테스트를 진행해 주세요.

![이미지](https://developers-apps-in-toss.toss.im/assets/release-02.XDtaaPtX.png)

![이미지](https://developers-apps-in-toss.toss.im/assets/release-03.D65p_X95.png)

QR 코드를 카메라로 스캔하면 테스트 토스앱이 실행됩니다. 워크스페이스 멤버 전체에게 **푸시 메시지**를 보내 테스트를 유도할 수도 있습니다. 단, 토스앱에 로그인된 만 19세 이상만 테스트할 수 있습니다.

## 3. 검토 요청하기

테스트를 진행했다면 '검토 요청하기' 버튼을 눌러 주세요. 검토는 영업일 3일 소요됩니다.

**참고:** 테스트를 1회 이상 완료해야 '검토 요청하기' 버튼이 활성화됩니다.

### 검토가 반려된 경우

'반려사유 보기' 버튼을 눌러 사유를 확인한 뒤, 번들을 새로 등록해 다시 검토를 요청해 주세요.

![이미지](https://developers-apps-in-toss.toss.im/assets/release-reject.Crp80KCv.png)

## 4. 출시하기

번들이 승인되면 '출시하기' 버튼을 눌러 앱을 유저에게 공개해 보세요.

![이미지](https://developers-apps-in-toss.toss.im/assets/release-08.CDVj643X.png)

## 자주 묻는 질문

**Q: 토스앱에서 미니앱이 열리지 않아요.**

A: 토스앱 하위 버전에서 오류가 발생할 수 있습니다. 최신 버전의 토스앱에서 테스트를 진행해 주세요.

**Q: "잠시 문제가 생겼어요" 문구가 노출되고 있어요.**

A: `granite.config.ts` 파일에서 `icon` 값을 채운 상태에서 빌드된 ait 파일인지 확인해주세요. appInToss 플러그인 내의 `brand` 값이 모두 포함된 상태여야 합니다.

```typescript
export default defineConfig({
  appsInToss({
    brand: {
      // 👈 brand 값에 빈 값이 없도록
    },
  }),
});
```
