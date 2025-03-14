class ProductsPage {
    addToCart() {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    }

    addTwoToCart() {
        this.addToCart();
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    }

    goToCart() {
        cy.get('[data-test="shopping-cart-link"]').click();
    }
}

export default new ProductsPage();