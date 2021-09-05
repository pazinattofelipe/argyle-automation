Feature: Login

Scenario: Invalid login
    Given I open Argyle login page
    When I enter with email 'test@test.com' and password 'Password123!@#' on Login Page
    And I click on the Sign in button on Login Page
    Then alert 'Invalid email and password combination' should be displayed on Login Page