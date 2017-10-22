/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    // Plan: iterate over the matrix. If a zero is found add its row and column to an array. Go through the array and set row and column to zero for each zero.

    // Psuedocode:
    // coordinatesToSet array

    // setRowAndColumn function(row, column):
        // iterate over matrix row
            // set each value to 0
        // iterate over matrix column
            // set each value to 0

    // iterate over matrix rows
        // iterate over matrix columns
            // if value is 0
                // store row and column position in a tuple in coordinatesToSet array

    // iterate over coordinatesToSet
        // invoke setRowAndColumn with row, column

    const coordinatesToSet = [];

    const setRowAndColumn = (row, column) => {
        for(let i = 0; i < matrix[row].length; i++) {
            matrix[row][i] = 0;
        }

        for(let j = 0; j < matrix.length; j++) {
            matrix[j][column] = 0;
        }
    }

    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[0].length; j++) {
            if(matrix[i][j] === 0) {
                coordinatesToSet.push([i,j]);
            }
        }
    }

    for(let k = 0; k < coordinatesToSet.length; k++) {
        setRowAndColumn(coordinatesToSet[k][0], coordinatesToSet[k][1]);
    }

    return matrix;
};




// example:
/*
[
    [4,8,2,6],
    [1,6,3,9],
    [1,9,5,X],
    [3,1,6,7],
    [9,3,4,6],
    [2,X,3,4]
]
[
    [4,0,2,0],
    [1,0,3,0],
    [0,0,0,0],
    [3,0,6,0],
    [9,0,4,0],
    [0,0,0,0]
]
*/

// testing
console.log(setZeroes(
    [
        [4,8,2,6],
        [1,6,3,9],
        [1,9,5,0],
        [3,1,6,7],
        [9,3,4,6],
        [2,0,3,4]
    ]
));
