/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // if only given one price or an empty array
        // return 0

    // variable for minimum value
    // variable for maxProfit

    // iterate over prices array
        // if price is less than min
            // set min to price
        // if profit from selling at current price is greater than maxProfit
            // set maxProfit to current difference

    // return max profit
        
    // O(n) time and O(1) space complexity

    if(prices.length <= 1) {
        return 0;
    }

    let min = prices[0];
    let maxProfit = 0;

    for(let i = 1; i < prices.length; i++) {
        if(prices[i] < min) {
            min = prices[i];
        } else if(prices[i] - min > maxProfit) {
            maxProfit = prices[i] - min;
        }
    }

    return maxProfit;
        
};