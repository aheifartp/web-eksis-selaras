import React from 'react';
import Layout from '../components/Layout';

const LooseFurniture = () => {
  return (
    <Layout>
      <header className="pt-24 pb-8 px-5 md:px-16 max-w-[1280px] mx-auto text-center">
        <h1 className="font-headline-xl text-4xl md:text-6xl mb-6">Loose Furniture</h1>
        <div className="w-[60px] h-[1px] bg-primary-container mx-auto mb-8"></div>
        <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">Discover individual pieces to perfectly complement your unique space.</p>
      </header>

      <main className="px-5 md:px-16 max-w-[1280px] mx-auto pb-32">
        <div className="flex justify-center items-center h-64 text-on-surface-variant font-body-lg border border-dashed border-outline-variant rounded">
          Products coming soon.
        </div>
      </main>
    </Layout>
  );
};

export default LooseFurniture;