// Given two binary trees, write a function to check if they are equal or not.
// Two binary trees are considered equal if they are structurally identical and the nodes have the same value.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    // Plan: O(n) time and O(1) space complexity. Have a in order tree traversal function. Invoke with both binary trees and check if values are the same.

    // Psuedocode:
    // if both trees are undefined
        // return true
    // if p is not undefined and q is undefined or p is undefined and q is not undefined
        // return false

    // variable for areTreesEqual set to true

    // treeTraversal function(treeNode1, treeNode2):
        // if treeNode values are not equal
            // set areTreesEqual to false
            // return
        // if treeNode1 has a left child
            // if treeNode2 has a left child
                // recurse on both treeNodes
            // else 
                // set areTreesEqual to false
                // return
        // if treeNode1 has a right child
            // if treeNode2 has a right child
                // recurse on both treeNodes
            // else 
                // set areTreesEqual to false
                // return
        // if treeNode2 has a left child
            // if treeNode1 has a left child
                // recurse on both treeNodes
            // else 
                // set areTreesEqual to false
                // return
        // if treeNode2 has a right child
            // if treeNode1 has a right child
                // recurse on both treeNodes
            // else 
                // set areTreesEqual to false
                // return

    // invoke treeTraversal with p and q

    // return areTreesEqual

    if(!p && !q) {
        return true;
    } else if(p && !q || !p && q) {
        return false;
    }

    let areTreesEqual = true;

    const treeTraversal = (treeNode1, treeNode2) => {
        if(treeNode1.val !== treeNode2.val) {
            areTreesEqual = false;
            return;
        }

        if(treeNode1.left) {
            if(treeNode2.left) {
                treeTraversal(treeNode1.left, treeNode2.left);
            } else {
                areTreesEqual = false;
                return;
            }
        }

        if(treeNode1.right) {
            if(treeNode2.right) {
                treeTraversal(treeNode1.right, treeNode2.right);
            } else {
                areTreesEqual = false;
                return;
            }
        }

        if(treeNode2.left) {
            if(treeNode1.left) {
                treeTraversal(treeNode1.left, treeNode2.left);
            } else {
                areTreesEqual = false;
                return;
            }
        }

        if(treeNode1.right) {
            if(treeNode2.right) {
                treeTraversal(treeNode1.right, treeNode2.right);
            } else {
                areTreesEqual = false;
                return;
            }
        }

    };

    treeTraversal(p, q);

    return areTreesEqual;
}




// testing
class BinaryTree {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const bt1 = new BinaryTree(10);
bt1.left = new BinaryTree(5);
bt1.left.left = new BinaryTree(8);
bt1.left.right = new BinaryTree(9);
bt1.right = new BinaryTree(16);
bt1.right.left = new BinaryTree(19);
bt1.right.right = new BinaryTree(22);

const bt2 = new BinaryTree(10);
bt2.left = new BinaryTree(5);
bt2.left.left = new BinaryTree(8);
bt2.left.right = new BinaryTree(9);
bt2.right = new BinaryTree(16);
bt2.right.left = new BinaryTree(19);
bt2.right.right = new BinaryTree(22);

// console.log(isSameTree(bt1, bt2));









// O(n) time and O(n) space complexity solution
/*
var isSameTree = function(p, q) {
    // Plan: O(n) time and O(n) space complexity. Create two arrays, do an in order traversal on both binary trees and add each value to the array. Check if arrays are identical with length and values.

    // Psuedocode:
    // if p and q are both undefined
        // return true
    // else if p or q is undefined
        // return false

    // empty pValuesArray
    // empty qValuesArray

    // treeTraversal function(treeNode, array):
        // add node value to array
        // if node has no children
            // return
        // if node has a left child
            // recurse on left child passing in array
        // else
            // add null to array
        // if node has a right child
            // recurse on right child passing in array
        // else
            // add null to array

    // invoke treeTraversal with p and pValuesArray
    // invoke treeTraversal with q and qValuesArray

    // if pValuesArray and qValuesArray length is not equal
        // return false

    // iterate over pValuesArray
        // if value in pValuesArray is not equal to value in qValuesArray
            // return false

    // return true

    if(!p && !q) {
        return true;
    } else if(!p || !q) {
        return false;
    }

    const pValuesArray = [];
    const qValuesArray = [];

    const treeTraversal = (treeNode, array) => {
        array.push(treeNode.val);
        if(!treeNode.left && !treeNode.right) {
            return;
        }
        if(treeNode.left) {
            treeTraversal(treeNode.left, array);
        } else {
            array.push(null);
        }
        if(treeNode.right) {
            treeTraversal(treeNode.right, array);
        } else {
            array.push(null);
        }
    };

    treeTraversal(p, pValuesArray);
    treeTraversal(q, qValuesArray);

    if(pValuesArray.length !== qValuesArray.length) {
        return false;
    }

    for(let i = 0; i < pValuesArray.length; i++) {
        if(pValuesArray[i] !== qValuesArray[i]) {
            return false;
        }
    }

    return true;
};
*/
