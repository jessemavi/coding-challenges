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
var levelOrder = function(root) {
    // Plan: Inorder traversal keeping track of current level and adding to array.
    // O(n) time and O(1) space complexity
    // Edge cases: binary tree is empty -> return empty array

    // Psuedocode:
    // if binary is empty
        // return empty array

    // variable for nodeValues empty array

    // treeTraversal function(node, currentLevel):
        // if nodeValues at currentLevel index is undefined
            // add an empty array with node value to nodeValues at currentLevel index
        // else 
            // add node value to nodeValues at currentLevel index
        // if node has a left child
            // recurse on left child passing in currentLevel + 1
        // if node has a right child
            // recurse on right child passing in currentLevel + 1

    // invoke treeTraversal with root and 0

    // return nodeValues

    if(!root) {
      return [];
    }

    const node_values_by_level = [];

    const bfs = (s) => {
      const queue = [[s, 0]];
      while(queue.length > 0) {
        const v = queue.shift();
        
        if(node_values_by_level[v[1]] === undefined) {
          node_values_by_level[v[1]] = [v[0].val];
        } else {
          node_values_by_level[v[1]].push(v[0].val);
        }
          
        if(v[0].left) {
          queue.push([v[0].left, v[1] + 1]);
        }
        if(v[0].right) {
          queue.push([v[0].right, v[1] + 1]);
        }
      }
    };

    bfs(root);

    return node_values_by_level;
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
console.log(levelOrder(bt1));
