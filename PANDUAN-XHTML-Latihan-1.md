# 📘 Panduan Belajar XHTML — Latihan 1

**Untuk:** R. Aura Auvarose Endica Saebani — NIM 2257400040
**Mata kuliah:** Pemrograman Web 1

---

## 🎯 Cara Pakai Panduan Ini

- Kerjakan **berurutan**. Setiap langkah bergantung pada langkah sebelumnya.
- Di setiap langkah ada **✅ Cek Sendiri** — buka file di browser sebelum lanjut.
- Kalau ada bagian yang saya tulis **[KERJAKAN SENDIRI]**, itu sengaja tidak saya isikan — supaya Anda yang mengetik dan paham.
- **Panduan ini berdiri sendiri.** Kalau nanti lanjut ke Latihan 2, buka `PANDUAN-XHTML-Latihan-2.md`.

---

## 🧠 Pahami Dulu: Kenapa "XHTML" Bukan "HTML"?

Anda mungkin bingung kenapa saya bilang `<!DOCTYPE html>` itu salah padahal itu standar HTML modern. Ini penjelasannya:

| | HTML5 (modern) | XHTML 1.0 Strict (tugas ini) |
|---|---|---|
| DOCTYPE | `<!DOCTYPE html>` | `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "...">` |
| Tag `<html>` | `<html lang="en">` | `<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">` |
| Tag kosong | `<br>`, `<img src="x">` | `<br />`, `<img src="x" />` ← **wajib ada `/`** |
| Huruf tag | bebas (`<DIV>` ok) | **wajib huruf kecil** |
| Atribut | `<td nowrap>` | `<td nowrap="nowrap">` ← **wajib ada nilai** |
| Atribut baru | `justify-content`, `align-items` (CSS) | **tidak ada** — itu properti CSS, bukan atribut HTML |

**Kesimpulan:** tugas ini pakai aturan XHTML 1.0 Strict (standar tahun 2009). Jadi `justify-content` / `align-items` di `<img>` Anda itu **tidak valid** dan tidak berefek apa-apa. Hapus saja.

---

# 🛠️ PERSIAPAN

## Langkah 0 — Siapkan Tempat Kerja & Editor

**A. Soal tempat kerja.** Disk `Local Disk` Anda sedang **read-only** (tidak bisa ditulis). Pilih salah satu:

```bash
# Opsi 1 — remount supaya bisa ditulis (butuh password sudo)
sudo mount -o remount,rw "/run/media/auraauvarose/Local Disk"
```
**atau** lepas lalu colok ulang disk dari file manager (biasanya jadi rw otomatis).

**atau** Opsi 2 — kerja dulu di home, nanti di-copy:
```bash
mkdir -p ~/lat-web-work/latihan-1/images
```

**B. Editor teks.** Tugas aslinya menyebut Notepad++ (Windows). Di Linux Anda bisa pakai **VS Code** (`code`), **Kate**, **gedit**, atau **nano**. Yang penting editor **plain text**, bukan Word.

---

# 📕 LATIHAN 1 — Introduction to XHTML

## 🎯 Target akhir Latihan 1

```
latihan-1/
├── XHTML-basic.html                  ← template (sudah ada, diisi identitas)
├── XHTML-heading-paragraph.html      ← langkah 2
├── XHTML-lists.html                  ← langkah 3
├── XHTML-image.html                  ← langkah 4
├── XHTML-link.html                   ← langkah 5  (paling lengkap)
└── images/
    ├── merapi-at-sunset.JPG
    └── the-brigde.JPG
```

> **Penting — pahami konsepnya:** ini bukan 5 file berbeda yang dibuat dari nol. Ini **satu file yang terus dikembangkan**, dan tiap tahap **disimpan dengan nama baru** (Save As). Jadi `XHTML-link.html` isinya = semua elemen dari langkah 1–5. Persis seperti versi/backup bertingkat.

---

## 📄 Langkah 1 — Isi Identitas di `XHTML-basic.html`

**Buka** file `latihan-1/XHTML-basic.html`. Isinya:

```html
<!-- 
    Latihan 1: Introduction to XHTML
    No. Mhs.: xx 07 xxxxx
    Nama Mhs.: XXXXXXX
-->
```

