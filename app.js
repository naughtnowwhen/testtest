'use strict';

//realized that negative condition for the else condition in my stateguess is going to run into trouble because there are many instances when [i] !== guess which will result in the else condition, even when true at another index. the iterating 'if' is overly focused, only at that one index and is blind to the other indexes...

// This appears to be a myopic problem. only aware of what's right in front of it at the moment, ignoring important context around it...

//some solutions that come to mind...

//setting a var called something like hasFound, set it = false, and if the if statement finds a match turn it to true, and take note of the correct match index...

// put the names in a temporary state name array and use the includes method on it, can't use the includes method with my 'if for loop' because it's having to check for obj.name at each index, the names are nested to where 'includes method' can't reach them I don't think. so a temp array will help.

// only have an if statement, ignore the else if, else conditions, and safely assume if their guess does not pass the if statement, it's not there...

var x = 1;

var State = function (name, message) {
  this.name = name;
  this.message = message;
  this.success = false;
};

var wa = new State('wa','live now');
var ca = new State('ca','sunny part');
var nv = new State('nv', 'so hot and trashy');
var or = new State('or', 'love it there');
var fl = new State('fl', 'too hot and flat for me');

var statesBeen= [wa, ca, nv, or, fl];
// console.log(statesBeen, 'statesbeen', 'that works');

let returnedState;
let modifiedStatesBeen = statesBeen;
let indexOfCorrectGuess;
let correctGuessAmount = 0;
let correctStateGuess = [];
let totalWrong = [];

var guesser = function () {
  let guessStore = prompt('take a guess');
  return guessStore;
};




var tries = 6;




// ---------------------------- stateGuesser()---------------------------------------
var stateGuesser = function(){
  if (tries <= 0){
    alert ('no guesses left');
    return false;
  }
  if(modifiedStatesBeen.length <= 0){

  }
  let hasFound = false;
  let guess = guesser();

  for(var i = 0; i < modifiedStatesBeen.length; i ++){
    if(guess === modifiedStatesBeen[i].name){
      tries--;
      if (tries <= 0){
        alert ('no guesses left');
        return false;
      }
      alert('good guess');
      alert(modifiedStatesBeen[i].message);
      hasFound = true;
      indexOfCorrectGuess = [i];
      returnedState = modifiedStatesBeen[i];
      correctStateGuess.push(returnedState.name);
      correctGuessAmount++;
      modifiedStatesBeen.splice(indexOfCorrectGuess, 1);
    }
  }
  if(hasFound === false){
    tries --;
    if (tries <= 0){
      alert ('no guesses left');
      return false;
    }
    alert('sorry');
    stateGuesser();
  }
};
// --------------<<<------------ stateGuesser()---------------------------------------



var gameOver = function(){
  var wrong = [];
  for(var i = 0; i < modifiedStatesBeen.length; i ++){
    wrong.push(modifiedStatesBeen[i].name);
  }

  for (var i = 0; i < correctStateGuess; i ++){
    console.log(correctStateGuess[i].name);

  }

  alert(`thank you for playing, your total state guesses = ${correctGuessAmount}, your correct state guesses were : ${correctStateGuess} the ones you didn't guess were : ${wrong}`);

};

while(tries > 0 && modifiedStatesBeen.length > 0){
  stateGuesser();
  if(tries <= 0 || modifiedStatesBeen.length <= 0){
    gameOver();
  }

}











//that's right! the trouble with iterating over a whole array of stuff and asking target !== possibilites, there's going to be a lot of mess, because target is bound to not be at many indexes, which will return unwanted.

