/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    // result array
    // obj
    
    // iterate over nums array
        // if num is in obj
            // increment its count
        // else
            // add the num to the obj with a value of 1
    
    // iterate from 1 to n
        // if i isn't in obj
            // add it to result
            
    // O(n) time, O(n) space complexity
            
    let result = [];
    let obj = {};
    
    for(let i = 0; i < nums.length; i++) {
        if(obj[nums[i]]) {
            obj[nums[i]] = nums[i];
        } else {
            obj[nums[i]] = 1;
        }
    }
    
    for(let i = 1; i <= nums.length; i++) {
        if(!obj[i]) {
            result.push(i);
        }
    }
    
    return result;
};