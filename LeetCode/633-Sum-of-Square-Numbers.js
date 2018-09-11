// Given a non-negative integer c, your task is to decide whether there're two integers a and b such that a2 + b2 = c.

// Example 1:
// Input: 5
// Output: True
// Explanation: 1 * 1 + 2 * 2 = 5

// Example 2:
// Input: 3
// Output: False

/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    const squareRootOfc = Math.sqrt(c);
        
    for(let i = Math.floor(squareRootOfc); i >= 0; i--) {
        for(let j = i; j >= 0; j--) {
            if((i * i) + (j * j) === c) {
                return true;
            }
        }
    }
    return false;
};




// Status: Time Limit Exceeded
// 103 / 124 test cases passed.
// Last executed input: 2147483643

// testing
// console.log(judgeSquareSum(64));
// console.log(judgeSquareSum(5000));
// console.log(judgeSquareSum(2147483643));
