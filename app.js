//countries
var countries = ['Canada', 'Chile', 'France', 'UAE', 'Brazil'];

var askerFunction = function (question) {
  // console.log(question, ' the questions');
  var asker = prompt(question, 'im prompting');
  //   userGuess.push(question);
  // var smallObj.asker = question[];
  // console.log(question,'smallObj.asker[i]');
  return asker;
};


firstObj = {
  country : 'Canada',
  correctAnswer : 'yes',
  boolCorrect : false,
  userGuess : askerFunction(this.country),
  attempts : [],
  correctMessage : 'yep, ive been to Canada',
  wrongMessage : 'sorry, guess again',
  hints : ['maple syrup', 'hockey','moose']
};




//something like this
// var ask = askedFunction () {var asked = prompt('have I been to' + firstObj.country) return asked};

//eventually it'll look something like this.
// firstObj.prototype.askerFunction = {
//     if (if userGuess.includes(correctAnswer)){
//     this.boolCorrect = true;
//     this.attempts++;
//     };



//look in the read me file for 2 examples of smallObject examples that could go in the big objects.



//answer
CorrectAnswer = ['y', 'n,', 'y', 'y'];
boolCorrect = false;
var correctCounter = [];
userGuess = [];

var bigObj = {};
var smallObj = {
  asker : [],

};

//pseudocode for the concept of setting smallObj.asker equal to the first question in the array of countries
//



// smallObj.asker = CorrectAnswer[0];

//for loop explicitly set to one itertion for testing

//testing for loop

for (var j = 0; i < countries.length; i++) {
  console.log(countries[j]);
}
// for loop test passes


for (var i = 0; i < countries.length; i++) {
  // console.log(countries[i], 'show');
// -------------askerFunction-------------------
  var askerFunction = function (question) {
    // console.log(question, ' the questions');
    var asker = prompt(question, 'im prompting');
    userGuess.push(question);

    // var smallObj.asker = question[];
    // console.log(question,'smallObj.asker[i]');

    return asker;
  };

//-----------------<<<askerFunction--------------

//     //does smallObj need an [i]?
//   // smallObj = {
//   //     countries[i]: [i],
//   //     CorrectAnswer[i]: [i],
//   //     'boolCorrect': boolCorrect;
//   //     userResponse: userGuess[i];

//   // }
//   //Asks them a question

//   };
//   askerFunction(countries[i]);
// console.log(countries[i]);

//   let xHolder = [];
//     let [i] = Object.entries( smallObj.asker);
//     xHolder.push(i);
// //   bigObj = Object.entries( smallObj.asker);


//   askerFunction(countries[i]);

}


//askerFunctionPrompt
// console.log(askerFunction(countries[0]));




//   askerFunction(countries[i]);



//     //checking countries , countries if they inclue the user response
//   var functionPromptedEval = function (prompted, countries, bool) {
//     if (countries.includes(prompted === a[a]))
//       bool = true;
//     correctResponse.push(prompted);
//     alert('you got it!');

//   };



// }
// //for
// // functionPromptedEval(askerFunction(prompted, countries, boolCorrect));

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