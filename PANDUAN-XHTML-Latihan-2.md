# 📗 Panduan Belajar XHTML — Latihan 2

**Untuk:** R. Aura Auvarose Endica Saebani — NIM 2257400040
**Mata kuliah:** Pemrograman Web 1

---

## 🎯 Cara Pakai Panduan Ini

- Kerjakan **berurutan**. Setiap langkah bergantung pada langkah sebelumnya.
- Di setiap langkah ada **✅ Cek Sendiri** — buka file di browser sebelum lanjut.
- Kalau ada bagian yang saya tulis **[KERJAKAN SENDIRI]**, itu sengaja tidak saya isikan — supaya Anda yang mengetik dan paham.
- **Prasyarat:** panduan ini melanjutkan Latihan 1. Kalau Anda belum paham aturan XHTML (DOCTYPE, tag kosong wajib ` />`, huruf tag kecil), baca dulu bagian **"Pahami Dulu"** di `PANDUAN-XHTML-Latihan-1.md`.

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
mkdir -p ~/lat-web-work/latihan-2
```

**B. Editor teks.** Tugas aslinya menyebut Notepad++ (Windows). Di Linux Anda bisa pakai **VS Code** (`code`), **Kate**, **gedit**, atau **nano**. Yang penting editor **plain text**, bukan Word.

---

# 📗 LATIHAN 2 — Working with Tables

## 🎯 Target akhir Latihan 2

```
latihan-2/
├── XHTML-basic.html                        ← template
├── XHTML-simple-table.html                 ← langkah 2
├── XHTML-cellspacing-cellpadding.html      ← langkah 3
├── XHTML-spanning-rows-cells.html          ← langkah 4
├── XHTML-accessible-tables.html            ← langkah 5
├── XHTML-unguided-1.html                   ← langkah 6
└── XHTML-unguided-2.html                   ← langkah 7
```

> **Pola yang sama:** satu file dikembangkan terus, disimpan dengan nama baru tiap tahap. `XHTML-accessible-tables.html` isinya = **4 tabel** sekaligus.

---

## 📄 Langkah 1 — Extract `latihan-2.zip`

Folder `latihan-2/` **belum ada**. Extract dulu:

```bash
cd "/run/media/auraauvarose/Local Disk/Aura Auvarose/Project Belajar/pemograman web 1"
unzip latihan-2.zip
```

Isinya: `XHTML-basic.html` (identik dengan punya Latihan 1) + `Latihan 2.doc`.

**Lalu:** buka `latihan-2/XHTML-basic.html` dan isi identitas Anda di komentar — sama seperti di panduan Latihan 1.

> ⚠️ **Catatan lucu:** komentar di file ini masih tertulis `Latihan 1: Introduction to XHTML` (dosen lupa mengubahnya). Tidak perlu diubah — biarkan apa adanya.

---

## 📄 Langkah 2 — Buat `XHTML-simple-table.html`

**Save As** dari `XHTML-basic.html` → nama `XHTML-simple-table.html`
**Ganti title** → `<title>XHTML: A Simple Table</title>`

**Isi `<body>` dengan:**

```html
<h1>How Tables Work</h1>

<p>The table element defines the beginning and end of a table. Within the table element are table row elements (&lt;tr&gt;&lt;/tr&gt;), and nested within those are table cell elements (&lt;td&gt;&lt;/td&gt;). The actual content is placed inside the td elements.</p>

<p>This is a simple table with two rows containing two cells each. This table uses border attribute (the value set to 1) and width attribute (the value set to 100%).</p>

<table border="1" width="100%">
	<tr>
		<td>Cell one</td>
		<td>Cell two</td>
	</tr>
	<tr>
		<td>Cell three</td>
		<td>Cell four</td>
	</tr>