**Yang harus Anda lakukan:** ganti bagian `xx 07 xxxxx` dan `XXXXXXX` dengan NIM & nama Anda.

**Hasil:**
```html
<!-- 
    Latihan 1: Introduction to XHTML
    No. Mhs.: 22 07 400040
    Nama Mhs.: R. Aura Auvarose Endica Saebani
-->
```

> 💡 **Kenapa pakai `<!-- -->`?** Itu *comment* — teks yang **tidak muncul di browser** tapi tetap tersimpan di dalam file. Dosen pakai ini sebagai "label kepemilikan" supaya tahu file itu punya siapa.

**✅ Cek sendiri:** simpan file, buka di browser. Komentar tidak terlihat — yang terlihat cuma halaman kosong. Itu benar.

> 📌 **Catatan:** di file Anda sekarang ada tambahan `<h1>Kelompok :</h1>` + 8 nama. Itu tidak diminta soal di langkah ini. Boleh dihapus (biar bersih) atau dibiarkan.

---

## 📄 Langkah 2 — Buat `XHTML-heading-paragraph.html`

**Cara kerja:** buka `XHTML-basic.html` → **Save As** dengan nama baru → baru edit.

### 2a. Save As dulu

Simpan sebagai: **`XHTML-heading-paragraph.html`**
⚠️ Perhatikan: **satu** strip di antara `XHTML` dan `heading`, bukan dua. File lama Anda (`XHTML--heading-paragraph.html`) salah nama — hapus saja setelah yang baru jadi.

### 2b. Ganti DOCTYPE & tag `<html>`

Ganti baris-baris ini:

| Dari | Menjadi |
|---|---|
| `<!DOCTYPE html>` | `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">` |
| `<html lang="en">` | `<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">` |

> 💡 `xmlns` = XML Namespace. Ini yang membuat dokumen Anda "XHTML" (XHTML = HTML yang ditulis dengan aturan XML).

### 2c. Ganti `<title>`

```html
<title>XHTML: Heading dan Paragraph</title>
```

> 💡 `<title>` muncul di **tab browser** dan di hasil pencarian Google. Bukan isi halaman.

### 2d. Tambahkan heading & paragraf ke dalam `<body>`

Hapus semua isi `<body>` yang lama, ganti dengan **tepat** kode ini:

```html
<h1>Article Heading H1</h1>
<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Mo commodo sum sed pharetra gravida, orci magna rhoncus neque, id pulvinar odio lorem non turpis. Nullam sit amet enim. Suspendisse id velit vitae ligula volutpat condimentum.</p>

<h2>Article Heading H2</h2>
<p>Aliquam erat volutpat. Sed quis velit. Nulla facilisi. Nulla libero. Vivamus pharetra posuere sapien. Nam consectetuer. Sed aliquam, nunc eget euismod ullamcorper, lectus nunc ullamcorper orci, fermentum bibendum enim nibh eget ipsum. Donec porttitor ligula eu dolor. Maecenas vitae nulla consequat libero cursus venenatis. Nam magna enim, accumsan eu, blandit sed, blandit a, eros.</p>

<h3>Article Heading H3</h3>
<p>Quisque facilisis erat a dui. Nam malesuada ornare dolor. Cras gravida, diam sit amet rhoncus ornare, erat elit consectetuer erat, id egestas pede nibh eget odio. Proin tincidunt, velit vel porta elementum, magna diam molestie sapien, non aliquet massa pede eu diam. Aliquam iaculis. Fusce et ipsum et nulla tristique facilisis.</p>

<h4>Article Heading H4</h4>
<p>Donec eget sem sit amet ligula viverra gravida. Etiam vehicula urna vel turpis. Suspendisse sagittis ante a urna. Morbi a est quis orci consequat rutrum. Nullam egestas feugiat felis. Integer adipiscing semper ligula. Nunc molestie, nisl sit amet cursus convallis, sapien lectus pretium metus, vitae pretium enim wisi id lectus. Donec vestibulum. Etiam vel nibh. Nulla facilisi.</p>

<h5>Article Heading H5</h5>
<p>Mauris pharetra. Donec augue. Fusce ultrices, neque id dignissim ultrices, tellus mauris dictum elit, vel lacinia enim metus eu nunc.</p>

<h6>Article Heading H6</h6>
<p>Proin at eros non eros adipiscing mollis. Donec semper turpis sed diam. Sed consequat ligula nec tortor. Integer eget sem. Ut vitae enim eu est vehicula gravida. Morbi ipsum ipsum, porta nec, tempor id, auctor vitae, purus. Pellentesque neque.</p>
```

