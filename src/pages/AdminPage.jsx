import React, { useState } from 'react';
import { useMarketplace } from '../context/MarketplaceContext';

const AdminPage = ({ onPageChange }) => {
  const { addEntry } = useMarketplace();
  const [formData, setFormData] = useState({
    name: '',
    category: 'offer',
    title: '',
    description: '',
    telegram: '',
    email: '',
    price: '',
    location: '',
    remote: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.title) return;

    const newEntry = {
      name: formData.name,
      type: formData.category,
      category: formData.category,
      description: formData.description,
      telegram: formData.telegram,
      email: formData.email,
      price: formData.price,
      location: formData.remote ? 'Remote' : formData.location,
    };

    if (formData.category === 'offer') {
      newEntry.services = formData.title;
      newEntry.skills = '';
      newEntry.needs = null;
    } else {
      newEntry.needs = formData.title;
      newEntry.services = null;
      newEntry.skills = null;
    }

    addEntry(newEntry);
    setFormData({ name: '', category: 'offer', title: '', description: '', telegram: '', email: '', price: '', location: '', remote: false });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
      // Clear location when remote is checked
      ...(name === 'remote' && checked ? { location: '' } : {})
    }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-light text-sanctuary-900 mb-4">
          Submit Entry
        </h1>
        <p className="text-lg text-sanctuary-600">
          Add your skills or needs to this Marketplace. <a 
            href="https://andrej-berlin.super.site/skill-mapping" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sanctuary-900 underline hover:text-sanctuary-700 transition-colors duration-200"
          >
            Click here for a guided exercise to uncover your skills.
          </a>
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        {/* Submit Entry Form */}
        <div className="bg-white border border-sanctuary-200 rounded-lg p-8">
          <h2 className="text-xl font-semibold text-sanctuary-900 mb-6">
            Add New Entry
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-sanctuary-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-sanctuary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sanctuary-500 focus:border-transparent"
                placeholder="Enter name"
                required
              />
            </div>

            <div>
              <label htmlFor="category" className="block text-sm font-medium text-sanctuary-700 mb-2">
                Category
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-sanctuary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sanctuary-500 focus:border-transparent"
              >
                <option value="offer">Offer</option>
                <option value="need">Need</option>
              </select>
            </div>

            <div>
              <label htmlFor="title" className="block text-sm font-medium text-sanctuary-700 mb-2">
                {formData.category === 'offer' ? 'Service/Skill Title' : 'What you need'}
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-sanctuary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sanctuary-500 focus:border-transparent"
                placeholder={formData.category === 'offer' ? 'e.g., Web Development, Photography' : 'e.g., Garden design help'}
                required
              />
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-sanctuary-700 mb-2">
                Description (optional)
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={3}
                className="w-full px-3 py-2 border border-sanctuary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sanctuary-500 focus:border-transparent"
                placeholder="Additional details about your offer or need"
              />
            </div>

            <div>
              <label htmlFor="telegram" className="block text-sm font-medium text-sanctuary-700 mb-2">
                Telegram Username (optional)
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-3 py-2 text-sm text-gray-500 bg-gray-50 border border-r-0 border-sanctuary-300 rounded-l-md">
                  @
                </span>
                <input
                  type="text"
                  id="telegram"
                  name="telegram"
                  value={formData.telegram}
                  onChange={handleChange}
                  className="flex-1 px-3 py-2 border border-sanctuary-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-sanctuary-500 focus:border-transparent"
                  placeholder="yourusername"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-sanctuary-700 mb-2">
                Email (optional)
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-sanctuary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sanctuary-500 focus:border-transparent"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="price" className="block text-sm font-medium text-sanctuary-700 mb-2">
                Price (optional)
              </label>
              <input
                type="text"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-sanctuary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sanctuary-500 focus:border-transparent"
                placeholder="e.g., $50, $100/hr, Free, Let's talk"
              />
            </div>

            <div>
              <label htmlFor="location" className="block text-sm font-medium text-sanctuary-700 mb-2">
                Location (optional)
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                disabled={formData.remote}
                className={`w-full px-3 py-2 border border-sanctuary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sanctuary-500 focus:border-transparent ${
                  formData.remote ? 'bg-gray-50 text-gray-400' : ''
                }`}
                placeholder="e.g., Berlin, Germany"
              />
              <div className="mt-2">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="remote"
                    checked={formData.remote}
                    onChange={handleChange}
                    className="rounded border-sanctuary-300 text-sanctuary-600 focus:ring-sanctuary-500"
                  />
                  <span className="ml-2 text-sm text-sanctuary-700">Remote</span>
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-sanctuary-900 text-white py-2 px-4 rounded-md hover:bg-sanctuary-800 transition-colors duration-200"
            >
              Add Entry
            </button>
          </form>
        </div>

        {/* Admin Dashboard Button */}
        <div className="mt-8 text-center">
          <button
            onClick={() => onPageChange('dashboard')}
            className="inline-flex items-center px-6 py-3 text-sm font-medium text-sanctuary-700 bg-sanctuary-100 border border-sanctuary-300 rounded-md hover:bg-sanctuary-200 transition-colors duration-200"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
            </svg>
            Admin Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;