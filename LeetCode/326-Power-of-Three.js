/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    // Psuedocode:
    // if n is 1
        // return true => 3^0 === 1
    // set number to 3
    // while number is not greater than n
        // multiply number by three
        // if number equals n
            // return true
    // return false

    if(n === 1) {
        return true;
    }

    let number = 3;

    while(number <= n) {
        if(number === n) {
            return true;
        }
        number *= 3;
    }

    return false;
};




// testing
// console.log(isPowerOfThree(243));
// console.log(isPowerOfThree(3));
// console.log(isPowerOfThree(1));
