/* global Given, Then, When */

import LoginPage from '../pages/LoginPage';
const loginPage = new LoginPage;

Given("I open Argyle login page", () => {
    loginPage.openLoginPage();
})

When("I enter with email {string} and password {string} on Login Page", (email, password) => {
    loginPage.enterCredentials(email, password);
})

When("I click on the Sign in button on Login Page", () => {
    loginPage.clickOnSignIn();
})

Then("alert {string} should be displayed on Login Page", (alertMessage) => {
    loginPage.assertAlertMessage(alertMessage);
})