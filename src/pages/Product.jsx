import React, { useState } from 'react';
import Layout from '../components/Layout';

const Product = () => {
  const [activeCategory, setActiveCategory] = useState([]);

  const products = [
    {
      id: 1,
      title: "Aurelian Velvet Sofa",
      category: "Sofa",
      desc: "Velvet / Emerald",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_DWsS6n9QS_pwyJJs5psdbuieqmZiyi75YIwSc4LJa7mPwRJNUMkhFmrTQjRsRi596AgiThE7d7Zr4PMC6BMtySfO97cPYkoTrdq_8UrARyttHpNFrMD9bra8EZewJ66PMaCIGQIBhGYB-oO3GTYNNxEzSKghs1r2ke9xukV5It3m0sKMd3RHDaXMlJMIoh73t98dqCm_ot2dqsok9dgLxF8s22vUwxIvt0BkBmzuVcgco2yNrr12a3UaezEyewCFEs1I4C1r7pUX"
    },
    {
      id: 2,
      title: "Nordic Linen Sectional",
      category: "Sofa",
      desc: "Linen / Off-White",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC5t-hjhwJOcV-j5DgcgrnqvtEKDq0B6mz1E2_QdC1iymh4lGQvEhInoRAnLqW3E66IFH2FUNskUbpitu3zmkK6UbJa9TFPWte5h2QCml8TvGzmxBahLQL2jjEBmvWEXNxvh9Mz-wFPX851OHmyOOjx7sRFZg-t1JGogH2cREUEzKAThyE0rhyibAtgMJFfHigly6soVhgQr5HoT9h3w_7Kewzl9vY7lP1JiALqQtG1gLtyfM50Y0XntF5el0bAZTSTMM38npZObeCL"
    },
    {
      id: 3,
      title: "Heritage Leather Couch",
      category: "Sofa",
      desc: "Leather / Cognac",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAof5kR523eWnaCkjtDSV21bcUVD0UZt9-w3haJhdq44eahq5JBBhp5ELoAY6SXf86lWmaHRWmhjByfVBGzE7EetQImHlD_SnM_W1g70rA9UVZmbeuoUfYg3RosCuBMrRRECafhzu3BPTfgW8AKNJeOP6KniS09iHWCXE8NHwbYjB0RdqzDybwaJsXI_aItjHaPU-_HL0NUqi8x1R9rs9PiWeszussM-IgVwIzMuIgrMqInm88xw-XbT5618Ss5daV5EgsL1pjhpcmJ"
    },
    {
      id: 4,
      title: "Lumina Lounge Sofa",
      category: "Sofa",
      desc: "Blend / Slate Grey",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVrTYsrt1LBQIvavEoDrC6HUEQEaqOoYwR2isOLxxVCFWR-f6QYAVdrPTTexp_7UmE1VdNK4XkI-bTgzY7jI-mWBYG0dIWUNKK2fdxN81Si5FFJKuKUd6ZdDq51wlG6ad5tV25ME8gLz8vdLqGuuT4OJ0hmxHTv9MViZSA6dDDz_s8whVXSd6M7OfF46R49QRXx8RDIy7xlAvpNpw7XkoYlnTMogvqEhA_SOWgEBbcuONy3e5icZbvcA3_SMiQjMetMbdB8ElgB4P8"
    },
    {
      id: 5,
      title: "Classic Armchair",
      category: "Kursi",
      desc: "Wood / Fabric",
      img: "/assets/images/living_room.png"
    },
    {
      id: 6,
      title: "Elegance Dining Table",
      category: "Meja",
      desc: "Marble / Brass",
      img: "/assets/images/kitchen.png"
    }
  ];

  const handleFilter = (cat) => {
    if (activeCategory.includes(cat)) {
      setActiveCategory(activeCategory.filter(c => c !== cat));
    } else {
      setActiveCategory([...activeCategory, cat]);
    }
  };

  const filteredProducts = activeCategory.length > 0
    ? products.filter(p => activeCategory.includes(p.category))
    : products;

  return (
    <Layout>
      <header className="max-w-[1280px] mx-auto px-5 md:px-16 pt-32 pb-16 md:pb-24 text-center">
        <h1 className="font-headline-xl text-4xl md:text-6xl mb-6">Our Product</h1>
        <div className="w-[60px] h-[1px] bg-primary-container mx-auto mb-8"></div>
        <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">
          Discover our curated selection of premium furniture, where architectural precision meets unparalleled comfort.
        </p>
      </header>

      <main className="max-w-[1280px] mx-auto px-5 md:px-16 pb-32 flex flex-col md:flex-row gap-12">
        {/* Filters Sidebar */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <div className="md:sticky md:top-32 space-y-8">
            <div>
              <h3 className="font-label-caps text-on-surface mb-4">CATEGORY</h3>
              <ul className="space-y-3 font-body-md text-on-surface-variant">
                {['Kursi', 'Meja', 'Sofa'].map((cat) => (
                  <li key={cat}>
                    <label className="flex items-center space-x-3 cursor-pointer hover:text-primary transition-colors">
                      <input 
                        type="checkbox" 
                        checked={activeCategory.includes(cat)}
                        onChange={() => handleFilter(cat)}
                        className="form-checkbox h-4 w-4 text-primary border-outline-variant focus:ring-primary rounded-sm"
                      />
                      <span>{cat}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-16">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative overflow-hidden aspect-[4/5] mb-6 bg-surface-bright rounded-lg">
                <img 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                  src={product.img} 
                  alt={product.title} 
                />
                <div className="absolute inset-0 border border-primary-container opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-lg"></div>
              </div>
              <div className="text-center">
                <h3 className="font-headline-md text-xl md:text-2xl mb-2">{product.title}</h3>
                <p className="font-body-md text-on-surface-variant mb-6">{product.desc}</p>
                <button className="bg-primary-container text-on-primary font-button px-8 py-3 rounded hover:bg-primary transition-colors duration-300 w-full sm:w-auto">
                  Tanya Harga
                </button>
              </div>
            </div>
          ))}
          {filteredProducts.length === 0 && (
            <div className="col-span-2 text-center py-12 text-on-surface-variant font-body-lg">
              No products found in the selected categories.
            </div>
          )}
        </div>
      </main>
    </Layout>
  );
};

export default Product;
