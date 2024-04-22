// LanguageDropdown.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from './languageSlice';

const LanguageDropdown = () => {
  const dispatch = useDispatch();
  const currentLanguage = useSelector((state) => state.language.language);

  const handleLanguageChange = (language) => {
    dispatch(setLanguage(language));
  };

  return (
    <div>
      <label htmlFor="language-select">Select Language:</label>
      <select
        id="language-select"
        value={currentLanguage}
        onChange={(e) => handleLanguageChange(e.target.value)}
      >
        <option value="en">English</option>
        <option value="fr">French</option>
        <option value="es">Spanish</option>
        {/* Add more language options as needed */}
      </select>
    </div>
  );
};

export default LanguageDropdown;
