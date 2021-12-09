
const dashboard = require('../../page_objects/dashboard_page/dashboard-page');
const loginUrl = 'https://beta.gigturbo.com';
const loginPage = require('../../page_objects/login/login-page');
const { expect } = require('chai');


describe('Login', () => {
    // This hook runs after each test
    afterEach(() => {
        // Deleting cookies after each session will allow us to have new session before next test starts
        browser.deleteCookies();
    });
    it('User should be able to add and save basic information (name,  email, city, zip)', () => {
        const userName = 'abyss123';
        const email = 'okachev1.gym@gmail.com'
        const city = 'Orlando';
        // Navigate to login page
        browser.url(loginUrl);
       // Type in phone number and click on "=>" button
        // Type in code
        loginPage.loginDashbord();
        //dashboard page is displayed
        dashboard.dashboardPageVarify.waitForDisplayed();
        //Click on section 'Settings' in menu items
        dashboard.settingsItom.click();
        //Click on section 'General'
        dashboard.generalItom.click();
        //Fill in the following placeholders: name, phone number, city, zip
        dashboard.generalUserNameBox.setValue(userName);
        dashboard.generalEmailNameBox.setValue(email);
        dashboard.generalCityNameBox.setValue(city);
        //clic on Popup City
        dashboard.generalCityPopItom.click();
        //Click on the button 'Save Changes'
        dashboard.generalSaveBatton.click();
        //Click on Calendar Menu itom
        dashboard.calendarItom.click();
        //Click on General menu itom
        dashboard.generalItom.click();
        //Could be save chenges and Save batton could be clickable
        dashboard.generalSaveBatton.waitForClickable();

    })

    it.only('Should be able to update timezone' , () => {
         // Navigate to login page
    browser.url(loginUrl);
   // Type in phone number and click on "=>" button
    // Type in code
    loginPage.loginDashbord();
        
       
        dashboard.settingsItom.click();
        //Click on Calendar item
        dashboard.calendarSettings.click();
        //Click on primary timezone
        dashboard.timeZone.click();
        //Select different timezone
        dashboard.timeSelect.click();
        //Click on general item
        dashboard.generalItom.click();
        //Click in Calendar item 
        dashboard.calendarSettings.click();
        //Varify time zone save
        dashboard.timeSelect.waitForDisplayed();



    });
});