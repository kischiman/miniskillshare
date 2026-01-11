import React, { useState, useEffect } from 'react';

const DASHBOARD_PASSWORD = 'sanctuary2025';

const PasswordProtection = ({ children, onAuthenticated }) => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const savedAuth = localStorage.getItem('dashboard_auth');
    if (savedAuth === 'true') {
      setIsAuthenticated(true);
      if (onAuthenticated) onAuthenticated(true);
    }
  }, [onAuthenticated]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === DASHBOARD_PASSWORD) {
      setIsAuthenticated(true);
      setError('');
      localStorage.setItem('dashboard_auth', 'true');
      if (onAuthenticated) onAuthenticated(true);
    } else {
      setError('Incorrect password');
      setPassword('');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPassword('');
    localStorage.removeItem('dashboard_auth');
    if (onAuthenticated) onAuthenticated(false);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-sanctuary-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-semibold text-sanctuary-900 mb-6 text-center">
            Dashboard Access
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-sanctuary-700 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-sanctuary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sanctuary-500 focus:border-transparent"
                placeholder="Enter dashboard password"
                required
              />
              {error && (
                <p className="mt-2 text-sm text-red-600">{error}</p>
              )}
            </div>
            
            <button
              type="submit"
              className="w-full bg-sanctuary-900 text-white py-2 px-4 rounded-md hover:bg-sanctuary-800 transition-colors duration-200"
            >
              Access Dashboard
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="bg-sanctuary-100 px-4 py-2 flex justify-between items-center">
        <span className="text-sm text-sanctuary-700">Dashboard Mode</span>
        <button
          onClick={handleLogout}
          className="text-sm text-sanctuary-600 hover:text-sanctuary-800 underline"
        >
          Logout
        </button>
      </div>
      {children}
    </div>
  );
};

export default PasswordProtection;