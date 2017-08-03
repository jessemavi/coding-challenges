/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    // Plan: iterate over an array of the string incrementing by 2k. Use two pointers at head(first character) and tail(first + k character) and reverse characters. If statements for case where less than k characters left and case where there are less than 2k but greater than or equal to k characters(may need to break out of loop in if statements).

    // Psuedocode:
    // split s into an array
    // iterate over string array incrementing by 2k
        // if there are less than k characters left
            // reverse all characters using two pointers
            // break
        // else
            // reverse first k characters

    // return string of stringArray

    const stringArray = s.split('');

    for(let i = 0; i < stringArray.length; i += (2 * k)) {
        console.log('i', i, 's[i]', s[i]);
        if((stringArray.length - i) < k) {
            let start = i;
            let end = stringArray.length - 1;
            while(start <= end) {
                let temp = stringArray[start];
                stringArray[start] = stringArray[end];
                stringArray[end] = temp;
                start++;
                end--;
            }
        } else {
            let start = i;
            let end = i + (k - 1);
            console.log(start, end);
            while(start <= end) {
                let temp = stringArray[start];
                stringArray[start] = stringArray[end];
                stringArray[end] = temp;
                start++;
                end--;
            }
        }
    }

    return stringArray.join('');
};




// testing
console.log(reverseStr("abcdefg", 2));
