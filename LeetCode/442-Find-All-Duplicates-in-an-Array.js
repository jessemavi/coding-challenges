/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    // create an empty result array
    // create an obj
    // iterate over nums
        // if number already exists in the obj
            // add number to the array
        // else
            // add number to the obj with value set to 1
    // return result array
    
    let result = [];
    let obj = {};
    
    for(let i = 0; i < nums.length; i++) {
        if(obj[nums[i]]) {
            result.push(nums[i]);
        } else {
            obj[nums[i]] = 1;
        }
    }
    
    return result;
};