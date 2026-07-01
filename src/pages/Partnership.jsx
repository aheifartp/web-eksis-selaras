import React from 'react';
import Layout from '../components/Layout';
import { projectsData } from './ProjectPortfolio';

const Partnership = () => {
  return (
    <Layout>
      <main className="flex-grow pt-16 md:pt-24">
        {/* Hero Section */}
        <section className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden bg-surface-bright mt-4 md:mt-8 max-w-[1280px] mx-auto rounded-none md:rounded-2xl shadow-xl">
          <div className="absolute inset-0 w-full h-full">
            <div 
              className="bg-cover bg-center w-full h-full opacity-60" 
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDCymFMvYGrIoTqkNYG0Oj74LRXimqtyioh1pkPe5QFRj_S20LqRhleaNG1RZ_vUUE-gM0JZ__rh-mIIflGjHWN5erm6V23-nlOy4idZpWvZdKM_Son6abmYNd8PzyNo8qDsUcSNLVmCykdG-CzhMevxDvlanuK4XCTf2NHG1z5eiG5NIqOB_m6qP1wxuRHeFpybHC06o62PAlGkEvCCUxXr4ViqYFDuFMJHXWbmNpUgeUc8uwwA1KnDMVAsaMgfQPbpH2QiXoXrlsm')" }}
            ></div>
            <div className="absolute inset-0 bg-[#1a1c1c]/40"></div>
          </div>
          <div className="relative z-10 text-center px-5 max-w-[1280px] mx-auto">
            <h1 className="font-headline-xl text-4xl md:text-6xl text-white mb-6 animate-fade-in-up drop-shadow-md">Developer Partnerships</h1>
            <div className="w-[60px] h-[1px] bg-primary-container mx-auto mb-8"></div>
            <p className="font-body-lg text-white/90 max-w-2xl mx-auto drop-shadow-sm animate-fade-in-up-delay-1">
              Elevating residential developments through bespoke interior solutions and curated architectural furniture, designed for scale and unparalleled luxury.
            </p>
          </div>
        </section>

        {/* Tailored Solutions Section */}
        <section className="py-24 px-5 md:px-16 bg-surface max-w-[1280px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-headline-md text-3xl text-on-surface mb-4">Tailored Solutions for Property Developers</h2>
            <div className="w-[60px] h-[1px] bg-primary-container mx-auto mb-6"></div>
            <p className="font-body-md text-on-surface-variant max-w-3xl mx-auto">
              We partner with visionary developers to deliver cohesive, premium interior experiences that increase property value and accelerate sales.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="flex flex-col items-center text-center p-8 bg-white border border-outline-variant rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <span className="material-symbols-outlined text-primary-container text-4xl mb-6" style={{ fontVariationSettings: "'FILL' 0" }}>architecture</span>
              <h3 className="font-headline-md text-2xl text-on-surface mb-4">Seamless Integration</h3>
              <p className="font-body-md text-on-surface-variant">
                Our design teams work closely with your architects from the earliest stages to ensure furniture and interior layouts perfectly complement the structural vision.
              </p>
            </div>
            {/* Benefit 2 */}
            <div className="flex flex-col items-center text-center p-8 bg-white border border-outline-variant rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <span className="material-symbols-outlined text-primary-container text-4xl mb-6" style={{ fontVariationSettings: "'FILL' 0" }}>inventory_2</span>
              <h3 className="font-headline-md text-2xl text-on-surface mb-4">Scalable Quality</h3>
              <p className="font-body-md text-on-surface-variant">
                We maintain uncompromising luxury standards while possessing the manufacturing capability to furnish multi-unit developments efficiently and consistently.
              </p>
            </div>
            {/* Benefit 3 */}
            <div className="flex flex-col items-center text-center p-8 bg-white border border-outline-variant rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <span className="material-symbols-outlined text-primary-container text-4xl mb-6" style={{ fontVariationSettings: "'FILL' 0" }}>sell</span>
              <h3 className="font-headline-md text-2xl text-on-surface mb-4">Market Advantage</h3>
              <p className="font-body-md text-on-surface-variant">
                Turnkey interior packages styled by Eksis Selaras provide a compelling differentiator, attracting high-net-worth buyers and expediting market absorption.
              </p>
            </div>
          </div>
        </section>

        {/* Our Process Timeline */}
        <section className="py-24 px-5 md:px-16 bg-surface-bright border-y border-outline-variant">
          <div className="max-w-[1280px] mx-auto">
            <div className="mb-16 text-center md:text-left">
              <h2 className="font-headline-md text-3xl text-on-surface mb-4">Our Process</h2>
              <div className="w-[60px] h-[1px] bg-primary-container mb-6 mx-auto md:mx-0"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              {/* Connector Line (Desktop) */}
              <div className="hidden md:block absolute top-[24px] left-[10%] right-[10%] h-[1px] bg-outline-variant z-0"></div>
              
              {/* Step 1 */}
              <div className="relative z-10 flex flex-col items-center text-center md:items-start md:text-left">
                <div className="w-12 h-12 rounded-full bg-white border-2 border-primary-container flex items-center justify-center font-headline-md text-xl text-primary-container mb-6 mx-auto md:mx-0">01</div>
                <h4 className="font-headline-md text-2xl text-on-surface mb-3">Initial Consultation</h4>
                <p className="font-body-md text-on-surface-variant">Aligning on project scope, target demographic, and overarching design narrative for the development.</p>
              </div>
              {/* Step 2 */}
              <div className="relative z-10 flex flex-col items-center text-center md:items-start md:text-left">
                <div className="w-12 h-12 rounded-full bg-white border-2 border-primary-container flex items-center justify-center font-headline-md text-xl text-primary-container mb-6 mx-auto md:mx-0">02</div>
                <h4 className="font-headline-md text-2xl text-on-surface mb-3">Design Proposal</h4>
                <p className="font-body-md text-on-surface-variant">Presenting curated FF&E schedules, material palettes, and spatial layouts tailored to individual unit typologies.</p>
              </div>
              {/* Step 3 */}
              <div className="relative z-10 flex flex-col items-center text-center md:items-start md:text-left">
                <div className="w-12 h-12 rounded-full bg-white border-2 border-primary-container flex items-center justify-center font-headline-md text-xl text-primary-container mb-6 mx-auto md:mx-0">03</div>
                <h4 className="font-headline-md text-2xl text-on-surface mb-3">Production</h4>
                <p className="font-body-md text-on-surface-variant">Sourcing and manufacturing bespoke pieces through our vetted network, ensuring rigorous quality control.</p>
              </div>
              {/* Step 4 */}
              <div className="relative z-10 flex flex-col items-center text-center md:items-start md:text-left">
                <div className="w-12 h-12 rounded-full bg-white border-2 border-primary-container flex items-center justify-center font-headline-md text-xl text-primary-container mb-6 mx-auto md:mx-0">04</div>
                <h4 className="font-headline-md text-2xl text-on-surface mb-3">Installation</h4>
                <p className="font-body-md text-on-surface-variant">White-glove delivery and meticulous staging by our specialized teams, ready for immediate handover.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-24 px-5 md:px-16 bg-surface max-w-[1280px] mx-auto">
          <div className="mb-12 flex flex-col md:flex-row justify-between items-baseline text-center md:text-left">
            <div>
              <h2 className="font-headline-md text-3xl text-on-surface mb-4">Past Projects</h2>
              <div className="w-[60px] h-[1px] bg-primary-container mb-6 mx-auto md:mx-0"></div>
            </div>
            <a className="font-label-caps text-sm text-on-surface border-b border-on-surface hover:text-primary hover:border-primary transition-colors pb-1 uppercase mt-4 md:mt-0 inline-block" href="#">VIEW ALL CASE STUDIES</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectsData.map((project, index) => (
              <div key={project.id} className={`group cursor-pointer overflow-hidden bg-white p-2 border border-transparent hover:border-primary-container transition-all duration-500 rounded-lg shadow-sm ${index % 2 === 1 ? 'md:mt-16' : ''}`}>
                <div className="aspect-[4/5] md:aspect-[16/9] lg:aspect-[4/5] overflow-hidden mb-6 bg-surface-variant rounded">
                  <img 
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105" 
                    src={project.image} 
                    alt={project.title}
                  />
                </div>
                <div className="px-2 pb-4">
                  <p className="font-label-caps text-xs tracking-widest text-primary-container mb-2 uppercase">{project.location}</p>
                  <h3 className="font-headline-md text-2xl text-on-surface">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-24 px-5 md:px-16 bg-white border-t border-outline-variant text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-headline-md text-3xl md:text-4xl text-on-surface mb-6">Tertarik bekerja sama?</h2>
            <div className="w-[60px] h-[1px] bg-primary-container mx-auto mb-8"></div>
            <a href="/contact" className="inline-block font-button text-sm tracking-wider bg-primary-container text-on-primary px-10 py-4 rounded hover:bg-primary transition-colors min-w-[200px] shadow-md hover:shadow-lg uppercase">
              Hubungi Kami
            </a>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Partnership;