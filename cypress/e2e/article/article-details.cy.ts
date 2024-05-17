
let currentArticleId = '';
describe('Пользователь заходит на страницу статьй', () => {
    beforeEach(() => {
        cy.login()
        cy.createArticle().then(article => {
            currentArticleId = article.id;
            cy.visit(`article/${article.id}`)
        });
    });
    afterEach(() => {
        cy.removeArticle(currentArticleId);
        cy.log(JSON.stringify(currentArticleId))
    })

    it.skip('И видит содержимое статьй', () => {
        cy.getByTestId('ArticleDetails.Info').should('exist')
    })
    it.skip('И видит список рекомендаций', () => {
        cy.getByTestId('ArticleRecommendationList').should('exist')
    })
    it.skip('И оставляет коментарий', () => {
        cy.getByTestId('ArticleDetails.Info')
        cy.getByTestId('AddCommentForm').scrollIntoView()
        cy.addComment('text')
        cy.getByTestId('CommentCard.Content').should('have.length', 1)
    })
    it('И ставит оценку', () => {
        cy.intercept('GET', '**/article/*', {fixture: 'article-details.json'})
        cy.getByTestId('ArticleDetails.Info')
        cy.getByTestId('RatingCard').scrollIntoView()
        cy.setRate(4, 'feedback')
        cy.get('[data-selected=true]').should('have.length', 4)
    })
})