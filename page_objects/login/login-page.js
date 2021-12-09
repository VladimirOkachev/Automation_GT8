"use strict";
//const { expect } = require('chai');
class Login {
    // Reusable selector getters that will help us to avoid selector duplicates
    get logintextboxHighlightedError() { return $('[class="Input_contentContainer__2qM_i d-flex align-items-center Input_error__2x-lH"]'); }
    get telBox() { return $('[type="tel"]'); }
    get telNextBat() { return $('[class="Button_button__sL3tD Button_signupButton__pGlka undefined"]'); }
    get codeBox() { return $('[class="d-flex justify-content-center position-relative"] input'); }
    get buttonLogIn() { return $('[href="/login"]'); }
    get buttonArrowLogin() { return $('[class="Button_button__sL3tD Button_signupButton__pGlka undefined"]'); }
    // get DashboardPageVarify() { return $('h1=Get access to your full membership'); }
    get profileIcon() { return $('[class="TopMenu_noImage__1RMpC"]'); }
    get logoutButton() { return $('[class="far fa-sign-out-alt"]'); }
    get homePageVarivy() { return $('[alt="graph"]'); }





    // Helper method to avoid code duplication

    //login helper
    loginDashbord(phone = '13053048338', pin = '000000') {
        this.buttonLogIn.click();
        this.telBox.waitForClickable();
        this.telBox.click();
        this.telBox.setValue(phone);
        this.telNextBat.click();
        this.codeBox.setValue(pin);
    }

   //function helper
       login() {
        this.textboxHighlightedError.waitForDisplayed();
        this.buttonArrowLogin.click();
        this.profileIcon.click();
        this.logoutButton.click()
        this.homePageVarivy.waitForDisplayed();
    }
}
module.exports = new Login();