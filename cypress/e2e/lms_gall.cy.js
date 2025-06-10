describe('LMS Login Test', () => {
  it('Login berhasil dengan email dan password valid', () => {
    cy.visit('https://lms.teknologidigital.co.id/login');

    cy.get('input[type="email"]').type('hesgiag@gmail.com');

    cy.get('input[type="password"]').type('monokuma');

    cy.get('button[type="submit"]').click();

    cy.url().should('include', '/panel');
    cy.contains('Dashboard').should('be.visible');
  });
});