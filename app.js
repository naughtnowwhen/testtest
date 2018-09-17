'use strict';

//countries
var bigObj = {};
var countries = ['Canada', 'Chile', 'France', 'UAE', 'Brazil'];

// no, realized i don't want to pass country into responseTruthChecker,
// the country is irrelevant here, the relevance is if their response === correctAnswer, if it does, then set boolCorrect from false, to true.

// -----------------considering what to pass in, variables, or this.variables?----------
// so the function arguments will just be the variable names, since they're placeholders for logic...

//the logic, the guts of the function is where i'll pass this.variables and return with a this.

// ----------<<<----considering what to pass in, variables, or this.variables?----------




var responseTruthChecker = function (userGuess, correctAnswer, boolCorrect) {
  if (this.correctAnswer.includes(this.userGuess))
    console.log(userGuess);
  boolCorrect = true;

  // ------------------------array based, possibly suited for troubleshooting ----------------
  // maybe the next line could help with troubleshooting, but this is an array based way of dealing with the problem, and i want objects as much as possible. for now comment out.
  //   correctResponse.push(prompted);
  // ------------<<<---------array based, possibly suited for troubleshooting ----------------

  //------------------------ alerting from inside responseTruthChecker ----------------
  // seems clunky since the task of alerting and checking truth are distinct and this may be a good example of function overloading, discrete functions as much as possible, right?
  // will comment in and out for troubleshooting.
  alert('you got it!');

//---------------<<<------ alerting from inside responseTruthChecker ----------------

};

var askerFunction = function (question) {
  // console.log(question, ' the questions');
  var asker = prompt(question, 'im prompting');
  //   userGuess.push(question);
  // var smallObj.asker = question[];
  // console.log(question,'smallObj.asker[i]');
  console.log(question);
//   return asker;

};



//


// named it country set because it's a set with relevant info pertaining to a country, the country, the correct answer, the boolCorrect, etc... sort of thinking of it like a flash card.

//want to default to universal conditions, like null, false, the bare bones.

// Oh! just make the functions in CountrySet! instead of prototype

var CountrySet = {
  country : null,
  correctAnswer : null,
  boolCorrect : false,
  //commenting out because I'm not sure it works yet, but this is the right idea.
  //

  // ok, i'm glad i can call functions now, but how to pass arguments to them?
  userGuess : function () {
    var asker = prompt(question, 'im prompting');
    console.log(question);
    return asker;
  },
  attempts : [],
  correctMessage : null,
  wrongMessage : null,
  hints : [],


};

// ok so i hit seeming limitations with CountrySet and Object.create
//will try a different method. a simple object... with methods attached
// will eventually want to have my objects linked up with their appropriate methods.

var globalCorrectArray = [];

var CountryObj = function(country, correctAnswer) {
  // ----borrowed code (!new.target) throw ... -----
  if(!new.target) throw 'CountryObj must be called with new';
  this.country = country;
  this.correctAnswer = correctAnswer;
  this.success = false;
  this.correctArray = [];
  globalCorrectArray.push(this.correctArray);
};

CountryObj.prototype.log = function(){
  console.log(this.country);
  
};



///---------------------------.ELSE IF PROTOTYPE --------------------------------------------
CountryObj.prototype.elseif = function (askAgain){
    console.dir(CountryObj.prototype);

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
    askAgain = prompt('please try again');
    console.log('this is askAgain right after the turn decrementor ', askAgain);
    console.log('this is this.correctAnswer right after the decrementor' , this.correctAnswer);


    if (askAgain === this.correctAnswer){
      console.log('this is askAgain right inside the if statement that checks === again. ', askAgain);

      console.log('does the wrong become right?', 'no it does not!');
      this.prototype.truthTest(askAgain);
    }
  }
};

CountryObj.prototype.truthTest = function(asked) {
  var asked = prompt('have i been to ', this.country);
  if (asked === this.correctAnswer){
    console.log('this is this.correctAnswer if it equesls asked ::: ', this.correctAnswer, 'passes ::: true');
    this.success = true;
    this.correctArray.push(true);
    alert(this.success);
    return true;
  }

  else if(asked !== this.correctAnswer){
    console.log('getting here?', 'yes i am');
    console.log('this is asked in the else if condition ::: ', asked);
    console.log('this is this.correctAnswer in the else if condition', this.correctAnswer, ' passes ::: true');

    CountryObj.prototype.elseif(asked);

  }
};

var germanCountry = new CountryObj('germany', 'no');

// germanObj.prototype.askUser = function(this.country){
// var asked = alert('did you go to', this.country);
// };



//
// CountrySet.prototype.askerFunction = function(question){
//   // console.log(question, ' the questions');
//   var asker = prompt(question, 'im prompting');
//   //   userGuess.push(question);
//   // var smallObj.asker = question[];
//   // console.log(question,'smallObj.asker[i]');
//   console.log(question);
//   //   return asker;
// };


