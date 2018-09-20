'use strict';

var quiz = function(){
  var right = false;
  var dec = 5;

  var userName;
  var num;
  var guess;

  var userGuess = function(){
    userName = parseInt(prompt('what is your guess?'));
    return userName;
  };


  var numPicker = function(){
    num = (Math.floor(Math.random() * 10));
    return num;
  };

  num = numPicker();
  //this alert for troubleshooting
  alert(num + ' this is the num to guess');

  var iffer = function(guess) {
    dec --;
    // console.log(dec, 'dec');
    if(dec <= 0){
      alert('sorry too many tries');
      return false;
    }


    guess = userGuess();

    if (num === guess) {
      alert('that is right');
      right = true;
      console.log(right);
    }

    else if (num!==guess){
      elseif(guess);
    }
  };

  var elseif = function (guess){
    if(dec <= 0){
      alert('sorry too many tries');
      return false;
    }
    if (guess > num){
      console.log('its high');
      iffer();
    }
   

    else if (guess < num){
      console.log('its low');
      iffer();
    }
  };
  iffer();
};
quiz();


// quiz().iffer()


