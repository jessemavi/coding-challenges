// Plan: When pushing onto a stack, check if capacity has been reached. If so then create a new stack and push onto that. When popping off check what the current stack is then pop off from that stack. Keep track of the current stack and increment when creating a new stack.

class SetofStacks {
    constructor(capacity) {
        this.capacity = capacity;
        this.stackList = [[]];
        this.currentStackIndex = 0;
    }

    push(value) {
        if(this.stackList[this.currentStackIndex].length < this.capacity) {
            this.stackList[this.currentStackIndex].push(value);
            // console.log(this.stackList);
        } else {
            this.currentStackIndex++;
            this.stackList.push([value]);
            // console.log(this.stackList);
        }
    }

    pop() {
        let poppedValue = this.stackList[this.currentStackIndex].pop();
        if(this.stackList[this.currentStackIndex].length === 0) {
            this.stackList.pop();
            this.currentStackIndex--;
        }
        return poppedValue;
    }

    popAt(index) {
        return this.stackList[index].pop();
    }
}




// testing
let stack1 = new SetofStacks(3);
stack1.push('bear');
stack1.push('tiger');
stack1.push('dolphin');
stack1.push('walrus');
stack1.push('eagle');
console.log(stack1.stackList);
console.log(stack1.currentStackIndex);
console.log(stack1.pop());
console.log(stack1.stackList);
console.log(stack1.currentStackIndex);
stack1.push('lion');
stack1.push('python');
stack1.push('zebra');
stack1.push('falcon');
stack1.push('camel');
console.log(stack1.stackList);
console.log(stack1.currentStackIndex);
console.log(stack1.popAt(0));
console.log(stack1.popAt(2));
console.log(stack1.stackList);
console.log(stack1.currentStackIndex);