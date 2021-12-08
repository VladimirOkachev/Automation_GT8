const LoginPage = require('../../page_objects/login/login-page');
const loginUrl = 'https://beta.gigturbo.com';


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
        LoginPage.loginDashbord();
        // Wait for daschboard page displaid
        LoginPage.DashboardPageVarify.waitForDisplayed();
    })

    it('User should not be able to log in without phone number', () => {
        // Navigate to login page
        browser.url(loginUrl);
        //Click “Log In” button
        LoginPage.buttonLogIn.click()
        //Click on "=>" button (arrow to the right) without typing phone number
        LoginPage.buttonArrowLogin.click()
        // Wait for Phone number textbox is highlighted in red
        LoginPage.LogintextboxHighlightedError.waitForDisplayed();
    })

    it('User should be able to log out', () => {
        // Navigate to login page
        browser.url(loginUrl);
       // Type in phone number and click on "=>" button
        // Type in code
        LoginPage.loginDashbord();
        //Click on Profile icon on the top right
        LoginPage.ProfileIcon.click()
        //Click on Logout batton
        LoginPage.LogoutButton.click()
        //Wait for home page displaid
        LoginPage.HomePageVarivy.waitForDisplayed();
    })
});