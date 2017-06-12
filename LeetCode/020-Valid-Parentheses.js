/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // create an obj to store pairs of brackets
    
    // create a stack to store opening brackets
    
    // iterate over string
        // if character is an opening bracket
            // push onto stack
        // if character is a closing bracket
            // check if it does not match the pop value from the stack
                // return false
    
    // if stack is empty
        // return true
        
    const pairs = {
        '(': ')', 
        '{': '}', 
        '[': ']'
    };
    
    let stack = [];
    
    for(let i = 0; i < s.length; i++) {
        if(Object.keys(pairs).indexOf(s[i]) > -1) {
            stack.push(s[i]);
            continue;
        } else {
            const expectedOpeningBracket = stack.pop();
            if(s[i] !== pairs[expectedOpeningBracket]) {
                return false;
            }
        }
    }
    
    return stack.length === 0;
};