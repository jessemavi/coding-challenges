/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    // iterate over nums
        // if target is found
            // return index
        // if number is greater than target
            // return current index(where target should be inserted)
            
    // if iterated over the entire nums array target should be inserted at the end
    // return last index of nums array + 1
    
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === target) {
            return i;
        }
        if(nums[i] > target) {
            return i;
        }
    }
    
    return nums.length;
};