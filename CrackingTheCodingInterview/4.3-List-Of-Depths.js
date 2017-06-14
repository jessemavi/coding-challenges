const listDepth = (root) => {
    // create an object that store values found at each level of the tree
    // traverseTree function(root, currentLevel)
        // if root doesn't exist
            // return an empty obj
        // if !currentLevel(root node of the binary tree passed in)
            // set currentLevel to 0
        // if !treeLevelValuesObj[currentLevel]
            // create as a linked list
        // add root.val to treeLevelValuesObj[currentLevel] linked list as a new node
        // if root has a left child
            // recurse on left passing in currentLevel + 1
        // if root has a right child
            // recurse on right child passing in currentLevel + 1
    // invoke traverseTree passing in root
    // return obj

    let treeLevelValuesObj = {};

    const traverseTree = (root, currentLevel) => {
        if(!root) {
            return {};
        }

        if(!currentLevel) {
            currentLevel = 0;
        }

        if(!treeLevelValuesObj[currentLevel]) {
            treeLevelValuesObj[currentLevel] = new LinkedList();
        }
        treeLevelValuesObj[currentLevel].insert(root.val);

        if(root.left) {
            traverseTree(root.left, currentLevel + 1);
        }
        if(root.right) {
            traverseTree(root.right, currentLevel + 1);
        }
    };

    traverseTree(root);
    return treeLevelValuesObj;
};



// binary tree constructor
class BinaryTree {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// linked list node constructor
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// linked list constructor
class LinkedList {
  constructor() {
    this.head = null;
  }

  // insert method inserts to head for O(1) time
  insert(value) {
    if(!this.head) {
      this.head = new Node(value);
    } else {
      let oldHead = this.head;
      let newHead = new Node(value);
      this.head = newHead;
      this.head.next = oldHead;
    }
  }

  printValues() {
    let currentNode = this.head;
    while(currentNode) {
        console.log(currentNode.val);
        currentNode = currentNode.next;
    }
  }
}



// testing
let bt = new BinaryTree(5);
bt.left = new BinaryTree(9);
bt.left.left = new BinaryTree(3);
bt.left.right = new BinaryTree(36);
bt.left.left.right = new BinaryTree(11);
bt.left.left.right.left = new BinaryTree(18);
bt.right = new BinaryTree(12);
bt.right.left = new BinaryTree(2);
bt.right.left.right = new BinaryTree(19);
bt.right.left.right.right = new BinaryTree(17);
bt.right.left.right.left = new BinaryTree(170);

let btDepth = listDepth(bt);
// console.log(btDepth);

// printing each level linked list values
// for(let key in btDepth) {
//     console.log('level', key);
//     btDepth[key].printValues()
// }
