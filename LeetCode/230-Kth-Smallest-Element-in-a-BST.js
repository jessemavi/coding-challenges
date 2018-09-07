/*
Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.
Note: 
You may assume k is always valid, 1 ≤ k ≤ BST's total elements.

Example 1:
Input: root = [3,1,4,null,2], k = 1
   3
  / \
 1   4
  \
   2
Output: 1

Example 2:
Input: root = [5,3,6,2,4,null,null,1], k = 3
       5
      / \
     3   6
    / \
   2   4
  /
 1
Output: 3

Follow up:
What if the BST is modified (insert/delete operations) often and you need to find the kth smallest frequently? How would you optimize the kthSmallest routine?
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    // Plan: in-order traversal through the tree. Add each element to a stack. If stack length equals k, set kthSmallestElement to the element at the top of the stack and return out of the traveral(no need to continue traversing).

    const stack = [];
    let kthSmallestElement;

    const treeTraversal = (node) => {
        if(kthSmallestElement === undefined && node.left) {
            treeTraversal(node.left);
        }

        // console.log('node val:', node.val);

        stack.push(node.val);
        // console.log(stack);

        if(kthSmallestElement === undefined && stack.length === k) {
            kthSmallestElement = stack[stack.length - 1];
            return;
        }

        if(kthSmallestElement === undefined && node.right) {
            treeTraversal(node.right);
        }
    };

    treeTraversal(root);

    return kthSmallestElement;
};




class BinarySearchTree {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const assert = require('assert');

const bst1 = new BinarySearchTree(3);
bst1.left = new BinarySearchTree(1);
bst1.left.right = new BinarySearchTree(2);
bst1.right = new BinarySearchTree(4);

assert.equal(kthSmallest(bst1, 1), 1);

const bst2 = new BinarySearchTree(5);
bst2.left = new BinarySearchTree(3);
bst2.left.left = new BinarySearchTree(2);
bst2.left.right = new BinarySearchTree(4);
bst2.left.left.left = new BinarySearchTree(1);
bst2.right = new BinarySearchTree(6);

assert.equal(kthSmallest(bst2, 3), 3);
