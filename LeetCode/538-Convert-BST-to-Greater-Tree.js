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
var convertBST = function(root) {
    // Plan: Find the largest value of the bst by going all the way right with a inorder traversal in reverse(visit right child, parent, left child). Set largest value as value to add. Add value to next largest value and set that value as value to add. Repeat for all tree nodes.
    // O(n) time and O(1) space complexity
    // Edge cases: 
    // empty bst -> return empty bst
    // root has no right children -> set valueToAdd to 0 so it is not undefined
    // root has right children but not a furthermost right child and deepest child on the root's right is on the left -> check if valueToAdd is undefined on left child too

    // Psuedocode:
    // if bst is empty
        // return bst

    // variable for valueToAdd

    // traverseTree function(node): 
        // if node has a right child
            // recurse on right child
        // if valueToAdd is not undefined
            // set node val as node val + valueToAdd
            // set valueToAdd as node val
        // if node has a left child
            // recurse on left child
        // if node has no children
            // if valueToAdd is undefined
                // set node val as valueToAdd
            // return

    // invoke traverseTree with root

    // return root

    if(!root) {
        return root;
    }

    let valueToAdd;

    if(!root.right) {
        valueToAdd = 0;
    }

    const traverseTree = (node) => {
        if(node.right) {
            traverseTree(node.right);
        }
        if(valueToAdd !== undefined) {
            node.val = node.val + valueToAdd;
            valueToAdd = node.val;
        }
        if(node.left) {
            if(valueToAdd === undefined) {
                valueToAdd = node.val;
            }
            traverseTree(node.left);
        }
        if(!node.left && !node.right) {
            if(valueToAdd === undefined) {
                valueToAdd = node.val;
            }
            return;
        }
    };

    traverseTree(root);

    return root;
};




// testing
class BinarySearchTree {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const bst1 = new BinarySearchTree(5);
bst1.left = new BinarySearchTree(2);
bst1.right = new BinarySearchTree(13);
// console.log(convertBST(bst1));

const bst2 = new BinarySearchTree(8);
bst2.left = new BinarySearchTree(6);
bst2.left.left = new BinarySearchTree(4);
bst2.left.right = new BinarySearchTree(7);
bst2.right = new BinarySearchTree(12);
bst2.right.left = new BinarySearchTree(9);
bst2.right.right = new BinarySearchTree(13);
// console.log(convertBST(bst2));

const bst3 = new BinarySearchTree(2);
bst3.left = new BinarySearchTree(1);
// console.log(convertBST(bst3));

const bst4 = new BinarySearchTree(1);
bst4.left = new BinarySearchTree(0);
bst4.left.left = new BinarySearchTree(-2);
bst4.right = new BinarySearchTree(4);
bst4.right.left = new BinarySearchTree(3);
// console.log(convertBST(bst4));
