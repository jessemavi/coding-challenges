/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    // [2, 2, 3, 3, 4, 4, 4, 5, 6, 7, 4, 4, 4] 4
    // iterate through the nums array
        // if current element is val
            // while last element is val
                // remove last element(keep removing any val's at the end until you get to a non val, never want to move a val forward in the array)
            // swap current element with the last element
            // remove the last element
    // return nums array length
    // O(n) time complexity -> always removing the last element so making the array shorter as you iterate
    // O(1) space complexity
    
    let swap = (array, index1, index2) => {
        let temp = array[index1];
        array[index1] = array[index2];
        array[index2] = array[index1];
    }
    
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === val) {
            while(nums[nums.length - 1] === val) {
                nums.pop();
            }
            swap(nums, i, nums.length - 1);
            nums.pop();
        }
    }
    
    return nums.length;
                
};