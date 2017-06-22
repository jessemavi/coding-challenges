//param A : array of integers
//return a array of integers
// input can have 0s before the most significant number but output can not
// [1,2,3] => [1,2,4]
// [0,3,4] => [3,5]
// [7,6,9] => [7,7,0]
// [3,9,9,9] => [4,0,0,0]
// [9] => [1,0]
// [0,9] => [1,0]
// [9,9,9,9] => [1,0,0,0,0]

const plusOne = (array) => {
    // Plan: if last number is less than 9 then just add 1 to last number and return array. If the last number is a 9 then change it to a 0 and as long as the number that comes before(to the left) is also a 9 change to 0 until you find a number that is not a 9 and just increment that. If most significant number is a 9 then change to 0 and add a 1 before it(to the left).

    // if array only has 1 element that is a 0
        // return array with a 1

    // while array[0] is 0
        // remove the leading 0

    // if last array element is less than 9
        // add 1 to last array element
            // return array

    // if last array element is 9
        // set to zero
        // set current index variable to the element before the last element
        // while number that comes before is a 9
            // set number to 0
            // decrement index
        // if element exists at current index(not undefined)
            // add 1 to number
        // else
            // add a 1 to the beginning of the array

    // return array

    if(array.length === 1 && array[0] === 0) {
        array = [1];
        return array;
    }

    while(array[0] === 0) {
        array.shift();
    }

    if(array[array.length - 1] < 9) {
        array[array.length - 1]++;
        return array;
    }

    if(array[array.length - 1] === 9) {
        array[array.length - 1] = 0;
        let currentIndex = array.length - 2;
        while(array[currentIndex] === 9) {
            array[currentIndex] = 0;
            currentIndex--;
        }
        if(array[currentIndex] !== undefined) {
            array[currentIndex]++;
        } else {
            array.unshift(1);
        }
    }

    return array;

}




// testing
// console.log(plusOne([1,2,3]));
// console.log(plusOne([0,3,4]));
// console.log(plusOne([7,6,9]));
// console.log(plusOne([3,9,9,9]));
// console.log(plusOne([9]));
// console.log(plusOne([0,9]));
// console.log(plusOne([9,9,9,9]));
// console.log(plusOne([0]));
// console.log(plusOne([ 8, 3, 3, 3, 0, 0, 9 ]));


