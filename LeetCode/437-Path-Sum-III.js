// You are given a binary tree in which each node contains an integer value.
// Find the number of paths that sum to a given value.
// The path does not need to start or end at the root or a leaf, but it must go downwards (traveling only from parent nodes to child nodes).
// The tree has no more than 1,000 nodes and the values are in the range -1,000,000 to 1,000,000.

// Example:
// root = [10,5,-3,3,2,null,11,3,-2,null,1], sum = 8

//       10
//      /  \
//     5   -3
//    / \    \
//   3   2   11
//  / \   \
// 3  -2   1

// Return 3. The paths that sum to 8 are:
// 1.  5 -> 3
// 2.  5 -> 2 -> 1
// 3. -3 -> 11

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function(root, sum) {
    // Plan: Traverse through the tree and invoke pathFinderTraversal on every node passing in node value as currentSum. In pathFinderTraversal traverse through the tree starting at passed in node, keep track of current sum and add to or subtract while traversing. If current sum equals sum increment number of paths.
    // Edge cases: tree is empty -> return 0

    // Psuedocode:
    // if tree is empty
        // return 0

    // set numberOfPaths to 0

    // pathFinderTraversal function(node, currentSum):
        // if currentSum equals sum
            // increment numberOfPaths
        // if node has a left child
            // recurse on left child passing in currentSum + left child value
        // if node has a right child
            // // recurse on right child passing in currentSum + right child value
        // if node has no children
            // return

    // treeTraversal function(node):
        // invoke pathFinderTraversal on node passing in node value
        // if node has a left child
            // recurse on left child
        // if node has a right child
            // recurse on right child

    // invoke treeTraversal with root

    // return numberOfPaths

    if(!root) {
        return 0;
    }

    let numberOfPaths = 0;

    const pathFinderTraversal = (node, currentSum) => {
        if(currentSum === sum) {
            numberOfPaths++;
        }
        if(node.left) {
            pathFinderTraversal(node.left, currentSum + node.left.val);
        }
        if(node.right) {
            pathFinderTraversal(node.right, currentSum + node.right.val);
        }
        if(!node.left && !node.right) {
            return;
        }
    };

    const treeTraversal = (node) => {
        pathFinderTraversal(node, node.val);
        if(node.left) {
            treeTraversal(node.left);
        }
        if(node.right) {
            treeTraversal(node.right);
        }
    };

    treeTraversal(root);

    return numberOfPaths;
};

class BinaryTree {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const bt1 = new BinaryTree(10);
bt1.left = new BinaryTree(5);
bt1.left.left = new BinaryTree(3);
bt1.left.right = new BinaryTree(2);
bt1.left.left.left = new BinaryTree(3);
bt1.left.left.right = new BinaryTree(-2);
bt1.left.right.right = new BinaryTree(1);
bt1.right = new BinaryTree(-3);
bt1.right.right = new BinaryTree(11);

console.log(pathSum(bt1, 8));
