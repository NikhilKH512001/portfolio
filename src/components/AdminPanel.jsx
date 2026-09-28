import React, { useState } from 'react';
import { usePortfolio } from '../contexts/PortfolioContext';
import { Lock } from 'lucide-react';

const AdminPanel = () => {
  const { data, isEditMode, loginAdmin, updateData, saveToGithub } = usePortfolio();
  const [tokenInput, setTokenInput] = useState('');
  const [showLogin, setShowLogin] = useState(false);
  const [jsonText, setJsonText] = useState('');

  if (!isEditMode && !showLogin) {
    return (
      <div className="flex justify-end bg-gray-50 dark:bg-brand-gray pr-4 pb-2">
        <button 
          onClick={() => setShowLogin(true)}
          className="text-gray-400 dark:text-gray-600 opacity-20 hover:opacity-100 transition-opacity p-1"
          title="Admin Login"
        >
          <Lock size={12} />
        </button>
      </div>
    );
  }

  if (!isEditMode && showLogin) {
    return (
      <div className="fixed bottom-4 right-4 z-50 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700">
        <h3 className="text-sm font-bold mb-2 dark:text-white">Admin Login</h3>
        <input 
          type="password" 
          placeholder="GitHub PAT" 
          value={tokenInput}
          onChange={(e) => setTokenInput(e.target.value)}
          className="block w-full text-sm p-2 mb-2 border rounded dark:bg-gray-700 dark:text-white dark:border-gray-600"
        />
        <div className="flex gap-2">
          <button 
            onClick={() => {
              loginAdmin(tokenInput);
              setJsonText(JSON.stringify(data, null, 2));
            }}
            className="bg-brand-primary text-white px-3 py-1 text-sm rounded"
          >
            Login
          </button>
          <button 
            onClick={() => setShowLogin(false)}
            className="bg-gray-500 text-white px-3 py-1 text-sm rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }

  // Edit Mode UI
  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-900 w-full max-w-4xl h-[80vh] rounded-xl flex flex-col overflow-hidden">
        <div className="p-4 border-b dark:border-gray-700 flex justify-between items-center">
          <h2 className="text-xl font-bold dark:text-white">Portfolio Content Editor</h2>
          <div className="space-x-2">
            <button 
              onClick={() => {
                try {
                  const parsed = JSON.parse(jsonText);
                  // Update context data (this updates the UI instantly, though underneath modal)
                  Object.keys(parsed).forEach(key => updateData(key, parsed[key]));
                  saveToGithub();
                } catch(e) {
                  alert("Invalid JSON data!");
                }
              }}
              className="bg-green-600 text-white px-4 py-2 rounded font-medium"
            >
              Save to GitHub
            </button>
            <button 
              onClick={() => window.location.reload()}
              className="bg-red-600 text-white px-4 py-2 rounded font-medium"
            >
              Close
            </button>
          </div>
        </div>
        <div className="p-4 flex-1 flex flex-col">
          <p className="text-sm text-gray-500 mb-2">Edit the JSON data below. Be careful not to break the structure. The changes will be committed to your GitHub repo.</p>
          <textarea 
            value={jsonText}
            onChange={(e) => setJsonText(e.target.value)}
            className="w-full flex-1 font-mono text-sm p-4 bg-gray-100 dark:bg-gray-800 dark:text-gray-300 rounded outline-none border focus:border-brand-primary"
            spellCheck="false"
          />
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
