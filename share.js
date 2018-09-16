var askerFunction = function (question) {
  // console.log(question, ' the questions');
  var asker = prompt(question, 'im prompting');
  //   userGuess.push(question);
  // var smallObj.asker = question[];
  // console.log(question,'smallObj.asker[i]');
  console.log(question);
  return asker;

};


var firstObj = {
  country : 'Canada',
  correctAnswer : 'yes',
  boolCorrect : false,
  userGuess : askerFunction(this.country),
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
