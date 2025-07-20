import React, { useEffect, useState, useCallback, useRef } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ImageGrid from './components/ImageGrid';
import FavoritesPage from './components/FavoritesPage';
import { fetchCuratedPhotos, getRandomPage } from './utils/pexelsApi';
import { loadFavorites, saveFavorites } from './utils/favoritesStorage';
import './App.css';

const IMAGES_PER_PAGE = 15;
const MAX_RANDOM_PAGE = 100;

function App() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  // Store favorite images as objects
  const [favoriteImages, setFavoriteImages] = useState(loadFavorites);
  const favoritedImageIds = favoriteImages.map(img => img.id);
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });
  const [showFavorites, setShowFavorites] = useState(false);
  const [randomSeed, setRandomSeed] = useState(getRandomPage(MAX_RANDOM_PAGE));
  const [showScrollTop, setShowScrollTop] = useState(false);
  const scrollTopRef = useRef();
  const [error, setError] = useState(null);

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const loadImages = useCallback(async (reset = false, random = false) => {
    setIsLoading(true);
    setError(null);
    try {
      let nextPage = page;
      let seed = randomSeed;
      if (reset || random) {
        nextPage = 1;
        seed = getRandomPage(MAX_RANDOM_PAGE);
        setRandomSeed(seed);
      }
      const data = await fetchCuratedPhotos(seed + nextPage - 1, IMAGES_PER_PAGE);
      setImages(prev => (reset || random ? data.photos : [...prev, ...data.photos]));
      setPage(nextPage + 1);
      setHasMore(data.photos.length === IMAGES_PER_PAGE);
      if (reset) window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (e) {
      setError('Failed to load images. Please try again.');
      setHasMore(false);
    } finally {
      setIsLoading(false);
    }
  }, [page, randomSeed]);

  useEffect(() => {
    loadImages(true, true);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (showFavorites) return;
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.scrollHeight - 200
      ) {
        if (!isLoading && hasMore) loadImages();
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoading, hasMore, showFavorites, loadImages]);

  // Sync favoriteImages with localStorage
  useEffect(() => {
    saveFavorites(favoriteImages);
  }, [favoriteImages]);

  useEffect(() => {
    const onScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Add/remove full image objects to favorites
  const handleToggleFavorite = id => {
    setFavoriteImages(favs => {
      const isFav = favs.some(img => img.id === id);
      if (isFav) {
        return favs.filter(img => img.id !== id);
      } else {
        const img = images.find(img => img.id === id);
        if (img) {
          return [...favs, img];
        } else {
          return favs;
        }
      }
    });
  };

  const handleToggleDarkMode = () => setDarkMode(dm => !dm);
  const handleToggleFavoritesView = () => setShowFavorites(fav => !fav);
  const handleReloadImages = () => {
    setPage(1);
    setHasMore(true);
    loadImages(true, true);
  };

  return (
    <div className="App">
      <Header
        darkMode={darkMode}
        onToggleDarkMode={handleToggleDarkMode}
        showFavorites={showFavorites}
        onToggleFavoritesView={handleToggleFavoritesView}
        favoritesCount={favoriteImages.length}
      />
      {showFavorites ? (
        <FavoritesPage
          images={favoriteImages}
          favoritedImageIds={favoritedImageIds}
          onToggleFavorite={handleToggleFavorite}
          onBackToGallery={handleToggleFavoritesView}
        />
      ) : (
        <>
          <HeroSection />
          <div style={{ display: 'flex', justifyContent: 'center', margin: '1.5rem 0 0 0' }}>
            <button className="reload-btn" onClick={handleReloadImages} disabled={isLoading}>
              {isLoading ? 'Loading...' : 'Reload Images'}
            </button>
          </div>
          {images.length === 0 && (
            <div className="end-message">No images to display. Please try again later.</div>
          )}
          {error && <div className="end-message" style={{ color: '#e53935' }}>{error}</div>}
          {images.length > 0 && (
            <ImageGrid
              images={images}
              favoritedImageIds={favoritedImageIds}
              onToggleFavorite={handleToggleFavorite}
            />
          )}
          {isLoading && (
            <div className="loading loading-spinner">
              <span className="spinner" /> Loading...
            </div>
          )}
        </>
      )}
      {showScrollTop && (
        <button
          className="scroll-to-top-btn"
          onClick={handleScrollToTop}
          aria-label="Scroll to top"
          ref={scrollTopRef}
        >
          ↑
        </button>
      )}
    </div>
  );
}

export default App;
