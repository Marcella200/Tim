describe('Manajemen Kelas Test', () => {
  beforeEach(() => {
    cy.visit('https://lms.teknologidigital.co.id/login');
    cy.get('input[type="email"]').type('hesgiag@gmail.com');
    cy.get('input[type="password"]').type('monokuma');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/panel');
  });

  const openManajemenKelas = () => {
    cy.contains('Manajemen Kelas', { timeout: 10000 }).should('be.visible').click();
    cy.url().should('include', '/panel/course-types');
  };

  //#TC-MK-ADM-03 Manajemen Kelas Admin > Daftar Tipe Kelas
  it('#TC-MK-01 Membuka Halaman Manajemen Kelas', () => {
    openManajemenKelas();
    cy.contains('Daftar Tipe Kelas').should('be.visible');
  });

  it('#TC-MK-02 Klik tombol +Tipe Kelas', () => {
    cy.contains('Manajemen Kelas').click();
    cy.contains('+ Tipe Kelas').click();
    cy.url().should('include', '/panel/course-types/create');
    cy.get('input[name="name"]').type('Kelas Marcella');
    cy.contains('Simpan').click();
    cy.contains('Tipe kelas berhasil ditambahkan', { timeout: 10000 }).should('be.visible');
  });

  it('#TC-MK-03 Menu Pencarian Nama (Search)', () => {
    openManajemenKelas();
    cy.get('input[name="search"]').type('Reguler');
    cy.contains('Reguler').should('be.visible');
  });

  it('#TC-MK-04 Cek tombol Aksi per baris', () => {
    openManajemenKelas();
    cy.get('tbody tr').each(($row) => {
      cy.wrap($row).within(() => {
        cy.get('a[href*="/panel/course-types/"]:not([href$="create"])').should('exist');
        cy.get('a[href$="/edit"]').should('exist');
      });
    });
  });

  it('#TC-MK-05 Klik Icon Delete pada tabel', () => {
    openManajemenKelas();
    cy.contains('Kelas Marcella').parents('tr').within(() => {
    cy.get('button.bg-red-500').click();
    });
    cy.contains('Are yo sure').should('exist').and('be.visible');
    cy.contains('OK').click();
    cy.get('table').should('not.contain', 'Kelas Marcella');
  });


  //#TC-MK-ADM-03 Manajemen Kelas Admin > Daftar Mata Pelajaran Tipe Kelas Khusus
  it('#TC-MK-06 Klik tombol icon "Mata" pada Kolom Aksi', () => {
    openManajemenKelas();
    cy.contains('Khusus').parents('tr').within(() => {
    cy.get('svg[data-icon="akar-icons:eye"]').parents('a').click(); 
    });
    cy.contains('Daftar Mata Pelajaran').should('be.visible');
  });

  it('#TC-MK-07 Lihat Daftar Mata Pelajaran Khusus', () => {
    openManajemenKelas();
    cy.contains('Khusus').parents('tr').within(() => {
    cy.get('svg[data-icon="akar-icons:eye"]').parents('a').click(); 
    });

    const mataPelajaran = [
      'Drawing Sunset', 'Corel Draw', 'Manga Studio', 'Paint tool SAI', 'autoCAD',
      'Macromedia Freehand', 'Adobe Photoshop', 'Adobe Ilustrator', 'ABK class',
      'Holiday class', 'Porto class', 'Painting/canvas', 'Caricature', 'Drawing sketch'
    ];
    mataPelajaran.forEach((nama) => {
      cy.contains(nama).should('be.visible');
    });
  });

  it('#TC-MK-08 Klik tombol +Mata Pelajaran', () => {
    openManajemenKelas();
    cy.contains('Khusus').parents('tr').within(() => {
    cy.get('svg[data-icon="akar-icons:eye"]').parents('a').click(); 
    });
    
    cy.contains('+ Mata Pelajaran').click();
    cy.url().should('include', '/panel/course-types/2/courses/create'); 
    cy.get('input[name="name"]').type('Digital Art Basics');
    cy.contains('Simpan').click();
    cy.contains('Mata Pelajaran berhasil ditambahkan').should('be.visible');
  });

  it('#TC-MK-09 Kolom Menu Pencarian (Search)', () => {
    openManajemenKelas();
    cy.contains('Khusus').parents('tr').within(() => {
    cy.get('svg[data-icon="akar-icons:eye"]').parents('a').click(); 
    });
    
    cy.get('input[placeholder="Cari nama..."]').type('Corel Draw');
    cy.get('table').should('contain', 'Corel Draw');
  });

  it('#TC-MK-10 Klik tombol icon "Mata" pada Kolom Aksi di Daftar Mata Pelajaran Khusus', () => {
    openManajemenKelas();
    cy.contains('Khusus').parents('tr').within(() => {
    cy.get('svg[data-icon="akar-icons:eye"]').parents('a').click(); 
    });

    cy.contains('Corel Draw').parents('tr').within(() => {
    cy.get('svg[data-icon="akar-icons:eye"]').parents('a').click(); 
    });

    cy.contains('Marcella').should('be.visible');
    cy.contains('Corel Draw').should('be.visible');
  });

  it('#TC-MK-11 Cek tombol di tabel Aksi per baris', () => {
  openManajemenKelas();
  cy.contains('Khusus').parents('tr').within(() => {
  cy.get('svg[data-icon="akar-icons:eye"]').parents('a').click(); 
  });

  cy.contains('Corel Draw').parents('tr').within(() => {
  cy.get('svg[data-icon="akar-icons:eye"]').parents('a').click(); 
  });

  cy.get('tbody tr').each(($row) => {
  cy.wrap($row).within(() => {
      cy.get('svg[data-icon="akar-icons:eye"]').should('exist');
      cy.get('svg[data-icon="bx:bx-edit"]').should('exist');
      cy.get('svg[data-icon="cil:trash"]').should('exist');
    });
  });
});

  it('#TC-MK-12 Klik tombol +Kelas', () => {
  openManajemenKelas();
  cy.contains('Khusus').parents('tr').within(() => {
  cy.get('svg[data-icon="akar-icons:eye"]').parents('a').click();
    });

  cy.contains('Corel Draw').parents('tr').within(() => {
  cy.get('svg[data-icon="akar-icons:eye"]').parents('a').click();
    });

  cy.contains('+ Kelas').click();
  cy.url().should('include', '/panel/courses/17/classes/create');

  cy.get('input[name="name"]').type('Kelas Baru');
  cy.get('.choices').eq(0).click();
  cy.get('.choices__list--dropdown')
  .contains('lula02@example.org (Laurie Kessler)').click();
  cy.get('input[name="start_date"]').clear().type('2025-06-20');
  cy.get('input[name="end_date"]').clear().type('2025-07-20');
  cy.get('select[name="status"]').select('Belum aktif');
  cy.get('.choices').eq(1).click();
  cy.get('.choices__list--dropdown')
  .contains('pacocha.bette@example.com').click();

  cy.contains('Simpan').click();

  cy.contains('Kelas berhasil ditambahkan').should('be.visible');
});

it('#TC-MK-13 Kolom Menu Pencarian (Search)', () => {
  openManajemenKelas();
  cy.contains('Khusus').parents('tr').within(() => {
    cy.get('svg[data-icon="akar-icons:eye"]').parents('a').click();
  });

  cy.get('input[placeholder="Cari nama..."]').type('Corel Draw');
  cy.get('table').should('contain', 'Corel Draw');
});

it('#TC-MK-14 Klik tombol icon "Pensil" untuk edit Kelas', () => {
  openManajemenKelas();
  cy.contains('Khusus').parents('tr').within(() => {
    cy.get('svg[data-icon="akar-icons:eye"]').parents('a').click();
  });

  cy.contains('Corel Draw').parents('tr').within(() => {
    cy.get('svg[data-icon="akar-icons:eye"]').click();
  });

    cy.contains('Marcella').parents('tr').within(() => {
    cy.get('a[href*="/panel/classes/edit/19"]').click();
  });

  cy.get('input[name="name"]').clear().type('Marcella X');
  cy.contains('Simpan').click();

  cy.contains('Kelas berhasil ditambahkan.').should('be.visible');
});

it('#TC-MK-15 Klik tombol icon "Pensil" untuk edit Nama Mata Pelajaran', () => {
  openManajemenKelas();
  cy.contains('Khusus').parents('tr').within(() => {
    cy.get('svg[data-icon="akar-icons:eye"]').parents('a').click();
  });

  cy.contains('autoCAD').parents('tr').within(() => {
    cy.get('svg[data-icon="bx:bx-edit"]').parents('a').click();
  });

  cy.get('input[name="name"]').clear().type('autoCAD Y');
  cy.contains('Simpan').click();

  cy.contains('Mata Pelajaran berhasil diperbarui').should('be.visible');
});

it('#TC-MK-16 Klik tombol icon "Mata" pada Kolom Aksi Khusus', () => {
  openManajemenKelas();
  cy.contains('Khusus').parents('tr').within(() => {
    cy.get('svg[data-icon="akar-icons:eye"]').parents('a').click(); 
  });

  cy.contains('Corel Draw').parents('tr').within(() => {
    cy.get('svg[data-icon="akar-icons:eye"]').parents('a').click(); 
  });

  cy.contains('Corel Draw A').parents('tr').within(() => {
    cy.get('svg[data-icon="akar-icons:eye"]').parents('a').click(); 
  });

   const detailKelasCorelDraw = [
  'Informasi Murid',
  'Informasi Kelas',
  'Informasi Guru Pengajar'
];

  detailKelasCorelDraw.forEach((nama) => {
  cy.contains(nama).should('be.visible');
});
});

 it('#TC-MK-17 Klik tombol Delete pada kolom Aksi', () => {
    openManajemenKelas();
    cy.contains('Khusus').parents('tr').within(() => {
      cy.get('a').find('svg[data-icon="akar-icons:eye"]').click();
    });

    cy.contains('Corel Draw').parents('tr').within(() => {
      cy.get('a').find('svg[data-icon="akar-icons:eye"]').click();
    });

    cy.contains('Corel Draw A').parents('tr').within(() => {
      cy.get('svg[data-icon="cil:trash"]').click({ force: true });
    });

    cy.contains('Are you sure').should('be.visible');
    cy.contains('OK').click();
    cy.get('table').should('not.contain', 'Corel Draw');
  });

  it('#TC-MK-18 Edit data mata pelajaran', () => {
    openManajemenKelas();
    cy.contains('Khusus').parents('tr').within(() => {
      cy.get('a').find('svg[data-icon="akar-icons:eye"]').click();
    });

    cy.contains('autoCAD Y').parents('tr').within(() => {
      cy.get('svg[data-icon="bx:bx-edit"]').parents('a').click();
    });

    cy.get('input[name="name"]').clear().type('autoCAD Book');
    cy.contains('Simpan').click();
    cy.contains('Mata Pelajaran berhasil diperbarui.').should('be.visible');
    cy.contains('autoCAD Book').should('exist');
  });

  it('#TC-MK-19 Edit nama tipe kelas Khusus', () => {
    openManajemenKelas();

    cy.contains('Khusus').parents('tr').within(() => {
      cy.get('a[href$="/edit"]').click();
    });

    cy.get('input[name="name"]').clear().type('Khusus Baru');
    cy.contains('Simpan').click();
    cy.contains('Tipe kelas berhasil diperbarui').should('be.visible');
    cy.contains('Khusus Baru').should('exist');
  });

// #TC-MK-ADM-03 Manajemen Kelas Admin > Daftar Mata Pelajaran Tipe Kelas Reguler
 it('#TC-MK-20 Membuka Halaman Manajemen Kelas (Reguler)', () => {
    openManajemenKelas();
    cy.contains('Daftar Tipe Kelas').should('be.visible');
  });

  it('#TC-MK-21 Menambah +Mata Pelajaran Reguler', () => {
    openManajemenKelas();
    cy.contains('Reguler').parents('tr').within(() => {
      cy.get('a').find('svg[data-icon="akar-icons:eye"]').click();
    });

    cy.contains('+ Mata Pelajaran').click();
    cy.url().should('include', '/panel/course-types/1/courses/create');
    cy.get('input[name="name"]').type('Drawing for Kids');
    cy.contains('Simpan').click();
    cy.contains('Mata Pelajaran berhasil ditambahkan.').should('be.visible');
  });

  it('#TC-MK-22 Menu pencarian nama (search) tipe kelas', () => {
    openManajemenKelas();
    cy.get('input[name="search"]').type('Reguler');
    cy.contains('Reguler').should('be.visible');
  });

  it('#TC-MK-23 Klik Icon Delete pada salah satu data tabel di kolom Aksi', () => {
    openManajemenKelas();
    cy.contains('Reguler').parents('tr').within(() => {
      cy.get('a').find('svg[data-icon="akar-icons:eye"]').click();
    });

    cy.contains('Drawing for Kids').parents('tr').within(() => {
      cy.get('svg[data-icon="cil:trash"]').click({ force: true });
    });
    cy.contains('Are you sure').should('be.visible');
    cy.contains('OK').click();
    cy.get('table').should('not.contain', 'Drawing for Kids');
  });

  it('#TC-MK-24 Cek tombol di tabel Aksi per baris (Reguler)', () => {
    openManajemenKelas();
    cy.get('tbody tr').each(($row) => {
      cy.wrap($row).within(() => {
        cy.get('a[href$="/edit"]').should('exist');
        cy.get('a[href*="/panel/course-types/"]').should('exist');
      });
    });
  });

  it('#TC-MK-25 Mengubah Mata Pelajaran dalam Tipe Kelas Reguler', () => {
    openManajemenKelas();
    cy.contains('Reguler').parents('tr').within(() => {
      cy.get('a').find('svg[data-icon="akar-icons:eye"]').click();
    });

    cy.contains('Basic Drawing').parents('tr').within(() => {
      cy.get('svg[data-icon="bx:bx-edit"]').parents('a, button').click({ force: true });
    });

    cy.get('input[name="name"]').clear().type('Basic Drawing Y');
    cy.contains('Simpan').click();
    cy.contains('Mata Pelajaran berhasil diperbarui.').should('be.visible');
  });

  it('#TC-MK-26 Edit nama tipe kelas Reguler', () => {
    openManajemenKelas();
    cy.contains('Reguler').parents('tr').within(() => {
      cy.get('a[href$="/edit"]').click();
    });

    cy.get('input[name="name"]').clear().type('Reguler r');
    cy.contains('Simpan').click();
    cy.contains('Tipe kelas berhasil diperbarui').should('be.visible');
  });
});