import { useState, useEffect } from 'react';

export const useOpenAIKey = () => {
  const [hasApiKey, setHasApiKey] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const key = localStorage.getItem('OPENAI_API_KEY');
    setHasApiKey(!!key);
  }, []);

  const checkAndShowModal = () => {
    const key = localStorage.getItem('OPENAI_API_KEY');
    if (!key) {
      setShowModal(true);
      return false;
    }
    return true;
  };

  return {
    hasApiKey,
    showModal,
    setShowModal,
    checkAndShowModal
  };
}; 