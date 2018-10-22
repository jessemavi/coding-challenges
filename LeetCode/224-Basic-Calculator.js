/*
Implement a basic calculator to evaluate a simple expression string.
The expression string may contain open ( and closing parentheses ), the plus + or minus sign -, non-negative integers and empty spaces .

Example 1:
Input: "1 + 1"
Output: 2

Example 2:
Input: " 2-1 + 2 "
Output: 3

Example 3:
Input: "(1+(4+5+2)-3)+(6+8)"
Output: 23

Note:
You may assume that the given expression is always valid.
Do not use the eval built-in library function.
*/

/*
"1" -> 1

- s is a string so integers within s are strings
- use stack
- add to stack in reverse so you can add or subtract from left to right when going through the stack
- ignore empty spaces
- add closing parens to stack
- when you get to a opening paren
    - evaluate expression inside the parens by removing values and evaluating until you get to a closing paren
    - remove closing paren from the stack
    - add result back to the stack
- once you reach the beginning of s and it is not an opening paren and you can't add any more values
    - evaluate expression inside stack which should not have any parens
- need to handle numbers greater than 9 with a length greater that 1
    - 10, 122, etc...

" 2-1 + 2 "
[2,'+',1,'-',2]
2 - 1 -> 1
[2,'+',1]
1 + 2 -> 3

"(1+(4+5+2)-3)+(6+8)"
[')', 8, '+', 6]
6 + 8 -> 14
[14, '+', ')', 3, '-', ')', 2, '+', 5, '+', 4]
4 + 5 + 2 -> 11
[14, '+', ')', 3, '-', 11, '+', 1]
1 + 11 - 3 -> 9
[14, '+', 9]
9 + 14 -> 23

*/

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    const stack = [];

    for(let i = s.length - 1; i >= 0; i--) {
        if(s[i] === ' ') {
            continue;
        } else if(s[i] === '+' || s[i] === '-' || s[i] === ')') {
            stack.push(s[i]);
        } else if(s[i] === '(') {
            // console.log('stack when reached opening paren', stack);
            let resultInsideParens = stack.pop();
            while(stack[stack.length - 1] !== ')') {
                if(stack[stack.length - 1] === '+') {
                    stack.pop();
                    resultInsideParens = resultInsideParens + stack.pop();
                } else if(stack[stack.length - 1] === '-') {
                    stack.pop();
                    resultInsideParens = resultInsideParens - stack.pop();
                }
            }
            stack.pop();
            stack.push(resultInsideParens);
        } else {
            // character is a number
            let string = '';
            while(isNaN(s[i]) === false && s[i] !== ' ') {
                string += s[i];
                i--;
            }
            if(string.length > 1) {
                string = string.split('').reverse('').join('');
            }
            stack.push(Number(string));
            i++;
        }
    }

    // console.log(stack);

    let result = stack.pop();

    while(stack.length > 0) {
        if(stack[stack.length - 1] === '+') {
            stack.pop();
            result = result + stack.pop();
        } else if(stack[stack.length - 1] === '-') {
            stack.pop();
            result = result - stack.pop();
        }
    }

    return result;
};




const assert = require('assert');
assert.equal( calculate("1 + 1"), 2 );
assert.equal( calculate("1 + 10"), 11 );
assert.equal( calculate(" 2-1 + 2 "), 3 );
assert.equal( calculate("(1+(4+5+2)-3)+(6+8)"), 23 );
assert.equal( calculate("2147483647"), 2147483647 );
