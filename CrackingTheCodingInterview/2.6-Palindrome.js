const palindrome = (head) => {
    // O(n) time and O(n) space solution
    // create an array to store linked list values
    // traverse through linked list
        // add each node value in lowercase to array
    // create left and right pointers set to the start and end of the array
    // iterate over the array using pointers
        // if LP and RP array values don't equal each other
            // return false
    // return true

    let linkedListValuesArray = [];

    let currentNode = head;
    while(currentNode) {
        linkedListValuesArray.push(currentNode.value.toLowerCase());
        currentNode = currentNode.next;
    }

    let LP = 0;
    let RP = linkedListValuesArray.length - 1;

    while(LP < RP) {
        if(linkedListValuesArray[LP] !== linkedListValuesArray[RP]) {
            return false;
        }
        LP++;
        RP--;
    }

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
ll.addToHead('m');
ll.addToHead('a');
ll.addToHead('d');
ll.addToHead('a');
ll.addToHead('m');
// console.log(ll.printValues());
// console.log(palindrome(ll.head));

let ll2 = new LinkedList();
ll2.addToHead('A');
ll2.addToHead('n');
ll2.addToHead('n');
ll2.addToHead('a');
// console.log(ll2.printValues());
// console.log(palindrome(ll2.head));