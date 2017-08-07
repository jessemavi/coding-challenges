/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    // [2, 4, 6, 7, 9, 10, 12, 14]
    //       7
    //    4    10
    //  2  6  9  12
    //             14

    // Plan: binary search on all numbers of the array and add numbers to a bst

    // Psuedocode:
    // if nums is empty
        // return an empty array

    // create a new bst

    // binarySearch function(node, array):
        // set node value to array middle value
        // if left half of array exists
            // set node's left to a new treeNode
            // recurse on node's left passing in left half of array
        // if right half of array exists
            // set node's right to a new treeNode
            // recurse on node's right passing in right half of array

    // invoke binarySearch with bst and nums

    // return bst

    if(nums.length === 0) {
        return [];
    }

    const bst = new TreeNode();

    const binarySearch = (node, array) => {
        const mid = Math.floor((array.length - 1) / 2);
        node.val = array[mid];
        if(array.slice(0, mid).length > 0) {
            node.left = new TreeNode();
            binarySearch(node.left, array.slice(0, mid));
        }
        if(array.slice(mid + 1).length > 0) {
            node.right = new TreeNode();
            binarySearch(node.right, array.slice(mid + 1));
        }
    };

    binarySearch(bst, nums);

    return bst;
};




// testing
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

// console.log(sortedArrayToBST([2, 4, 6, 7, 9, 10, 12, 14]));
// console.log(sortedArrayToBST([2, 4, 6, 7, 9, 10, 12, 14, 15]));