var country1 = Object.create(CountrySet);
country1.country = 'Canada';
country1.correctAnswer = 'yes';
country1.boolCorrect = false;

// askerFunction();

var askerFunction = function (question) {
  var asker = prompt(question, 'im prompting');
  console.log(question);
  //   return asker;
};



// hard coded basic object
var firstObj = {
  country : 'Canada',
  correctAnswer : 'yes',
  boolCorrect : false,
  userGuess : function (question) {
    var asker = prompt(question, 'im prompting');
    console.log(question);
    //   return asker;
  },
  attempts : [],
  correctMessage : 'yep, ive been to Canada',
  wrongMessage : 'sorry, guess again',
  hints : ['maple syrup', 'hockey','moose'],

// --------------------------- wondering about this. access ---------------------------

//                   ------- reason for wanting this.access -----
// the following is a key called 'checker' only for troubleshooting purposes,
// the first implementation i want to do with this. is to make a key called something like truthCheckerFunction, whose property is a call to that function (prototype?) with this.correctAnswer and this.userGuess as arguments, make the comparison, and if they match,
// to set this.boolCorrect to true.
//                   ---<<<-- reason for wanting this.access -----

// -------------- !!! relevant observation in the haze of codeblindness  --------------------
// I realized i'm not able to call this.country for the 'checker' key below, not remembering i was able to call this.country as an argument to askerFunction that belongs to the key 'userGuess'. What's the important difference here? is the function what allows for this?
// need to experiment more.

// interesting, i know that firstObj.userGuess is associated with a function, so how to call it as a function through firstObj.userguess_____ ?
// firstObj.userGuess results in whatever the user entered to the response.
// firstObj.userGuess() ... results in
// TypeError: firstObj.userGuess is not a function
// and I know that it's not a function, but it's paired with one! So how to call its pair?
// i'm reminded of Object.values
// because the function to call is a value paired with my callable key, perhaps i can call it with something like

// Object.values(firstObj)


// better yet, something more targeted... Object.values(firstObj.userguess)
// that's not the execution, but it is the idea.

// ----------------- !!! Oh, i think it's because askerFunction is returning down to a value, in this case a string... so for troubleshooting, comment out the return and just console.log or alert to see if it shows up.

// I know that askerFunction is a function, after I commented out the return firstObj.userGuess results in undefined. How to get firstObj.userGuess to recognize that it's holding a function?

// as if i need proof, but here's proof, it's a function... asking in Dev Tools
// typeof askerFunction
// "function"


// ---------------- Not able to recognize from firstObj that userGuess boils down to a function. so time bring askerFunction's return back from commented_Out and try another path.
// i'm thinking that path is constructor...

// But think of what i learned, functions can be called directly from the key/value pairs in an object, but it seems that managing them is tricky. And that's where i think prototypes come in.

// I want my key/value pairs to be able to talk and share with each other...


// possible workaround for now until i have a better sense of objects, constructors and functions working with each other...
// it's important to consider that I was able to access this.country from the function referenced by userGuess.

//------------------ !!! caught important mistake and faulty assumption -------------------
// in the previous lines i was writing about how i was able to work with this.country from the firstObj. but no! That was wrong and something I could have caught earlier with a console.log... console logging askerFunction's question (what's passed to it as an argument)
// is undefined! so it's not working!
// Which leads my hunch back to constructors and prototypes.
// I need to be able to work fluidly and specifically with my key/values, and methods that can access them!


// -------------- !!! relevant observation in the haze of codeblindness  --------------------



//   checker : firstObj.country,
//   checker : firstObj,
//   checker : country
//   checker : this.country
//  all result in errors, how to access neighbor values from inside the object
//  I think this is an example of needing a constructor, for all this information to inherit
//  this. accesibility.
// hmm, so checker : country results in error, country is undefined
// checker : this.country results in undefined.


// ------------<<<------------ wondering about this. access ---------------------------



// --------------------------- experimenting with this. access ---------------------------

// And how to check? Copy paste this firstObj and refactor it into a constructor? So that i can check for this. access?

// or just new firstObj?
// haha, tried to cheat and wrote ...

// var firstObjvar = new firstObj;

// which results in not a constructor error, which leads me to believe that yes, i need a constructor.


// -----------------<<<------- experimenting with this. access ---------------------------




};

bigObj[0]= firstObj;

//in qoutes now because they don't exist yet.
bigObj[1]= 'secondObj';
bigObj[2]= 'thirdObj';
bigObj[3]= 'fourthObj';








//something like this
// var ask = askedFunction () {var asked = prompt('have I been to' + firstObj.country) return asked};

//eventually it'll look something like this.
// firstObj.prototype.askerFunction = {
//     if (if userGuess.includes(correctAnswer)){
//     this.boolCorrect = true;
//     this.attempts++;
//     };



//look in the read me file for 2 examples of smallObject examples that could go in the big objects.



