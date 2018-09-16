/*
Given an array of non-negative integers, you are initially positioned at the first index of the array.
Each element in the array represents your maximum jump length at that position.
Determine if you are able to reach the last index.

Example 1:
Input: [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

Example 2:
Input: [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.

*Solution: article with top down and bottom up dynamic programming solutions
https://leetcode.com/articles/jump-game/
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) { 
    let reachedLastIndex = false;

    const jump = (array, currentIndex) => {
        if(reachedLastIndex === true) {
            return;
        }
        if(currentIndex === nums.length - 1) {
            reachedLastIndex = true;
            return;
        }
        if(currentIndex + array[currentIndex] === array.length - 1) {
            // console.log('can jump straight to the end');
            reachedLastIndex = true;
            return;
        }
        // start i at 1 to be able to start jumping 1 step and then increasing up to and including current value. 
        // If current value is 0, conditional is not met and will not recurse
        for(let i = 1; i <= array[currentIndex]; i++) {
            jump(array, currentIndex + i);
        }
    };

    jump(nums, 0);

    return reachedLastIndex;
};

const assert = require('assert');
assert.equal( canJump([2,3,1,1,4]), true );
assert.equal( canJump([3,2,1,0,4]), false );
assert.equal( canJump([2,0,0]), true );

/*
Status: Time Limit Exceeded
74 / 75 test cases passed.
*/


/*
[2,3,1,1,4]
[]

*/
