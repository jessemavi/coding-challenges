/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    // Plan: Iterate over nums and store number and its frequency in a hash table. Iterate over nums and check if number + 1 exists in the hash table. If it exists check combined total of number frequency and number + 1 frequency and update longest harmonious subsequence if necessary.
    // O(n) time and O(n) space complexity
    // Edge cases: array length is 1 or less -> return 0, array has only one unique number -> return 0(could use Object.keys() function to check if length is 1 after adding numbers and frequencies to hash table but would be O(n) time complexity so no improvement)

    // Psuedocode:
    // if nums length is 1 or less
        // return 0

    // lhs variable set to 0
    // empty hash table

    // iterate over nums
        // if number is not in hash table
            // add number and a frequency of 1
        // else
            // increment frequency

    // iterate over nums
        // if number + 1 exists in hash table
            // if number frequency + number + 1 frequency is greater than lhs
                // set lhs to number frequency + number + 1 frequency

    // return lhs

    if(nums.length <= 1) {
        return 0;
    }

    let lhs = 0;
    const numsAndFreq = {};

    for(let i = 0; i < nums.length; i++) {
        if(!numsAndFreq[nums[i]]) {
            numsAndFreq[nums[i]] = 1;
        } else {
            numsAndFreq[nums[i]]++;
        }
    }

    for(let j = 0; j < nums.length; j++) {
        if(numsAndFreq[nums[j] + 1]) {
            if(numsAndFreq[nums[j]] + numsAndFreq[nums[j] + 1] > lhs) {
                lhs = numsAndFreq[nums[j]] + numsAndFreq[nums[j] + 1]
            }
        }
    }

    return lhs;
};




// testing
console.assert(findLHS([1,3,2,2,5,2,3,7]) === 5);
console.assert(findLHS([1,1,1,1,1,1]) === 0);
console.assert(findLHS([3,2]) === 2);
console.assert(findLHS([3]) === 0);
console.assert(findLHS([1,3,2,2,5,2,3,7,6,6,6,6,6,6,6,6,6]) === 10);
