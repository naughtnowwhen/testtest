// 'use strict';


var animalFarm = [];

var scrambledAnimals = [
  ['d', 'c', 'p', 'c'],
  ['o', 'a', 'i', 'o'],
  ['g', 't', 'g', 'w']
];

// var column = 0;
var unscramble = function(checker) {
  var animal = '';
  for (var i = 0; i < scrambledAnimals.length; i ++){
    for (var j = 0; j < scrambledAnimals[i].length; j++){
      if (checker === j){
        animal+=(scrambledAnimals[i][j]);
      }
    }
  }
  animalFarm.push(animal);
  checker++;
}; 

for (var caller = 0; caller < 4; caller++){
  unscramble(caller);
}
console.log(animalFarm);





// console.log(scrambledAnimals[i][j],'scrambledAnimals[i][j]');


// scrambledAnimals[i].length

