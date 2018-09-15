var question1 = 'Am I hungry?';
var answers1 = ['yes','no','i dont care',' whatever','it literally doesnt matter'];

var question1 = {question : question1,
  answers : answers1,
  questionType: 'multipleChoice'
};



var questions = [question1,];
var currentAnswer;

var answers = [];


for(var i =0; i< questions.length; i++){
  console.log('HITTING LOOP FIRST');
  while(!currentAnswer){
    console.log('HITTING LOOP');
    currentAnswer = prompt(questions[i].question);
    console.log('DID WE FIND IT', questions[i].answers.indexOf(currentAnswer));

    if (questions[i].answers.indexOf(currentAnswer)){
      answers.push(currentAnswer);
      alert(currentAnswer+'cool! I understand that answer');
    } else{
      alert('we didnt find your answer...');
    }
  }
}

console.log('ANSWERS', answers);



