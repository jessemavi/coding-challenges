/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    // create an empty result array
    // create an empty obj
    
    // iterate over nums array
        // if number exists in the obj
            // increment its value by 1
        // else
            // add element to obj with a value of 1;
    
    // iterate over the obj
        // if value is 1
            // add the value to the result array
            
    // return result array
    
    let result = [];
    let obj = {};
    
    for(let i = 0; i < nums.length; i++) {
        if(obj[nums[i]]) {
            obj[nums[i]]++;
        } else {
            obj[nums[i]] = 1;
        }
    }
    
    for(var key in obj) {
        if(obj[key] === 1) {
            result.push(JSON.parse(key));
        }
    }
    
    return result;
};