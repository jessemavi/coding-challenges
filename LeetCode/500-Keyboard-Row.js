/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    // create result array
    // create objects of letters for each row
    
    // iterate over words array
        // check for which obj has the first letter of a word
            // check if a remaning letter of the word can't be found in that obj
                // break out of this loop and continue to next word
            // every character of the word can be found in the obj(if you have gone through the entire word)
                // add word to result array
            
    // return result array
    
    let result = [];
    
    let obj1 = {'Q':'Q','q':'q','W':'W','w':'w','E':'E','e':'e','R':'R', 'r':'r','T':'T','t':'t','Y':'Y','y':'y','U':'U','u':'u','I':'I','i':'i','O':'O','o':'o','P':'P','p':'p'};
    let obj2 = {'A':'A', 'a':'a', 'S':'S', 's':'s', 'D':'D','d':'d','F':'F','f':'f','G':'G','g':'g','H':'H','h':'h','J':'J','j':'j','K':'K','k':'k','L':'L','l':'l'};
    let obj3 = {'Z':'Z','z':'z','X':'X','x':'x','C':'C','c':'c','V':'V','v':'v','B':'B','b':'b','N':'N','n':'n','M':'M','m':'m'};
    
    for(let i = 0; i < words.length; i++) {
        if(obj1[words[i][0]]) {
            let flag = true;
            for(let j = 1; j < words[i].length; j++) {
                if(!obj1[words[i][j]]) {
                    flag = false;
                    break;
                }
            }
            if(flag) {
                result.push(words[i]);   
            }
        }
        
        if(obj2[words[i][0]]) {
            let flag = true;
            for(let j = 1; j < words[i].length; j++) {
                if(!obj2[words[i][j]]) {
                    flag = false;
                    break;
                }
            }
            if(flag) {
                result.push(words[i]);   
            }
        }
        
        if(obj3[words[i][0]]) {
            let flag = true;
            for(let j = 1; j < words[i].length; j++) {
                if(!obj3[words[i][j]]) {
                    flag = false;
                    break;
                }
            }
            if(flag) {
                result.push(words[i]);   
            }
        }
        
    }
    
    return result;
    
};