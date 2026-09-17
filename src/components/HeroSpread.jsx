import React from 'react';
import { SPREADS } from '../data/portfolioData';

export default function HeroSpread({ onSelectImage }) {
  const { title, images } = SPREADS.heroSpread;

  return (
    <section className="editorial-hero-spread" id="hero">
      <div className="hero-title-wrap">
        <h1 className="hero-title">{title}</h1>
      </div>

      <div className="hero-photo-spread">
        {/* Photo 01: Stone monolith in nature */}
        <div 
          className="photo-item clickable"
          onClick={() => onSelectImage(images[0])}
        >
          <div className="photo-frame frame-portrait">
            <img 
              src={images[0].url} 
              alt={images[0].title} 
              className="photo-img" 
              loading="eager"
            />
          </div>
          <div className="photo-caption-bar">
            <span className="photo-idx">{images[0].number}</span>
            <span className="photo-meta-text">{images[0].caption}</span>
          </div>
        </div>

        {/* Photo 02: Lychee Still Life with side text label */}
        <div 
          className="photo-item photo-item-center clickable"
          onClick={() => onSelectImage(images[1])}
        >
          <div className="photo-annotation-wrap">
            <div className="photo-frame frame-square" style={{ flex: 1 }}>
              <img 
                src={images[1].url} 
                alt={images[1].title} 
                className="photo-img" 
                loading="eager"
              />
            </div>
            <div className="annotation-text">
              <div>OSKAR, ALTERED</div>
              <div>CARBON 2026</div>
            </div>
          </div>
          <div className="photo-caption-bar">
            <span className="photo-idx"></span>
            <span className="photo-meta-text">STILL LIFE STUDY</span>
          </div>
        </div>

        {/* Photo 03: Fluid texture / light vortex */}
        <div 
          className="photo-item clickable"
          onClick={() => onSelectImage(images[2])}
        >
          <div className="photo-frame frame-tall">
            <img 
              src={images[2].url} 
              alt={images[2].title} 
              className="photo-img" 
              loading="eager"
            />
          </div>
          <div className="photo-caption-bar">
            <span className="photo-idx">{images[2].number}</span>
            <span className="photo-meta-text">{images[2].caption}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
