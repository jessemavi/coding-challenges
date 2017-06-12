/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    // obj to store letters of t
    
    // iterate over t
        // add each letter to obj
        
    // iterate over s
        // subtract 1 from the count in obj for each letter that is found in s
        
    // iterate over obj
        // if value is 1(extra letter that is in t but not s)
            // return key
    
    let obj = {};
    
    for(let i = 0; i < t.length; i++) {
        if(!obj[t[i]]) {
            obj[t[i]] = 1;
        } else {
            obj[t[i]]++;
        }
    }
    
    for(let j = 0; j < s.length; j++) {
        obj[s[j]]--;
    }
    
    for(let key in obj) {
        if(obj[key] === 1) {
            return key;
        }
    }
    
};