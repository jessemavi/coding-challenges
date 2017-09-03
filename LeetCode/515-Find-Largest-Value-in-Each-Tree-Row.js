/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function(root) {
    // Plan: Preorder traversal through the tree keeping track of current level and adding the largest value in each level to an array.
    // O(n) time and O(1) space
    // Edge cases: binary tree is empty

    // Psuedocode
    // if tree is empty
        // return empty array

    // variable for largestRowValues array

    // treeTraversal function(node, currentLevel):
        // if largestRowValues value at currentLevel index is undefined or node value is larger than largestRowValues value at currentLevel
            // set largestRowValues value at currentLevel index to node.value
        // if node has a left child
            // recurse on left child passing in currentLevel + 1
        // if node has a right child
            // recurse on right child passing in currentLevel + 1

    // invoke treeTraversal with root and 0

    if(!root) {
        return [];
    }

    const largestRowValues = [];

    const treeTraversal = (node, currentLevel) => {
        if(largestRowValues[currentLevel] === undefined || node.val > largestRowValues[currentLevel]) {
            largestRowValues[currentLevel] = node.val;
        }
        if(node.left) {
            treeTraversal(node.left, currentLevel + 1);
        }
        if(node.right) {
            treeTraversal(node.right, currentLevel + 1);
        }
    };

    treeTraversal(root, 0);

    return largestRowValues;
};




// testing
class BinaryTree {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const bt1 = new BinaryTree(1);
bt1.left = new BinaryTree(3);
bt1.right = new BinaryTree(2);
bt1.left.left = new BinaryTree(5);
bt1.left.right = new BinaryTree(3);
bt1.right.right = new BinaryTree(9);
bt1.right.right.right = new BinaryTree(13);
// console.log(bt1);
// console.log(largestValues(bt1));

const bt2 = new BinaryTree(-40);
bt2.left = new BinaryTree(0);
bt2.right = new BinaryTree(-37);
// console.log(largestValues(bt2));
