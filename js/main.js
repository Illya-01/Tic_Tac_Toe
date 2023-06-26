const cells = document.querySelectorAll('.cell')
const resetBtn = document.querySelector('#resetGameBtn')
const modeCompBtn = document.querySelector('#mode-computer')
const modeFriendBtn = document.querySelector('#mode-friend')

/**
 * Adds event listeners to each cell on the game board to handle cell clicks.
 */
cells.forEach((cell, index) => {
    cell.addEventListener('click', () => {
        gameLogic.makeMove(index)
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

modeFriendBtn.addEventListener('click', () => {
    gameLogic.setMode('friend')
    gameLogic.resetGame()
    gameLogic.resetScore()
})
