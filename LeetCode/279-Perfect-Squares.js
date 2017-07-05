/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    // Plan: 
    // DFS search on all perfect squares less than or equal to n and keep track of the number of perfect squares that sum to n. If number of perfect squares is less than current minimum than set to current number
    // mark number as explored(not sure if you need to explicitely mark as explored)

    // Psuedocode:
    // variable for minimumNumberOfSquares set to undefined(can't set to 0)

    // obj to store all numbers that perfect squares up to and including n

    // iterate from 1 to number
        // calculate square of current number
        // if square is greater than n
            // break => no need to continue adding squares to obj
        // add perfect square to obj

    // dfs function(number, currentSumOfSquares, currentNumberOfSquares):
        // if currentSumOfSquares is equal to n and currentNumberOfSquares is less than minimumNumberOfSquares or currentSumOfSquares is equal to n and minimumNumberOfSquares is undefined
            // set minimumNumberOfSquares to currentSumOfSquares
            // return
        // if minimumNumberOfSquares is less than or equal to 2 or currentNumberOfSquares is greater than or equal to minimumNumberOfSquares
            // return
        // iterate from number down to 1
            // if number is a perfect square
                // if currentSumOfSquares + number is less than or equal to n
                    // invoke dfs on number and pass in updated currentSumOfSquares and currentNumberOfSquares

    // if n is a perfect square
        // return 1 => no need to do any searching
    // else if n / 2 is a perfect square
        // return 2 => no need to do any searching

    // invoke dfs with n, 0 as currentSumOfSquares, 0 as currentNumberOfSquares

    // return minimumNumberOfSquares

    let minimumNumberOfSquares;

    const perfectSquares = {};

    for(let i = 1; i <= n; i++) {
        const squareNumber = i * i;
        if(squareNumber > n) {
            break;
        }
        perfectSquares[squareNumber] = squareNumber;
    }

    let dfsNumberOfCalls = 0;

    // console.log(perfectSquares);

    if(perfectSquares[n]) {
        return 1;
    } else if(perfectSquares[n / 2]) {
        return 2;
    }

    const dfs = (number, currentSumOfSquares, currentNumberOfSquares) => {
        dfsNumberOfCalls++;
        // console.log('number', number, 'currentSumOfSquares', currentSumOfSquares, 'currentNumberOfSquares', currentNumberOfSquares);

        if((currentSumOfSquares === n && currentNumberOfSquares < minimumNumberOfSquares) || (currentSumOfSquares === n && !minimumNumberOfSquares)) {
            // console.log('setting minimumNumberOfSquares ' + minimumNumberOfSquares +  ' to currentNumberOfSquares ' + currentNumberOfSquares);
            minimumNumberOfSquares = currentNumberOfSquares;
            return;
        }

        if(minimumNumberOfSquares <= 2 || currentNumberOfSquares >= minimumNumberOfSquares) {
            // console.log('no need to continue searching');
            return;
        }

        for(let i = number; i >= 1; i--) {
            if(perfectSquares[i]) {
                if(currentSumOfSquares + i <= n) {
                    dfs(i, currentSumOfSquares + i, currentNumberOfSquares + 1);
                }
            }
        }
    };

    dfs(n, 0, 0);

    // console.log('dfsNumberOfCalls', dfsNumberOfCalls);
    return minimumNumberOfSquares;
};




// testing
// console.log(numSquares(12));
// console.log(numSquares(13));
// console.log(numSquares(15));
// console.log(numSquares(18));
// console.log(numSquares(20));
// console.log(numSquares(32));
// console.log(numSquares(41));
// console.log(numSquares(82));
// console.log(numSquares(1));
// console.log(numSquares(16));
// console.log(numSquares(121));
// console.log(numSquares(0));
// console.log(numSquares(500));

// dfsNumberOfCalls 559377 for 6175 => need to find a more efficient way
// console.log(numSquares(6175));

// can handle the following examples by first searching for any possibilities of the minimum being 2 in a nested for loop iterating over an array of the perfect squares less than n
// console.log(numSquares(6665));
// console.log(numSquares(7691));
