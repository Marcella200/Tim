describe('Kelas Guru', () => {
    beforeEach(() => {
    cy.visit('https://lms.teknologidigital.co.id/panel');
    cy.get('input[name=email]').type('myeni7199@gmail.com');
    cy.get('input[name=password]').type('password');
    cy.get('button[type=submit]').click();
    cy.url().should('include', '/panel');
  });

it('#TC-KLS-01: Navigasi Submenu Semua Kelas', () => {
    cy.visit('https://lms.teknologidigital.co.id/panel/teacher-class');
    cy.contains('Filter Status Kelas').should('exist');
    cy.contains('Filter Tipe Kelas').should('exist');
    cy.get('input[placeholder="Cari nama kelas..."]').should('exist');
    cy.contains('Data belum tersedia').should('exist');
  });

  it('#TC-KLS-02: Tampilkan Dropdown Filter Status Kelas', () => {
   cy.visit('https://lms.teknologidigital.co.id/panel/teacher-class');
   cy.get('select[name="type"]').should('exist');
   cy.contains('Aktif').should('exist');
   cy.contains('Belum Aktif').should('exist');
   cy.contains('Aktif').click({ force: true });
  });

  it('#TC-KLS-03: Tampilkan Dropdown Filter Tipe Kelas', () => {
   cy.visit('https://lms.teknologidigital.co.id/panel/teacher-class');
   cy.get('select[name="type"]').should('exist');
   cy.get('select[name="type"] option').contains('Khusus').should('exist');
   cy.get('select[name="type"] option').contains('Reguler').should('exist');
  });

  it('#TC-KLS-04: Filter Status dan Tipe Kelas secara bersamaan', () => {
   cy.visit('https://lms.teknologidigital.co.id/panel/teacher-class');
   cy.get('select[name="status"]').should('exist');
   cy.get('select[name="type"]').should('exist');
   cy.contains('Data belum tersedia').should('exist');
  });

  it('#TC-KLS-05: Filter "Aktif" dan Tipe "Khusus" memindahkan ke Kelas Aktif', () => {
    cy.visit('https://lms.teknologidigital.co.id/panel/teacher-class');
    cy.contains('Aktif').click();
    cy.contains('Khusus').should('exist');  
    cy.url().should('include', '/panel/teacher-class');
  });

  it('#TC-KLS-06: Filter "Aktif" dan Tipe "Reguler" memindahkan ke Kelas Aktif', () => {
    cy.visit('https://lms.teknologidigital.co.id/panel/teacher-class');
    cy.contains('Aktif').click();
    cy.contains('Reguler').should('exist');
    cy.url().should('include', '/panel/teacher-class');
  });

  it('#TC-KLS-07: Filter "Belum Aktif" dan Tipe "Khusus" tetap di Semua Kelas', () => {
    cy.visit('https://lms.teknologidigital.co.id/panel/teacher-class');
    cy.get('select[name="status"]').select('Belum Aktif');
    cy.get('select[name="type"]').select('Khusus');
  });

    it('#TC-KLS-08: Filter "Belum Aktif" dan Tipe "Reguler"', () => {
    cy.visit('https://lms.teknologidigital.co.id/panel/teacher-class');
    cy.get('select[name="status"]').select('Belum Aktif');
    cy.get('select[name="type"]').select('Reguler');
  });

  it('#TC-KLS-09: Filter "Selesai" dan Tipe "Khusus"', () => {
    cy.visit('https://lms.teknologidigital.co.id/panel/teacher-class');
    cy.get('select[name="status"]').select('Selesai');
    cy.get('select[name="type"]').select('Khusus');
  });

  it('#TC-KLS-10: Filter "Selesai" dan Tipe "Reguler"', () => {
    cy.visit('https://lms.teknologidigital.co.id/panel/teacher-class');
    cy.get('select[name="status"]').select('Selesai');
    cy.get('select[name="type"]').select('Reguler');
  });

  it('#TC-KLS-12: Pencarian kelas berdasarkan nama "Khusus"', () => {
    cy.visit('https://lms.teknologidigital.co.id/panel/teacher-class');
    cy.get('input[name="search"]').should('exist');
    cy.get('input[name="search"]').clear().type('Khusus');
    cy.get('input[name="search"]').type('{enter}');
    cy.get('body').should('contain.text', 'Data belum tersedia');
  });

  it('#TC-KLS-13: Pencarian kelas berdasarkan nama "Reguler"', () => {
    cy.visit('https://lms.teknologidigital.co.id/panel/teacher-class');
    cy.get('input[name="search"]').clear().type('Reguler');
    cy.get('input[name="search"]').type('{enter}');
    cy.get('body').should('contain.text', 'Data belum tersedia');
  });

  it('TC-KLS-14: Pencarian Berdasarkan Filter Status Kelas "Aktif"', () => {
    cy.visit('https://lms.teknologidigital.co.id/panel/teacher-class?status=&type=&search=');
    cy.get('input[name="search"]').should('exist');
    cy.get('input[name="search"]').clear().type('Aktif');
    cy.get('input[name="search"]').type('{enter}');
    cy.get('body').should('contain.text', 'Data belum tersedia');
    });

    it('TC-KLS-15: Pencarian Kelas - Filter Belum Aktif', () => {
    cy.visit('https://lms.teknologidigital.co.id/panel/teacher-class?status=&type=&search=');
    cy.get('input[name="search"]').should('exist');
    cy.get('input[name="search"]').clear().type('Belum Aktif');
    cy.get('input[name="search"]').type('{enter}');
    cy.get('body').should('contain.text', 'Data belum tersedia');
  });

  it('TC-KLS-16: Pencarian Kelas - Filter Selesai', () => {
    cy.visit('https://lms.teknologidigital.co.id/panel/teacher-class?status=x&type=&search=');
    cy.get('input[name="search"]').should('exist');
    cy.get('input[name="search"]').clear().type('Selesai');
    cy.get('input[name="search"]').type('{enter}');
    cy.get('body').should('contain.text', 'Data belum tersedia');
  });

 it('TC-KLS-17: Logout via Account Dropdown', () => {
  cy.url().should('include', '/panel');;
  cy.contains('myeni7199@gmail.com').click();
  cy.contains('Sign out').click();
});
});