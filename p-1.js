//Develop a function named sortWords() that sorts the words in a given string based on the numerical characters within them.
console.log(sortWords('T4est 3a Thi1s is2') === 'Thi1s is2 3a T4est');

function sortWords(input) {
    let sliced = input.split(' ');
    const matchRegex = /\d+/;
    const result = sliced.sort((a, b) => a.match(matchRegex)[0] - b.match(matchRegex)[0]);
    return result.join(' ');
}

// advanced
// function sortWords(words) {
//     return words
//         .split(' ')
//         .sort((wordA, wordB) => getNumber(wordA) - getNumber(wordB))
//         .join(' ');
// }

// function getNumber(word) {
//     return +word.match(/\d+/)[0];
// }

