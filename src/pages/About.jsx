import React from 'react';
import Layout from '../components/Layout';

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <header className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#1a1c1c]/60 z-10"></div>
        <img src="/assets/images/living_room.png" alt="Our Story" className="absolute inset-0 w-full h-full object-cover object-center animate-pulse-slow" />
        <div className="relative z-20 text-center px-5 max-w-4xl mx-auto text-white drop-shadow-md">
          <h1 className="font-headline-lg text-4xl md:text-6xl mb-6 animate-fade-in-up text-white">PT Hanara Eksis Selaras</h1>
          <p className="font-body-lg text-lg md:text-xl opacity-90 animate-fade-in-up-delay-1 leading-relaxed text-white">
            Kepuasan konsumen adalah kebahagiaan kami.
          </p>
        </div>
      </header>

      {/* Our Story Section */}
      <section className="py-12 md:py-20 px-5 md:px-16 max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2 animate-fade-in-up-delay-1">
            <h2 className="font-headline-md text-3xl mb-6 text-on-surface">Our Story</h2>
            <div className="w-[60px] h-[2px] bg-primary-container mb-8"></div>
            <div className="font-body-md text-on-surface-variant space-y-6 text-lg leading-relaxed">
              <p>
                <strong>PT Hanara Eksis Selaras</strong> merupakan perusahaan yang bergerak di bidang furnitur, berfokus pada penyediaan Furnitur Standar, Custom, dan Interior. Kami hadir untuk memenuhi kebutuhan Anda akan furnitur berkualitas idaman yang menjadi pelengkap sempurna untuk setiap ruang.
              </p>
              <p>
                Kami memproduksi furnitur dengan tingkat presisi tinggi, dirancang sesuai desain dan sampel yang telah tervalidasi. Didukung oleh peralatan memadai dan pengrajin berpengalaman, serta penggunaan bahan baku unggulan, setiap produk yang kami hasilkan tidak hanya memikat secara estetika tetapi juga handal dan berkualitas tinggi.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 animate-fade-in-up-delay-2">
            <img src="/assets/images/kitchen.png" alt="Craftsmanship" className="w-full h-auto rounded-lg shadow-xl" />
          </div>
        </div>
      </section>

      {/* Visi & Misi */}
      <section className="py-12 md:py-20 px-5 md:px-16 bg-surface-bright border-y border-outline-variant">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-headline-md text-3xl mb-4">Visi & Misi</h2>
            <div className="w-[60px] h-[2px] bg-primary-container mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Visi */}
            <div className="bg-white p-10 rounded-xl shadow-sm border border-surface-variant hover:border-primary-container transition-colors duration-300 animate-fade-in-up-delay-1">
              <div className="flex items-center gap-4 mb-6">
                <span className="material-symbols-outlined text-4xl text-primary">visibility</span>
                <h3 className="font-headline-md text-2xl">Visi Kami</h3>
              </div>
              <p className="font-body-md text-on-surface-variant leading-relaxed text-lg">
                Menjadi perusahaan furniture ternama di Indonesia dan mampu bersaing di pasar global yang mengedepankan kualitas prima baik produk maupun layanan dengan harga yang terjangkau.
              </p>
            </div>

            {/* Misi */}
            <div className="bg-white p-10 rounded-xl shadow-sm border border-surface-variant hover:border-primary-container transition-colors duration-300 animate-fade-in-up-delay-2">
              <div className="flex items-center gap-4 mb-6">
                <span className="material-symbols-outlined text-4xl text-primary">flag</span>
                <h3 className="font-headline-md text-2xl">Misi Kami</h3>
              </div>
              <ul className="font-body-md text-on-surface-variant leading-relaxed text-lg space-y-4">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                  <span>Menjadi perusahaan furniture yang profesional yaitu sebuah perusahaan yang memiliki manajemen tepat guna dan daya guna dalam mengelola organisasi usaha.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                  <span>Memberikan produk berkualitas dalam memenuhi kebutuhan pelanggan.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                  <span>Selalu memberikan produk yang kreatif dan inovatif dengan harga terjangkau.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Kebijakan Mutu */}
      <section className="py-12 md:py-20 px-5 md:px-16 max-w-[1000px] mx-auto text-center animate-fade-in-up">
        <h2 className="font-headline-md text-3xl mb-6">Kebijakan Mutu</h2>
        <div className="w-[60px] h-[2px] bg-primary-container mx-auto mb-10"></div>
        <p className="font-body-lg text-xl text-on-surface-variant leading-relaxed italic border-l-4 border-primary pl-6 text-left md:text-center md:border-l-0 md:border-t-4 md:pt-10 md:pl-0 mx-auto">
          "Manajemen organisasi dan karyawan PT Hanara Eksis Selaras bertekad untuk senantiasa mengutamakan mutu produk dan pelayanan yang baik demi mencapai kepuasan pelanggan. Kami akan selalu berusaha meningkatkan kemampuan sumber daya manusia yang profesional dan mandiri secara berkelanjutan, guna meningkatkan kemampuan perusahaan demi terciptanya kepuasan konsumen terhadap setiap produk yang dihasilkan."
        </p>
      </section>

    </Layout>
  );
};

export default About;