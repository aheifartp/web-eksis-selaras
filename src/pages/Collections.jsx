import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

const Collections = () => {
  const collections = [
    { title: 'Aurelian Series', category: 'LIVING ROOM', img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80' },
    { title: 'Nordic Loft', category: 'DINING', img: 'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&q=80' },
    { title: 'Heritage Modern', category: 'BEDROOM', img: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&q=80' },
    { title: 'Lumina', category: 'LIVING ROOM', img: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80' },
    { title: 'Terra Outdoor', category: 'OUTDOOR', img: 'https://images.unsplash.com/photo-1599839619722-39751411ea63?auto=format&fit=crop&q=80' },
  ];

  return (
    <Layout>
      <header className="pt-24 pb-8 px-5 md:px-16 max-w-[1280px] mx-auto text-center">
        <h1 className="font-headline-xl text-4xl md:text-6xl mb-6">Our Collections</h1>
        <div className="w-[60px] h-[1px] bg-primary-container mx-auto mb-8"></div>
        <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">Curated series of architectural furniture and bespoke interior solutions, designed for the modern purist.</p>
      </header>

      <section className="px-5 md:px-16 max-w-[1280px] mx-auto mb-24 flex justify-center">
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          <button className="font-button text-primary border-b-2 border-primary pb-1">All Collections</button>
          <button className="font-button text-on-surface-variant hover:text-primary transition-colors pb-1">Living Room</button>
          <button className="font-button text-on-surface-variant hover:text-primary transition-colors pb-1">Dining</button>
          <button className="font-button text-on-surface-variant hover:text-primary transition-colors pb-1">Bedroom</button>
          <button className="font-button text-on-surface-variant hover:text-primary transition-colors pb-1">Outdoor</button>
        </div>
      </section>

      <main className="px-5 md:px-16 max-w-[1280px] mx-auto pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((col, idx) => {
            const delayClass = idx % 3 === 0 ? 'animate-fade-in-up' : idx % 3 === 1 ? 'animate-fade-in-up-delay-1' : 'animate-fade-in-up-delay-2';
            return (
            <Link to={`/collection/${col.title.toLowerCase().replace(/ /g, '-')}`} key={idx} className={`group cursor-pointer block ${delayClass}`}>
              <div className="relative overflow-hidden aspect-[4/5] bg-surface-variant mb-6 rounded border border-transparent group-hover:border-primary-container transition-colors duration-300">
                <img src={col.img} alt={col.title} className="object-cover w-full h-full transform group-hover:scale-95 transition-transform duration-500" />
              </div>
              <div className="text-center">
                <h2 className="font-headline-md text-2xl mb-2">{col.title}</h2>
                <p className="font-label-caps text-on-surface-variant mb-4">{col.category}</p>
                <div className="font-button text-primary-container flex items-center justify-center w-full group-hover:text-primary transition-colors">
                  Lihat Koleksi <span className="material-symbols-outlined ml-2 text-[18px]">arrow_forward</span>
                </div>
              </div>
            </Link>
          )})}
        </div>
      </main>
    </Layout>
  );
};

export default Collections;