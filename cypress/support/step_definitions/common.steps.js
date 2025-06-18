import { Given } from '@badeball/cypress-cucumber-preprocessor'

Given('I open the demoqa home page', () => {
  cy.visit('/')
  cy.hideAdIfExists()
})