> 💡 **Pahami penomoran paragraf!** Karena nanti langkah 3 & 4 menyebut *"paragraf 1"*, *"paragraf 4"*, hafalkan pemetaan ini:
>
> | Paragraf | Pasangan heading-nya |
> |---|---|
> | **paragraf 1** | di bawah `<h1>Article Heading H1</h1>` |
> | paragraf 2 | di bawah `<h2>` |
> | paragraf 3 | di bawah `<h3>` |
> | **paragraf 4** | di bawah `<h4>` ← gambar ditaruh di sini |
> | paragraf 5 | di bawah `<h5>` |
> | paragraf 6 | di bawah `<h6>` |
>
> 💡 `h1`–`h6` = **tingkat kepentingan**, bukan ukuran huruf. `h1` paling penting (judul utama), `h6` paling kecil (sub-sub-sub). Browser memberi ukuran default, tapi nanti bisa diubah pakai CSS.

**✅ Cek sendiri:** simpan → buka di browser. Harusnya muncul 6 heading mengecil + 6 paragraf. Kalau ada yang aneh, cek: apakah `<body>` dan `</body>` masih ada?

---

## 📄 Langkah 3 — Buat `XHTML-lists.html`

**Cara kerja:** buka `XHTML-heading-paragraph.html` → Save As `XHTML-lists.html` → tambah list.

### 3a. Ganti `<title>`
```html
<title>XHTML: Ordered List, Unordered List dan Definition List</title>
```

### 3b. Sisipkan `<ol>` — **setelah paragraf 1** (setelah `</p>` di bawah `<h1>`)

```html
<ol>
	<li>Order list item 1</li>
	<li>Order list item 2</li>
	<li>Order list item 3</li>
	<li>Order list item 4</li>
</ol>
```

### 3c. Sisipkan `<ul>` — **setelah paragraf 2** (setelah `</p>` di bawah `<h2>`)

```html
<ul>
	<li>Unordered list item 1</li>
	<li>Unordered list item 2</li>
	<li>Unordered list item 3</li>
	<li>Unordered list item 4</li>
</ul>
```

### 3d. Sisipkan `<dl>` — **setelah paragraf 3** (setelah `</p>` di bawah `<h3>`)

```html
<dl>
	<dt>Definition Lists</dt>
	<dd>is not a straightforward list of items because it is a list of terms and explanation</dd>
	<dt>Ordered Lists</dt>
	<dd>list items must be started in order, whereupon an ordered list is used</dd>
</dl>
```

> 💡 **Beda 3 jenis list:**
> - `<ol>` = *ordered* → bernomor (1, 2, 3). Dipakai kalau **urutan penting** (langkah masak, ranking).
> - `<ul>` = *unordered* → bullet (•). Dipakai kalau **urutan tidak penting** (daftar belanja).
> - `<dl>` = *definition list* → pasangan istilah + penjelasan. `<dt>` = *definition term* (istilahnya), `<dd>` = *definition description* (penjelasannya). Satu `<dt>` boleh punya beberapa `<dd>`.

**✅ Cek sendiri:** browser harusnya menampilkan: nomor urut, lalu bullet, lalu format kamus (istilah + indentasi penjelasan).

---

## 📄 Langkah 4 — Buat `XHTML-image.html`

**Cara kerja:** buka `XHTML-lists.html` → Save As `XHTML-image.html` → tambah gambar.

### 4a. Ganti `<title>`
```html
<title>XHTML: Image</title>
```

### 4b. Sisipkan `<img>` di **awal paragraf 4**

Cari paragraf di bawah `<h4>Article Heading H4</h4>`. **Di dalam** `<p>`, sebelum teks "Donec eget sem...", sisipkan:

```html
<img src="merapi-at-sunset.jpg" width="389" height="292" alt="Merapi di waktu sunset" />
```

