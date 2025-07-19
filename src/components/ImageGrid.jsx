import React from 'react';
import ImageCard from './ImageCard';
import '../styles/ImageGrid.css';

export default function ImageGrid({ images, favoritedImageIds, onToggleFavorite }) {
  return (
    <div className="image-grid">
      {images.map(photo => (
        <ImageCard
          key={photo.id}
          photo={photo}
          isFavorited={favoritedImageIds.includes(photo.id)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
} 