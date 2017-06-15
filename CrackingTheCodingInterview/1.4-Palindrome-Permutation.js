const palindromePermutation = (string) => {
    // Plan: try to see if string is a palindrome by seeing if the right amount of characters exist. If string length is even: same number of each character If string length is odd: same amount of characters except one character(middle character of palindrome). Whitespace in string is included in palindrome => can just ignore.

    // O(n) time and O(n) space solution:
    // remove non letter characters
    // change string to lowercase 

    // count of the number of occurences of an odd number of characters in the string(should only be 0 or 1 to be a palindrome)
    // obj to store number of string character occurences

    // iterate over string
        // if string character is a ' '
            // continue to next iteration and don't add to obj
        // if string character exists in obj
            // increment count
        // else
            // add character to obj with a value of 1

    // iterate over obj
        // if obj character count is odd
            // increment oddOccurencesCount
        // if oddOccurencesCount is greater than 1
            // return false

    // return true

    string = string.replace(/[^A-Za-z0-9]/g, '');
    string = string.toLowerCase();

    let oddOccurencesCount = 0;
    let stringCharacterOccurences = {};

    for(let i = 0; i < string.length; i++) {
        if(string[i] === ' ') {
            continue;
        }
        if(stringCharacterOccurences[string[i]]) {
            stringCharacterOccurences[string[i]]++;
        } else {
            stringCharacterOccurences[string[i]] = 1;
        }
    }

    // console.log(stringCharacterOccurences);

    for(let key in stringCharacterOccurences) {
        if(stringCharacterOccurences[key] % 2 !== 0) {
            oddOccurencesCount++;
        }
        if(oddOccurencesCount > 1) {
            return false;
        }
    }

    return true;
};



// testing
// http://www.palindromelist.net/
// console.log(palindromePermutation('Tact Coa'));
// console.log(palindromePermutation('Tact Caoa'));
// console.log(palindromePermutation('A but tuba'));
// console.log(palindromePermutation('A man, a plan, a cat, a ham, a yak, a yam, a hat, a canal-Panama'));
// console.log(palindromePermutation('A new order began, a more Roman age bred Rowena'));