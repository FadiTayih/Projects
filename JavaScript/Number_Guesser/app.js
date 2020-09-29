
// Initial Values

let min = 1,
    max = 10,
    winnumber = getRandomNumber(min,max),
    guessleft = 3;


//  UI Elements

const game = document.querySelector('#game'),
      UImin = document.querySelector('.min-num'),
      UImax = document.querySelector('.max-num'),
      UIinput = document.querySelector('#guess-input'),
      UIbtn = document.querySelector('#guess-btn'),
      UImessage = document.querySelector('.message');


// Assign the UI Element to intial values

UImin.textContent = min;
UImax.textContent = max;


// Play again listner

game.addEventListener('mousedown', function(e){
    
    if(e.target.className === 'play-again'){
        window.location.reload();
    }
})

// List the button guess click

UIbtn.addEventListener('click', function(){
    
    let guess = parseInt(UIinput.value);

    if(isNaN(guess) || guess < min || guess > max){

        setMessage(`Please Enter a number between ${min} and ${max}`, 'red');
    }

    // Check if the user won

    if(guess === winnumber){
        // Game Over won
      
        gameOver(true, `${winnumber} is the correct answer`);

    }
    else{
        guessleft -= 1;

        if(guessleft === 0){
            // Game over losst
    
            gameOver(false, `Game Over , The correct answer was ${winnumber}`);
        }
        else{
            // Game contine

            setMessage(`${guess} is incorrect, ${guessleft} guesses are left`, 'red');

            UIinput.disabled = false;

            UIinput.value='';

        }

    }
});

// Game over

function gameOver(won, msg){

    let color;
     won === true ? color ='green' : color ='red';

    UIinput.disabled = true;

    // Change the color of the input 
    UIinput.style.borderColor = color;

    UImessage.style.color = color;

    // Tell the user that the color is green
    setMessage(msg);


    // Play Again
    UIbtn.value = 'Play Again';
    UIbtn.className = 'play-again';

}

// Get a random number

function getRandomNumber(min, max){

   return Math.floor(Math.random() * (max-min +1)+min);
}


function setMessage(msg, color){
    UImessage.style.color= color;
    UImessage.textContent = msg;
}