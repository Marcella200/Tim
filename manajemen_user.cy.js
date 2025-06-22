describe('Manajemen User Admin', () => {
  beforeEach(() => {
  cy.visit('https://lms.teknologidigital.co.id/panel');
  cy.get('input[name=email]').type('hesgiag@gmail.com');
  cy.get('input[name=password]').type('monokuma');
  cy.get('button[type=submit]').click();
  cy.url().should('include', '/panel');
  });
});

it('TC-MU-01 - Membuka Halaman Manajemen User', () => {
  cy.visit('https://lms.teknologidigital.co.id/login');
  cy.get('input[name="email"]').type('hesgiag@gmail.com');
  cy.get('input[name="password"]').type('monokuma');
  cy.get('button[type="submit"]').click();
  cy.contains('Manajemen User').click();
});


it('TC-MU-02 - Membuka Halaman Manajemen User dan Sub-menu Admin', () => {
  cy.visit('https://lms.teknologidigital.co.id/login');
  cy.get('input[name="email"]').type('hesgiag@gmail.com');
  cy.get('input[name="password"]').type('monokuma');
  cy.get('button[type="submit"]').click();
  cy.contains('Manajemen User').click();
  cy.contains('Admin').click();

  cy.contains('Daftar Admin').should('be.visible');
  cy.get('table').should('be.visible');
  cy.log('Halaman Daftar Admin berhasil ditampilkan');
});

it('TC-MU-03 - Akses Halaman Sub-menu Admin', () => {
  cy.visit('https://lms.teknologidigital.co.id/login');
  cy.get('input[name="email"]').type('hesgiag@gmail.com');
  cy.get('input[name="password"]').type('monokuma');
  cy.get('button[type="submit"]').click();
  cy.contains('Manajemen User').click();
  cy.contains('Admin').click();

  cy.contains('Daftar Admin').should('be.visible');
  cy.get('table').should('be.visible');
  cy.log('Halaman Daftar Admin berhasil ditampilkan');
});


it('TC-MU-04 - Menambahkan Admin Baru', () => {
  cy.visit('https://lms.teknologidigital.co.id/login');
  cy.get('input[name="email"]').type('hesgiag@gmail.com');
  cy.get('input[name="password"]').type('monokuma');
  cy.get('button[type="submit"]').click();
  cy.contains('Manajemen User').click();
  cy.contains('Admin').click();
  cy.contains('+ Admin').click();

  cy.get('input[name="email"]').type('adminn@gmail.com');
  cy.get('input[name="password"]').type('monokuma');
  cy.get('input[type="password"]').eq(1).type('monokuma');
  cy.get('button').contains('Simpan').click();
});


it('TC-MU-05 - Pencarian Admin berdasarkan Email', () => {
  cy.visit('https://lms.teknologidigital.co.id/login');
  cy.get('input[name="email"]').type('hesgiag@gmail.com');
  cy.get('input[name="password"]').type('monokuma');
  cy.get('button[type="submit"]').click();
  cy.contains('Manajemen User').click();
  cy.contains('Admin').click();

  cy.get('input[name="search"]').should('exist');
  cy.get('input[placeholder="Cari email..."]').type('fudieni891@gmail.com').type('{enter}'); 
  cy.get('table').should('contain', 'fudieni891@gmail.com');
});

it('TC-MU-06 - Cek Ikon di Kolom Aksi (Edit & Delete)', () => {
  cy.visit('https://lms.teknologidigital.co.id/login');
  cy.get('input[name="email"]').type('hesgiag@gmail.com');
  cy.get('input[name="password"]').type('monokuma');
  cy.get('button[type="submit"]').click();
  cy.contains('Manajemen User').click();
  cy.contains('Admin').click();

  cy.get('table tbody tr').each(($row) => {
  cy.get('table tbody tr').each(($row) => {
  cy.wrap($row).find('a[href*="/edit"]').should('exist');
  cy.wrap($row).find('svg[data-icon="cil:trash"]').should('exist');
  });
});
});

