import React, { createContext, useContext, useState, useEffect } from 'react';
import toast from 'react-hot-toast';

const PortfolioContext = createContext();

export const usePortfolio = () => useContext(PortfolioContext);

export const PortfolioProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isEditMode, setIsEditMode] = useState(false);
  const [githubToken, setGithubToken] = useState('');

  // We hardcode the repo info. In a real app it might be configured elsewhere.
  const REPO_OWNER = 'NikhilKH512001';
  const REPO_NAME = 'portfolio';
  const FILE_PATH = 'public/portfolio.json'; 

  useEffect(() => {
    // Fetch initial data
    fetch(`${import.meta.env.BASE_URL}portfolio.json?t=${new Date().getTime()}`)
      .then(res => res.json())
      .then(json => {
        setData(json);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to load portfolio data", err);
        setLoading(false);
      });
  }, []);

  const loginAdmin = async (token) => {
    const toastId = toast.loading("Verifying token...");
    try {
      const response = await fetch('https://api.github.com/user', {
        headers: {
          'Authorization': `token ${token}`,
          'Accept': 'application/vnd.github.v3+json'
        }
      });
      if (response.ok) {
        setGithubToken(token);
        setIsEditMode(true);
        toast.success("Admin mode activated!", { id: toastId });
        return true;
      } else {
        toast.error("Invalid GitHub token!", { id: toastId });
        return false;
      }
    } catch (error) {
      console.error(error);
      toast.error("Network error during verification.", { id: toastId });
      return false;
    }
  };

  const updateData = (section, newData) => {
    setData(prev => ({
      ...prev,
      [section]: newData
    }));
  };

  const saveToGithub = async () => {
    if (!githubToken) {
      toast.error("No GitHub token found!");
      return;
    }

    const toastId = toast.loading("Saving changes to GitHub...");

    try {
      // 1. Get the current file SHA
      const getResponse = await fetch(`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${FILE_PATH}`, {
        headers: {
          'Authorization': `token ${githubToken}`,
          'Accept': 'application/vnd.github.v3+json'
        }
      });
      
      let sha = null;
      if (getResponse.ok) {
        const fileData = await getResponse.json();
        sha = fileData.sha;
      }

      // 2. Prepare the updated JSON content (base64 encoded)
      const contentStr = JSON.stringify(data, null, 2);
      // use btoa and encodeURIComponent to handle utf-8 properly
      const base64Content = btoa(unescape(encodeURIComponent(contentStr)));

      // 3. Put the new content
      const putResponse = await fetch(`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${FILE_PATH}`, {
        method: 'PUT',
        headers: {
          'Authorization': `token ${githubToken}`,
          'Accept': 'application/vnd.github.v3+json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: "Update portfolio data via Admin UI",
          content: base64Content,
          sha: sha // required for updating existing files
        })
      });

      if (!putResponse.ok) {
        throw new Error(await putResponse.text());
      }

      toast.success("Changes saved successfully! GitHub Action will deploy shortly.", { id: toastId });
      setIsEditMode(false);
    } catch (error) {
      console.error(error);
      toast.error("Failed to save changes. Check your token.", { id: toastId });
    }
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <PortfolioContext.Provider value={{ data, updateData, isEditMode, loginAdmin, saveToGithub }}>
      {children}
    </PortfolioContext.Provider>
  );
};
