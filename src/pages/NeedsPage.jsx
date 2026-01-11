import React from 'react';
import { useMarketplace } from '../context/MarketplaceContext';
import Card from '../components/Card';

const NeedsPage = () => {
  const { getNeeds } = useMarketplace();
  const needs = getNeeds();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-light text-sanctuary-900 mb-4">
          Community Needs
        </h1>
      </div>

      {needs.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-sanctuary-500 text-lg">No requests for help yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {needs.map((need) => (
            <Card key={need.id} entry={need} type="need" />
          ))}
        </div>
      )}
    </div>
  );
};

export default NeedsPage;