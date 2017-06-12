/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    // obj for keeping track of number already visited
    
    // recursive function(takes in a number)
        // base case: number is 1
            // return true
        // base case: have already seen number more than once(start of infinite loop)
            // return false
        // get an array of number split into single digits
        // variable to keep track of sum
        // iterate over numArray
            // add the result of squaring each number to the sum
        // if sum exists in the obj
            // add one to its count
        // else
            // add to the obj with a value of 1
        // return recursive function passing in the sum
    
    // return recursive function passing in n

    let obj = {};

    let recursiveFunc = (number) => {
        if(number === 1) {
            return true;
        }
        
        if(obj[number] === 2) {
            return false;
        }

        let numArray = number.toString().split('');
        let sum = 0;
        
        for(let i = 0; i < numArray.length; i++) {
            sum += Number(numArray[i]) * Number(numArray[i]);
        }

        if(obj[sum]) {
            obj[sum]++;
        } else {
            obj[sum] = 1;
        }
        
        return recursiveFunc(sum);
    }

    return recursiveFunc(n);
};