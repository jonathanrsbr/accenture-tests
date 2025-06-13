import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import SortablePage from '../page_objects/SortablePage';

Given('I open the demoqa home page', () => {
  cy.visit('/');
  cy.get('#RightSide_Advertisement', { timeout: 10000 })
    .should('exist')
    .should('be.visible')
    .invoke('hide');
});

Given('I go to the Sortable page through Interactions menu', () => {
  cy.contains('Interactions').click();
  cy.contains('Sortable').click();
});

When('I rearrange the list items in ascending order', () => {
  SortablePage.reorderListAscending();
});

Then('the list should reflect the new order', () => {
  SortablePage.verifyAscendingOrder();
});
