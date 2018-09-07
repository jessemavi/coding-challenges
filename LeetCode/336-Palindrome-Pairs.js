/*
Given a list of unique words, find all pairs of distinct indices (i, j) in the given list, so that the concatenation of the two words, i.e. words[i] + words[j] is a palindrome.

Example 1:
Input: ["abcd","dcba","lls","s","sssll"]
Output: [[0,1],[1,0],[3,2],[2,4]] 
Explanation: The palindromes are ["dcbaabcd","abcddcba","slls","llssssll"]

Example 2:
Input: ["bat","tab","cat"]
Output: [[0,1],[1,0]] 
Explanation: The palindromes are ["battab","tabbat"]
*/

/**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function(words) {
    // Plan: nested loops iterating over words. At each iteration check if the outer word concatenated with the inner word is a a palindrome and also check if the inner word concatenated with the outer word is a palindrome.
    // **need to redo with more efficient solution

    const indices = [];

    const isPalindrome = (word) => {
        let i1 = 0;
        let i2 = word.length - 1;
        while(i1 <= i2) {
            if(word[i1] !== word[i2]) {
                return false;
            }
            i1++;
            i2--;
        }
        return true;
    };

    for(let i = 0; i < words.length; i++) {
        for(let j = i + 1; j < words.length; j++) {
            if( isPalindrome(words[i].concat(words[j])) === true ) {
                indices.push( [i, j] );
            }
            if( isPalindrome(words[j].concat(words[i])) === true ) {
                indices.push( [j, i] );
            }
        }
    }

    return indices;
};




const assert = require('assert');

assert.deepEqual( palindromePairs(["abcd","dcba","lls","s","sssll"]), [[0,1],[1,0],[3,2],[2,4]] );
assert.deepEqual( palindromePairs(["bat","tab","cat"]), [[0,1],[1,0]] );
