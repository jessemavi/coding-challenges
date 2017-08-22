// Initially, there is a Robot at position (0, 0). Given a sequence of its moves, judge if this robot makes a circle, which means it moves back to the original place.
// The move sequence is represented by a string. And each move is represent by a character. The valid robot moves are R (Right), L (Left), U (Up) and D (down). The output should be true or false representing whether the robot makes a circle.

// Example 1:
// Input: "UD"
// Output: true
// Example 2:
// Input: "LL"
// Output: false

/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    // Plan: iterate over the string and update robot position. If robot is at starting position after iterating through the string, return true, otherwise return false.

    // Psuedocode:
    // current robot position as array [0,0]

    // iterate over moves string
        // if move is 'U'
            // subtract 1 from currentRobotPosition[0]
        // else if move is 'D'
            // add 1 from currentRobotPosition[0]
        // else if move is 'L'
            // subtract 1 from currentRobotPosition[1]
        // else if move is 'R'
            // add 1 from currentRobotPosition[1]

    // if currentRobotPosition is [0,0]
        // return true
    // else
        // return false

    const currentRobotPosition = [0,0];

    for(let i = 0; i < moves.length; i++) {
        if(moves[i] === 'U') {
            currentRobotPosition[0]--;
        } else if(moves[i] === 'D') {
            currentRobotPosition[0]++;
        } else if(moves[i] === 'L') {
            currentRobotPosition[1]--;
        } else if(moves[i] === 'R') {
            currentRobotPosition[1]++;
        }
    }

    if(currentRobotPosition[0] === 0 && currentRobotPosition[1] === 0) {
        return true;
    } else {
        return false;
    }
};




// testing
// console.log(judgeCircle("UD"));
// console.log(judgeCircle("LL"));