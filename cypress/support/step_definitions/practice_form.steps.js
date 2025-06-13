import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import PracticeFormPage from '../../support/page_objects/PracticeFormPage';

const practiceForm = new PracticeFormPage();

Given('I open the demoqa home page', () => {
  cy.visit('/');
});

Given('I go to the Practice Form page through Forms menu', () => {
  cy.contains('h5', 'Forms').click();
  cy.contains('span.text', 'Practice Form').click();
});

When('I fill the practice form with fixture values and upload a txt file', () => {
  cy.fixture('user.json').then(user => {
    practiceForm.fillForm(user);
  });

  practiceForm.uploadFile('upload_file.txt');
});

When('I submit the practice form', () => {
  practiceForm.submitForm();
});

Then('a popup should be displayed and I close it', () => {
  cy.get('#example-modal-sizes-title-lg').should('be.visible');
  cy.get('#closeLargeModal').click();
});
