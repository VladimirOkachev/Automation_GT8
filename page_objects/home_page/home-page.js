"use strict";
//const { expect } = require('chai');
class Login {
    // Reusable selector getters that will help us to avoid selector duplicates
    get fAQ() { return $('[href="/faq"]'); }
    get communityGuidelines() { return $('[class="Button_button__sL3tD undefined "]'); }
    get gigturboBasic() { return $('[class="Button_button__sL3tD undefined "]'); }
    get whatisgigturbo() { return $('h2=What is gigturbo?'); }
    get whatisgigturbo1par() { return $('[style="margin-top: 1rem;"]'); }
    get whatisgigturbo2par() { return $('[style="margin-top: 1.5rem;"]'); }







    // Helper method to avoid code duplication

    //function helper
    login() {
        this.fAQ.click();
        this.fAQ.waitForDisplayed();
        this.communityGuidelines.click();
        this.communityGuidelines.waitForDisplayed();
        this.gigturboBasic.click();
        this.whatisgigturbo.click();
        this.whatisgigturbo1par.waitForDisplayed()
        this.whatisgigturbo2par.waitForDisplayed()

    }
}
module.exports = new Login();