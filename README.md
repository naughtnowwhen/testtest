!!! wow Jackie's javascript connect came up with something really cool!
/Users/petermurphy/Desktop/Slack\:code\ holder/image_from_ios.jpg
in the terminal it can be found in nights201/imgCatchall


looked up in browser...
AskerFunction(countries[0]), it returned "im prompting" app.js:68


// an example of what the first small object in the bigObject may look like
firstPossibleSmallObjXxample = {
countries : countries[0],
CorrectAnswer : correctCounter[0]
boolCorrect = false;
userGuess = prompt('whatever the user puts in for an answer, either yes or no),


var x = 'access to a method that can check if userGuess === CorrectAnswer and if it doesset boolCorrect to equal true.';

}


// A second example 

secondPossibleExampleSmallObjExample = {
countries : countries,
CorrectAnswer : correctAnswer;
//  boolCorrect : an array of all the boolCorrects that have accumulated each time the user guesses correctly;

// if could be a function that returns the boolCorrect at index[i]

// correctCounter: could be a function that accumulates each time a bool is set true, or an array that gets pushed into when true,
}


now that it's working, i should start a new clean branch that just takes what is working, it should also probably be a new or different repo

Ok, got country contents to show up on the screen, but that was hard coding their elements, now i want to create elements, including one for pictures...

So we want a main div to put all this shit into, huh?

ok, interesting, following the four steps outlined by Nicholas, targetting, creating, giving content, appending... I was able to do all 4, but the only problem i had was the final step, where I want to append child to the main div but it was saying can't append child of null, presumably because maindiv was just a div, had no lis inside it to contain info, but i don't want to have to hard code all that, better to create a new li from javascript.

Interesting! but then I went to go erase the li i hard coded into the main div and it still worked with the german contents showing up how i intended. 


Ok, yes i'm able to to that 4 step process without too any hitches so far, let's see...

Ok, but I want to automate as much as possible! So comment out refresher for a moment and see what automation can do for me...

ok, yes so automater is automating everything to the screen, now it's just num [i] from the for loop, now to get actual content there.

and just to make sure, see if you can get the img to show up...


Well that's just a nested array, right, so the first iterator i will go through the indexes of allcountries,

then the inner iterator j will go through all the relevent info in the country object and display it to the screen, including an img. 

we'll use plenty of ${} for this i'm thinking...