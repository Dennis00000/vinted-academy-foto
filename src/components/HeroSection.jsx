import React from 'react';
import '../styles/HeroSection.css';

export default function HeroSection() {
  return (
    <section className="hero-section split-hero">
      <div className="hero-left">
        <h1 className="hero-title highlight">Discover Amazing Photography</h1>
        <p className="hero-subtitle">Explore thousands of high-quality photos from talented photographers around the world through Pexels.</p>
        <div className="hero-stats">
          <div><span className="stat-main">1M+</span><br /><span className="stat-label">Photos</span></div>
          <div><span className="stat-main">50K+</span><br /><span className="stat-label">Artists</span></div>
          <div><span className="stat-main">Free</span><br /><span className="stat-label">Forever</span></div>
        </div>
      </div>
      <div className="hero-right" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <img src="/camera.gif" alt="Classic camera illustration" style={{ width: '480px', maxWidth: '95vw', height: 'auto', borderRadius: '2.5rem', boxShadow: '0 8px 32px rgba(0,0,0,0.13)' }} />
      </div>
    </section>
  );
} 