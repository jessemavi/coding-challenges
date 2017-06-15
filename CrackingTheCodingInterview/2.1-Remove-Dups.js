const removeDups = (head) => {
    // create an obj to store node values
    // reference to currentNode set as head
    // reference to previousNode set to null

    // iterate over the linked list with a reference to the current and previous nodes
        // if node value exists in obj
            // remove node by setting previousNode's next to currentNode's next
        // else
            // add value to obj
            // set previousNode to currentNode
        // set currentNode to its next node  

    let nodeValuesObj = {};

    let currentNode = head;
    let previousNode = null;

    while(currentNode) {
        if(nodeValuesObj[currentNode.value]) {
            previousNode.next = currentNode.next;
        } else {
            nodeValuesObj[currentNode.value] = 1;
            previousNode = currentNode;
        }
        currentNode = currentNode.next;
    }

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
            this.head = new Node(value);
            this.head.next = oldHead;
        }
    }

    printValues() {
        let valuesArray = [];
        let currentNode = this.head;
        while(currentNode) {
            valuesArray.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return valuesArray;
    }
}

let ll = new LinkedList();
ll.addToHead(1);
ll.addToHead(2);
ll.addToHead(3);
ll.addToHead(5);
ll.addToHead(2);
ll.addToHead(2);
ll.addToHead(2);
ll.addToHead(5);
ll.addToHead(1);
// console.log(ll.printValues());
removeDups(ll.head);
// console.log(ll.printValues());

let ll2 = new LinkedList();
ll2.addToHead(4);
ll2.addToHead(4);
ll2.addToHead(4);
ll2.addToHead(5);
ll2.addToHead(4);
// console.log(ll2.printValues());
removeDups(ll2.head);
// console.log(ll2.printValues());
