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
var preorderTraversal = function(root) {
    // preorder -> parent, left child, right child
    // stack: [9]
    // current node: 
    // result: [7,1,2,3,8]
    // Plan for iterative solution: Use a stack. Initialize stack with root. While stack is not empty pop off node. Add node's value to result array, add its right child to stack, add its left child to the stack.
    // Edge cases: root is null -> return empty array

    // Psuedocode:
    // if root doesn't exist
        // return empty array

    // nodeValues array
    // stack array

    // while stack is not empty
        // pop off node
        // add node's val to nodeValues array
        // if node has a right child
            // add right child to stack
        // if node has a left child
            // add left child to stack

    // return nodeValues array

    if(!root) {
        return [];
    }

    const nodeValues = [];
    const stack = [root];

    while(stack.length > 0) {
        const node = stack.pop();
        nodeValues.push(node.val);
        if(node.right) {
            stack.push(node.right);
        }
        if(node.left) {
            stack.push(node.left);
        }
    }

    return nodeValues;
};




// example:
/*
        7
      1  8
     2 3  9
    
    [7,1,2,3,8,9]
 */

// testing
class BinaryTree {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const bt1 = new BinaryTree(7);
bt1.left = new BinaryTree(1);
bt1.left.left = new BinaryTree(2);
bt1.left.right = new BinaryTree(3);
bt1.right = new BinaryTree(8);
bt1.right.right = new BinaryTree(9);

// console.log(bt1);

const assert = require('assert');
assert.deepEqual(preorderTraversal(bt1), [7,1,2,3,8,9]);
