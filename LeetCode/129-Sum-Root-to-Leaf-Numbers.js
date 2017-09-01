/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
    // Plan: Preorder traversal on the binary tree keeping track of current path string at each node visited. When a leaf is reached add root-to-leaf path sum string converted to a number to total sum.

    // Psuedocode:
    // if tree is empty
        // return 0

    // variable for totalSum

    // treeTraversalFunction(node, currentSum):
        // set currentSum equal to currentSum concatenated with node.val(using type coercion)
        // if node has a left child
            // recurse on left child passing in currentSum
        // if node has a right child
            // recurse on right child passing in currentSum
        // if node has no children and is a leaf
            // add currentSum string converted to a number to totalSum
            // return

    // invoke traversalFunction with root and empty string

    // return totalSum

    if(!root) {
        return 0;
    }

    let totalSum = 0;

    const treeTraversal = (node, currentSum) => {
        currentSum = currentSum.concat(node.val);
        if(node.left) {
            treeTraversal(node.left, currentSum);
        }
        if(node.right) {
            treeTraversal(node.right, currentSum);
        }
        if(!node.left && !node.right) {
            totalSum += Number(currentSum);
            return;
        }
    };

    treeTraversal(root, '');

    return totalSum;
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
bt1.left = new BinaryTree(2);
bt1.right = new BinaryTree(3);
bt1.left.left = new BinaryTree(5);
bt1.left.right = new BinaryTree(5);
bt1.left.right.right = new BinaryTree(11);
bt1.right.left = new BinaryTree(8);
bt1.right.right = new BinaryTree(4);

     //     1
     //  2    3
     // 5 5  8 4  
     //   11

// 125 + 12511 + 138 + 134 
// console.log(125 + 12511 + 138 + 134);

// console.log(sumNumbers(bt1));
