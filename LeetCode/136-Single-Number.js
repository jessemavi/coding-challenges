/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    // create an empty object
    // iterate over nums and add each number as a key and its number of occurences as a value
    // iterate over the obj and return the number that only occurs once
    // time complexity: O(n) JSON.parse is O(n) but only happens once so worst case for that loop is O(n + 1) -> O(n)
    // space complexity: O(n)
    
    var obj = {};
    
    for(var i = 0; i < nums.length; i++) {
        if(obj[nums[i]]) {
            obj[nums[i]]++;
        } else {
            obj[nums[i]] = 1;
        }
    }
    
    for(var key in obj) {
        if(obj[key] === 1) {
            return JSON.parse(key);
        }
    }
    
};