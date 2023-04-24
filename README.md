## 사이드 프로젝트 - 쇼핑몰 프로젝트

### 제작기간

-   시작일 (2023.04.17)

### 사용 기술

-   typescript
-   react
-   react-router-dom (6.4)
-   styled-components
-   recoil
-   React-Query (23.04.20 추가)
-   React-Hook-Form (23.04.20 추가)

### 참고

-   배보 링크: https://guiltygear12.github.io/ (갱신일: 2023.04.18)
-   사용된 Api: https://fakestoreapi.com/
-   사용된 Api 문서: https://fakestoreapi.com/docs
-   Api 테스트 아이디/비밀번호 : "mor_2314" / "83r5^\_"

### 계획

-   메인페이지
    > 구역1: 메인 슬라이드 / 구역2: 이벤트 상품 / 구역3: 추천 상품
-   마이페이지
    > 기능1: 내정보 / 장바구니 / 찜목록 /
-   상품페이지
    > 카테고리별 정렬 / 상세페이지 이동
-   상품 상세페이지
    > 상품정보 / 장바구니담기

### 개발일지

#### 2023-04-21

> 19일 부터 21일까지 로그인/회원가입 기능구현
> Header 영역에 로그인, 회원가입 페이지 이동 버튼을 만들고 ReactRouter로 페이지 이동을 구현
> ReactQuery / React-Hook-Form 2개의 라이브러리를 활용

##### ⭐ 발견된 오류

Fake shop api에 로그인 정보를 보내면 Token값을 반환하여 로그인이 되는 기능이 존재하나
ReactQuery로 보내면 오류만 반환하는 문제발생

##### 😒 문제요인 확인

ReactQuery에서 사용되는 hook에는 useQuery, useMutation 이 존재하는데 Post로 보내야하는 경우 후자인 useMutation을 사용해야되지만 useQuery를 사용하여 발생하였음

--> 현재 useMutation으로 변경하여 성공적으로 Token값을 반환함

#### 2023-04-18

> 헤더 메뉴와 사이드 메뉴 구현

    헤더 메뉴는 로고의 위치와 우측 로그인 /회원가입 버튼 구현
    각 버튼은 Link 태그로 만들었고 해당페이지는 미구현
    사이드메뉴는 우측 토글버튼으로 온/오프 할수있으며 마이페이지, 장바구니 등으로 이동할수있도록 구현 예정

#### 2023-04-17

> 깃헙 레포지토리 생성
