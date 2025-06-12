class WebTablesPage {
goToWebTables() {
  cy.get('.card.mt-4.top-card')
    .contains('Elements')
    .should('be.visible')
    .click();

  cy.contains('Web Tables').should('be.visible').click();
}

  clickAddButton() {
    cy.get('#addNewRecordButton').click();
  }

  fillRegistrationForm({ firstName, lastName, email, age, salary, department }) {
    cy.get('#firstName').should('be.visible').clear().type(firstName);
    cy.get('#lastName').should('be.visible').clear().type(lastName);
    cy.get('#userEmail').should('be.visible').clear().type(email);
    cy.get('#age').should('be.visible').clear().type(age);
    cy.get('#salary').should('be.visible').clear().type(salary);
    cy.get('#department').should('be.visible').clear().type(department);
  }

  submitForm() {
    cy.get('#submit').click();
  }

  verifyRecordInTable(value) {
    cy.get('.rt-tbody').should('contain', value);
  }

  editRecord(email) {
    // Localiza a linha com o e-mail e clica no botão de edição correspondente
    cy.get('.rt-tr-group').contains(email).parents('.rt-tr-group')
      .find('[id^="edit-record-"]').click({ force: true });
  }

  deleteRecord(email) {
    // Localiza a linha com o e-mail e clica no botão de deletar correspondente
    cy.get('.rt-tr-group').contains(email).parents('.rt-tr-group')
      .find('[id^="delete-record-"]').click({ force: true });
  }

  createMultipleRecords(count = 12) {
    for (let i = 1; i <= count; i++) {
      this.clickAddButton();
      this.fillRegistrationForm({
        firstName: `User${i}`,
        lastName: `Test`,
        email: `user${i}@test.com`,
        age: `${20 + i}`,
        salary: `${3000 + i * 100}`,
        department: 'QA'
      });
      this.submitForm();
    }
  }

  deleteRecordsByEmailDomain(domain = '@test.com') {
    cy.get('.rt-tr-group').each(($row) => {
      if ($row.text().includes(domain)) {
        cy.wrap($row).find('[title="Delete"]').click({ force: true });
      }
    });
  }
}

export default new WebTablesPage();
