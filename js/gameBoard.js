import { displayController } from './displayController.js'

export const gameBoard = (() => {
    let board = ['', '', '', '', '', '', '', '', '']

    /**
     * Retrieves the current state of the game board.
     * @returns {Array<string>} The game board.
     */
    const getBoard = () => board

    /**
     * Resets the game board by clearing all cells and gets rig of coloring.
     */
    const resetBoard = () => {
        board = ['', '', '', '', '', '', '', '', '']
        displayController.resetBoardColoring()
    }

    /**
     * Modifies a cell on the game board with the specified sign.
     * @param {number} index - The index of the cell to modify.
     * @param {string} sign - The sign to set on the cell.
     */
    const modifyCell = (index, sign) => {
        if (board[index] === '') {
            board[index] = sign
        }
    }

    /**
     * Checks if a cell on the game board is empty.
     * @param {number} index - The index of the cell to check.
     * @returns {boolean} `true` if the cell is empty, `false` otherwise.
     */
    const isEmptyCell = index => board[index] === ''

    /**
     * @returns `True` if the every cell in the game board is occupied, `False` otherwise.
     */
    const isFullBoard = () => board.every(cell => cell !== '')

    return {
        getBoard,
        resetBoard,
        modifyCell,
        isEmptyCell,
        isFullBoard,
    }
})()
