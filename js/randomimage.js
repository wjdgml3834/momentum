const images = ["0.jpeg", "1.jpeg", "2.jpeg"];
const randomBox = document.querySelector("#randomBox");

const chosenImage = images[Math.floor(Math.random() * images.length)];

const shoes = document.createElement("img");
const title = document.createElement("h3");
const name = document.createElement("span");
const cost = document.createElement("span");
const br = document.createElement("br");
const link = document.createElement("a");

shoes.src = `img/${chosenImage}`;
shoes.width = 120;
shoes.style.borderRadius = "50px";
shoes.style.border = "3px solid hotpink";
title.innerText = "<오늘의 클라이밍화 추천>";
link.href =
  "http://www.ambyuk.com/m/product_list.html?xcode=430&type=N&mcode=002&viewtype=gallery";
link.target = `_blank`;
randomBox.appendChild(title);
randomBox.appendChild(link);
link.appendChild(shoes);
randomBox.appendChild(br);
randomBox.appendChild(name);

if (chosenImage === images[0]) {
  name.innerText = "라스포르티바 씨어리";
} else if (chosenImage === images[1]) {
  name.innerText = "스카르파 인스팅트 VSR";
} else {
  name.innerText = "스카르파 드라고";
}
