// Utility functions for managing favorite images in localStorage

export function loadFavorites() {
  const saved = localStorage.getItem('favoriteImages');
  return saved ? JSON.parse(saved) : [];
}

export function saveFavorites(favorites) {
  localStorage.setItem('favoriteImages', JSON.stringify(favorites));
} 