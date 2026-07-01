## **PRODUCT REQUIREMENTS DOCUMENT (PRD) Website Company Profile — Furniture & Interior Design** 

Referensi desain: Vinoti Living & IDEMU Palet warna: Putih · Hitam · Emas (Gold Accent) Versi 1.0  •  1 Juli 2026 

## **1. Overview & Latar Belakang** 

Dokumen ini adalah Product Requirements Document (PRD) untuk pengembangan website company profile bergaya furniture & interior design. Website akan menampilkan identitas brand, koleksi produk, layanan interior, dan portofolio proyek, dengan referensi struktur navigasi dan gaya visual dari vinotiliving.com dan idemu.com. 

Tujuan utama website adalah menjadi etalase digital yang elegan dan profesional untuk memperkenalkan brand, koleksi furniture, layanan interior, dan portofolio proyek kepada calon pelanggan (B2C) maupun mitra bisnis (developer/partner, B2B). 

## **1.1 Tujuan Bisnis (Business Goals)** 

- Membangun citra brand yang premium, modern, dan terpercaya di industri furniture & interior. 

- Menjadi kanal akuisisi lead melalui form konsultasi/CTA "Tanya Harga". 

- Menampilkan katalog koleksi dan loose furniture secara terstruktur agar mudah dijelajahi. 

- Memperkuat kepercayaan calon klien lewat portofolio proyek dan testimoni. 

- Membuka jalur kemitraan (partnership) dengan developer properti dan showroom mitra. 

## **1.2 Target Pengguna** 

|**Segmen**|**Kebutuhan Utama**|
|---|---|
|Calon pembeli individu (homeowner)|Melihat koleksi furniture, gaya desain, dan estimasi<br>harga/konsultasi|
|Calon klien interior residensial|Melihat layanan interior, portofolio, dan cara memulai<br>proyek|
|Developer properti|Info program kerja sama proyek (developer partnership)|
|Calon mitra showroom|Info program kemitraan showroom|



## **1.3 Referensi Kompetitor / Inspirasi** 

- Vinoti Living (vinotiliving.com) — struktur kategori produk detail (Living Room, Dining Room, Bedroom), koleksi bernama, blog tips & inspirasi, newsletter, multi-bahasa. 

- IDEMU by VIVERE (idemu.com) — struktur navbar utama yang menjadi acuan langsung (lihat Bagian 3), hero banner slider promo, CTA "Tanya Harga" persisten, form konsultasi gratis, grid inspirasi ruang, artikel tips & testimoni, portfolio proyek. 

## **2. Ruang Lingkup (Scope)** 

## **2.1 In-Scope** 

- Website company profile multi-halaman (bukan e-commerce/checkout). 

- Navbar & footer sesuai struktur yang ditentukan. 

- Halaman: Home, About, Collection (+ sub-koleksi), Loose Furniture (+ kategori), Interior Services, Partnership (+ sub-halaman), Project Portfolio, Contact. 

- Form konsultasi / "Tanya Harga" yang mengirim lead ke email/CRM sederhana. 

- Desain responsif (desktop, tablet, mobile). 

- Optimasi SEO dasar (meta tag, sitemap, struktur heading). 

## **2.2 Out-of-Scope (Fase 1)** 

- Transaksi/checkout online (add to cart, payment gateway). 

- Akun pengguna / login member. 

- Multi-bahasa (dapat menjadi fase berikutnya). 

- CMS custom kompleks — cukup CMS standar (mis. WordPress/Headless CMS) agar tim non-teknis bisa update konten. 

## **3. Spesifikasi Navigasi (Navbar)** 

Navbar mengikuti referensi gambar yang diberikan (struktur IDEMU), dengan gaya visual putih-hitamemas. 

## **3.1 Struktur Menu** 

