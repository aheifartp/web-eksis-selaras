import React from 'react';
import Layout from '../components/Layout';

export const projectsData = [
  {
    id: 1,
    title: "Modern Villa",
    location: "BALI, ID",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    title: "Urban Apartment",
    location: "JAKARTA, ID",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80"
  }
];

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
          {projectsData.map((project) => (
            <div key={project.id} className="aspect-video bg-surface-variant rounded overflow-hidden relative group">
              <img src={project.image} alt={project.title} className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-headline-md text-2xl">{project.title}</span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
};

export default ProjectPortfolio;