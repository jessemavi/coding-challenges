/*
Given a collection of intervals, merge all overlapping intervals.

Example 1:
Input: [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].

Example 2:
Input: [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considerred overlapping.
*/

/*
- input doesn't have to be increasing(ex. [[2,3],[1,8],[0,4]] -> [[0,8]])

- sort intervals first so the smallest start intervals are at the beginning and you don't add a new interval instead of adding to a current interval when you encounter a smaller start than what may have already been added to mergedIntervals

- keep track of low and high values
- iterate over intervals
    if current low is greater than high
        - add interval to mergedIntervals
        - set low to current low
        - set high to current high
    - if current low is less than low
        - update low
    - if current high is greater than high
        - update high
- add last interval to mergedIntervals
*/

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
    if(intervals.length <= 1) {
        return intervals;
    }

    intervals.sort((a, b) => a.start - b.start);

    const mergedIntervals = [];

    let low = intervals[0].start;
    let high = intervals[0].end;

    for(let i = 1; i < intervals.length; i++) {
        if(intervals[i].start > high) {
            mergedIntervals.push(new Interval(low, high));
            low = intervals[i].start;
            high = intervals[i].end;
        }
        if(intervals[i].start < low) {
            low = intervals[i].start;
        }
        if(intervals[i].end > high) {
            high = intervals[i].end;
        }
    }

    mergedIntervals.push(new Interval(low, high));

    return mergedIntervals;
};


function Interval(start, end) {
    this.start = start;
    this.end = end;
}

const assert = require('assert');

assert.deepEqual( 
    merge([new Interval(1,3),new Interval(2,6),new Interval(8,10),new Interval(15,18)]), 
    [new Interval(1,6),new Interval(8,10),new Interval(15,18)] 
);

assert.deepEqual( 
    merge([new Interval(1,4),new Interval(4,5)]), 
    [new Interval(1,5)] 
);

assert.deepEqual( 
    merge([new Interval(2,3),new Interval(1,8), new Interval(0,4), new Interval(12,14), new Interval(4,9)]), 
    [new Interval(0,9), new Interval(12,14)] 
);

assert.deepEqual( 
    merge([new Interval(2,3),new Interval(0,1), new Interval(1,2), new Interval(3,4), new Interval(4,5), new Interval(1,1), new Interval(0,1), new Interval(4,6), new Interval(5,7), new Interval(1,1), new Interval(3,5)]), 
    [new Interval(0,7)] 
);
