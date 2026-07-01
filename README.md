# PT Hanara Eksis Selaras - Company Profile

Website profil perusahaan (Company Profile) untuk **PT Hanara Eksis Selaras**, sebuah perusahaan yang bergerak di bidang furnitur (Furnitur Standar, Custom, dan Interior) dengan desain modern, mewah, dan profesional.

## 🚀 Fitur Utama
- **Desain Premium:** Menggunakan palet warna elegan (putih, emas, hitam) dengan tipografi modern untuk memberikan kesan mewah.
- **Responsif:** Tampilan yang dioptimalkan untuk desktop dan mobile (*mobile-friendly*).
- **Animasi Halus:** Transisi dan animasi masuk (*fade-in*, *scale*) untuk pengalaman pengguna yang dinamis.
- **Katalog Terpadu:** Menampilkan koleksi produk dan portofolio proyek (terhubung antar halaman).
- **Navigasi Cerdas:** Menu dropdown interaktif yang rapi di semua perangkat.

## 🛠️ Teknologi yang Digunakan
- **React.js (Vite):** Framework utama untuk kecepatan dan modularitas.
- **Tailwind CSS:** Framework styling untuk desain sistem yang konsisten (Warna, Tipografi, Spacing).
- **React Router Dom:** Untuk routing antar halaman secara instan (Single Page Application).

## 📂 Struktur Halaman
- `/` - Beranda (Hero Slider, Layanan, Klien).
- `/about` - Cerita Perusahaan, Visi & Misi, dan Kebijakan Mutu.
- `/product` - Katalog produk interaktif dengan fitur *Filter* (Sofa, Kursi, Meja).
- `/partnership` - Informasi kerja sama dengan pengembang properti (*Developer*).
- `/portfolio` - Galeri proyek masa lalu.
- `/contact` - Alamat Showroom dan akses cepat WhatsApp.

## 💻 Cara Menjalankan di Komputer Lokal

1. Pastikan **Node.js** sudah terinstal.
2. Buka terminal di folder project ini.
3. Instal dependencies dengan menjalankan:
   ```bash
   npm install
   ```
4. Jalankan *local server* (mode development):
   ```bash
   npm run dev
   ```
5. Buka tautan yang muncul di terminal (biasanya `http://localhost:5173`) di browsermu.

## 🌐 Cara Deploy ke Vercel (Auto-Deploy Github)
1. *Push* repositori ini ke akun Github kamu.
2. Masuk ke [Vercel](https://vercel.com) dengan akun Github-mu.
3. Klik **Add New Project** dan pilih repositori Github ini.
4. Klik **Deploy** (Vercel akan otomatis mengenali Vite dan React).
5. Selesai! Website sudah online. (Konfigurasi `vercel.json` sudah disiapkan agar routing berjalan lancar).
