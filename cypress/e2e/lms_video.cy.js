describe('Halaman Daftar Gallery', () => {
  beforeEach(() => {
    cy.visit('https://lms.teknologidigital.co.id/login');
    cy.get('input[type="email"]').type('hesgiag@gmail.com');
    cy.get('input[type="password"]').type('monokuma');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/panel');
  });

  it('Buka halaman Video dan cek elemen', () => {
  cy.contains('Video').click();
  });

  it('should fill the video form and preview the YouTube video', () => {
    cy.get('input[name="name"]').clear().type('Marcella')


    const youtubeUrl = 'https://www.youtube.com/watch?v=sT-wpjhYy-0';

    cy.get('input[name="youtube_id"]').clear().type(youtubeUrl);

    cy.contains('Simpan').click();

    cy.get('iframe')
      .should('have.attr', 'src')
      .and('include', 'sT-wpjhYy-0');
  });
});