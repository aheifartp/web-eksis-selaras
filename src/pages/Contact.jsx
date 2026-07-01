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

export default Contact;