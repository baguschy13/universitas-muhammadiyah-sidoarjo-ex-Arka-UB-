describe('Pengujian Formulir Pendaftaran', () => {
    before(() => {
      cy.visit(https://alkautsar.ponpes.id/registrations/form/) // Ganti dengan URL formulir pendaftaran
    });
  
    it('Memverifikasi elemen-elemen formulir', () => {
      cy.get('input[name="nama_lengkap"]').should('exist');
      cy.get('select[name="jalur_pendaftaran"]').should('exist');
      cy.get('input[name="jenis_kelamin"]').should('exist');
      cy.get('select[name="pendidikan_terakhir"]').should('exist');
      cy.get('input[name="nomor_whatsapp"]').should('exist');
      cy.get('input[name="email"]').should('exist');
      cy.get('select[name="kecamatan"]').should('exist');
      cy.get('textarea[name="alamat"]').should('exist');
      cy.get('select[name="darimana_tahu"]').should('exist');
      cy.get('button[type="submit"]').should('exist');
    });
  
    it('Mengisi formulir dengan data valid', () => {
      cy.get('input[name="nama_lengkap"]').type('Moch Bagus Tri Cahyo');
      cy.get('select[name="jalur_pendaftaran"]').select('Leguler');
      cy.get('input[name="jenis_kelamin"][value="Laki-laki"]').check();
      cy.get('select[name="pendidikan_terakhir"]').select('S1');
      cy.get('input[name="nomor_whatsapp"]').type('08123456789');
      cy.get('input[name="email"]').type('baguschy13@gmail.com');
      cy.get('select[name="kecamatan"]').select('Candi, Sidoarjo, Jawa Timur');
      cy.get('textarea[name="alamat"]').type('Jl. Contoh No. 123, Kota');
      cy.get('select[name="darimana_tahu"]').select('Internet');
    });
  
    it('Mengirimkan formulir dan memverifikasi respons', () => {
      cy.get('button[type="submit"]').click();
      cy.get('.success-message').should('contain', 'Formulir berhasil dikirim');
    });
  
    it('Memverifikasi validasi data', () => {
      cy.get('input[name="nama_lengkap"]').clear();
      cy.get('button[type="submit"]').click();
      cy.get('.error-message').should('contain', 'Nama Lengkap harus diisi');
    });
  });
  
