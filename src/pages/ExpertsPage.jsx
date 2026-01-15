import React from 'react';
import { useMarketplace } from '../context/MarketplaceContext';

const ExpertsPage = () => {
  const { entries } = useMarketplace();

  // Group entries by person name
  const expertProfiles = entries.reduce((acc, entry) => {
    if (!acc[entry.name]) {
      acc[entry.name] = {
        name: entry.name,
        offers: [],
        needs: []
      };
    }
    
    if (entry.type === 'offer') {
      acc[entry.name].offers.push(entry);
    } else {
      acc[entry.name].needs.push(entry);
    }
    
    return acc;
  }, {});

  const experts = Object.values(expertProfiles);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-light text-sanctuary-900 mb-4">
          Experts
        </h1>
        <p className="text-lg text-sanctuary-600">
          Meet the people behind the offers and needs
        </p>
      </div>

      {experts.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-sanctuary-500 text-lg">No experts available yet.</p>
        </div>
      ) : (
        <div className="space-y-8">
          {experts.map((expert) => (
            <div key={expert.name} className="bg-white border border-sanctuary-200 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-sanctuary-900 mb-6">
                {expert.name}
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Offers Section */}
                {expert.offers.length > 0 && (
                  <div>
                    <h3 className="text-lg font-medium text-sanctuary-700 mb-4 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                      Offers ({expert.offers.length})
                    </h3>
                    <div className="space-y-3">
                      {expert.offers.map((offer) => (
                        <div key={offer.id} className="border border-sanctuary-100 rounded-md p-4 bg-sanctuary-25">
                          <h4 className="font-medium text-sanctuary-900 mb-2">
                            {offer.services}
                          </h4>
                          {offer.description && (
                            <p className="text-sm text-sanctuary-600 mb-2">
                              {offer.description}
                            </p>
                          )}
                          <div className="flex flex-wrap gap-2 text-xs">
                            {offer.price && (
                              <span className="bg-sanctuary-100 text-sanctuary-700 px-2 py-1 rounded">
                                {offer.price}
                              </span>
                            )}
                            {offer.location && (
                              <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">
                                {offer.location}
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Needs Section */}
                {expert.needs.length > 0 && (
                  <div>
                    <h3 className="text-lg font-medium text-sanctuary-700 mb-4 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Needs ({expert.needs.length})
                    </h3>
                    <div className="space-y-3">
                      {expert.needs.map((need) => (
                        <div key={need.id} className="border border-orange-100 rounded-md p-4 bg-orange-25">
                          <h4 className="font-medium text-sanctuary-900 mb-2">
                            {need.needs}
                          </h4>
                          {need.description && (
                            <p className="text-sm text-sanctuary-600 mb-2">
                              {need.description}
                            </p>
                          )}
                          <div className="flex flex-wrap gap-2 text-xs">
                            {need.price && (
                              <span className="bg-sanctuary-100 text-sanctuary-700 px-2 py-1 rounded">
                                {need.price}
                              </span>
                            )}
                            {need.location && (
                              <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">
                                {need.location}
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Contact Information */}
              <div className="mt-6 pt-4 border-t border-sanctuary-100">
                <div className="flex flex-wrap gap-4 text-sm">
                  {expert.offers.find(o => o.telegram) && (
                    <a
                      href={`https://t.me/${expert.offers.find(o => o.telegram).telegram}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sanctuary-600 hover:text-sanctuary-900"
                    >
                      <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18.717-1.826 9.112-1.826 9.112-.133.665-.513.828-.857.513l-3.301-2.486-1.65 1.595c-.18.18-.334.334-.686.334l.25-3.468 6.064-5.468c.265-.235-.056-.367-.414-.133l-7.506 4.735-3.223-1.01c-.701-.22-.717-.701.145-.037l12.564-4.853c.582-.22 1.09.133.904.871z"/>
                      </svg>
                      @{expert.offers.find(o => o.telegram).telegram}
                    </a>
                  )}
                  {expert.offers.find(o => o.email) && (
                    <a
                      href={`mailto:${expert.offers.find(o => o.email).email}`}
                      className="inline-flex items-center text-sanctuary-600 hover:text-sanctuary-900"
                    >
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      {expert.offers.find(o => o.email).email}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExpertsPage;