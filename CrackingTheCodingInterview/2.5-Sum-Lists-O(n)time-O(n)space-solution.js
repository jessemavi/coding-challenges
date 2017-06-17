const sumLists = (numberList1, numberList2) => {
    // Plan: traverse through both linked lists adding each value to a separate stack. Add numbers from stacks into strings. Add the two strings together as numbers. Create a linked list with those numbers.

    let numberStack1 = [];
    let numberStack2 = [];
    let numberString1 = '';
    let numberString2 = '';

    let currentNode1 = numberList1.head;
    while(currentNode1) {
        numberStack1.push(currentNode1.value);
        currentNode1 = currentNode1.next;
    }

    let currentNode2 = numberList2.head;
    while(currentNode2) {
        numberStack2.push(currentNode2.value);
        currentNode2 = currentNode2.next;
    }

    while(numberStack1.length > 0) {
        numberString1 = numberString1.concat(numberStack1.pop());
    }

    while(numberStack2.length > 0) {
        numberString2 = numberString2.concat(numberStack2.pop());
    }

    const number1 = Number(numberString1);
    const number2 = Number(numberString2);
    const sum = number1 + number2;
    const sumString = sum.toString();

    let sumLinkedList = new LinkedList();

    for(let i = sumString.length - 1; i >= 0; i--) {
        sumLinkedList.addToTail(Number(sumString[i]));
    }

    return sumLinkedList.printValues();
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

    addToTail(value) {
        if(!this.head) {
            this.head = new Node(value);
        } else {
            let currentNode = this.head;
            while(currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = new Node(value);
        }
    }

    printValues() {
        let linkedListValues = [];
        let currentNode = this.head;
        while(currentNode) {
            linkedListValues.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return linkedListValues;
    }
}

let ll1 = new LinkedList();
ll1.addToTail(7);
ll1.addToTail(1);
ll1.addToTail(6);
let ll2 = new LinkedList();
ll2.addToTail(5);
ll2.addToTail(9);
ll2.addToTail(2);
// console.log(ll1.printValues());
// console.log(ll2.printValues());
console.log(sumLists(ll1, ll2));
