
const wordFile = require("./words.json")
// Write the following functions:

// - `allWords` logs all the words.
function allWords(wordle) { 
    console.log(wordle)
}

// - `firstTenWords` logs the first ten words.
function firstTenWords(wordle) { 
    console.log(wordle.slice(0,10))
}
// - `nextTenWords` logs the next 10 words.
function nextTenWords(wordle) { 
    console.log(wordle.slice(10, 20))
}
// - `firstXWords` logs from 0 to x words. Here you have left 
function firstXWords(wordle) { 
    console.log(wordle.slice(0,x))
}
// - `subsetOfWords` logs from x to y words. Here
function subsetOfWords(wordle) { 
    console.log(wordle.slice(x,y))
}
// - `sortWords` logs all the words, sorted alphabetically.
function sortWords(wordle) {
    return wordle.sort((a,b) => a.localeCompare(b));
 }
console.log(sortWords(wordFile));
// Your 4th and 5th Functions are missing arguments. Up There not down here.  



const aMAtch = aword.filter(aword => aword === 5 && aword)

