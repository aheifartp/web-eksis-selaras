import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const slides = [
  {
    image: "/assets/images/living_room.png",
    title: "Curated Spaces for Modern Living.",
    subtitle: "Bespoke interior solutions and architectural furniture designed for the minimalist-premium lifestyle."
  },
  {
    image: "/assets/images/living_room.png",
    title: "Elegance in Every Detail.",
    subtitle: "Discover the Aurelian Series, where form meets ultimate function."
  },
  {
    image: "/assets/images/bedroom.png",
    title: "Transform Your Vision.",
    subtitle: "Expert interior services tailored to your unique lifestyle."
  }
];

const services = [
  { title: "Furniture Standar", img: "/assets/images/living_room.png" },
  { title: "Custom", img: "/assets/images/kitchen.png" },
  { title: "Interior", img: "/assets/images/bedroom.png" }
];


const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Layout>
      {/* Hero Slider */}
      <section className="w-full max-w-[1280px] mx-auto px-5 md:px-16 pt-8 md:pt-12 pb-8">
        <div className="relative h-[400px] md:h-[600px] w-full rounded-2xl overflow-hidden shadow-xl flex items-center justify-center">
          {slides.map((slide, index) => (
            <div 
              key={index} 
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
            >
              <img src={slide.image} alt="Hero" className="w-full h-full object-cover object-center animate-pulse-slow" />
              <div className="absolute inset-0 bg-[#1a1c1c]/20"></div>
            </div>
          ))}

          {/* Navigation Arrows */}
          <button onClick={prevSlide} className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 text-white bg-black/20 hover:bg-primary-container p-2 md:p-3 rounded-full transition-all duration-300 hover:scale-110">
            <span className="material-symbols-outlined text-2xl md:text-3xl">chevron_left</span>
          </button>
          <button onClick={nextSlide} className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 text-white bg-black/20 hover:bg-primary-container p-2 md:p-3 rounded-full transition-all duration-300 hover:scale-110">
            <span className="material-symbols-outlined text-2xl md:text-3xl">chevron_right</span>
          </button>

          {/* Slider Controls */}
          <div className="absolute bottom-6 md:bottom-8 left-0 w-full flex justify-center gap-3 z-10">
            {slides.map((_, index) => (
              <button 
                key={index} 
                onClick={() => setCurrentSlide(index)}
                className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-primary-container scale-125' : 'bg-white/50'}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Our Service */}
      <section className="py-24 px-5 md:px-16 max-w-[1280px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-headline-md text-3xl mb-4">Our Service</h2>
          <div className="w-[60px] h-[1px] bg-primary-container mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((item, idx) => {
            const delayClass = idx === 1 ? 'animate-fade-in-up-delay-1' : idx === 2 ? 'animate-fade-in-up-delay-2' : 'animate-fade-in-up';
            return (
            <Link to="/interior-services" key={idx} className={`group relative aspect-[4/5] overflow-hidden rounded bg-surface-variant cursor-pointer block ${delayClass}`}>
              <img src={item.img} alt={item.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1c1c]/90 to-transparent flex items-end p-8">
                <h3 className="text-white font-headline-md text-2xl mb-2">{item.title}</h3>
              </div>
            </Link>
          )})}
        </div>
      </section>

      {/* Powered by Trusted Brands */}
      <section className="py-10 md:py-16 px-5 md:px-16 bg-surface-bright">
        <div className="max-w-[1280px] mx-auto text-center">
          <h2 className="font-headline-md text-3xl mb-12">Powered by Trusted Brands</h2>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 animate-fade-in-up">
            {['Ariston', 'Delizia', 'Franke', 'Modena', 'Rinnai', 'CGS', 'Blanco', 'Verona', 'Florence', 'Blum', 'Hettich', 'Suspa', 'Lamp', 'Rehau', 'Hellenoz', 'Triem', 'Staron', 'Philips', 'Luxon', 'Hafele', 'Goodrich', 'UCI', 'Carta', 'Beyond Floor', 'Serba Antik', 'Ecourban', 'Hikaron'].map((brand, idx) => (
              <span key={idx} className="font-headline-md text-lg md:text-xl font-bold tracking-wider text-on-surface-variant/50 hover:text-primary transition-colors cursor-pointer px-2">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;