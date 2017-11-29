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
var zigzagLevelOrder = function(root) {
    // Plan: Postorder traversal twice through the tree keeping track of the current level. One traversal looking at left child first, the other traversal looking at right child first. Add each node to the array at its level in the tree to the result array for the matching traversal order. When traversing left child first if current level is even add node value to result, else don't add. When traversing right child first if current level is odd add node value to result, else don't add. By traversing twice through the tree in different orders, you can avoid having to iterate over the result and reversing odd tree level subArrays.
    // Edge cases: root doesn't exist -> return empty array

    // Psuedocode
    // if root is null
        // return empty array

    // nodeValues empty array

    // treeTraversalLeftChildFirst function(node, currentLevel):
        // if current level is odd
            // if value in nodeValues array at currentLevel is undefined
                // add an array to nodeValues at currentLevel index with node value
            // else
                // add node value to nodeValues array at currentLevel array

        // if node has a left child
            // recurse on left child passing in currentLevel + 1
        // if node has a right child
            // recurse on right child passing in currentLevel + 1

    // treeTraversalRightChildFirst function():
    // ....
    // ....

    // invoke treeTraversalLeftChildFirst with root and 0
    // invoke treeTraversalRightChildFirst with root and 0

    // return nodeValues array

    if(!root) {
        return [];
    }

    const nodeValues = [];

    const treeTraversalLeftChildFirst = (node, currentLevel) => {
        if(currentLevel % 2 === 0) {
            if(nodeValues[currentLevel] === undefined) {
                nodeValues[currentLevel] = [node.val];
            } else {
                nodeValues[currentLevel].push(node.val);
            }
        }

        if(node.left) {
            treeTraversalLeftChildFirst(node.left, currentLevel + 1);
        }
        if(node.right) {
            treeTraversalLeftChildFirst(node.right, currentLevel + 1);
        }
    };

    const treeTraversalRightChildFirst = (node, currentLevel) => {
        if(currentLevel % 2 !== 0) {
            if(nodeValues[currentLevel] === undefined) {
                nodeValues[currentLevel] = [node.val];
            } else {
                nodeValues[currentLevel].push(node.val);
            }
        }

        if(node.right) {
            treeTraversalRightChildFirst(node.right, currentLevel + 1);
        }
        if(node.left) {
            treeTraversalRightChildFirst(node.left, currentLevel + 1);
        }
    };

    treeTraversalLeftChildFirst(root, 0);
    treeTraversalRightChildFirst(root, 0);

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

const assert = require('assert');
assert.deepEqual(zigzagLevelOrder(bt1), 
    [
      [3],
      [20,9],
      [15,7]
    ]
);
