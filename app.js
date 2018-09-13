
// of so first I wrote this add () (following from techsith example)
// without the first if statement, that stops the function when n decrements to 0. but of course got an infinite loop because there was no exit condition. 

// Question (1) It's interesting because n is decrementing and increasing both.
//the total is incrementing, the final return grows, but n is also decrementing as well, from the start to zero. It seems mysterious how this works, but it does. Recursion is tricky. 



let add = function (n){
  if (n <=0){
    console.log(n);
    return 0;  
  }
  else {
    return n + add(n -1);
  }
};

console.log(add(4));


//techsith is wonderful! He explains it so well. Question(1) I had was clearly answered. internal to the first instance of the function n remains whatever value you pass, that doesn't change. But the second instance of add does keep changing and decrementing by -1 each time. So if you pass 3 it looks like this through the looping

// 3 + 2 = 5
// 3 + 2 + 1 = 6

// and further here's something what it looks like internally:

// add(3){
//     return 3 + add (2) {
//         return 2 + add(1){
//             return 1 + add(0){
//                 return 0;
//             }
//         }   
//     }
// }

