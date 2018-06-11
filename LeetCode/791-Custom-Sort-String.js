/*
S and T are strings composed of lowercase letters. In S, no letter occurs more than once.

S was sorted in some custom order previously. We want to permute the characters of T so that they match the order that S was sorted. More specifically, if x occurs before y in S, then x should occur before y in the returned string.

Return any permutation of T (as a string) that satisfies this property.

Example :
Input: 
S = "cba"
T = "abcd"
Output: "cbad"
Explanation: 
"a", "b", "c" appear in S, so the order of "a", "b", "c" should be "c", "b", and "a". 
Since "d" does not appear in S, it can be at any position in T. "dcba", "cdba", "cbda" are also valid outputs.
 

Note:

S has length at most 26, and no character is repeated in S.
T has length at most 200.
S and T consist of lowercase letters only.
*/

/**
 * @param {string} S
 * @param {string} T
 * @return {string}
 */
var customSortString = function(S, T) {
    // Plan: go through T and add letters and count to an object. Iterate over S and check to see if those characters are in T and add them to result and decrementing count. At the end iterate over object and add any remaining letters to result from T that weren't in S.

    // Psuedocode:
    // empty result string
    // empty object

    // iterate over T
        // if letter is not in object
            // add letter with a value of 1
        // else
            // increment letter value

    // iterate over S
        // if letter is in object
            // while letter value is greater than 0
                // add letter to result string
                // decrement letter value in object

    // iterate over object
        // if letter value is greater than 0
            // add letter to result string

    // return result

    let sortedString = '';
    const lettersObj = {};

    for(let i = 0; i < T.length; i++) {
        if(!lettersObj[T[i]]) {
            lettersObj[T[i]] = 1;
        } else {
            lettersObj[T[i]]++;
        }
    }

    console.log('lettersObj before adding to sortedString', lettersObj);

    for(let j = 0; j < S.length; j++) {
        if(lettersObj[S[j]]) {
            while(lettersObj[S[j]] > 0) {
                sortedString = sortedString.concat(S[j]);
                lettersObj[S[j]]--;
            }
        }
    }


    for(let key in lettersObj) {
        if(lettersObj[key] > 0) {
            while(lettersObj[key] > 0) {
                lettersObj[key]--;
                sortedString = sortedString.concat(key);
            }
        }
    }
    
    console.log('lettersObj after adding to sortedString', lettersObj);

    return sortedString;
};




// testing
const assert = require('assert');
assert.equal( customSortString("cba", "abcd"), "cbad" );
assert.equal( customSortString("therapyw", "weather"), "theeraw" );
assert.equal( customSortString("odg", "good"), "oodg" );

// 'hhhhhuucccwtzoampdgklexsqfjyvbnir'
// assert.equal( customSortString(
//     "hucw", 
//     "utzoampdgkalexslxoqfkdjoczajxtuhqyxvlfatmptqdsochtdzgypsfkgqwbgqbcamdqnqztaqhqanirikahtmalzqjjxtqfnh"), 
//     "hhhhhuucccwaaaaaaaaabbdddddeffffggggiijjjjkkkkllllmmmmnnnoooopppqqqqqqqqqqqrsssttttttttvxxxxxyyzzzzz"
// );





