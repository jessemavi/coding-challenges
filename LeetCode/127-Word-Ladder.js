/*
Given two words (beginWord and endWord), and a dictionary's word list, find the length of shortest transformation sequence from beginWord to endWord, such that:
Only one letter can be changed at a time.
Each transformed word must exist in the word list. Note that beginWord is not a transformed word.

Note:
Return 0 if there is no such transformation sequence.
All words have the same length.
All words contain only lowercase alphabetic characters.
You may assume no duplicates in the word list.
You may assume beginWord and endWord are non-empty and are not the same.

Example 1:
Input:
beginWord = "hit",
endWord = "cog",
wordList = ["hot","dot","dog","lot","log","cog"]
Output: 5
Explanation: As one shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog",
return its length 5.

Example 2:
Input:
beginWord = "hit"
endWord = "cog"
wordList = ["hot","dot","dog","lot","log"]
Output: 0
Explanation: The endWord "cog" is not in wordList, therefore no possible transformation.
*/

/*
- finding shortest sequence -> shortest path using BFS

- go through wordList and see if you can find a valid transformation(changing one letter) for beginWord
    - set that transformation to the current word and continue searching until you get to the endWord
        - check to see if you can take the current word and the current word in the wordList and be able to only change one letter to get them to match
    - mark word in wordList as explored
    - keep track of current path length and update shortest path if you find one
*/

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    let shortestPathLength;

    const bfs = (word) => {
        const queue = [[word, 1]];
        while(queue.length > 0) {
            const currentWord = queue.shift();

            if(currentWord[0] === endWord && (shortestPathLength === undefined || currentWord[1] < shortestPathLength)) {
                // console.log('found path from beginWord to endWord', currentWord[1]);
                shortestPathLength = currentWord[1];
            }

            for(let i = 0; i < wordList.length; i++) {
                // console.log('current word in wordList', wordList[i]);
                if(wordList[i] === 'x') {
                    continue;
                }
                let changedLetter = false;
                let foundValidTransformation = true;
                for(let j = 0; j < wordList[i].length; j++) {
                    // console.log('current letter in currentWord', currentWord[0][j]);
                    // console.log('current letter in wordList word', wordList[i][j]);
                    if(changedLetter === false && currentWord[0][j] !== wordList[i][j]) {
                        changedLetter = true;
                    } else if(changedLetter === true && currentWord[0][j] !== wordList[i][j]) {
                        foundValidTransformation = false;
                    }
                }
                if(foundValidTransformation === true) {
                    console.log('found valid transformation', wordList[i]);
                    queue.push([wordList[i], currentWord[1] + 1]);
                    wordList[i] = 'x';
                }
            }

        }
    };

    bfs(beginWord);

    if(shortestPathLength === undefined) {
        return 0;
    }

    return shortestPathLength;
};




const assert = require('assert');
assert.equal( ladderLength("hit", "cog", ["hot","dot","dog","lot","log","cog"]), 5 );
assert.equal( ladderLength("hit", "cog", ["hot","dot","dog","lot","log"]), 0 );
