/**
 * Initialize your data structure here.
 */
var MyStack = function() {
    this.in_queue = [];
    this.out_queue = [];
    // [7]
    // [1,3,5]
};

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    // enqueue x into in_queue
    this.in_queue.push(x);
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
    // while in_queue has more than one element
        // enqueue the dequeued value onto out_queue
    // save dequeued element from in_queue in a variable to return
    // swap in_queue and out_queue 
    // return saved dequeued value from in_queue before swap
    
    while(this.in_queue.length > 1) {
        this.out_queue.push(this.in_queue.shift());
    }
    
    const poppedValue = this.in_queue[0];
    
    this.in_queue = this.out_queue;
    this.out_queue = [];
    
    return poppedValue;
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
    // while in_queue has more than one element
        // enqueue the dequeued value onto out_queue
    // save remaining element from in_queue in a variable to return
    // enqueue the last dequeued value onto out_queue
    // swap in_queue and out_queue 
    // return saved last value from in_queue before swap

    while(this.in_queue.length > 1) {
      this.out_queue.push(this.in_queue.shift());
    }

    const topValue = this.in_queue[0];

    this.out_queue.push(this.in_queue.shift());

    this.in_queue = this.out_queue;
    this.out_queue = [];

    return topValue;
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    // return whether in_queue length is 0
    return this.in_queue.length === 0;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = Object.create(MyStack).createNew()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */