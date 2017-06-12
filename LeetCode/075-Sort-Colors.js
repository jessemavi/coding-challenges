/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    // [2, 1, 2, 0, 0, 2, 2, 1] => [0, 0, 1, 1, 2, 2, 2, 2]
    
    // O(n^2) time and O(1) space solution:
        // bubble sort or selection sort
    // O(n) time and O(n) space solution:
        // iterate over nums and keep track of count of each num(obj or three separate variables for each color)
        // iterate over nums and set values based on coun of each num decrementing count after a num has been added

    let zeroes = 0;
    let ones = 0;
    let twos = 0;

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === 0) {
            zeroes++;
        } else if(nums[i] === 1) {
            ones++;
        } else if(nums[i] === 2) {
            twos++;
        }
    }

    for(let j = 0; j < nums.length; j++) {
        if(zeroes > 0) {
            nums[j] = 0;
            zeroes--;
        } else if(ones > 0) {
            nums[j] = 1;
            ones--;
        } else if(twos > 0) {
            nums[j] = 2;
            twos--;
        }
    }
    

    // O(n logn) time and O(n) space solution
        // sort using quick sort or merge sort
};