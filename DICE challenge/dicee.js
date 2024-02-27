var randomNumber1;
randomNumber1 = Math.random()*6;
randomNumber1 = Math.floor(randomNumber1)+1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "Images/" + randomDiceImage;

image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);

var randomNumber2;
randomNumber2 = Math.random()*6;
randomNumber2 = Math.floor(randomNumber2)+1;

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomImageSource2 = "Images/" + randomDiceImage2;

image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins";
}
else{
    document.querySelector("h1").innerHTML = "Draw";
}
