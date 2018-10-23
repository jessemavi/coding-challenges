/*
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

For example, given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
*/

/*
n = 2

[
    "(())"
    "()()"
]

- recursive function(string, numOpening, numClosing)
    - if number of opening parens equals number of closing parens
        - add string to combinations
        - return
    - if number of opening parens is smaller than n
        - add opening paren to string and recurse
    - if number of closing parens is less than number of opening parens
        - add a closing paren to string and recurse
*/

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const combinations = [];

    const generateCombinations = (string, numOpening, numClosing) => {
        // console.log('numOpening', numOpening, 'numClosing', numClosing, 'string', string,);
        if(numOpening === n && numClosing === n) {
            combinations.push(string);
            return;
        }
        if(numOpening < n) {
            generateCombinations(string + '(', numOpening + 1, numClosing);
        }
        if(numClosing < numOpening) {
            generateCombinations(string + ')', numOpening, numClosing + 1);
        }
    };

    generateCombinations('', 0, 0);

    // console.log('combinations', combinations);
    return combinations;
};




const assert = require('assert');
assert.deepEqual( generateParenthesis(1), ["()"] );
assert.deepEqual( generateParenthesis(2), ["(())","()()"] );
assert.deepEqual( generateParenthesis(3), ["((()))","(()())","(())()","()(())","()()()"] );
