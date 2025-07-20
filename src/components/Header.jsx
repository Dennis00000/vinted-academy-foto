import React from 'react';
import '../styles/Header.css';

function SimpleToggleIcon({ darkMode }) {
  return (
    <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="4" y="12" width="40" height="24" rx="12" fill="#fff" stroke="#000" strokeWidth="2"/>
      <circle cx={darkMode ? 36 : 12} cy="24" r="10" fill={darkMode ? '#111' : '#fff'} stroke="#000" strokeWidth="2"/>
    </svg>
  );
}

function FolderStarIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="4" y="16" width="56" height="40" rx="6" fill="#ffe066"/>
      <rect x="8" y="8" width="48" height="16" rx="4" fill="#ffd600"/>
      <polygon points="32,28 35,36 43,36 36.5,41 39,49 32,44.5 25,49 27.5,41 21,36 29,36" fill="#ffb300"/>
    </svg>
  );
}

export default function Header({ darkMode, onToggleDarkMode, showFavorites, onToggleFavoritesView, favoritesCount }) {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="logo">Vinted Academy Foto</div>
        <nav className="header-actions">
          <button
            className={`favorites-nav-btn${showFavorites ? ' active' : ''}`}
            onClick={onToggleFavoritesView}
            aria-label="Show favorites"
          >
            <FolderStarIcon />
            {favoritesCount > 0 && (
              <span className="favorites-count">{favoritesCount}</span>
            )}
          </button>
          <button
            className="darkmode-toggle-btn"
            onClick={onToggleDarkMode}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <SimpleToggleIcon darkMode={darkMode} />
          </button>
        </nav>
      </div>
    </header>
  );
} 