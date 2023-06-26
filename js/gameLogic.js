const gameLogic = (() => {
    let currentPlayerSign = 'X'
    let scoreX = 0
    let scoreO = 0
    let gameEnded = false
    let mode = ''

    const setMode = gameMode => {
        mode = gameMode
    }

    const switchPlayer = () => {
        currentPlayerSign = currentPlayerSign === 'X' ? 'O' : 'X'
    }

    const makeMove = cellPosition => {
        if (!gameEnded && gameBoard.updateBoard(cellPosition, currentPlayerSign)) {
            displayController.renderBoard()
            if (checkWin()) {
                endGame(`${currentPlayerSign} переміг!`)
                updateScore()
                return
            }
            if (checkTie()) {
                endGame('Нічия!')
                return
            }
            switchPlayer()

            if (mode === 'computer' && currentPlayerSign === 'O') {
                makeComputerMove()
            }
        }
    }

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

    const checkWin = () => {
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

    const checkTie = () => {
        const board = gameBoard.getBoard()
        return board.every(cell => cell !== '')
    }

    const updateScore = () => {
        if (currentPlayerSign === 'X') {
            scoreX++
        } else {
            scoreO++
        }
        displayController.updateScore(currentPlayerSign, scoreX, scoreO)
    }

    const resetScore = () => {
        scoreX = scoreO = 0
        displayController.resetScore()
    }

    const endGame = message => {
        gameEnded = true
        displayController.showResult(message)
    }

    const resetGame = () => {
        gameBoard.resetBoard()
        currentPlayerSign = 'X'
        gameEnded = false
        displayController.renderBoard()
    }

    return {
        setMode,
        makeMove,
        resetScore,
        resetGame,
    }
})()
