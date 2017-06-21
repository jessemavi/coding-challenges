const minimalTree = (array) => {
    // [2, 3, 5, 8, 10, 13, 16, 18, 19, 20, 23]
    // sorted -> binary search
    // Plan: Binary search to get the middle element and insert that into the bst as a node. If there is a left half recurse and set the node's left value as a node. If there is a right half recurse and set the node's right value as a node

    // if array is null or empty
        // return undefined
    // create a bst to insert nodes into

    // bst insertion function(array, node)
        // if !bst root
            // set node as array midpoint element
            // set bst root to node
        // set node value as array midpoint element
        // if array has a left half
            // set node's left to a new node
            // recurse on left node and pass in left array
        // if array has a right half
            // set node's right to a new node
            // recurse on right node and pass in right array

    // invoke insertion function passing in array
    // return bst

    if(!array || array.length === 0) {
        return undefined;
    }

    const bst = new BST();

    const bstInsert = (array, node) => {
        const mid = Math.floor(array.length / 2);
        if(!bst.root) {
            node = new Node(array[mid]);
            bst.root = node;
        } else {
            node.value = array[mid];
        }

        // console.log(node);

        const leftHalf = array.slice(0, mid);
        const rightHalf = array.slice(mid + 1);
        if(leftHalf.length > 0) {
            node.left = new Node();
            bstInsert(leftHalf, node.left);
        }
        if(rightHalf.length > 0) {
            node.right = new Node();
            bstInsert(rightHalf, node.right);
        }
    };

    bstInsert(array);
    return bst;
};




// testing
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }
}


console.log(minimalTree([2, 3, 5, 8, 10, 13, 16, 18, 19, 20, 23]));
console.log(minimalTree([1, 2, 3, 4]));
console.log(minimalTree([7]));
