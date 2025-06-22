describe('Dashboard Guru - Positive Test Cases', () => {
  const email = 'myeni7199@gmail.com';
  const password = 'password';

  beforeEach(() => {
    cy.visit('https://lms.teknologidigital.co.id/login');
    cy.get('input[name="email"]').type(email);
    cy.get('input[name="password"]').type(password);
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/panel');
  });

  it('TC-DSH-01: Mengakses halaman Dashboard', () => {
    cy.contains('Kelas Aktif');
    cy.contains('Kelas Belum Aktif');
    cy.contains('Kelas Arsip');
  });

  it('TC-DSH-02: Melihat daftar tugas pada Dashboard', () => {
    cy.contains('Lihat lainnya').click({ force: true});
    cy.get('table').should('be.visible');

    cy.get('table').then(table => {
      if (table.text().includes('Data belum tersedia.')) {
        cy.contains('Data belum tersedia.').should('be.visible');
      } else {
        cy.contains('Nama Tugas').should('be.visible');
        cy.contains('Tanggal').should('be.visible');
        cy.contains('Deadline').should('be.visible');
      }
    });
  });

  it('TC-DSH-03: Logout via Account Dropdown', () => {
  cy.url().should('include', '/panel');;
  cy.contains('myeni7199@gmail.com').click();
  cy.contains('Sign out').click();
});
});