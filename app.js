var caller = function(){
  console.log('does this work?');
};

var randomCustomerGenerator = function() {
  return Math.round(Math.random() * 100);
};

console.log(x,'x');


var store = {
  name: ['1st and pike', 'Seatac Airport', 'Seattle Center', 'Capital Hill', 'Alki'],

  randomCustomerGenerator: function() {
    return Math.round(Math.random() * 100);
  },
  // minimumCustomer: function() {
  //     return
  // },
  hours: [7,8,9,10,11,12],
  cookiessoldperhour: [],
  //   time: randomCustomerGenerator(),
  caller: function(){
    for(var i = 0; i <this.hours.length; i ++){
      this.cookiessoldperhour[i] = randomCustomerGenerator();
    }
    return this.cookiessoldperhour;
  },
  time : randomCustomerGenerator,

  // maximumCustomer:,
  // averageCustomer:,
};