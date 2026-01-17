import React from 'react';
import { useMarketplace } from '../context/MarketplaceContext';
import Card from '../components/Card';

const ProjectsPage = ({ onExpertClick }) => {
  const { getProjects } = useMarketplace();
  const projects = getProjects();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-light text-sanctuary-900 mb-4">
          Projects & Experiments
        </h1>
        <p className="text-lg text-sanctuary-600">
          Discover ongoing projects and experimental initiatives in the Sanctuary
        </p>
      </div>

      {projects.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-sanctuary-500 text-lg">No projects available yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id} entry={project} type="project" onExpertClick={onExpertClick} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;