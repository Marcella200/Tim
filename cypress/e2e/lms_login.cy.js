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

    it('TC-LOGIN-05: Admin login langsung tanpa mengisi field email dan password', () => {
    cy.get('button[type="submit"]').click();
    cy.get('input[name="email"]:invalid').should('exist');
    cy.get('input[name="password"]:invalid').should('exist');
  });

    it('TC-LOGIN-06: Admin login dengan email tidak tepat', () => {
    cy.get('input[name="email"]').type('cmiww200@gmail.com');
    cy.get('input[name="password"]').type('monokuma');
    cy.get('button[type="submit"]').click();
    cy.contains('Email atau Kata Sandi Tidak Sesuai.').should('be.visible');
  });

    it('TC-LOGIN-07: Admin login dengan password tidak tepat', () => {
    cy.get('input[name="email"]').type('hesgiag@gmai.com');
    cy.get('input[name="password"]').type('passwo01');
    cy.get('button[type="submit"]').click();
    cy.contains('Email atau Kata Sandi Tidak Sesuai.').should('be.visible');
  });

    it('TC-LOGIN-08: Admin login dengan serangan injeksi pada field email', () => {
    cy.get('input[name="email"]').type(" OR '1'='1 ");
    cy.get('input[name="password"]').type('passwo01');
    cy.get('button[type="submit"]').click();
    cy.get('input[name="email"]').type("Please include an '@' in the email address. OR '1'='1; is missing an '@'.");
  });

    it('TC-LOGIN-09: Admin login dengan serangan injeksi pada field password', () => {
    cy.get('input[name="email"]').type('hesgiag@gmai.com');
    cy.get('input[name="password"]').type(" OR '1'='1 ");
    cy.get('button[type="submit"]').click();
    cy.contains('Email atau Kata Sandi Tidak Sesuai').should('be.visible');
  });

    it('TC-LOGIN-10: Admin login dengan serangan XSS pada field email (payload/skrip)', () => {
    cy.get('input[name="email"]').type('<script>alert("hai")</script>');
    cy.get('input[name="password"]').type('passwo1');
    cy.get('button[type="submit"]').click();
    cy.get('input[name="email"]').type("Please include an '@' in the email address.  <script>alert('hai')</script> is missing an '@'");
  });

    it('TC-LOGIN-11: Admin login dengan serangan XSS pada field password (payload/skrip)', () => {
    cy.get('input[name="email"]').type('hesgiag@gmail.com');
    cy.get('input[name="password"]').type('<script>alert("hai")</script>');
    cy.get('button[type="submit"]').click();
    cy.contains('Email atau Kata Sandi Tidak Sesuai').should('be.visible');
  });

    it('TC-LOGIN-12: Admin login dengan serangan XSS pada field Email (JavaScript)', () => {
    cy.get('input[name="email"]').type('<img src=x onerror=alert(1)>');
    cy.get('input[name="password"]').type('passwo1');
    cy.get('button[type="submit"]').click();
    cy.get('input[name="email"]').type(" Please include an '@' in the email address.  <img src=x onerror=alert(1)> is missing an '@' ");
  });

    it('TC-LOGIN-13: Admin login dengan serangan XSS pada field Password (JavaScript)', () => {
    cy.get('input[name="email"]').type('hesgiag@gmai.com');
    cy.get('input[name="password"]').type('<img src=x onerror=alert(1)>');
    cy.get('button[type="submit"]').click();
    cy.contains('Email atau Kata Sandi Tidak Sesuai').should('be.visible');
  });