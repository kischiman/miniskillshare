import React, { useState } from 'react';
import { useMarketplace } from '../context/MarketplaceContext';
import EditModal from '../components/EditModal';
import PasswordProtection from '../components/PasswordProtection';

const DashboardPage = () => {
  const { entries, addEntry, updateEntry, deleteEntry } = useMarketplace();
  const [editingEntry, setEditingEntry] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDashboardUnlocked, setIsDashboardUnlocked] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    category: 'offer',
    title: '',
    description: '',
    telegram: '',
    email: '',
    price: ''
  });

  const handleEdit = (entry) => {
    setEditingEntry(entry);
    setIsEditModalOpen(true);
  };

  const handleSaveEdit = (updatedEntry) => {
    updateEntry(updatedEntry.id, updatedEntry);
    setEditingEntry(null);
    setIsEditModalOpen(false);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this entry?')) {
      deleteEntry(id);
    }
  };

  const handleAddEntry = (e) => {
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
    setFormData({ name: '', category: 'offer', title: '', description: '', telegram: '', email: '', price: '' });
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const DashboardContent = () => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-light text-sanctuary-900 mb-4">
          Data Dashboard
        </h1>
        <p className="text-lg text-sanctuary-600">
          Manage all marketplace entries
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Add New Entry Form */}
        <div className="lg:col-span-1">
          <div className="bg-white border border-sanctuary-200 rounded-lg p-6 sticky top-4">
            <h2 className="text-xl font-semibold text-sanctuary-900 mb-6">
              Add New Entry
            </h2>
            
            <form onSubmit={handleAddEntry} className="space-y-4">
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
                </select>
              </div>

              <div>
                <label htmlFor="title" className="block text-sm font-medium text-sanctuary-700 mb-1">
                  {formData.category === 'offer' ? 'Service/Skill' : 'Need'}
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

              <div className="grid grid-cols-2 gap-2">
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
                  placeholder="e.g., $50, Free"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-sanctuary-900 text-white py-2 px-4 rounded-md hover:bg-sanctuary-800 transition-colors duration-200 text-sm"
              >
                Add Entry
              </button>
            </form>
          </div>
        </div>

        {/* Entries List */}
        <div className="lg:col-span-2">
          <div className="bg-white border border-sanctuary-200 rounded-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-sanctuary-900">
                All Entries ({entries.length})
              </h2>
            </div>
            
            <div className="space-y-4 max-h-screen overflow-y-auto">
              {entries.map((entry) => (
                <div key={entry.id} className="flex items-start justify-between p-4 border border-sanctuary-100 rounded-md hover:bg-sanctuary-50">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-medium text-sanctuary-900">{entry.name}</h3>
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        entry.type === 'offer' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {entry.type === 'offer' ? 'Offer' : 'Need'}
                      </span>
                      {entry.price && (
                        <span className="px-2 py-1 text-xs font-medium text-sanctuary-700 bg-sanctuary-100 rounded">
                          {entry.price}
                        </span>
                      )}
                    </div>
                    <p className="text-sm font-medium text-sanctuary-800 mb-1">
                      {entry.type === 'offer' ? entry.services : entry.needs}
                    </p>
                    {entry.description && (
                      <p className="text-xs text-sanctuary-600 mb-2">{entry.description}</p>
                    )}
                    <div className="flex items-center gap-4 text-xs text-sanctuary-500">
                      {entry.telegram && <span>📱 {entry.telegram}</span>}
                      {entry.email && <span>✉️ {entry.email}</span>}
                    </div>
                  </div>
                  <div className="flex gap-2 ml-4">
                    <button
                      onClick={() => handleEdit(entry)}
                      className="px-3 py-1 text-xs font-medium text-blue-700 bg-blue-50 rounded hover:bg-blue-100 transition-colors duration-200"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(entry.id)}
                      className="px-3 py-1 text-xs font-medium text-red-700 bg-red-50 rounded hover:bg-red-100 transition-colors duration-200"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <EditModal
        entry={editingEntry}
        isOpen={isEditModalOpen}
        onClose={() => {
          setIsEditModalOpen(false);
          setEditingEntry(null);
        }}
        onSave={handleSaveEdit}
      />
    </div>
  );

  return (
    <PasswordProtection onAuthenticated={setIsDashboardUnlocked}>
      <DashboardContent />
    </PasswordProtection>
  );
};

export default DashboardPage;