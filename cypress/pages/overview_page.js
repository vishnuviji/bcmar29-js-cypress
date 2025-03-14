class OverviewPage {
    finish() {
        cy.get('[data-test="finish"]').click();
    }
}

export default new OverviewPage();