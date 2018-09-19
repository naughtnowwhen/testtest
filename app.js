'use strict';



var globalCorrectArray = [];

//---------------------- Country Constructor -----------------------------------

var CountryObj = function(country, correctAnswer, hint) {
  // ----borrowed code (!new.target) throw ... -----
  if(!new.target) throw 'CountryObj must be called with new';
  this.country = country;
  this.correctAnswer = correctAnswer;
  this.success = false;
  this.hint = hint;
  this.correctArray = [];
  globalCorrectArray.push(this.correctArray);
};

CountryObj.prototype.log = function(){
//   console.log(this.country); 
};


// consider renaming it, as not .elseif
///---------------------------.ELSE IF PROTOTYPE --------------------------------------------
CountryObj.prototype.elseif = function (askAgain){
var doYouWantHint = prompt('do you want a hint? answer with yes or no, please ');

if(doYouWantHint === 'yes'){
    alert(this.hint);
}

else 

// console.dir(CountryObj.prototype);

  // --------------------------- where it breaks ----------------------------------------
// it breaks here because it's not accessing this.correctAnswer
// the if statement is able to access this.correctAnswer

// this from Dev Tools spells out the problem

// app.js:154 this is this.correctAnswer in the else if condition no
// app.js:106 this is this.correctAnswer right inside .elseif :::  undefined

// it goes from no to undefined from the else if to the prototype.elseif
// so this.correct is different or the .elseif proto doesn't have access, right?



  console.log('this is this.correctAnswer right inside .elseif ::: ' , this.correctAnswer);


  // console.log('this is germanCountry from inside .elseif ', germanCountry, ' passes ::: true ');
  // console.log('this is germanCountry.correctAnswer from inside .elseif ',
  // germanCountry.correctAnswer, ' passes ::: true');




  //   console.log('getting into the else if function?' , 'yes i am');
  //   console.log('the following is what is being passed askAgain ', askAgain);
  var turns = 4;
  while(askAgain !== this.correctAnswer){

    turns --;

    if(turns <= 0){
      alert('sorry, too many tries');
      return false;
    }
    askAgain = prompt('please try again, have i been to ', this.country);
    console.log('this is askAgain right after the turn decrementor ', askAgain);
    console.log('this is this.correctAnswer right after the decrementor' , this.correctAnswer);


    if (askAgain === this.correctAnswer){
      console.log('this is askAgain right inside the if statement that checks === again. ', askAgain);
        console.log(askAgain === this.correctAnswer,'askAgain === this.correctAnswer');
      console.log('does the wrong become right?', 'no it does not!');
      this.truthTest(askAgain);
    //   this.prototype.truthTest(askAgain);
    // only say prototype in the declaration not the call


    }
  }
};

CountryObj.prototype.truthTest = function(asked) {
  if (asked === this.correctAnswer){
    this.success = true;
    this.correctArray.push(true);
    alert(this.success);
    return true;
  }
  
    var asked = prompt('have i been to ', this.country);
  console.log(asked, 'asked');

  if (asked === this.correctAnswer){
    console.log('this is this.correctAnswer if it equesls asked ::: ', this.correctAnswer, 'passes ::: true');
    this.success = true;
    this.correctArray.push(true);
    alert(this.success);
    return true;
  }

  // don't refer to these methods as protos they are attached to the proto
  else if(asked !== this.correctAnswer){
    console.log('getting here?', 'yes i am');
    console.log('this is asked in the else if condition ::: ', asked);
    console.log('this is this.correctAnswer in the else if condition', this.correctAnswer, ' passes ::: true');

    this.elseif();

  }
};

var germanCountry = new CountryObj('germany', 'no', 'ive only been to one European country');
var canadaCountry = new CountryObj('canada', 'yes','Im from Americas Canada, so...');
var brazilCountry = new CountryObj('brazil', 'yes', 'Rio has tons of beauty and squalor');
var franceCountry = new CountryObj('france', 'yes', 'their southern coast sure is amazing');
var unitedArabEmirates = new CountryObj('United Arab Emirates', 'yes', 'who learns to snowboard in the desert?! An absurd idea!');

// germanObj.prototype.askUser = function(this.country){
// var asked = alert('did you go to', this.country);
// };



//
// CountrySet.prototype.askerFunction = function(question){
//   // console.log(question, ' the questions');
//   var asker = prompt(question, 'im prompting');
//   //   userGuess.push(question);
//   // var smallObj.asker = question[];
//   // console.log(question,'smallObj.asker[i]');
//   console.log(question);
//   //   return asker;
// };

