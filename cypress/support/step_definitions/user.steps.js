import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

let userPayload;
let token;
let userId;
let books;

Given('I have a valid user payload', () => {
  userPayload = {
    userName: `jon_${Date.now()}`,
    password: 'Test@1234'
  };
});

When('I send a POST request to create the user', () => {
  cy.request('POST', '/Account/v1/User', userPayload).then(res => {
    expect(res.status).to.eq(201);
    userId = res.body.userID;
  });
});

When('I generate a token for the user', () => {
  cy.request('POST', '/Account/v1/GenerateToken', userPayload).then(res => {
    expect(res.status).to.eq(200);
    token = res.body.token;
  });
});

When('I authorize the user', () => {
  cy.request('POST', '/Account/v1/Authorized', userPayload).then(res => {
    expect(res.status).to.eq(200);
  });
});

When('I get the list of available books', () => {
  cy.request('GET', '/BookStore/v1/Books').then(res => {
    expect(res.status).to.eq(200);
    books = res.body.books.slice(0, 2);
  });
});

When('I rent two books from the list', () => {
  cy.request({
    method: 'POST',
    url: '/BookStore/v1/Books',
    headers: { Authorization: `Bearer ${token}` },
    body: {
      userId: userId,
      collectionOfIsbns: books.map(book => ({ isbn: book.isbn }))
    }
  }).then(res => {
    expect(res.status).to.eq(201);
  });
});

Then('I should see the rented books in the user details', () => {
  cy.request({
    method: 'GET',
    url: `/Account/v1/User/${userId}`,
    headers: { Authorization: `Bearer ${token}` }
  }).then(res => {
    expect(res.status).to.eq(200);
    const isbns = res.body.books.map(book => book.isbn);
    expect(isbns).to.include.members(books.map(b => b.isbn));
  });
});
