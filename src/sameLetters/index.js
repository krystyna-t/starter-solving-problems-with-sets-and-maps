/**
 * return a Map of the unique letters and arrays of words that are made up of those letters
 * @param {array} words An array  of words
 */
function sameLetters(words) {
    const result = new Map();
    for(let word of words){
        const letters = new Set(word.toLowerCase());
        const sortedLetters = [...letters].sort().join('');
        if(result.has(sortedLetters)){
            result.get(sortedLetters).push(word);
        }
        else{
            result.set(sortedLetters, [word]);
        }
    }
    return result;
}

module.exports = sameLetters;
