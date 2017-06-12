/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    // assuming all nums in array are positive
    // create an obj
    // iterate over nums array
        // add each element to the obj
    // iterate from 0 to nums.length + 1(add one in the case where the missing number is at the end which would be the last number + 1)
        // if i doesn't exist in the obj it's the missing number
            // return i
    // if the missing number is the last 
    // O(n) time complexity
    // O(n) space complexity
    
    let obj = {};
    
    for(let i = 0; i < nums.length; i++) {
        obj[nums[i]] = nums[i];
    }
    
    for(let i = 0; i < nums.length + 1; i++) {
        if(obj[i] !== i) {
            return i;
        }
    }
    
};