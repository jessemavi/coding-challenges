/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    // variable for current number of consecutive 1s set to zero
    // variable for max number of consecutive 1s set to zero
    
    // iterate over nums array
        // if nums[i] is 1
            // add 1 to current number of consecutive 1s
            // if you are on the last element of nums(case where max number of consecutive 1s is at the end)
                // compare current number of consecutive 1s to max number of consecutive 1s to see if current is bigger
                    // set max to current
        // else if nums[i] is 0
            // compare current number of consecutive 1s to max number of consecutive 1s to see if current is bigger
                // set max to current
            // reset current to 0
    // return max number
    
    let current1s = 0
    let max1s = 0;
    
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === 1) {
            current1s++;
            if(i === nums.length - 1) {
                if(current1s > max1s) {
                    max1s = current1s;
                }
            }
        } else {
            if(current1s > max1s) {
                max1s = current1s;
            }
            current1s = 0;
        }
    }
    
    return max1s;
};