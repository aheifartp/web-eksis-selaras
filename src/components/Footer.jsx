import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-inverse-surface w-full mt-10 md:mt-16">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 px-5 md:px-16 py-20 max-w-[1280px] mx-auto">
        <div className="col-span-1 md:col-span-2">
          <div className="font-headline-md text-3xl font-bold text-on-primary mb-6 uppercase">
            Eksis Selaras
          </div>
          <p className="text-surface-variant font-body-md mb-6 max-w-sm">
            Elevating everyday living through thoughtful, minimalist design and uncompromising quality.
          </p>
          <div className="mb-8">
            <h4 className="font-label-caps text-on-primary mb-3">HEADQUARTERS</h4>
            <a href="https://www.google.com/maps/place/PT+Hanara+Eksis+Selaras/@-6.2450059,107.1034237,206m/data=!3m1!1e3!4m6!3m5!1s0x2e698580d975caa5:0x799c667bac0deeb1!8m2!3d-6.2447075!4d107.1038593!16s%2Fg%2F11sj4xpdlp?entry=ttu&g_ep=EgoyMDI2MDYyOC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="text-surface-variant hover:text-primary-container transition-colors duration-300 font-body-md flex items-start gap-2 max-w-sm">
              <span className="material-symbols-outlined text-lg mt-0.5">location_on</span>
              <span>Pesona Gading Cibitung Blok F2 No. 07, RT.04/RW.016, Wanajaya, Kec. Cibitung, Kabupaten Bekasi, Jawa Barat 17520</span>
            </a>
          </div>
          <p className="text-surface-variant font-body-md opacity-70">
            © 2026 Eksis Selaras. All rights reserved.
          </p>
        </div>
        <div className="col-span-1">
          <h4 className="font-label-caps text-on-primary mb-6">COMPANY</h4>
          <ul className="space-y-4">
            <li><Link to="/about" className="text-surface-variant hover:text-primary-container transition-colors duration-300 font-body-md">About</Link></li>
            <li><Link to="/terms" className="text-surface-variant hover:text-primary-container transition-colors duration-300 font-body-md">Terms & Conditions</Link></li>
          </ul>
        </div>
        <div className="col-span-1">
          <h4 className="font-label-caps text-on-primary mb-6">SUPPORT</h4>
          <ul className="space-y-4">
            <li><Link to="#" className="text-surface-variant hover:text-primary-container transition-colors duration-300 font-body-md">FAQ</Link></li>
            <li><Link to="#" className="text-surface-variant hover:text-primary-container transition-colors duration-300 font-body-md">Article</Link></li>
            <li><a href="#" className="text-surface-variant hover:text-primary-container transition-colors duration-300 font-body-md">WhatsApp</a></li>
          </ul>
        </div>
        <div className="col-span-1">
          <h4 className="font-label-caps text-on-primary mb-6">CONNECT</h4>
          <ul className="space-y-4">
            <li><a href="https://facebook.com/HanaraEksis" target="_blank" rel="noopener noreferrer" className="text-surface-variant hover:text-primary-container transition-colors duration-300 font-body-md flex items-center gap-3"><i className="fa-brands fa-facebook text-lg"></i> Facebook</a></li>
            <li><a href="https://twitter.com/HanaraEksis" target="_blank" rel="noopener noreferrer" className="text-surface-variant hover:text-primary-container transition-colors duration-300 font-body-md flex items-center gap-3"><i className="fa-brands fa-x-twitter text-lg"></i> Twitter</a></li>
            <li><a href="https://tiktok.com/@hanaraeksisselaras" target="_blank" rel="noopener noreferrer" className="text-surface-variant hover:text-primary-container transition-colors duration-300 font-body-md flex items-center gap-3"><i className="fa-brands fa-tiktok text-lg"></i> TikTok</a></li>
            <li><a href="https://shopee.co.id/hanaraeksisselaras" target="_blank" rel="noopener noreferrer" className="text-surface-variant hover:text-primary-container transition-colors duration-300 font-body-md flex items-center gap-3"><i className="fa-solid fa-bag-shopping text-lg"></i> Shopee</a></li>
            <li><a href="https://bukalapak.com/hanara_eksis_selaras_447153" target="_blank" rel="noopener noreferrer" className="text-surface-variant hover:text-primary-container transition-colors duration-300 font-body-md flex items-center gap-3"><i className="fa-solid fa-store text-lg"></i> Bukalapak</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;