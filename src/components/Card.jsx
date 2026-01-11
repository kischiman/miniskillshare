import React from 'react';

const Card = ({ entry, type }) => {
  const getTitle = () => {
    if (type === 'offer') {
      const services = entry.services || '';
      const skills = entry.skills || '';
      return [services, skills].filter(Boolean).join(' • ');
    } else {
      return entry.needs || '';
    }
  };

  const handleContact = () => {
    if (entry.telegram) {
      window.open(`https://t.me/${entry.telegram}`, '_blank');
    } else if (entry.email) {
      window.location.href = `mailto:${entry.email}`;
    }
  };

  return (
    <div className="bg-white border border-sanctuary-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200">
      <div className="flex-1">
        {/* Bold title/offer */}
        <h3 className="text-lg font-bold text-sanctuary-900 mb-2 leading-tight">
          {getTitle()}
        </h3>
        
        {/* Simple description */}
        {entry.description && (
          <p className="text-sanctuary-600 text-sm leading-relaxed mb-3">
            {entry.description}
          </p>
        )}
        
        {/* Name */}
        <p className="text-sanctuary-700 font-medium mb-4">
          {entry.name}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
              type === 'offer' 
                ? 'bg-green-100 text-green-800' 
                : 'bg-blue-100 text-blue-800'
            }`}>
              {type === 'offer' ? 'Offering' : 'Looking for'}
            </span>
            
            {entry.price && (
              <span className="px-2 py-1 text-xs font-medium text-sanctuary-700 bg-sanctuary-100 rounded">
                {entry.price}
              </span>
            )}
          </div>
          
          {entry.telegram || entry.email ? (
            <button 
              onClick={handleContact}
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors duration-200"
            >
              Contact
            </button>
          ) : (
            <span className="px-4 py-2 text-sm text-sanctuary-400">
              No contact info
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;