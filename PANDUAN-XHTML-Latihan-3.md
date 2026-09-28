# 📙 Panduan Belajar XHTML — Latihan 3

**Untuk:** R. Aura Auvarose Endica Saebani — NIM 2257400040
**Mata kuliah:** Pemrograman Web 1
**Tema:** *Working with Forms* (Bekerja dengan Formulir)

---

## 🎯 Cara Pakai Panduan Ini

- Kerjakan **berurutan**. Tiap langkah bergantung pada langkah sebelumnya.
- Di setiap langkah ada **✅ Cek Sendiri** — buka file di browser sebelum lanjut.
- Bagian **[KERJAKAN SENDIRI]** sengaja tidak saya isikan penuh — supaya Anda yang mengetik dan paham.
- Di bagian paling bawah ada **🔑 KUNCI JAWABAN**. **Jangan dibuka dulu** sebelum Anda mencoba sendiri.

---

## 🧠 Pahami Dulu: Apa Itu FORM?

Ini konsep paling penting di Latihan 3. Kalau Anda paham ini, sisanya cuma latihan mengetik.

### Masalah yang diselesaikan form

Latihan 1 & 2 bikin halaman yang **hanya bisa dibaca**. Pengunjung tidak bisa mengirim apa pun.

**Form** = cara XHTML membuat halaman yang bisa **mengirim data dari pengunjung ke server.**

Contoh nyata: form login, form pendaftaran, form checkout, form reservasi hotel. Semuanya form.

### Alur kerjanya (penting!)

```
Pengunjung mengisi form
        ↓
Klik tombol "Simpan"
        ↓
Browser mengumpulkan semua isian jadi satu paket teks
        ↓
Dikirim ke server (alamatnya dari atribut action)
        ↓
Server memproses
```

Di tugas ini `action=""` (kosong) — artinya **tidak ada server**. Jadi kalau Anda klik "Simpan", halaman cuma akan me-refresh diri sendiri. **Itu wajar dan benar** — dosen hanya ingin Anda bisa membuat tampilannya, bukan membuat servernya.

### 🎯 Konsep kunci: `name` vs `value`

**Inilah inti semua form.** Kalau Anda hanya ingat satu hal dari panduan ini, ingat yang ini.

Saat tombol submit diklik, browser mengirim data dalam bentuk:

```
name=value&name=value&name=value
```

Jadi **`name` = label/judul datanya**, dan **`value` = isinya**.

Contoh dari form yang akan Anda buat, kalau diisi lengkap:

```
nomhs=2257400040
&namamhs=Aura
&jk=Perempuan
&prodi=Teknik+Informatika
&musik=Pop
&musik=Rock
&resume=Saya+lulusan+SMU+1+Surakarta...
```

> 💡 **Perhatikan:** `musik` muncul **dua kali** (Pop dan Rock) karena checkbox boleh dipilih banyak. Tapi `jk` cuma muncul **sekali** karena radio hanya boleh pilih satu. Ini bukan kebetulan — ini aturan yang akan dijelaskan di bawah.

**Kalau sebuah input tidak punya `name`**, datanya **tidak akan terkirim sama sekali**. Input itu jadi hiasan saja. Ini kesalahan paling umum pemula.

### Aturan `name` untuk radio & checkbox

| Jenis | Aturan `name` | Akibatnya |
|---|---|---|
| **Radio** (pilih satu) | Semua pilihan dalam satu grup **harus `name` SAMA** | Browser paksa hanya 1 yang bisa aktif |
| **Checkbox** (pilih banyak) | Satu grup **pakai `name` SAMA**, beda `value` | Bisa dicentang banyak sekaligus |
| **Text / password / file** | `name` unik, satu-satu | — |

**Bukti di form Anda:**
```html
<input type="radio" name="jk" value="Laki-Laki" />Laki-Laki
<input type="radio" name="jk" value="Perempuan" />Perempuan
```
Kedua radio punya `name="jk"` **yang sama** → makanya Anda tidak bisa centang dua-duanya sekaligus. Kalau `name`-nya dibedakan, dua-duanya bisa aktif — dan itu **salah**, karena orang tidak mungkin laki-laki *dan* perempuan.

```html
<input type="checkbox" name="musik" value="Pop" />Pop
<input type="checkbox" name="musik" value="Rock" />Rock
<input type="checkbox" name="musik" value="Jazz" />Jazz
```
Ketiga checkbox punya `name="musik"` **yang sama** → boleh dicentang semua, dan semua terkirim.

### Daftar `<input type="...">` yang dipakai di latihan ini

| `type` | Tampilannya | Dipakai untuk |
|---|---|---|
| `text` | Kotak 1 baris | nama, email, telepon |
| `password` | Kotak, isinya jadi `●●●●` | password |
| `radio` | Bulatan ○ — pilih **satu** | jenis kelamin |
| `checkbox` | Kotak centang ☑ — pilih **banyak** | hal favorit |
| `file` | Tombol "Browse / Pilih File" | upload foto |
| `submit` | Tombol kirim | mengirim form |

Ada juga yang **bukan** `<input>`:

| Elemen | Tampilannya | Dipakai untuk |
|---|---|---|
| `<select>` + `<option>` | Dropdown menu | pilih program studi |
| `<textarea>` | Kotak besar banyak baris | resume |

> ⚠️ **Jangan tertukar:** `<textarea>` **bukan** `<input>`. Dia punya tag sendiri dan **wajib ditutup** dengan `</textarea>`. Isinya ditulis di antara tag buka dan tutup — bukan di atribut `value`.

### Rumus XHTML yang wajib diingat

Karena ini XHTML 1.0 Strict (bukan HTML5), berlaku aturan dari Latihan 1:

```html
<input type="text" name="x" size="30" />     ← ada "/" di akhir
<br />                                        ← ada "/" di akhir
<option selected="selected">                  ← atribut wajib punya nilai
```

Kalau Anda lupa `/`, validator W3C akan mengeluh.

---

## 🗺️ Peta Tugas: Ada 5 File yang Harus Jadi

Ini yang sering bikin bingung — soalnya tidak bilang "buat 5 file" secara eksplisit, tapi hasil akhirnya memang 5.

