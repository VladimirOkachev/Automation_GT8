const loginPage = require('../../page_objects/login/login-page');
const loginUrl = 'https://beta.gigturbo.com';
const { expect } = require('chai');

describe('Login', () => {
    // This hook runs after each test
    afterEach(() => {
        // Deleting cookies after each session will allow us to have new session before next test starts
        browser.deleteCookies();
    });
    it('User should be able to Log In using phone number', () => {
        // Navigate to login page
        browser.url(loginUrl);
        // Type in phone number and click on "=>" button
        // Type in code
        loginPage.loginDashbord();
        // Wait for daschboard page displaid
        loginPage.dashboardPageVarify.waitForDisplayed();
    })

    it('User should not be able to log in without phone number', () => {
        // Navigate to login page
        browser.url(loginUrl);
        //Click “Log In” button
        loginPage.buttonLogIn.click()
        //Click on "=>" button (arrow to the right) without typing phone number
        loginPage.buttonArrowLogin.click()
        // Wait for Phone number textbox is highlighted in red
        loginPage.logintextboxHighlightedError.waitForDisplayed();
    })

    it('User should be able to log out', () => {
        // Navigate to login page
        browser.url(loginUrl);
       // Type in phone number and click on "=>" button
        // Type in code
        loginPage.loginDashbord();
        //Click on Profile icon on the top right
        loginPage.profileIcon.click()
        //Click on Logout batton
        loginPage.logoutButton.click()
        //Wait for home page displaid
        loginPage.homePageVarivy.waitForDisplayed();
    })
});