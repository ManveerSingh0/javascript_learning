'use strict';
/*
console.log(document.querySelector('.message').textContent);
console.log(document.querySelector('.message').textContent = "🥳 Correct Number ");


document.querySelector('.number').textContent   = 14;
document.querySelector('.score').textContent    = 20;


document.querySelector('.guess').value  = 23;
console.log(document.querySelector('.guess').value);
*/

let secret_number = Math.trunc(Math.random() * 20) + 1;
let score = 5;




function log_into_console(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess , typeof guess);

    if(!guess){
        document.querySelector('.message').textContent = "⛔ NO Number";
    }
    else if(guess === secret_number){
        document.querySelector('.message').textContent = "You Won!!!";
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = "30rem";
        document.querySelector('.number').textContent = secret_number;

    }
    else if(guess > secret_number){
        if(score > 1){
            document.querySelector('.message').textContent = "Too High";
            score--;
            document.querySelector('.score').textContent = score;
        }
        else{
          document.querySelector('.message').textContent = "You lost the game";
          document.querySelector('.score').textContent = 0;
          document.querySelector('body').style.backgroundColor = 'red';

        }
        
    }
    else if(guess < secret_number){
        if(score > 1){
            document.querySelector('.message').textContent = "Too Low";
            score--;
            document.querySelector('.score').textContent = score;
        }
        else{
          document.querySelector('.message').textContent = "You lost the game";
          document.querySelector('.score').textContent = 0;
          document.querySelector('body').style.backgroundColor = 'red';

        }
    }
}

document.querySelector('.check').addEventListener('click' , log_into_console);


document.querySelector('.again').addEventListener('click', function restart(){
    document.querySelector('body').style.backgroundColor = '#222';
    score = 5;
    document.querySelector('.score').textContent = score;   
    document.querySelector('.message').textContent = "Start guessing...";
    document.querySelector('.number').textContent = "?";
    document.querySelector('.guess').value = ' ';
    secret_number = Math.trunc(Math.random() * 20) + 1;
});