| # | Nama file | Isinya | Tingkat |
|---|---|---|---|
| 1 | `XHTML-basic.html` | Kerangka kosong + identitas | ✅ **sudah beres** |
| 2 | `XHTML-registration-form.html` | Formulir registrasi (heading + tabel + form) | Dipandu |
| 3 | `XHTML-registration-form-optgroup.html` | Sama, tapi dropdown prodi pakai `<optgroup>` | Dipandu |
| 4 | `XHTML-registration-form-accessible.html` | Sama, tapi pakai `<fieldset>` + `<label>` | **Unguided** |
| 5 | `XHTML-reservation-form.html` | Formulir reservasi hotel (buat sendiri) | **Unguided** |

**Alur kerjanya:**
```
XHTML-basic.html
      ↓ Save As
XHTML-registration-form.html
      ↓ Save As                    ↓ Save As
XHTML-registration-form-        XHTML-registration-form-
     optgroup.html                    accessible.html

XHTML-basic.html
      ↓ Save As
XHTML-reservation-form.html
```

Persis seperti Latihan 1 & 2: **satu file yang di-Save As terus**, bukan bikin dari nol tiap kali.

> 📌 **Identitas sudah beres.** Saya sudah cek `latihan-3/XHTML-basic.html` — komentar identitasnya sudah terisi 4 nama kelompok Anda. Jadi Langkah Kerja nomor 3 di soal **sudah selesai**.

---

## 📄 Langkah 1 — Cek Folder & File Resource

**A. Pastikan folder `latihan-3` ada dan isinya benar:**

```bash
cd "/run/media/auraauvarose/Local Disk/Aura Auvarose/Project Belajar/pemograman web 1"
ls -la latihan-3/
```

Harus muncul:
```
Latihan 3.doc
XHTML-basic.html
```

**B. Kalau folder belum ada**, extract dari zip:

```bash
unzip latihan-3.zip
```

**C. Cek isi `XHTML-basic.html`:**

```bash
cat latihan-3/XHTML-basic.html
```

Isinya harus seperti ini:

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
	<head>
	  <meta http-equiv="content-type" content="text/html; charset=utf-8" />
	  <title>Advanced XHTML: Working with Forms</title>
	</head>
	<body>
		<!-- 
			Latihan 1: Introduction to XHTML
			Nama Mhs.: 
			1. R. Aura Auvarose Endica Saebani -  2257400040
			2. Eka Bogi S - 2257400042
			3. ⁠Muhammad Roy C.S - 2257400058
			4. Muhamad surya P - 2257400044
		-->

	</body>
</html>
```

> 💡 **Perhatikan `<title>`-nya:** sudah tertulis `Advanced XHTML: Working with Forms`. Soal meminta Anda "mengganti teks pada elemen title dengan Advanced XHTML: Working with Forms" — tapi file resource-nya **sudah benar dari sononya**. Jadi tidak perlu diapa-apakan, cukup dipastikan saja. (Sama seperti Latihan 2, di mana dosen lupa mengubah `title`.)

**✅ Cek sendiri:** buka `latihan-3/XHTML-basic.html` di browser. Yang muncul halaman **putih kosong** dengan judul di tab browser. Itu benar — form-nya belum ditambahkan.

---

## 📄 Langkah 2 — Buat `XHTML-registration-form.html`

### 2a. Save As dulu

Buka `latihan-3/XHTML-basic.html` dengan editor → **Save As** → nama **`XHTML-registration-form.html`** di folder `latihan-3/`.

### 2b. Sisipkan kode form

Di dalam `<body>`, **setelah komentar identitas** dan **sebelum `</body>`**, tambahkan:

```html
		<h1>Formulir Registrasi Data Mahasiswa</h1>

		<form action="" method="post">
			<table cellspacing="4" cellpadding="4">
				<tr>
					<td><strong>Nomor Mahasiswa</strong></td>
					<td><input type="text" name="nomhs" size="30" /></td>
				</tr>
				<tr>
					<td><strong>Nama Mahasiswa</strong></td>
					<td><input type="text" name="namamhs" size="30" /></td>
				</tr>
				<tr>
					<td><strong>Jenis Kelamin</strong></td>
					<td>
						<input type="radio" name="jk" value="Laki-Laki" />Laki-Laki
						<input type="radio" name="jk" value="Perempuan" />Perempuan
					</td>
				</tr>
				<tr>
					<td><strong>Program Studi</strong></td>
					<td>
						<select name="prodi">
							<option>Teknik Informatika</option>
							<option>Teknik Industri</option>
						</select>
					</td>
				</tr>
				<tr>
					<td><strong>Alamat Email</strong></td>
					<td><input type="text" name="email" size="30" /></td>
				</tr>
				<tr>
					<td><strong>Nomor Telepon</strong></td>
					<td><input type="text" name="telepon" size="30" /></td>
				</tr>
				<tr>
					<td><strong>Password</strong></td>
					<td><input type="password" name="password" size="30" /></td>
				</tr>
				<tr>
					<td><strong>Photo</strong></td>
					<td><input type="file" name="photo" size="18" accept="image/gif, image/jpeg, image/png" /></td>
				</tr>
				<tr>
					<td><strong>Nama Sekolah Asal (SMU)</strong></td>
					<td><input type="text" name="namasmu" size="30" /></td>
				</tr>
				<tr>
					<td><strong>Alamat Sekolah Asal (SMU)</strong></td>
					<td><input type="text" name="alamatsmu" size="30" /></td>
				</tr>
				<tr>
					<td><strong>Telepon Sekolah Asal (SMU)</strong></td>
					<td><input type="text" name="teleponsmu" size="30" /></td>
				</tr>
				<tr>
					<td valign="top"><p><strong>Hal Favorit</strong></p></td>
					<td>
						<p><strong>Musik</strong><br />
						<input type="checkbox" name="musik" value="Pop" />Pop
						<input type="checkbox" name="musik" value="Rock" />Rock
						<input type="checkbox" name="musik" value="Jazz" />Jazz</p>
						<p><strong>Film</strong><br />
						<input type="checkbox" name="film" value="Drama" />Drama
						<input type="checkbox" name="film" value="Action" />Action
						<input type="checkbox" name="film" value="Sci-Fi" />Sci-Fi</p>
						<p><strong>Makanan</strong><br />
						<input type="checkbox" name="makanan" value="Seafood" />Seafood
						<input type="checkbox" name="makanan" value="Tradisional" />Tradisional
						<input type="checkbox" name="makanan" value="Fastfood" />Fastfood</p>
					</td>
				</tr>
				<tr>
					<td valign="top"><strong>Resume</strong></td>
					<td><textarea name="resume" rows="10" cols="23"></textarea></td>
				</tr>
				<tr>
					<td colspan="2"><input type="submit" name="simpan" value="Simpan" /></td>
				</tr>
			</table>
		</form>
