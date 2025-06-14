// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// login dengan password lama
Cypress.Commands.add('login', () => {
      cy.clearCookies();
  cy.clearLocalStorage();
  cy.visit('https://lms.teknologidigital.co.id/login');
  cy.get('input[placeholder="Alamat Email"]').type('hesgiag@gmail.com');
  cy.get('input[placeholder="Kata Sandi"]').type('monokuma');
  cy.get('button[type="submit"]').click();
  cy.url().should('include', '/panel');
});

// login dengan password baru
Cypress.Commands.add('loginBaru', () => {
      cy.clearCookies();
  cy.clearLocalStorage();
  cy.visit('https://lms.teknologidigital.co.id/login');
  cy.get('input[placeholder="Alamat Email"]').type('hesgiag@gmail.com');
  cy.get('input[placeholder="Kata Sandi"]').type('pass12345');
  cy.get('button[type="submit"]').click();
  cy.url().should('include', '/panel');
});