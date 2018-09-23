// 'use strict';



var globalCorrectArray = [];

//---------------------- Country Constructor -----------------------------------

var CountryObj = function(country, correctAnswer, hint, img) {
  // ----borrowed code (!new.target) throw ... -----
  if(!new.target) throw 'CountryObj must be called with new';
  this.country = country;
  this.correctAnswer = correctAnswer;
  this.success = false;
  this.hint = hint;
  this.space = '';
  //   this.div = document.createElement(`div${this.country}`);
  //this local div will get appended to the main div.

  globalCorrectArray.push(this.correctArray);
};

CountryObj.prototype.log = function(){
//   console.log(this.country);
};


// consider renaming it, as not .elseif
///---------------------------.ELSE IF PROTOTYPE --------------------------------------------
CountryObj.prototype.elseif = function (askAgain){
  var doYouWantHint = prompt('do you want a hint? answer with yes or no, please ');

  if(doYouWantHint === 'yes'){
    alert(this.hint);
  }

  else

  // console.dir(CountryObj.prototype);

  // --------------------------- where it breaks ----------------------------------------
  // it breaks here because it's not accessing this.correctAnswer
  // the if statement is able to access this.correctAnswer

  // this from Dev Tools spells out the problem

  // app.js:154 this is this.correctAnswer in the else if condition no
  // app.js:106 this is this.correctAnswer right inside .elseif :::  undefined

  // it goes from no to undefined from the else if to the prototype.elseif
  // so this.correct is different or the .elseif proto doesn't have access, right?



    console.log('this is this.correctAnswer right inside .elseif ::: ' , this.correctAnswer);


  // console.log('this is germanCountry from inside .elseif ', germanCountry, ' passes ::: true ');
  // console.log('this is germanCountry.correctAnswer from inside .elseif ',
  // germanCountry.correctAnswer, ' passes ::: true');




  //   console.log('getting into the else if function?' , 'yes i am');
  //   console.log('the following is what is being passed askAgain ', askAgain);
  var turns = 4;
  while(askAgain !== this.correctAnswer){

    turns --;

    if(turns <= 0){
      alert('sorry, too many tries');
      return false;
    }
    askAgain = prompt('please try again, have i been to ', this.country);
    console.log('this is askAgain right after the turn decrementor ', askAgain);
    console.log('this is this.correctAnswer right after the decrementor' , this.correctAnswer);


    if (askAgain === this.correctAnswer){
      console.log('this is askAgain right inside the if statement that checks === again. ', askAgain);
      console.log(askAgain === this.correctAnswer,'askAgain === this.correctAnswer');
      console.log('does the wrong become right?', 'no it does not!');
      this.truthTest(askAgain);
    //   this.prototype.truthTest(askAgain);
    // only say prototype in the declaration not the call


    }
  }
};

CountryObj.prototype.truthTest = function(asked) {
  if (asked === this.correctAnswer){
    this.success = true;
    alert(this.success);
    return true;
  }

  var asked = prompt('have i been to ', this.country);
  console.log(asked, 'asked');

  if (asked === this.correctAnswer){
    console.log('this is this.correctAnswer if it equesls asked ::: ', this.correctAnswer, 'passes ::: true');
    this.success = true;
    alert(this.success);
    return true;
  }

  // don't refer to these methods as protos they are attached to the proto
  else if(asked !== this.correctAnswer){
    console.log('getting here?', 'yes i am');
    console.log('this is asked in the else if condition ::: ', asked);
    console.log('this is this.correctAnswer in the else if condition', this.correctAnswer, ' passes ::: true');

    this.elseif();

  }
};



var germanCountry = new CountryObj('germany', 'no', 'ive only been to one European country');

var canadaCountry = new CountryObj('canada', 'yes','Im from Americas Canada, so...');
var brazilCountry = new CountryObj('brazil', 'yes', 'Rio has tons of beauty and squalor');
var franceCountry = new CountryObj('france', 'yes', 'their southern coast sure is amazing');
var unitedArabEmirates = new CountryObj('United Arab Emirates', 'yes', 'who learns to snowboard in the desert?! An absurd idea!');

// all countries array
var allcountries = [germanCountry, canadaCountry, brazilCountry, franceCountry, unitedArabEmirates];

//calls truth test on each one.
// for (var i = 0; i < allcountries.length; i ++){
//   allcountries[i].truthTest();
// }

let correctOnes = [];

//pushes correct guesses
// got to put it into a function so that i can call it after each .truthTest()

var successChecker = function(){
  for (var i = 0; i < allcountries.length; i ++){
    if(allcountries[i].success === true){
      correctOnes.push(true, allcountries[i].country);
    }
  }
};

var divTargetter = document.getElementById('mainDiv');


var caller = function(){
  for (var i = 0; i < allcountries.length; i ++){
    allcountries[i].truthTest();
  }


};

// var refresher = function(){
//   console.log(divTargetter);

//   var firstElement = document.createElement('li');
//   firstElement.innerHTML = germanCountry.country;
//   console.log(firstElement);
//   divTargetter.appendChild(firstElement);

//   var secondElement = document.createElement('li');
//   secondElement.innerHTML = germanCountry.success;
//   console.log(secondElement);
//   divTargetter.appendChild(secondElement);
// };

// refresher();


// for loop
// 1) targetting - divTargetter line 150
// 2) creating -
// 3)
// 4)



// creates a bunch of lis for [i] and puts [i] in them to display to the screen.
//automater works...
// var createElementArray =[];
// var automater = function (){
//   for(var i = 0; i < 20; i++){
//     createElementArray[i] = document.createElement('li');
//     createElementArray[i].innerHTML = [i];
//     console.log(createElementArray[i]);
//     divTargetter.appendChild(createElementArray[i]);
//   }
// };
// automater();


