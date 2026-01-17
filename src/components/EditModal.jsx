import React, { useState, useEffect } from 'react';

const EditModal = ({ entry, isOpen, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    name: '',
    category: 'offer',
    title: '',
    description: '',
    telegram: '',
    email: '',
    price: '',
    url: ''
  });

  useEffect(() => {
    if (entry) {
      const getTitle = () => {
        if (entry.type === 'offer') return entry.services || '';
        if (entry.type === 'project') return entry.project_title || '';
        return entry.needs || '';
      };
      
      setFormData({
        name: entry.name || '',
        category: entry.type || 'offer',
        title: getTitle(),
        description: entry.description || '',
        telegram: entry.telegram || '',
        email: entry.email || '',
        price: entry.price || '',
        url: entry.url || ''
      });
    }
  }, [entry]);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.title) return;

    const updatedEntry = {
      ...entry,
      name: formData.name,
      type: formData.category,
      category: formData.category,
      description: formData.description,
      telegram: formData.telegram,
      email: formData.email,
      price: formData.price,
      url: formData.url
    };

    if (formData.category === 'offer') {
      updatedEntry.services = formData.title;
      updatedEntry.skills = '';
      updatedEntry.needs = null;
      updatedEntry.project_title = null;
    } else if (formData.category === 'project') {
      updatedEntry.project_title = formData.title;
      updatedEntry.services = null;
      updatedEntry.skills = null;
      updatedEntry.needs = null;
    } else {
      updatedEntry.needs = formData.title;
      updatedEntry.services = null;
      updatedEntry.skills = null;
      updatedEntry.project_title = null;
    }

    onSave(updatedEntry);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-sanctuary-900">
            Edit Entry
          </h3>
          <button
            onClick={onClose}
            className="text-sanctuary-400 hover:text-sanctuary-600"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-sanctuary-700 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-sanctuary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sanctuary-500 focus:border-transparent text-sm"
              required
            />
          </div>

          <div>
            <label htmlFor="category" className="block text-sm font-medium text-sanctuary-700 mb-1">
              Category
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-sanctuary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sanctuary-500 focus:border-transparent text-sm"
            >
              <option value="offer">Offer</option>
              <option value="need">Need</option>
              <option value="project">Project</option>
            </select>
          </div>

          <div>
            <label htmlFor="title" className="block text-sm font-medium text-sanctuary-700 mb-1">
              {formData.category === 'offer' ? 'Service/Skill' : formData.category === 'project' ? 'Project Title' : 'Need'}
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-sanctuary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sanctuary-500 focus:border-transparent text-sm"
              required
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-sanctuary-700 mb-1">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={3}
              className="w-full px-3 py-2 border border-sanctuary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sanctuary-500 focus:border-transparent text-sm"
            />
          </div>

          {formData.category === 'project' && (
            <div>
              <label htmlFor="url" className="block text-sm font-medium text-sanctuary-700 mb-1">
                Project URL
              </label>
              <input
                type="url"
                id="url"
                name="url"
                value={formData.url}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-sanctuary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sanctuary-500 focus:border-transparent text-sm"
                placeholder="https://example.com"
              />
            </div>
          )}

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="telegram" className="block text-sm font-medium text-sanctuary-700 mb-1">
                Telegram
              </label>
              <input
                type="text"
                id="telegram"
                name="telegram"
                value={formData.telegram}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-sanctuary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sanctuary-500 focus:border-transparent text-sm"
                placeholder="@username"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-sanctuary-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-sanctuary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sanctuary-500 focus:border-transparent text-sm"
              />
            </div>
          </div>

          <div>
            <label htmlFor="price" className="block text-sm font-medium text-sanctuary-700 mb-1">
              Price
            </label>
            <input
              type="text"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-sanctuary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sanctuary-500 focus:border-transparent text-sm"
              placeholder="e.g., $50, Free, Let's talk"
            />
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 text-sm font-medium text-sanctuary-700 bg-sanctuary-50 rounded-md hover:bg-sanctuary-100 transition-colors duration-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 text-sm font-medium text-white bg-sanctuary-900 rounded-md hover:bg-sanctuary-800 transition-colors duration-200"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;