/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    // Plan: Postorder traversal and add each left leaf value to a sum
    // O(n) time and O(1) space complexity
    // Edge cases: binary tree is empty -> return 0

    // Psuedocode:
    // if binary tree is empty
        // return 0

    // variable for leavesSum

    // treeTraversal function(node):
        // if node has a left child
            // if left child is a leaf
                // add left child's value to currentSum(no need to recurse on leaf)
            // else
                // recurse on left child
        // if node has a right child
            // recurse on right child

    // invoke treeTraversal on root

    // return leavesSum

    if(!root) {
        return 0;
    }

    let currentSum = 0;

    const treeTraversal = (node) => {
        if(node.left) {
            if(!node.left.left && !node.left.right) {
                currentSum += node.left.val;
            } else {
                treeTraversal(node.left);
            }
        }
        if(node.right) {
            treeTraversal(node.right);
        }
    }

    treeTraversal(root);

    return currentSum;
};




// testing
class BinaryTree {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }   
}

const bt1 = new BinaryTree(3);
bt1.left = new BinaryTree(9);
bt1.right = new BinaryTree(20);
bt1.right.left = new BinaryTree(15);
bt1.right.right = new BinaryTree(7);
console.log(sumOfLeftLeaves(bt1));
