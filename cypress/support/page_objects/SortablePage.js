import 'cypress-real-events'
import '@4tw/cypress-drag-drop'

class SortablePage {
  reorderListAscending() {
    const items = ['One', 'Two', 'Three', 'Four', 'Five', 'Six']

    items
      .slice()
      .reverse()
      .forEach((item, index) => {
        cy.contains('.list-group-item', item).drag('.list-group-item:first', { force: true })
      })
  }

  verifyAscendingOrder() {
    const expectedOrder = ['One', 'Two', 'Three', 'Four', 'Five', 'Six']
    cy.get('.vertical-list-container .list-group-item').each(($el, index) => {
      cy.wrap($el).should('contain.text', expectedOrder[index])
    })
  }
}

export default new SortablePage()
