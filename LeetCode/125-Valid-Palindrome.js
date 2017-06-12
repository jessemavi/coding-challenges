/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    // if string is empty
        // return true
    // have two pointers for start and end of string(use index values)
    
    // while the start pointer is less than the end pointer
        // if start is at a non-alphanumeric character
            // increment start
            // continue to next iteration
        // if end is at a non-alphanumeric character
            // decrement end
            // continue to next iteration
        // if characters transformed to lowercase are not equal
            // return false
        // increment start and end to check next characters in next iteration
            
    // return true(gone through the entire string)
    
    if(s.length === 0) {
        return true;
    }
    
    let start = 0;
    let end = s.length - 1;
    let letterNumberRegex = /^[0-9a-zA-Z]+$/;
    
    while(start < end) {
        if(!s[start].match(letterNumberRegex)) {
            start++;
            continue;
        } else if(!s[end].match(letterNumberRegex)) {
            end--;
            continue;
        } else if(s[start].toLowerCase() !== s[end].toLowerCase()) {
            return false;
        }
        start++;
        end--;
    }
    
    return true;
};