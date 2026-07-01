const fs = require('fs');
const path = require('path');

const homeContent = `import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const slides = [
  {
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80",
    title: "Curated Spaces for Modern Living.",
    subtitle: "Bespoke interior solutions and architectural furniture designed for the minimalist-premium lifestyle."
  },
  {
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80",
    title: "Elegance in Every Detail.",
    subtitle: "Discover the Aurelian Series, where form meets ultimate function."
  },
  {
    image: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&q=80",
    title: "Transform Your Vision.",
    subtitle: "Expert interior services tailored to your unique lifestyle."
  }
];

const inspirasi = [
  { title: "Living Room", img: "https://images.unsplash.com/photo-1583847268964-b28ce8f31586?auto=format&fit=crop&q=80" },
  { title: "Kitchen Set", img: "https://images.unsplash.com/photo-1556910103-1c02745a872f?auto=format&fit=crop&q=80" },
  { title: "Master Bedroom", img: "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&q=80" },
  { title: "Kids Bedroom", img: "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80" }
];

const articles = [
  { title: "5 Tips Menata Ruang Tamu Minimalis", desc: "Pelajari cara memaksimalkan ruang dengan furniture multifungsi.", date: "12 Oct 2026" },
  { title: "Tren Warna Interior 2027", desc: "Eksplorasi warna-warna natural yang akan mendominasi tahun depan.", date: "05 Oct 2026" },
  { title: "Memilih Sofa yang Tepat", desc: "Panduan lengkap memilih sofa untuk kenyamanan maksimal keluarga Anda.", date: "28 Sep 2026" }
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Layout>
      {/* Hero Slider */}
      <section className="relative h-[819px] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
        {slides.map((slide, index) => (
          <div 
            key={index} 
            className={\`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out \${index === currentSlide ? 'opacity-100' : 'opacity-0'}\`}
          >
            <img src={slide.image} alt="Hero" className="w-full h-full object-cover object-center animate-pulse-slow" />
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
        ))}
        
        <div className="relative z-10 text-center px-5 md:px-16 text-on-primary">
          <h1 className="font-headline-xl text-4xl md:text-6xl mb-6 max-w-4xl mx-auto tracking-tight font-bold transition-all duration-500">
            {slides[currentSlide].title}
          </h1>
          <p className="font-body-lg text-lg mb-8 max-w-2xl mx-auto opacity-90 transition-all duration-500">
            {slides[currentSlide].subtitle}
          </p>
          <Link to="/collection" className="inline-block bg-primary-container text-on-primary font-button px-8 py-4 rounded hover:bg-primary transition-all duration-300 hover:scale-95">
            Explore Collections
          </Link>
        </div>

        {/* Slider Controls */}
        <div className="absolute bottom-10 left-0 w-full flex justify-center gap-3 z-10">
          {slides.map((_, index) => (
            <button 
              key={index} 
              onClick={() => setCurrentSlide(index)}
              className={\`w-3 h-3 rounded-full transition-all duration-300 \${index === currentSlide ? 'bg-primary-container scale-125' : 'bg-white/50'}\`}
            />
          ))}
        </div>
      </section>

      {/* Inspirasi Ruang */}
      <section className="py-24 px-5 md:px-16 max-w-[1280px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-headline-md text-3xl mb-4">Inspirasi Ruang</h2>
          <div className="w-[60px] h-[1px] bg-primary-container mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {inspirasi.map((item, idx) => (
            <Link to="/portfolio" key={idx} className="group relative aspect-square overflow-hidden rounded bg-surface-variant cursor-pointer block">
              <img src={item.img} alt={item.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <h3 className="text-white font-headline-md text-xl">{item.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Highlight Koleksi */}
      <section className="py-24 px-5 md:px-16 bg-surface-bright">
        <div className="max-w-[1280px] mx-auto text-center">
          <h2 className="font-headline-md text-3xl mb-4">Highlight Koleksi</h2>
          <div className="w-[60px] h-[1px] bg-primary-container mx-auto mb-12"></div>
          <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-70">
            <h3 className="font-headline-md text-2xl uppercase tracking-widest text-on-surface-variant">Aurelian</h3>
            <h3 className="font-headline-md text-2xl uppercase tracking-widest text-on-surface-variant">Nordic Loft</h3>
            <h3 className="font-headline-md text-2xl uppercase tracking-widest text-on-surface-variant">Heritage</h3>
            <h3 className="font-headline-md text-2xl uppercase tracking-widest text-on-surface-variant">Lumina</h3>
          </div>
          <div className="mt-12">
            <Link to="/collection" className="text-primary font-button hover:text-primary-container border-b border-primary pb-1 transition-colors">Lihat Semua Koleksi</Link>
          </div>
        </div>
      </section>

      {/* Artikel Terbaru */}
      <section className="py-24 px-5 md:px-16 max-w-[1280px] mx-auto">
         <div className="text-center mb-12">
          <h2 className="font-headline-md text-3xl mb-4">Artikel & Tips Terbaru</h2>
          <div className="w-[60px] h-[1px] bg-primary-container mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((art, idx) => (
            <div key={idx} className="border border-outline-variant rounded p-6 hover:shadow-md transition-shadow cursor-pointer">
              <p className="text-primary-container font-label-caps mb-3">{art.date}</p>
              <h3 className="font-headline-md text-xl mb-3">{art.title}</h3>
              <p className="font-body-md text-on-surface-variant mb-6 line-clamp-2">{art.desc}</p>
              <span className="text-primary font-button hover:text-primary-container transition-colors flex items-center">Baca Selengkapnya <span className="material-symbols-outlined text-[16px] ml-1">arrow_forward</span></span>
            </div>
          ))}
        </div>
      </section>

      {/* Consultation Section */}
      <section className="py-32 px-5 md:px-16 bg-surface-bright" id="consultation">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-center bg-white border border-surface-variant rounded-lg p-8 md:p-12 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-full md:w-1/2">
              <h2 className="font-headline-md text-3xl mb-4 font-semibold">Konsultasi Gratis</h2>
              <div className="w-[60px] h-px bg-primary-container mb-6"></div>
              <p className="font-body-md text-on-surface-variant mb-8">Discuss your vision with our expert designers and begin the journey to your perfect space.</p>
            </div>
            <div className="w-full md:w-1/2">
              <form className="space-y-4">
                <div>
                  <input className="w-full border border-surface-variant rounded p-4 font-body-md focus:border-primary-container outline-none transition-colors bg-surface-bright" placeholder="Name" type="text" />
                </div>
                <div>
                  <input className="w-full border border-surface-variant rounded p-4 font-body-md focus:border-primary-container outline-none transition-colors bg-surface-bright" placeholder="Phone / WA" type="tel" />
                </div>
                <div>
                  <textarea className="w-full border border-surface-variant rounded p-4 font-body-md focus:border-primary-container outline-none transition-colors bg-surface-bright resize-none" placeholder="Tell us about your needs..." rows="3"></textarea>
                </div>
                <button className="w-full bg-primary-container text-on-primary font-button px-6 py-4 rounded hover:bg-primary transition-colors duration-300" type="button">Request Consultation</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;`;

fs.writeFileSync(path.join('src', 'pages', 'Home.jsx'), homeContent);
console.log("Home updated");
