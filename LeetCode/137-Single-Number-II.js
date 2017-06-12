/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    // [1, 2, 3, 5, 1, 2, 5, 2, 1, 5] --> 3
    // if a number appears more than once its not the number
    
    // O(n) time and O(n) space complexity
    // obj to store number and occurence
    
    // iterate over array
        // if number already exists in the obj
            // add one to its value
        // if number doesn't exist
            // add it with a value of one
    
    // iterate over obj
        // return number with a value of 1
        
    let obj = {};
    
    for(let i = 0; i < nums.length; i++) {
        if(obj[nums[i]]) {
            obj[nums[i]]++;
        } else {
            obj[nums[i]] = 1;
        }
    }
    
    for(let key in obj) {
        if(obj[key] === 1) {
            return JSON.parse(key);
        }
    }
    
};