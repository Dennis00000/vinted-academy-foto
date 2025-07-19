const API_KEY = process.env.REACT_APP_PEXELS_API_KEY;
const BASE_URL = 'https://api.pexels.com/v1';

export function getRandomPage(max = 100) {
  return Math.floor(Math.random() * max) + 1;
}

export async function fetchCuratedPhotos(page = 1, perPage = 15) {
  const res = await fetch(`${BASE_URL}/curated?page=${page}&per_page=${perPage}`, {
    headers: { Authorization: API_KEY }
  });
  if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
  return res.json();
} 