'use strict';



var globalCorrectArray = [];

//---------------------- Country Constructor -----------------------------------

var CountryObj = function(country, correctAnswer, hint,img) {
  // ----borrowed code (!new.target) throw ... -----
  if(!new.target) throw 'CountryObj must be called with new';
  this.country = country;
  this.correctAnswer = correctAnswer;
  this.success = false;
  this.hint = hint;
  this.correctArray = [];
  this.img = img;
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

var germanCountry = new CountryObj('germany', 'no', 'ive only been to one European country', 'https://www.unquote.com/IMG/254/14254/changing-german-landscape-580x358.jpg?1493711556' );
var canadaCountry = new CountryObj('canada', 'yes','Im from Americas Canada, so...', 'https://www.hipsthetic.com/wp-content/uploads/2016/01/Royalty-Free-Winter-Landscape-Freeographs.jpg');
var brazilCountry = new CountryObj('brazil', 'yes', 'Rio has tons of beauty and squalor', 'http://s3.travel.india.com/wp-content/uploads/2016/08/rio-de-janeiro1.jpg');
var franceCountry = new CountryObj('france', 'yes', 'their southern coast sure is amazing','https://upload.wikimedia.org/wikipedia/commons/6/62/Paysage_Dordogne_Domme.jpg');
var unitedArabEmirates = new CountryObj('United Arab Emirates', 'yes', 'who learns to snowboard in the desert?! An absurd idea!', 'https://s3.eu-central-1.amazonaws.com/locationscoutnet/images/2018-02/sheikh-zayed-grand-mosque-abu-dhabi-united-arab-emirates-cypo_l.jpeg');

// all countries array
var allcountries = [germanCountry, canadaCountry, brazilCountry, franceCountry, unitedArabEmirates];

//calls truth test on each one.
// for (var i = 0; i < allcountries.length; i ++){
//   allcountries[i].truthTest();
// }

let correctOnes = [];

//pushes correct guesses
// got to put it into a function so that i can call it after each .truthTest()

var successChecker = function(){
  for (var i = 0; i < allcountries.length; i ++){
    if(allcountries[i].success === true){
      correctOnes.push(true, allcountries[i].country);
      console.log(allcountries[i].country, 'this one was guessed succesfully');
    }
  }
};

var divTargetter = document.getElementById('mainDiv');

// var refresher = function(){
//   console.log(divTargetter);

//   var firstElement = document.createElement('li');
//   firstElement.textContent = germanCountry.country;
//   console.log(firstElement);
//   divTargetter.appendChild(firstElement);

//   var secondElement = document.createElement('li');
//   secondElement.textContent = germanCountry.success;
//   console.log(secondElement);
//   divTargetter.appendChild(secondElement);
// };

// refresher();


// for loop
// 1) targetting - divTargetter line 150
// 2) creating -
// 3)
// 4)



// creates a bunch of lis for [i] and puts [i] in them to display to the screen. 
//automater works...
// var createElementArray =[];
// var automater = function (){
//   for(var i = 0; i < 20; i++){
//     createElementArray[i] = document.createElement('li');
//     createElementArray[i].textContent = [i];
//     console.log(createElementArray[i]);
//     divTargetter.appendChild(createElementArray[i]);
//   }
// };
// automater();


// ok, very good, that works, nice, it gets the image to the screen.
var imgPlacer = function() {
// comment out for now the for loop, just get it to work once, first...
// for(var i = 0; i < allcountries.length; i ++){
var createImgEl = document.createElement('img');
console.log(createImgEl);
createImgEl.src = germanCountry.img;
console.log(createImgEl);
divTargetter.appendChild(createImgEl);
// }
};
imgPlacer();

// and now every country object will create its own div, hmm? 

// and now time for a generalized function that will take any country and put its contents onto the screen.




