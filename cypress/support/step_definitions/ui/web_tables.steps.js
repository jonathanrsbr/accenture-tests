import { Given, When, Then, Before } from '@badeball/cypress-cucumber-preprocessor';
import WebTablesPage from '../../../support/page_objects/WebTablesPage';

console.log('hideAdIfExists:', typeof cy.hideAdIfExists);

Before(() => {
  cy.visit('/');
  cy.hideAdIfExists();
  cy.get('.card.mt-4.top-card').contains('Elements').click();
});


Given('I open the demoqa home page', () => {
  // já tratado no Before
});

Given('I go to the Web Tables page through Elements menu', () => {
  WebTablesPage.goToWebTables();
});

When('I click the {string} button to create a new record', (btn) => {
  WebTablesPage.clickAddButton();
});

When('I fill in the registration form with:', (dataTable) => {
  const data = dataTable.hashes()[0];
  WebTablesPage.fillRegistrationForm(data);
});

When('I submit the form', () => {
  WebTablesPage.submitForm();
});

Then('I should see {string} in the table', (value) => {
  WebTablesPage.verifyRecordInTable(value);
});

When('I click the edit icon for {string}', (email) => {
  WebTablesPage.editRecord(email);
});

When('I update the first name to {string}', (newFirstName) => {
  cy.get('#firstName').should('be.visible').clear().type(newFirstName);
});

When('I click the delete icon for {string}', (email) => {
  WebTablesPage.deleteRecord(email);
});

Then('I should not see {string} in the table', (value) => {
  cy.get('.rt-tbody').should('not.contain', value);
});

When('I create 12 new random records', () => {
  WebTablesPage.createMultipleRecords();
});

Then('I should see 12 new records in the table', () => {
  cy.get('.rt-tbody .rt-tr-group')
    .filter(':contains("@test.com")')
    .should('have.length', 12);
});

When('I delete all records containing {string}', (domain) => {
  WebTablesPage.deleteRecordsByEmailDomain(domain);
});

Then('I should not see any {string} entries in the table', (domain) => {
  cy.get('.rt-tbody').should('not.contain', domain);
});
