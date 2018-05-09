// Find the contiguous subarray within an array (containing at least one number) which has the largest sum.
// For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
// the contiguous subarray [4,-1,2,1] has the largest sum = 6.

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    // Plan: iterate over nums keeping track of current sum so far and max sum and updating if necessary.

    // Psuedocode:
    // maxSum variable set to first number
    // maxSumEndingHere variable set to first number

    // iterate over nums starting at second number
        // set maxSumEndingHere to maxSumEndingHere plus current number
        // if current number is greater than maxEndingHere
            // set maxEndingHere to current number
        // if maxSumEndingHere is greater than maxSum
            // set maxSum to maxSumEndingHere

    // return maxSum

    let maxSum = nums[0];
    let maxSumEndingHere = nums[0];

    for(let i = 1; i < nums.length; i++) {
        maxSumEndingHere = maxSumEndingHere + nums[i];
        if(nums[i] > maxSumEndingHere) {
            maxSumEndingHere = nums[i];
        }
        if(maxSumEndingHere > maxSum) {
            maxSum = maxSumEndingHere
        }
    }

    return maxSum;
};




// testing
console.log( maxSubArray([-2,1,-3,4,-1,2,1,-5,4]) );
console.log( maxSubArray([-2,-3,4,-1,-2,1,5,-3]) );
console.log( maxSubArray([5,-3,4,9,0,1,-3,9,2]) );
