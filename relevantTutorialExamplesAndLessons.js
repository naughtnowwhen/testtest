// https://www.youtube.com/watch?v=VQlbNmevZ1E

var testObj = {
  prop  : 'hello',
  prop1 : 123,
  prop2 : true,
  objProp : {
    innerKey : 'inner prop',
  },
};

//making a new key/value pair for the inner Object
testObj.objProp.newInnerKey = 'new prop';


// https://www.youtube.com/watch?v=Gp5nnerXETg

var questionObj = new Object();
questionObj.amIHungry = true;
questionObj.wasItRaining = 'full on downpour!';
questionObj.isItSunnyNow = true;


// returns all the properties of the passed object as strings...
// i copy pasted it in to just see how it runs, it does so i'll code it for the practice...

function showProps(obj, objName){
  var result = '';
  for (var i in obj){
    if (obj.hasOwnProperty(i)){
      result += objName + '.' + i + ' = ' + obj[i] + '\n';
    }
  }
  return result;
}
// commenting out call
// var showPropsCheck = showProps(testObj, 'testObj');


// function showProps(obj, objName) {
//   var result = '';
//   for (var i in obj) {
//     // obj.hasOwnProperty() is used to filter out properties from the object's prototype chain
//     if (obj.hasOwnProperty(i)) {
//       result += objName + '.' + i + ' = ' + obj[i] + '\n';
//     }
//   }
//   return result;
// }
var shower = showProps(questionObj, 'questionObject');
// console.log(shower);






var Animal = {
  type : 'invertebrates',
  displaytype : function(){
  console.log(this.type, ' this is the type of the animal');
  }
}

var animal1 = Object.create(Animal);
var animal2 = Object.create(Animal);
animal2.fur = 'soft';
animal2.says = function() {
    alert('meow');
};

var fish = Object.create(Animal);
fish.type = 'fishes';
fish.does = function(){
alert('swimming');
}





