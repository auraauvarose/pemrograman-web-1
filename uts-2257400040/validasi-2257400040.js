/* ============================================================
   UTS Pemrograman Web I - Kelas A1
   Nama : R. Aura Auvarose Endica Saebani
   NIM  : 2257400040
   Soal 4 : Validasi Formulir Pendaftaran Seminar (JavaScript)
   ------------------------------------------------------------
   Validasi dijalankan saat tombol "Daftar" ditekan, yaitu saat
   event submit pada form terjadi.
   ============================================================ */

// Tunggu sampai seluruh dokumen selesai dimuat
document.addEventListener("DOMContentLoaded", function () {

  // ---------- Ambil elemen yang dibutuhkan ----------
  var form        = document.getElementById("formSeminar");
  var kotakPesan  = document.getElementById("kotakPesan");

  var inputNama   = document.getElementById("nama");
  var inputNim    = document.getElementById("nim");
  var inputEmail  = document.getElementById("email");
  var inputTelp   = document.getElementById("telepon");
  var inputUsia   = document.getElementById("usia");
  var selectProdi = document.getElementById("prodi");
  var radioJk     = document.getElementsByName("jenis_kelamin");

  // ---------- Helper: tampilkan pesan keseluruhan ----------
  function tampilkanPesan(teks, tipe, daftar) {
    kotakPesan.hidden = false;
    kotakPesan.className = "kotak-pesan " + tipe;
    kotakPesan.innerHTML = "";

    var p = document.createElement("p");
    p.style.margin = "0";
    p.textContent = teks;
    kotakPesan.appendChild(p);

    // kalau ada daftar kesalahan, tampilkan sebagai <ul>
    if (daftar && daftar.length > 0) {
      var ul = document.createElement("ul");
      for (var i = 0; i < daftar.length; i++) {
        var li = document.createElement("li");
        li.textContent = daftar[i];
        ul.appendChild(li);
      }
      kotakPesan.appendChild(ul);
    }
  }

  function sembunyikanPesan() {
    kotakPesan.hidden = true;
    kotakPesan.className = "kotak-pesan";
    kotakPesan.innerHTML = "";
  }

  // ---------- Helper: tandai satu baris salah / benar ----------
  function setGalat(input, pesan) {
    // cari elemen .baris terdekat dari input
    var baris = input.closest(".baris");
    if (!baris) return;

    var labelGalat = baris.querySelector(".pesan-galat");

    if (pesan) {
      baris.classList.add("salah");
      if (labelGalat) labelGalat.textContent = pesan;
    } else {
      baris.classList.remove("salah");
      if (labelGalat) labelGalat.textContent = "";
    }
  }

  // ---------- Helper: ambil nilai radio yang dipilih ----------
  function nilaiRadio(nama) {
    for (var i = 0; i < nama.length; i++) {
      if (nama[i].checked) return nama[i].value;
    }
    return "";
  }

  // ---------- Helper: cek format email ----------
  function emailValid(email) {
    // pola sederhana: ada teks, @, domain, titik, dan TLD
    var pola = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return pola.test(email);
  }

  // ============================================================
  //  EVENT SUBMIT  ->  jalankan validasi
  // ============================================================
  form.addEventListener("submit", function (event) {

    var daftarGalat = [];   // kumpulan pesan untuk kotak pesan
    var adaGalat    = false;

    // ---------- a. Nama lengkap ----------
    var nama = inputNama.value.trim();
    if (nama === "") {
      setGalat(inputNama, "Nama lengkap harus diisi.");
      daftarGalat.push("Nama lengkap harus diisi.");
      adaGalat = true;
    } else {
      setGalat(inputNama, "");
    }

    // ---------- b. NIM : wajib diisi & hanya angka ----------
    var nim = inputNim.value.trim();
    if (nim === "" || !/^[0-9]+$/.test(nim)) {
      setGalat(inputNim, "NIM harus diisi dengan angka yang benar.");
      daftarGalat.push("NIM harus diisi dengan angka yang benar.");
      adaGalat = true;
    } else {
      setGalat(inputNim, "");
    }

    // ---------- c. Email : harus sesuai format ----------
    var email = inputEmail.value.trim();
    if (email === "" || !emailValid(email)) {
      setGalat(inputEmail, "Alamat email tidak valid.");
      daftarGalat.push("Alamat email tidak valid.");
      adaGalat = true;
    } else {
      setGalat(inputEmail, "");
    }

    // ---------- d. Nomor telepon : wajib diisi ----------
    var telepon = inputTelp.value.trim();
    if (telepon === "") {
      setGalat(inputTelp, "Nomor telepon harus diisi.");
      daftarGalat.push("Nomor telepon harus diisi.");
      adaGalat = true;
    } else {
      setGalat(inputTelp, "");
    }

    // ---------- e. Program studi : wajib dipilih ----------
    if (selectProdi.value === "") {
      setGalat(selectProdi, "Silakan pilih program studi.");
      daftarGalat.push("Silakan pilih program studi.");
      adaGalat = true;
    } else {
      setGalat(selectProdi, "");
    }

    // ---------- Jenis kelamin : wajib dipilih ----------
    if (nilaiRadio(radioJk) === "") {
      setGalat(radioJk[0], "Silakan pilih jenis kelamin.");
      daftarGalat.push("Silakan pilih jenis kelamin.");
      adaGalat = true;
    } else {
      setGalat(radioJk[0], "");
    }

    // ---------- Usia : hanya untuk pemeriksaan < 17 tahun ----------
    setGalat(inputUsia, "");

    // ============================================================
    //  JIKA ADA KESALAHAN -> batalkan pengiriman form
    // ============================================================
    if (adaGalat) {
      // event.preventDefault() mencegah form benar-benar dikirim
      event.preventDefault();

      tampilkanPesan("Validasi gagal. Perbaiki data berikut:", "galat", daftarGalat);

      // fokuskan ke input pertama yang salah
      var barisSalah = form.querySelector(".baris.salah input, .baris.salah select, .baris.salah textarea");
      if (barisSalah) barisSalah.focus();

      return;
    }

    // ============================================================
    //  g. USIA DI BAWAH 17 TAHUN -> minta konfirmasi
    // ============================================================
    var usia = inputUsia.value.trim();
    var usiaMuda = (usia !== "" && Number(usia) < 17);

    if (usiaMuda) {
      // tampilkan pesan peringatan di halaman
      tampilkanPesan("Apakah anda yakin? Usia anda masih 17 tahun.", "peringatan", null);

      // sekaligus minta konfirmasi ke pengguna
      var yakin = window.confirm("Apakah anda yakin? Usia anda masih 17 tahun.");

      if (!yakin) {
        // batal -> form tidak dikirim, pesan peringatan tetap tampil
        event.preventDefault();
        return;
      }
    }

    // ============================================================
    //  f. SEMUA VALID -> tampilkan pesan berhasil
    // ============================================================
    if (usiaMuda) {
      // pesan peringatan usia tetap ditampilkan bersama pesan berhasil
      tampilkanPesan("Validasi berhasil. Data siap dikirim.", "sukses",
        ["Apakah anda yakin? Usia anda masih 17 tahun."]);
    } else {
      tampilkanPesan("Validasi berhasil. Data siap dikirim.", "sukses", null);
    }

    // Catatan: formulir ini TIDAK terhubung ke database.
    // Karena itu pengiriman ke server dibatalkan agar halaman
    // tidak berpindah dan pesan berhasil tetap terlihat.
    event.preventDefault();
  });

  // ---------- Reset : bersihkan semua tanda galat & pesan ----------
  form.addEventListener("reset", function () {
    var semuaBaris = form.querySelectorAll(".baris");
    for (var i = 0; i < semuaBaris.length; i++) {
      semuaBaris[i].classList.remove("salah");
      var lg = semuaBaris[i].querySelector(".pesan-galat");
      if (lg) lg.textContent = "";
    }
    sembunyikanPesan();
  });

});
