"use strict";
const { expect } = require('chai');
class Login {
    // Reusable selector getters that will help us to avoid selector duplicates
    get dashboardPageVarify() { return $('h1=Get access to your full membership'); }
    get settingsItom() { return $('span=Settings'); }
    get generalItom() { return $('span=General'); }
    get generalUserNameBox() { return $('[placeholder="Display name"]'); }
    get generalEmailNameBox() { return $('[placeholder="email@mail.com"]'); }
    get generalCityNameBox() { return $('[placeholder="City"]'); }
    get generalCityPopItom() { return $('span=Orlando, FL, USA'); }
    get generalSaveBatton() { return $('[class="Button_button__sL3tD Button_platformButton__3vmT4 undefined"]'); }
    get calendarItom() { return $('[src="/_next/image?url=%2Fassets%2Ficons%2FcalendarIcon.svg&w=64&q=75"]'); }
    get generalFillVarify() { return $('[class="Profile_contentContainer__3zKmc"]'); }
    get calendarSettings() { return $('[alt="calendar setting icon"]'); }
    get timeZone() { return $('[class="col align-self-center ps-1 pe-0 text-end"]'); }
    get timeSelect() { return $('[class="col-auto align-self-center pe-1 ps-0"]'); }







    // Helper method to avoid code duplication

    //function helper
    login(userName, email, city) {
        this.dashboardPageVarify.waitForDisplayed();
        this.settingsItom.click();
        this.generalItom.click();
        this.generalUserNameBox.setValue(userName);
        this.generalEmailNameBox.setValue(email);
        this.generalCityNameBox.setValue(city);
        this.generalCityPopItom.click();
        this.generalSaveBatton.click();
        this.calendarItom.click();
        this.generalSaveBatton.waitForClickable();
        this.calendarSettings.click();
        this.timeZone.click();
        this.timeSelect.click();
        this.timeSelect.waitForDisplayed();
    }
}
module.exports = new Login();