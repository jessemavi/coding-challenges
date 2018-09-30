/*
Given a binary tree, determine if it is a valid binary search tree (BST).
Assume a BST is defined as follows:
The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
Example 1:
    2
   / \
  1   3
Binary tree [2,1,3], return true.
Example 2:
    1
   / \
  2   3
Binary tree [1,2,3], return false.
*/

/*
        10
     4      15 
   2  6   13   18
    3  7   14 17  20
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
 * @return {boolean}
 */
var isValidBST = function(root) {
    if(!root) {
        return true;
    }
      
    let previous_value = -Infinity;
    let is_valid_bst = true;
      
    const inorder_traversal = (node) => {
        if(is_valid_bst === false) {
            return;
        }

        if(node.left) {
            inorder_traversal(node.left);
        }

        if(node.val <= previous_value) {
            is_valid_bst = false;
            return;
        }

        previous_value = node.val;

        if(node.right) {
            inorder_traversal(node.right);
        }
    };

    inorder_traversal(root);

    return is_valid_bst; 
};




// testing
class BinarySearchTree {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const bst1 = new BinarySearchTree(10);
bst1.left = new BinarySearchTree(6);
bst1.left.left = new BinarySearchTree(5);
bst1.left.right = new BinarySearchTree(8);
bst1.right = new BinarySearchTree(14);
bst1.right.left = new BinarySearchTree(13);
bst1.right.right = new BinarySearchTree(16);

console.log( isValidBST(bst1) );

const bst2 = new BinarySearchTree(0);
console.log( isValidBST(bst2) );

const bst3 = new BinarySearchTree(3);
bst3.right = new BinarySearchTree(30);
bst3.right.left = new BinarySearchTree(10);
bst3.right.left.right = new BinarySearchTree(15);
bst3.right.left.right.right = new BinarySearchTree(45);

console.log( isValidBST(bst3) );
