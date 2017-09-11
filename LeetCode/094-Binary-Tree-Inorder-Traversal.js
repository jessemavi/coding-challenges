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
var inorderTraversal = function(root) {
    // Iterative solution
    // Inorder traversal: Go as deep as you can on a left child before coming back to the parent and then go as deep as you can on a right child
    // Plan: Use a stack to keep track of all nodes and their children. Add root to the stack. While stack is not empty pop off node, if it has a left child add node with a null left value and left child to the stack, else if it doesn't have a left child add node's value to the results array and check if it has a right child and if so push right child to the stack
    // O(n) time and O(n) space complexity

    // Psuedocode:
    // if binary tree is empty
    // return empty array

    // node values array
    // nodes stack with root as only value

    // while nodes stack is not empty
        // pop node from stack
        // if node has a left child
            // save node's left child in a variable
            // set node's left to null
            // push node to stack
            // push node's left child to stack
        // else 
            // add node's value to node values
            // if node has a right child
                // push right child to nodes stack

    // return node values

    if(!root) {
        return [];
    }

    const nodeValues = [];
    const nodeStack = [root];

    while(nodeStack.length > 0) {
        const node = nodeStack.pop();
        if(node.left) {
            const nodeLeftChild = node.left;
            node.left = null;
            nodeStack.push(node);
            nodeStack.push(nodeLeftChild);
        } else {
            nodeValues.push(node.val);
            if(node.right) {
                nodeStack.push(node.right);
            }
        }
    }

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
bt1.right = new BinaryTree(2);
bt1.right.left = new BinaryTree(3);
console.log(inorderTraversal(bt1));


const bt2 = new BinaryTree(1);
bt2.left = new BinaryTree(5);
bt2.left.left = new BinaryTree(2);
bt2.left.right = new BinaryTree(3);
bt2.right = new BinaryTree(6);
console.log(inorderTraversal(bt2));
