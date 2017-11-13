/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    // **Note: numbers can be negative. Check explicitly if a number is not undefined and not that it exists(-1 will equal false) 
    // Plan: inefficient solution with nested while loops: iterate over the array and get the sum of left numbers and the sum of right numbers. Return current index when left sum and right sum are equal. If left sum and right sum aren't equal return -1

    // **Don't need to do two while loops for each iteration. Left sum will become left sum + current number. Right sum will become right sum - current number.
    // Plan: efficient solution: At start left sum set to 0. Iterate once to get right side sum from beginning of nums to the end. Iterate through nums. Left sum will become left sum + current number. Right sum will become right sum - current number. Subtract current number from right side sum before checking if left sum and right sum are equal, then add current number to left side sum.

    // [1, 7, 3, 6, 5, 6]) === 3
    // before iterating over nums left sum is 0 and right sum is 28
    // first iteration at 1 left side sum is still 0 and right side sum is 27
    // second iteration at 7 left side sum is 1 and right side sum is 20


    if(nums.length === 0) {
        return -1;
    }

    let leftSum = 0;
    let rightSum = 0;

    for(let i = 0; i < nums.length; i++) {
        rightSum += nums[i];
    }

    for(let j = 0; j < nums.length; j++) {
        rightSum -= nums[j];
        // console.log(nums[j], leftSum, rightSum);
        if(leftSum === rightSum) {
            return j;
        }
        leftSum += nums[j];
    }

    return -1;
};




// testing
console.assert(pivotIndex([1, 7, 3, 6, 5, 6]) === 3);
console.assert(pivotIndex([1, 2, 3]) === -1);
console.assert(pivotIndex([-1,-1,-1,-1,0,-1]) === 2);
