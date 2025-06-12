import './commands'; 
import '@badeball/cypress-cucumber-preprocessor/commands';

Cypress.on('uncaught:exception', (err, runnable) => {
  if (err.message.includes('Script error') || err.message.includes('cross-origin')) {
    return false;
  }
  return true;
});
