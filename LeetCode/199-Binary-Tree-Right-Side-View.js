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
var rightSideView = function(root) {
    // Plan: Inorder traversal starting with right child and keeping track of current tree level. If array at current level index is undefined set to node value.
    // O(n) time and O(1) space complexity
    // Edge cases: empty binary tree

    // Psuedocode:
    // if binary tree is empty
        // return empty array

    // variable for nodeValues

    // treeTraversal function(node, currentLevel):
        // if nodeValues value at currentLevel index in undefined
            // set nodeValues at currentLevel index to node value
        // if node has a right child
            // recurse on right child passing in currentLevel + 1
        // if node has a left child
            // recurse on left child passing in currentLevel + 1
        // if node has no children
            // return

    // invoke treeTravsersal with root and 0

    // return nodeValues

    if(!root) {
        return [];
    }

    const nodeValues = [];

    const treeTraversal = (node, currentLevel) => {
        if(nodeValues[currentLevel] === undefined) {
            nodeValues[currentLevel] = node.val;
        }
        if(node.right) {
            treeTraversal(node.right, currentLevel + 1);
        }
        if(node.left) {
            treeTraversal(node.left, currentLevel + 1);
        }
        if(!node.left && !node.right) {
            return;
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

const bt1 = new BinaryTree(1);
bt1.right = new BinaryTree(3);
bt1.right.right = new BinaryTree(4);
bt1.left = new BinaryTree(2);
bt1.left.right = new BinaryTree(5);
console.log(rightSideView(bt1));

const bt2 = new BinaryTree(1);
bt2.left = new BinaryTree(2);
bt2.left.left = new BinaryTree(4);
bt2.left.left.right = new BinaryTree(9);
console.log(rightSideView(bt2));
