/*
We are given the head node root of a binary tree, where additionally every node's value is either a 0 or a 1.
Return the same tree where every subtree (of the given tree) not containing a 1 has been removed.
(Recall that the subtree of a node X is X, plus every node that is a descendant of X.)

Example 1:
Input: [1,null,0,0,1]
Output: [1,null,0,null,1]
Explanation: 
Only the red nodes satisfy the property "every subtree not containing a 1".
The diagram on the right represents the answer.

Example 2:
Input: [1,0,1,0,0,0,1]
Output: [1,null,1,null,1]

Example 3:
Input: [1,1,0,1,1,0,1,0]
Output: [1,1,0,1,1,null,1]

Note:
The binary tree will have at most 100 nodes.
The value of each node will only be 0 or 1.

Daily Coding Problem examples:
For example, given the following tree:

   0
  / \
 1   0
    / \
   1   0
  / \
 0   0
should be pruned to:

   0
  / \
 1   0
    /
   1
We do not remove the tree at the root or its left child because it still has a 1 as a descendant.


    0
   / \
  1   0
*/


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var pruneTree = function(root) {
    // Plan: Postorder traversal through the tree.
    // Edge cases: root doesn't exist -> return undefined

    // Pseudocode:

    // if tree is empty or root value is 0 and root has no children
        // return empty tree

    // treeTraversal function(node):
        // if node has a left child
            // recurse on left child
        // if node has a right child
            // recurse on right child
        // If node has a left child
            // If a node's left child is a 0 and the left child doesn't have children, 
                // set left child to null.
        // if node has a right child
            // If a node's right child is a 0 and the right child doesn't have children, 
                // set right child to null.
        // return

    // invoke treetraversal with root

    // return root
    
    if(!root || (root.val === 0 && !root.left && !root.right)) {
        return [];
    }

    const treeTraversal = (node) => {
        if(node.left) {
            treeTraversal(node.left);
        }
        if(node.right) {
            treeTraversal(node.right);
        }
        if(node.left && node.left.val === 0 && !node.left.left && !node.left.right) {
            node.left = null;
        }
        if(node.right && node.right.val === 0 && !node.right.left && !node.right.right) {
            node.right = null;
        }
        return;
    };

    treeTraversal(root);

    return root;
};




// testing
class BinaryTree {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const tree1 = new BinaryTree(1);
tree1.left = new BinaryTree(0);
tree1.left.left = new BinaryTree(0);
tree1.left.right = new BinaryTree(0);
tree1.right = new BinaryTree(1);
tree1.right.left = new BinaryTree(0);
tree1.right.right = new BinaryTree(1);

// console.log(pruneTree(tree1));
