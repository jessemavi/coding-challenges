/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.storage_array = [];
    // [3, 8, 2, 11, 1, 5]
    // Plan: keep track of min for the stack at that point when a node is added
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    let minVal;
    let topMinVal;
    
    if(this.storage_array.length > 0) {
        topMinVal = this.storage_array[this.storage_array.length - 1][1];
    }
    
    if(topMinVal !== 'undefined' && topMinVal < x) {
        minVal = topMinVal;
    } else {
        minVal = x;
    }
    
    this.storage_array.push([x, minVal]);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    return this.storage_array.pop()[0];
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.storage_array[this.storage_array.length - 1][0];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.storage_array[this.storage_array.length - 1][1]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */