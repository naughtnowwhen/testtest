Michael said 
  var construct = function OBj (index, question){
Michael said constructor is the key word to use

Michael advises against using constructor

// array of objects. loop through the array. and then you can dot notation to have access in 

// DO NOT DO THIS... but its cool, Object.keys(obj).reduce(key=>{
    console.log(obj[key]) // gives the object...
    Object.keys(obj[key]).forEach(key=>{
        console.log(obj[key]) // this is every VALUE inside EACH object
    })

}, [])