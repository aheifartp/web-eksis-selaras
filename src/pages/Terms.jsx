import React from 'react';
import Layout from '../components/Layout';

const TermsAndConditions = () => {
  return (
    <Layout>
      <header className="pt-24 pb-12 px-5 md:px-16 max-w-[1280px] mx-auto text-center">
        <h1 className="font-headline-xl text-4xl md:text-5xl mb-6">Terms & Conditions</h1>
        <div className="w-[60px] h-[1px] bg-primary-container mx-auto mb-8"></div>
        <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">Syarat dan ketentuan layanan PT Hanara Eksis Selaras.</p>
      </header>

      <main className="px-5 md:px-16 max-w-4xl mx-auto pb-32">
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm border border-outline-variant space-y-8 font-body-md text-on-surface-variant leading-relaxed">
          
          <section>
            <h2 className="font-headline-md text-2xl text-on-surface mb-4">1. Ketentuan Umum</h2>
            <p>
              Dengan mengakses dan menggunakan situs web ini, Anda dianggap telah membaca, memahami, dan menyetujui seluruh syarat dan ketentuan yang berlaku. PT Hanara Eksis Selaras berhak mengubah ketentuan ini kapan saja tanpa pemberitahuan sebelumnya.
            </p>
          </section>

          <section>
            <h2 className="font-headline-md text-2xl text-on-surface mb-4">2. Layanan dan Produk</h2>
            <p>
              Kami menyediakan layanan pembuatan dan penjualan furnitur (Standar, Custom, dan Interior). Gambar produk yang ditampilkan pada website adalah ilustrasi dan dapat memiliki sedikit perbedaan warna dengan produk asli akibat pencahayaan atau resolusi layar.
            </p>
          </section>

          <section>
            <h2 className="font-headline-md text-2xl text-on-surface mb-4">3. Pemesanan dan Pembayaran</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Pemesanan dapat dilakukan melalui kontak WhatsApp resmi yang tertera di situs web.</li>
              <li>Sistem pembayaran dan termin cicilan (jika ada) akan disepakati bersama antara pihak pembeli dan PT Hanara Eksis Selaras.</li>
              <li>Produksi akan dimulai setelah pembayaran Down Payment (DP) diterima dan dikonfirmasi.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-headline-md text-2xl text-on-surface mb-4">4. Pengiriman dan Instalasi</h2>
            <p>
              Kami menyediakan layanan pengiriman dan instalasi. Biaya tambahan mungkin berlaku tergantung jarak lokasi pengiriman. Waktu pengiriman akan diestimasikan berdasarkan ketersediaan barang dan jadwal antrean produksi.
            </p>
          </section>

          <section>
            <h2 className="font-headline-md text-2xl text-on-surface mb-4">5. Garansi</h2>
            <p>
              Semua produk custom dan interior dari PT Hanara Eksis Selaras dilengkapi dengan garansi kualitas (syarat dan durasi garansi diinformasikan saat pembelian). Garansi tidak berlaku untuk kerusakan yang disebabkan oleh kelalaian pengguna, bencana alam, atau modifikasi sepihak.
            </p>
          </section>

          <section>
            <h2 className="font-headline-md text-2xl text-on-surface mb-4">6. Hubungi Kami</h2>
            <p>
              Jika Anda memiliki pertanyaan terkait syarat dan ketentuan ini, silakan menghubungi admin kami melalui halaman Kontak atau langsung melalui WhatsApp resmi kami.
            </p>
          </section>

        </div>
      </main>
    </Layout>
  );
};

export default TermsAndConditions;
