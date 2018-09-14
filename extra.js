//the function contains it all this
//grab an index from an array
//default valid response to false
//while not valid
//prompt them for their answer
// if their answer is valid set valid response boolean to true, which will break the loop.
//if they are wrong again then alert and continue looping
//end of promptForNewQuestion()

//a for loop that goes through the length of the array and calls the promptForNewQuestion() for each iteration. 

// !!! good practive to put the prompt inside the while loop!!!


function promptForNewQuestion(){
  //default to false...
  let stringResponseValid = false;
  // pick a question from the array
  let question = randomPickerFunction();
  console.log('QUESTION, DOESN"T CHANGE', question);

  // since we defaulted to false this will constantly prompt until they give a valid response...

  while (!stringResponseValid){
    console.log('QUESTION', question);
    // store their response
   
    let stringResponse = prompt(question);
    console.log('string Reponse', stringResponse);

    //check if they entered a valid response
    if (stringResponse === 'yes' || stringResponse === 'no'){
      console.log('HITTING TRUE');
      // if they did enter valid then set the boolean to true which will break the loop.

      stringResponseValid = true;

      //if they enter it wrong, prompt again
    } else {
      console.log('HITTING FALSE RESPONSE');
      alert ('sorry, i didn\'t catch that, could you try again?');
      strinResponseValid = false;
    }
    console.log('string ReSPonse should be true now...', stringResponseValid);
  }
}

//go through the full length of the array
for (var i = 0 ; i < arrQuestions.length; i++){
  promptForNewQuestion();
}

