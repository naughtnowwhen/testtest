
var arrayOfObjects = [];

function AboutMeConstructor (statement, question, correctAnswer, userGuess) {
  this.statement = statement;
  this.question = question;
  this.correctAnswer = correctAnswer;
  this.userGuess = userGuess;

    // a prototype goes here that can push each this. to my arrayOfObjects. 

}

AboutMeConstructor.prototype.pusher = function(){
  arrayOfObjects.push(this);
};

var firstQuestion = new AboutMeConstructor('S1','Q1', false,'U1');