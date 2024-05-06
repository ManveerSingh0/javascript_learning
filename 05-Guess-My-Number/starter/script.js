'use strict';
/*
console.log(document.querySelector('.message').textContent);
console.log(document.querySelector('.message').textContent = "🥳 Correct Number ");


document.querySelector('.number').textContent   = 14;
document.querySelector('.score').textContent    = 20;


document.querySelector('.guess').value  = 23;
console.log(document.querySelector('.guess').value);
*/

const secret_number = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secret_number;


function log_into_console(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess , typeof guess);

    if(!guess){
        document.querySelector('.message').textContent = "⛔ NO Number";
    }
    else if(guess === secret_number){
        document.querySelector('.message').textContent = "You Won!!!";
    }
    else if(guess > secret_number){
        document.querySelector('.message').textContent = "Too High";
    }
}

document.querySelector('.check').addEventListener('click' , log_into_console);
