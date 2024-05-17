describe('Пользователь заходит на страницу сщ списком статей', () => {
    beforeEach(() => {
        cy.login().then(data => {
            cy.visit('/article')
        })
    })
    it('статьй успешно подгружаються', () => {
        cy.getByTestId('ArticleList').should('exist')
        cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3)
    })
})