const quotes = [
  {
    quote:
      "등산은 대가를 요구하지 않는 인간의 의식과 행동이며, 자연에 대한 가장 순수하고 가혹하며 신중한 도전이다.",
    author: "-리오넬 테레이-",
  },
  {
    quote:
      "클라이밍은 나에게 스포츠 이상이다. 클라이밍은 자유에 관한 모든 것이다. ’ ",
    author: "-라인홀트 메스너-",
  },
  {
    quote:
      " 내가 큰 우정을 느낀 것은 어려운 등산을 하는 동안이며, 산이 무서운 힘으로 저항해 왔을 때다",
    author: "-로베르 파라고-",
  },
  {
    quote:
      "클라이밍은 위대한 행위이다. 무언가를 만들어 내서가 아니라 그 행위 자체가 위대한 것이다. ",
    author: "-로열 로빈슨-",
  },
  {
    quote:
      "'왜 나는 산에 오르는가?' 이 물음에 대답할 말이 없다. 다만 어떻게 해서든지 올라가야겠다는 것 뿐이다.",
    author: "-마르쿠스 슈무크-",
  },
  {
    quote:
      "우리 생활 속에 남이 있는 비록 일시적이나마 완전한 자유로운 삶의 방식 하나가 등산이다.",
    author: "-폴베이사르-",
  },
  {
    quote:
      "등산가는 산의 법칙에 따라 행동할 줄 아는 사람이며 언제나 배워야 한다고 느끼는사람이다.",
    author: "-헤르만 후버-",
  },
  {
    quote: "산은 땅의 불멸의 기념비이다.",
    author: "-나다니엘 호손-",
  },
  {
    quote:
      "만약 등산가가 될 팔자를 타고났다면 언제가는 어쩔 수 없는 힘으로 산에 끌려가리라",
    author: "-리카르도 카신-",
  },
  {
    quote: "산이 거기 있기에 오른다 ",
    author: "-조지 말러리-",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
