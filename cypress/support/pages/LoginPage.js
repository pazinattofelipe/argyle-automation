/// <reference types="Cypress" />

const URL = "https://console.argyle.com/"
const emailField = "#sign-in-email"
const passwordField = "#sign-in-passowrd"
const signInButton = "div > button"
const loginAlertMessage = "#sign-in-email-helper"

class LoginPage {
    openLoginPage(){
        cy.visit(URL)
    }

    enterCredentials(email, password){
        cy.get(emailField).type(email)
        cy.get(passwordField).type(password)
    }

    clickOnSignIn(){
        cy.get(signInButton).click()
    }

    assertAlertMessage(alertMessage){
        cy.get(loginAlertMessage).should("contain", alertMessage)
    }
}

export default LoginPage;