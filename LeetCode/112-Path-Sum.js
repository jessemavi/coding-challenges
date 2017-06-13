// Note: need to use a subroutine function inside hasPathSum to avoid declaring a gloabl variable 

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
 * @return {boolean}
 */
 
var hasPathSum = function(root, sum) {
    // Plan: in order traversal through the tree through all paths keeping track of total so far and return true if total equals sum and are at a leaf node

    // set hasPathSumResult variable as false
    // traverse tree function(root, sum and totalSoFar)
        // if root doesn't exist(empty tree)
            // return false;
        // if totalSoFar is undefined(initial call to hasPathSum where root is the root of binary tree passed in)
            // set totalSoFar to root.val
        // else
            // set totalSoFar to totalSoFar + root.val
        // if root has a left node(can't optimize here on only recursing if totalSoFar + left.val isn't greater than sum because of negative numbers)
            // recurse on left node and pass in sum and totalSoFar
        // if root has a right node(can't optimize here on only recursing if totalSoFar + right.val isn't greater than sum because of negative numbers)
            // recurse on right node and pass in sum and totalSoFar
        // if root has no children
            // if totalSoFar equals sum
                // return true
    // invoke traverseTree passing in root and sum
    // return hasPathSumResult

    let hasPathSumResult = false;

    const traverseTree = (root, sum, totalSoFar) => {
        if(!root) {
            return false;
        }
        // console.log('root:', root);
        if(!totalSoFar) {
            totalSoFar = root.val;
        } else {
            totalSoFar += root.val;
        }
        console.log('totalSoFar after:', totalSoFar);

        if(root.left) {
            console.log('recursing left');
            traverseTree(root.left, sum, totalSoFar);
        }
        if(root.right) {
            console.log('recursing right');
            traverseTree(root.right, sum, totalSoFar);
        }
        if(!root.left && !root.right) {
            console.log('reached leaf', root);
            console.log('totalSoFar', totalSoFar);
            console.log('sum', sum);
            if(totalSoFar === sum) {
                hasPathSumResult = true;
            }
        }
    }

    traverseTree(root, sum);
    return hasPathSumResult;
};

//       5
//      / \
//     4   8
//   /   /  \
//  11  13  4
//  / \      \
// 7   2      1

class BinaryTree {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

let bt = new BinaryTree(5);
bt.left = new BinaryTree(4);
bt.left.left = new BinaryTree(11);
bt.left.left.left = new BinaryTree(7);
bt.left.left.right = new BinaryTree(2);
bt.right = new BinaryTree(8);
bt.right.left = new BinaryTree(13);
bt.right.right = new BinaryTree(4);
bt.right.right.right = new BinaryTree(1);
// console.log(bt);

console.log(hasPathSum(bt, 18));
console.log(hasPathSum(bt, 27));
console.log(hasPathSum(bt, 22));


let bt2 = new BinaryTree(1);
bt2.left = new BinaryTree(-2);
bt2.left.left = new BinaryTree(1);
bt2.left.left.left = new BinaryTree(-1);
bt2.right = new BinaryTree(-3);
bt2.right.left = new BinaryTree(-2);
console.log(hasPathSum(bt2, -1));