// these global vars ought to be migrated into each small object.
var CorrectAnswer = ['y', 'n,', 'y', 'y'];
var boolCorrect = false;
var correctCounter = [];
var userGuess = [];

var smallObj = {
  asker : [],
};

//pseudocode for the concept of setting smallObj.asker equal to the first question in the array of countries
//
// smallObj.asker = CorrectAnswer[0];


//testing for loop
for (var j = 0; i < countries.length; i++) {
  console.log(countries[j]);
}
// for loop test passes, which of course it would, the problem was further down the line


for (var i = 0; i < countries.length; i++) {
  // console.log(countries[i], 'show');

  // i can comment out this askerFunction since i migrated it to the top... think about a good place to put it.
  // -------------askerFunction-------------------
  var askerFunction = function (question) {
    // console.log(question, ' the questions');
    var asker = prompt(question, 'im prompting');
    userGuess.push(question);

    // var smallObj.asker = question[];
    // console.log(question,'smallObj.asker[i]');

    return asker;
  };

//-----------------<<<askerFunction-----------------------------------

// ???-------------does smallObj need an [i]?
// well, it depends on how to think about the small objects, if each smallObject is single collection of a question, answer, bool, userGuess, etc... then no, it wouldn't need an iterator, but if considering another class of small objects, like a smallObject that just has an array of questions, then might consider an iterator, but the goal is to get away from the iterator and use methods like .includes to replace iteration.
// ???------<<<----does smallObj need an [i]?-------------------------



//------------------------- smallObject vs. bigObject distinction---------------------------
// in coming back later and looking at this, it looks like the following pseudocode is the idea of the bigObject, not small, the iterator implies that a for loop is going to create a new key value pair for each country, correctAnswer, etc, but that's the job of the bigObject, to contain collections of info, while smallObjects, just contain single instances for simplicity and are managed collectively with bigObjects.

  // smallObj = {
  //     countries[i]: [i],
  //     CorrectAnswer[i]: [i],
  //     'boolCorrect': boolCorrect;
  //     userResponse: userGuess[i];
  // }

//-------------<<<--------- smallObject vs. bigObject distinction---------------------------



//------------------------thinking of ways to feed smallObjects info into big objects-------
//   let xHolder = [];
//     let [i] = Object.entries( smallObj.asker);
//     xHolder.push(i);
// //   bigObj[i] = xholder[i];
//-------------<<<--------thinking of ways to feed smallObjects info into big objects-------


//-------------an array iterator way of thinking of calling askerFunction on countries
// The smallObject version is to call ask function internally as a key that calls the value
// which is a call on askerFunction, passing this.country
//   askerFunction(countries[i]);
//-------------an array iterator way of thinking of calling askerFunction on countries

//-------------------------- overburdening a for loop---------------------------
// this is shoving too much in a for loop, need to think about discrete smallObjects, bigObjects, functions and loops that will streamline, and make naked for loops much more targeted.
//----------<<<------------- overburdening a for loop---------------------------

}


//------------------------first attempt at a truth checker function-------------------------
// take what's good, refactor the rest
// copying the idea of the code up to the top, line 4.


//     //checking countries , countries if they inclue the user response
//   var responseTruthChecker = function (prompted, countries, bool) {
//     if (countries.includes(prompted === a[a]))
//       bool = true;
//     correctResponse.push(prompted);
//     alert('you got it!');
//   };
//-------------<<<--------first attempt at a truth checker function-------------------------




// }
// //for
// // responseTruthChecker(askerFunction(prompted, countries, boolCorrect));

// //




// var myObj = {};
// for (var i = 0; i < countries.length; i++) {
//   myObj[i] = countries[i];
// }




//takes in a guess and see if that guess is included in the smallobjs countries list, should return true if that guess is in the array
// var isItThere = function (guess) {
//   var doesItInclude = countries.includes(guess);
//   console.log(doesItInclude);
//   return doesItInclude;
// };


// isItThere(userGuess[i]);

// isItThere[i] contains a boolean of whether the user guess was true or not, that var is called doesItInclude.

//the global variable array that holds it is called boolCorrect

// boolCorrect;

//function if boolCorrect[i] = true, then push it into userGuess.
// userGuess;


// var AreTheyRight = function(userGuess)
// if (isItThere(userGuess[i] === true)) {
//     alert('there!');
//     console.log(userGuess[i])
//     correctCounter ++;


// } else if (isItThere(!userGuess)) {
//     alert('your guess is not there');
// }

// AreTheyRight(userGuess[i])






//   !!!!!!!!!!!!!!!!!!     smallObjt



// smallObjcheck = {countries[0] : 0, CorrectAnswer[i] : 0. boolCorrect[0] : userGuess[0]}

//     bigObj[i] = smallObj;



// for(var i = 0; i < countries.length; i ++){
//     var checker = [];
//     checker.length = countries.length;
//     var RightIterator = countries[i];
//     var right = RightIterator.includes('Canada');
//     console.log(right);

// }