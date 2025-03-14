class ConfirmationPage {
    verifyOrderCompletion() {
        cy.get('[data-test="complete-header"]').should('contain.text', 'Thank you for your order!');
    }
}

export default new ConfirmationPage();