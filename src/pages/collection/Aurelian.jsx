import React from 'react';
import Layout from '../../components/Layout';

const AurelianSeries = () => {
  return (
    <Layout>
      <header className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#1a1c1c]/60 z-10"></div>
        <img src="/assets/images/living_room.png" alt="Aurelian Series" className="absolute inset-0 w-full h-full object-cover object-center animate-pulse-slow" />
        <div className="relative z-20 text-center px-5 text-on-primary">
          <h1 className="font-headline-lg text-4xl md:text-5xl mb-4 animate-fade-in-up">{title}</h1>
          <p className="font-body-lg text-lg opacity-90 animate-fade-in-up-delay-1">{subtitle}</p>
        </div>
      </header>
      
      <main className="py-24 px-5 md:px-16 max-w-[800px] mx-auto min-h-[40vh]">
        <div className="prose prose-lg mx-auto font-body-md text-on-surface-variant animate-fade-in-up-delay-2">
          <p className="mb-6">
            Welcome to the Aurelian Series page. This section provides detailed information about our premium offerings and philosophy.
            Every piece is crafted with meticulous attention to detail, adhering to the highest standards of UI/UX and interior design.
          </p>
          <p>
            Explore our carefully curated selections designed to elevate your living spaces with timeless elegance and modern functionality.
          </p>
        </div>
      </main>
    </Layout>
  );
};

export default AurelianSeries;
