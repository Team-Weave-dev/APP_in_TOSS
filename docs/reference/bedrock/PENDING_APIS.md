# Phase 3-B 대기 중인 API 목록

**상태**: WebFetch 세션 제한으로 대기 중 (오후 8시 이후 수집 재개)
**대기 API 수**: 14개

## 화면 제어 (6개)

1. **closeView** - 화면 닫기
   - URL: `https://developers-apps-in-toss.toss.im/bedrock/reference/framework/%ED%99%94%EB%A9%B4%20%EC%A0%9C%EC%96%B4/closeView.html`
   - 저장 경로: `/docs/reference/bedrock/screen-control/closeView.md`

2. **setIosSwipeGestureEnabled** - iOS 스와이프 설정하기
   - URL: `https://developers-apps-in-toss.toss.im/bedrock/reference/framework/%ED%99%94%EB%A9%B4%20%EC%A0%9C%EC%96%B4/setIosSwipeGestureEnabled.html`
   - 저장 경로: `/docs/reference/bedrock/screen-control/setIosSwipeGestureEnabled.md`

3. **useBackEvent** - 뒤로가기 이벤트 제어하기
   - URL: `https://developers-apps-in-toss.toss.im/bedrock/reference/framework/%ED%99%94%EB%A9%B4%20%EC%A0%9C%EC%96%B4/useBackEvent.html`
   - 저장 경로: `/docs/reference/bedrock/screen-control/useBackEvent.md`

4. **setScreenAwakeMode** - 화면 항상 켜짐 설정하기
   - URL: `https://developers-apps-in-toss.toss.im/bedrock/reference/framework/%ED%99%94%EB%A9%B4%20%EC%A0%9C%EC%96%B4/setScreenAwakeMode.html`
   - 저장 경로: `/docs/reference/bedrock/screen-control/setScreenAwakeMode.md`

5. **setSecureScreen** - 화면 캡처 차단하기
   - URL: `https://developers-apps-in-toss.toss.im/bedrock/reference/framework/%ED%99%94%EB%A9%B4%20%EC%A0%9C%EC%96%B4/setSecureScreen.html`
   - 저장 경로: `/docs/reference/bedrock/screen-control/setSecureScreen.md`

6. **useParams** - 쿼리 파라미터 사용하기
   - URL: `https://developers-apps-in-toss.toss.im/bedrock/reference/framework/%ED%99%94%EB%A9%B4%20%EC%A0%9C%EC%96%B4/useParams.html`
   - 저장 경로: `/docs/reference/bedrock/screen-control/useParams.md`

7. **useWaitForReturnNavigator** - 화면 복귀 후 코드 실행하기
   - URL: `https://developers-apps-in-toss.toss.im/bedrock/reference/framework/%ED%99%94%EB%A9%B4%20%EC%A0%9C%EC%96%B4/useWaitForReturnNavigator.html`
   - 저장 경로: `/docs/reference/bedrock/screen-control/useWaitForReturnNavigator.md`

## 이벤트 제어 (2개)

8. **back-event** - 뒤로가기 버튼 이벤트 제어하기
   - URL: `https://developers-apps-in-toss.toss.im/bedrock/reference/framework/%EC%9D%B4%EB%B2%A4%ED%8A%B8%20%EC%A0%9C%EC%96%B4/back-event.html`
   - 저장 경로: `/docs/reference/bedrock/event-control/back-event.md`

9. **entry-message-exited** - 앱 진입 완료 이벤트 감지하기
   - URL: `https://developers-apps-in-toss.toss.im/bedrock/reference/framework/%EC%9D%B4%EB%B2%A4%ED%8A%B8%20%EC%A0%9C%EC%96%B4/entry-message-exited.html`
   - 저장 경로: `/docs/reference/bedrock/event-control/entry-message-exited.md`

## 속성 제어 (1개)

10. **webview-props** - WebView 속성 제어하기
    - URL: `https://developers-apps-in-toss.toss.im/bedrock/reference/framework/%EC%86%8D%EC%84%B1%20%EC%A0%9C%EC%96%B4/webview-props.html`
    - 저장 경로: `/docs/reference/bedrock/property-control/webview-props.md`

## 인터랙션 (4개)

11. **ScrollViewInertialBackground**
    - URL: `https://developers-apps-in-toss.toss.im/bedrock/reference/framework/UI/ScrollViewInertialBackground.html`
    - 저장 경로: `/docs/reference/bedrock/interaction/ScrollViewInertialBackground.md`

12. **ColorPreference**
    - URL: `https://developers-apps-in-toss.toss.im/bedrock/reference/framework/UI/ColorPreference.html`
    - 저장 경로: `/docs/reference/bedrock/interaction/ColorPreference.md`

13. **KeyboardAboveView**
    - URL: `https://developers-apps-in-toss.toss.im/bedrock/reference/framework/UI/KeyboardAboveView.html`
    - 저장 경로: `/docs/reference/bedrock/interaction/KeyboardAboveView.md`

14. **OnAudioFocusChanged**
    - URL: `https://developers-apps-in-toss.toss.im/bedrock/reference/framework/UI/OnAudioFocusChanged.html`
    - 저장 경로: `/docs/reference/bedrock/interaction/OnAudioFocusChanged.md`

---

## 수집 재개 방법

오후 8시 이후 WebFetch 세션이 재설정되면 다음 명령으로 수집 재개:

```
/sc:implement --ultrathink Phase 3-B 진행 (PENDING_APIS.md 참조)
```

수집 순서:
1. 위 14개 URL에 대해 WebFetch 병렬 호출
2. 각 API 문서를 지정된 경로에 저장
3. TASK.md 업데이트 (체크박스 완료 표시)
4. Phase 3 완료 보고
