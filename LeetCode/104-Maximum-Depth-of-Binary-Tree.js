// Note: using a function inside of maxDepth to avoid global variables

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

var maxDepth = function(root) {
    // Plan: in-order traversal through the tree incrementing current depth. When a leaf is reached check if it's greater than the maxDepth path and update.
    
    // if root doesn't exist and an empty tree is passed in
        // return 0;
    // maxDepth variable 
    // traversal function(root, currentDepth)
        // if currentDepth is undefined(at the root node of the binary tree)
            // set currentDepth to 1
        // if root has a left node
            // recurse on left node and pass in currentDepth + 1
        // if root has a right node
            // recurse on right node and pass in currentDepth + 1
        // if root has no children
            // if currentDepth id greater than binaryTreeMaxDepth
                // set binaryTreeMaxDepth to currentDepth
    // invoke traversal function passing in root
    // return binaryTreeMaxDepth

    if(!root) {
        return 0;
    }

    let binaryTreeMaxDepth = 0;

    const traverseTree = (root, currentDepth) => {
        if(!currentDepth) {
            currentDepth = 1;
        }
        
        if(root.left) {
            traverseTree(root.left, currentDepth + 1);
        }
        if(root.right) {
            traverseTree(root.right, currentDepth + 1);
        }
        if(!root.left && !root.right) {
            if(currentDepth > binaryTreeMaxDepth) {
                binaryTreeMaxDepth = currentDepth;
            }
        }
    }

    traverseTree(root);
    return binaryTreeMaxDepth;
};



// Testing
class BinaryTree {
    constructor(val) {
        this.val = val;
        this.left = this.right = null; 
    }
}

let bt = new BinaryTree(10);
bt.left = new BinaryTree(13);
bt.right = new BinaryTree(50);
bt.left.right = new BinaryTree(33);
bt.right.left = new BinaryTree(70);
bt.right.left.left = new BinaryTree(100);
bt.right.left.left.left = new BinaryTree(200);
// console.log(bt); 
console.log(maxDepth(bt));
