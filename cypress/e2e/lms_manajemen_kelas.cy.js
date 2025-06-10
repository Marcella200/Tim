describe('Manajemen Kelas Test', () => {
  beforeEach(() => {
    cy.visit('https://lms.teknologidigital.co.id/login');
    cy.get('input[type="email"]').type('hesgiag@gmail.com');
    cy.get('input[type="password"]').type('monokuma');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/panel');
  });

  it('Buka halaman manajemen kelas dan cek elemen', () => {
  cy.contains('Manajemen Kelas').click();

    cy.contains('Reguler').should('exist');

    cy.contains('+ Tipe Kelas').should('be.visible');
    cy.get('input[placeholder="Cari nama..."]').should('be.visible');
    cy.get('button svg').should('exist'); 
    cy.get('a svg[data-icon="akar-icons:eye"]').should('exist');

    
    cy.get('button.dropdownTrigger').should('be.visible');

    cy.get('button.dropdownTrigger').click();

    cy.get('.dropdownMenu').should('be.visible');

    cy.contains('Sign out').should('be.visible');
  });
});