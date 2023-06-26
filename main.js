import * as gameLogic from './modules/gameLogic'

const cells = document.querySelectorAll('.cell')
const resetBtn = document.querySelector('#resetGameBtn')
const modeCompBtn = document.querySelector('#mode-computer')
const modeFriendBtn = document.querySelector('#mode-friend')

resetBtn.addEventListener('click', () => {
    gameLogic.resetGame()
})

/**
 * Adds event listeners to each cell on the game board to handle cell clicks.
 */
cells.forEach((cell, index) => {
    cell.addEventListener('click', () => {
        gameLogic.makeMove(index)
    })
})

modeCompBtn.addEventListener('click', () => {
    gameLogic.setMode('computer')
    gameLogic.resetGame()
    gameLogic.resetScore()
})

modeFriendBtn.addEventListener('click', () => {
    gameLogic.setMode('friend')
    gameLogic.resetGame()
    gameLogic.resetScore()
})
