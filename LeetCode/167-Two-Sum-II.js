/*
Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.
The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2. Please note that your returned answers (both index1 and index2) are not zero-based.
You may assume that each input would have exactly one solution and you may not use the same element twice.
Input: numbers={2, 7, 11, 15}, target=9
Output: index1=1, index2=2
*/

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    // Plan: Iterate and store numbers and index + 1 in hash table. If number needed to add to number is on the hash table return indices with index 1 less than index 2.
    // O(n) time and space complexity

    const numbersAndIndices = {};

    for(let i = 0; i < numbers.length; i++) {
      if(numbersAndIndices[target - numbers[i]]) {
        return [ numbersAndIndices[target - numbers[i]], i + 1 ];
      }
      numbersAndIndices[numbers[i]] = i + 1;
    }
};




// testing
const assert = require('assert');
assert.deepEqual( twoSum([2,7,11,15], 9), [1,2] );
assert.deepEqual( twoSum([2,3,4], 6), [1,3] );
assert.deepEqual( twoSum([1,2,4,6,7,8,11,14,17,18,19,22], 17), [4,7] );
assert.deepEqual( twoSum([-3,-2,2,3,6,8], 4), [2,5] );
