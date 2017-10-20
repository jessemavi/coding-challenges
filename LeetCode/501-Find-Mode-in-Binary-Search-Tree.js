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
var findMode = function(root) {
    // Plan: Use a hash table to store nodes and their frequencies. Traverse through the tree and add nodes and updating frequencies in the hash table. Iterate over the hash table keeping track of the mode(s) and return them in an array.
    // O(n) time and O(n) space
    // Edge case: root is null -> return empty array

    // Psuedocode:
    // if root is null
        // return empty array

    // nodes hash table
    // mode array
    // BSTModeFrequency variable

    // traverseTree function(node):
        // if node is not in the hash table
            // add it to the hash table with a value of 1
        // else
            // increment the node's frequency in the hash table

        // if node has no children
            // return
        // if node has a left child
            // recurse on the left child
        // if node has a right child
            // recurse on right child

    // invoke traverseTree with root

    // iterate over nodes hash table
        // if BSTModeFrequency is undefined or current node's frequency in hash table is larger than BSTModeFrequency
            // set BSTModeFrequency to current node's frequency

    // iterate over hash table
        // if current node's frequency equals BSTModeFrequency
            // add the node to the mode array(need to parse key because it's stringified)

    // return mode array

    if(!root) {
        return [];
    }

    const nodes = {};
    const mode = [];
    let BSTModeFrequency;

    const treeTraverse = (node) => {
        if(!nodes[node.val]) {
            nodes[node.val] = 1;
        } else {
            nodes[node.val]++;
        }

        if(!node.left && !node.right) {
            return;
        }
        if(node.left) {
            treeTraverse(node.left);
        }
        if(node.right) {
            treeTraverse(node.right);
        }
    };

    treeTraverse(root);

    for(let key in nodes) {
        if(BSTModeFrequency === undefined || nodes[key] > BSTModeFrequency) {
            BSTModeFrequency = nodes[key];
        }
    }

    for(let key in nodes) {
        if(nodes[key] === BSTModeFrequency) {
            mode.push(JSON.parse(key));
        }
    }

    return mode;
};




// testing
class BinarySearchTree {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const bst1 = new BinarySearchTree(1);
bst1.right = new BinarySearchTree(2);
bst1.right.left = new BinarySearchTree(2);

const assert = require('assert');
assert.deepEqual(findMode(bst1), [2]);
