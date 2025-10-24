# iOS 환경설정

React Native 앱을 개발하기 위해 필요한 iOS 개발 환경 설정 방법을 안내합니다.

## 시뮬레이터 준비하기

### 1. XCode 설치하기

iOS에서 React Native 앱을 테스트하려면 iOS 시뮬레이터가 필요합니다. 시뮬레이터를 사용하려면 먼저 **Xcode**를 설치해야 합니다.

- [XCode 최신버전 다운로드 링크](https://apps.apple.com/kr/app/xcode/id497799835?mt=12)를 클릭해서 Mac App Store에서 설치하세요.

### 2. iOS 컴포넌트 설치하기

Xcode를 처음 설치한 경우, iOS 시뮬레이터를 사용하려면 iOS 15 이상의 컴포넌트를 추가로 설치해야 합니다. 아래와 같은 창이 표시되면 iOS를 선택해 설치하세요.

![](https://developers-apps-in-toss.toss.im/assets/setup-ios-component.DQgbwcdu.png)

### 3. XCode Command Line Tools 설치하기

Xcode를 제대로 사용하려면 **Xcode Command Line Tools**가 설치되어야 하며, **Xcode 본체와 버전이 동일해야** 합니다. 아래 단계를 따라 확인하세요.

#### XCode 버전 확인하기

1. XCode를 열고 상단 메뉴에서 [XCode] > [About XCode]를 클릭하세요.
2. 화면에 표시된 버전을 확인하세요.

![](https://developers-apps-in-toss.toss.im/assets/setup-ios-xcode1.BxTIDkIr.png)

#### XCode Command Line Tools 버전 확인하기

1. XCode에서 [XCode] > [Settings]를 클릭하세요.
2. [Locations] 탭으로 이동한 뒤, Command Line Tools 항목의 버전을 확인하세요.

![](https://developers-apps-in-toss.toss.im/assets/setup-ios-xcode2.B33mbSlH.png)

### 4. 시뮬레이터 실행하기

Xcode 설치와 설정이 끝났다면 시뮬레이터를 실행해서 테스트 환경이 준비되었는지 확인하세요.

1. XCode 상단 메뉴에서 [XCode] > [Open Developer Tool] > [Simulator]를 선택하세요.
2. 실행된 시뮬레이터에서 iOS 15 이상의 버전을 사용할 수 있는지 확인하세요.

![](https://developers-apps-in-toss.toss.im/assets/setup-ios-2.CUn2WaIR.png)

#### 시뮬레이터가 보이지 않는다면?

시뮬레이터가 실행되지 않거나 보이지 않을 경우, 아래 단계를 따라 실행하세요.

1. Simulator 앱을 열어요.
2. 상단 메뉴에서 [File] > [Open Simulator]를 클릭하세요.
3. iOS 15 이상 버전을 선택한 뒤, 원하는 기기를 선택하세요.

![](https://developers-apps-in-toss.toss.im/assets/setup-ios-4.BLPJoe3u.png)

### 5. 앱인토스 샌드박스 앱 설치하기

#### 1. 앱인토스 샌드박스 앱 다운로드 받기

- [앱인토스 샌드박스 앱 다운로드](/development/test/sandbox.html)

#### 2. 앱 설치하기

1. 다운로드한 **앱인토스 샌드박스 앱 파일을 시뮬레이터 화면으로 드래그 앤드 드롭**하세요.
2. 설치가 완료되면 앱이 시뮬레이터 홈 화면에 표시됩니다.

![](https://developers-apps-in-toss.toss.im/assets/setup-ios-3.CvcyrKxs.png)

> 앱 설치 후 완료되기까지 약간의 시간이 걸릴 수 있습니다. 잠시 기다려 주세요.

## 디바이스 준비하기

앱인토스 샌드박스 앱은 **앱스토어에서 다운로드받을 수 있습니다.**
아래 가이드를 따라 iOS 실기기에 설치하세요.

- [앱인토스 샌드박스 앱 다운로드](/development/test/sandbox.html)