```

> ⚠️ **Saya perbaiki 1 typo dari soal.** Di `Latihan 3.doc` tertulis:
> ```html
> <textarea name="resume"rows="10" cols="23"></textarea>
>                          ↑ TIDAK ADA SPASI
> ```
> Di panduan ini saya tulis `name="resume" rows="10"` (pakai spasi). Browser sebenarnya masih memaafkan versi typo itu, tapi itu **tidak valid XHTML** dan akan kena error di validator. Pakai versi yang ada spasinya.

### 2c. Bedah kodenya — supaya Anda paham, bukan cuma copy

Bacalah tabel ini sambil melihat kode di atas. Ini penjelasan tiap bagian:

**Bagian 1 — Pembungkus form**

| Kode | Artinya |
|---|---|
| `<h1>Formulir Registrasi Data Mahasiswa</h1>` | Judul halaman. `<h1>` sudah Anda pelajari di Latihan 1. |
| `<form action="" method="post">` | Membuka form. `action=""` = kirim ke halaman ini sendiri (tidak ada server). `method="post"` = cara pengiriman data. |
| `</form>` | Menutup form. **Semua** input harus berada di antara `<form>` dan `</form>`, kalau di luar → tidak terkirim. |
| `<table cellspacing="4" cellpadding="4">` | Tabel dari Latihan 2, dipakai sebagai **alat tata letak**: kolom kiri untuk label, kolom kanan untuk input. |

**Bagian 2 — Baris isian (pola yang berulang)**

Semua baris teks mengikuti pola yang sama:

```html
<tr>
	<td><strong>Nomor Mahasiswa</strong></td>
	<td><input type="text" name="nomhs" size="30" /></td>
</tr>
```

| Kode | Artinya |
|---|---|
| `<tr>` | Satu baris tabel (*table row*) — dari Latihan 2 |
| `<td><strong>...</strong></td>` | Kolom kiri: **tulisan labelnya** |
| `<td><input ... /></td>` | Kolom kanan: **kotak isiannya** |
| `type="text"` | Jenis input: teks biasa 1 baris |
| `name="nomhs"` | Nama data saat dikirim → jadi `nomhs=...` |
| `size="30"` | Lebar kotak (kira-kira 30 karakter) |

**Bagian 3 — Yang berbeda dari pola biasa**

| Kode | Kenapa istimewa |
|---|---|
| `type="radio" name="jk" value="Laki-Laki"` | `name="jk"` sama untuk keduanya → pilih satu saja. `value` = yang terkirim kalau dipilih. |
| `<select name="prodi">` | Membuka dropdown. Perhatikan: `<select>` **bukan** `<input>`, jadi tidak ada `type`. |
| `<option>Teknik Informatika</option>` | Satu pilihan di dalam dropdown. Karena tidak ada atribut `value`, yang terkirim adalah **teksnya sendiri**. |
| `type="password"` | Sama seperti text, tapi isinya disamarkan jadi `●●●●` saat diketik. |
| `type="file"` | Tombol pilih file. `accept="image/gif, image/jpeg, image/png"` = batasi hanya gambar. |
| `type="checkbox" name="musik" value="Pop"` | Boleh dicentang banyak. |
| `<textarea name="resume" rows="10" cols="23">` | Kotak besar. `rows`=tinggi baris, `cols`=lebar kolom. **Wajib ditutup `</textarea>`.** |
| `colspan="2"` | Sel gabungan 2 kolom (dari Latihan 2) — supaya tombol Simpan ada di tengah bawah. |
| `type="submit" value="Simpan"` | Tombol kirim. Tulisan di tombol = isi `value`. |

> 💡 **Kesalahan yang sengaja ada di soal (bagus untuk diketahui).** Form ini punya `<input type="file" name="photo" />`, tapi `<form>`-nya tidak punya `enctype="multipart/form-data"`. Di dunia nyata, **tanpa atribut itu file yang di-upload tidak akan pernah sampai ke server.** Karena tugas ini `action=""` (tidak ada server), efeknya tidak terasa. Tapi kalau nanti Anda bikin form upload sungguhan, ingat ini:
> ```html
> <form action="upload.php" method="post" enctype="multipart/form-data">
> ```
> Saya **tidak** menambahkannya di panduan ini supaya kode Anda tetap sama persis dengan yang diminta soal.

### 2d. Perhatikan juga `valign="top"`

Di baris "Hal Favorit" dan "Resume":
```html
<td valign="top"><p><strong>Hal Favorit</strong></p></td>
```

`valign="top"` = teks label diletakkan di **atas** sel, bukan di tengah. Ini perlu karena kolom kanannya tinggi (banyak checkbox), jadi kalau labelnya di tengah akan kelihatan aneh.

> 📌 `valign` itu atribut gaya lama — di XHTML Strict sebenarnya **tidak valid** (harusnya CSS). Sama seperti `align` dan `border` di latihan sebelumnya. Karena dosen memakainya, ikuti saja.

**✅ Cek sendiri:** buka `XHTML-registration-form.html` di browser. Harus muncul:
- Judul **"Formulir Registrasi Data Mahasiswa"**
- Tabel dua kolom: kiri tulisan label, kanan kotak isian
- Radio "Laki-Laki" / "Perempuan" → **coba klik: harus cuma bisa pilih satu**
- Dropdown "Program Studi" → coba buka: harus ada 2 pilihan
- Kotak password → coba ketik: harus jadi `●●●●`
- Tombol "Browse" untuk Photo
- 9 checkbox di bagian Hal Favorit → coba centang: **boleh banyak**
- Kotak besar "Resume"
- Tombol **"Simpan"** di bawah

Coba klik "Simpan" — halaman akan refresh dan isian hilang. **Itu benar**, karena belum ada server.

---

## 📄 Langkah 3 — Buat `XHTML-registration-form-optgroup.html`

Sekarang kita ganti dropdown prodi jadi versi yang lebih rapi.

### 3a. Apa itu `<optgroup>`?

`<optgroup>` = **pengelompokan pilihan** di dalam dropdown. Gunanya supaya daftar yang panjang jadi terstruktur dan mudah dicari.

**Sebelum** — daftar panjang tanpa kelompok:
```
Pilihlah Program Studi Anda
Teknik Informatika
Teknik Industri
Teknik Sipil
Teknik Arsitektur
Ilmu Komunikasi
Ilmu Sosiologi
```

**Sesudah** — dikelompokkan per fakultas:
```
Pilihlah Program Studi Anda
── Fakultas Teknologi Industri ──
   Teknik Informatika
   Teknik Industri
   Teknik Industri Kelas Internasional
