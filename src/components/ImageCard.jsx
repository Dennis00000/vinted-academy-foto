import React from 'react';
import FavoriteButton from './FavoriteButton';
import '../styles/ImageCard.css';

export default function ImageCard({ photo, isFavorited, onToggleFavorite }) {
  return (
    <div className="image-card">
      <img
        srcSet={`
          ${photo.src.small} 480w,
          ${photo.src.medium} 800w,
          ${photo.src.large} 1200w
        `}
        sizes="(max-width: 600px) 480px, (max-width: 1000px) 800px, 1200px"
        src={photo.src.medium}
        alt={`By ${photo.photographer}`}
        loading="lazy"
        className="image"
      />
      <div className="overlay fancy-overlay">
        <div className="circle-highlight" />
        <div className="overlay-content">
          <div className="photo-title">{photo.alt || 'Untitled'}</div>
          <div className="photo-photographer">{photo.photographer}</div>
          <button
            className={`fancy-fav-btn${isFavorited ? ' favorited' : ''}`}
            onClick={() => onToggleFavorite(photo.id)}
          >
            {isFavorited ? 'Favorited' : 'Favorite'}
          </button>
        </div>
      </div>
    </div>
  );
} 