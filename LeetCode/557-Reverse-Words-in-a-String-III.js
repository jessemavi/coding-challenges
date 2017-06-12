/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(string) {
    // result empty string

    // iterate over string
        // if next character is a space or i is at the end
        // iterate in reverse
            // if current character is not a space
                // add character
        // if not last word
            // add a space to result
            
    // return result
        
    let result = '';
    
    for(let i = 0; i < string.length; i++) {
        if(string[i + 1] === ' ' || i === string.length - 1) {
            for(let j = i; j >= 0; j--) {
                if(string[j] !== ' ') {
                    result += string[j];
                } else {
                    break;
                }
            }
            if(i !== string.length - 1) {
                result += ' ';
            }
        }
    }
    
    return result;
};