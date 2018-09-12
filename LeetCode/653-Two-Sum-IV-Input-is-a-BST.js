/*
Given a Binary Search Tree and a target number, return true if there exist two elements in the BST such that their sum is equal to the given target.

Example 1:
Input: 
    5
   / \
  3   6
 / \   \
2   4   7

Target = 9

Output: True
Example 2:
Input: 
    5
   / \
  3   6
 / \   \
2   4   7

Target = 28

Output: False
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
 * @return {boolean}
 */
var findTarget = function(root, k) {
    // Plan: store node values in a map and go through the bst once. Traverse through the tree and first check if the value that needs to be added to node value to equal K is in the map and if so return true. Second add node to the map.
    // using JavaScript Map to store numbers as keys
    // O(n) time and O(n) space

    const nodes = new Map();
    let sumEqualsTarget = false;

    const treeTraversalToCheckSum = (node) => {
        // console.log('node val:', node.val);
        if(sumEqualsTarget === true) {
            return;
        }
        if(nodes.has(k - node.val)) {
            sumEqualsTarget =  true;
            return;
        }

        nodes.set(node.val, node.val);

        if(node.left) {
            treeTraversalToCheckSum(node.left);
        }
        if(node.right) {
            treeTraversalToCheckSum(node.right);
        }
    };

    treeTraversalToCheckSum(root);

    return sumEqualsTarget;
};




// testing
class BinarySearchTree {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const bst1 = new BinarySearchTree(10);
bst1.left = new BinarySearchTree(5);
bst1.right = new BinarySearchTree(15);
bst1.right.left = new BinarySearchTree(11);
bst1.right.right = new BinarySearchTree(15);

// console.log( findTarget(bst1, 20) );

const bst2 = new BinarySearchTree(1);
bst2.left = new BinarySearchTree(0);
bst2.left.left = new BinarySearchTree(-2);
bst2.right = new BinarySearchTree(4);
bst2.right.left = new BinarySearchTree(3);

// console.log( findTarget(bst2, 7) );

const bst3 = new BinarySearchTree(0);
bst3.left = new BinarySearchTree(-2);
bst3.left.right = new BinarySearchTree(-1);
bst3.right = new BinarySearchTree(3);
bst3.right.right = new BinarySearchTree(4);

// console.log( findTarget(bst3, -2) );
