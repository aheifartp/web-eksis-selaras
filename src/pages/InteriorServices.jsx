import React from 'react';
import Layout from '../components/Layout';

const InteriorServices = () => {
  return (
    <Layout>
      <header className="pt-24 pb-8 px-5 md:px-16 max-w-[1280px] mx-auto text-center">
        <h1 className="font-headline-xl text-4xl md:text-6xl mb-6">Interior Services</h1>
        <div className="w-[60px] h-[1px] bg-primary-container mx-auto mb-8"></div>
        <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">From concept to completion, we craft spaces that inspire.</p>
      </header>

      <section className="px-5 md:px-16 max-w-[1280px] mx-auto pb-32 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-square bg-surface-variant rounded overflow-hidden">
          <img src="https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&q=80" alt="Interior Design" className="object-cover w-full h-full" />
        </div>
        <div>
          <h2 className="font-headline-md text-3xl mb-6">Bespoke Design Solutions</h2>
          <p className="font-body-md text-on-surface-variant mb-6 leading-relaxed">
            Our interior services are tailored to your lifestyle. Whether it's a complete home renovation, a custom kitchen set, or a perfectly designed kids' room, our team of experts will guide you through every step of the process.
          </p>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-3 font-body-md"><span className="material-symbols-outlined text-primary-container">check_circle</span> Initial Consultation</li>
            <li className="flex items-center gap-3 font-body-md"><span className="material-symbols-outlined text-primary-container">check_circle</span> Concept & 3D Design</li>
            <li className="flex items-center gap-3 font-body-md"><span className="material-symbols-outlined text-primary-container">check_circle</span> Production & Build</li>
            <li className="flex items-center gap-3 font-body-md"><span className="material-symbols-outlined text-primary-container">check_circle</span> Installation</li>
          </ul>
          <a href="/contact" className="inline-block bg-primary-container text-on-primary font-button px-8 py-4 rounded hover:bg-primary transition-colors">Start Your Project</a>
        </div>
      </section>
    </Layout>
  );
};

export default InteriorServices;