</table>
```

> 💡 **Struktur dasar tabel — hafalkan:**
> ```
> <table>          ← wadah tabel
>   <tr>           ← table row (baris)
>     <td>...</td> ← table data (sel isi)
>     <td>...</td>
>   </tr>
> </table>
> ```
> Jadi: **tabel → baris → sel**. Selalu bersarang urutan itu.
>
> 💡 `border="1"` = tampilkan garis tepi 1 piksel. Tanpa ini, tabel tidak bergaris.
> 💡 `width="100%"` = lebar tabel mengikuti lebar jendela browser.
>
> 🔎 **Detail penting — perhatikan `&lt;` dan `&gt;`!** Di paragraf pertama, saya menulis `&lt;tr&gt;` bukan `<tr>`. Kenapa? Kalau Anda tulis `<tr>` mentah, browser akan menganggapnya sebagai **tag HTML sungguhan** (dan error karena tidak ada `<table>` pembungkusnya). Supaya tampil sebagai **teks biasa**, harus ditulis sebagai *entity*:
>
> | Tulis | Muncul di layar |
> |---|---|
> | `&lt;` | `<` |
> | `&gt;` | `>` |
> | `&amp;` | `&` |
>
> Ini konsep yang sama dengan soal "unguided-1" nanti. Kalau di file .doc aslinya terlihat `<tr>`, itu karena Word menampilkannya begitu — di kode XHTML harus `&lt;tr&gt;`.

**✅ Cek sendiri:** muncul judul + 2 paragraf + tabel 2×2 bergaris yang lebarnya penuh.

---

## 📄 Langkah 3 — Buat `XHTML-cellspacing-cellpadding.html`

**Save As** dari file langkah 2 → nama `XHTML-cellspacing-cellpadding.html`
**Ganti title** → `<title>XHTML: A Simple Table with cellspacing and cellpadding Attribute</title>`

**Tambahkan setelah tabel 1:**

```html
<h2>Cell Spacing and Cell Padding</h2>

<p>In addition to amending the border size, it&rsquo;s possible to change the amount of padding within a table&rsquo;s cells, as well as the spacing between all the cells in a table. This is done with the cellpadding and cellspacing attributes, respectively. Below is a table with cellspacing and cellpadding attribute.</p>

<table cellspacing="20" cellpadding="40" border="1" width="100%">
	<tr>
		<td>Cell one</td>
		<td>Cell two</td>
	</tr>
	<tr>
		<td>Cell three</td>
		<td>Cell four</td>
	</tr>
</table>
```

> 💡 **Beda `cellspacing` vs `cellpadding`** — ini yang sering tertukar:
>
> | | Artinya | Analogi |
> |---|---|---|
> | `cellspacing` | jarak **antar sel** (antar kotak) | jarak antar meja |
> | `cellpadding` | jarak **di dalam sel** (tepi sel ke teks) | bantalan kursi |
>
> Di contoh ini `cellspacing="20"` bikin celah lebar antar sel, dan `cellpadding="40"` bikin teks jauh dari tepi sel.
>
> 💡 Perhatikan `it&rsquo;s` — itu entity untuk tanda petik melengkung `’`. Kalau ditulis `'` biasa, tampilannya beda (lurus). Ini juga bagian dari pelajaran *entity*.

**✅ Cek sendiri:** tabel kedua harus terlihat "menggembung" — sel-selnya berjarak lebar dan teksnya menjauh dari tepi.

---

## 📄 Langkah 4 — Buat `XHTML-spanning-rows-cells.html`

**Save As** dari file langkah 3 → nama `XHTML-spanning-rows-cells.html`
**Ganti title** → `<title>XHTML: A Simple Table with Spanning Rows and Cells</title>`

**Tambahkan setelah tabel 2:**

```html
<h2>Spanning Rows and Cells</h2>

<p>It&acute;s sometimes necessary for data to span multiple rows or columns. This is achieved via the rowspan and colspan attributes, respectively. In the following table, the first row has three cells. However, in the second row, the first cell spans two rows and the second cell spans two columns. This means the second row lacks a third cell, and the third row also only has two cells (whose contents align with the second and third cells of the top row).</p>

<table border="1" cellpadding="2" width="100%">
	<tr>
		<td>A cell</td>
		<td>Another cell</td>
		<td>Yet another cell!</td>
	</tr>
	<tr>
		<td rowspan="2">A cell that spans two rows</td>
		<td colspan="2">A cell that spans two columns</td>
	</tr>
	<tr>
		<td>Another cell</td>
		<td>The last cell</td>
	</tr>
</table>
```

> 💡 **`rowspan` vs `colspan`** — cara menghitungnya:
>
> | Atribut | Arti | Efek |
> |---|---|---|
> | `rowspan="2"` | sel ini **memakan 2 baris** ke bawah | baris berikutnya kehilangan 1 slot |
> | `colspan="2"` | sel ini **memakan 2 kolom** ke samping | baris itu kehilangan 1 slot |
>
> **Logika yang wajib dipahami:** jumlah `<td>` di setiap baris **tidak harus sama**, tapi **total "slot"**-nya harus konsisten.
>
> - Baris 1: 3 sel × 1 slot = **3 slot**
> - Baris 2: 1 sel `rowspan=2` (1 slot) + 1 sel `colspan=2` (2 slot) = **3 slot** ✅
> - Baris 3: 2 sel = 2 slot **+ 1 slot terpakai rowspan dari baris 2** = **3 slot** ✅
>
> Makanya baris 2 hanya punya 2 `<td>`, dan baris 3 juga 2 `<td>` — bukan 3. Kalau salah hitung, tabel akan terlihat berantakan/melebar.

**✅ Cek sendiri:** baris 1 punya 3 kolom. Baris 2–3: kolom pertama menyatu vertikal, dan 2 kolom kanan menyatu horizontal di baris 2.

---

## 📄 Langkah 5 — Buat `XHTML-accessible-tables.html`

**Save As** dari file langkah 4 → nama `XHTML-accessible-tables.html`
**Ganti title** → `<title>XHTML: Creating Accessible Tables</title>`

**Tambahkan setelah tabel 3:**

```html
<h2>Creating Accessible Tables</h2>

<p>Many web designers ignore all but the most basic elements when working with tables, and in doing so they end up with output that causes problems for screen readers. By correctly and carefully structuring and formatting a table, not only will users of screen readers benefit, but you as a designer will also have far more control over its visual appearance.</p>

<table border="1" cellspacing="0" width="100%" summary="Fruit and Vegetable Tabular Data with Accessible Tables">
	<caption>Fruit and Vegetable Tabular Data with Accessible Tables</caption>
	<thead>
		<tr>
			<th id="fruit" colspan="2">Fruit</th>
			<th id="vegetables" colspan="2">Vegetable</th>
		</tr>
		<tr>
			<th id="citrus">Citrus</th>
			<th id="berry">Berry</th>
			<th id="root">Root</th>
			<th id="legume">Legume</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td headers="fruit citrus">Lemon</td>
			<td headers="fruit berry">Blueberry</td>
			<td headers="vegetables root">Potato</td>
			<td headers="vegetables legume">Pea</td>
		</tr>
	</tbody>
	<tfoot>
		<tr>
			<td colspan="4">Listed by Informatics Department 2009</td>
		</tr>
	</tfoot>
</table>
```

> 💡 **Ini tabel "pintar" (accessible).** Tujuannya: pembaca layar (*screen reader*) untuk tunanetra bisa membacakan tabel dengan benar. Kalau tabel cuma pakai `<td>` semua, si pembaca layar tidak tahu mana **judul kolom** dan mana **isi data** — jadi dia hanya membacakan angka tanpa konteks.
>
> | Elemen | Fungsi |
> |---|---|
> | `<caption>` | Judul tabel. Muncul di atas tabel. |
> | `<thead>` | Kelompok **kepala** tabel (baris judul) |
> | `<tbody>` | Kelompok **badan** tabel (isi data) |
> | `<tfoot>` | Kelompok **kaki** tabel (catatan bawah) |
> | `<th>` | *table header* — sel **judul**. Browser otomatis bikin **tebal + rata tengah** |
> | `id` di `<th>` | Memberi nama tiap kolom |
> | `headers` di `<td>` | "Sel ini isinya milik kolom mana" → inilah **penghubung** antara isi dan judulnya |
> | `summary` di `<table>` | Ringkasan tabel untuk pembaca layar (atribut lama, sekarang sudah *deprecated* digantikan `<caption>`) |
>
> **Cara kerja `headers`:** `<td headers="fruit citrus">Lemon</td>` dibacakan sebagai *"Lemon — Fruit, Citrus"*. Jauh lebih jelas daripada cuma *"Lemon"*.
>
> 📌 **Catatan:** di bahan asli dosen ada salah ketik kecil — `<th id="vegetables">` (jamak) tapi `<td headers="vegetable root">` (tunggal). Saya sudah samakan jadi `vegetables` supaya konsisten. Kalau Anda ingin **persis** seperti soal aslinya, tinggal ganti `root`/`legume` kembali jadi `vegetable`.

**✅ Cek sendiri:** tabel 4 punya judul di atas, header 2 tingkat (Fruit/Vegetable → Citrus/Berry/Root/Legume), 1 baris data, dan catatan kaki bergabung 4 kolom.

---

## 📄 Langkah 6 — `XHTML-unguided-1.html` (tabel playlist) 🎵

**Ini soal "unguided"** = tanpa panduan langkah. Tapi ada jebakan: **datanya cuma ada di gambar di dalam `Latihan 2.doc`**. Kalau Anda hanya baca teksnya, soal ini tidak bisa dikerjakan.

**Save As** dari `XHTML-basic.html` → nama `XHTML-unguided-1.html`

### Datanya (saya sudah ekstrak dari gambar):

**Caption:** `A playlist of great music`

| Song Name | Time | Artist | Album | Play Count |
|---|---|---|---|---|
| In The Art Of Stopping | 3:34 | Wire | Send | 3 |
| Electron John | 3:18 | Worm Is Green | Push Play | 42 |
| Templates | 6:07 | Silo | Instar | 9 |
| Emerge | 4:48 | Fischerspooner | Fischerspooner #1 | 23 |
| Banquet | 3:21 | Bloc Party | Silent Alarm | 23 |
| Alala | 3:58 | Cansei De Ser Sexy (CSS) | Cansei De Ser Sexy | 6 |
| **I Ain´t Saying My Goodbyes** | 3:45 | Tom Vek | We Have Sound | 40 |
| **Jóga** | 5:05 | **Björk** | Homogenic | 24 |
| Kim Wilde | 4:21 | Charlotte Hatherley | Grey Will Fade | 16 |
| Witness | 4:04 | The Delgados | The Great Eastern | 9 |
| Feel Good Inc. | 3:41 | Gorillaz | Demon Days | 20 |
| Returning Wheel | 3:26 | Malka Spigel | Hide | 13 |
| P.E.T.R.O.L. | 6:21 | Orbital | Pi (OST) | 8 |
| Pweization | 3:08 | Pop Will Eat Itself (PWEI) | Karmadrome | 11 |
| Betrayed | 3:05 | Project Noise | Listen to me | 31 |
| When The Sun Hits | 4:47 | Slowdive | Souvlaki | 1 |
| Little Eyes | 4:20 | Yo La Tengo | Summer Sun | 28 |

**Baris terakhir** (bergabung 5 kolom): `Music selection by: www.snubcommunications.com`

### 🔑 Inilah inti soalnya — ENTITAS di baris 7 & 8

Soal bilang: *"Perhatikan isi data pada baris ke-7 dan ke-8 yang mengandung entitas!"*

Di baris 7 dan 8 ada karakter **non-ASCII** yang harus ditulis pakai *character entity*, bukan karakter mentah:

| Baris | Karakter | Di mana | Tulis sebagai |
|---|---|---|---|
| 7 | `´` (acute accent, U+00B4) | kata *Ain´t* | `&acute;` |
| 8 | `ó` (o dengan acute) | kata *Jóga* | `&oacute;` |
| 8 | `ö` (o dengan umlaut) | kata *Björk* | `&ouml;` |

> ⚠️ **Hati-hati:** `´` di *Ain´t* itu **bukan apostrof biasa** (`'`) dan bukan petik lurus. Dia *acute accent* (U+00B4) — mirip tanda aksen di huruf é. Beda karakter = beda entity.
>
> 💡 **Kenapa harus pakai entity?** Kalau file Anda disimpan/dikirim dan encoding-nya berubah, karakter mentah `ó` bisa berubah jadi sampah seperti `Ã³`. Entity (`&oacute;`) **selalu aman** karena ditulis pakai huruf ASCII biasa.
>
> **Daftar entity yang sering dipakai:**
> | Entity | Hasil | Entity | Hasil |
> |---|---|---|---|
> | `&lt;` | `<` | `&oacute;` | ó |
> | `&gt;` | `>` | `&ouml;` | ö |
> | `&amp;` | `&` | `&eacute;` | é |
> | `&nbsp;` | spasi keras | `&ntilde;` | ñ |
> | `&copy;` | © | `&acute;` | ´ |
> | `&reg;` | ® | `&rsquo;` | ’ |
> | `&trade;` | ™ | `&deg;` | ° |

### Struktur yang harus Anda bangun **[KERJAKAN SENDIRI]**

Bangun tabelnya dengan struktur *accessible* seperti langkah 5 — pakai `<caption>`, `<thead>`, `<tbody>`, `<tfoot>`, `<th>`. Contoh 2 baris pertama sebagai pola:

```html
<table border="1" cellspacing="0" width="100%">
	<caption>A playlist of great music</caption>
	<thead>
		<tr>
			<th>Song Name</th>
			<th>Time</th>
			<th>Artist</th>
			<th>Album</th>
			<th>Play Count</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>In The Art Of Stopping</td>
			<td>3:34</td>
			<td>Wire</td>
			<td>Send</td>
			<td>3</td>
		</tr>
		<tr>
			<td>Electron John</td>
			<td>3:18</td>
			<td>Worm Is Green</td>
			<td>Push Play</td>
			<td>42</td>
		</tr>
		<!-- ... lanjutkan sampai baris 17 ... -->
	</tbody>
	<tfoot>
		<tr>
			<td colspan="5">Music selection by: www.snubcommunications.com</td>
		</tr>
	</tfoot>
</table>
```

**Tugas Anda:** lanjutkan baris 3–17, dan **jangan lupa pakai entity** di baris 7 & 8.

**✅ Cek sendiri:** 17 baris lagu + 1 baris footer bergabung 5 kolom. Cek di browser bahwa *Ain´t*, *Jóga*, dan *Björk* tampil benar (tidak jadi karakter aneh).

---

## 📄 Langkah 7 — `XHTML-unguided-2.html` (jadwal kuliah) 📅

**Ini paling bebas** — bikin tabel jadwal kuliah **Anda sendiri**.

**Save As** dari `XHTML-basic.html` → nama `XHTML-unguided-2.html`
**Ganti title** → `<title>XHTML: Jadwal Kuliah</title>`

**Kerangka yang perlu Anda isi [KERJAKAN SENDIRI]:**

```html
<h1>Jadwal Kuliah Semester ...</h1>

<table border="1" cellspacing="0" cellpadding="6" width="100%">
	<caption>Jadwal Kuliah — R. Aura Auvarose Endica Saebeni (2257400040)</caption>
	<thead>
		<tr>
			<th>Jam</th>
			<th>Senin</th>
			<th>Selasa</th>
			<th>Rabu</th>
			<th>Kamis</th>
			<th>Jumat</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th>08.00 - 10.00</th>
			<td>...</td>
			<td>...</td>
			<td>...</td>
			<td>...</td>
			<td>...</td>
		</tr>
		<!-- tambahkan baris jam berikutnya -->
	</tbody>
</table>
```

> 💡 **Trik `rowspan` di sini:** kalau ada mata kuliah 2 jam berturut-turut, pakai `rowspan="2"` supaya sel-nya menyatu vertikal:
> ```html
> <td rowspan="2">Pemrograman Web 1</td>
> ```
> Inilah penerapan praktis dari materi langkah 4.

**✅ Cek sendiri:** tabel terbaca jelas, tidak ada sel yang bergeser/berantakan.

---

## 📦 Langkah 8 — Kompres Latihan 2