── Fakultas Teknik ──
   Teknik Sipil
   Teknik Arsitektur
── Fakultas Ilmu Sosial dan Ilmu Politik ──
   Ilmu Komunikasi
   Ilmu Sosiologi
```

Perhatikan: label fakultas itu **judul kelompok**, bukan pilihan. Anda **tidak bisa memilih** "Fakultas Teknik" — yang bisa dipilih hanya prodi di bawahnya. Itu bedanya `label` di `<optgroup>` dengan `<option>` biasa.

### 3b. Save As dan ganti bagian dropdown

**Save As** `XHTML-registration-form.html` → nama **`XHTML-registration-form-optgroup.html`**

Lalu cari bagian ini:

```html
				<tr>
					<td><strong>Program Studi</strong></td>
					<td>
						<select name="prodi">
							<option>Teknik Informatika</option>
							<option>Teknik Industri</option>
						</select>
					</td>
				</tr>
```

Ganti seluruh `<select>...</select>` di dalamnya menjadi:

```html
						<select name="prodi">
							<option value="" selected="selected">Pilihlah Program Studi Anda</option>
							<optgroup label="Fakultas Teknologi Industri">
								<option>Teknik Informatika</option>
								<option>Teknik Industri</option>
								<option>Teknik Industri Kelas Internasional</option>
							</optgroup>
							<optgroup label="Fakultas Teknik">
								<option>Teknik Sipil</option>
								<option>Teknik Arsitektur</option>
							</optgroup>
							<optgroup label="Fakultas Ilmu Sosial dan Ilmu Politik">
								<option>Ilmu Komunikasi</option>
								<option>Ilmu Sosiologi</option>
							</optgroup>
						</select>
```

### 3c. Tiga hal baru yang perlu diperhatikan

| Kode | Artinya |
|---|---|
| `<option value="" selected="selected">` | Pilihan pertama sebagai **petunjuk**, bukan pilihan nyata. `value=""` = kosong (jadi kalau user tidak ganti, tidak ada prodi terkirim). `selected="selected"` = **terpilih otomatis saat halaman dibuka**. |
| `<optgroup label="Fakultas Teknik">` | Membuka kelompok. Tulisan kelompoknya ada di atribut `label`, **bukan** di antara tag. |
| `</optgroup>` | Menutup kelompok. **Wajib ada** — kalau lupa, browser bingung di mana kelompok berakhir. |

> ⚠️ **Kenapa `selected="selected"` bukan cuma `selected`?**
> Ingat aturan XHTML dari Latihan 1: **atribut wajib punya nilai.** Di HTML5 boleh tulis `selected` saja, tapi di XHTML 1.0 Strict harus `selected="selected"`. Ini persis seperti `nowrap="nowrap"` yang sudah Anda pelajari.

**✅ Cek sendiri:** buka di browser, klik dropdown Program Studi. Harus terlihat:
- Pilihan pertama sudah terpilih: **"Pilihlah Program Studi Anda"**
- Ada **3 judul fakultas** yang **tidak bisa diklik** (biasanya tampil tebal/abu-abu)
- Di bawah tiap fakultas ada prodinya
- Total: **1 petunjuk + 7 prodi** dalam 3 kelompok

---

## 📄 Langkah 4 — `XHTML-registration-form-accessible.html` **[UNGUIDED]**

**Ini soal unguided** = tanpa panduan langkah. Tapi tenang — konsepnya saya jelaskan dulu di sini.

### 4a. Kenapa form perlu "accessible"?

Coba pikirkan: bagaimana orang **buta** mengisi form ini?

Orang buta memakai **screen reader** — program yang membacakan isi layar dengan suara. Masalahnya, screen reader tidak bisa "melihat" bahwa tulisan `Nomor Mahasiswa` di kolom kiri berhubungan dengan kotak kosong di kolom kanan. Yang dia baca cuma: *"tabel, baris, Nomor Mahasiswa, kolom, kotak isian kosong"* — **tanpa hubungan**.

Akibatnya pengguna tidak tahu kotak itu untuk apa.

**Solusinya:** hubungkan label dengan inputnya secara **eksplisit**, pakai `<label for="...">` + `id`.

### 4b. Tiga alat utama

**① `<label for="...">` + `id` pada input — pasangan yang harus cocok**

```html
<label for="nomhs">Nomor Mahasiswa</label>
<input type="text" id="nomhs" name="nomhs" size="30" />
```

| Atribut | Di mana | Fungsi |
|---|---|---|
| `for="nomhs"` | di `<label>` | menunjuk ke `id` milik input |
| `id="nomhs"` | di `<input>` | identitas input yang ditunjuk |
| `name="nomhs"` | di `<input>` | nama data yang dikirim (**beda urusan!**) |

> ⚠️ **Ini jebakan terbesar.** `id` dan `name` itu **dua hal berbeda**:
> - `name` → untuk **server** (data apa yang dikirim)
> - `id` → untuk **browser/screen reader** (menghubungkan label dengan input)
>
> Keduanya **kebetulan** boleh sama isinya (`"nomhs"`), dan di latihan ini memang sama biar tidak bingung. Tapi fungsinya beda.

**Bonus:** kalau `for` dan `id` sudah cocok, **mengklik tulisan labelnya otomatis memfokuskan kotak isian.** Radio jadi lebih mudah diklik. Ini keuntungan gratis yang bisa Anda rasakan langsung.

**② `<fieldset>` + `<legend>` — mengelompokkan**

```html
<fieldset>
	<legend>Data Pribadi</legend>
	... isi kelompok ...
