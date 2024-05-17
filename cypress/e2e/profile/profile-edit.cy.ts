let profileId = '';
describe('Пользователь заходит на страницу', () => {
    beforeEach(() => {
        cy.visit('');
        cy.login().then((data) => {
            profileId = data.id;
            cy.visit('profile/' + data.id);
        });
    });
    afterEach(() => {
        cy.resetProfile(profileId);
    });
    it('Ипрофиль успешно подгружаеться', () => {
        cy.getByTestId('ProfileCard.firstname').should('have.value', 'test');
    });
    it('И редактирует её', () => {
        const newLastName = 'new';
        cy.updateProfile(newLastName);
        cy.getByTestId('ProfileCard.lastname').should(
            'have.value',
            newLastName,
        );
    });
});
