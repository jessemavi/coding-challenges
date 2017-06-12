/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    // I: array, O: number, C: none, E: array has only one element
    
    // if nums length is 1
        // return first number
        
    // obj to store elements and their count
    // variable for majority(n / 2)
    
    // iterate over nums
        // if num exists in obj
            // increase its count
            // check if its the majority element
                // return element
        // else
            // add num to obj with a count of 1
        
    if(nums.length === 1) {
        return nums[0];
    }
    
    let numsObj = {};
    let majority = nums.length / 2;

    for(let i = 0; i < nums.length; i++) {
        if(numsObj[nums[i]]) {
            numsObj[nums[i]]++;
            if(numsObj[nums[i]] > majority) {
                return nums[i];
            }
        } else {
            numsObj[nums[i]] = 1;
        }
    }
    
};