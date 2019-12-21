let hour = 0
function minimumHours(rows, columns, grid) {
    // WRITE YOUR CODE HERE
    if (!checkValid(grid)) {
        console.log(123, columns)
        grid = addHour(rows, columns, grid)
        hour = hour + 1
        return minimumHours(rows, columns, grid)
    }
    return hour
}

function addHour(rows, columns, grid) {
    let column = 0
    while (column < columns) {
        let row = 0
        console.log(column, columns)
        while (row < rows) {
            console.log(column, row, rows)
            if (grid[row][column] === 1) {
                if (column >= 1) {
                    grid[row][column - 1] = 1
                }

                if (column < columns - 1) {
                    grid[row][column + 1] = 1
                }

                if (row >= 1) {
                    grid[row - 1][column] = 1
                }

                if (row < rows - 1) {
                    console.log(column, row)
                    grid[row + 1][column] = 1
                }
                console.log(grid)
            }
            row = row + 1
        }
        column = column + 1
    }
    return grid
}

function checkValid(grid) {
    let isValid = true
    grid.forEach(row => {
        if (row.includes(0)) isValid = false
    })
    return isValid
}

minimumHours(2, 5, [[1, 1, 1, 1, 1], [1, 1, 0, 1, 1]])