it('TC-MU-07 - Edit Password Admin dari halaman Manajemen User', () => {
  cy.visit('https://lms.teknologidigital.co.id/login');
  cy.get('input[name="email"]').type('hesgiag@gmail.com');
  cy.get('input[name="password"]').type('monokuma');
  cy.get('button[type="submit"]').click();

  cy.contains('Manajemen User').click();
  cy.contains('Admin').click();
  cy.get('table').contains('td', 'admin@gmail.com').parent('tr').within(() => {
  cy.get('a[href*="/admins/"][href$="/edit"]').should('be.visible').click();
});
  cy.visit('https://lms.teknologidigital.co.id/panel/users/admins/21/edit');
  cy.get('input[name="password"]').should('be.visible').clear().type('pass1234');
  cy.get('input[name="password_confirmation"]').clear().type('pass1234');
  cy.get('button[type="submit"]').contains('Simpan').click();
  cy.contains('Admin berhasil diperbarui').should('be.visible');
});


it('TC-MU-08 - Hapus Data Admin dari Manajemen User', () => {
  cy.visit('https://lms.teknologidigital.co.id/login');
  cy.get('input[name="email"]').type('hesgiag@gmail.com');
  cy.get('input[name="password"]').type('monokuma');
  cy.get('button[type="submit"]').click();

  cy.contains('Manajemen User').click();
  cy.contains('Admin').click();
  cy.get('table tbody tr').first().within(() => {
  cy.get('button.bg-red-500').should('be.visible').click();
});
  cy.get('button.bg-red-500').should('be.visible');
  cy.contains('Cancel').debug().click();
  cy.get('table tbody tr').should('contain', 'admin@gmail.com');
});

it('TC-MU-09 - Membuka Halaman Manajemen User - Sub-menu Guru', () => {
  cy.visit('https://lms.teknologidigital.co.id/login');
  cy.get('input[name="email"]').type('hesgiag@gmail.com');
  cy.get('input[name="password"]').type('monokuma');
  cy.get('button[type="submit"]').click();

  cy.contains('Manajemen User').click();
  cy.contains('Admin').should('be.visible');
  cy.contains('Guru').should('be.visible');
  cy.contains('Siswa').should('be.visible');
  cy.contains('Guru').click();

  cy.contains('Daftar Guru').should('be.visible');
  cy.get('table').should('be.visible');
  cy.log('Halaman Daftar Guru berhasil ditampilkan');
});

it('TC-MU-10: Verifikasi Tambah Guru Baru', () => {
  cy.visit('https://lms.teknologidigital.co.id/login');
  cy.get('input[name="email"]').type('hesgiag@gmail.com');
  cy.get('input[name="password"]').type('monokuma');
  cy.get('button[type="submit"]').click();

  cy.contains('Manajemen User').click();
  cy.contains('Guru').click();
  cy.contains('+ Guru').click();

  cy.get('input[name="email"]').type('guru@email.com');
  cy.get('input[name="password"]').type('pass12345');
  cy.get('input[type="password"]').eq(1).type('pass12345');
  cy.get('input[name="name"]').should('be.visible').type('Guru');
  cy.get('input[name="phone_number"]').type('0813123123123');
  cy.get('input[name="place_of_birth"]').type('Sintang');
  cy.get('input[name="birth_date"]').type('1998-01-27');
  cy.get('select[name="gender"]').select('Laki-laki');
  cy.get('input[name="job"]').type('Swasta');
  cy.get('select[name="religion"]').select('Kristen Protestan');
  cy.get('input[name="teach_since"]').type('2008');
  cy.get('textarea[name="address"]').type('kasdkasdmaskmdasd');
  cy.contains('Simpan').click();
});

it('TC-MU-11: Verifikasi Pencarian Guru berdasarkan Email', () => {
  cy.visit('https://lms.teknologidigital.co.id/login');
  cy.get('input[name="email"]').type('hesgiag@gmail.com');
  cy.get('input[name="password"]').type('monokuma');
  cy.get('button[type="submit"]').click();

  cy.contains('Manajemen User').click();
  cy.contains('Guru').click();
  cy.get('input[placeholder="Cari email..."]').type('guru@email.com');
  cy.get('table tbody tr').should('contain', 'guru@email.com');
});

it('TC-MU-12: Verifikasi Tombol Edit dan Delete pada Daftar Guru', () => {
  cy.visit('https://lms.teknologidigital.co.id/login');
  cy.get('input[name="email"]').type('hesgiag@gmail.com');
  cy.get('input[name="password"]').type('monokuma');
  cy.get('button[type="submit"]').click();

  cy.contains('Manajemen User').click();
  cy.contains('Guru').click();
  cy.get('table').should('exist');

  cy.get('table tbody tr').each(($row) => {
  cy.wrap($row).within(() => {
  cy.get('a[href*="/teachers/"][href$="/edit"]').should('be.visible');
  cy.get('button.bg-red-500').should('be.visible');
  });
 });
});

