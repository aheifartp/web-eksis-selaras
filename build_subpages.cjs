const fs = require('fs');
const path = require('path');

// 1. Update Home.jsx to use local images
let homePath = path.join('src', 'pages', 'Home.jsx');
let homeContent = fs.readFileSync(homePath, 'utf8');

homeContent = homeContent.replace(
  /"https:\/\/images\.unsplash\.com\/photo-1600210492486-724fe5c67fb0[^"]*"/g,
  '"/assets/images/living_room.png"'
).replace(
  /"https:\/\/images\.unsplash\.com\/photo-1618221195710-dd6b41faaea6[^"]*"/g,
  '"/assets/images/living_room.png"'
).replace(
  /"https:\/\/images\.unsplash\.com\/photo-1595515106969-1ce29566ff1c[^"]*"/g,
  '"/assets/images/bedroom.png"'
).replace(
  /"https:\/\/images\.unsplash\.com\/photo-1583847268964-b28ce8f31586[^"]*"/g,
  '"/assets/images/living_room.png"'
).replace(
  /"https:\/\/images\.unsplash\.com\/photo-1556910103-1c02745a872f[^"]*"/g,
  '"/assets/images/kitchen.png"'
).replace(
  /"https:\/\/images\.unsplash\.com\/photo-1554995207-c18c203602cb[^"]*"/g,
  '"/assets/images/bedroom.png"'
).replace(
  /"https:\/\/images\.unsplash\.com\/photo-1505693314120-0d443867891c[^"]*"/g,
  '"/assets/images/dining_room.png"'
);
fs.writeFileSync(homePath, homeContent);

// 2. Update Collections.jsx to use local images
let collPath = path.join('src', 'pages', 'Collections.jsx');
let collContent = fs.readFileSync(collPath, 'utf8');
collContent = collContent.replace(
  /"https:\/\/images\.unsplash\.com\/photo-1618221195710-dd6b41faaea6[^"]*"/g,
  '"/assets/images/living_room.png"'
).replace(
  /"https:\/\/images\.unsplash\.com\/photo-1595515106969-1ce29566ff1c[^"]*"/g,
  '"/assets/images/dining_room.png"'
).replace(
  /"https:\/\/images\.unsplash\.com\/photo-1554995207-c18c203602cb[^"]*"/g,
  '"/assets/images/bedroom.png"'
).replace(
  /"https:\/\/images\.unsplash\.com\/photo-1505693314120-0d443867891c[^"]*"/g,
  '"/assets/images/living_room.png"'
).replace(
  /"https:\/\/images\.unsplash\.com\/photo-1599839619722-39751411ea63[^"]*"/g,
  '"/assets/images/dining_room.png"'
);
fs.writeFileSync(collPath, collContent);

// 3. Create subpages
const createPage = (filename, title, subtitle, bgImage) => {
  const fullPath = path.join('src', 'pages', filename);
  const dir = path.dirname(fullPath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  
  const content = `import React from 'react';
import Layout from '${filename.includes('/') ? '../' : ''}../components/Layout';

const ${title.replace(/[^a-zA-Z]/g, '')} = () => {
  return (
    <Layout>
      <header className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#1a1c1c]/60 z-10"></div>
        <img src="${bgImage}" alt="${title}" className="absolute inset-0 w-full h-full object-cover object-center animate-pulse-slow" />
        <div className="relative z-20 text-center px-5 text-on-primary">
          <h1 className="font-headline-lg text-4xl md:text-5xl mb-4 animate-fade-in-up">{title}</h1>
          <p className="font-body-lg text-lg opacity-90 animate-fade-in-up-delay-1">{subtitle}</p>
        </div>
      </header>
      
      <main className="py-24 px-5 md:px-16 max-w-[800px] mx-auto min-h-[40vh]">
        <div className="prose prose-lg mx-auto font-body-md text-on-surface-variant animate-fade-in-up-delay-2">
          <p className="mb-6">
            Welcome to the ${title} page. This section provides detailed information about our premium offerings and philosophy.
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

export default ${title.replace(/[^a-zA-Z]/g, '')};
`;
  fs.writeFileSync(path.join('src', 'pages', filename), content);
};

// Create pages
createPage('Terms.jsx', 'Terms & Conditions', 'Important information about our services.', '/assets/images/living_room.png');
createPage('Article.jsx', 'Blog & Articles', 'Insights and tips on premium interior design.', '/assets/images/dining_room.png');
createPage('collection/Aurelian.jsx', 'Aurelian Series', 'Elegance in every detail.', '/assets/images/living_room.png');
createPage('collection/Nordic.jsx', 'Nordic Loft', 'Minimalist Scandinavian inspired designs.', '/assets/images/dining_room.png');
createPage('collection/Heritage.jsx', 'Heritage Modern', 'Classic aesthetics meets contemporary function.', '/assets/images/bedroom.png');
createPage('loose-furniture/Sofa.jsx', 'Premium Sofas', 'Uncompromising comfort and style.', '/assets/images/living_room.png');
createPage('loose-furniture/Table.jsx', 'Coffee & Side Tables', 'The perfect centerpiece for your space.', '/assets/images/dining_room.png');
createPage('loose-furniture/Dining.jsx', 'Dining Sets', 'Gather around elegance.', '/assets/images/kitchen.png');
createPage('partnership/Developer.jsx', 'Developer Projects', 'Bespoke solutions for large scale developments.', '/assets/images/living_room.png');
createPage('partnership/Showroom.jsx', 'Showroom Partners', 'Join our network of premium retailers.', '/assets/images/bedroom.png');

// 4. Update App.jsx to include these routes
let appPath = path.join('src', 'App.jsx');
let appContent = fs.readFileSync(appPath, 'utf8');

const importsToAdd = `
import TermsAndConditions from './pages/Terms';
import Article from './pages/Article';
import Aurelian from './pages/collection/Aurelian';
import Nordic from './pages/collection/Nordic';
import Heritage from './pages/collection/Heritage';
import Sofa from './pages/loose-furniture/Sofa';
import Table from './pages/loose-furniture/Table';
import Dining from './pages/loose-furniture/Dining';
import Developer from './pages/partnership/Developer';
import Showroom from './pages/partnership/Showroom';
`;

const routesToAdd = `
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/article" element={<Article />} />
        <Route path="/collection/aurelian-series" element={<Aurelian />} />
        <Route path="/collection/nordic-loft" element={<Nordic />} />
        <Route path="/collection/heritage-modern" element={<Heritage />} />
        <Route path="/loose-furniture/sofa" element={<Sofa />} />
        <Route path="/loose-furniture/table" element={<Table />} />
        <Route path="/loose-furniture/dining" element={<Dining />} />
        <Route path="/partnership/developer-project" element={<Developer />} />
        <Route path="/partnership/showroom-partners" element={<Showroom />} />
`;

appContent = appContent.replace("import Contact from './pages/Contact';", "import Contact from './pages/Contact';" + importsToAdd);
appContent = appContent.replace("</Routes>", routesToAdd + "      </Routes>");
fs.writeFileSync(appPath, appContent);

console.log("Subpages created, images updated, routes added.");
