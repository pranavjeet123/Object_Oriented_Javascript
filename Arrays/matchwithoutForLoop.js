/**
 * match 2 arrays of strings and return it as transformed objects 
 * with count of total occurences of every element in array1 in array2
 */

const wordCheck = [" test", "Ram", " Bottle", " NICHE"];
const wordList = [" test", "Ram", " Bottle", " NICHE", " test", "Ram", " Bottle", " NICHE", " test", "Ram", " agar", " example", "bird", "truck", "GuptaJI", "Ram"];

/**
 * Output 
 [{test:3},{Ram:4},{Bottle:2},{Niche:2}]
 */

const countWords = function (words, compare) {
    return words.map(function (word) {
        return compare.reduce(function (acc, val) {
            word.toLowerCase() === val.toLowerCase() && acc[word]++;
            return acc;
        }, { [word]: 0 })
    });
};


console.log(countWords(wordCheck, wordList));