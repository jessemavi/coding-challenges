/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    // given access to node: O(1) time complexity solution
    
    // if node is the tail
        // don't do anything         
    // set current node's value to next node's value
    // if next node's next is null
        // set current node's next to null
    // else set current node's next to next node's next
    
    if(node.next === null) {
        
    } else {
        node.val = node.next.val;
        if(node.next.next === null) {
            node.next = null;
        } else {
            node.next = node.next.next;
        }
    }
    
};