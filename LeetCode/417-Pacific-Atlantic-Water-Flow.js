/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var pacificAtlantic = function(matrix) {
    // Plan: on each cell do a DFS search and see if you can get to both the pacific and atlantic
    // DFS will be faster because it will get you to an end result faster
        // can only explore(recurse) an edge(s,v) if the height of v is less than or equal to the height of s 
            // use if statements in DFS before recursing

    // Psuedocode:
    // DFS function(matrix, row, column)
        // set currentValue as current integer
        // set current matrix position as explored
        // if row is 0 or column is 0
            // set pacific to true
        // if row is last or column is last
            // set atlantic to true
        // if pacific and atlantic are true
            // return => no need to keep searching on this integer
        // if column isn't the first one and left integer hasn't been explored and left integer is less than or equal to integer
            // DFS on left integer
        // if row isn't the first one and above integer hasn't been explored and above integer is less than or equal to integer
            // DFS on above integer
        // if column isn't the last one and right integer hasn't been explored and right integer is less than or equal to integer
            // DFS on right integer
        // if row isn't the last one and below integer hasn't been explored and below integer is less than or equal to integer
            // DFS on below integer

    // result array
    // variable for whether cell flows to the Pacific set to false
    // variable for whether cell flows to the Atlantic set to false

    // iterate over the matrix
        // iterate over each row
            // create a new deep copy of matrix to pass into dfs on each integer
            // invoke DFS on integer
                // if pacific and atlantic are true
                    // push array with coordinates(i, j) to result array
                // reset pacific and atlantic to false for next iteration

    // return result

    const dfs = (matrix, row, column) => {
        // console.log('matrix inside dfs');
        // console.log(matrix);
        // console.log('row', row, 'column', column, 'current integer', matrix[row][column]);

        const currentValue = matrix[row][column];
        matrix[row][column] = 'x';

        if(row === 0 || column === 0) {
            // console.log('found pacific');
            pacificFlow = true;
        }
        if(row === matrix.length - 1 || column === matrix.length - 1) {
            // console.log('found atlantic');
            atlanticFlow = true;
        }
        if(pacificFlow && atlanticFlow) {
            console.log('found both pacific and atlantic');
            return;
        }

        if(column > 0 && matrix[row][column - 1] !== 'x' && matrix[row][column - 1] <= currentValue) {
            // console.log('recursing on left integer');
            dfs(matrix, row, column - 1);
        }
        if(row > 0 && matrix[row - 1][column] !== 'x' && matrix[row - 1][column] <= currentValue) {
            // console.log('recursing on above integer');
            dfs(matrix, row - 1, column);
        }
        if(column < matrix.length - 1 && matrix[row][column + 1] !== 'x' && matrix[row][column + 1] <= currentValue) {
            // console.log('recursing on right integer');
            dfs(matrix, row, column + 1);
        }
        if(row < matrix.length - 1 && matrix[row + 1][column] !== 'x' && matrix[row + 1][column] <= currentValue) {
            // console.log('recursing on below integer');
            dfs(matrix, row + 1, column);
        }
    };

    const result = [];
    let pacificFlow = false;
    let atlanticFlow = false;

    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[i].length; j++) {
            const deepCopyMatrix = JSON.parse(JSON.stringify(matrix));
            console.log('invoking dfs on row', i, 'column', j);
            dfs(deepCopyMatrix, i, j);
            if(pacificFlow && atlanticFlow) {
                result.push([i, j]);
            }
            pacificFlow = false;
            atlanticFlow = false;
        }
    }

    return result;
};




// testing
// console.log(pacificAtlantic(
//     [
//         [1,2,2,3,5],
//         [3,2,3,4,4],
//         [2,4,5,3,1],
//         [6,7,1,4,5],
//         [5,1,1,2,4]
//     ]
// ));
