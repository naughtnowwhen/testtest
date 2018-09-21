
// var sumArr = [];

// ------------------------ sum() ------------------------------------
//passes test
var sum = function(numA, numB){
  let sumArr = [];
  let stringSum;

  let numSum = numA + numB;
  sumArr.push(numSum);
  stringSum = `The sum of 4 and 7 is ${numSum}.`;
  sumArr.push(stringSum);
  //   console.log(sumArr);
  return sumArr;
};
// -----------------<<<------ sum() ------------------------------------



// testSum(4, 7);

// ------------------------multiply()------------------------------------
//passes test
var multiply = function(numA, numB){
  let multArr = [];
  let stringMult;

  let numMult = numA * numB;
  multArr.push(numMult);
  stringMult = `The product of 5 and 9 is ${numMult}.`;
  multArr.push(stringMult);
  //   console.log(sumArr);
  return multArr;
};
// ----------------<<<-----multiply()------------------------------------


// testMultiply(5,9);

var sumOfFirst2;
var sumOfThird;
var sumOfAll;
var myArr;
var multOfFirst2;
var multOfThird;
var multOfAll;
var stringSum;
var stringMult;

// ------------------------sumAndMultiply()------------------------------------


// sumAndMultiply = function(numA,numB,numC) {
// myArr = [];
// sumOfFirst2 = sum(numA,numB)[0];
// sumOfThird = sum(numC,0)[0];
// sumOfAll = sum(sumOfFirst2,sumOfThird)[0];
// myArr.push(sumOfAll);

// multOfFirst2 = multiply(numA,numB)[0];
// multOfThird = multiply(numC,1)[0];
// multOfAll = multiply(multOfFirst2,multOfThird)[0];
// myArr.push(multOfAll);

// stringSum = `${numA} and ${numB} and ${numC} sum to ${sumOfAll}.`;
// myArr.push(stringSum);

// stringMult = `The product of ${numA} and ${numB} and ${numC} is ${multOfAll}.`;
// myArr.push(stringMult);

// return myArr;

// };
// sumAndMultiply(4,7,5);
// console.log(sumOfThird);

// testSumAndMultiply();
// ----------------<<<-----sumAndMultiply()------------------------------------
// var testArray = [2, 3, 4]; //eslint-disable-line
// function sumArray(sumArr) { //eslint-disable-line
//   var sumNum = 0;
//   for (var i = 0; i < sumArr.length; i++){

//     sum(sumArr[i], sumNum )[0];
//     console.log(sumNum);
//   }
//   return (sumNum);
// }
// var x  = sumArray(testArray);

var testArray = [2, 3, 4];
var accumulator = 0;

var sumArray = function (myArr){
  for (var i = 0; i < myArr.length; i ++){
    accumulator = sum(accumulator,myArr[i])[0];
    console.log(accumulator);
  }
  return accumulator;
};

// sumArray(testArray);





//working
// var sumArray = function (myArr){
//     let counter = 0;

//     console.log(myArr, myArr.length, 'myArr');

//     //   for (var i = 0; i <myArr.length; i++){
//     var firstTwo = sum(myArr[0],myArr[1])[0];
//     console.log(firstTwo, 'first two');
//     var secondTwo = sum(myArr[2],0)[0];
//     var allTogetherNow = sum(firstTwo,secondTwo)[0];
//     console.log(allTogetherNow, 'alltogethernow');
//     //   }
//     countedSum.push(counter);

//   };

// var testArray = [2, 3, 4];
// var accumulator = 0;

// var sumArray = function (myArr){
//   for (var i = 0; i < myArr.length; i ++){
//     accumulator = sum(accumulator,myArr[i])[0];
//     console.log(accumulator);
//   }
//   return accumulator;
// };

var inputArray = [2,3,4];
var multiplyArray = function(myArr){
  var accumulator = 1;
  for (var i = 0; i < inputArray.length; i ++){
    accumulator = multiply(accumulator, myArr[i])[0];
  }
  return accumulator;
};

let stringHolder = [];


var MultiplyAnyArray = function(myArr) {
  var multiplyArray = function(myArr){
    var accumulator = 1;
    console.log(accumulator);
    for (var i = 0; i < myArr.length; i ++){
      accumulator = multiply(accumulator, myArr[i])[0];
      console.log(accumulator);
      stringHolder[i] = sum(`${[i]} *  `)[0];
      console.log(stringHolder[i]);
    }
    return accumulator;
  };






  multiplyArray(myArr);
};

var bigArr = [1,2,3,4,5,6,7,8,9];

MultiplyAnyArray(bigArr)
console.log(stringHolder);
