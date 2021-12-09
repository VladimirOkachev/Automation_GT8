const homePage = require('../../page_objects/home_page/home-page');
const loginUrl = 'https://beta.gigturbo.com';
const { expect } = require('chai');


describe('Login', () => {
    // This hook runs after each test
    afterEach(() => {
        // Deleting cookies after each session will allow us to have new session before next test starts
        browser.deleteCookies();

    });
    it('User should take to FAQ page upon click on FAQ menu link in the header menu', () => {
        // Navigate to login page
        browser.url(loginUrl);
        // Click on the link FAQ on top of the page
        homePage.fAQ.click()
        //FAQ in page should be displayed
        homePage.fAQ.waitForDisplayed();
    })

    it('User should be able to Navigate to Community Guidelines section', () => {
        // Navigate to login page
        browser.url(loginUrl);
        // Click on the link FAQ on top of the page
        homePage.fAQ.click()
        //Click Community Guidelines section 
        //Community Guidelines not highlighted after click!!!
        homePage.communityGuidelines.click()
        //Community Guidelines section is displayed
        homePage.communityGuidelines.waitForDisplayed();
    })

    it('User should be able to expand "Who Gigturbo is for?" in Gigturbo basic', () => {
        // Navigate to login page
        browser.url(loginUrl);
        // Click on the link FAQ on top of the page
        homePage.fAQ.click()
        //Click Community Guidelines section 
        //Community Guidelines not highlighted after click!!!
        homePage.gigturboBasic.click()
        //Community Guidelines section is displayed
        homePage.whatisgigturbo.click()
        //List has to expand
        homePage.whatisgigturbo1par.waitForDisplayed();
        homePage.whatisgigturbo2par.waitForDisplayed();
    })
})