> 💡 **Bongkar atributnya:**
> | Atribut | Fungsi |
> |---|---|
> | `src` | *source* — alamat file gambar |
> | `width` / `height` | ukuran tampil dalam piksel |
> | `alt` | *alternative text* — teks pengganti kalau gambar gagal dimuat / dibacakan pembaca layar untuk tunanetra. **Wajib** di XHTML. |
> | `/` di akhir | tanda tag "self-closing" — ciri khas XHTML |
>
> ⚠️ **Jebakan:** soal menulis `merapi-at-sunset.jpg` (huruf kecil), tapi file Anda `merapi-at-sunset.JPG` (**huruf besar**). Linux **case-sensitive** — kalau salah besar/kecil, gambar **tidak akan muncul**. Samakan salah satu: rename file, atau tulis path persis seperti nama file aslinya.

**✅ Cek sendiri:** gambar Merapi harus muncul di dalam paragraf 4 (sejajar dengan teks).

---

## 📄 Langkah 5 — Buat `XHTML-link.html` (file terakhir, paling lengkap)

**Cara kerja:** buka `XHTML-image.html` → Save As `XHTML-link.html` → tambah 4 hal.

### 5a. Ganti `<title>`
```html
<title>XHTML: Links</title>
```

### 5b. Link ke file lain — di **akhir paragraf 1**

Sisipkan sebelum `</p>` penutup paragraf 1:
```html
<a href="images/the-brigde.jpg">Show image</a>
```

> 💡 `<a>` = *anchor*. `href` = *hypertext reference* (tujuan link). Perhatikan: yang ditulis adalah **alamat file**, bukan nama file gambar itu sendiri.

### 5c. Link internal (dalam satu halaman) — di **akhir paragraf 2**

```html
<a href="#heading6">Go to Article Heading H6</a>
```
> 💡 Tanda `#` artinya "lompat ke elemen di halaman ini yang punya `id` tersebut". Ini namanya **anchor link** / *internal page link*.

### 5d. Beri `id` pada `<h6>`

Ubah:
```html
<h6>Article Heading H6</h6>
```
menjadi:
```html
<h6 id="heading6">Article Heading H6</h6>
```
> 💡 `id` = identitas unik elemen. **Harus unik** dalam satu halaman — tidak boleh ada dua elemen dengan `id` sama. Inilah "tujuan" dari link di langkah 5c.

### 5e. Tambah `usemap` pada gambar di paragraf 4

Ubah `<img>` di paragraf 4 menjadi:
```html
<img src="images/merapi-at-sunset.jpg" width="389" height="292" alt="Merapi di waktu sunset" usemap="#myimagemap" />
```

### 5f. Tambahkan blok `<map>` — **setelah** elemen `<img>` di paragraf 4

```html
<map id="myimagemap" name="myimagemap">
	<area title="Di sini ada jembatan! Silahkan di-klik kalau nggak percaya!" shape="rect" coords="30,120,120,80" href="images/the-brigde.jpg" alt="Di sini ada jembatan!" />
</map>
```

> 💡 **Ini yang namanya image map** — satu gambar yang punya beberapa "zona klik" berbeda. Berguna untuk peta, diagram, atau foto produk.
>
> | Bagian | Arti |
> |---|---|
> | `usemap="#myimagemap"` di `<img>` | "gambar ini pakai peta bernama myimagemap" |
> | `<map id="..." name="...">` | definisi petanya. `id` untuk XHTML Strict, `name` untuk kompatibilitas browser lama — **tulis dua-duanya** |
> | `shape="rect"` | bentuk zona: `rect` (kotak), `circle`, `poly` (poligon) |
> | `coords="30,120,120,80"` | koordinat kotak: `x1,y1,x2,y2` — dihitung dari **kiri-atas** gambar, satuan piksel |
> | `href` | mau dibawa ke mana kalau zona ini diklik |
> | `title` | tooltip saat mouse diarahkan |
>
> ⚠️ Di XHTML, `<area>` juga tag kosong → **wajib** ditutup dengan ` />`.

**✅ Cek sendiri (uji semua):**
1. Klik "Show image" → harus pindah ke halaman berisi foto jembatan
2. Klik "Go to Article Heading H6" → halaman melompat ke heading 6
3. Arahkan mouse ke area kiri-atas foto Merapi (sekitar 30–120 px horizontal, 80–120 px vertikal) → muncul tooltip, dan kalau diklik ke foto jembatan

