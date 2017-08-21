/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    // Plan: O(tree levels) time and O(tree levels) space complexity -> Pre order traversal through the tree while passing the depth and incrementing it. At each tree level add each value to a stack array. After traversing add each stack array to nodeValues array in reverse order.  

    if(!root) {
        return [];
    }

    const nodeValues = [];
    const stack = [];

    const treeTraversal = (treeNode, currentLevel) => {
        if(!stack[currentLevel]) {
            stack.push([]);
        }

        stack[currentLevel].push(treeNode.val);
        
        if(treeNode.left) {
            treeTraversal(treeNode.left, currentLevel + 1);
        }
        if(treeNode.right) {
            treeTraversal(treeNode.right, currentLevel + 1);
        }
    };

    treeTraversal(root, 0);

    while(stack.length > 0) {
        nodeValues.push(stack.pop());
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

const bt1 = new BinaryTree(8);
bt1.left = new BinaryTree(10);
bt1.left.left = new BinaryTree(13);
bt1.right = new BinaryTree(4);
bt1.right.left = new BinaryTree(2);
bt1.right.right = new BinaryTree(1);
bt1.right.right.left = new BinaryTree(18);

// console.log(bt1);
// console.log(levelOrderBottom(bt1));
