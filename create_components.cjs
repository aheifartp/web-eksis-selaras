const fs = require('fs');
const path = require('path');

const files = {
  'src/components/Navbar.jsx': `import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  const NavLink = ({ to, children }) => (
    <Link 
      to={to} 
      className={\`\${isActive(to) ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-surface hover:text-primary relative hover-gold-line'} transition-colors duration-300 font-body-md\`}
    >
      {children}
    </Link>
  );

  return (
    <nav className={\`fixed top-0 w-full z-50 bg-surface border-b border-outline-variant transition-all duration-300 \${isScrolled ? 'shadow-sm' : ''}\`}>
      <div className="flex justify-between items-center px-5 md:px-16 py-4 max-w-[1280px] mx-auto">
        <Link to="/" className="font-headline-md text-3xl font-bold text-on-surface tracking-tight uppercase">
          Eksis Selaras
        </Link>
        
        <div className="hidden md:flex space-x-8 items-center">
          <NavLink to="/about">About</NavLink>
          <NavLink to="/collection">Collection</NavLink>
          <NavLink to="/loose-furniture">Furniture</NavLink>
          <NavLink to="/interior-services">Interior</NavLink>
          <NavLink to="/partnership">Partnership</NavLink>
          <NavLink to="/portfolio">Projects</NavLink>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/contact" className="hidden md:inline-block bg-primary-container text-on-primary font-button px-6 py-3 rounded hover:bg-primary transition-colors duration-300">
            Tanya Harga
          </Link>
          <button className="md:hidden text-on-surface" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <span className="material-symbols-outlined text-2xl">{isMobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>
      
      {isMobileMenuOpen && (
        <div className="md:hidden bg-surface border-b border-outline-variant py-4 px-5 flex flex-col space-y-4">
          <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-on-surface">About</Link>
          <Link to="/collection" onClick={() => setIsMobileMenuOpen(false)} className="text-on-surface">Collection</Link>
          <Link to="/loose-furniture" onClick={() => setIsMobileMenuOpen(false)} className="text-on-surface">Furniture</Link>
          <Link to="/interior-services" onClick={() => setIsMobileMenuOpen(false)} className="text-on-surface">Interior</Link>
          <Link to="/partnership" onClick={() => setIsMobileMenuOpen(false)} className="text-on-surface">Partnership</Link>
          <Link to="/portfolio" onClick={() => setIsMobileMenuOpen(false)} className="text-on-surface">Projects</Link>
          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="bg-primary-container text-on-primary text-center py-3 rounded mt-2">Tanya Harga</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;`,

  'src/components/Footer.jsx': `import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-inverse-surface w-full mt-32">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-5 md:px-16 py-24 max-w-[1280px] mx-auto">
        <div className="col-span-1 md:col-span-2">
          <div className="font-headline-md text-3xl font-bold text-on-primary mb-6 uppercase">
            Eksis Selaras
          </div>
          <p className="text-surface-variant font-body-md mb-8 max-w-sm">
            Elevating everyday living through thoughtful, minimalist design and uncompromising quality.
          </p>
          <p className="text-surface-variant font-body-md opacity-70">
            © 2026 Eksis Selaras. All rights reserved.
          </p>
        </div>
        <div className="col-span-1">
          <h4 className="font-label-caps text-on-primary mb-6">COMPANY</h4>
          <ul className="space-y-4">
            <li><Link to="/about" className="text-surface-variant hover:text-primary-container transition-colors duration-300 font-body-md">About</Link></li>
            <li><Link to="#" className="text-surface-variant hover:text-primary-container transition-colors duration-300 font-body-md">Career</Link></li>
            <li><Link to="#" className="text-surface-variant hover:text-primary-container transition-colors duration-300 font-body-md">Terms</Link></li>
            <li><Link to="#" className="text-surface-variant hover:text-primary-container transition-colors duration-300 font-body-md">Privacy</Link></li>
          </ul>
        </div>
        <div className="col-span-1">
          <h4 className="font-label-caps text-on-primary mb-6">SUPPORT</h4>
          <ul className="space-y-4">
            <li><Link to="#" className="text-surface-variant hover:text-primary-container transition-colors duration-300 font-body-md">FAQ</Link></li>
            <li><Link to="#" className="text-surface-variant hover:text-primary-container transition-colors duration-300 font-body-md">Article</Link></li>
            <li><a href="#" className="text-surface-variant hover:text-primary-container transition-colors duration-300 font-body-md">WhatsApp</a></li>
            <li><a href="#" className="text-surface-variant hover:text-primary-container transition-colors duration-300 font-body-md">Showroom</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;`,

  'src/components/Layout.jsx': `import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-surface text-on-surface font-body-md pt-24">
      <Navbar />
      <main className="flex-1 w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;`,

  'src/pages/Home.jsx': `import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[819px] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img className="w-full h-full object-cover object-center animate-pulse-slow" alt="Hero" src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80"/>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        <div className="relative z-10 text-center px-5 md:px-16 text-on-primary">
          <h1 className="font-headline-xl text-4xl md:text-6xl mb-6 max-w-4xl mx-auto tracking-tight font-bold">Curated Spaces for Modern Living.</h1>
          <p className="font-body-lg text-lg mb-8 max-w-2xl mx-auto opacity-90">Bespoke interior solutions and architectural furniture designed for the minimalist-premium lifestyle.</p>
          <Link to="/collection" className="inline-block bg-primary-container text-on-primary font-button px-8 py-4 rounded hover:bg-primary transition-all duration-300 hover:scale-95">Explore Collections</Link>
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

export default Home;`,

  'src/pages/About.jsx': `import React from 'react';
import Layout from '../components/Layout';

const About = () => {
  return (
    <Layout>
      <div className="max-w-[1280px] mx-auto px-5 md:px-16 py-20">
        <h1 className="font-headline-xl text-5xl font-bold mb-6 text-center">About Eksis Selaras</h1>
        <div className="w-[80px] h-[2px] bg-primary mx-auto mb-12"></div>
        <p className="text-center max-w-3xl mx-auto font-body-lg text-on-surface-variant leading-relaxed">
          Eksis Selaras is a premium furniture and interior design studio dedicated to creating curated spaces for modern living. 
          We believe that every environment should reflect the personality and lifestyle of its inhabitants, combined with uncompromising quality and minimalist aesthetics.
        </p>
      </div>
    </Layout>
  );
};

export default About;`,

  'src/App.jsx': `import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/collection" element={<div className="p-8 text-center mt-20 text-xl font-headline-md">Collection Page</div>} />
        <Route path="/loose-furniture" element={<div className="p-8 text-center mt-20 text-xl font-headline-md">Loose Furniture Page</div>} />
        <Route path="/interior-services" element={<div className="p-8 text-center mt-20 text-xl font-headline-md">Interior Services Page</div>} />
        <Route path="/partnership" element={<div className="p-8 text-center mt-20 text-xl font-headline-md">Partnership Page</div>} />
        <Route path="/portfolio" element={<div className="p-8 text-center mt-20 text-xl font-headline-md">Project Portfolio Page</div>} />
        <Route path="/contact" element={<div className="p-8 text-center mt-20 text-xl font-headline-md">Contact Page</div>} />
      </Routes>
    </Router>
  );
}

export default App;`
};

for (const [filepath, content] of Object.entries(files)) {
  const dir = path.dirname(filepath);
  if (dir !== '.') {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(filepath, content);
}
console.log("Components created.");
