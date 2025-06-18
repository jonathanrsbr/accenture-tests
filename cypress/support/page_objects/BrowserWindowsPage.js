class BrowserWindowsPage {
  goToBrowserWindows() {
    cy.contains('.card.mt-4.top-card', 'Alerts, Frame & Windows').click()
    cy.contains('Browser Windows').click()
  }

  clickNewWindowButtonAndVisitSample() {
    cy.get('#windowButton').should('be.visible')
    cy.visit('/sample')
  }

  validateSamplePageMessage() {
    cy.get('#sampleHeading').should('have.text', 'This is a sample page')
  }
}

export default new BrowserWindowsPage()
