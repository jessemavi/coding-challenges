// In MATLAB, there is a very useful function called 'reshape', which can reshape a matrix into a new one with different size but keep its original data.
// You're given a matrix represented by a two-dimensional array, and two positive integers r and c representing the row number and column number of the wanted reshaped matrix, respectively.
// The reshaped matrix need to be filled with all the elements of the original matrix in the same row-traversing order as they were.
// If the 'reshape' operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.

// Example 1:
// Input: 
// nums = 
// [[1,2],
//  [3,4]]
// r = 1, c = 4
// Output: 
// [[1,2,3,4]]
// Explanation:
// The row-traversing of nums is [1,2,3,4]. The new reshaped matrix is a 1 * 4 matrix, fill it row by row by using the previous list.

// Example 2:
// Input: 
// nums = 
// [[1,2],
//  [3,4]]
// r = 2, c = 4
// Output: 
// [[1,2],
//  [3,4]]
// Explanation:
// There is no way to reshape a 2 * 2 matrix to a 2 * 4 matrix. So output the original matrix.

// Note:
// The height and width of the given matrix is in range [1, 100].
// The given r and c are all positive.

/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
    // Plan: Iterate over nums and add numbers to a matrix adding a new row whenever the column limit is reached. If matrix row length or column length doesn't match return original matrix.

    // Psuedocode:
    // empty matrix

    // iterate over nums rows
        // iterate over nums values
            // if last(current) row length equals c
                // add a new row
            // add number to last row in matrix

    // if matrix length doesn't equal r or last row length doesn't equal c
        // return nums
    // else
        // return matrix

    const matrix = [[]];

    for(let i = 0; i < nums.length; i++) {
        for(let j = 0; j < nums[i].length; j++) {
            if(matrix[matrix.length - 1].length === c) {
                matrix.push([]);
            }
            matrix[matrix.length - 1].push(nums[i][j]);
        }
    }

    if(matrix.length !== r || matrix[matrix.length - 1].length !== c) {
        return nums;
    } else {
        return matrix;
    }
};




// testing
const assert = require('assert');
assert.deepEqual( matrixReshape([[1,2],[3,4]], 1, 4), [[1,2,3,4]] );
assert.deepEqual( matrixReshape([[1,2],[3,4]], 2, 4), [[1,2],[3,4]] );
