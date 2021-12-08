const HomePage = require('../../page_objects/home_page/home-page');
const loginUrl = 'https://beta.gigturbo.com';


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
        HomePage.FAQ.click()
        //FAQ in page should be displayed
        HomePage.FAQ.waitForDisplayed();
    })

    it('User should be able to Navigate to Community Guidelines section', () => {
        // Navigate to login page
        browser.url(loginUrl);
        // Click on the link FAQ on top of the page
        HomePage.FAQ.click()
        //Click Community Guidelines section 
        //Community Guidelines not highlighted after click!!!
        HomePage.CommunityGuidelines.click()
        //Community Guidelines section is displayed
        HomePage.CommunityGuidelines.waitForDisplayed();
    })

    it('User should be able to expand "Who Gigturbo is for?" in Gigturbo basic', () => {
        // Navigate to login page
        browser.url(loginUrl);
        // Click on the link FAQ on top of the page
        HomePage.FAQ.click()
        //Click Community Guidelines section 
        //Community Guidelines not highlighted after click!!!
        HomePage.GigturboBasic.click()
        //Community Guidelines section is displayed
        HomePage.Whatisgigturbo.click()
        //List has to expand
        HomePage.Whatisgigturbo1par.waitForDisplayed();
        HomePage.Whatisgigturbo2par.waitForDisplayed();
    })
})