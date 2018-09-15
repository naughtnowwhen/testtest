// hurray! you can push all these smaller objects into the big object container and then access the smaller objects with [i] so just square brackets with the number of the smaller objects

// can you have an object constructor that is blank, and whatever arguments you pass into it it assumes the this.whatever = whatever form?

// ok great! but I think i'd rather try 'pushing' not to an array to contain all my objs, but an obj to contain all my objs, how to do?

// good reminder in class, remember .includes!!

var myArr = ['a','b','c','d','e'];
var endArr = [];

var tryThisAsFunction = function (arr){

  constructor (index, question){
    this.index = i;
    this.question = arr[i];
  };
  for(var i = 0; i < myArr.length; i ++){
    //what to put for the first argument, i, iterator, does it matter?
    endArr[i] = new constructor (arr);

  }
};

tryThisAsFunction(myArr);


var objIterator = [];


for(var i = 0; i < endArr.length ; i++){
  objIterator.length = endArr.length;


objIterator[i] = Object.entries(endArr[i]);
// console.log(objIterator[i]);
console.log(typeof Object.entries(objIterator[i]))
console.log(Object.entries(objIterator[i]))

// var obj = objIterator[i];

  var bigObj = function BO (i, obj){
    this.index = [i];
    this.obj = obj;
  };

}

var letssee = new bigObj;





//ok that's fine and well but how to put all these objs inside a container object?










//                      ideas
// a for loop that for each index prompts a new question and stores their response in an object.

//if the user inquiry is contained in one of the sub objects, somehow return all those values in that object, and how? just return that object? 'push' that object to a currentObject or currentArray?

// how to have an array or object that only has one instance at a time, a 'current' array/object, the next object/arr that pushed in, pops the previous one.

// !!! oh you iterate through the object as discussed above and if the user's entry === the object at i then a j for loop iterates through that sub objects values and extracts the necessary information, and some of that objects values can be this.functions that can change parameters about them...
// for example you could iterate all  the objects at i looking for a .name === for the stored info and the user guess. if they do === run a function that changes a guessEqualsAnswerBool set to false and change it to true... Then another function can count iterate the same way but this time ++ a score var for each guessEqualsAnswerBool that has been set to true.

//i'll have an object with all these objects. all the functions i want to run like random number generator, iterate over an array, ask a questions, guess a number will be written as methods to be called on my objects.

//objects in objects... the inner objects if guess === rightanswer that object will a run a this.set answerWrongBool from false to true.

//from my array of questions make a for loop that iterates over length
//for each i it'll create a new object with arr.question, each question becoming it's own object with a new obj constructor that also includes useful stuff like guessBool === false for initial setting. It might also contain a.clue key value pair for if the user needs a clue

//                      /ideas


// hurray for Object.keys, values, entries! Fantastic!

// so for example
// trialObjectContainer[1]
// results in {name: "gander", num: 3}
//sweet!
// and I switch the object container from it's first key being 0, to being 'zero' and you can still access it with []... But! not with parenthesis, that results in an error. so navigating objects is (so far) best done through square brackets.

// the next step is to be able to iterate through the whole length of the container, pulling out all the smaller objects inside.



//                      coffee shop coding
// var trialObject1 = {name : 'goose', num : 2, 'status' : true};
// var trialObject2 = {name : 'gander', num : 3};
// var trialObject3 = {name : 'candor', num : 4, 'status' : true};


// var first = trialObject1;
// var second = trialObject2;
// var third = trialObject3;


// var obj = { 0 : first, 1 : second, 2 : third};
// // console.log(Object.keys(obj), ' keys');
// // console.log(Object.values(obj), 'values');
// // console.log(Object.entries(obj), ' entries');
// // console.log(Object.keys(obj).length, 'legnth');


// for (var i = 0; i < Object.keys(obj).length; i ++){
//   console.log(Object.values(obj)[i].name, 'name');
//   console.log(Object.values(obj)[i].num, 'num');

// }


// // var pusher = [];
// // for (Object.keys){
// //   console.log(obj[i]);
// //   pusher.push(obj);
// // }


// //well this looked promising but it just results in a string which is not what i'm looking for.
// // var pusher = [];
// // for(let prop in obj){
// //   let a =(`obj.${prop} = ${obj[prop]}`);
// //   pusher.push(a);
// // }


// var myArr = ['hello', 'goodbye', 'soLong', 'wave', 'sonic'];
// var response = 'goodbye';
// var foundInArray = {};
// var arrFoundObjects = [];

// //              object methods worth exploring and trying

// // seems the most useful so far is just Object.entries(obj) or Object.values(obj)

// // for example, look how you can penetrate the container into the nested objects and extract information so satisfyingly.               ... Object.entries(trialObjectContainer)[0][1]                         ... which results in {name: "goose", num: 2, status: true}

// // And then the next really promising looking feature is the "for in" method which looks like it can search through the contained objects and extract root around for data, instead of a primitive for loop.

// // valueOf returns all the elements of an objects, but maybe not all that useful because it returns everything and I don't know how to make it more specific.

// // has own property returns true or false if it contains the searched value.




// function FoundInArray (name, numberIndex){
//   this.name = name;
//   this.numberIndex = numberIndex;
// }

// function BigObject (name, number){
//   this.name = name;
//   this.number = number;
// }






// for(var i = myArr.length -1; i >= 0; i --){
//   //foundInArray constructs objects, both the name at the index and the index number.
//   var foundIn = new FoundInArray (myArr[i], [i]);



//   arrFoundObjects.push(foundIn);
// }