// A simple while loop that checks if the user input is valid. 


// create some user stories

//create an array of questions

var arrQuestions = ['am I feeling totally jazzed? ', 'will I ever stop being a soul-less ginger? ', 'am I even doing it right?', 'will I solve this nagging hunger? ', 'will I live to see the joyous day Trump is removed from office?? ','the mountains are calling, must I go? ', 'have rollercoasters sent me into a vomitting panic? ' , 'have I stared to long, drooling, reading and re-reading the restaraunt menu?','was it foolish of me to have that stare down with the eye of the tiger? ', 'considering my gluttony, am I lucky that I don\'t close to Dick\'s burger anymore?', '' ];

                        //how to grab a random element
                        // var grabOne = arrQuestions[Math.floor(Math.random()* arrQuestions.length)];

                        // var yesAnswers = ['yes','yea','yep','definitely','uhuh','sure','totally'];

                        // var firstQuestion = arrQuestions[Math.floor(Math.random()* arrQuestions.length)];



                        // var ask = prompt(firstQuestion);
                        // var looker = yesAnswers.indexOf(ask);



                        // var asking = prompt(firstQuestion);
                        // if (asking !== 'yes') {
                        //   alert('please answer again');
                        //   prompt(firstQuestion);
                        // }
                        // else {
                        //   alert('thanks for the answer');
                        // }

                        // ooh, i think this is the right idea, but it needs to get cleaned up, separate the functionality, there should be a function that asks the questions and a function that checks against a list of possible answers.


                        // var firstQuestion = arrQuestions[Math.floor(Math.random()* arrQuestions.length)];


// !!! Remember that i'm only pushing to this array, i need to pop elsewhere so that I only have one question at a time                        
// var currentQuestion = [];
var randomPickerFunction = function (){
  let grabRandomQuestion = arrQuestions[Math.floor(Math.random()* arrQuestions.length)];
//   currentQuestion.push(grabRandomQuestion);
//   console.log(currentQuestion);
  let indexChecker = arrQuestions.indexOf(grabRandomQuestion);
  arrQuestions.splice(indexChecker,1);
  return grabRandomQuestion;
};


// ok great, that grabs a random question.



// ok cool this little what is happening function let's me the length of arrQuestions, call the randomPickerFunction which splices an index from it, and then shows it again, and I can see as I call it in the Dev Tools that is in fact removing each question each time it's called which is what I was thinking for making sure that the same question wasn't accidentally asked twice.
// however, there's better ways since, and talking with TA Michael confirmed the drawbacks that the splice tool permanently removes the questions from the array, so maybe better would be to push each question into something like an "alreadyAskedArray", and if the question is in that array don't ask it again.

//commented out while working on displayerFunction
// prompt(randomPickerFunction());

// var whatIsHappeningFunction = function(){
//   console.log(arrQuestions);
//   prompt(randomPickerFunction());
//   console.log(arrQuestions);
// };

// so now that a question is returned from randomPickerFunction, I need to feed that question into a display function. This is a an improvement from the askUser function which tries to handle grabbing a random question and handling the if and else logic of user responses, this is a dirty way of combining too much functionality at once, better to write separate, smaller functions that work together cleanly.

//go clean or go home! try writing a function that just handles the displaying!

// does in fact show up!
// var doesShowUp = [];

// var displayerFunction = function (question){
//   doesShowUp.push(question);
//   return prompt(question);
// };


// displayerFunction(randomPickerFunction());


// var response = displayerFunction(randomPickerFunction());
// console.log(response, ',this is the response');


//response is the user response for each question.

// !!! interesting, and a problem, response is a string, and i've forced it to be a 'yes' string, and yet the string isn't being used properly by the logic()... but when I call it in Dev Tools with either logic('yes') or logic(response) then it works. hmm...

// haha! i found it, duh, I was passing response into the logic() declaration, not in the function call. no wonder it didn't work.

//in ask again is for troubleshooting purposes.
inAskAGain = [];
// ok the trouble is that i'm getting prompted twice after an incorrect response from the user, which sends logic() into it's else condition, and that is somehow prompting twice, when I only want to prompt once. inAskAgain is getting two responses.





// var logic = function (stringResponse) {
//   console.log('SHOWING UP', stringResponse);

//   if (stringResponse === 'yes'){
//     return true;
//   }
//   else if (stringResponse === 'no')
//     return false;
//   else
//     alert ('sorry, i didn\'t catch that, could you try again?');
//   let askAgain = (prompt(currentQuestion)).toString();


//   console.log(askAgain);
  // pushing to see what shows up, two strings show up, that it's pushing two strings is the problem.
//   inAskAGain.push(askAgain);
  // interesting, in Chrome Dev Tools when I call logic('yes') or logic('no') it resolves to true and false respsectively, as I want. and when I call it with gibberish, it responds correctly, logic('gibberish') alerts my sorry statement (line 99), and then it prompts them again with the current question, then when I either enter yes, or no, as the function expects, then it works. so from Dev tools the function works as intended, but running the whole program results in two many reprompts of the current question.
//   logic(askAgain);


  //ok cool, this displays another question but it's a different question, I want the same, how to do that?
  // displayerFunction(randomPickerFunction());
//   prompt(currentQuestion);
// };

// logic(response);
// console.log(logic(response));


//prompting for the first question

// first attempt, refactored.
// var askUser =  function () {
//   var looker = (yesAnswers.indexOf(prompt(firstQuestion)));
//   console.log(looker);
//   if (looker === -1) {
//     alert ('didnt understand you, please answer again');
//     prompt(firstQuestion);
//   }

//   else if (looker !== -1) {
//     alert('thanks for your answer');
//   }
// };

// askUser();





// var youAnswered = alert('you answered... ' + ask + ', to the question ' + firstQuestion);








// as a user of the about me quiz i want to be able to be able to take a test that is either amusing, or informative, or a quiz that teaches me something more about coding. I want to start thinking about different stretch goals, that takes the basic functionality into interesting directions.

// I want to be able to see my guesses, whether they were true or false be displayed in interesting ways, for example, to be able to see the answers I got correct all lumped together, to see all the wrong ones lumped together.

// I want to see an explanation afterwards, tailored for right and wrong, that explains more.

// as a user I don't want to be spammed with alerts/and prompts if can be avoided. I'd rather see them on the screen and have each question have it's own section on the screen displayed attractively.

// I want themes to questions, each theme a hub on the screen like Dan's Bubbles. I want a number of questions for each theme, one theme displays one question at a time and then when answered, gets replaced by the next question in the theme. I want the theme's bubble (or whatever physical representation I go with) to enlarge for correct answers, and shrink for wrong answers. Or maybe like plants that grow with correct answers. Something fun like that.

// or instead of themes maybe I want a long list of questions and to randomly choose from them.

// I perhaps want a second section, that creates a new bubble for each question answered, a correct answer maybe is green, an incorrect answer red, or something like that. Each bubble should display the question asked, and when clicked that question should be somehow be enlarged and centralized.


// as a developer I want to use use OOP procedurs as much as possible...

// I want to be able to iterate through a long list of 'truthy' and 'falsy' answers so that they can answer more than just yes, or no...

// I want an array to store my objects as indexes.

// I want a constructor to build all my objects, with a prototype method that pushes them into the array.

// I want to iterate through the array of objects, display the question to the screen, either as a prompt or as a place on the screen for displaying the information.

// I then want to ++ the correct and ++ the incorrect answers, and notify whether right or wrong on the screen.

// I want attractice html and css
// coloring, shapes,