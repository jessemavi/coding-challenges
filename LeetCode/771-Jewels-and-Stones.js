// You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.
// The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Example 1:
// Input: J = "aA", S = "aAAbbbb"
// Output: 3

// Example 2:
// Input: J = "z", S = "ZZ"
// Output: 0

// Note:
// S and J will consist of letters and have length at most 50.
// The characters in J are distinct.

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    // Plan: add each type of stone from J to a hash table. Iterate over stones S and if stone is a jewel increment number of jewels.
    // O(n) space and O(n) time complexity

    let numberOfJewels = 0;
    const jewels = {};

    for(let i = 0; i < J.length; i++) {
        jewels[J[i]] = J[i];
    }

    for(let j = 0; j < S.length; j++) {
        if(jewels[S[j]]) {
            numberOfJewels++;
        }
    }

    return numberOfJewels;
};




// testing
const assert = require('assert');
assert.equal(numJewelsInStones("aA", "aAAbbbb"), 3);
assert.equal(numJewelsInStones("z", "ZZ"), 0);
