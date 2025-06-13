import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import WebTablesPage from '../page_objects/WebTablesPage';
import '../front_commands'; 

Given('I open the demoqa home page', () => {
  cy.visit('/');
});

Given('I hide the ad if it exists', () => {
  cy.hideAdIfExists();
});

Given('I go to the Web Tables page through Elements menu', () => {
  WebTablesPage.goToWebTables();
});

When('I click the {string} button to create a new record', () => {
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
  cy.get('#firstName').clear().type(newFirstName);
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
  cy.get('.rt-tr-group')
    .filter(':contains("@test.com")')
    .should('have.length', 12);
});

When('I delete all records containing {string}', (domain) => {
  WebTablesPage.deleteRecordsByEmailDomain(domain);
});

Then('I should not see any {string} entries in the table', (domain) => {
  cy.get('.rt-tbody').should('not.contain', domain);
});
