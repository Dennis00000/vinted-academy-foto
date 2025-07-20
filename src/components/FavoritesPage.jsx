import React from 'react';
import ImageGrid from './ImageGrid';

export default function FavoritesPage({ images, favoritedImageIds, onToggleFavorite, onBackToGallery }) {
  return (
    <div style={{ padding: '2rem 0' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Your Favorites ({images.length})</h2>
      {images.length === 0 ? (
        <div className="end-message">
          No favorites yet. Click the heart on any image!<br />
          <button className="reload-btn" style={{marginTop: '1.2rem'}} onClick={onBackToGallery}>
            Back to Gallery
          </button>
        </div>
      ) : (
        <>
          <ImageGrid
            images={images}
            favoritedImageIds={images.map(img => img.id)}
            onToggleFavorite={onToggleFavorite}
          />
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
            <button className="reload-btn" onClick={onBackToGallery}>
              Back to Gallery
            </button>
          </div>
        </>
      )}
    </div>
  );
} 