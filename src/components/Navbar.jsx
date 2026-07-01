import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Dropdown = ({ title, links }) => (
  <div className="relative group">
    <button className="text-on-surface group-hover:text-primary transition-colors duration-300 font-body-md font-semibold tracking-wide relative hover-gold-line flex items-center py-2">
      {title} <span className="material-symbols-outlined text-[16px] ml-1">expand_more</span>
    </button>
    <div className="absolute top-full left-0 mt-0 w-56 bg-white border border-outline-variant shadow-lg rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all ease-out duration-300 flex flex-col z-50">
      {links.map((link, idx) => (
        <Link key={idx} to={link.to} className="px-4 py-3 text-on-surface hover:text-primary hover:bg-surface-bright font-body-md border-b border-surface-variant last:border-0 transition-colors">
          {link.label}
        </Link>
      ))}
    </div>
  </div>
);

const MobileAccordion = ({ title, links, closeMenu }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col">
      <button onClick={() => setIsOpen(!isOpen)} className="text-on-surface font-body-md flex justify-between items-center py-2 text-left">
        {title} <span className="material-symbols-outlined">{isOpen ? 'expand_less' : 'expand_more'}</span>
      </button>
      {isOpen && (
        <div className="flex flex-col pl-4 mt-2 mb-2 space-y-3 border-l-2 border-primary-container">
          {links.map((link, idx) => (
            <Link key={idx} to={link.to} onClick={closeMenu} className="text-on-surface-variant text-sm font-body-md hover:text-primary transition-colors">
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMobileMenuOpen(false);

  const aboutLinks = [
    { label: 'Our Story', to: '/about' },
    { label: 'Terms & Conditions', to: '/terms' }
  ];

  const productLinks = [
    { label: 'Collection', to: '/collection' },
    { label: 'Loose Furniture', to: '/loose-furniture' },
    { label: 'Interior Services', to: '/interior-services' }
  ];



  return (
    <nav className={`fixed top-0 w-full z-50 bg-surface border-b border-outline-variant transition-all duration-300 ${isScrolled ? 'shadow-sm' : ''}`}>
      <div className="flex justify-between items-center px-5 md:px-16 py-4 max-w-[1280px] mx-auto">
        <Link to="/" className="font-headline-md text-3xl font-bold text-on-surface tracking-tight uppercase">
          Eksis Selaras
        </Link>
        
        <div className="hidden lg:flex space-x-6 xl:space-x-8 items-center mx-8">
          <Link to="/" className="text-on-surface hover:text-primary transition-colors duration-300 font-body-md font-semibold tracking-wide relative hover-gold-line py-2 whitespace-nowrap">Beranda</Link>
          <Dropdown title="About" links={aboutLinks} />
          <Link to="/product" className="text-on-surface hover:text-primary transition-colors duration-300 font-body-md font-semibold tracking-wide relative hover-gold-line py-2 whitespace-nowrap">Product</Link>
          <Link to="/partnership" className="text-on-surface hover:text-primary transition-colors duration-300 font-body-md font-semibold tracking-wide relative hover-gold-line py-2 whitespace-nowrap">Partnership</Link>
          <Link to="/portfolio" className="text-on-surface hover:text-primary transition-colors duration-300 font-body-md font-semibold tracking-wide relative hover-gold-line py-2 whitespace-nowrap">Projects</Link>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/contact" className="hidden lg:inline-block bg-primary-container text-on-primary font-button px-6 py-3 rounded hover:bg-primary transition-colors duration-300">
            Tanya Harga
          </Link>
          <button className="md:hidden text-on-surface" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <span className="material-symbols-outlined text-3xl">{isMobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>
      
      {isMobileMenuOpen && (
        <div className="md:hidden bg-surface border-b border-outline-variant py-4 px-5 flex flex-col space-y-2 max-h-[80vh] overflow-y-auto">
          <Link to="/" onClick={closeMenu} className="text-on-surface py-2 font-body-md">Beranda</Link>
          <MobileAccordion title="About" links={aboutLinks} closeMenu={closeMenu} />
          <Link to="/product" onClick={closeMenu} className="text-on-surface py-2 font-body-md">Product</Link>
          <Link to="/partnership" onClick={closeMenu} className="text-on-surface py-2 font-body-md">Partnership</Link>
          <Link to="/portfolio" onClick={closeMenu} className="text-on-surface py-2 font-body-md">Projects</Link>
          <Link to="/contact" onClick={closeMenu} className="bg-primary-container text-on-primary text-center py-3 rounded mt-4 font-button">Tanya Harga</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;