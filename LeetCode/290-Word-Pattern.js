/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    // change str into an array
    // empty obj
    
    // iterate over pattern
        // if pattern letter doesn't exist in obj and word doesn't already exist in obj
            // add pattern letter and str word to obj ex: {'a': 'dog', 'b':'cat'}
        // if pattern letter exits in obj
            // check if corresponding str word doesn't match the word in the obj for the pattern
                // return false
    
    str = str.split(' ');
    let obj = {};
    
    if(str.length !== pattern.length) {
        return false;
    }
    
    for(let i = 0; i < pattern.length; i++) {
        if(!obj[pattern[i]] && Object.values(obj).indexOf(str[i]) === -1) {
            obj[pattern[i]] = str[i];
        } else {
            if(str[i] !== obj[pattern[i]]) {
                return false;
            }
        }
    }
    
    return true;
};