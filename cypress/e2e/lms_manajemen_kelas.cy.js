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
    openManajemenKelas();
    cy.get('a[href*="/course-types/create"]').click();
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
    cy.contains('Are you sure').should('be.visible');
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

  cy.contains('Corel Draw A').parents('tr').within(() => {
  cy.get('svg[data-icon="akar-icons:eye"]').parents('a').click(); 
  });

  cy.get('tbody tr').each(($row) => {
  cy.wrap($row).within(() => {
  cy.get('svg[data-icon="akar-icons:eye"]').parents('a').click(); 
  cy.get('a').has('svg[data-icon="akar-icons:pencil"]').should('exist');
  cy.get('button').has('svg[data-icon="akar-icons:trash-can"]').should('exist');
    });
  });
});

  it('#TC-MK-12 Klik tombol +Kelas', () => {
  openManajemenKelas();
  cy.contains('Khusus').parents('tr').within(() => {
  cy.get('svg[data-icon="akar-icons:eye"]').parents('a').click();
    });

  cy.contains('Corel Draw A').parents('tr').within(() => {
  cy.get('svg[data-icon="akar-icons:eye"]').parents('a').click();
    });

  cy.contains('+ Kelas').click();
  cy.url().should('include', '/panel/courses/17/classes/create');

  cy.get('input[name="name"]').type('Kelas Baru');
  cy.get('select[name="Pilih Guru"]').select('frami.blanche@example.net');
  cy.get('input[name="start_date"]').type('20/06/2025');
  cy.get('input[name="end_date"]').type('20/07/2025');
  cy.get('select[name="status"]').select('Belum Aktif');
  cy.get('select[name="Pilih Murid"]').select('lotusmahaesa@gmail.com');

  cy.contains('Simpan').click();

  cy.contains('Kelas berhasil ditambahkan').should('be.visible');
});

it('#TC-MK-ADM-13 Kolom Menu Pencarian (Search)', () => {
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

  cy.contains('Corel Draw A').parents('tr').within(() => {
    cy.get('a').has('svg[data-icon="akar-icons:pencil"]').click();
  });

  cy.get('input[name="name"]').clear().type('Corel Draw X');
  cy.contains('Simpan').click();

  cy.contains('Mata Pelajaran berhasil diperbarui').should('be.visible');
});

it('#TC-MK-15 Klik tombol icon "Pensil" untuk edit Nama Mata Pelajaran', () => {
  openManajemenKelas();
  cy.contains('Khusus').parents('tr').within(() => {
    cy.get('svg[data-icon="akar-icons:eye"]').parents('a').click();
  });

  cy.contains('Corel Draw A').parents('tr').within(() => {
  cy.get('svg[data-icon="akar-icons:eye"]').parents('a').click();
  });

  cy.contains('Corel Draw').parents('tr').within(() => {
    cy.get('a').has('svg[data-icon="akar-icons:pencil"]').click();
  });

  cy.get('input[name="name"]').clear().type('Corel Draw S');
  cy.contains('Simpan').click();

  cy.contains('Mata Pelajaran berhasil diperbarui').should('be.visible');
  cy.get('table').should('contain', 'Corel Draw S');
});

it('#TC-MK-16 Klik tombol icon "Mata" pada Kolom Aksi Khusus', () => {
  openManajemenKelas();
  cy.contains('Khusus').parents('tr').within(() => {
    cy.get('svg[data-icon="akar-icons:eye"]').parents('a').click(); 
  });

  cy.contains('Corel Draw').parents('tr').within(() => {
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

it('#TC-MK-17 Klik tombol Delete pada kolom Aksi', () => {
  openManajemenKelas();
  cy.contains('Khusus').parents('tr').within(() => {
    cy.get('svg[data-icon="akar-icons:eye"]').parents('a').click(); 
  });

  cy.contains('Corel Draw A').parents('tr').within(() => {
    cy.get('svg[data-icon="akar-icons:eye"]').parents('a').click(); 
  });

  cy.contains('Corel Draw').parents('tr').within(() => {
    cy.get('svg[data-icon="akar-icons:trash-can"]').parents('button').click();
  });

  cy.contains('Are you sure').should('be.visible');
  cy.contains('OK').click();
  cy.get('table').should('not.contain', 'Corel Draw');
});

it('#TC-MK-18 Edit data mata pelajaran', () => {
  openManajemenKelas();
  cy.contains('Khusus').parents('tr').within(() => {
    cy.get('svg[data-icon="akar-icons:eye"]').parents('a').click(); 
  });

  cy.contains('autoCAD').parents('tr').within(() => {
    cy.get('svg[data-icon="akar-icons:pencil"]').parents('a').click();
  });

  cy.get('input[name="name"]').clear().type('autoCAD Book');
  cy.contains('Simpan').click();
  cy.contains('Kelas berhasil ditambahkan').should('be.visible');
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
it('#TC-MK-20 Membuka Halaman Manajemen Kelas', () => {
  openManajemenKelas();
  cy.contains('Daftar Tipe Kelas').should('be.visible');
});

it('#TC-MK-21 Menambah +Mata Pelajaran Reguler', () => {
    openManajemenKelas();
    cy.contains('Reguler').parents('tr').within(() => {
    cy.get('svg[data-icon="akar-icons:eye"]').parents('a').click(); 
    });
    
    cy.contains('+ Mata Pelajaran').click();
    cy.url().should('include', '/panel/course-types/1/courses/create'); 
    cy.get('input[name="name"]').type('Drawing for Kids');
    cy.contains('Simpan').click();
    cy.contains('Mata Pelajaran berhasil ditambahkan').should('be.visible');
  });

it('#TC-MK-22 Menu pencarian nama (search)', () => {
  openManajemenKelas();
  cy.get('input[name="search"]').type('Reguler');
  cy.contains('Reguler').should('be.visible');
});

it('#TC-MK-23 Klik Icon Delete pada salah satu data tabel di kolom Aksi', () => {
  openManajemenKelas();
  cy.contains('Reguler').parents('tr').within(() => {
    cy.get('button.bg-red-500').click();
  });
  cy.contains('Are you sure').should('be.visible');
  cy.contains('OK').click();
  cy.get('table').should('not.contain', 'Drawing for Kids');
});

it('#TC-MK-24 Cek tombol di tabel Aksi per baris', () => {
  openManajemenKelas();
  cy.get('tbody tr').each(($row) => {
    cy.wrap($row).within(() => {
      cy.get('a[href$="/edit"]').should('exist'); 
      cy.get('a[href*="/panel/course-types/"]').should('exist'); 
    });
  });
});

it('#TC-MK-25 Mengubah Tipe Kelas Reguler', () => {
  openManajemenKelas();
  cy.contains('Reguler r').parents('tr').within(() => {
  cy.contains('Basic Drawing').parents('tr').within(() => {
  cy.get('a[href$="/edit"]').click();
  });

  cy.get('input[name="name"]').clear().type('Corel Draw Updated');
  cy.contains('Simpan').click();
  cy.contains('Tipe kelas berhasil diperbarui').should('be.visible');
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

});
});
