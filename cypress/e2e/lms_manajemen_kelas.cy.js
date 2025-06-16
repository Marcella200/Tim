describe('Manajemen Kelas Test', () => {
  beforeEach(() => {
    cy.visit('https://lms.teknologidigital.co.id/login');
    cy.get('input[type="email"]').type('hesgiag@gmail.com');
    cy.get('input[type="password"]').type('monokuma');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/panel');
  });

  it('#TC-MK-01 Membuka Halaman Manajemen Kelas', () => {
    cy.contains('Manajemen Kelas').click();
    cy.url().should('include', '/panel/course-types');
    cy.contains('Daftar Tipe Kelas').should('be.visible');
  });

it('#TC-MK-02 Klik tombol +Tipe Kelas', () => {
    cy.contains('Manajemen Kelas').click();
    cy.url().should('include', '/panel/course-types');
    cy.get('a[href*="/course-types/create"]').should('be.visible').click();
    cy.url().should('include', '/panel/course-types/create');
    cy.get('input[name="name"]').type('Kelas Marcella');
    cy.contains('Simpan').click();
    cy.contains('Tipe kelas berhasil ditambahkan', { timeout: 10000 }).should('be.visible');
    cy.url().should('include', '/panel/course-types');
  });

  it('#TC-MK-03 Menu Pencarian Nama (Search)', () => {
  cy.contains('Manajemen Kelas').click(); 
  cy.url().should('include', '/panel/course-types');
  cy.get('input[name="search"]').type('Reguler');
  cy.contains('Reguler').should('be.visible'); 
});

  it('#TC-MK-04 Cek tombol Aksi per baris', () => {
  cy.contains('Manajemen Kelas').click();
  cy.url().should('include', '/panel/course-types');
  cy.get('tbody tr').each(($row) => {
  cy.wrap($row).within(() => {
  cy.get('a[href*="/panel/course-types/"]:not([href$="create"])')
    .should('exist');
  cy.get('a[href$="/edit"]')
    .should('exist');
    });
  });
    });

  it('#TC-MK-05 Klik Icon Delete pada tabel', () => {
  cy.contains('Manajemen Kelas').click();
  cy.url().should('include', '/panel/course-types');
  cy.contains('Kelas Marcella').parents('tr').within(() => {
  cy.get('button[onclick="confirmDelete(this)"]').click();
  cy.contains('Are you sure you want to delete?').should('be.visible');
  cy.contains('OK').click(); 
  cy.contains('Kelas Marcella').should('not.exist');
  });
  });

 });