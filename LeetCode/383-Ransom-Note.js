/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    // O(n) time and O(n) space complexity
    // Plan: iterate over magazine and add each letter and its frequency to an object. Iterate over ransomNote and see if letter is in the magazine object decrementing the letter's count

    const magazineObj = {};

    for(let i = 0; i < magazine.length; i++) {
        if(magazineObj[magazine[i]]) {
            magazineObj[magazine[i]]++;
        } else {
            magazineObj[magazine[i]] = 1;
        }
    }

    for(let j = 0; j < ransomNote.length; j++) {
        if(!magazineObj[ransomNote[j]] || magazineObj[ransomNote[j]] === 0) {
            return false;
        } else {
            magazineObj[ransomNote[j]]--;
        }
    }

    return true;
};




// testing
console.log(canConstruct("a", "b"));
console.log(canConstruct("aa", "ab"));
console.log(canConstruct("aa", "aab"));