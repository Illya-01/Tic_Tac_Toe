const displayController = (() => {
    const cells = document.querySelectorAll('.cell')
    const resultMessage = document.querySelector('#result')
    const scoreXElement = document.querySelector('#scoreX')
    const scoreOElement = document.querySelector('#scoreO')

    const renderBoard = () => {
        const board = gameBoard.getBoard()
        for (let i = 0; i < cells.length; i++) {
            cells[i].textContent = board[i]
        }
    }

    const updateScore = (playerSign, playerXWinCount, playerOWinCount) => {
        if (playerSign === 'X') {
            scoreXElement.textContent = playerXWinCount
        } else {
            scoreOElement.textContent = playerOWinCount
        }
    }

    const resetScore = () => {
        scoreXElement.textContent = '_'
        scoreOElement.textContent = '_'
    }

    const showResult = (message, timeInSec = 2) => {
        resultMessage.textContent = message
        resultMessage.style.display = 'block'

        // delay for specified time to show result
        setTimeout(() => {
            resultMessage.style.display = 'none'
        }, timeInSec * 1000)
    }

    return {
        renderBoard,
        updateScore,
        resetScore,
        showResult,
    }
})()
