function promptForNewQuestion(){
  let stringResponseValid = false;
  let question = randomPickerFunction();
  console.log('QUESTION, DOESN"T CHANGE', question);

  while (!stringResponseValid){
    console.log('QUESTION', question);
    let stringResponse = prompt(question);
    console.log('string Reponse', stringResponse);

    if (stringResponse === 'yes' || stringResponse === 'no'){
      console.log('HITTING TRUE');
      stringResponseValid = true;
    } else {
      console.log('HITTING FALSE RESPONSE');
      alert ('sorry, i didn\'t catch that, could you try again?');
      strinResponseValid = false;
    }
    console.log('string ReSPonse should be true now...', stringResponseValid);
  }



}

/*
  let hello;
  // allocate new memory space, hello0101010101

  let newHello = hello;

  //allocate new memobry space newHello^^^

  */

function validateString(question){
  let response = prompt(question);
  return response;

}



for (var i = 0 ; i < arrQuestions.length; i++){
  promptForNewQuestion();
}

