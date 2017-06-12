/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(string) {
    // **account for cases where there are empty spaces at the end**
    
    // variable for length of last word set to 0
    
    // if string is empty
        // return 0
    
    // iterate over the string in reverse
        // if character is an empty space
            // continue to next iteration/character
        // else if character is a non-space
            // iterate from i in reverse 
                // if character is a non-space
                    // add one to length of last word
                // else
                    // return length of last word
            // return length(if last word goes all the way to the beginning of the string)
    // return 0(if string is all empty spaces)
                    
    let length = 0;
    
    if(string.length === 0) {
        return 0;
    }
    
    for(let i = string.length - 1; i >= 0; i--) {
        if(string[i] === ' ') {
            continue;
        } else {
            for(let j = i; j >= 0; j--) {
                if(string[j] !== ' ') {
                    length++;
                } else {
                    return length;
                }
            }
            return length;
        }
    }
    
    return length;
    
};