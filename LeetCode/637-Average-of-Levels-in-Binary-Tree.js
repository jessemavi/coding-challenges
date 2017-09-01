/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    // Plan: Have a array for average tree level values. Have an object to store arrays with node values for each level. Pre order traversal through the tree keeping reference to current level and add each node value to the respective level array in the object. Iterate over the level object and calculate the average value of each level and add to the average value array to return.

    // I: binary tree, O: array, C: none, E: empty tree

    // {0: [3, 1], 1: [29, 2], 2: [22, 1]}

    // Psuedocode:
    // if tree is empty
        // return []

    // variable for averageValues array
    // variable for levelValues object

    // treeTraversal function(node, currentLevel):
        // if currentLevel index array in levelValues object doesn't exist
            // add an array to levelValues object at currentLevel key with a value of [node value, 1]
        // else
            // increment second value in levelValues object array at currentLevel key
            // add current node val to first value in levelValues object array at currentLevel key
        // if node has a left child
            // recurse on left child passing in currentLevel + 1
        // if node has a right child
            // recurse on right child passing in currentLevel + 1
        // if node has no children
            // return

    // call treeTraversal with root and 0

    // iterate over levelValues object
        // set averageValues value at index to the average

    // return averageValues

    if(!root) {
        return [];
    }

    const averageValues = [];
    const levelValues = {};

    const treeTraversal = (node, currentLevel) => {
        if(!levelValues[currentLevel]) {
            levelValues[currentLevel] = [node.val, 1];
        } else {
            levelValues[currentLevel][1]++;
            levelValues[currentLevel][0] = levelValues[currentLevel][0] + node.val; 
        }

        if(node.left) {
            treeTraversal(node.left, currentLevel + 1);
        }
        if(node.right) {
            treeTraversal(node.right, currentLevel + 1);
        }
    };

    treeTraversal(root, 0);

    for(let key in levelValues) {
        averageValues[key] = levelValues[key][0] / levelValues[key][1];
    }

    return averageValues;
};




// testing
class BinaryTree {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const bt1 = new BinaryTree(3);
bt1.left = new BinaryTree(9);
bt1.right = new BinaryTree(20);
bt1.right.left = new BinaryTree(15);
bt1.right.right = new BinaryTree(7);

// console.log(bt1);
// console.log(averageOfLevels(bt1));

const bt2 = new BinaryTree(3);
bt2.left = new BinaryTree(9);
bt2.right = new BinaryTree(20);
bt2.left.left = new BinaryTree(18);
bt2.left.left.left = new BinaryTree(4);
bt2.left.left.right = new BinaryTree(6);
bt2.right.left = new BinaryTree(24);
bt2.right.right = new BinaryTree(1);
bt2.right.left.left = new BinaryTree(15);
bt2.right.left.right = new BinaryTree(7);

// console.log(bt2);
// console.log(averageOfLevels(bt2));





