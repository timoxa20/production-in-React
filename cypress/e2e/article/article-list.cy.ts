describe('Пользователь заходит на страницу сщ списком статей', () => {
    beforeEach(() => {
        cy.login().then(() => {
            cy.visit('/article')
        })
    })
    it('статьй успешно подгружаються', () => {
        cy.getByTestId('ArticleList').should('exist')
        cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3)
    })

    it('на стабах', () => {
        cy.intercept('GET', '**/article?*', {fixture: 'articles.json'})
        cy.getByTestId('ArticleList').should('exist')
        cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3)
    })
})