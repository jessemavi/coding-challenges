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
var findBottomLeftValue = function(root) {
    // Plan: Postorder traversal through the binary tree passing in current level and looking at left child first. Keep track of the leftmost value and its level and update only if a child is found at a deeper level of the tree. 
    // O(n) time and O(1) space complexity.

    // Psuedocode:
    // variable for leftmost value set to root's value
    // variable for leftmost value's level set to 0

    // treeTraversal function(node, currentLevel):
        // if currentLevel is greater than leftmost value's level
            // set leftmost value to node's value
            // set leftmost value's level to currentLevel
        // if node has a left child
            // recurse on left child passing in currentLevel + 1
        // if node has a right child
            // recurse on right child passing in currentLevel + 1

    // invoke treeTraversal with root and 0

    // return leftmost value

    let leftmostValue = root.val;
    let leftmostValueLevel = 0;

    const treeTraversal = (node, currentLevel) => {
        if(currentLevel > leftmostValueLevel) {
            leftmostValue = node.val;
            leftmostValueLevel = currentLevel;
        }
        if(node.left) {
            treeTraversal(node.left, currentLevel + 1);
        }
        if(node.right) {
            treeTraversal(node.right, currentLevel + 1);
        }
    };

    treeTraversal(root, 0);

    return leftmostValue;
};




// testing
class BinaryTree {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const bt1 = new BinaryTree(2);
bt1.left = new BinaryTree(1);
bt1.right = new BinaryTree(3);
// console.log(findBottomLeftValue(bt1));

const bt2 = new BinaryTree(1);
bt2.left = new BinaryTree(2);
bt2.right = new BinaryTree(3);
bt2.left.left = new BinaryTree(4);
bt2.right.left = new BinaryTree(5);
bt2.right.right = new BinaryTree(6);
bt2.right.left.left = new BinaryTree(7);
// console.log(findBottomLeftValue(bt2));

const bt3 = new BinaryTree(3);
bt3.left = new BinaryTree(2);
bt3.right = new BinaryTree(7);
bt3.left.right = new BinaryTree(5);
bt3.right.right = new BinaryTree(4);
// console.log(findBottomLeftValue(bt3));
