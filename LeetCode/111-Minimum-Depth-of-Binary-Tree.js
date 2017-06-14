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
var minDepth = function(root) {
    // Plan: have a minimum depth variable not set to any value. Traverse through the tree keeping keeping track of the current depth. When a leaf is reached compare current depth to minimum depth and update if smaller

    // if root doesn't exist(empty binary tree passed in)
        // return 0
    // variable for minimumDepth
    // traverseTree function(root, currentDepth)
        // if currentDepth is undefined
            // set currentDepth to 1
        // if root has a left child
            // recurse on root.left and pass in currentDepth + 1
        // if root has a right child
            // recurse on root.right and pass in currentDepth + 1
        // if root has no children(leaf node)
            // if minimumDepth is undefined or currentDepth is less than minimumDepth
                // set minimumDepth to currentDepth
    // invoke traverseTree with root
    // return minimumDepth

    if(!root) {
        return 0;
    }

    let minimumDepth;

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
            if(!minimumDepth || currentDepth < minimumDepth) {
                minimumDepth = currentDepth;
            }
        }
    };

    traverseTree(root);
    return minimumDepth;
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
bt.right.left = new BinaryTree(70);
bt.right.left.left = new BinaryTree(100);
bt.right.left.left.left = new BinaryTree(200);
// console.log(bt); 
// console.log(minDepth(bt));