// Suppose Andy and Doris want to choose a restaurant for dinner, and they both have a list of favorite restaurants represented by strings.
// You need to help them find out their common interest with the least list index sum. If there is a choice tie between answers, output all of them with no order requirement. You could assume there always exists an answer.

// Example 1:
// Input:
// ["Shogun", "Tapioca Express", "Burger King", "KFC"]
// ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]
// Output: ["Shogun"]
// Explanation: The only restaurant they both like is "Shogun".

// Example 2:
// Input:
// ["Shogun", "Tapioca Express", "Burger King", "KFC"]
// ["KFC", "Shogun", "Burger King"]
// Output: ["Shogun"]
// Explanation: The restaurant they both like and have the least index sum is "Shogun" with index sum 1 (0+1).

// Note:
// The length of both lists will be in the range of [1, 1000].
// The length of strings in both lists will be in the range of [1, 30].
// The index is starting from 0 to the list length minus 1.
// No duplicates in both lists.

/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    // Plan: iterate over list1 and add restaurant with a value of a hash table with its index to a hash table. Iterate over list2 and if restaurant is in hash table, add index to value hash table and update index sum if index sum is less or if undefined. Iterate over restaurantIndex hash table and add all restaurants whose index sum equals leastIndexSum

    // Psuedocode:
    // commonInterestRestaurants variable set to empty array
    // restaurantIndex hash table
    // leastIndexSum variable set to undefined

    // iterate over list1
        // add restaurant and a hash table with index to restaurantIndex

    // iterate over list2
        // if restaurant is in list1
            // add index in list2 to restaurantIndex
            // if leastIndexSum is undefined or if index sum is less than leastIndexSum
                // set leastIndexSum to index sum

    // iterate over restaurantIndex
        // if index sum equals leastIndexSum
            // add restaurant to commonInterestRestaurants

    // return commonInterestRestaurants

    const commonInterestRestaurants = [];
    const restaurantIndex = {};
    let leastIndexSum;

    for(let i = 0; i < list1.length; i++) {
        restaurantIndex[list1[i]] = {list1Index: i};
    }

    for(let j = 0; j < list2.length; j++) {
        if(restaurantIndex[list2[j]]) {
            restaurantIndex[list2[j]]['list2Index'] = j;
            if(leastIndexSum === undefined || restaurantIndex[list2[j]]['list1Index'] + restaurantIndex[list2[j]]['list2Index'] < leastIndexSum) {
                leastIndexSum = restaurantIndex[list2[j]]['list1Index'] + restaurantIndex[list2[j]]['list2Index'];
            }
        }
    }

    for(let key in restaurantIndex) {
        if(restaurantIndex[key]['list1Index'] + restaurantIndex[key]['list2Index'] === leastIndexSum) {
            commonInterestRestaurants.push(key);
        }
    }

    return commonInterestRestaurants;
};




// testing
const assert = require('assert');
assert.deepEqual( findRestaurant(["Shogun", "Tapioca Express", "Burger King", "KFC"], ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]), ["Shogun"] );
assert.deepEqual( findRestaurant(["Shogun", "Tapioca Express", "Burger King", "KFC"], ["KFC", "Shogun", "Burger King"]), ["Shogun"] );
