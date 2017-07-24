/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    // O(n) solution
    // Plan:
    // while num has more than one digit add all digits and set as num. Return digit
    num = num.toString().split('');

    while(num.length > 1) {
        let newNum = 0;
        console.log(num);
        for(let i = 0; i < num.length; i++) {
            newNum += Number(num[i]);
        }
        num = newNum.toString().split('');
    }

    return Number(num);
};




// testing
// console.log(addDigits(38));
// console.log(addDigits(999));
