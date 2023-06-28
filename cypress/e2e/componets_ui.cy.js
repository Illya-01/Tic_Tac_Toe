describe('Наявні всі елементи програми', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Існує назва', () => {
        cy.get('h1').contains('Хрестики-Нулики')
        cy.wait(300)
    })

    it(`Існує кнопка "Грати з комп'ютером"`, () => {
        cy.get('button#mode-computer').contains("Грати з комп'ютером").focus()
        cy.wait(300)
    })

    it('Існує кнопка "Грати з другом"', () => {
        cy.get('button#mode-man').contains('Грати з другом').focus()
        cy.wait(300)
    })

    it('Існує ігрове поле з 9-ма комірками', () => {
        cy.get('.gameboard').children().should('have.length', 9)
        cy.wait(300)
    })

    it('Усі комірки порожні', () => {
        cy.get('.cell')
            .should('have.length', 9)
            .each(cell => {
                cy.wrap(cell).should('have.text', '')
            })
    })

    it('Існує напис для виводу результату', () => {
        cy.get('#result').should('be.hidden')
        cy.wait(300)
    })

    it('Існує напис для воводу рахунку X', () => {
        cy.get('#scoreX').should('have.text', '_')
        cy.wait(300)
    })

    it('Існує напис для воводу рахунку O', () => {
        cy.get('#scoreO').should('have.text', '_')
        cy.wait(300)
    })

    it('Існує конпка "Очистити"', () => {
        cy.get('#resetGameBtn').contains('Очистити').focus()
        cy.wait(300)
    })
})
