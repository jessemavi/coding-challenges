/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    // Plan: go through the grid and look for a node that is land('1'). If you find land then do DFS on the node's neighbors to find all adjacent land nodes. Then increment the island count.

    // DFS function(grid, row, column)
        // if row or column are outside the grid or node is not land(water or visited)
            // return
        // mark node as visited => use substr to mutate string row
        // recurse on node to the right
        // recurse on node to the left
        // recurse on node below
        // recurse on node above

    // island count variable set to 0

    // iterate over grid
        // iterate over each row
            // if value is a '1'
                // invoke DFS(value, row, column)
                // increment island count

    // return island count


    const dfs = (grid, row, column) => {
        // console.log('row', row, 'column', column);
        if(row < 0 || row >= grid.length || column < 0 || column >= grid[0].length || grid[row][column] !== '1') {
            return;
        }

        grid[row][column] = 'x';
        // console.log('character after visited', grid[row][column]);
        // console.log('grid after character has been visited\n', grid);

        dfs(grid, row, column + 1);
        dfs(grid, row, column - 1);
        dfs(grid, row + 1, column);
        dfs(grid, row - 1, column);
    };

    if(!grid || grid.length === 0) {
        return 0;
    } 

    let islandCount = 0;

    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[i].length; j++) {
            if(grid[i][j] === '1') {
                dfs(grid, i, j);
                islandCount++;
            }
        }
    }

    return islandCount;
};




// testing
console.log(  numIslands([['1','1','1','1','0'],['1','1','0','1','0'],['1','1','0','0','0'],['0','0','0','0','0']])  );
console.log(  numIslands([['1','1','0','0','0'], ['1','1','0','0','0'], ['0','0','1','0','0'], ['0','0','0','1','1']])  );
