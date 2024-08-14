const form=document.querySelector('.form')
let randomNumber=parseInt((Math.random()*100 + 1));
const submit=document.querySelector('#submit');
const userInput=document.querySelector('#guessField');
const guessSlot=document.querySelector('.guesses');
const remaining=document.querySelector('.lastResult');
const lowOrHi=document.querySelector('.lowOrHi');
const startOver=document.querySelector('.result')
const div=document.createElement('div');
div.style.backgroundColor="white";
div.style.borderRadius="8px"
div.style.paddingLeft="6px"
div.style.border="2px solid black";
div.style.fontFamily="Gill Sans"

let prevGuess=[];
let numOfGuess=1;
let playGame=true;
if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();//server mah janu bata hold garxa.
        const guess= parseInt(userInput.value)
        console.log(guess)
        validateGuess(guess)
    })
}
function validateGuess(guess){
    //check valid guess
    if(guess===isNaN(guess)||guess < 1||guess >100){
        alert('please enter a valid number')
    }
    else{
        prevGuess.push(guess);
        if(numOfGuess ===11){
            displayGuess(guess);
            displayMessage(`Game Over.Random number was ${randomNumber}`)
            endGame()
        } else{
            displayGuess(guess);
            checkGuess(guess)
        }
    }

}
function checkGuess(guess){
//message print low or high or equal
if(guess===randomNumber){
    displayMessage('You guesse it right.')
    endGame()
}
else if (guess < randomNumber) {
     displayMessage(" Guessed Number is Lower than random.")
}

else if (guess > randomNumber) {
    displayMessage("Guessed Number is Higher than random.")
}
}
function displayGuess(guess){
      userInput.value='';
      guessSlot.innerHTML += `${guess}  `
      numOfGuess++;
      remaining.innerHTML=`${12-numOfGuess}`
}
function displayMessage(message){
    //display message
    lowOrHi.innerHTML =`<h4>${message}</h4>`
}
function newGame(){
     const newGame=document.querySelector('#newGame')
    newGame.addEventListener('click',function(e) {
          randomNumber=parseInt((Math.random()*100 + 1));
          prevGuess=[];
          numOfGuess=1;
          guessSlot.innerHTML='';
          remaining.innerHTML=`${12-numOfGuess}`
          userInput.removeAttribute('disabled')
          startOver.removeChild(div);
          displayMessage("")


        playGame=true
    })
     
}
function endGame(){
    userInput.value=''
    userInput.setAttribute('disabled','')
    div.classList.add('button')
    div.innerHTML=`<h3 id="newGame">Start New Game</h3>`
    startOver.appendChild(div);
    playGame=false;
    newGame();
}