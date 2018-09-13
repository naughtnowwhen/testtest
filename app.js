
// of so first I wrote this add () (following from techsith example)
// without the first if statement, that stops the function when n decrements to 0. but of course got an infinite loop because there was no exit condition. 

// It's interesting because n is decrementing and increasing both.
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

console.log(add(5));