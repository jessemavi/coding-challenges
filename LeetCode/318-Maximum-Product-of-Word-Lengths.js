/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
    // **Inefficient solution. Need to find a faster solution. Maybe use a hash table**
    // Plan: Iterate over words and in a nested loop iterate over the remaining words. In another nested loop iterate over the letters in the second word and see if any are in the initial word being looked at in the first outermost loop. If not then check if the length of outermost word * innermost word is longer than maximum length.
    // O(n^3) time and O(1) space complexity
    // Edge cases: words has a length of 1 or less -> return 0

    // Psuedocode:
    // if words is empty
        // return 0

    // maximum length variable set to 0

    // iterate over words
        // iterate words starting at next word
            // iterate over letters in next word
                // variable for moving to next word set to false
                // if letter of next word is in the first word
                    // set variable for moving to next word to true
            // if variable for moving to next word is false and length of next word * initial word is greater than maximum length
                // update maximumLength to length of next word * initial word

    // return maximumLength

    if(words.length <= 1) {
        return 0;
    }

    let maximumLength = 0;

    for(let a = 0; a < words.length; a++) {
        for(let b = a + 1; b < words.length; b++) {
            let moveToNextWord = false;
            for(let c = 0; c < words[b].length; c++) {
                if(words[a].indexOf(words[b][c]) >= 0) {
                    moveToNextWord = true;
                }
            }
            if(moveToNextWord === false && words[a].length * words[b].length > maximumLength) {
                maximumLength = words[a].length * words[b].length;
            }
        }
    }

    return maximumLength;
};




// testing
const assert = require('assert');
assert.equal(maxProduct(["abcw", "baz", "foo", "bar", "xtfn", "abcdef"]), 16);
assert.equal(maxProduct(["a", "ab", "abc", "d", "cd", "bcd", "abcd"]), 4);
assert.equal(maxProduct(["a", "aa", "aaa", "aaaa"]), 0);
