// Create a random bumber between 1 and 6 and save it to a variable randomNumber1

var randomNumber1 = Math.floor(Math.random() * 6) + 1;

// create dice image dice1.png - dice6.png

var randomDiceImage = "dice" + randomNumber1 + ".png";

// create random image source image/dice1.png - image/dice6.png

var randomImageSource = "images/" + randomDiceImage;

// Select first image tag

var image1 = document.querySelectorAll("img")[0];

// chamge the image src

image1.setAttribute("src", randomImageSource);

// PLAYER 2

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

//Condition to see if player 1 is higher than player2

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🥇  Player 1 wins ";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 wins 🥇";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}