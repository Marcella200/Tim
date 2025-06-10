describe('Authentication Test', () =>
  beforeEach(() => {
    cy.visit('https://lms.teknologidigital.co.id/login');
  });

 it('TC-LOGIN-01: Admin berhasil login dengan email dan kata sandi yang benar', () => {
    cy.get('input[name="email"]').type('hesgiag@gmail.com');
    cy.get('input[name="password"]').type('monokuma');
    cy.get('button[type="submit"]').click();
    cy.contains('Dashboard').should('be.visible');
    cy.contains(/hesgiag@gmail\.com/i).should('be.visible');
  });
  