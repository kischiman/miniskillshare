import React from 'react';

const Navigation = ({ currentPage, onPageChange }) => {
  const pages = [
    { id: 'offers', label: 'Offers' },
    { id: 'needs', label: 'Needs' },
    { id: 'admin', label: 'Submit Entry' }
  ];

  return (
    <nav className="bg-white border-b border-sanctuary-200 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-semibold text-sanctuary-900 tracking-tight">
              Marketplace
            </h1>
          </div>
          
          <div className="flex items-center space-x-8">
            <div className="flex space-x-8">
              {pages.map((page) => (
                <button
                  key={page.id}
                  onClick={() => onPageChange(page.id)}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    currentPage === page.id
                      ? 'text-sanctuary-900 border-b-2 border-sanctuary-900'
                      : 'text-sanctuary-500 hover:text-sanctuary-700'
                  }`}
                >
                  {page.label}
                </button>
              ))}
            </div>
            <a 
              href="https://t.me/+q5_e9Q6qO3M3ZGY6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-sanctuary-500 hover:text-sanctuary-700 transition-colors duration-200"
            >
              <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18.717-1.826 9.112-1.826 9.112-.133.665-.513.828-.857.513l-3.301-2.486-1.65 1.595c-.18.18-.334.334-.686.334l.25-3.468 6.064-5.468c.265-.235-.056-.367-.414-.133l-7.506 4.735-3.223-1.01c-.701-.22-.717-.701.145-.037l12.564-4.853c.582-.22 1.09.133.904.871z"/>
              </svg>
              Telegram
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;