```bash
cd "/run/media/auraauvarose/Local Disk/Aura Auvarose/Project Belajar/pemograman web 1"
zip -r lat2-2257400040.zip latihan-2/
```

**✅ Cek sendiri:**
```bash
unzip -l lat2-2257400040.zip
```
Harus terlihat **6 file HTML** + `Latihan 2.doc`.

---

# 🧪 Validasi (Bonus, Biar Nilai Aman)

Kode XHTML yang salah bisa "tetap jalan" di browser (browser itu pemaaf), tapi tidak lolos validasi. Cara cek:

**A. Validator online W3C:** https://validator.w3.org/#validate_by_upload → upload file HTML Anda.

**B. Validator offline:**
```bash
# install sekali saja
sudo apt install tidy

# cek satu file
tidy -errors -q latihan-2/XHTML-accessible-tables.html
```

**Error yang paling sering muncul di Latihan 2:**

| Pesan error | Penyebab | Solusi |
|---|---|---|
| `there is no attribute "cellspacing"` | atribut gaya lama | biarkan — dosen yang minta |
| `there is no attribute "border"` | `border` tidak valid di XHTML Strict | biarkan, atau ganti CSS |
| `there is no attribute "valign"` | `valign` tidak valid di Strict | biarkan, atau ganti CSS |
| `unclosed element` | lupa `</td>` / `</tr>` | cek pasangan tag |
| `an attribute value must be quoted` | `border=1` tanpa tanda kutip | jadi `border="1"` |
| `Element th not allowed` | `<th>` dipakai di luar baris tabel | pastikan `<th>` ada di dalam `<tr>` |

> 💡 **Catatan realistis:** bahan tugas ini dari tahun 2009 dan pakai atribut gaya lama (`border`, `cellspacing`, `cellpadding`, `valign`). Di XHTML 1.0 **Strict**, banyak di antaranya sebenarnya **tidak valid** (harusnya pakai CSS). Tapi karena dosen memintanya begitu, **ikuti saja soal** — yang penting Anda *tahu* itu cara lama, dan cara modern-nya pakai CSS.

---

# 📚 Ringkasan Ilmu — Latihan 2

| Konsep | Intinya |
|---|---|
| **Tabel** | `<table>` → `<tr>` (baris) → `<td>`/`<th>` (sel) |
| **`<th>`** | Sel judul — tebal & di tengah otomatis |
| **`<caption>`** | Judul tabel — muncul di atas tabel |
| **`cellspacing`** | Jarak **antar** sel |
| **`cellpadding`** | Jarak isi sel dengan **garis** selnya |
| **`rowspan`** | Sel menyatu ke **bawah** (antar baris) |
| **`colspan`** | Sel menyatu ke **samping** (antar kolom) |
| **`<thead>`/`<tbody>`/`<tfoot>`** | Kelompok kepala / badan / kaki tabel |
| **Tabel accessible** | `headers` + `id` menghubungkan sel data dengan sel judulnya |
| **Entity** | `&lt;` `&gt;` `&amp;` `&oacute;` — cara aman menulis karakter khusus |

---

# ✅ Checklist Akhir Latihan 2

- [ ] Folder `latihan-2/` sudah di-extract
- [ ] `XHTML-simple-table.html` — 1 tabel 2×2
- [ ] `XHTML-cellspacing-cellpadding.html` — 2 tabel (ada `cellspacing`+`cellpadding`)
- [ ] `XHTML-spanning-rows-cells.html` — 3 tabel (ada `rowspan`+`colspan`)
- [ ] `XHTML-accessible-tables.html` — 4 tabel (ada `<caption>`,`<thead>`,`<tbody>`,`<tfoot>`,`<th>`,`headers`)
- [ ] `XHTML-unguided-1.html` — 17 lagu + footer, **entity** di baris 7 & 8
- [ ] `XHTML-unguided-2.html` — jadwal kuliah Anda
- [ ] Sudah di-zip → `lat2-2257400040.zip`

---

*Kalau Anda macet di satu langkah, tanya saja — saya bantu jelaskan bagian itu tanpa langsung memberi jawaban penuh.*