it('TC-MU-13: Ubah Password Guru dari Manajemen User', () => {
  cy.visit('https://lms.teknologidigital.co.id/login');
  cy.get('input[name="email"]').type('hesgiag@gmail.com');
  cy.get('input[name="password"]').type('monokuma');
  cy.get('button[type="submit"]').click();

  cy.contains('Manajemen User').click();
  cy.contains('Guru').click();
  cy.get('table').contains('td', 'guru@email.com').parent('tr').within(() => {
  cy.get('a[href*="/teachers/"][href$="/edit"]').should('be.visible').click();
});
  cy.visit('https://lms.teknologidigital.co.id/panel/users/teachers/38/edit');
  cy.get('input[name="password"]').should('be.visible').clear().type('pass1234');
  cy.get('input[name="password_confirmation"]').clear().type('pass1234');
  cy.get('button[type="submit"]').contains('Simpan').click();
  cy.contains('Guru berhasil diperbarui').should('be.visible');
});

it('TC-MU-14: Hapus Data Guru dari Manajemen User', () => {
  cy.visit('https://lms.teknologidigital.co.id/login');
  cy.get('input[name="email"]').type('hesgiag@gmail.com');
  cy.get('input[name="password"]').type('monokuma');
  cy.get('button[type="submit"]').click();
  
  cy.contains('Manajemen User').click();
  cy.contains('Guru').click();

  cy.get('button.bg-red-500').should('be.visible');
  cy.get('table tbody tr').should('contain', 'guru@email.com');
  cy.get('table tbody tr').first().find('button.bg-red-500').click();
  cy.contains('Are you sure you want to delete?').should('be.visible');
  cy.contains('Cancel').debug().click();
  cy.get('table tbody tr').should('have.length.greaterThan', 0);
});
  
it('TC-MU-15 Membuka Halaman Manajemen User', () => {
  cy.visit('https://lms.teknologidigital.co.id/login');
  cy.get('input[name="email"]').type('hesgiag@gmail.com');
  cy.get('input[name="password"]').type('monokuma');
  cy.get('button[type="submit"]').click();
  cy.contains('Manajemen User').click();
  cy.contains('Admin').should('be.visible');
  cy.contains('Guru').should('be.visible');
  cy.contains('Siswa').should('be.visible');
  cy.contains('Siswa').click();
  cy.url().should('include', '/users/students');
  cy.contains('Daftar Siswa').should('be.visible');
});

  it('TC-MU-16: Menampilkan Halaman Daftar Siswa', () => {
  cy.visit('https://lms.teknologidigital.co.id/login');
  cy.get('input[name="email"]').type('hesgiag@gmail.com');
  cy.get('input[name="password"]').type('monokuma');
  cy.get('button[type="submit"]').click();
  cy.contains('Manajemen User').click();
  cy.contains('Admin').should('exist');
  cy.contains('Guru').should('exist');
  cy.contains('Siswa').should('exist');
  cy.contains('Siswa').click();
  cy.url().should('include', '/users/students');
  cy.contains('Daftar Siswa').should('be.visible');
});

  it('TC-MU-17: Menambahkan Siswa Baru', () => {
  cy.visit('https://lms.teknologidigital.co.id/login');
  cy.get('input[name="email"]').type('hesgiag@gmail.com');
  cy.get('input[name="password"]').type('monokuma');
  cy.get('button[type="submit"]').click();
    
  cy.contains('Manajemen User').click();
  cy.contains('Siswa').click();
  cy.contains('+ Siswa').click();

  cy.get('input[name="email"]').type('lotusmahaesa@email.com');
  cy.get('input[name="password"]').type('monokuma');
  cy.get('input[type="password"]').eq(1).type('monokuma');
  cy.get('input[name="name"]').should('be.visible').type('Sakya');
  cy.get('input[name="parent_name"]').type('Marcella');
  cy.get('input[name="phone_number"]').type('0985252480902');
  cy.get('input[name="place_of_birth"]').type('Sintang');
  cy.get('input[name="birth_date"]').type('2000-08-10');
  cy.get('select[name="gender"]').select('Laki-laki');
  cy.get('input[name="job"]').type('SMP');
  cy.get('select[name="religion"]').select('Katolik');
  cy.get('input[name="joined_at"]').invoke('val', '2025-05-11').trigger('change');
  cy.get('textarea[name="address"]').type('jalan mengkurai');
  cy.get('input[type="file"]').attachFile('profile.jpg', { force: true });

  cy.contains('Simpan').click();
  cy.contains('Tambah Siswa Baru').should('be.visible');
  cy.contains('Siswa Baru').should('exist');
});

  it('TC-MU-18: Menu Pencarian Email Siswa', () => {
  cy.visit('https://lms.teknologidigital.co.id/login');
  cy.get('input[name="email"]').type('hesgiag@gmail.com');
  cy.get('input[name="password"]').type('monokuma');
  cy.get('button[type="submit"]').click();
  cy.contains('Manajemen User').click();
  cy.contains('Siswa').click();
  cy.get('input[placeholder="Cari email..."]').type('lotusmahaesa@gmail.com').type('{enter}'); 
  cy.get('table').should('contain', 'lotusmahaesa@gmail.com');
});

  it('TC-MU-19: Cek Ikon di kolom Aksi', () => {
  cy.visit('https://lms.teknologidigital.co.id/login');
  cy.get('input[type="email"]').type('hesgiag@gmail.com');
  cy.get('input[type="password"]').type('monokuma');
  cy.get('button[type="submit"]').click();

  cy.contains('Manajemen User').click();
  cy.contains('Siswa').click();
  cy.get('table').should('exist');

  cy.get('table tbody tr').each(($row) => {
  cy.wrap($row).within(() => {
  cy.get('a[href*="/students/"][href$="/edit"]').should('be.visible');
  cy.get('button.bg-red-500').should('be.visible');
  });
 });
});

