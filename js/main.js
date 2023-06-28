import { gameLogic } from './gameLogic.js'

const cells = document.querySelectorAll('.cell')
const resetBtn = document.querySelector('#resetGameBtn')
const modeCompBtn = document.querySelector('#mode-computer')
const modeManBtn = document.querySelector('#mode-man')

/**
 * Adds event listeners to each cell on the game board to handle cell clicks.
 */
cells.forEach((cell, cellPosition) => {
    cell.addEventListener('click', () => {
        gameLogic.makeMove(cellPosition)
    })
})

resetBtn.addEventListener('click', () => {
    gameLogic.resetGame()
})

modeCompBtn.addEventListener('click', () => {
    gameLogic.setMode('computer')
    gameLogic.resetGame()
    gameLogic.resetScore()
})

modeManBtn.addEventListener('click', () => {
    gameLogic.setMode('man')
    gameLogic.resetGame()
    gameLogic.resetScore()
})
