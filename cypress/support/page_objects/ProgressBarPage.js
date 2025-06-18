import 'cypress-wait-until'

class ProgressBarPage {
  visit() {
    cy.visit('/')
  }

  goToProgressBar() {
    cy.contains('.card-body h5', 'Widgets').click()
    cy.contains('li span.text', 'Progress Bar').click()
  }

  clickStart() {
    cy.get('#startStopButton').click()
  }

  stopBefore25Percent() {
    cy.waitUntil(
      () =>
        cy
          .get('#progressBar')
          .invoke('text')
          .then((text) => {
            const percent = parseInt(text.replace('%', ''))
            if (percent < 25) {
              cy.get('#startStopButton').click()
              return true
            }
            return false
          }),
      {
        errorMsg: 'Progress bar passou de 25% antes de conseguir parar',
        timeout: 5000,
        interval: 100,
      }
    )
  }

  assertProgressBelow25() {
    cy.get('#progressBar')
      .invoke('text')
      .then((text) => {
        const percent = parseInt(text.replace('%', ''))
        expect(percent).to.be.lte(25)
      })
  }

  waitForCompleteAndReset() {
    cy.waitUntil(
      () =>
        cy
          .get('#progressBar')
          .invoke('text')
          .then((text) => text.trim() === '100%'),
      {
        errorMsg: 'Barra não chegou a 100%',
        timeout: 10000,
        interval: 100,
      }
    )

    cy.get('#resetButton').click()
  }
}

export default new ProgressBarPage()
