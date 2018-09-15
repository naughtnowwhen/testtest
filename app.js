// Ok, so lots to learn about arrays and objects but here's a question that's been on my mind.

//What are the pros and cons of each strategy?

// putting many objects in a container array?

// putting many objects in a container object?
//My hunch is i want to go this path!




// var myObj1 = {name : 'info', index : 0, 0 : 'a', 1 : 'b', 2 : 'c'};
// var myObj2 = {name : 'goose',index : 1, exists: this, soundslike : 'honk'};
// var myObj3 = {name : 'gander',index : 2, kind : false};

var question1 = 'I am hungry';
var answers1 = ['yes','no','i dont care',' whatever','it literally doesnt matter']

var question1 = {question : question1,
    answer : answer1,
    questionType: 'multipleChoice'
};

questions = [question1,];

for (var )

var BigObject = {};



BigObject[0] = myObj1;
BigObject[1] = myObj2;
BigObject[2] = myObj3;

//sweet nameSearch

var nameSearch = function (LookingForName){
  var found = false;
  console.log(found);
  for (var i = 0; i < 3; i ++){
    if (BigObject[i].name === LookingForName){
      console.log('yep', BigObject[i].name);
      found = true;
      console.log(found);
    }
  }
};

var indexVar = nameSearch('goose');


// okay, cool that works, looks for index number an
var indexSearch = function (LookingForIndex){
  var indexFound = false;
  console.log(indexFound);
  for (var i = 0; i < 3; i ++){
    if (BigObject[i].index === LookingForIndex){
      console.log('yep', BigObject[i]);
      indexFound = true;
      console.log(indexFound);
    }
  }
};

var indexVar = indexSearch(2);






// interesting typeof nameSearch says it's an object, but it's a function right?







// Rick asked a great question! Can you return an object?
// My gut reaction was yes! You'd better be able to... But I hadn't considered it and wasn't 100% sure, so I wanted to prove it and proved yes, you can. proof below...

canyoureturn = function (obj){
  return obj;
  //interesting, was curious if you could return two, values, nope you can't, the following just returns 'hello'
  //   return obj && 'hello';
  
};
var canyou = canyoureturn(myObj1);
