describe('Halaman Dashboard', () => {
  beforeEach(() => {
    cy.visit('https://lms.teknologidigital.co.id/login')
    cy.get('input[placeholder="Alamat Email"]').type('hesgiag@gmail.com');
    cy.get('input[placeholder="Kata Sandi"]').type('monokuma');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/panel');
  });

  it('#TC-VID-01 - Melihat Halaman Video', () => {
    cy.contains('Video').click();
    cy.url().should('include', '/panel/video');
    cy.get('input[name="name"]').should('exist');
    cy.get('input[name="youtube_id"]').should('exist');
  });

  it('#TC-VID-02 - Form Isian pada halaman Video', () => {
  cy.contains('Video').click();
  cy.get('input[name="name"]')
    .should('be.visible')
    .clear()
    .should('have.value', '');    
  cy.get('input[name="youtube_id"]').should('be.visible');
  cy.get('iframe').should('exist');
  });

  it('#TC-VID-03 - Upload Video Baru', () => {
    const name = 'Sakya';
    const youtubeUrl = 'https://www.youtube.com/watch?v=PT2_F-1esPk&list=RDMM&index=19';

    cy.contains('Video').click();
    cy.get('input[name="name"]').clear().type(name);
    cy.get('input[name="youtube_id"]').clear().type(youtubeUrl);
    cy.contains('Simpan').click();
    cy.contains('Berhasil memperbaharui video!').should('be.visible');
    cy.get('iframe')
      .should('have.attr', 'src')
      .and('include', 'https://www.youtube.com/watch?v=PT2_F-1esPk&list=RDMM&index=19');
  });

  it('#TC-VID-04 - Dropdown Halaman Video', () => {
    cy.get('span.overflow-hidden.truncate.max-w-xs')
    .should('contain', 'hesgiag@gmail.com')
    .click();
    cy.contains('Sign out').should('be.visible');
  });
});
