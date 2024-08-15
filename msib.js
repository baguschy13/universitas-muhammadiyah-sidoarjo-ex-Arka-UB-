// cypress/integration/registration_form_spec.js

describe('Pengujian Formulir Pendaftaran', () => {
    before(() => {
      cy.visit('URL_ALAMAT_FORMULIR') // Ganti dengan URL formulir pendaftaran
    });
  
    it('Memverifikasi elemen-elemen formulir', () => {
      // Memverifikasi bahwa elemen-elemen formulir ada
      cy.get('input[name="nama_lengkap"]').should('exist');
      cy.get('select[name="jalur_pendaftaran"]').should('exist');
      cy.get('input[name="jenis_kelamin"]').should('exist'); // Asumsi radio buttons dengan nama 'jenis_kelamin'
      cy.get('select[name="pendidikan_terakhir"]').should('exist');
      cy.get('input[name="nomor_whatsapp"]').should('exist');
      cy.get('input[name="email"]').should('exist');
      cy.get('select[name="kecamatan"]').should('exist');
      cy.get('textarea[name="alamat"]').should('exist'); // Asumsi textarea untuk alamat
      cy.get('select[name="darimana_tahu"]').should('exist'); // Asumsi dropdown untuk 'Darimana Kamu tahu'
      cy.get('button[type="submit"]').should('exist'); // Tombol submit
    });
  
    it('Mengisi formulir dengan data valid', () => {
      cy.get('input[name="nama_lengkap"]').type('Moch Bagus Tri Cahyo'); // Isi nama lengkap
      cy.get('select[name="jalur_pendaftaran"]').select('Leguler'); // Pilih opsi Leguler
      cy.get('input[name="jenis_kelamin"][value="Laki-laki"]').check(); // Atau value="Perempuan" jika diperlukan
      cy.get('select[name="pendidikan_terakhir"]').select('S1'); // Pilih opsi S1
      cy.get('input[name="nomor_whatsapp"]').type('08123456789');
      cy.get('input[name="email"]').type('baguschy13@gmail.com'); // Isi email dengan baguschy13@gmail.com
      cy.get('select[name="kecamatan"]').select('Candi, Sidoarjo, Jawa Timur'); // Pilih opsi Kecamatan
      cy.get('textarea[name="alamat"]').type('Jl. Contoh No. 123, Kota');
      cy.get('select[name="darimana_tahu"]').select('iklan'); // Ganti dengan nilai yang sesuai
    });
  
    it('Mengirimkan formulir dan memverifikasi respons', () => {
      cy.get('button[type="submit"]').click();
      
      // Memverifikasi apakah formulir berhasil dikirim atau tampilan hasil
      // Misalnya, memverifikasi apakah ada pesan sukses
      cy.get('.success-message').should('contain', 'Formulir berhasil dikirim'); // Ganti dengan selector dan pesan yang sesuai
    });
  
    it('Memverifikasi validasi data', () => {
      // Contoh pengujian untuk validasi jika ada input yang diperlukan
      cy.get('input[name="nama_lengkap"]').clear(); // Kosongkan field
      cy.get('button[type="submit"]').click();
      cy.get('.error-message').should('contain', 'Nama Lengkap harus diisi'); // Ganti dengan selector dan pesan yang sesuai
    });
  });
  