</fieldset>
```

- `<fieldset>` menggambar **kotak pengelompok** di sekeliling isinya
- `<legend>` menulis **judul kelompok** di garis atas kotak itu
- `<legend>` **wajib jadi anak pertama** di dalam `<fieldset>` — kalau ditaruh di tempat lain, tidak valid

Ini menggantikan peran **tabel tata letak**. Jadi Anda **membuang** `<table>` dan menggantinya dengan beberapa `<fieldset>`.

**③ Untuk radio & checkbox — bungkus dengan `<label>`**

Cara paling rapi untuk radio/checkbox adalah membungkus inputnya dengan `<label>`:

```html
<label><input type="radio" name="jk" value="Laki-Laki" /> Laki-Laki</label>
<label><input type="radio" name="jk" value="Perempuan" /> Perempuan</label>
```

Kenapa tidak pakai `for`/`id` di sini? Karena membungkus **otomatis** menghubungkan label dengan input — tidak perlu id, tidak ada risiko salah ketik id. Untuk radio dan checkbox, cara ini lebih disarankan.

### 4c. Empat fieldset yang diminta soal

Soal bilang: *"accessible form yang terdiri dari fieldset **Data Pribadi**, **Asal Sekolah SMU**, **Hal Favorit**, dan **Resume**"*

Pembagiannya:

| Fieldset | Isi |
|---|---|
| **Data Pribadi** | Nomor Mahasiswa, Nama Mahasiswa, Jenis Kelamin, Program Studi, Alamat Email, Nomor Telepon, Password, Photo |
| **Asal Sekolah SMU** | Nama Sekolah Asal, Alamat Sekolah Asal, Telepon Sekolah Asal |
| **Hal Favorit** | Musik (3), Film (3), Makanan (3) |
| **Resume** | Textarea |

Tombol Simpan diletakkan **di luar** semua fieldset, tapi **di dalam** `<form>`.

### 4d. Pola yang harus Anda ikuti — Fieldset pertama lengkap

**Save As** `XHTML-registration-form.html` → nama **`XHTML-registration-form-accessible.html`**

Lalu **buang** `<table>` beserta seluruh `<tr>`/`<td>`, dan ganti dengan struktur ini. Berikut **fieldset pertama saya kerjakan penuh** sebagai contoh:

```html
		<h1>Formulir Registrasi Data Mahasiswa</h1>

		<form action="" method="post">
			<fieldset>
				<legend>Data Pribadi</legend>
				<p>
					<label for="nomhs">Nomor Mahasiswa</label><br />
					<input type="text" id="nomhs" name="nomhs" size="30" />
				</p>
				<p>
					<label for="namamhs">Nama Mahasiswa</label><br />
					<input type="text" id="namamhs" name="namamhs" size="30" />
				</p>
				<p>
					Jenis Kelamin<br />
					<label><input type="radio" name="jk" value="Laki-Laki" /> Laki-Laki</label>
					<label><input type="radio" name="jk" value="Perempuan" /> Perempuan</label>
				</p>
				<p>
					<label for="prodi">Program Studi</label><br />
					<select id="prodi" name="prodi">
						<option>Teknik Informatika</option>
						<option>Teknik Industri</option>
					</select>
				</p>
				<p>
					<label for="email">Alamat Email</label><br />
					<input type="text" id="email" name="email" size="30" />
				</p>
				<p>
					<label for="telepon">Nomor Telepon</label><br />
					<input type="text" id="telepon" name="telepon" size="30" />
				</p>
				<p>
					<label for="password">Password</label><br />
					<input type="password" id="password" name="password" size="30" />
				</p>
				<p>
					<label for="photo">Photo</label><br />
					<input type="file" id="photo" name="photo" size="18" accept="image/gif, image/jpeg, image/png" />
				</p>
			</fieldset>

			<!-- ★ TIGA FIELDSET SISANYA: KERJAKAN SENDIRI ★
			     Polanya sama persis seperti di atas:
			     - <fieldset> + <legend>judul kelompok</legend>
			     - tiap input dibungkus <p>
			     - pakai <label for="X"> + id="X" pada input
			     - radio & checkbox: bungkus dengan <label>
			-->

			<p>
				<input type="submit" name="simpan" value="Simpan" />
			</p>
		</form>
