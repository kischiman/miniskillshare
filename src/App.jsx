import React, { useState } from 'react';
import { MarketplaceProvider } from './context/MarketplaceContext';
import Navigation from './components/Navigation';
import OffersPage from './pages/OffersPage';
import NeedsPage from './pages/NeedsPage';
import ExpertsPage from './pages/ExpertsPage';
import AdminPage from './pages/AdminPage';
import DashboardPage from './pages/DashboardPage';

function App() {
  const [currentPage, setCurrentPage] = useState('offers');

  const renderPage = () => {
    switch (currentPage) {
      case 'offers':
        return <OffersPage />;
      case 'needs':
        return <NeedsPage />;
      case 'experts':
        return <ExpertsPage />;
      case 'admin':
        return <AdminPage onPageChange={setCurrentPage} />;
      case 'dashboard':
        return <DashboardPage />;
      default:
        return <OffersPage />;
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
