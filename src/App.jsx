import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Collections from './pages/Collections';
import LooseFurniture from './pages/LooseFurniture';
import InteriorServices from './pages/InteriorServices';
import Partnership from './pages/Partnership';
import ProjectPortfolio from './pages/ProjectPortfolio';
import Contact from './pages/Contact';
import TermsAndConditions from './pages/Terms';
import Article from './pages/Article';
import Product from './pages/Product';
import Aurelian from './pages/collection/Aurelian';
import Nordic from './pages/collection/Nordic';
import Heritage from './pages/collection/Heritage';
import Sofa from './pages/loose-furniture/Sofa';
import Table from './pages/loose-furniture/Table';
import Dining from './pages/loose-furniture/Dining';
import Developer from './pages/partnership/Developer';
import Showroom from './pages/partnership/Showroom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/collection" element={<Collections />} />
        <Route path="/collection/:id" element={<Collections />} /> {/* Placeholder for detail page */}
        <Route path="/loose-furniture" element={<LooseFurniture />} />
        <Route path="/interior-services" element={<InteriorServices />} />
        <Route path="/partnership" element={<Partnership />} />
        <Route path="/portfolio" element={<ProjectPortfolio />} />
        <Route path="/contact" element={<Contact />} />
      
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
      </Routes>
    </Router>
  );
}

export default App;