const gameLogic = (() => {
    let currentPlayerSign = 'X'
    let scoreX = 0
    let scoreO = 0
    let isGameEnded = false
    let mode = 'computer'

    /**
     * Sets the game mode.
     * @param {string} gameMode - The game mode ('computer', 'man').
     */
    const setMode = gameMode => {
        mode = gameMode
    }

    /**
     * Switches the current player.
     */
    const switchPlayer = () => {
        currentPlayerSign = currentPlayerSign === 'X' ? 'O' : 'X'
    }

    /**
     * Makes a move on the game board.
     * @param {number} cellPosition - The position of the cell to make a move.
     */
    const makeMove = cellPosition => {
        if (isGameEnded || !gameBoard.isEmptyCell(cellPosition)) return

        gameBoard.modifyCell(cellPosition, currentPlayerSign)
        displayController.displayBoard()

        if (hasWinner()) {
            isGameEnded = true
            displayController.displayResult(`${currentPlayerSign} переміг!`)
            updateScore()
            return
        }
        if (isTie()) {
            isGameEnded = true
            displayController.displayResult('Нічия!')
            return
        }

        switchPlayer()

        // if you play with computer, let him go next
        if (mode === 'computer' && currentPlayerSign === 'O') {
            makeComputerMove()
        }
    }

    /**
     * Checks for an available cells and makes a random move.
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
    const hasWinner = () => {
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
            // if cell is not empty and sign is the same for all cells
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return true
            }
        }

        return false
    }

    /**
     * Checks if the game is tied (all cells are filled).
     * @returns {boolean} `true` if the game is tied, `false` otherwise.
     */
    const isTie = () => {
        return gameBoard.isFullBoard()
    }

    /**
     * Increments player score and calls function to display updated score
     */
    const updateScore = () => {
        if (currentPlayerSign === 'X') {
            scoreX++
        } else {
            scoreO++
        }
        displayController.displayUpdatedScore(currentPlayerSign, scoreX, scoreO)
    }

    /**
     * Resets the score to zero.
     */
    const resetScore = () => {
        scoreX = scoreO = 0
        displayController.resetScore()
    }

    /**
     * Resets the game to the initial state.
     */
    const resetGame = () => {
        gameBoard.resetBoard()
        currentPlayerSign = 'X'
        isGameEnded = false
        displayController.displayBoard()
    }

    return {
        setMode,
        makeMove,
        resetScore,
        resetGame,
    }
})()
