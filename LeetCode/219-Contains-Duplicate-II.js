/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    // [1, 2, 3, 5, 3, 6, 7] 2 --> true
    // [1,0,1,1] 1 --> should be true not false
    
    // empty obj
    
    // iterate over nums
        // if number is already in obj
            // iterate backwards starting at the previous value
                // check if previous occurence of number can be found within k spaces
                    // return true
        // else if number is not in obj
            // add it to obj with a value of 1
            
    // return false(default)
    
    let obj = {};
    let flag = false;
    
    for(let i = 0; i < nums.length; i++) {
        if(obj[nums[i]]) {
            for(let j = i - 1; j > i - k - 1; j--) {
                if(nums[j] === nums[i]) {
                    return true;
                }
            }
        } else {
            obj[nums[i]] = 1;
        }
    }
    
    return false;
};