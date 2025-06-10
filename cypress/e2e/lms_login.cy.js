describe('Authentication Test', () => {
  beforeEach(() => {
    cy.visit('https://lms.teknologidigital.co.id/login')
  });

 it('TC-LOGIN-01: Admin berhasil login dengan email dan kata sandi yang benar', () => {
    cy.get('input[name="email"]').type('hesgiag@gmail.com');
    cy.get('input[name="password"]').type('monokuma');
    cy.get('button[type="submit"]').click();
    cy.contains('Dashboard').should('be.visible');
    cy.contains(/hesgiag@gmail\.com/i).should('be.visible');
  });
});

   it('TC-LOGIN-02: Admin login dengan email kosong', () => {
    cy.get('input[name="email"]').should('be.visible').type('leave empty');
    cy.get('input[name="password"]').should('be.visible').type('monokuma');
    cy.get('button[type="submit"]').click();
    cy.contains(/Email atau Kata Sandi Tidak Sesuai/i).should('be.visible');
  });

  it('TC-LOGIN-03: Admin login dengan password kosong', () => {
    cy.get('input[name="email"]').type('hesgiag@gmai.com');
    cy.get('input[name="password"]').type('leave empty');
    cy.get('button[type="submit"]').click();
    cy.contains('Email atau Kata Sandi Tidak Sesuai.').should('be.visible');
  });

  it('TC-LOGIN-04: Admin login dengan password minimal 8 karakter', () => {
    cy.get('input[name="email"]').type('hesgiag@gmai.com');
    cy.get('input[name="password"]').type('password');
    cy.get('button[type="submit"]').click();
    cy.contains('Email atau Kata Sandi Tidak Sesuai.').should('be.visible');
  });

  