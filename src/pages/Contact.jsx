import React from 'react';
import Layout from '../components/Layout';

const Contact = () => {
  return (
    <Layout>
      <header className="pt-24 pb-8 px-5 md:px-16 max-w-[1280px] mx-auto text-center">
        <h1 className="font-headline-xl text-4xl md:text-6xl mb-6">Contact Us</h1>
        <div className="w-[60px] h-[1px] bg-primary-container mx-auto mb-8"></div>
        <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">Get in touch to discuss your next project or inquire about our collections.</p>
      </header>

      <section className="px-5 md:px-16 max-w-3xl mx-auto pb-32 text-center">
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg border border-surface-variant flex flex-col items-center">
          <h2 className="font-headline-md text-3xl mb-8">Informasi Kontak</h2>
          
          <div className="flex flex-col gap-6 w-full max-w-md text-left mx-auto mb-10">
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary-container text-3xl mt-1">location_on</span>
              <div>
                <h4 className="font-headline-md text-lg">Showroom Kami</h4>
                <p className="font-body-md text-on-surface-variant leading-relaxed">
                  Pesona Gading Cibitung Blok F2 No. 07,<br/>
                  RT.04/RW.016, Wanajaya, Kec. Cibitung,<br/>
                  Kabupaten Bekasi, Jawa Barat 17520
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary-container text-3xl mt-1">schedule</span>
              <div>
                <h4 className="font-headline-md text-lg">Jam Operasional</h4>
                <p className="font-body-md text-on-surface-variant leading-relaxed">
                  Senin - Jumat: 10:00 - 19:00<br/>
                  Sabtu - Minggu: 11:00 - 17:00
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary-container text-3xl mt-1">call</span>
              <div>
                <h4 className="font-headline-md text-lg">WhatsApp</h4>
                <p className="font-body-md text-on-surface-variant leading-relaxed">
                  +62 895-3842-64960
                </p>
              </div>
            </div>
          </div>

          <a href="https://wa.me/62895384264960" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white font-button text-lg px-8 py-4 rounded-full hover:bg-[#128C7E] transition-all duration-300 shadow-md hover:shadow-lg w-full md:w-auto">
            <i className="fa-brands fa-whatsapp text-2xl"></i>
            Chat Admin Sekarang
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;