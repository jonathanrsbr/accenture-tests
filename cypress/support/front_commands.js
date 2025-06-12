Cypress.Commands.add('hideAdIfExists', () => {
  cy.get('body').then($body => {
    if ($body.find('#RightSide_Advertisement').length > 0) {
      cy.get('#RightSide_Advertisement').invoke('hide');
    }
  });
});

console.log('✅ commands.js loaded');
