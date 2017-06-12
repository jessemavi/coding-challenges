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
var isPalindrome = function(head) {
    // array to store letters
    
    // iterate through linked list
        // add each letter to letterArray
        
    // set 2 pointers to first and last index of letterArray(want to check if letters at each position match)
    
    // while pointers don't pass each other
        // if letter at p1 index doesn't equal letter at p2 index
            // return false
        // increment p1
        // decrement p2
    
    // if gone through letterArray return true
    
    let letterArray = [];
    // let stack = [];
    
    while(head) {
        letterArray.push(head.val);
        head = head.next
    }
    
    let p1 = 0;
    let p2 = letterArray.length - 1;
    
    while(p1 <= p2) {
        if(letterArray[p1] !== letterArray[p2]) {
            return false;
        }
        p1++;
        p2--;
    }
    
    return true;
    
};