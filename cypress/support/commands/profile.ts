
export const updateProfile = ( lastname: string) => {
    cy.getByTestId('EditableProfileCardHeader.EditButton').click()
    cy.getByTestId('ProfileCard.lastname').clear().type(lastname)
    cy.getByTestId('EditableProfileCardHeader.SaveButton').click()
}

export const resetProfile = (profileId: string) => {
    return cy.request({
        method: 'PUT',
        url: `http://localhost:8000/profile/${profileId}`,
        headers: {Authorization: 'fasdg'},
        body: {
            id: "4",
            first: "test",
            lastname: "user",
            age: 27,
            currency: "RUB",
            country: "Russia",
            city: "Moscow",
            username: "testuser",
            avatar: "https://ae04.alicdn.com/kf/S644f58fa841b4caa9b54bdcb2f2b4722N.jpg"
        },
    })
}

declare global {
    namespace Cypress {
        interface Chainable {
            updateProfile( lastname: string): Chainable<void>
            resetProfile(profileId: string): Chainable<void>
        }
    }
}