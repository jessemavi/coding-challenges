// Given a singly linked list where elements are sorted in ascending order, convert it to a height balanced BST.
// For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.
// Example:
// Given the sorted linked list: [-10,-3,0,5,9],
// One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

//       0
//      / \
//    -3   9
//    /   /
//  -10  5

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    // 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7
    //    4
    //  2   6
    // 1 3 5 7

    // 2 -> 4 -> 6 -> 8 -> 10 -> 12

    // Plan: Traverse through the list and add each value to an array. Binary search on the array and add each element to a bst at the correct position.
    // O(n) time and O(n) space.
    // Edge cases: linked list has no elements in it -> return empty bst
    // **better solution: O(n log n) time and O(1) space binary search on the linked list and add values to a bst.

    // Psuedocode:
    // if head doesn't exist
        // return empty array

    // listValues empty array

    // traverse through list
      // add values to listValues

    // empty bst

    // binarySearch function(array, node):
        // get middle index and set root to middle array value
        // if value at left half of array is not undefined(check to specifically see if not undefined, not if exists because of possible negative values)
            // create left child on tree
            // recurse on left half passing in left child
        // if value at right child of array is not undefined(check to specifically see if not undefined, not if exists because of possible negative values)
            // create right child on tree
            // recurse on right half passing in right child

    // invoke binarySearch passing in listValues and bst

    // return bst

    if(!head) {
        return [];
    }

    const listValues = [];

    let currentNode = head;
    while(currentNode !== null) {
        listValues.push(currentNode.val);
        currentNode = currentNode.next;
    }

    const bst = new TreeNode();

    const binarySearch = (array, node) => {
        const mid = Math.floor(array.length / 2);
        node.val = array[mid];
        if(array[mid - 1] !== undefined) {
            node.left = new TreeNode();
            binarySearch(array.slice(0, mid), node.left);
        }
        if(array[mid + 1] !== undefined) {
            node.right = new TreeNode();
            binarySearch(array.slice(mid + 1), node.right);
        }
    };

    binarySearch(listValues, bst);

    return bst;
};
