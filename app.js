//countries
var countries = ['Canada', 'Chile', 'France', 'UAE', 'Brazil'];


// an example of what the first small object in the bigObject may look like
firstPossibleSmallObjXxample = {
countries : countries[0],
CorrectAnswer : correctCounter[0]
boolCorrect = false;
userGuess = prompt('whatever the user puts in for an answer, either yes or no),


var x = 'access to a method that can check if userGuess === CorrectAnswer and if it doesset boolCorrect to equal true.';

}



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
// -------------AskerFunction-------------------
  var AskerFunction = function (question) {
    // console.log(question, ' the questions');
    var asker = prompt(question, 'im prompting');
    userGuess.push(question);
    
    // var smallObj.asker = question[];
    // console.log(question,'smallObj.asker[i]');

    return asker;
  }

//-----------------<<<AskerFunction--------------

//     //does smallObj need an [i]?
//   // smallObj = {
//   //     countries[i]: [i],
//   //     CorrectAnswer[i]: [i],
//   //     'boolCorrect': boolCorrect;
//   //     userResponse: userGuess[i];
  
//   // }
//   //Asks them a question

//   };
//   AskerFunction(countries[i]);
// console.log(countries[i]);
  
//   let xHolder = [];
//     let [i] = Object.entries( smallObj.asker);
//     xHolder.push(i);
// //   bigObj = Object.entries( smallObj.asker);


//   AskerFunction(countries[i]);

}


console.log(AskerFunction(countries[0]));




//   AskerFunction(countries[i]);



//     //checking countries , countries if they inclue the user response
//   var functionPromptedEval = function (prompted, countries, bool) {
//     if (countries.includes(prompted === a[a]))
//       bool = true;
//     correctResponse.push(prompted);
//     alert('you got it!');

//   };



// }
// //for
// // functionPromptedEval(AskerFunction(prompted, countries, boolCorrect));

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