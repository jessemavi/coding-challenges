/*
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.
A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

Example:
Input: "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].

Note:
Although the above answer is in lexicographical order, your answer could be in any order you want.
*/

/**
 * @param {string} digits
 * @return {string[]}
*/
var letterCombinations = function(digits) {
    if(digits === '') {
        return [];
    }

    const phone = {
       '2': ['a','b','c'],
       '3': ['d','e','f'],
       '4': ['g','h','i'],
       '5': ['j','k','l'],
       '6': ['m','n','o'],
       '7': ['p','q','r','s'],
       '8': ['t','u','v'],
       '9': ['w','x','y','z']
    };

    const allCombinations = [];

    const getAllCombinations = (currentCombination, digits) => {
        if(digits.length === 0) {
            console.log('reached base case', currentCombination);
            allCombinations.push(currentCombination);
            return;
        }

        const digitLetters = phone[digits[0]];
        for(let i = 0; i < digitLetters.length; i++) {
            console.log('currentCombination:', currentCombination);
            console.log('current letter:', digitLetters[i]);
            getAllCombinations(currentCombination + digitLetters[i], digits.slice(1));
        }
    };

    getAllCombinations('', digits);

    return allCombinations;
};




const assert = require('assert');
assert.deepEqual( letterCombinations("23"), ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"] );
// console.log( letterCombinations('2256') );
