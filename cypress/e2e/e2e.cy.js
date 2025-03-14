import loginPage from '../pages/login_page';
import productsPage from '../pages/products_page';
import cartPage from '../pages/cart_page';
import checkoutPage from '../pages/checkout_page';
import overviewPage from '../pages/overview_page';
import confirmationPage from '../pages/confirmation_page';

describe('E2E Tests', () => {

    const username = 'standard_user';
    const password = 'secret_sauce';
    const firstName = 'John';
    const lastName = 'Doe';
    const postalCode = '45678';

    it('should order a single product', () => {
        loginPage.open();
        loginPage.login(username, password);
        productsPage.addToCart();
        productsPage.goToCart();
        cartPage.checkout();
        checkoutPage.fillDetails(firstName, lastName, postalCode);
        overviewPage.finish();
        confirmationPage.verifyOrderCompletion();
    });

    it('should order two products', () => {
        loginPage.open();
        loginPage.login(username, password);
        productsPage.addTwoToCart();
        productsPage.goToCart();
        cartPage.checkout();
        checkoutPage.fillDetails(firstName, lastName, postalCode);
        overviewPage.finish();
        confirmationPage.verifyOrderCompletion();
    });
});