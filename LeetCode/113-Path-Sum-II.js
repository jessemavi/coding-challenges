// Given a binary tree and a sum, find all root-to-leaf paths where each path's sum equals the given sum.

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
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    // Plan: traverse through the tree pre-order adding elements to a stack and keeping track of the sum so far. Once you reach a leaf node check if the sum so far equals the sum. If so add a copy of the stack to the result array. Pop off the stack at the end of each call 

    // result array
    // stack

    // traverseTree function(root, totalSoFar)
        // if !root
            // return empty array
        // if !totalSoFar
            // set it to the root val
        // else
            // add the current root val to it
        // add value to stack
        // if !root.left and !root.right(reached a leaf)
            // if totalSoFar equals sum
                // create an array of stack values
                // push copy stack to result array
        // if root.left
            // recurse left
        // if root.right
            // recurse right
        // pop off the top element of the stack

    // invoke traverseTree passing in root
    // return result array

    let result = [];
    let stack = [];

    const traverseTree = (root, totalSoFar) => {
        if(!root) {
            return [];
        }

        if(!totalSoFar) {
            totalSoFar = root.val;
        } else {
            totalSoFar += root.val;
        }

        stack.push(root.val);

        // console.log('totalSoFar', totalSoFar);
        // console.log('stack', stack);

        if(!root.left && !root.right) {
            // console.log('entered if statement where root has no children');
            if(totalSoFar === sum) {
                // console.log('entered total and sum equaling if statement');
                let stackCopy = stack.slice(0);
                result.push(stackCopy);
            }
        }
        if(root.left) {
            traverseTree(root.left, totalSoFar);
        }
        if(root.right) {
            traverseTree(root.right, totalSoFar);
        }
        stack.pop();
        // console.log('result', result);
    };

    traverseTree(root);
    return result;
};



// Given the below binary tree and sum = 22,
//               5
//              / \
//             4   8
//            /   / \
//           11  13  4
//          /  \    / \
//         7    2  5   1
// return
// [
//    [5,4,11,2],
//    [5,8,4,5]
// ]

class BinaryTree {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
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
bt.right.right.left = new BinaryTree(5);
bt.right.right.right = new BinaryTree(1);
console.log(pathSum(bt, 22));


