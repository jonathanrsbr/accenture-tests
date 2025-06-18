import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import PracticeFormPage from '../page_objects/PracticeFormPage'

When('I fill the practice form with fixture values and upload a txt file', () => {
  cy.fixture('user.json').then((user) => {
    PracticeFormPage.fillForm(user)
  })

  PracticeFormPage.uploadFile('upload_file.txt')
})

When('I submit the practice form', () => {
  PracticeFormPage.submitForm()
})

Then('a popup should be displayed and I close it', () => {
  cy.get('#example-modal-sizes-title-lg').should('be.visible')
  cy.get('#closeLargeModal').click()
})
