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
var postorderTraversal = function(root) {
    /*
            4
          2   5
        9  6 2 7
    */
    // [9,6,2,2,7,5,4]
    // []

    // Iterative solution
    // Postorder traversal: left child, right child, node
    // Plan: Keep a stack of nodes. While stack is not empty pop off node. If node has any children, add node to stack with no children, add right child, add left child. If node has no children add value to results array.
    // Edge cases: tree is empty

    // Psuedocode:
    // if tree is empty
        // return empty array

    // nodeValues array
    // nodeStack array with root as only value

    // while nodeStack is not empty
        // get node from nodeStack
        // if node has a left child
            // store node's left child in a variable
            // set node's left child to null
            // push node to stack
            // push node's left child to stack
        // else if node has a right child
            // store node's right child in a variable
            // set node's right child to null
            // push node to stack
            // push node's right child to stack
        // else(node has no children)
            // add node value to nodeValues

    // return nodeValues

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
        } else if(node.right) {
            const nodeRightChild = node.right;
            node.right = null;
            nodeStack.push(node);
            nodeStack.push(nodeRightChild);
        } else {
            nodeValues.push(node.val);
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
console.log(postorderTraversal(bt1));

const bt2 = new BinaryTree(4);
bt2.left = new BinaryTree(2);
bt2.left.left = new BinaryTree(9);
bt2.left.right = new BinaryTree(6);
bt2.right = new BinaryTree(5);
bt2.right.left = new BinaryTree(2);
bt2.right.right = new BinaryTree(7);
console.log(postorderTraversal(bt2));
