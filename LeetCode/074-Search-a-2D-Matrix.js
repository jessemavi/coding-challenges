/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

var searchMatrix = function(matrix, target) {
    // write binary search helper function to use when you find the array that target could be in
    // get midpoint of matrix
    // if array at midpoint is undefined(target is outside of any array within the matrix)
        // return false
    // else if target is greater than or equal to first value and less than or equal to last value
        // binary search on that array
    // else if target is less than first value
        // binary search on matrix arrays less than the midpoint
    // else if target is greater than last value
        // binary search on matrix arrays greater than the midpoint

    let mid = Math.floor(matrix.length / 2);
    // console.log(matrix[mid]);
    if(!matrix[mid]) {
        return false;
    } else if(target >= matrix[mid][0] && target <= matrix[mid][matrix[mid].length - 1]) {
        return binarySearch(matrix[mid], target);
    } else if(target < matrix[mid][0]) {
        return searchMatrix(matrix.slice(0, mid), target);
    } else if(target > matrix[mid][0]) {
        return searchMatrix(matrix.slice(mid + 1), target);
    }
    return false;   
};

const binarySearch = (array, target) => {
    let mid = Math.floor(array.length / 2);
    if(target === array[mid]) {
        return true;
    } else if(target < array[mid]) {
        return binarySearch(array.slice(0, mid), target);
    } else if(target > array[mid]) {
        return binarySearch(array.slice(mid + 1), target);
    }
    return false;
}