```

**Tugas Anda:** buat 3 fieldset sisanya dengan pola yang sama.

**Petunjuk yang membantu:**

1. **Asal Sekolah SMU** — 3 input teks. Id yang masuk akal: `namasmu`, `alamatsmu`, `teleponsmu`.
2. **Hal Favorit** — 9 checkbox dalam 3 kelompok (Musik/Film/Makanan). Pakai `<p>` untuk tiap kelompok, dan `<br />` setelah judul kelompok. Checkbox dibungkus `<label>` seperti radio.
3. **Resume** — satu `<textarea>`. Karena `<textarea>` juga bisa pakai label, tulis:
   ```html
   <p>
       <label for="resume">Resume</label><br />
       <textarea id="resume" name="resume" rows="10" cols="23"></textarea>
   </p>
   ```
4. **Jangan lupa** semua `name` tetap sama seperti versi sebelumnya — supaya data yang terkirim tidak berubah.
5. **Tombol Simpan** tidak perlu `<label>` (tombol tidak diisi, cuma diklik).

**✅ Cek sendiri:**
- Muncul **4 kotak** dengan judul di garis atasnya: Data Pribadi, Asal Sekolah SMU, Hal Favorit, Resume
- **Coba klik tulisan labelnya** (bukan kotaknya) → kursor harus pindah ke kotak isian. Kalau tidak pindah, berarti `for` dan `id` Anda tidak cocok — periksa lagi.
- Radio masih cuma bisa pilih satu
- Checkbox masih bisa pilih banyak
- Tombol Simpan ada di bawah, di luar kotak-kotak

---

## 📄 Langkah 5 — `XHTML-reservation-form.html` **[UNGUIDED]**

Ini soal paling bebas. Soal bilang:

> *"Tambahkan elemen form di dalam elemen body untuk menampilkan formulir reservasi kamar hotel yang terdiri dari fieldset **Data Pribadi**, **Data Reservasi Kamar Hotel** dan **Data Pembayaran**. Elemen control pada form silahkan mengacu pada situs-situs yang berkaitan dengan reservasi kamar hotel."*

### 5a. Cara berpikir menghadapi soal "bebas"

Soal bebas bukan berarti tidak ada patokan. Yang dinilai:
1. **Ada `<form>`** yang benar
2. **Ada 3 `<fieldset>`** dengan nama yang diminta
3. **Ada `<label>`** yang benar (karena Anda baru belajar accessible form)
4. **Inputnya masuk akal** untuk konteks reservasi hotel

Selama 4 itu terpenuhi, Anda akan dapat nilai bagus.

### 5b. Daftar field yang masuk akal

| Fieldset | Field | `<input type>` yang cocok |
|---|---|---|
| **Data Pribadi** | Nama Lengkap | `text` |
| | Nomor Identitas (KTP) | `text` |
| | Alamat Email | `text` |
| | Nomor Telepon | `text` |
| | Jenis Kelamin | `radio` |
| **Data Reservasi Kamar Hotel** | Tipe Kamar | `<select>` (Standard/Deluxe/Suite) |
| | Jumlah Kamar | `text` atau `<select>` |
| | Tanggal Check-in | `text` |
| | Tanggal Check-out | `text` |
| | Jumlah Tamu | `<select>` |
| | Permintaan Khusus | `<textarea>` |
| **Data Pembayaran** | Metode Pembayaran | `radio` (Kartu Kredit/Transfer/Tunai) |
| | Nama Pemegang Kartu | `text` |
| | Nomor Kartu | `text` |
| | Masa Berlaku | `text` |
| | CVV | `password` |

> 💡 **Kenapa CVV pakai `password`?** Karena CVV itu angka rahasia — kalau pakai `text`, orang di sebelah Anda bisa melihatnya saat Anda mengetik. `password` menyamarkannya jadi `●●●`. Ini contoh berpikir *kenapa* memilih satu tipe input, bukan asal pilih.

### 5c. Langkah kerja

**Save As** `latihan-3/XHTML-basic.html` → nama **`XHTML-reservation-form.html`**

> 📌 Perhatikan: soal menyuruh Anda **mulai lagi dari `XHTML-basic.html`**, bukan dari file registration. Jadi form registrasi **tidak** ikut terbawa — file ini berdiri sendiri.

Struktur yang harus Anda bangun:

```html
		<h1>Formulir Reservasi Kamar Hotel</h1>

		<form action="" method="post">
			<fieldset>
				<legend>Data Pribadi</legend>
				<!-- isi sendiri -->
			</fieldset>

			<fieldset>
				<legend>Data Reservasi Kamar Hotel</legend>
				<!-- isi sendiri -->
			</fieldset>

			<fieldset>
				<legend>Data Pembayaran</legend>
				<!-- isi sendiri -->
			</fieldset>

			<p>
				<input type="submit" name="pesan" value="Pesan Sekarang" />
			</p>
		</form>
```

**Contoh dua baris untuk memulai** — lanjutkan sendiri sisanya:

```html
				<p>
					<label for="nama">Nama Lengkap</label><br />
					<input type="text" id="nama" name="nama" size="30" />
				</p>
				<p>
					<label for="identitas">Nomor Identitas (KTP)</label><br />
					<input type="text" id="identitas" name="identitas" size="30" />
				</p>
```

**✅ Cek sendiri:**
- Ada 3 kotak berjudul: Data Pribadi, Data Reservasi Kamar Hotel, Data Pembayaran
- Semua label bisa diklik dan memindahkan fokus ke inputnya
- Ada tombol kirim di bawah
- Tidak ada field yang tidak masuk akal untuk hotel (misal "Nama Sekolah" — itu sisa copy-paste, buang)

---

## 📦 Langkah 6 — Kompres Jadi Satu Zip

Soal bilang: *"Compress semua file hasil latihan Anda ke dalam sebuah file zip bernama **lat3-xxxxx**, dimana xxxxx adalah nomor mahasiswa Anda."*

`xxxxx` = NIM Anda, jadi nama filenya **`lat3-2257400040.zip`**.

```bash
cd "/run/media/auraauvarose/Local Disk/Aura Auvarose/Project Belajar/pemograman web 1"

zip -r lat3-2257400040.zip latihan-3/
```

**Cek hasilnya:**

```bash
unzip -l lat3-2257400040.zip
```

Harus muncul **5 file**:

```
  XHTML-basic.html
  XHTML-registration-form.html
  XHTML-registration-form-optgroup.html
  XHTML-registration-form-accessible.html
  XHTML-reservation-form.html
  Latihan 3.doc
