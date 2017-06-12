/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
        // if first two letters are capital
            // iterate over word starting at 3rd letter
                // if any of the remaining letters are lowercase
                    // return false
            // return true
                    
        // if first letter is capital and second letter is not capital
            // iterate over word starting at 3rd letter
                // if any of the remaining letters are uppercase
                    // return false
            // return true
                    
        // if first letter is lowercase
            // iterate over word starting at 2rd letter
                // if any of the remaining letters are uppercase
                    // return false
            // return true
                
        // return false(default)
        
    if(word.length === 1) {
        return true;
    }
    
    if(word[0] === word[0].toUpperCase() && word[1] === word[1].toUpperCase()) {
        for(let i = 2; i < word.length; i++) {
            if(word[i] === word[i].toLowerCase()) {
                return false;
            }
        }
        return true;
    }
    
    if(word[0] === word[0].toUpperCase() && word[1] === word[1].toLowerCase()) {
        for(let i = 2; i < word.length; i++) {
            if(word[i] === word[i].toUpperCase()) {
                return false;
            }
        }
        return true;
    }
    
    if(word[0] === word[0].toLowerCase()) {
        for(let i = 1; i < word.length; i++) {
            if(word[i] === word[i].toUpperCase()) {
                return false;
            }
        }
        return true;
    }
    
};