/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    // create an empty array to store results
    // iterate from 1 to n
        // if number is multiple of 3 and 5
            // add 'FizzBuzz' to result array
        // else if number is multiple of three
            // add 'Fizz' to result array
        // else if number is multiple of five
            // add 'Buzz' to result array
        // else add stringified number to results array
    // return result array
    
    let result = [];
    
    for(let i = 1; i <= n; i++) {
        if(i % 3 === 0 && i % 5 === 0) {
            result.push('FizzBuzz');
        } else if(i % 3 === 0) {
            result.push('Fizz');
        } else if(i % 5 === 0) {
            result.push('Buzz');
        } else {
            result.push('' + i);
        }
    }
    
    return result;
};