import React from 'react';
import '../styles/FavoriteButton.css';

function HeartIcon({ filled }) {
  return (
    <svg width="20" height="20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M24.5 28.5C32.5 20.5 47.5 20.5 50 32.5C52.5 20.5 67.5 20.5 75.5 28.5C83.5 36.5 83.5 51.5 50 77.5C16.5 51.5 16.5 36.5 24.5 28.5Z" stroke="#3a4251" strokeWidth="4" fill={filled ? '#4fc3f7' : '#fff'} />
      <path d="M35 75 Q50 90 65 75" stroke="#4fc3f7" strokeWidth="4" fill="none"/>
    </svg>
  );
}

export default function FavoriteButton({ isFavorited, onClick }) {
  return (
    <button
      className={`favorite-btn${isFavorited ? ' favorited' : ''}`}
      onClick={onClick}
      aria-label={isFavorited ? 'Unfavorite' : 'Favorite'}
    >
      <HeartIcon filled={isFavorited} />
    </button>
  );
} 