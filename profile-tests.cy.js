describe('Test Menu Profil Guru', () => {
  const email = 'myeni7199@gmail.com';
  const oldPassword = 'password';
  const newPassword = 'sandi123';

  it('TC-PRF-01 - Akses menu profil saya', () => {
    cy.visit('https://lms.teknologidigital.co.id/login');
    cy.login('myeni7199@gmail.com', 'password');
    cy.contains('Profil Saya').click();
    cy.url().should('include', '/profil');
    cy.contains('Kata Sandi').should('exist');
  });

  it('TC-PRF-02 - Ubah kata sandi di profil saya', () => {
    cy.login('myeni7199@gmail.com', 'password');
    cy.contains('Profil Saya').click();
    cy.contains('Kata Sandi').click();

    cy.contains('Kata Sandi').click(); BeforeEach(() => {})
    cy.get('input[name="PasswordLama"]').type('password'); cy.wait(2000); 
    cy.get('input[name="PasswordBaru"]').type('sandi123'); cy.wait(2000); 
    cy.get('input[name="KonfirmasiPasswordBaru"]').type('sandi123'); cy.wait(2000); 
    cy.contains('Simpan').click();

    cy.contains('Kata sandi berhasil diubah').should('exist');
  });

  it('TC-PRF-03 - Reset kata sandi ke default', () => {
    cy.login('myeni7199@gmail.com', 'sandi123');
    cy.contains('Profil Saya').click();
    cy.contains('Kata Sandi').click();

    cy.get('input[name="oldPassword"]').type('sandi123', { log: false });
    cy.get('input[name="newPassword"]').type('password', { log: false });
    cy.get('input[name="confirmPassword"]').type('password', { log: false });

    cy.contains('Ubah Password').click();
    cy.contains('Kata sandi berhasil diubah').should('exist');
  });

  it('TC-PRF-04 - Melihat opsi Sign Out', () => {
    cy.login('myeni7199@gmail.com', 'password');
    cy.contains('myeni7199@gmail.com').click();
    cy.contains('Sign out').should('be.visible');
  });
});