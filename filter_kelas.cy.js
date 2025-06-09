describe('Kelas Guru', () => {
  beforeEach(() => {
    cy.visit('https://lms.teknologidigital.co.id/panel');
    cy.get('input[name=email]').type('myeni7199@gmail.com');
    cy.get('input[name=password]').type('password');
    cy.get('button[type=submit]').click();
    cy.url().should('include', '/panel');
  });

  it('TC-KLS-01: Navigasi sidebar dengan Submenu Kelas', () => {
    cy.get('nav').contains('Kelas').click();
    cy.contains('Kelas Aktif').should('be.visible');
    cy.contains('Semua Kelas').should('be.visible');
    cy.contains('Tugas').should('be.visible');
  });

  it('TC-KLS-02: Navigasi Submenu Kelas Aktif', () => {
    cy.get('nav').contains('Kelas').click();
    cy.contains('Kelas Aktif').click();
    cy.contains('Daftar Kelas').should('be.visible');
    document.querySelector('[data-testid="btn-reset"]')
    cy.contains('Filter Status Kelas').should('be.visible').click();
    cy.contains('Aktif').should('be.visible').click();
    cy.get('[data-testid=search-kelas]').should('exist');
  });

  it('TC-KLS-03: Klik ikon X pada halaman Kelas Aktif', () => {
   cy.contains('X').click({ force: true });
   cy.get('.flex.py-4').should('not.exist');
   cy.get('select').eq(0).select('Aktif', { force: true });
});

  it('TC-KLS-04: Klik dropdown status kelas', () => {
    cy.get('[data-testid=filter-status]').click();
    cy.contains('Aktif').should('exist');
    cy.contains('Belum Aktif').should('exist');
    cy.contains('Selesai').should('exist');
  });

  it('TC-KLS-05: Menampilkan Dropdown Filter Tipe Kelas', () => {
    cy.get('[data-testid=filter-tipe]').click();
    cy.contains('Khusus').should('exist');
    cy.contains('Reguler').should('exist');
  });

  it('TC-KLS-06: Filter Status dan Tipe Kelas secara bersamaan', () => {
    cy.get('[data-testid=filter-status]').select('Aktif');
    cy.get('[data-testid=filter-tipe]').select('Khusus');
    cy.url().should('include', '/kelas/semua');
  });

  it('TC-KLS-07: Filter Status "Aktif" dan Tipe "Khusus"', () => {
    cy.get('[data-testid=filter-status]').select('Aktif');
    cy.get('[data-testid=filter-tipe]').select('Khusus');
    cy.contains('Data belum tersedia').should('be.visible');
  });

  it('TC-KLS-08: Filter Status "Aktif" dan Tipe "Reguler"', () => {
    cy.get('[data-testid=filter-status]').select('Aktif');
    cy.get('[data-testid=filter-tipe]').select('Reguler');
    cy.contains('Data belum tersedia').should('be.visible');
  });

  it('TC-KLS-09: Filter Status "Belum Aktif" dan Tipe "Khusus"', () => {
    cy.get('[data-testid=filter-status]').select('Belum Aktif');
    cy.get('[data-testid=filter-tipe]').select('Khusus');
    cy.contains('Data belum tersedia').should('be.visible');
  });

  it('TC-KLS-10: Filter Status "Belum Aktif" dan Tipe "Reguler"', () => {
    cy.get('[data-testid=filter-status]').select('Belum Aktif');
    cy.get('[data-testid=filter-tipe]').select('Reguler');
    cy.contains('Data belum tersedia').should('be.visible');
  });

  it('TC-KLS-11: Filter Status "Selesai" dan Tipe "Khusus"', () => {
    cy.get('[data-testid=filter-status]').select('Selesai');
    cy.get('[data-testid=filter-tipe]').select('Khusus');
    cy.contains('Data belum tersedia').should('be.visible');
  });

  it('TC-KLS-12: Filter Status "Selesai" dan Tipe "Reguler"', () => {
    cy.get('[data-testid=filter-status]').select('Selesai');
    cy.get('[data-testid=filter-tipe]').select('Reguler');
    cy.contains('Data belum tersedia').should('be.visible');
  });

  it('TC-KLS-13: Pencarian berdasarkan nama kelas "Khusus"', () => {
    cy.get('[data-testid=filter-khusus]').click();
    cy.get('[data-testid=search-kelas]').should('be.visible');
    cy.contains('Data belum tersedia').should('be.visible');
  });
 });