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
    
    // maxDepth variable 
    // traversal function(root, currentDepth)
        // if root doesn't exist and an empty tree is passed in
            // return 0;
        // if currentDepth is undefined(at the root node of the binary tree)
            // set currentDepth to 1
        // else
            // increment currentDepth by 1
        // if root has a left node
            // recurse on left node and pass in currentDepth
        // if root has a right node
            // recurse on right node and pass in currentDepth
        // if root has no children
            // if currentDepth id greater than binaryTreeMaxDepth
                // set binaryTreeMaxDepth to currentDepth
    // invoke traversal function passing in root
    // return binaryTreeMaxDepth

    let binaryTreeMaxDepth = 0;

    const traverseTree = (root, currentDepth) => {
        if(!root) {
            return 0;
        }
        
        if(!currentDepth) {
            currentDepth = 1;
        } else {
            currentDepth++;
        }
        
        if(root.left) {
            traverseTree(root.left, currentDepth);
        }
        if(root.right) {
            traverseTree(root.right, currentDepth);
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
