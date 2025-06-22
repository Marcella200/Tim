describe('Halaman Profil Saya', () => {
  beforeEach(() => {
});

  it('TC-PRF-01= Membuka halaman Profil Saya', () => {
  cy.login();  
  cy.contains('Profil Saya').click();
  cy.contains('Password Lama').should('exist');
  cy.contains('Password Baru').should('exist');
  cy.contains('Konfirmasi Password Baru').should('exist');
});

it('TC-PRF-02= Mengubah password pengguna dihalaman profil', () => {
  cy.login();
  cy.contains('Profil Saya').click();
  cy.get('input[name="old_password"]').type('password');
  cy.get('input[name="password"]').type('pass12345');
  cy.get('input[name="password_confirmation"]').type('pass12345');
  cy.contains('button', 'Simpan').click();
  cy.contains('Kata sandi berhasil diubah.').should('be.visible');
});

it('TC-PRF-03= Dropdown pada halaman Profil Saya', () => {
  cy.loginBaru(); 
  cy.get('span.overflow-hidden.truncate.max-w-xs')
  .should('contain', 'myeni7199@gmail.com').click();
  cy.contains('Sign out').should('be.visible');
});

  after(() => {
    cy.loginBaru();
    cy.contains('Profil Saya').click();
    cy.get('input[name="old_password"]').type('pass12345');
    cy.get('input[name="password"]').type('password');
    cy.get('input[name="password_confirmation"]').type('password');
    cy.contains('button', 'Simpan').click();
    cy.contains('Kata sandi berhasil diubah.').should('be.visible');
});
});