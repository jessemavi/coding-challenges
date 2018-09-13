/*
Given two binary trees, write a function to check if they are the same or not.
Two binary trees are considered the same if they are structurally identical and the nodes have the same value.

Example 1:
Input:     1         1
          / \       / \
         2   3     2   3

        [1,2,3],   [1,2,3]
Output: true

Example 2:
Input:     1         1
          /           \
         2             2

        [1,2],     [1,null,2]
Output: false

Example 3:
Input:     1         1
          / \       / \
         2   1     1   2

        [1,2,1],   [1,1,2]
Output: false
/*


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    // Cases:
    // both nodes are null -> return true
    // both nodes are not null and values are the same -> return result of isSameTree on left and right
    // else one node is null and the other is not null or node values are not equal -> return false

    // console.log('p', p);
    // console.log('q', q, '\n');

    if (p === null && q === null) {
        return true;
    }
    if (p !== null && q !== null && p.val === q.val) {
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    }
    return false;
}




// testing
class BinaryTree {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const bt1 = new BinaryTree(10);
bt1.left = new BinaryTree(5);
bt1.left.left = new BinaryTree(8);
bt1.left.right = new BinaryTree(9);
bt1.right = new BinaryTree(16);
bt1.right.left = new BinaryTree(19);
bt1.right.right = new BinaryTree(22);

const bt2 = new BinaryTree(10);
bt2.left = new BinaryTree(5);
bt2.left.left = new BinaryTree(8);
bt2.left.right = new BinaryTree(9);
bt2.right = new BinaryTree(16);
bt2.right.left = new BinaryTree(19);
bt2.right.right = new BinaryTree(22);

const assert = require('assert');
assert.equal( isSameTree(bt1, bt2), true );
