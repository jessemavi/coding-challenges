// A matrix is Toeplitz if every diagonal from top-left to bottom-right has the same element.
// Now given an M x N matrix, return True if and only if the matrix is Toeplitz.
 
// Example 1:
// Input: matrix = [[1,2,3,4],[5,1,2,3],[9,5,1,2]]
// Output: True
// Explanation:
// 1234
// 5123
// 9512

// In the above grid, the diagonals are "[9]", "[5, 5]", "[1, 1, 1]", "[2, 2, 2]", "[3, 3]", "[4]", and in each diagonal all elements are the same, so the answer is True.

// Example 2:
// Input: matrix = [[1,2],[2,2]]
// Output: False
// Explanation:
// The diagonal "[1, 2]" has different elements.

// Note:
// matrix will be a 2D array of integers.
// matrix will have a number of rows and columns in range [1, 20].
// matrix[i][j] will be integers in range [0, 99].

/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
    // Plan: Have a function that traverses the matrix from a starting point and goes down and to the right and validates the diagonal. Invoke the function with the values in the first column and first row of the matrix.

    // Psuedocode:
    // variable for toeplitzMatrix set to true

    // validateDiagonal function(row, column):
        // if next row or column on the matrix doesn't exist(not in the matrix)
            // return
        // if next diagonal position value on the matrix is not equal to current matrix value
            // set toeplitzMatrix to false
            // return
        // if next diagonal position value on the matrix is equal to current matrix value
            // invoke validateDiagonal with next diagonal row and column

    // iterate over first row in matrix
        // if toeplitzMatrix is true
            // invoke validateDiagonal with row and column

    // iterate over first column in matrix
        // if toeplitzMatrix is true
            // invoke validateDiagonal with row and column

    // return toeplitzMatrix

    let toeplitzMatrix = true;

    const validateDiagonal = (row, column) => {
        if(row === matrix.length - 1 || column === matrix[0].length - 1) {
            // console.log('next diagonal does not exist', row, column, matrix[row][column]);
            return
        }
        if(matrix[row + 1][column + 1] !== matrix[row][column]) {
            toeplitzMatrix = false;
            return;
        }
        if(matrix[row + 1][column + 1] === matrix[row][column]) {
            validateDiagonal(row + 1, column + 1);
        }
    };

    for(let i = 0; i < matrix[0].length; i++) {
        if(toeplitzMatrix === true) {
            validateDiagonal(0, i);
        }
    }

    for(let j = 1; j < matrix.length; j++) {
        if(toeplitzMatrix === true) {
            validateDiagonal(j, 0);
        }
    }

    return toeplitzMatrix;
};




// testing
const assert = require('assert');

assert.equal(isToeplitzMatrix(
    [
        [1,2,3,4],
        [5,1,2,3],
        [9,5,1,2]
    ]
), true);

assert.equal(isToeplitzMatrix(
    [
        [1,2,3,4,3],
        [5,1,2,3,6],
        [9,5,1,2,9]
    ]
), false);


assert.equal(isToeplitzMatrix(
    [
        [1,2],
        [2,2]
    ]
), false);