// ok, very good, that works, nice, it gets the image to the screen.
// var imgPlacer = function() {
// // comment out for now the for loop, just get it to work once, first...
// // for(var i = 0; i < allcountries.length; i ++){
// var createImgEl = document.createElement('img');
// console.log(createImgEl);
// createImgEl.src = germanCountry.img;
// console.log(createImgEl);
// divTargetter.appendChild(createImgEl);
// // }
// };
// imgPlacer();

// and now every country object will createEl its own div, hmm?

// and now time for a generalized function that will take any country and put its contents onto the screen.



//what do i want to pass to diplayer?
// acountry obj?

//divTargetter is already taken care of

// var Displayer = function(objCountry){

//   // and createEl will get [i] behind it like this createEl[i]
//   // Object.keys(germanCountry).length results in length 6,
//   // so we want to iterate over this length and create an element for each, right?

//   // right because hard coding like i did here is not good for generalzing
// //    createEl.innerHTML = allcountries[0].country;

//   var createEl = document.createElement('li');
//   console.log(createEl);
//   createEl.innerHTML = allcountries[0].country;
//   console.log(createEl);
//   divTargetter.appendChild(createEl);

// };

// Displayer(allcountries);

caller();

var arrOfProperties;

// `<div id="${objCountry.country}"></div>`
// divMaker.innerHTML = `id='objCountry.country'`;

var singleCountryCreateEls = function(objCountry) {

  var arrOfDescripts =[' "this is the country" ',' "this is the correct answer" ',' "did you guess correctly" ', ' "this is the hint" ', ''];

  var elArray = [];
  arrOfProperties = Object.values(objCountry);

  for (var i = 0; i < Object.keys(objCountry).length; i++){
    elArray[i] = document.createElement('li');
    //if statement that catches if an img is being passed, if it is, don't push it as an li, push it as an img.
    //so yes that creates the right amount of Els, what is the best way to manage them? A simple array huh?
    elArray[i].innerHTML = arrOfDescripts[i] + arrOfProperties[i];
    divTargetter.appendChild(elArray[i]);
  }
};

singleCountryCreateEls(germanCountry);
singleCountryCreateEls(canadaCountry);
singleCountryCreateEls(brazilCountry);
singleCountryCreateEls(franceCountry);
singleCountryCreateEls(unitedArabEmirates);


// 2 questions
// having each country get its own div
// including a string description for value for each country


//realized that negative condition for the else condition in my stateguess is going to run into trouble because there are many instances when [i] !== guess which will result in the else condition, even when true at another index. the iterating 'if' is overly focused, only at that one index and is blind to the other indexes...

// This appears to be a myopic problem. only aware of what's right in front of it at the moment, ignoring important context around it...

//some solutions that come to mind...

//setting a var called something like hasFound, set it = false, and if the if statement finds a match turn it to true, and take note of the correct match index...

// put the names in a temporary state name array and use the includes method on it, can't use the includes method with my 'if for loop' because it's having to check for obj.name at each index, the names are nested to where 'includes method' can't reach them I don't think. so a temp array will help.

// only have an if statement, ignore the else if, else conditions, and safely assume if their guess does not pass the if statement, it's not there...


alert('now please guess the states i\'ve lived in, there are 5');
alert('please input in lowercase two letter acronymn format, for example ak for arkansas');

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


var wrong = [];

var gameOver = function(){
  for(var i = 0; i < modifiedStatesBeen.length; i ++){
    wrong.push(modifiedStatesBeen[i].name);
  }

  for (var i = 0; i < correctStateGuess; i ++){
    console.log(correctStateGuess[i].name);

  }

  alert(`thank you for playing, your total state guesses = ${correctGuessAmount}, your correct state guesses were : ${correctStateGuess} the ones you didn't guess were : ${wrong}`);

};

var stateCreater = function(){
  var elCreater = document.createElement('li');
  console.log(elCreater, 'elCreater');
  elCreater.innerHTML = `thank you for guessing the states i've lived in, your total state guesses = ${correctGuessAmount}, your correct state guesses were : ${correctStateGuess} the ones you didn't guess were : ${wrong}`;
  console.log(elCreater, 'elCreater');
  divTargetter.appendChild(elCreater);
};

while(tries > 0 && modifiedStatesBeen.length > 0){
  stateGuesser();
  if(tries <= 0 || modifiedStatesBeen.length <= 0){
    gameOver();
    stateCreater();
  }
}




quiz = function(){
  var right = false;
  var dec = 4;

  var userName;
  var num;
  var guess;

  userGuess = function(){
   takeAGuess = parseInt(prompt('guess a number between 1 and 10'));;
    return takeAGuess;
  };


  numPicker = function(){
    num = (Math.floor(Math.random() * 10));
    return num;
  };

  num = numPicker();

  var iffer = function(guess) {
    dec --;
    console.log(dec, 'dec');
    if(dec <= 0){
      alert('sorry too many tries');
      return false;
    }


    guess = userGuess();
    console.log(num);

    if (num === guess) {
      alert('that is right');
      right = true;
      console.log(right);
    }

    else if (num!==guess){
      elseif(guess);
    }

    // else
    // alert('show up');

  };

  elseif = function (guess){
    console.log(guess);

    if (guess > num){
      alert('its high');
      iffer();
    }

    else if (guess < num){
      alert('its low');
      iffer();
    }
  };
  iffer();
};
quiz();




// // comment back in caller()






// //that's right! the trouble with iterating over a whole array of stuff and asking target !== possibilites, there's going to be a lot of mess, because target is bound to not be at many indexes, which will return unwanted.

