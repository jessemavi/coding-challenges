/*
- if there is a tie for the most frequent subtree sum return all of them(from LeetCode problem description)

- postorder dfs
- keep track of current most frequent subtree sum and its frequency in a map(using numbers as keys) and update if you encounter a more frequent sum
- return subtree sum to parent
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findFrequentTreeSum = function(root) {
    if(!root) {
        return [];
    }
    
    const most_frequent_sum = [];

    const sum_frequencies = new Map();
    let greatest_sum_frequency = 0; 

    const postorder_traversal = (node) => {
        let left;
        let right;

        if(node.left) {
            left = postorder_traversal(node.left);
        }
        if(node.right) {
            right = postorder_traversal(node.right);
        }
        // console.log('node', node.val);
        // console.log('left child', left);
        // console.log('right child', right);

        if(left === undefined) left = 0;
        if(right === undefined) right = 0;

        const sum = node.val + left + right;
        // console.log('sum', sum);

        if(sum_frequencies.has(sum) === false) {
            sum_frequencies.set(sum, 1);
        } else {
            sum_frequencies.set(sum, sum_frequencies.get(sum) + 1); 
        }

        if(sum_frequencies.get(sum) > greatest_sum_frequency) {
            greatest_sum_frequency = sum_frequencies.get(sum);
        }

        return sum;
    };

    postorder_traversal(root);

    for(let [key, value] of sum_frequencies.entries()) {
        if(value === greatest_sum_frequency) {
            most_frequent_sum.push(key);
        }
    }

    return most_frequent_sum;    
};
