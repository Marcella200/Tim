describe('Authentication Test', () => {
  beforeEach(() => {
    cy.visit('https://lms.teknologidigital.co.id/login')
  });

   it('TC-DSH-01: Membuka halaman Dashboard', () => {
    cy.get('input[type="Alamat Email"]').type('hesgiag@gmail.com');
    cy.get('input[type="Kata Sandi"]').type('monokuma');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/panel');
    cy.contains('Dashboard').should('be.visible');
  });

   it('TC-DSH-02: Dropdown pada halaman Dashboard', () => {
    cy.get('button.dropdownTrigger').should('be.visible');
    cy.get('button.dropdownTrigger').click();
    cy.get('.dropdownMenu').should('be.visible');
    cy.contains('Sign out').should('be.visible');
  });

   it('TC-DSH-03: Mengakses halaman Dashboard menggunakan URL', () => {
  });
});