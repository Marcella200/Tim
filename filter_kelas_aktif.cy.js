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
    cy.get('select[name="type"]').should('exist');
    cy.contains('Aktif').should('be.visible').click();
    cy.get('input[name="search"]').type('Cari Nama Kelas');
  });

  it('TC-KLS-03: Klik ikon X pada halaman Kelas Aktif', () => {
   cy.get('button').each(($el, index) => {
   cy.wrap($el).invoke('html').then(html => {
   console.log(`Button ${index}:`, html);
  });
});

   document.querySelector('[data-cy="filter-status"]')
   cy.contains('Aktif').click({ force: true });
});

  it('TC-KLS-04: Klik dropdown status kelas', () => {
    document.querySelector('[data-cy="filter-status"]')
    cy.contains('Aktif').should('exist');
    cy.contains('Belum Aktif').should('exist');
    cy.contains('Aktif').click({ force: true });
  });

  it('TC-KLS-05: Menampilkan Dropdown Filter Tipe Kelas', () => {
   cy.visit('https://lms.teknologidigital.co.id/panel/teacher-class');
   cy.get('select[name="type"]').should('exist');
   cy.get('select[name="type"] option').contains('Khusus').should('exist');
   cy.get('select[name="type"] option').contains('Reguler').should('exist');
  });

  it('TC-KLS-06: Filter Status dan Tipe Kelas secara bersamaan', () => {
    cy.visit('https://lms.teknologidigital.co.id/panel/teacher-class');
    cy.get('select[name="status"]').should('exist');
    cy.get('select[name="type"]').should('exist');
  });

  it('TC-KLS-07: Filter Status "Aktif" dan Tipe "Khusus"', () => {
    cy.visit('https://lms.teknologidigital.co.id/panel/teacher-class?status=2');
    cy.get('select[name="status"]').select('Aktif');
    cy.get('select[name="type"]').select('Khusus');
    cy.contains('Data belum tersedia').should('be.visible');
  });

  it('TC-KLS-08: Filter Status "Aktif" dan Tipe "Reguler"', () => {
    cy.visit('https://lms.teknologidigital.co.id/panel/teacher-class');
    cy.get('select[name="status"]').select('Aktif');
    cy.get('select[name="type"]').select('Reguler');
    cy.contains('Data belum tersedia').should('be.visible');
  });

  it('TC-KLS-09: Filter Status "Belum Aktif" dan Tipe "Khusus"', () => {
    cy.visit('https://lms.teknologidigital.co.id/panel/teacher-class');
    cy.get('select[name="status"]').select('Belum Aktif');
    cy.get('select[name="type"]').select('Khusus');
    cy.contains('Data belum tersedia').should('be.visible');
  });

  it('TC-KLS-10: Filter Status "Belum Aktif" dan Tipe "Reguler"', () => {
    cy.visit('https://lms.teknologidigital.co.id/panel/teacher-class');
    cy.get('select[name="status"]').select('Belum Aktif');
    cy.get('select[name="type"]').select('Reguler');
    cy.contains('Data belum tersedia').should('be.visible');
  });

  it('TC-KLS-11: Filter Status "Selesai" dan Tipe "Khusus"', () => {
    cy.visit('https://lms.teknologidigital.co.id/panel/teacher-class');
    cy.get('select[name="status"]').select('Selesai');
    cy.get('select[name="type"]').select('Khusus');
    cy.contains('Data belum tersedia').should('be.visible');
  });

  it('TC-KLS-12: Filter Status "Selesai" dan Tipe "Reguler"', () => {
    cy.visit('https://lms.teknologidigital.co.id/panel/teacher-class');
    cy.get('select[name="status"]').select('Selesai');
    cy.get('select[name="type"]').select('Reguler');
    cy.contains('Data belum tersedia').should('be.visible');
  });

  it('TC-KLS-13: Pencarian berdasarkan nama kelas "Khusus"', () => {
    cy.visit('https://lms.teknologidigital.co.id/panel/teacher-class?status=&type=&search=');
    cy.get('input[name="search"]').should('exist');
    cy.get('input[name="search"]').clear().type('Khusus');
    cy.get('input[name="search"]').type('{enter}');
    cy.get('body').should('contain.text', 'Data belum tersedia');
  });

  it('TC-KLS-14: Pencarian berdasarkan nama kelas "Reguler"', () => {
    cy.visit('https://lms.teknologidigital.co.id/panel/teacher-class?status=&type=&search=');
    cy.get('input[name="search"]').should('exist');
    cy.get('input[name="search"]').clear().type('Reguler');
    cy.get('input[name="search"]').type('{enter}');
    cy.get('body').should('contain.text', 'Data belum tersedia');
  });

   it('TC-KLS-15 - Pencarian Berdasarkan Filter Status Kelas "Aktif"', () => {
    cy.visit('https://lms.teknologidigital.co.id/panel/teacher-class?status=&type=&search=');
    cy.get('input[name="search"]').should('exist');
    cy.get('input[name="search"]').clear().type('Aktif');
    cy.get('input[name="search"]').type('{enter}');
    cy.get('body').should('contain.text', 'Data belum tersedia');
    });

    it('TC-KLS-16: Pencarian Kelas - Filter Belum Aktif', () => {
    cy.visit('https://lms.teknologidigital.co.id/panel/teacher-class?status=&type=&search=');
    cy.get('input[name="search"]').should('exist');
    cy.get('input[name="search"]').clear().type('Belum Aktif');
    cy.get('input[name="search"]').type('{enter}');
    cy.get('body').should('contain.text', 'Data belum tersedia');
  });

  it('TC-KLS-17: Pencarian Kelas - Filter Selesai', () => {
    cy.visit('https://lms.teknologidigital.co.id/panel/teacher-class?status=&type=&search=');
    cy.get('input[name="search"]').should('exist');
    cy.get('input[name="search"]').clear().type('Selesai');
    cy.get('input[name="search"]').type('{enter}');
    cy.get('body').should('contain.text', 'Data belum tersedia');
  });

  it('TC-KLS-18: Logout via Account Dropdown', () => {
  cy.url().should('include', '/panel');;
  cy.contains('myeni7199@gmail.com').click();
  cy.contains('Sign out').click();
});
});