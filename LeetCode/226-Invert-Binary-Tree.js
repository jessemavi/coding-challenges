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
var invertTree = function(root) {
    // if !root
      // return null

    // if root.left and root.right
      // swap nodes

    // ***handle cases where one child exists and the doesn't(still need to swap nodes) need to do an if/else so you only do one swap and don't swap back into the initial tree structure before entering the if/else block
    // if root.left and !root.right
      // set root.right to root.left
      // set root.left to null
    // else if root.right and !root.left
      // set root.left to root.right
      // set root.right to null

    // if root.left
      // recurse on root.left
    // if root.right
      // recurse on root.right

    // return inverted binary tree;

    if(!root) {
      return null;
    }

    // console.log(root);

    if(root.left && root.right) {
      let temp = root.left;
      root.left = root.right;
      root.right = temp;
    }
    if(root.left && !root.right) {
      root.right = root.left;
      root.left = null;
      // console.log('root after right set to left and left set to null', root);
    } else if(root.right && !root.left) {
      root.left = root.right;
      root.right = null;
      // console.log('root after left set to right and right set to null', root);
    }

    if(root.left) {
      invertTree(root.left);
    }
    if(root.right) {
      invertTree(root.right);
    }

    return root;
};



//      4
//    /   \
//   2     7
//  / \   / \
// 1   3 6   9

//      4
//    /   \
//   7     2
//  / \   / \
// 9   6 3   1

// testing
class BinaryTree {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let bt = new BinaryTree(4);
bt.left = new BinaryTree(2);
bt.left.left = new BinaryTree(1);
bt.left.right = new BinaryTree(3);
bt.right = new BinaryTree(7);
bt.right.left = new BinaryTree(6);
bt.right.right = new BinaryTree(9);
// console.log(invertTree(bt));

let bt2 = new BinaryTree(1);
bt2.left = new BinaryTree(2);
bt2.left.left = new BinaryTree(4);
bt2.left.right = new BinaryTree(5);
bt2.right = new BinaryTree(3);
bt2.right.left = new BinaryTree(6);
console.log(invertTree(bt2));
