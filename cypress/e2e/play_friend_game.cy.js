const signs = ['X', 'O']
let winningCombo

describe('Симуляція гри. Х переможець', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    // Play a complete game and verify the result
    it('Перевірка на натискання клітинок, їх забарвлення при перемозі, вивід результату та оновлення поля', () => {
        // array, that contains sequence of moves, that lead to O's victory
        let winningMoveOrderX = [4, 7, 0, 8, 2, 3, 6]

        // iterate over the sequence and place sign X and O in order
        for (let i = 0; i < winningMoveOrderX.length; i++) {
            cy.get('.cell').eq(winningMoveOrderX[i]).click()
            cy.get('.cell')
                .eq(winningMoveOrderX[i])
                // i % 2 gives repeating sequence of X and O
                .should('have.text', signs[i % 2])

            cy.wait(500)
        }

        // check colorization
        winningCombo = [2, 4, 6]
        const winColor = 'rgb(0, 29, 61)'

        // Verify the color of the winning cells
        winningCombo.forEach(cellPosition => {
            cy.get('.cell').eq(cellPosition).should('have.css', 'background-color', winColor)
        })

        // Verify the result message
        cy.get('#result').should('have.text', 'X переміг!')
        cy.wait(500)

        // Verify the score
        cy.get('#scoreX').should('have.text', '1')
        cy.get('#scoreO').should('have.text', '_')
        cy.wait(500)

        // Click on the reset button
        cy.get('#resetGameBtn').click()
        cy.wait(500)

        // Verify the game board is reset
        cy.get('.cell').each(cell => {
            cy.wrap(cell).should('have.text', '')
        })
    })
})

describe('Симуляція гри. О переможець', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    // Play a complete game and verify the result
    it('Перевірка на натискання клітинок, їх забарвлення при перемозі, вивід результату та оновлення поля', () => {
        // array, that contains sequence of moves, that lead to O's victory
        let winningMoveOrderO = [7, 0, 1, 4, 8, 6, 2, 3]

        // iterate over the sequence and place sign X and O in order
        for (let i = 0; i < winningMoveOrderO.length; i++) {
            cy.get('.cell').eq(winningMoveOrderO[i]).click()
            cy.get('.cell')
                .eq(winningMoveOrderO[i])
                // i % 2 gives repeating sequence of X and O in
                .should('have.text', signs[i % 2])

            cy.wait(500)
        }

        // check colorization
        winningCombo = [0, 3, 6]
        const winColor = 'rgb(0, 29, 61)'

        // Verify the color of the winning cells
        winningCombo.forEach(cellPosition => {
            cy.get('.cell').eq(cellPosition).should('have.css', 'background-color', winColor)
        })

        // Verify the result message
        cy.get('#result').should('have.text', 'O переміг!')
        cy.wait(500)

        // Verify the score
        cy.get('#scoreX').should('have.text', '_')
        cy.get('#scoreO').should('have.text', '1')
        cy.wait(500)

        // Click on the reset button
        cy.get('#resetGameBtn').click()
        cy.wait(500)

        // Verify the game board is reset
        cy.get('.cell').each(cell => {
            cy.wrap(cell).should('have.text', '')
        })
    })
})

describe('Симуляція гри. Нічия', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    // Play a complete game and verify the result
    it('Перевірка на натискання клітинок, вивід результату та оновлення поля', () => {
        // array, that contains sequence of moves, that lead to O's victory
        let moveOrderTie = [4, 0, 1, 7, 6, 2, 3, 5, 8]

        // iterate over the sequence and place sign X and O in order
        for (let i = 0; i < moveOrderTie.length; i++) {
            cy.get('.cell').eq(moveOrderTie[i]).click()
            cy.get('.cell')
                .eq(moveOrderTie[i])
                // i % 2 gives repeating sequence of X and O
                .should('have.text', signs[i % 2])

            cy.wait(500)
        }

        // Verify the result message
        cy.get('#result').should('be.visible').and('have.text', 'Нічия!')
        cy.wait(500)

        // Verify the score
        cy.get('#scoreX').should('have.text', '_')
        cy.get('#scoreO').should('have.text', '_')
        cy.wait(500)

        // Click on the reset button
        cy.get('#resetGameBtn').click()
        cy.wait(500)

        // Verify the game board is reset
        cy.get('.cell').each(cell => {
            cy.wrap(cell).should('have.text', '')
        })
    })
})
