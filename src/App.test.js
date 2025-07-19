import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import ImageCard from './components/ImageCard';

test('renders hero title', () => {
  render(<App />);
  expect(screen.getByText(/Discover Amazing Photography/i)).toBeInTheDocument();
});

test('favorite button toggles favorite status', () => {
  const photo = {
    id: 1,
    src: { small: '', medium: '', large: '' },
    alt: 'Test Image',
    photographer: 'Jane Doe',
  };
  const onToggleFavorite = jest.fn();
  render(
    <ImageCard photo={photo} isFavorited={false} onToggleFavorite={onToggleFavorite} />
  );

  fireEvent.mouseOver(screen.getByAltText(/Jane Doe|Test Image/i));
  const favBtn = screen.getByRole('button', { name: /favorite/i });
  fireEvent.click(favBtn);
  expect(onToggleFavorite).toHaveBeenCalledWith(1);
});
