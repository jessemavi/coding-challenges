/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    // Examples:
    // [1,2,3]
    // [1,2,3]
    // [1,1,2,2,3,3]

    // [2,3,4]
    // [0,1]
    // [0,1,2,3,4]

    // [0,0,1,3]
    // [0,2,4,5]
    // [0,0,0,1,2,3,4,5]

    // O(n) time and O(1) space solution
    // Plan: have two pointers that start at head of l1 and l2 and reach the end. Insert l2 values in l1 if less than or equal to l1 values.

    // Psuedocode:
    // if l1 is empty
        // return l2
    // if l2 is empty
        // return l1

    // l1 pointer set to l1 head
    // l2 pointer set to l2 head

    // while l2 pointer hasn't reached the end of l2
        // if l1 pointer has reached the end and l2 pointer value is greater than or equal to l1 pointer value
            // set l1 pointer node's next to a new node with l2 pointer value
            // set l2 pointer to next node
        // if l2 pointer node value is less than l1 pointer node value(can only be when l1 pointer is at the head)
            // set l1 head to a new node with l2 node value and next of previous l1 head
            // set l1 pointer to l1
            // set l2 pointer to next node
        // else if l2 pointer value is equal to l1 pointer value or if l2 pointer value is greater than l1 pointer value and less than l1 pointer node's next value
            // set l1 pointer node's next to a new node with l2 pointer node's value and next of previous l1 pointer node's next
            // set l1 pointer to next node
            // set l2 pointer to next node
        // else
            // set l1 pointer to next node

    // return l1

    if(l1 === null) {
        return l2;
    }
    if(l2 === null) {
        return l1;
    }

    let l1P = l1;
    let l2P = l2;

    while(l2P !== null) {
        if(l1P.next === null && l2P.val >= l1P.val) {
            l1P.next = new ListNode(l2P.val);
            l2P = l2P.next;
        } else if(l2P.val < l1P.val) {
            const newNode = new ListNode(l2P.val);
            newNode.next = l1P;
            l1 = newNode;
            l1P = l1;
            l2P = l2P.next;
        } else if(l2P.val === l1P.val || (l2P.val > l1P.val && l2P.val < l1P.next.val)) {
            const newNode = new ListNode(l2P.val);
            newNode.next = l1P.next;
            l1P.next = newNode;
            l1P = l1P.next;
            l2P = l2P.next;
        } else {
            l1P = l1P.next;
        }
    }

    return l1;
};




// testing
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const printLinkedListValues = (ll) => {
    const values = [];
    let currentNode = ll;
    while(currentNode !== null) {
        values.push(currentNode.val);
        currentNode = currentNode.next;
    }
    return values;
};

const ll1 = new ListNode(1);
ll1.next = new ListNode(2);
ll1.next.next = new ListNode(3);

const ll2 = new ListNode(1);
ll2.next = new ListNode(2);
ll2.next.next = new ListNode(3);

const ll3 = new ListNode(2);
ll3.next = new ListNode(3);
ll3.next.next = new ListNode(4);

const ll4 = new ListNode(0);
ll4.next = new ListNode(1);

const ll5 = new ListNode(0);
ll5.next = new ListNode(0);
ll5.next.next = new ListNode(1);
ll5.next.next.next = new ListNode(3);

const ll6 = new ListNode(0);
ll6.next = new ListNode(2);
ll6.next.next = new ListNode(4);
ll6.next.next.next = new ListNode(5);

// console.log(printLinkedListValues(mergeTwoLists(ll1, ll2)));
// console.log(printLinkedListValues(mergeTwoLists(ll3, ll4)));
// console.log(printLinkedListValues(mergeTwoLists(ll5, ll6)));
