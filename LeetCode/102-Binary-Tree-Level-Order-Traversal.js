/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    // Plan: Inorder traversal keeping track of current level and adding to array.
    // O(n) time and O(1) space complexity
    // Edge cases: binary tree is empty -> return empty array

    // Psuedocode:
    // if binary is empty
        // return empty array

    // variable for nodeValues empty array

    // treeTraversal function(node, currentLevel):
        // if nodeValues at currentLevel index is undefined
            // add an empty array with node value to nodeValues at currentLevel index
        // else 
            // add node value to nodeValues at currentLevel index
        // if node has a left child
            // recurse on left child passing in currentLevel + 1
        // if node has a right child
            // recurse on right child passing in currentLevel + 1

    // invoke treeTraversal with root and 0

    // return nodeValues

    if(!root) {
        return [];
    }

    const nodeValues = [];

    const treeTraversal = (node, currentLevel) => {
        if(!nodeValues[currentLevel]) {
            nodeValues[currentLevel] = [node.val];
        } else {
            nodeValues[currentLevel].push(node.val);
        }
        if(node.left) {
            treeTraversal(node.left, currentLevel + 1);
        }
        if(node.right) {
            treeTraversal(node.right, currentLevel + 1);
        }
    };

    treeTraversal(root, 0);

    return nodeValues;
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
console.log(levelOrder(bt1));
