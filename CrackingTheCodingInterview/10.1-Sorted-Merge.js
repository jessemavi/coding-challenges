const sortedMerge = (arrayA, arrayB) => {
    // [2, 5, 8, 12, 14              ]  [1, 3, 4, 6, 8, 9, 15] 
    // O(n) time and O(1) space solution:
    // start at the end of array and arrayB. insert the largest items going in reverse at the end of A
  
    // three pointers: one at the end of arrayA to insert at, one at the last value in arrayA, one at the last value in arrayB
    // while index to insert at in arrayA is greater than or equal to 0
        // if value at arrayA is larger than or equal to value at arrayB
            // insert value in arrayA at position to insert at in arrayA
            // decrement arrayA pointer
        // else
            // insert value in arrayB at position to insert at in arrayA
            // decrement arrayB pointer
        // decrement arrayA insert position pointer
    // return arrayA
    
    let arrayAInsertIndex = arrayA.length + arrayB.length - 1;
    let arrayAValueIndex = arrayA.length - 1;
    let arrayBValueIndex = arrayB.length - 1;

    while(arrayAInsertIndex >= 0) {
        if(arrayA[arrayAValueIndex] >= arrayB[arrayBValueIndex]) {
            arrayA[arrayAInsertIndex] = arrayA[arrayAValueIndex];
            arrayAValueIndex--;
        } else {
            arrayA[arrayAInsertIndex] = arrayB[arrayBValueIndex];
            arrayBValueIndex--;
        }
        arrayAInsertIndex--;
    }

    return arrayA;
};




// testing
console.log(sortedMerge([2, 5, 8, 12, 14], [1, 3, 4, 6, 8, 9, 15]));
console.log(sortedMerge([10, 11, 12, 13, 15, 17], [8, 9, 10, 13, 14]));
console.log(sortedMerge([1, 2, 9, 11], [1, 2, 3, 4, 5, 6, 7]));
console.log(sortedMerge([7, 9], [5]));