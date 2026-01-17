import React, { useState } from 'react';
import { MarketplaceProvider } from './context/MarketplaceContext';
import Navigation from './components/Navigation';
import OffersPage from './pages/OffersPage';
import NeedsPage from './pages/NeedsPage';
import ExpertsPage from './pages/ExpertsPage';
import ProjectsPage from './pages/ProjectsPage';
import AdminPage from './pages/AdminPage';
import DashboardPage from './pages/DashboardPage';

function App() {
  const [currentPage, setCurrentPage] = useState('projects');
  const [selectedExpert, setSelectedExpert] = useState(null);

  const navigateToExpert = (expertName) => {
    setSelectedExpert(expertName);
    setCurrentPage('experts');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'offers':
        return <OffersPage onExpertClick={navigateToExpert} />;
      case 'needs':
        return <NeedsPage onExpertClick={navigateToExpert} />;
      case 'experts':
        return <ExpertsPage selectedExpert={selectedExpert} onClearSelection={() => setSelectedExpert(null)} />;
      case 'projects':
        return <ProjectsPage onExpertClick={navigateToExpert} />;
      case 'admin':
        return <AdminPage onPageChange={setCurrentPage} />;
      case 'dashboard':
        return <DashboardPage />;
      default:
        return <ProjectsPage onExpertClick={navigateToExpert} />;
    }
  };

  return (
    <MarketplaceProvider>
      <div className="min-h-screen bg-sanctuary-50">
        <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
        <main>
          {renderPage()}
        </main>
      </div>
    </MarketplaceProvider>
  );
}

export default App
