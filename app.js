'use strict';


let li = document.getElementsByTagName('li');
var liTracker;
var makerUlGrab;

// this was working with my about me coutries guessing.
// for(let i = 0; i < allCountries.length; i++){
//   //makes li and appends them at i
//   makerUlGrab = document.getElementById('makerUl');
//   makerUlGrab.innerHTML += `<li> ${allCountries[i].country} </li>`;

  // appends existing li_s
  // console.log(allCountries[i].country);
  // liTracker =  li[i].innerText = allCountries[i].country;
}
var p = document.getElementById('buncha');
// console.log(p);
for(var i = 0; i < 100; i ++){
  p.innerHTML += `<p> ${i}</p>`;

}



console.log(document.getElementById('mainh1'));

// that's working
var x = document.getElementById('mainh1');
console.log(x.innerHTML = 'hello there goose');