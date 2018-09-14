// var userInput = prompt('userInput?');

// 1) array of names
//



//the array of possible names to pick from.
var usernameList = ['joe', 'grant', 'rick'];
// var isIn = usernameList.indexOf('rick');


// userInput verifier, if userInput is valid it will !== -1, else it'll return -1.

// Michael suggested passing as an argument to the isIn function so that it can look inside any array for values. Good idea! That's the idea to make these things as universal as possible.


// it prompts and stores the entry in userInput
var prompter = function(e){
  var e = prompt('please enter a name');
  return e;
};

var userInput = prompter();


// just checks if it's in array
var isIn = function (userInput){
  var isItIn = usernameList.indexOf(userInput);
  if (isItIn !== -1){
    console.log(userInput, 'userInput being passed to isIn'); // returns Joe
    console.log(isItIn, 'the return from isIn in the passing condition');
    return isItIn;
  }
  else {
    console.log('the failing condition');
    return -1;
  }
};


var goingToChecker = isIn(userInput);




var checker = function(goingToChecker){
  if (goingToChecker === -1){
    alert('try again');
    // prompter('joe');
    isIn('joe');
  }
  else if (goingToChecker !== -1) {
    alert ('thank you ');
    return true;
  }
};




checker(goingToChecker);



// // while (passer === -1){
// //   prompt(userInput);
// // }

// // alert(userInput);

// // while( )

