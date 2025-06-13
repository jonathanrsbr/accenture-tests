import 'front_commands';
import '@badeball/cypress-cucumber-preprocessor/commands';
import '@4tw/cypress-drag-drop';
import 'cypress-plugin-api'

Cypress.on('uncaught:exception', (err, runnable) => {
  if (err.message.includes('Script error') || err.message.includes('cross-origin')) {
    return false;
  }
  return true;
});
