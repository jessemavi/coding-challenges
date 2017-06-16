const deleteMiddleNode = (node) => {
    // O(1) time and O(1) solution
    // if node or its next node doesn't exist(can't delete)
        // return false
    // set node's value to next node's value
    // set node's next to the node after it
    // return true

    if(!node || !node.next) {
        return false;
    }
    
    node.value = node.next.value;
    node.next = node.next.next;

    return true;
};




// testing
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    addToHead(value) {
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
        let linkedListValuesArray = []
        let currentNode = this.head;
        while(currentNode) {
            linkedListValuesArray.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return linkedListValuesArray;
    }
}

let ll = new LinkedList();
ll.addToHead(2);
ll.addToHead(7);
ll.addToHead(9);
ll.addToHead(4);
ll.addToHead(8);
ll.addToHead(1);
// console.log(ll.printValues());
deleteMiddleNode(ll.head.next);  // 8
// console.log(ll.printValues());
deleteMiddleNode(ll.head.next.next);  // 9
// console.log(ll.printValues());