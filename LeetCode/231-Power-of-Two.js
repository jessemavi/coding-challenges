/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    // if n is not 1 and is odd
        // return false
        
    // recursive function that takes in a power
        // get value of 2 raised to the power
        // if value equals n
            // return true
        // if value is greater than n
            // return false
        // return the result of recursively call function passing in 1 added to power
    
    // return the result of calling recursive function with 0 
            
    if(n !== 1 && n % 2 !== 0) {
        return false;
    }
    
    let recursiveFunction = (power) => {
        let currentPowerValue = Math.pow(2, power);
        if(currentPowerValue === n) {
            return true;
        }
        if(currentPowerValue > n) {
            return false;
        }
        return recursiveFunction(++power);
    }
    
    return recursiveFunction(0);
};