```

> ⚠️ **Kalau ada file yang hilang**, berarti ada langkah "Save As" yang terlewat. Cek ulang nama filenya — huruf besar/kecil dan tanda hubung harus sama persis dengan yang diminta soal.

---

## 🧪 Langkah 7 — Validasi (Bonus, Biar Nilai Aman)

Browser itu **pemaaf** — kode salah tetap tampil normal. Jadi jangan percaya "sudah kelihatan bagus di browser" saja.

**A. Validator online (paling gampang):**
Buka https://validator.w3.org/#validate_by_upload → upload file HTML Anda → klik Check.

**B. Validator offline:**

```bash
tidy -errors -q latihan-3/XHTML-registration-form.html
```

**Error yang paling mungkin muncul di Latihan 3:**

| Pesan error | Penyebab | Solusi |
|---|---|---|
| `there is no attribute "valign"` | `valign="top"` tidak valid di XHTML Strict | biarkan (dosen yang minta), atau ganti CSS |
| `there is no attribute "cellspacing"` | sama, atribut gaya lama | biarkan — ikuti soal |
| `element "legend" not allowed here` | `<legend>` tidak di awal `<fieldset>` | pindahkan jadi anak pertama |
| `there is no attribute "selected"` | tulis `selected` saja | jadi `selected="selected"` |
| `end tag for "textarea" omitted` | `<textarea>` tidak ditutup | tambahkan `</textarea>` |
| `an attribute value must be quoted` | `size=30` tanpa kutip | jadi `size="30"` |
| `ID "x" already defined` | dua input punya `id` sama | ganti salah satunya |

> 💡 **Catatan realistis:** banyak "error" di sini sebenarnya karena bahan tugas ini dari tahun 2009 dan pakai atribut gaya lama. Dosen memintanya begitu, jadi **ikuti soal**. Yang penting Anda *tahu* itu cara lama — cara modern pakai CSS.

---

## 📚 Ringkasan Ilmu yang Anda Dapat

| Konsep | Intinya |
|---|---|
| **`<form>`** | Wadah yang mengirim data ke server. Semua input harus di dalamnya. |
| **`action`** | Ke mana data dikirim. Kosong = ke halaman sendiri. |
| **`method="post"`** | Cara pengiriman data. `post` = disembunyikan; `get` = ditempel di URL. |
| **`name`** | Nama data saat dikirim. **Tanpa `name`, data tidak terkirim.** |
| **`value`** | Isi data yang dikirim. |
| **`<input type="text">`** | Kotak teks 1 baris |
| **`<input type="password">`** | Kotak teks tersamarkan |
| **`<input type="radio">`** | Pilih **satu** — `name` harus sama dalam satu grup |
| **`<input type="checkbox">`** | Pilih **banyak** — `name` sama, `value` beda |
| **`<input type="file">`** | Upload file — butuh `enctype="multipart/form-data"` di `<form>` |
| **`<input type="submit">`** | Tombol kirim |
| **`<select>` + `<option>`** | Dropdown |
| **`<optgroup label="...">`** | Mengelompokkan pilihan dalam dropdown |
| **`<textarea>`** | Kotak teks banyak baris (bukan `<input>`!) |
| **`<label for="x">` + `id="x"`** | Menghubungkan label dengan input → form jadi accessible |
| **`<fieldset>` + `<legend>`** | Mengelompokkan form jadi beberapa bagian berjudul |
| **`id` vs `name`** | `id` untuk browser/label, `name` untuk server. Beda urusan. |

**Beda `id` dan `name` — sekali lagi, karena ini paling sering tertukar:**

| | `id` | `name` |
|---|---|---|
| Dibaca oleh | Browser, CSS, JavaScript, screen reader | Server |
| Boleh sama dalam 1 halaman? | **Tidak** — harus unik | **Boleh** (justru wajib untuk radio) |
| Dipakai `<label for>`? | ✅ Ya | ❌ Tidak |
| Dipakai mengirim data? | ❌ Tidak | ✅ Ya |

---

## ✅ Checklist Akhir

Sebelum di-zip dan di-upload, pastikan:

**Isi file**
- [ ] `XHTML-basic.html` — identitas sudah terisi (✅ sudah beres)
- [ ] `XHTML-registration-form.html` — heading + tabel + form lengkap
- [ ] `XHTML-registration-form-optgroup.html` — dropdown prodi pakai 3 `<optgroup>`
- [ ] `XHTML-registration-form-accessible.html` — 4 `<fieldset>` + semua `<label>` cocok
- [ ] `XHTML-reservation-form.html` — 3 `<fieldset>` (Data Pribadi / Reservasi / Pembayaran)

**Aturan XHTML**
- [ ] Semua `<input>`, `<br />`, `<img />` ada `/` di akhir
- [ ] `<textarea>` selalu ditutup `</textarea>`
- [ ] `selected="selected"` (bukan `selected` saja)
- [ ] Semua nilai atribut pakai tanda kutip

**Fungsi (sudah dicoba di browser)**
- [ ] Radio cuma bisa pilih **satu**
- [ ] Checkbox bisa pilih **banyak**
- [ ] Klik tulisan label → fokus pindah ke kotak isian (ini bukti `for`/`id` Anda benar)
- [ ] Password tersamarkan jadi `●●●●`
- [ ] Dropdown optgroup: judul fakultas **tidak bisa dipilih**

**Pengumpulan**
- [ ] Sudah di-zip → `lat3-2257400040.zip`
- [ ] `unzip -l` menunjukkan **5 file HTML** ada semua
- [ ] Sudah upload ke situs kuliah

---

## 🔑 KUNCI JAWABAN

> ⛔ **STOP.** Jangan buka bagian ini sebelum Anda benar-benar mencoba mengerjakan Langkah 4 dan 5 sendiri.
>
> Belajar itu dari **mengerjakan dan salah**, bukan dari membaca jawaban. Kalau Anda langsung melihat ke sini, Anda akan bisa mengumpulkan tugas — tapi tidak akan bisa mengerjakan soal serupa saat ujian.
>
> Coba dulu. Kalau buntu, baru lihat.

<br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

### Jawaban Langkah 4 — `XHTML-registration-form-accessible.html`

Isi `<body>`:

```html
		<h1>Formulir Registrasi Data Mahasiswa</h1>

		<form action="" method="post">
			<fieldset>
				<legend>Data Pribadi</legend>
				<p>
					<label for="nomhs">Nomor Mahasiswa</label><br />
					<input type="text" id="nomhs" name="nomhs" size="30" />
				</p>
				<p>
					<label for="namamhs">Nama Mahasiswa</label><br />
					<input type="text" id="namamhs" name="namamhs" size="30" />
				</p>
				<p>
					Jenis Kelamin<br />
					<label><input type="radio" name="jk" value="Laki-Laki" /> Laki-Laki</label>
					<label><input type="radio" name="jk" value="Perempuan" /> Perempuan</label>
				</p>
				<p>
					<label for="prodi">Program Studi</label><br />
					<select id="prodi" name="prodi">
						<option>Teknik Informatika</option>
						<option>Teknik Industri</option>
					</select>
				</p>
				<p>
					<label for="email">Alamat Email</label><br />
					<input type="text" id="email" name="email" size="30" />
				</p>
				<p>
					<label for="telepon">Nomor Telepon</label><br />
					<input type="text" id="telepon" name="telepon" size="30" />
				</p>
				<p>
					<label for="password">Password</label><br />
					<input type="password" id="password" name="password" size="30" />
				</p>
				<p>
					<label for="photo">Photo</label><br />
					<input type="file" id="photo" name="photo" size="18" accept="image/gif, image/jpeg, image/png" />
				</p>
			</fieldset>

			<fieldset>
				<legend>Asal Sekolah SMU</legend>
				<p>
					<label for="namasmu">Nama Sekolah Asal (SMU)</label><br />
					<input type="text" id="namasmu" name="namasmu" size="30" />
				</p>
				<p>
					<label for="alamatsmu">Alamat Sekolah Asal (SMU)</label><br />
					<input type="text" id="alamatsmu" name="alamatsmu" size="30" />
				</p>
				<p>
					<label for="teleponsmu">Telepon Sekolah Asal (SMU)</label><br />
					<input type="text" id="teleponsmu" name="teleponsmu" size="30" />
				</p>
			</fieldset>

			<fieldset>
				<legend>Hal Favorit</legend>
				<p>
					<strong>Musik</strong><br />
					<label><input type="checkbox" name="musik" value="Pop" /> Pop</label>
					<label><input type="checkbox" name="musik" value="Rock" /> Rock</label>
					<label><input type="checkbox" name="musik" value="Jazz" /> Jazz</label>
				</p>
				<p>
					<strong>Film</strong><br />
					<label><input type="checkbox" name="film" value="Drama" /> Drama</label>
					<label><input type="checkbox" name="film" value="Action" /> Action</label>
					<label><input type="checkbox" name="film" value="Sci-Fi" /> Sci-Fi</label>
				</p>
				<p>
					<strong>Makanan</strong><br />
					<label><input type="checkbox" name="makanan" value="Seafood" /> Seafood</label>
					<label><input type="checkbox" name="makanan" value="Tradisional" /> Tradisional</label>
					<label><input type="checkbox" name="makanan" value="Fastfood" /> Fastfood</label>
				</p>
			</fieldset>

			<fieldset>
				<legend>Resume</legend>
				<p>
					<label for="resume">Resume</label><br />
					<textarea id="resume" name="resume" rows="10" cols="23"></textarea>
				</p>
			</fieldset>

			<p>
				<input type="submit" name="simpan" value="Simpan" />
			</p>
		</form>
