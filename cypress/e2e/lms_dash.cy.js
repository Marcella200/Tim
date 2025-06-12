describe('Halaman Dashboard', () => {
  beforeEach(() => {
    cy.visit('https://lms.teknologidigital.co.id/login')
    cy.get('input[placeholder="Alamat Email"]').type('hesgiag@gmail.com');
    cy.get('input[placeholder="Kata Sandi"]').type('monokuma');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/panel');
  });

   it('TC-DSH-01: Membuka halaman Dashboard', () => {
    cy.contains('Dashboard').should('be.visible');
  });

   it('TC-DSH-02: Dropdown pada halaman Dashboard', () => {
    cy.get('span.overflow-hidden.truncate.max-w-xs')
    .should('contain', 'hesgiag@gmail.com')
    .click();
    cy.contains('Sign out').should('be.visible');
});

   it('TC-DSH-03: Mengakses halaman Dashboard menggunakan URL', () => {
    cy.visit('https://lms.teknologidigital.co.id/panel'); 
    cy.url().should('include', '/panel'); 
    cy.contains('Dashboard').should('be.visible');
  });
  });