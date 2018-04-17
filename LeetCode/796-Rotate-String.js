// We are given two strings, A and B.
// A shift on A consists of taking string A and moving the leftmost character to the rightmost position. For example, if A = 'abcde', then it will be 'bcdea' after one shift on A. Return True if and only if A can become B after some number of shifts on A.

// Example 1:
// Input: A = 'abcde', B = 'cdeab'
// Output: true

// Example 2:
// Input: A = 'abcde', B = 'abced'
// Output: false
// Note:

// A and B will have length at most 100.

/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString = function(A, B) {
    // Plan: keep a count of number of checks. While number of checks is less than string a length take a substring of a from second char to the last char and add first char to it. Then check if it equals b and return true. Return false by default.
    // Edge cases: A or B is empty, A and B are different lengths
    // O(n^2) time complexity and O(1) space complexity

    // Psuedocode:
    // if A and B are different lengths
        // return false
    // if A or B is an empty strings
        // return true

    // variable for number of checks set to 0
    // variable for shifted string set to string a

    // while number of checks is less than string a length
        // set shifted string to substring of shifted string from 2nd char to the end plus the first char
        // if shifted string equals string b
            // return true
        // increment number of checks

    // return false

    if(A.length !== B.length) {
        return false;
    }
    if(A.length === 0 || B.length === 0) {
        return true;
    }

    let numberOfChecks = 0;
    let shiftedString = A;

    while(numberOfChecks < A.length) {
        shiftedString = shiftedString.substring(1).concat(shiftedString[0]);
        if(shiftedString === B) {
            return true;
        }
        numberOfChecks++;
    }
    return false;
};




// testing
const assert = require('assert');
assert.equal( rotateString('abcde', 'cdeab'), true );
assert.equal( rotateString('abcde', 'abced'), false );
assert.equal( rotateString('', ''), true );
assert.equal( rotateString('a', ''), false );
