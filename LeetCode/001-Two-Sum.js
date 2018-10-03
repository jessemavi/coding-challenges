/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // Plan #1: Iterate over nums and add each number and its index to a hash table. Iterate over nums and see if the number needed to add to current num to equal the target exists and return both indices.
    // O(n) time and O(n) space

    // Plan #2: sort nums using quick sort and then iterate through seeing which two numbers add up to the target.

    // Psuedocode(Plan #1):
    // numberAndIndex hash table

    // iterate over nums
        // add number and its index to numberAndIndex

    // iterate over nums
        // if number needed to add to current number exists in numberAndIndex
            // return an array of current number index and number needed index

    const numberAndIndex = {};

    for(let i = 0; i < nums.length; i++) {
        numberAndIndex[nums[i]] = i;
    }

    for(let j = 0; j < nums.length; j++) {
        if(numberAndIndex[target - nums[j]]) {
            return [j, numberAndIndex[target - nums[j]]];
        }
    }
};




// testing
const assert = require('assert');
assert.deepEqual(twoSum([2, 7, 11, 15], 9), [0,1]);
assert.deepEqual(twoSum([4, 7, 2, 5, 1, 9, 11], 15), [0,6]);
