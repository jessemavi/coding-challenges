/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    // result is number of segments
    // iterate over string
        // if character is not a space and is the last character
            // add 1 to the result
        // if character is not a space and character next to it is not a space(don't need to include this if statement)
            // continue to next character
        // if character is not a space and character next to it is a space
            // add 1 to the result
            
    let result = 0;
    
    for(let i = 0; i < s.length; i++) {
        if(s[i] !== ' ' && i === s.length - 1) {
            result++;
        }
        if(s[i] !== ' ' && s[i + 1] === ' ') {
            result++;
        }
    }
    
    return result;
};