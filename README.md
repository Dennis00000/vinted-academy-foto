# Vinted Academy Foto

A modern, responsive image gallery inspired by Pexels and Pinterest. Browse an endless stream of images and mark your favorites for later viewing.

## Features
- Infinite scroll of curated images from the Pexels API
- Mark images as favorites (persisted in your browser)
- Responsive, modern UI (desktop, tablet, mobile)
- Custom CSS, no UI frameworks
- Lazy loading and responsive images
- Tests for key components

## Tech Stack

- React 19 (functional components, hooks)
- Custom CSS (no frameworks)
- Pexels API
- LocalStorage for persistence
- React Testing Library & Jest

## Getting Started

### 1. Clone the repository
```sh
git clone <repo-url>
cd vinted-academy-Foto
```

### 2. Install dependencies
```sh
npm install
```

### 3. Get your Pexels API Key
- Register for a free API key at [Pexels API](https://www.pexels.com/api/)
- Copy your API key

### 4. Configure your API Key
- Create a `.env` file in the project root:
  ```
  REACT_APP_PEXELS_API_KEY=your_pexels_api_key_here
  ```

### 5. Start the development server
```sh
npm start
```

### 6. Run Tests
```sh
npm test
```

### 7. Build for Production
```sh
npm run build
```

## Project Structure
- `src/components/` - React components
- `src/utils/` - API utilities
- `src/styles/` - CSS files
- `src/tests/` - Test files

## Design & Architecture
- Inspired by Pexels and Pinterest for layout and UX
- Uses React hooks for state and effects
- Infinite scroll and favoriting logic in custom components
- Responsive design with CSS Grid/Flexbox and media queries

## Known Issues / Improvements
- Add search functionality
- Improve error handling for API/network issues
- Enhance accessibility

## License
MIT 