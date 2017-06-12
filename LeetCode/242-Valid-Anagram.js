/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // test for case where all letters of s are in t but t is longer
    
    // sObj for storing all letters of s with its number of occurences
    
    // iterate over s
        // add each letter to sObj and increment its count
        
    // iterate over t
        // if letter is not in sObj or letter occurence is 0
            // return false
        // if letter is in sObj
            // decrement letter occurence in sObj
    
    // return true
    
    // O(n) time and space complexity
    
    if(s.length !== t.length) return false;
    
    let sObj = {};
    
    for(let i = 0; i < s.length; i++) {
        if(sObj[s[i]]) {
            sObj[s[i]]++;
        } else {
            sObj[s[i]] = 1;
        }
    }
    
    for(let j = 0; j < t.length; j++) {
        if(!sObj[t[j]] || sObj[t[j]] === 0) {
            return false;
        } else if(sObj[t[j]]) {
            sObj[t[j]]--;
        }
    }
    
    return true;
    
};