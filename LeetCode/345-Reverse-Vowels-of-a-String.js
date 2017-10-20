// Write a function that takes a string as input and reverse only the vowels of a string.
// Example 1:
// Given s = "hello", return "holle".
// Example 2:
// Given s = "leetcode", return "leotcede".
// Note:
// The vowels does not include the letter "y".

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    // note: s can consist of a mix of lowercase and uppercase chars
    // Plan: Create an array of string chars. Use two pointers starting at the beginning and the end of the string. When both pointers are at a vowel, swap the letters.
    // O(n) time and O(n) space complexity
    // Edge cases: empty string or string has only 1 char -> return string

    // Psuedocode:
    // if string length is 1 or less
        // return string

    // swap function(array, i1, i2):
        // set temp variable as array[i1]
        // set array[i1] to array[i2]
        // set array[i2] to temp

    // stringArray
    // vowels set to hash table with all vowels
    // pointer1 index set to 0
    // pointer2 set to the index of the last char in stringArray

    // while pointer 1 is less than or equal to pointer 2
        // if character at pointer1 and pointer2 are vowels
            // swap chars
            // increment pointer1
            // decrment pointer2
        // else if char at pointer 1 is a vowel
            // decrement pointer2
        // else if char at pointer 2 is a vowel
            // increment pointer1
        // else
            // increment pointer1
            // decrement pointer2

    // return array transformed to string

    if(s.length <= 1) {
        return s;
    }

    const swap = (array, i1, i2) => {
        const temp = array[i1];
        array[i1] = array[i2];
        array[i2] = temp;
    };

    const stringArray = s.split('');
    // console.log('stringArray', stringArray);
    const vowels = {'a': 1, 'e': 1, 'i': 1, 'o': 1, 'u': 1, 'A': 1, 'E': 1, 'I': 1, 'O': 1, 'U': 1};
    let p1 = 0;
    let p2 = stringArray.length - 1;

    while(p1 <= p2) {
        if(vowels[stringArray[p1]] && vowels[stringArray[p2]]) {
            swap(stringArray, p1, p2);
            p1++;
            p2--;
        } else if(vowels[stringArray[p1]]) {
            p2--;
        } else if(vowels[stringArray[p2]]) {
            p1++;
        } else {
            p1++;
            p2--;
        }
    }

    return stringArray.join('');
};

// testing
const assert = require('assert');
assert.equal(reverseVowels("hello"), "holle");
assert.equal(reverseVowels("leetcode"), "leotcede");
assert.equal(reverseVowels("hellO"), "hOlle");



