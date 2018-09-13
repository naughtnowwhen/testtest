// var username = prompt('username?');

// 1) array of names
//



//the array of possible names to pick from.
var usernameList = ['joe', 'grant', 'rick'];
// var isIn = usernameList.indexOf('rick');


// name verifier, if name is valid it will !== -1, else it'll return -1.
var isIn = function (name){
  var isItIn = usernameList.indexOf(name);
  if (isItIn !== -1){
    console.log(isItIn);
    return isItIn;
  }
  else {
    return -1;
  }
};

console.log(isIn('joe'));

// var prompter = function(){
//   var username = prompt();
//   return username;
// };
// prompter();



// var passing = isIn(prompter());
// // console.log(passing);

// var checker = function(){
//   if (passing !== -1){
//     alert ('thank you ');
//     return true;
//   }
//   else {
//     alert('try again');
//     prompter();
//   }
// };

// console.log(checker(passing));



// // while (passer === -1){
// //   prompt(username);
// // }

// // alert(username);

// // while( )

