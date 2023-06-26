/**
 * @module gameLogic
 * @requires gameBoard
 * @requires displayController
 */

import * as gameBoard from './gameBoard'
import * as displayController from './displayController'

let currentPlayerSign = 'X'
let scoreX = 0
let scoreO = 0
let gameEnded = false
let mode = ''

/**
 * Sets the game mode.
 * @param {string} gameMode - The game mode ('computer', 'player').
 */
const setMode = gameMode => {
    mode = gameMode
}

/**
 * Switches the current player.
 */
const switchPlayer = () => {
    currentPlayerSign = currentPlayerSign === 'X' ? 'O' : 'X'

    if (mode === 'computer' && currentPlayerSign === 'O') {
        makeComputerMove()
    }
}

/**
 * Makes a move on the game board.
 * @param {number} cellPosition - The position of the cell to make a move.
 */
const makeMove = cellPosition => {
    gameBoard.modifyCell(cellPosition, currentPlayerSign)

    if (!gameEnded && gameBoard.isEmptyCell(cellPosition)) {
        displayController.displayBoard()

        if (hasWon()) {
            endGame(`${currentPlayerSign} переміг!`)
            updateScore()
            return
        }
        if (checkTie()) {
            endGame('Нічия!')
            return
        }
        switchPlayer()
    }
}

/**
 * Makes a random computer move.
 */
const makeComputerMove = () => {
    const emptyCells = []
    const board = gameBoard.getBoard()

    for (let i = 0; i < board.length; i++) {
        if (board[i] === '') {
            emptyCells.push(i)
        }
    }

    if (emptyCells.length > 0) {
        const randomIndex = Math.floor(Math.random() * emptyCells.length)
        const cellPosition = emptyCells[randomIndex]
        makeMove(cellPosition)
    }
}

/**
 * Checks if a player has won the game.
 * @returns {boolean} `true` if a player has won, `false` otherwise.
 */
const hasWon = () => {
    const board = gameBoard.getBoard()
    const winningCombinations = [
        [0, 1, 2], // 1st row
        [3, 4, 5], // 2nd row
        [6, 7, 8], // 3rd row
        [0, 3, 6], // 1st column
        [1, 4, 7], // 2nd column
        [2, 5, 8], // 3rd column
        [0, 4, 8], // diagonal
        [2, 4, 6], // diagonal
    ]

    for (let winCombo of winningCombinations) {
        const [a, b, c] = winCombo
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return true
        }
    }

    return false
}

/**
 * @returns True if every cell is full, otherwise false
 */
const checkTie = () => {
    const board = gameBoard.getBoard()
    return board.every(cell => cell !== '')
}

/**
 * Updates the score based on the current player.
 */
const updateScore = () => {
    if (currentPlayerSign === 'X') {
        scoreX++
    } else {
        scoreO++
    }
    displayController.displayScore(currentPlayerSign, scoreX, scoreO)
}

/**
 * Resets the score to zero.
 */
const resetScore = () => {
    scoreX = scoreO = 0
    displayController.resetScore()
}

/**
 * Ends the game and displays the result message.
 * @param {string} message - The result message to display.
 */
const endGame = message => {
    gameEnded = true
    displayController.displayResult(message)
}

const resetGame = () => {
    gameBoard.resetBoard()
    currentPlayerSign = 'X'
    gameEnded = false
    displayController.displayBoard()
}

export { setMode, makeMove, resetScore, resetGame }