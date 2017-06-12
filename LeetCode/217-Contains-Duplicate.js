/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // create an obj
    // iterate over nums array
        // if number doesn't exist in the obj
            // add it with a value of 1
        // if number does exist in the obj
            // found a duplicate and can return true
    // return false -> no duplicates found in the array
    
    let obj = {};
    
    for(let i = 0; i < nums.length; i++) {
        if(obj[nums[i]]) {
            return true;
        } else {
            obj[nums[i]] = 1;
        }
    }
    
    return false;
};