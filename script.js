"use strict";

//btns
let againbtn=document.querySelector(".again");
let bigNumber=document.querySelector('.number');
let numInput = document.querySelector('.guess');
let scoreText = document.querySelector('.score');
let highScoreText = document.querySelector('.highscore');
let checkbtn = document.querySelector('.check');
let messageText = document.querySelector('.message');
let bodyEle = document.querySelector('body');

let highScoreValue=0;
let scoreValue=20;
//to find your secert number
let secertNumber = Math.random()*20+1;
secertNumber = Math.floor(secertNumber);
console.log(secertNumber);

checkbtn.addEventListener( 'click' ,function(event){
    let numInt = numInput.value *1;
    if(numInt === secertNumber){
        bigNumber.textContent=numInt
        bodyEle.style.backgroundColor='green';
        //
        messageText.textContent = " Correct Number!!";
        //compare high score vs score
        if(scoreValue > highScoreValue){
            highScoreValue = scoreValue;
            highScoreText.textContent=highScoreValue;
        }
    }
    else if (numInt < secertNumber)
    {
        messageText.textContent="TOO LOW!!!";
        scoreValue -=1;
        scoreText.textContent=scoreValue;
    }
});