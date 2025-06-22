describe('Menu Tugas', () => {
  beforeEach(() => {
    cy.visit('https://lms.teknologidigital.co.id/login');
    cy.get('input[name="email"]').type('myeni7199@gmail.com');
    cy.get('input[name="password"]').type('password');
    cy.get('button[type="submit"]').click();
  });

  it('#TC-TGS-01 - Menampilkan halaman Daftar Tugas kosong', () => {
    cy.contains('Kelas').click();
    cy.contains('Tugas').click();
    cy.contains('Data belum tersedia.').should('be.visible');
    cy.get('table').should('exist');
    cy.url().should('include', '/assigments');
  });

  it('#TC-TGS-02 - Memastikan klik menu Tugas tidak memicu submenu lain', () => {
    cy.contains('Kelas').click();
    cy.contains('Tugas').click();
    cy.url().should('include', '/assigments');
    cy.get('table').should('not.contain', 'Semua Kelas');
  });

  it('TC-TGS-03: Logout dari halaman Tugas', () => {
    cy.contains('Kelas').click();
    cy.contains('Tugas').click();

    cy.url().should('include', '/panel/teacher-class/assigments');
    cy.contains('Tugas').should('be.visible');
    cy.contains('myeni7199@gmail.com').click();
    cy.contains('Sign out').click();
    cy.url().should('include', 'lms.teknologidigital.co.id');
 });
});

