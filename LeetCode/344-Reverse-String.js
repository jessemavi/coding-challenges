/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    // O(n) time and O(n) space complexity
    // create a result string
    // iterate over the string in reverse
        // add each character to result
        
    let result = '';
    
    for(let i = s.length - 1; i >= 0; i--) {
        result += s[i];
    }
    
    return result;
};