|**Menu**|**Tipe**|**Sub-menu**|
|---|---|---|
|About [Brand]|Dropdown|Our Story / Showroom / Terms &<br>Conditions / Article (Blog)|
|Collection|Dropdown (highlight warna emas /<br>aktif)|Daftar koleksi bernama, mis. Koleksi A / B<br>/ C / D ... (nama disesuaikan brand)|
|Loose Furniture|Dropdown|Sofa / Coffee & Side Table / Dining Set /<br>Paket Furniture|
|Interior Services|Link langsung (tanpa dropdown)|-|
|Partnership|Dropdown|Developer Project / Partnership Program<br>(Showroom Mitra)|
|Project Portfolio|Link langsung|-|



## **3.2 Perilaku & Gaya Visual Navbar** 

- Background navbar: putih (#FFFFFF), teks default: hitam (#1A1A1A). 

- Menu item yang sedang aktif/hover diberi warna emas (contoh referensi: menu "Collection" berwarna oranye-emas pada gambar acuan). 

- Ikon chevron (˅) kecil di sebelah kanan label untuk menu yang memiliki dropdown. 

- Dropdown muncul on-hover (desktop) / on-tap accordion (mobile), dengan background putih, border tipis abu-abu muda, dan hover state warna emas. 

- Navbar sticky (menempel) saat scroll ke bawah agar CTA "Tanya Harga" & menu tetap dapat diakses. 

- Logo brand diletakkan di kiri; opsional tombol CTA sekunder ("Tanya Harga" / "Konsultasi Sekarang") berwarna emas solid di kanan navbar, mengikuti pola IDEMU. 

- Versi mobile: menu berubah menjadi hamburger icon, membuka slide-in panel putih dengan daftar menu vertikal & accordion untuk sub-menu. 

_Catatan desain: gunakan font sans-serif modern & elegan (contoh: Inter, Poppins, atau Montserrat) dengan letterspacing sedikit lebar pada label menu, sesuai kesan minimalis-premium pada referensi._ 

## **4. Sitemap / Struktur Halaman** 

|**Halaman**|**URL (contoh)**|**Deskripsi Singkat**|
|---|---|---|
|Home|/|Hero banner slider, highlight koleksi, CTA<br>konsultasi, grid inspirasi, artikel terbaru,|



|**Halaman**|**URL (contoh)**|**Deskripsi Singkat**|
|---|---|---|
|||testimoni|
|About|/about|Cerita brand, visi-misi, nilai, tim (opsional),<br>showroom, FAQ, Terms & Conditions,<br>Article/blog index|
|Collection (index)|/collection|Grid semua koleksi bernama dengan foto cover|
|Collection Detail|/collection/[nama]|Galeri produk dalam koleksi tsb, deskripsi<br>gaya/tema|
|Loose Furniture (index)|/loose-furniture|Kategori: Sofa, Coffee & Side Table, Dining<br>Set, Paket Furniture|
|Loose Furniture Detail|/loose-furniture/[kategori]|List produk per kategori dengan filter dasar|
|Interior Services|/interior-services|Penjelasan layanan (desain interior, kitchen<br>set, kids room, dll), proses kerja, CTA<br>konsultasi|
|Partnership|/partnership|Pengantar 2 program kemitraan|
|Partnership - Developer<br>Project|/partnership/developer-project|Detail kerja sama dengan developer properti|
|Partnership - Program Mitra|/partnership/showroom-<br>partners|Detail program mitra showroom|
|Project Portfolio|/portfolio|Galeri proyek terealisasi, filter kategori<br>(Kitchen/Bedroom/Living Room, dll)|
|Contact|/contact|Alamat, peta lokasi, form kontak, kontak<br>WhatsApp, sosial media|



## **5. Functional Requirements per Halaman** 

## **5.1 Home** 

- Hero section: banner slider full-width (auto-play, dot/arrow navigation) menampilkan promo/koleksi unggulan. 

- Section CTA konsultasi gratis (form singkat: nama, no. HP/WA, kebutuhan) — sticky popup opsional. 

- Grid "Inspirasi Ruang" (Kitchen Set, Kids Bedroom, Master Bedroom, Living Room) menuju Portfolio. 

- Section artikel/tips terbaru (3 kartu, link ke blog). 

- Section highlight koleksi (carousel logo/brand koleksi). 

- Banner ajakan konsultasi kedua sebelum footer. 

- Footer lengkap (lihat Bagian 6). 

## **5.2 About** 

- Cerita brand & value proposition. 

- Sub-halaman: FAQ, Showroom (lokasi & jam operasional, peta), Terms & Conditions, Article (index blog). 

## **5.3 Collection** 

- Index menampilkan grid kartu koleksi (nama, foto cover, CTA "Lihat Koleksi"). 

- Halaman detail koleksi: galeri produk, mood/tema, CTA konsultasi terkait koleksi tsb. 

## **5.4 Loose Furniture** 

- Index kategori: Sofa, Coffee & Side Table, Dining Set, Paket Furniture. 

- List produk per kategori dengan gambar, nama produk, dan (opsional) rentang harga. 

- Filter/sort dasar (opsional fase 1: kategori saja, tanpa filter kompleks). 

## **5.5 Interior Services** 

- Penjelasan jenis layanan (custom kitchen set, kids bedroom, living room, dsb.). 

- Alur kerja / proses (konsultasi → desain → produksi → instalasi). 

- CTA konsultasi & kontak WhatsApp. 

## **5.6 Partnership** 

- Landing pengantar dua jalur kemitraan dengan tombol menuju masing-masing sub-halaman. 

- Developer Project: benefit kerja sama, syarat, contoh proyek, form pengajuan kerja sama. 

- Showroom Partners: benefit menjadi mitra showroom, syarat, form pendaftaran. 

## **5.7 Project Portfolio** 

- Galeri proyek (grid foto), filter kategori (Kitchen/Bedroom/Living Room/Kids Room, dll). 

- Klik gambar membuka detail/lightbox dengan deskripsi singkat proyek. 

## **5.8 Contact** 

- Form kontak (nama, email/HP, pesan). 

- Info alamat kantor pusat/showroom, jam operasional, peta (embed Google Maps). 

- Tombol langsung ke WhatsApp & tautan sosial media (Instagram, Facebook, Pinterest, YouTube, LinkedIn, TikTok — sesuai kebutuhan brand). 

## **6. Spesifikasi Footer** 

- Background gelap (hitam) dengan teks putih & aksen emas untuk judul kolom, kontras dengan navbar putih. 

- Kolom 1: Logo & deskripsi singkat brand. 

- Kolom 2: "Explore" — About, FAQ, Article, Career, Terms & Conditions, Privacy Policy. 

- Kolom 3: "Our Contacts" — alamat kantor pusat, tombol WhatsApp, tombol lokasi showroom. 

- Kolom 4: Ikon sosial media & (opsional) form newsletter. 

- Baris bawah: copyright & tahun berjalan. 

## **7. Design System** 

## **7.1 Palet Warna** 

|**Warna**|**Kode (contoh)**|**Penggunaan**|
|---|---|---|
|Putih (Primary Background)|#FFFFFF|Background utama, navbar, card|



|**Warna**|**Kode (contoh)**|**Penggunaan**|
|---|---|---|
|Hitam (Primary Text/Footer)|#1A1A1A|Teks utama, footer, elemen kontras tinggi|
|Emas (Accent)|#B8935A / #C9A56A|Highlight menu aktif, tombol CTA, garis<br>pemisah, ikon aksen|
|Abu-abu netral|#5A5A5A / #E5E5E5|Teks sekunder, border, background section<br>alternatif|



## **7.2 Tipografi** 

- Heading: font serif atau sans-serif premium (mis. Playfair Display untuk judul besar, atau sans-serif modern seperti Poppins/Inter untuk gaya minimalis). 

- Body text: sans-serif mudah dibaca (Inter/Poppins/Montserrat), ukuran dasar 16px. 

- Letter-spacing lebih lebar pada label navbar & tombol untuk kesan elegan. 

## **7.3 Komponen UI** 

- Tombol CTA utama: solid emas, teks putih/hitam, sudut sedikit membulat (4-8px). 

- Tombol CTA sekunder: outline hitam/emas, background transparan. 

- Card produk/koleksi: foto rasio konsisten (mis. 1:1 atau 4:5), hover zoom-in halus, judul di bawah foto. 

- Divider/garis aksen tipis warna emas di bawah judul section (heading 1) — sesuai gaya dokumen ini. 

## **8. Non-Functional Requirements** 

|**Aspek**|**Requirement**|
|---|---|
|Performance|Skor Google PageSpeed ≥ 80 (mobile & desktop), gambar dioptimasi (WebP,<br>lazy-load)|
|Responsiveness|Mendukung breakpoint desktop (≥1200px), tablet (768–1199px), mobile<br>(<768px)|
|SEO|Meta title/description tiap halaman, struktur heading semantik, sitemap.xml,<br>schema.org (Organization/Product)|
|Browser Support|Chrome, Safari, Firefox, Edge versi 2 tahun terakhir|
|Accessibility|Kontras warna memadai (khususnya teks di atas emas), alt text pada semua<br>gambar|
|Security|HTTPS/SSL, validasi & sanitasi input form, proteksi spam (captcha/honeypot)|
|CMS/Maintainability|Konten (produk, koleksi, artikel, portfolio) dapat diedit tim non-teknis tanpa<br>developer|
|Analytics|Integrasi Google Analytics 4 & Google Tag Manager, tracking submit form<br>sebagai conversion|



## **9. Rekomendasi Teknis (Opsional)** 

- CMS: WordPress (Elementor/Bricks) untuk kemudahan update konten, atau Headless CMS (Sanity/Strapi) + Next.js bila menginginkan performa lebih tinggi. 

- Hosting: cloud hosting dengan CDN untuk kecepatan load gambar produk. 

- Form handling: integrasi ke email/WhatsApp API atau Google Sheets/CRM sederhana untuk lead management. 

_Pilihan teknis final disesuaikan dengan kapasitas tim developer & budget proyek._ 

## **10. Success Metrics (KPI)** 

- Jumlah submit form konsultasi / "Tanya Harga" per bulan. 

- Bounce rate halaman Home < 50%. 

- Rata-rata durasi kunjungan > 1.5 menit. 

- Jumlah klik ke WhatsApp dari seluruh halaman. 

- Peringkat SEO untuk kata kunci brand & kategori utama (mis. "custom furniture jakarta"). 

## **11. Timeline & Milestone (Usulan)** 

|**Fase**|**Durasi (usulan)**|**Output**|
|---|---|---|
|Discovery & Wireframe|1 minggu|Sitemap final, wireframe low-fi seluruh halaman|
|UI Design (Hi-Fi)|2 minggu|Mockup desain (Figma) sesuai palet putih-hitam-<br>emas|
|Development|3-4 minggu|Build halaman, CMS setup, integrasi form|
|QA & Content Filling|1 minggu|Testing responsif, cross-browser, pengisian konten<br>final|
|Launch|-|Go-live, submit sitemap ke Google Search Console|



## **12. Open Questions / Perlu Dikonfirmasi** 

- Nama brand final & tagline (untuk menyesuaikan menu "About [Brand]"). 

- Apakah dibutuhkan estimasi harga per produk ditampilkan publik, atau hanya "by request"? 

- Apakah perlu multi-bahasa (ID/EN) di fase 1 atau menyusul? 

- Apakah ada sistem CRM/lead management existing untuk integrasi form? 

- Jumlah & nama koleksi produk yang akan ditampilkan pertama kali saat launch. 