```

**Yang berubah dari versi tabel:**

| Sebelum | Sesudah |
|---|---|
| `<table cellspacing="4" cellpadding="4">` | `<fieldset>` (4 buah) |
| `<tr>` + `<td><strong>Label</strong></td>` | `<p>` + `<label for="...">` |
| `<td><input ... /></td>` | `<input ... id="..." />` |
| `<td valign="top">` | tidak perlu lagi |
| `<td colspan="2">` untuk tombol | `<p>` biasa |

Perhatikan `name` **tidak berubah sama sekali** — jadi data yang terkirim tetap sama, hanya strukturnya yang jadi lebih baik.

---

### Jawaban Langkah 5 — `XHTML-reservation-form.html`

Ini **salah satu versi yang bisa diterima**. Soal ini bebas, jadi versi Anda boleh berbeda selama 3 fieldset-nya ada dan inputnya masuk akal.

```html
		<h1>Formulir Reservasi Kamar Hotel</h1>

		<form action="" method="post">
			<fieldset>
				<legend>Data Pribadi</legend>
				<p>
					<label for="nama">Nama Lengkap</label><br />
					<input type="text" id="nama" name="nama" size="30" />
				</p>
				<p>
					<label for="identitas">Nomor Identitas (KTP)</label><br />
					<input type="text" id="identitas" name="identitas" size="30" />
				</p>
				<p>
					<label for="email">Alamat Email</label><br />
					<input type="text" id="email" name="email" size="30" />
				</p>
				<p>
					<label for="telepon">Nomor Telepon</label><br />
					<input type="text" id="telepon" name="telepon" size="30" />
				</p>
				<p>
					Jenis Kelamin<br />
					<label><input type="radio" name="jk" value="Laki-Laki" /> Laki-Laki</label>
					<label><input type="radio" name="jk" value="Perempuan" /> Perempuan</label>
				</p>
			</fieldset>

			<fieldset>
				<legend>Data Reservasi Kamar Hotel</legend>
				<p>
					<label for="tipekamar">Tipe Kamar</label><br />
					<select id="tipekamar" name="tipekamar">
						<option value="" selected="selected">Pilihlah Tipe Kamar</option>
						<optgroup label="Standard">
							<option>Standard Single</option>
							<option>Standard Double</option>
						</optgroup>
						<optgroup label="Deluxe">
							<option>Deluxe Twin</option>
							<option>Deluxe King</option>
						</optgroup>
						<optgroup label="Suite">
							<option>Junior Suite</option>
							<option>Executive Suite</option>
						</optgroup>
					</select>
				</p>
				<p>
					<label for="jumlahkamar">Jumlah Kamar</label><br />
					<input type="text" id="jumlahkamar" name="jumlahkamar" size="5" />
				</p>
				<p>
					<label for="checkin">Tanggal Check-in</label><br />
					<input type="text" id="checkin" name="checkin" size="30" />
				</p>
				<p>
					<label for="checkout">Tanggal Check-out</label><br />
					<input type="text" id="checkout" name="checkout" size="30" />
				</p>
				<p>
					<label for="jumlahtamu">Jumlah Tamu</label><br />
					<select id="jumlahtamu" name="jumlahtamu">
						<option>1 Orang</option>
						<option>2 Orang</option>
						<option>3 Orang</option>
						<option>4 Orang</option>
					</select>
				</p>
				<p>
					<label for="permintaan">Permintaan Khusus</label><br />
					<textarea id="permintaan" name="permintaan" rows="5" cols="30"></textarea>
				</p>
			</fieldset>

			<fieldset>
				<legend>Data Pembayaran</legend>
				<p>
					Metode Pembayaran<br />
					<label><input type="radio" name="metode" value="Kartu Kredit" /> Kartu Kredit</label>
					<label><input type="radio" name="metode" value="Transfer Bank" /> Transfer Bank</label>
					<label><input type="radio" name="metode" value="Tunai" /> Tunai</label>
				</p>
				<p>
					<label for="pemegang">Nama Pemegang Kartu</label><br />
					<input type="text" id="pemegang" name="pemegang" size="30" />
				</p>
				<p>
					<label for="nomorkartu">Nomor Kartu</label><br />
					<input type="text" id="nomorkartu" name="nomorkartu" size="30" />
				</p>
				<p>
					<label for="masaberlaku">Masa Berlaku</label><br />
					<input type="text" id="masaberlaku" name="masaberlaku" size="10" />
				</p>
				<p>
					<label for="cvv">CVV</label><br />
					<input type="password" id="cvv" name="cvv" size="5" />
				</p>
			</fieldset>

			<p>
				<input type="submit" name="pesan" value="Pesan Sekarang" />
			</p>
		</form>
```

**Perhatikan di jawaban ini saya pakai `<optgroup>` lagi** untuk tipe kamar. Bukan karena diminta, tapi karena Anda sudah mempelajarinya di Langkah 3 — dan ini memang tempat yang tepat untuk memakainya. Menunjukkan Anda *memahami* kapan alat itu berguna, bukan cuma menghafal.

---

*** Selamat Mengerjakan ***
