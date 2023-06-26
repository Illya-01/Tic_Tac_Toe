/**
 * Manages the game board
 * @module gameBoard
 */

let board = ['', '', '', '', '', '', '', '', '']

/**
 * Retrieves the current state of the game board.
 * @returns {Array<string>} The game board.
 */
const getBoard = () => board

/**
 * Resets the game board by clearing all cells.
 */
const resetBoard = () => {
    board = ['', '', '', '', '', '', '', '', '']
}

/**
 * Checks if a cell on the game board is empty.
 * @param {number} index - The index of the cell to check.
 * @returns {boolean} `true` if the cell is empty, `false` otherwise.
 */
const isEmptyCell = index => {
    return board[index] !== ''
}

/**
 * Modifies a cell on the game board with the specified sign.
 * @param {number} index - The index of the cell to modify.
 * @param {string} sign - The sign to set on the cell.
 */
const modifyCell = (index, sign) => {
    board[index] = sign
}

export { getBoard, resetBoard, modifyCell, isEmptyCell }
