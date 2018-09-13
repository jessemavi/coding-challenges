/*
Consider all the leaves of a binary tree.  From left to right order, the values of those leaves form a leaf value sequence.
For example, in the given tree above, the leaf value sequence is (6, 7, 4, 9, 8).
Two binary trees are considered leaf-similar if their leaf value sequence is the same.
Return true if and only if the two given trees with head nodes root1 and root2 are leaf-similar.
Note:
Both of the given trees will have between 1 and 100 nodes.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    // Plan: traverse postorder traversal through both trees. Add leafs to an array for each tree. Return whether the two arrays are equal(have the same structure and values).

    const traverseTree = (node, treeLeafValues) => {
        if(!node.left && !node.right) {
            treeLeafValues.push(node.val);
        }
        if(node.left) {
            traverseTree(node.left, treeLeafValues);
        }
        if(node.right) {
            traverseTree(node.right, treeLeafValues);
        }
        return treeLeafValues;
    };

    const tree1LeafValues = traverseTree(root1, []);
    const tree2LeafValues = traverseTree(root2, []);

    if(tree1LeafValues.length !== tree2LeafValues.length) {
        return false;
    }

    for(let i = 0; i < tree1LeafValues.length; i++) {
        if(tree1LeafValues[i] !== tree2LeafValues[i]) {
            return false;
        }
    }

    return true;
};




// testing
class BinaryTree {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const bt1 = new BinaryTree(8);
bt1.left = new BinaryTree(10);
bt1.left.left = new BinaryTree(13);
bt1.right = new BinaryTree(4);
bt1.right.left = new BinaryTree(2);
bt1.right.right = new BinaryTree(1);
bt1.right.right.left = new BinaryTree(18);

const assert = require('assert');
assert.equal( leafSimilar(bt1, bt1), true );
