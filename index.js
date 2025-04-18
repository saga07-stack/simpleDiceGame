function dice () {
let randomNumber1 = Math.floor(Math.random() * 6) + 1;
 
let newDiceImage = "./images/dice"+randomNumber1+".png";
document.querySelector(".img1").src = newDiceImage;

let randomNumber2 = Math.floor ( Math.random()*6)+1;
let newDiceImage2 = "images/dice"+randomNumber2+".png";
document.querySelector(".img2") .src = newDiceImage2;
let title = document.querySelector("h1");
 if (randomNumber1 > randomNumber2) {
     title.innerHTML = "player 1 wins!";
     } else if (randomNumber1 < randomNumber2) {
    title.innerHTML = " player 2 wins!";

 }else {
    title,innerHTML = "draw!";
 }
}
window.onload = dice;

