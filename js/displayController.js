const displayController = (() => {
    const cells = document.querySelectorAll('.cell')
    const resultMessage = document.querySelector('#result')
    const scoreXElement = document.querySelector('#scoreX')
    const scoreOElement = document.querySelector('#scoreO')
    /**
     * get custom property color from root element
     */
    const winColor = getComputedStyle(document.documentElement).getPropertyValue('--win-clr')

    /**
     * Displays the current state of the game board on the webpage.
     */
    const displayBoard = () => {
        const board = gameBoard.getBoard()
        for (let i = 0; i < cells.length; i++) {
            cells[i].textContent = board[i]
        }
    }

    /**
     * Colors the cells of game board on the webpage.
     * @param {Array} cellsToPaint array of cells to paint.
     */
    const colorBoard = cellsToPaint => {
        cellsToPaint.map(cellPosition => (cells[cellPosition].style.backgroundColor = winColor))
    }

    const resetBoardColoring = () => {
        cells.forEach(cell => (cell.style.backgroundColor = ''))
    }

    /**
     * Displays the score for the specified player.
     * @param {string} playerSign - The sign of the player ('X' or 'O').
     * @param {number} scoreX - Score of X.
     * @param {number} scoreO - Score of O.
     */
    const displayUpdatedScore = (playerSign, scoreX, scoreO) => {
        if (playerSign === 'X') {
            scoreXElement.textContent = scoreX
        } else {
            scoreOElement.textContent = scoreO
        }
    }

    /**
     * Resets the score display to initial values.
     */
    const resetScore = () => {
        scoreXElement.textContent = '_'
        scoreOElement.textContent = '_'
    }

    /**
     * Displays the result message on the webpage for a specified time.
     * @param {string} message - The message to display.
     * @param {number} [timeInSec=2] - The time in seconds to display the message (default: 2 seconds).
     */
    const displayResult = (message, timeInSec = 2) => {
        resultMessage.textContent = message
        resultMessage.style.display = 'block'

        // delay for specified time to show result
        setTimeout(() => {
            resultMessage.style.display = 'none'
        }, timeInSec * 1000)
    }

    return {
        displayBoard,
        colorBoard,
        resetBoardColoring,
        displayUpdatedScore,
        resetScore,
        displayResult,
    }
})()
