describe('Halaman Gallery', () => {
  beforeEach(() => {
    cy.visit('https://lms.teknologidigital.co.id/login')
    cy.get('input[placeholder="Alamat Email"]').type('hesgiag@gmail.com');
    cy.get('input[placeholder="Kata Sandi"]').type('monokuma');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/panel');
  });

  it('TC-GAL-01: Membuka halaman Gallery', () => {
    cy.contains('Gallery').should('be.visible').click();
    cy.url().should('include', '/panel/gallery');
    cy.contains(/daftar gallery/i).should('be.visible');
    cy.contains('Nama').should('be.visible');
    cy.contains('Gambar').should('be.visible');
    cy.contains('Dibuat').should('be.visible');
    cy.contains('Aksi').should('be.visible');
    cy.contains('Data belum tersedia.').should('be.visible');
  });

  it('TC-GAL-02: Menambahkan Foto', () => {
    cy.contains('Gallery').should('be.visible').click();
    cy.url().should('include', '/panel/gallery');
    cy.contains('a', '+ Foto', { timeout: 10000 }).should('be.visible').click(); 
    cy.url().should('include', '/panel/gallery/create');
    cy.get('input[name="name"]').type('Marcella');
    cy.get('input[type="file"]').selectFile('cypress/fixtures/contoh.jpg');
    cy.contains('Simpan').click();  
    cy.url().should('include', '/panel/gallery');
});

  it('TC-GAL-03: Menghapus foto yang baru saja di tambahkan', () => {
    cy.contains('Gallery').click();
    cy.url().should('include', '/panel/gallery');
    cy.contains('td', 'Marcella')
      .parent('tr')
      .within(() => {
    cy.get('button').contains(/^$/).click({ force: true });
    });

    cy.on('window:confirm', () => true);
  });

    it('TC-GAL-04: Dropdown Halaman Gallery', () => {
    cy.get('span.overflow-hidden.truncate.max-w-xs')
    .should('contain', 'hesgiag@gmail.com')
    .click();
    cy.contains('Sign out').should('be.visible');
  });
});
