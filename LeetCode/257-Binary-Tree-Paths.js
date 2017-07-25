/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    // Plan: pre-order traversal through the tree keeping track of all nodes visited in a string. Once a leaf is reached add the string to an array.

    // Psuedocode:
    // if root doesn't exist
        // return empty array

    // result array

    // traverseTree function(node, visitedString):
        // if node has a left child
            // recurse on left child passing in string with node value and ->
        // if node has a right child
            // recurse on right child passing in string with node value and ->
        // if node has no children
            // add string with node value to result array
            // return

    // invoke traverseTree with root and an empty string

    // return result array

    if(!root) {
        return [];
    }

    const rootToLeafPaths = [];

    const traverseTree = (node, visitedString) => {
        if(node.left) {
            traverseTree(node.left, visitedString.concat(node.val).concat('->'));
        }
        if(node.right) {
            traverseTree(node.right, visitedString.concat(node.val).concat('->'));
        }
        if(!node.left && !node.right) {
            rootToLeafPaths.push(visitedString.concat(node.val));
            return;
        }
    };

    traverseTree(root, '');

    return rootToLeafPaths;
};




// testing
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const bt1 = new TreeNode(5);
bt1.left = new TreeNode(2);
bt1.right = new TreeNode(9);
bt1.left.left = new TreeNode(12);
bt1.left.left.right = new TreeNode(44);
bt1.left.right = new TreeNode(8);
bt1.right.left = new TreeNode(120);
bt1.right.left.left = new TreeNode(66);
bt1.right.right = new TreeNode(1);

// console.log(bt1);
// console.log(binaryTreePaths(bt1));
