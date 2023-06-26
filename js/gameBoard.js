const gameBoard = (() => {
    let board = ['', '', '', '', '', '', '', '', '']

    const getBoard = () => board

    const updateBoard = (index, sign) => {
        if (board[index] === '') {
            board[index] = sign
            return true
        }
        return false
    }

    const resetBoard = () => {
        board = ['', '', '', '', '', '', '', '', '']
    }

    return {
        getBoard,
        updateBoard,
        resetBoard,
    }
})()
