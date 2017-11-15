/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    // Could sort and then iterate looking for number that is missing and number that occurs twice
    // Plan: Keep track of largest number in nums. Iterate over nums and add number and its frequency to a hash table and also updating largest number. If a number already exists in the hash table add it to the result array. Iterate from 1 to largest number and if a number doesn't exist in the hash table add it to the result array.
    // O(n) time and O(n) space complexity
    // Edge cases: 1 is the missing number(ex: nums is [2,2]) -> [1,2] iterate from 1 to largest number, missing number is largest number + 1(ex: [1,1] or [1,5,3,2,2,7,6,4,8,9]) -> check at the end if second value in result array is undefined and if so add the largest number + 1

    const errorNums = [];
    let largestNumber = nums[0];
    const numsAndFreq = {};

    for(let i = 0; i < nums.length; i++) {
        if(!numsAndFreq[nums[i]]) {
            numsAndFreq[nums[i]] = 1;
        } else {
            errorNums[0] = nums[i];
        }

        if(nums[i] > largestNumber) {
            largestNumber = nums[i];
        }
    }

    for(let j = 1; j <= largestNumber; j++) {
        if(!numsAndFreq[j]) {
            errorNums[1] = j;
        }
    }

    if(errorNums[1] === undefined) {
        errorNums[1] = largestNumber + 1;
    }

    return errorNums;
};




// testing
const assert = require('assert');
assert.deepEqual(findErrorNums([1,2,2,4]), [2,3]);
assert.deepEqual(findErrorNums([2,2]), [2,1]);
assert.deepEqual(findErrorNums([1,1]), [1,2]);
assert.deepEqual(findErrorNums([1,5,3,2,2,7,6,4,8,9]), [2,10])
