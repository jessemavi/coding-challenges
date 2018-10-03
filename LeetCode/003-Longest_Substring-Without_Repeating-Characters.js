/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let longest_length = 0;
  let current_length = 0;
  let start_index = 0;

  const value_index = new Map();

  for(let i = 0; i < s.length; i++) {
    //console.log('current value', s[i]);
    //console.log('map before setting start_index', value_index)
    
    if(value_index.has(s[i]) === true && value_index.get(s[i]) >= start_index) {
      start_index = value_index.get(s[i]) + 1; 
    }
    
    value_index.set(s[i], i);
    //console.log(value_index);

    current_length = i - start_index + 1;
    //console.log('current length', current_length + '\n');

    if(current_length > longest_length) {
      longest_length = current_length;
    }
  }
    
  //console.log(value_index);    

  return longest_length;
};
