class PracticeFormPage {
  visit() {
    cy.visit('/');
  }

  clickFormsMenu() {
    cy.contains('h5', 'Forms').click();
  }

  clickPracticeForm() {
    cy.contains('span.text', 'Practice Form').click();
  }

  fillFirstName(name) {
    cy.get('#firstName').type(name);
  }

  fillLastName(name) {
    cy.get('#lastName').type(name);
  }

  fillEmail(email) {
    cy.get('#userEmail').type(email);
  }

  selectGender(gender) {
    cy.get(`input[name="gender"][value="${gender}"]`).check({ force: true });
  }

  fillMobile(number) {
    cy.get('#userNumber').type(number);
  }

  selectDateOfBirth(year, month, day) {
    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__year-select').select(year);
    cy.get('.react-datepicker__month-select').select(month);
    cy.get(`.react-datepicker__day--0${day}`).not('.react-datepicker__day--outside-month').click();
  }

  typeSubject(subject) {
    cy.get('#subjectsInput').type(`${subject}{enter}`);
  }

  checkHobby(hobby) {
    cy.contains('label', hobby).click();
  }

  uploadFile(fileName) {
    cy.get('#uploadPicture').attachFile(fileName);
  }

  fillAddress(text) {
    cy.get('#currentAddress').type(text);
  }

  selectState(state) {
    cy.get('#state').click().contains(state).click();
  }

  selectCity(city) {
    cy.get('#city').click().contains(city).click();
  }

  submitForm() {
    cy.get('#submit').click({ force: true });
  }

  validatePopup() {
    cy.get('#example-modal-sizes-title-lg').should('contain', 'Thanks for submitting the form');
  }

  closePopup() {
    cy.get('#closeLargeModal').click();
  }
}

export default new PracticeFormPage();
