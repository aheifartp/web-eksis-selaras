const fs = require('fs');
const path = require('path');

const pages = {
  'src/pages/Collections.jsx': `import React from 'react';
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
          {collections.map((col, idx) => (
            <Link to={\`/collection/\${col.title.toLowerCase().replace(/ /g, '-')}\`} key={idx} className="group cursor-pointer block">
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
          ))}
        </div>
      </main>
    </Layout>
  );
};

export default Collections;`,

  'src/pages/LooseFurniture.jsx': `import React from 'react';
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

export default LooseFurniture;`,

  'src/pages/InteriorServices.jsx': `import React from 'react';
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

export default InteriorServices;`,

  'src/pages/Partnership.jsx': `import React from 'react';
import Layout from '../components/Layout';

const Partnership = () => {
  return (
    <Layout>
      <header className="pt-24 pb-8 px-5 md:px-16 max-w-[1280px] mx-auto text-center">
        <h1 className="font-headline-xl text-4xl md:text-6xl mb-6">Partnership Programs</h1>
        <div className="w-[60px] h-[1px] bg-primary-container mx-auto mb-8"></div>
        <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">Collaborate with Eksis Selaras to bring exceptional design to more spaces.</p>
      </header>

      <section className="px-5 md:px-16 max-w-[1280px] mx-auto pb-32 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-surface-bright border border-surface-variant p-8 rounded hover:shadow-md transition-shadow">
          <h2 className="font-headline-md text-2xl mb-4">Developer Project</h2>
          <p className="font-body-md text-on-surface-variant mb-8">Exclusive collaboration for property developers. Elevate your projects with our premium furniture and interior solutions.</p>
          <button className="text-primary-container font-button uppercase hover:text-primary transition-colors">Learn More</button>
        </div>
        <div className="bg-surface-bright border border-surface-variant p-8 rounded hover:shadow-md transition-shadow">
          <h2 className="font-headline-md text-2xl mb-4">Showroom Partners</h2>
          <p className="font-body-md text-on-surface-variant mb-8">Join our network of showroom partners and offer Eksis Selaras collections in your area.</p>
          <button className="text-primary-container font-button uppercase hover:text-primary transition-colors">Apply Now</button>
        </div>
      </section>
    </Layout>
  );
};

export default Partnership;`,

  'src/pages/ProjectPortfolio.jsx': `import React from 'react';
import Layout from '../components/Layout';

const ProjectPortfolio = () => {
  return (
    <Layout>
      <header className="pt-24 pb-8 px-5 md:px-16 max-w-[1280px] mx-auto text-center">
        <h1 className="font-headline-xl text-4xl md:text-6xl mb-6">Project Portfolio</h1>
        <div className="w-[60px] h-[1px] bg-primary-container mx-auto mb-8"></div>
        <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">Explore our completed projects showcasing the pinnacle of modern interior design.</p>
      </header>

      <main className="px-5 md:px-16 max-w-[1280px] mx-auto pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="aspect-video bg-surface-variant rounded overflow-hidden relative group">
             <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80" alt="Project 1" className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700" />
             <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
               <span className="text-white font-headline-md text-2xl">Modern Villa</span>
             </div>
           </div>
           <div className="aspect-video bg-surface-variant rounded overflow-hidden relative group">
             <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80" alt="Project 2" className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700" />
             <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
               <span className="text-white font-headline-md text-2xl">Urban Apartment</span>
             </div>
           </div>
        </div>
      </main>
    </Layout>
  );
};

export default ProjectPortfolio;`,

  'src/pages/Contact.jsx': `import React from 'react';
import Layout from '../components/Layout';

const Contact = () => {
  return (
    <Layout>
      <header className="pt-24 pb-8 px-5 md:px-16 max-w-[1280px] mx-auto text-center">
        <h1 className="font-headline-xl text-4xl md:text-6xl mb-6">Contact Us</h1>
        <div className="w-[60px] h-[1px] bg-primary-container mx-auto mb-8"></div>
        <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">Get in touch to discuss your next project or inquire about our collections.</p>
      </header>

      <section className="px-5 md:px-16 max-w-[1280px] mx-auto pb-32 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="font-headline-md text-2xl mb-6">Our Showroom</h2>
          <p className="font-body-md text-on-surface-variant mb-4 flex items-start gap-3">
            <span className="material-symbols-outlined text-primary-container">location_on</span>
            Jl. Sudirman No. 123, Jakarta Selatan<br/>Indonesia 12190
          </p>
          <p className="font-body-md text-on-surface-variant mb-4 flex items-start gap-3">
            <span className="material-symbols-outlined text-primary-container">schedule</span>
            Mon - Fri: 10:00 AM - 7:00 PM<br/>Sat - Sun: 11:00 AM - 5:00 PM
          </p>
          <p className="font-body-md text-on-surface-variant mb-8 flex items-center gap-3">
            <span className="material-symbols-outlined text-primary-container">call</span>
            +62 811-1234-5678
          </p>
          <a href="#" className="inline-flex items-center gap-2 bg-green-600 text-white font-button px-6 py-3 rounded hover:bg-green-700 transition-colors">
            Chat on WhatsApp
          </a>
        </div>

        <div>
          <form className="space-y-4">
            <div>
              <input className="w-full border border-surface-variant rounded p-4 font-body-md focus:border-primary-container outline-none transition-colors bg-surface-bright" placeholder="Your Name" type="text" />
            </div>
            <div>
              <input className="w-full border border-surface-variant rounded p-4 font-body-md focus:border-primary-container outline-none transition-colors bg-surface-bright" placeholder="Email Address" type="email" />
            </div>
            <div>
              <input className="w-full border border-surface-variant rounded p-4 font-body-md focus:border-primary-container outline-none transition-colors bg-surface-bright" placeholder="Subject" type="text" />
            </div>
            <div>
              <textarea className="w-full border border-surface-variant rounded p-4 font-body-md focus:border-primary-container outline-none transition-colors bg-surface-bright resize-none" placeholder="Your Message..." rows="5"></textarea>
            </div>
            <button className="w-full bg-primary-container text-on-primary font-button px-6 py-4 rounded hover:bg-primary transition-colors duration-300" type="button">Send Message</button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;`,
  'src/App.jsx': `import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Collections from './pages/Collections';
import LooseFurniture from './pages/LooseFurniture';
import InteriorServices from './pages/InteriorServices';
import Partnership from './pages/Partnership';
import ProjectPortfolio from './pages/ProjectPortfolio';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/collection" element={<Collections />} />
        <Route path="/collection/:id" element={<Collections />} /> {/* Placeholder for detail page */}
        <Route path="/loose-furniture" element={<LooseFurniture />} />
        <Route path="/interior-services" element={<InteriorServices />} />
        <Route path="/partnership" element={<Partnership />} />
        <Route path="/portfolio" element={<ProjectPortfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;`
};

for (const [filepath, content] of Object.entries(pages)) {
  const dir = path.dirname(filepath);
  if (dir !== '.') {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(filepath, content);
}
console.log("Other pages created.");
