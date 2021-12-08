"use strict";
//const { expect } = require('chai');
class Login {
    // Reusable selector getters that will help us to avoid selector duplicates
    get FAQ() { return $('[href="/faq"]'); }
    get CommunityGuidelines() { return $('[class="Button_button__sL3tD undefined "]'); }
    get GigturboBasic() { return $('[class="Button_button__sL3tD undefined "]'); }
    get Whatisgigturbo() { return $('h2=What is gigturbo?'); }
    get Whatisgigturbo1par() { return $('[style="margin-top: 1rem;"]'); }
    get Whatisgigturbo2par() { return $('[style="margin-top: 1.5rem;"]'); }







    // Helper method to avoid code duplication
    login() {
        this.FAQ.click();
        this.FAQ.waitForDisplayed();
        this.CommunityGuidelines.click();
        this.CommunityGuidelines.waitForDisplayed();
        this.GigturboBasic.click();
        this.Whatisgigturbo.click();
        this.Whatisgigturbo1par.waitForDisplayed()
        this.Whatisgigturbo2par.waitForDisplayed()

    }
}
module.exports = new Login();