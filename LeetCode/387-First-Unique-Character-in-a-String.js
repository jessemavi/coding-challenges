// Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.
// Examples:
// s = "leetcode"
// return 0.
// s = "loveleetcode",
// return 2.
// Note: You may assume the string contain only lowercase letters.

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    // Plan: O(n) time and O(n) space complexity. Have a storage object. Iterate over the string and add each letter as a key and an array of frequency and index. Iterate over the object and return the letter that doesn't repeat or -1 if it doesn't exist.

    // Psuedocode:
    // variable for storage object

    // iterate over s
        // if letter in s exists in obj
            // increment frequency
        // else if letter doesn't exist in obj
            // add key of letter and value as frequency set to 1

    // iterate over s
        // if current letter frequency in storageObject equals 1
            // return index

    // return -1

    const letterFrequency = {};

    for(let i = 0; i < s.length; i++) {
        if(letterFrequency[s[i]]) {
            letterFrequency[s[i]] += 1;
        } else if(!letterFrequency[s[i]]) {
            letterFrequency[s[i]] = 1;
        }
    }

    for(let j = 0; j < s.length; j++) {
        if(letterFrequency[s[j]] === 1) {
            return j;
        }
    }

    return -1;
};




// testing
console.log(firstUniqChar("leetcode"));
console.log(firstUniqChar("loveleetcode"));




