/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
    this.in_stack = [];
    this.out_stack = [];
    // []
    // [4,3,2,1]
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    // add element to in_stack
    this.in_stack.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    // if out_stack is empty
        // while in_stack is not empty
            // push the popped value onto out_stack
    // return the popped value from out_stack
    
    if(this.out_stack.length === 0) {
        while(this.in_stack.length > 0) {
            this.out_stack.push(this.in_stack.pop());
        }
    }
    return this.out_stack.pop();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    // if out_stack is empty
        // while in_stack is not empty
            // push the popped value onto out_stack
    // return the top value in out_stack
    
    if(this.out_stack.length === 0) {
        while(this.in_stack.length > 0) {
            this.out_stack.push(this.in_stack.pop());
        }
    }
    return this.out_stack[this.out_stack.length - 1];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    // return whether both in_stack and out_stack are empty
    return this.in_stack.length === 0 && this.out_stack.length === 0;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = Object.create(MyQueue).createNew()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */