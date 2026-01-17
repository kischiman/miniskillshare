import React from 'react';
import { useMarketplace } from '../context/MarketplaceContext';
import Card from '../components/Card';

const OffersPage = ({ onExpertClick }) => {
  const { getOffers } = useMarketplace();
  const offers = getOffers();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-light text-sanctuary-900 mb-4">
          Skills & Services Available
        </h1>
      </div>

      {offers.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-sanctuary-500 text-lg">No offers available yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((offer) => (
            <Card key={offer.id} entry={offer} type="offer" onExpertClick={onExpertClick} />
          ))}
        </div>
      )}
    </div>
  );
};

export default OffersPage;