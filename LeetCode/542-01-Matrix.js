/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function(matrix) {
    // Plan:
    // looking for distance of the nearest 0 -> shortest path -> BFS
    // search through the matrix and BFS on cells that aren't 0
    // keep track of distance(layers) on neighbors and once you reach a 0 on the matrix update the value in the matrix to the distance
    // can modify matrix in place(0s will stay 0 and other numbers will never be 0)

    // Pseudocode:
    // bfs function(matrix, row, column, currentDistance):
        // empty obj to store explored cells
        // mark current cell as explored => add to obj
        // create a queue with start vertex => not value but row and column in an array
        // while queue is not empty
            // remove the first node from the queue, call it vertex
            // if current vertex is start vertex
                // set vertex distance to 0
            // else
                // set vertex distance to current vertex distance
            // if current vertex position value on the matrix is 0
                // set nearestZeroDistance to current vertex distance
                // break out of while loop
            // for each edge(v, w) => above, below, left, right
                // if w is unexplored
                    // mark w as explored => add to obj
                    // add w row and column coordiantes and vertex distance + 1 in an array to the end of the queue 

    // nearestZeroDistance variable set to undefined

    // iterate over matrix
        // iterate over matrix row
            // if current cell is not 0
                // invoke bfs passing in matrix, row, column, 0
                // set matrix value to nearestZeroDistance
                // set nearestZeroDistance variable back to undefined

    // return matrix

    const bfs = (matrix, row, column) => {
        const exploredCells = {};
        exploredCells[[row, column]] = [row, column];

        let queue = [ [row, column] ];

        while(queue.length > 0) {
            // console.log('exploredCells', exploredCells);
            // console.log('queue', queue);

            let vertex = queue.shift();
            let vertexDistance;
            if(vertex[0] === row && vertex[1] === column) {
                vertexDistance = 0;
            } else {
                vertexDistance = vertex[2];
            }

            // console.log('current vertex', vertex);
            // console.log('vertexDistance', vertexDistance);

            if(matrix[vertex[0]][vertex[1]] === 0) {
                // console.log('found a zero, setting nearestZeroDistance to current vertex distance\n\n');
                nearestZeroDistance = vertex[2];
                break;
            }

            if(vertex[0] > 0) {
                if(!exploredCells[[vertex[0] - 1, vertex[1]]]) {
                    exploredCells[[vertex[0] - 1, vertex[1]]] = [vertex[0], vertex[1]];
                    queue.push([vertex[0] - 1, vertex[1], vertexDistance + 1]);
                    // console.log('added number above to queue');
                } else {
                    // console.log('number above already explored');
                }
            }
            if(vertex[0] < matrix.length - 1) {
                if(!exploredCells[[vertex[0] + 1, vertex[1]]]) {
                    exploredCells[[vertex[0] + 1, vertex[1]]] = [vertex[0] + 1, vertex[1]];
                    queue.push([vertex[0] + 1, vertex[1], vertexDistance + 1]);
                    // console.log('added number below to queue');
                } else {
                    // console.log('number below already explored');
                }
            }
            if(vertex[1] > 0) {
                if(!exploredCells[[vertex[0], vertex[1] - 1]]) {
                    exploredCells[[vertex[0], vertex[1] - 1]] = [vertex[0], vertex[1] - 1];
                    queue.push([vertex[0], vertex[1] - 1, vertexDistance + 1]);
                    // console.log('added number left to queue');
                } else {
                    // console.log('number left already explored');
                }
            }
            if(vertex[1] < matrix[0].length - 1) {
                if(!exploredCells[[vertex[0], vertex[1] + 1]]) {
                    exploredCells[[vertex[0], vertex[1] + 1]] = [vertex[0], vertex[1] + 1];
                    queue.push([vertex[0], vertex[1] + 1, vertexDistance + 1]);
                    // console.log('added number right to queue');
                } else {
                    // console.log('number right already explored');
                }
            }
        }
    };

    let nearestZeroDistance;

    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[0].length; j++) {
            if(matrix[i][j] !== 0) {
                // console.log('calling bfs with row', i, 'column', j);
                bfs(matrix, i, j);
                matrix[i][j] = nearestZeroDistance;
                nearestZeroDistance = undefined;
            }
        }
    }

    return matrix;
};




// testing
// console.log(updateMatrix(
//     [
//         [0, 0, 0],
//         [0, 1, 0],
//         [0, 0, 0]
//     ] 
// ));

// console.log(updateMatrix(
//     [
//         [0, 0, 0],
//         [0, 1, 0],
//         [1, 2, 1]
//     ] 
// ));

// console.log(updateMatrix(
//     [
//         [1, 1, 1],
//         [1, 1, 1],
//         [1, 1, 0]
//     ] 
// ));

// console.log(updateMatrix(
//     [
//         [1, 1, 1, 1, 1],
//         [1, 1, 1, 1, 1],
//         [1, 1, 0, 1, 1],
//         [1, 1, 1, 1, 1],
//         [1, 1, 1, 1, 1]
//     ] 
// ));

// console.log(updateMatrix(
//     [
//         [1, 1, 1, 1, 0],
//         [1, 1, 1, 1, 1],
//         [1, 1, 0, 1, 1],
//         [1, 1, 1, 1, 1],
//         [1, 1, 1, 1, 1]
//     ] 
// ));
