let randomNumber1 = Math.floor(Math.random() * 6) + 1; //generira od 1-6 random
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let randomImageSrc1 = "images/dice" + randomNumber1 + ".png";
let randomImageSrc2 = "images/dice" + randomNumber2 + ".png";

let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");

img1.setAttribute("src", randomImageSrc1);
img2.setAttribute("src", randomImageSrc2);

let h1 = document.querySelector("h1");

if (randomNumber1 > randomNumber2) {
  h1.textContent = "Player1 winner";
} else if (randomNumber1 < randomNumber2) {
  h1.textContent = "Player2 winner";
} else {
  h1.textContent = "Draw";
}

let button = document.querySelector("button");