---

## 📦 Langkah 6 — Kompres Latihan 1

Nama file **wajib** mengikuti format soal: `lat1-` + NIM.

```bash
cd "/run/media/auraauvarose/Local Disk/Aura Auvarose/Project Belajar/pemograman web 1"
zip -r lat1-2257400040.zip latihan-1/
```

> 💡 Pastikan **folder `images/` ikut masuk** ke dalam zip — kalau tidak, gambar akan rusak saat dinilai dosen.

**✅ Cek sendiri:**
```bash
unzip -l lat1-2257400040.zip
```
Harus terlihat 5 file HTML + 2 file gambar.

---

# 🧪 Validasi (Bonus, Biar Nilai Aman)

Kode XHTML yang salah bisa "tetap jalan" di browser (browser itu pemaaf), tapi tidak lolos validasi. Cara cek:

**A. Validator online W3C:** https://validator.w3.org/#validate_by_upload → upload file HTML Anda.

**B. Validator offline:**
```bash
# install sekali saja
sudo apt install tidy

# cek satu file (yang paling lengkap)
tidy -errors -q latihan-1/XHTML-link.html
```

**Error yang paling sering muncul di Latihan 1:**

| Pesan error | Penyebab | Solusi |
|---|---|---|
| `is not allowed on element img` | pakai `justify-content`/`align-items` | hapus atribut itu |
| `Element br not allowed as child` | `<br>` tidak ditutup | jadi `<br />` |
| `there is no attribute "align"` | `align` tidak valid di XHTML Strict | pakai CSS, atau abaikan |
| `unclosed element` | lupa `</p>` / `</li>` | cek pasangan tag |
| `there is no attribute "width"` | `width` di `<img>` tidak valid di Strict | biarkan (dosen yang minta) |

> 💡 **Catatan realistis:** bahan tugas ini dari tahun 2009 dan pakai atribut gaya lama (`align`, `width` di `<img>`). Di XHTML 1.0 **Strict**, banyak di antaranya sebenarnya **tidak valid** (harusnya pakai CSS). Tapi karena dosen memintanya begitu, **ikuti saja soal** — yang penting Anda *tahu* itu cara lama, dan cara modern-nya pakai CSS.

---

# 📚 Ringkasan Ilmu — Latihan 1

| Konsep | Intinya |
|---|---|
| **XHTML vs HTML5** | XHTML = HTML dengan aturan XML (harus rapi, tag tertutup, huruf kecil) |
| **DOCTYPE** | Deklarasi versi aturan yang dipakai dokumen |
| **Heading `h1`–`h6`** | Tingkat kepentingan, bukan ukuran |
| **List** | `<ol>` berurutan · `<ul>` bullet · `<dl>` istilah+penjelasan |
| **Image** | `src` (alamat) + `alt` (teks pengganti) + `width`/`height` |
| **Link** | `<a href>` · `#id` untuk lompat dalam halaman · `id` sebagai tujuan |
| **Image map** | `<map>` + `<area>` → banyak zona klik dalam satu gambar |

---

# ✅ Checklist Akhir Latihan 1

- [ ] `XHTML-basic.html` — identitas (NIM + nama) sudah diisi di komentar
- [ ] `XHTML-heading-paragraph.html` — nama benar (1 strip) · DOCTYPE XHTML · title `XHTML: Heading dan Paragraph` · 6 heading + 6 paragraf
- [ ] `XHTML-lists.html` — `<ol>` setelah par.1 · `<ul>` setelah par.2 · `<dl>` setelah par.3
- [ ] `XHTML-image.html` — `<img>` di awal paragraf 4, file gambar benar-benar muncul
- [ ] `XHTML-link.html` — link eksternal + link internal + `id="heading6"` + `usemap` & `<map>`
- [ ] Semua tag kosong ditutup ` />`
- [ ] Sudah di-zip → `lat1-2257400040.zip` (folder `images/` ikut)

---

*Kalau Anda macet di satu langkah, tanya saja — saya bantu jelaskan bagian itu tanpa langsung memberi jawaban penuh.*
