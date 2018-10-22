/*
Given a non-empty array of digits representing a non-negative integer, plus one to the integer.
The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.
You may assume the integer does not contain any leading zero, except the number 0 itself.

Example 1:
Input: [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.

Example 2:
Input: [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
*/

/*
[2,5,9] -> [2,6,0]
[4,9,9] -> [5,0,0]
[9,9,9] -> [1,0,0,0]

- three cases:
    - if last number is not a nine
        - add one to last number
    - last number is a 9
        - set to 0
        - keep track of carry and add one to the previous number
    - first number is a 9
        - need to add a 1 to the beginning
*/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let carry = 0;

    for(let i = digits.length - 1; i >= 0; i--) {
        if(digits[i] === 9) {
            digits[i] = 0;
            carry = 1;

            if(i === 0) {
                digits.unshift(1);
                break;
            }
        } else {
            digits[i]++;
            break;
        }
    }

    return digits;
};




const assert = require('assert');
assert.deepEqual( plusOne([1,2,3]), [1,2,4] );
assert.deepEqual( plusOne([4,3,2,1]), [4,3,2,2] );
assert.deepEqual( plusOne([2,5,9]), [2,6,0] );
assert.deepEqual( plusOne([4,9,9]), [5,0,0] );
assert.deepEqual( plusOne([9,9,9]), [1,0,0,0] );
