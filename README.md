# Climbing Momentum
* 목적 : To-do-List를 제공하는 클라이밍화 추천 웹 서비스
* 개발 기간 : 2021.7.26 ~ 2021.8.9
* 배포링크 : https://wjdgml3834.github.io/momentum/


# 핵심 기능

<img src="https://user-images.githubusercontent.com/88475978/145742082-5d72c8fa-a3bc-4055-b2ff-59c52f21b6bd.png" />

### 다른 프레임워크에 의존하지 않고, 오직 바닐라JS만을 이용하여 구현하였습니다.
할일 목록을 생성하고, 제거 할 수 있는 기능을 구현하였습니다.

날씨 기능

- navigator. geolocation. getCurrentPosition()함수를 이용했습니다.
- fetch() 함수를 이용하여 날씨 API 데이터 정보를 가져왔습니다.

클라이밍화 추천 기능

- 새로고침할때 마다 클라이밍화 정보가 바뀌는 기능을 구현하기 
  위해 Math.floor(Math.random()) 함수를 이용하였습니다.

4. 시계 기능

- new Date() 함수와 setInterval() 함수를 이용하여 현재 시간을 구현
 하였습니다.

5. 유저 기억 기능

- 웹에서 기본적으로 이용 가능한 local storage를 이용하였습니다.

<hr/>

# 개발 스택 및 프레임워크

<div style="display:flex">
<img width="100px" height="100px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" />
<img width="100px" height="100px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />
<img width="90px" height="90px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
</div>

