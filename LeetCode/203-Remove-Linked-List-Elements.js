/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    // if head doesn't exist
        // return an empty list
    
    // while head's val equals val
        // if all values in the list are equal to val(head's next is null)
            // return an empty list
        // change head to point to the next node
        
    // set current to head
    
    // traverse through the linked list
        // while current node's next's value equals val
            // change current next to point to next node's next
        // set current to the next node for next iteration
    
    // return head
    
    if(!head) {
        return [];
    }
    
    while(head.val === val) {
        if(head.next === null) {
            return [];
        }
        head = head.next;
    }
    
    let current = head;
    
    while(current) {
        while(current.next !== null && current.next.val === val) {
            current.next = current.next.next;
        }
        current = current.next
    }
    
    return head;
};