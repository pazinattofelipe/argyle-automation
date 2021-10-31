/// <reference types="Cypress" />

const URL = "https://console.argyle.com/"
const emailField = "#sign-in-email-input"
const passwordField = "#sign-in-password-input"
const signInButton = "div > button"
const loginAlertMessage = "#sign-in-email-input-helper"

class LoginPage {
    openLoginPage() {
        cy.visit(URL)
    }

    enterCredentials(email, password) {
        cy.get(emailField).type(email)
        cy.get(passwordField).type(password)
    }

    clickOnSignIn() {
        cy.get(signInButton).click()
    }

    assertAlertMessage(alertMessage) {
        cy.get(loginAlertMessage).should("contain", alertMessage)
        cy.percySnapshot();
    }
}

export default LoginPage;