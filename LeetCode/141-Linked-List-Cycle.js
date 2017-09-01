/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    // Plan: traverse through the linked list and mark each node value as visited. If a node's value equals visited return true. Otherwise if you traverse through the entire linked list to th end return false.

    // Edge Cases:
    // list is empty

    // Psuedocode:

    // if list is empty or has only one node
        // return false

    // set hasCycle variable to false
    // set currentNode variable to head

    // traverse through the linked list
        // if node's val is 'visited'
            // set hasCycle to true
            // break
        // set currentNode's value to 'visited'
        // update currentNode to next node

    // return hasCycle

    if(!head || !head.next) {
        return false;
    }

    let hasCycle = false;
    let currentNode = head;

    while(currentNode !== null) {
        if(currentNode.val === 'visited') {
            hasCycle = true;
            break;
        }
        currentNode.val = 'visited';
        currentNode = currentNode.next;
    }

    return hasCycle;
};




// testing
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const ll1 = new ListNode(1);
ll1.next = new ListNode(2);
ll1.next.next = new ListNode(3);
ll1.next.next.next = ll1.next;

// console.log(ll1);
// console.log(hasCycle(ll1));