it('TC-MU-20: Klik tombol Edit (pensil) untuk ubah password siswa', () => {
  cy.visit('https://lms.teknologidigital.co.id/login');
  cy.get('input[type="email"]').type('hesgiag@gmail.com');
  cy.get('input[type="password"]').type('monokuma');
  cy.get('button[type="submit"]').click();

  cy.contains('Manajemen User').click();
  cy.contains('Siswa').click();

  cy.get('table').contains('td', 'lotusmahaesa@gmail.com').parent('tr').within(() => {
  cy.get('a[href*="/students/"][href$="/edit"]').should('be.visible').click();
});
  cy.visit('https://lms.teknologidigital.co.id/panel/users/students/27/edit');
  cy.get('input[name="password"]').should('be.visible').clear().type('pass1234');
  cy.get('input[name="password_confirmation"]').clear().type('pass1234');
  cy.get('button[type="submit"]').contains('Simpan').click();
  cy.contains('Siswa berhasil diperbarui').should('be.visible');
});

  it('TC-MU-21: Menampilkan popup konfirmasi dan hapus data siswa jika konfirmasi ditekan', () => {
  cy.visit('https://lms.teknologidigital.co.id/login');
  cy.get('input[name=email]').type('hesgiag@gmail.com');
  cy.get('input[name=password]').type('monokuma');
  cy.get('button[type=submit]').click();
  
  cy.contains('Manajemen User').click();
  cy.contains('Siswa').click();
  cy.get('table tbody tr').first().within(() => {
  cy.get('button.bg-red-500').should('be.visible').click();
});
  cy.get('button.bg-red-500').should('be.visible');
  cy.contains('Cancel').debug().click();
  cy.get('table tbody tr').should('contain', 'lotusmahaesa@gmail.com');
});

it('TC-MU-22: Dropdown pada halaman Manajemen User - Submenu Siswa', () => {
  cy.visit('https://lms.teknologidigital.co.id/login');
  cy.get('input[name=email]').type('hesgiag@gmail.com');
  cy.get('input[name=password]').type('monokuma');
  cy.get('button[type=submit]').click();

  cy.url().should('include', '/panel');
  cy.contains('Manajemen User').click();
  cy.contains('Siswa').click();

  cy.url().should('include', '/panel/users/students');
  cy.contains('hesgiag@gmail.com').click();
  cy.contains('Sign out').click();
});