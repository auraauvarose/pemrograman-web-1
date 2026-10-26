/* Soal 4 - validasi-2257400040.js
   Nama: R. Aura Auvarose Endica Saebani
   NIM : 2257400040

   Validasi dijalankan saat form dikirim (event submit). */

// ambil elemen yang dibutuhkan
var form = document.getElementById("formSeminar");
var pesan = document.getElementById("pesan");

// jalankan validasi saat form dikirim
form.addEventListener("submit", function (event) {

  // tampung semua pesan kesalahan
  var salah = [];

  // ambil nilai input
  var nama = document.getElementById("nama").value;
  var nim = document.getElementById("nim").value;
  var email = document.getElementById("email").value;
  var telepon = document.getElementById("telepon").value;
  var usia = document.getElementById("usia").value;
  var prodi = document.getElementById("prodi").value;

  // a. nama lengkap belum diisi
  if (nama === "") {
    salah.push("Nama lengkap harus diisi.");
  }

  // b. NIM belum diisi atau bukan angka
  if (nim === "" || isNaN(nim)) {
    salah.push("NIM harus diisi dengan angka yang benar.");
  }

  // c. email tidak sesuai format
  if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
    salah.push("Alamat email tidak valid.");
  }

  // d. nomor telepon belum diisi
  if (telepon === "") {
    salah.push("Nomor telepon harus diisi.");
  }

  // e. program studi belum dipilih
  if (prodi === "") {
    salah.push("Silakan pilih program studi.");
  }

  // kalau ada kesalahan, tampilkan dan batalkan pengiriman form
  if (salah.length > 0) {
    event.preventDefault();
    pesan.className = "salah";
    pesan.innerHTML = salah.join("<br>");
    return;
  }

  // g. usia di bawah 17 tahun
  if (usia !== "" && usia < 17) {
    var yakin = confirm("Apakah anda yakin? Usia anda masih 17 tahun.");
    if (!yakin) {
      event.preventDefault();
      return;
    }
  }

  // f. semua input sudah benar
  event.preventDefault();
  pesan.className = "berhasil";
  pesan.innerHTML = "Validasi berhasil. Data siap dikirim.";
});
